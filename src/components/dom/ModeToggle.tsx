import { Sun, Moon } from 'lucide-react';
import { useModeContext } from '../../context/ModeContext';

export default function ModeToggle() {
  const { isDark, toggleMode } = useModeContext();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    toggleMode({ x, y });
  };

  return (
    <button
      onClick={handleClick}
      className="relative flex items-center justify-center p-2 rounded-full glass cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95 group"
      aria-label="Toggle light/dark mode"
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      style={{
        width: '38px',
        height: '38px',
        borderRadius: '9999px',
      }}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-5 h-5 text-amber-300 transition-transform duration-500 rotate-0 group-hover:rotate-45" />
        ) : (
          <Moon className="w-5 h-5 text-indigo-600 transition-transform duration-500 -rotate-12 group-hover:rotate-0" />
        )}
      </div>
    </button>
  );
}
