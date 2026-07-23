import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';

export interface ToggleOptions {
  x?: number;
  y?: number;
}

interface ModeContextType {
  isDark: boolean;
  toggleMode: (opts?: ToggleOptions | React.MouseEvent) => void;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export function ModeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem('isDarkMode');
    if (saved !== null) {
      try {
        return JSON.parse(saved);
      } catch {
        return true;
      }
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const toggleMode = useCallback((opts?: ToggleOptions | React.MouseEvent) => {
    let x = window.innerWidth - 60;
    let y = 40;

    if (opts) {
      if ('clientX' in opts && typeof opts.clientX === 'number') {
        x = opts.clientX;
        y = opts.clientY;
      } else if (typeof (opts as ToggleOptions).x === 'number' && typeof (opts as ToggleOptions).y === 'number') {
        x = (opts as ToggleOptions).x!;
        y = (opts as ToggleOptions).y!;
      }
    }

    const isGoingLight = isDark; // true if current mode is Dark, going to Light

    // Check if View Transitions API is supported
    if (typeof document !== 'undefined' && 'startViewTransition' in document) {
      const maxRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      ) + 60;

      const nextIsDark = !isGoingLight;

      // @ts-expect-error startViewTransition is a native browser API
      const transition = document.startViewTransition(() => {
        setIsDark(nextIsDark);
        localStorage.setItem('isDarkMode', JSON.stringify(nextIsDark));
        document.documentElement.setAttribute('data-mode', nextIsDark ? 'dark' : 'light');
      });

      transition.ready.then(() => {
        const clipPathAnimation = isGoingLight
          ? [`circle(0px at ${x}px ${y}px)`, `circle(${maxRadius}px at ${x}px ${y}px)`]
          : [`circle(${maxRadius}px at ${x}px ${y}px)`, `circle(0px at ${x}px ${y}px)`];

        const targetPseudo = isGoingLight
          ? '::view-transition-new(root)'
          : '::view-transition-old(root)';

        document.documentElement.animate(
          {
            clipPath: clipPathAnimation,
          },
          {
            duration: 550,
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
            pseudoElement: targetPseudo,
          }
        );
      });
    } else {
      // Fallback for browsers without View Transitions API
      const nextIsDark = !isDark;
      setIsDark(nextIsDark);
      localStorage.setItem('isDarkMode', JSON.stringify(nextIsDark));
      document.documentElement.setAttribute('data-mode', nextIsDark ? 'dark' : 'light');
    }
  }, [isDark]);

  useEffect(() => {
    document.documentElement.setAttribute('data-mode', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <ModeContext.Provider value={{ isDark, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useModeContext() {
  const context = useContext(ModeContext);
  if (!context) {
    throw new Error('useModeContext must be used within a ModeProvider');
  }
  return context;
}
