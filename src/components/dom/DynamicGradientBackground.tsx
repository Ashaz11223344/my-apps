import { useEffect, useRef } from 'react';

/**
 * DynamicGradientBackground
 * High-performance, hardware-accelerated dynamic living gradient.
 * Features:
 * - Fluid organic orbs with soft feathered radial gradients (#DB4A2B, #F8A348, #FF89A9).
 * - Smooth CSS keyframe translations and breathing pulses.
 * - Subtle, throttled mouse-reactivity for immersive tactile depth.
 * - Zero heavy blur filter penalty: utilizes GPU-native radial gradient falloff for 120 FPS performance.
 */
interface DynamicGradientBackgroundProps {
  isResume?: boolean;
}

export default function DynamicGradientBackground({ isResume = false }: DynamicGradientBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseTargetRef = useRef({ x: 0, y: 0 });
  const mouseCurrentRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized mouse coords from center (-1 to 1)
      const { innerWidth, innerHeight } = window;
      mouseTargetRef.current = {
        x: (e.clientX / innerWidth - 0.5) * 2,
        y: (e.clientY / innerHeight - 0.5) * 2,
      };
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Smooth lerp loop for gentle fluid mouse parallax
    const loop = () => {
      mouseCurrentRef.current.x += (mouseTargetRef.current.x - mouseCurrentRef.current.x) * 0.04;
      mouseCurrentRef.current.y += (mouseTargetRef.current.y - mouseCurrentRef.current.y) * 0.04;

      if (containerRef.current) {
        const mx = mouseCurrentRef.current.x * 24;
        const my = mouseCurrentRef.current.y * 24;
        containerRef.current.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none select-none overflow-hidden z-0 transition-colors duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
      style={{
        backgroundColor: isResume ? '#DDD8CE' : '#E4E2DD',
      }}
    >
      {/* Subtle Noise / Paper Texture Grain Overlay */}
      <div
        className="absolute inset-0 mix-blend-overlay pointer-events-none transition-all duration-1000"
        style={{
          opacity: isResume ? 0.05 : 0.035,
          backgroundImage: `radial-gradient(#1E1E1E 1px, transparent 1px)`,
          backgroundSize: isResume ? '28px 28px' : '24px 24px',
        }}
      />

      {/* Interactive Parallax Canvas Layer */}
      <div
        ref={containerRef}
        className="absolute inset-[-10%] w-[120%] h-[120%] will-change-transform"
      >
        {/* Orb 1: Primary Red-Orange (#DB4A2B) - Dynamic morphing position and aura */}
        <div
          className="absolute rounded-full dynamic-orb-1 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            width: isResume ? '55vw' : '70vw',
            height: isResume ? '55vw' : '70vw',
            maxWidth: '1000px',
            maxHeight: '1000px',
            top: isResume ? '6%' : '-8%',
            left: isResume ? '48%' : '-12%',
            background: isResume
              ? 'radial-gradient(circle at center, rgba(219, 74, 43, 0.32) 0%, rgba(248, 163, 72, 0.16) 40%, transparent 70%)'
              : 'radial-gradient(circle at center, rgba(219, 74, 43, 0.45) 0%, rgba(219, 74, 43, 0.25) 35%, rgba(248, 163, 72, 0.12) 60%, transparent 75%)',
            mixBlendMode: 'multiply',
          }}
        />

        {/* Orb 2: Warm Radiant Orange (#F8A348) - Breathing pulse repositioning */}
        <div
          className="absolute rounded-full dynamic-orb-2 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            width: isResume ? '60vw' : '65vw',
            height: isResume ? '60vw' : '65vw',
            maxWidth: '900px',
            maxHeight: '900px',
            top: isResume ? '48%' : '20%',
            right: isResume ? '38%' : '-12%',
            background: isResume
              ? 'radial-gradient(circle at center, rgba(248, 163, 72, 0.35) 0%, rgba(219, 74, 43, 0.16) 45%, transparent 70%)'
              : 'radial-gradient(circle at center, rgba(248, 163, 72, 0.50) 0%, rgba(248, 163, 72, 0.28) 40%, rgba(255, 137, 169, 0.12) 60%, transparent 75%)',
            mixBlendMode: 'multiply',
          }}
        />

        {/* Orb 3: Soft Pink (#FF89A9) - Morphing atmospheric glow */}
        <div
          className="absolute rounded-full dynamic-orb-3 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            width: isResume ? '50vw' : '60vw',
            height: isResume ? '50vw' : '60vw',
            maxWidth: '850px',
            maxHeight: '850px',
            bottom: isResume ? '8%' : '-12%',
            left: isResume ? '-6%' : '12%',
            background: isResume
              ? 'radial-gradient(circle at center, rgba(255, 137, 169, 0.30) 0%, rgba(248, 163, 72, 0.14) 45%, transparent 70%)'
              : 'radial-gradient(circle at center, rgba(255, 137, 169, 0.45) 0%, rgba(248, 163, 72, 0.22) 40%, rgba(219, 74, 43, 0.08) 60%, transparent 75%)',
            mixBlendMode: 'multiply',
          }}
        />

        {/* Orb 4: Deep Ambient Warm Core */}
        <div
          className="absolute rounded-full dynamic-orb-4 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            width: isResume ? '52vw' : '50vw',
            height: isResume ? '52vw' : '50vw',
            maxWidth: '700px',
            maxHeight: '700px',
            top: isResume ? '18%' : '38%',
            left: isResume ? '8%' : '32%',
            background: isResume
              ? 'radial-gradient(circle at center, rgba(219, 74, 43, 0.20) 0%, rgba(248, 163, 72, 0.10) 40%, transparent 70%)'
              : 'radial-gradient(circle at center, rgba(219, 74, 43, 0.32) 0%, rgba(248, 163, 72, 0.18) 45%, transparent 70%)',
            mixBlendMode: 'multiply',
          }}
        />
      </div>
    </div>
  );
}
