import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useModeContext } from '../../context/ModeContext';

interface PageLoaderProps {
  onComplete: () => void;
}

const WORDS = ["CONCEPT", "DESIGN", "DEVELOP", "PERFORMANCE", "IMMERSE"];

export default function PageLoader({ onComplete }: PageLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const { isDark } = useModeContext();

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = 'hidden';

    // Fast and snappy counter progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
            document.body.style.overflow = '';
          }, 600);
          return 100;
        }
        const increment = Math.floor(Math.random() * 12) + 6;
        return Math.min(prev + increment, 100);
      });
    }, 80);

    return () => {
      clearInterval(interval);
    };
  }, [onComplete]);

  // Sync words with progress increments
  useEffect(() => {
    const sectionSize = 100 / WORDS.length;
    const currentWordIdx = Math.min(
      Math.floor(progress / sectionSize),
      WORDS.length - 1
    );
    setWordIndex(currentWordIdx);
  }, [progress]);

  // Slide container upwards on exit
  const slideUp = {
    initial: {
      y: 0
    },
    exit: {
      y: "-100vh",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const, delay: 0.1 }
    }
  };

  // Smooth continuous circular liquid curve without sharp box corners
  const curve = {
    initial: {
      d: "M0 0 L100 0 C100 90, 80 120, 50 120 C20 120, 0 90, 0 0 Z"
    },
    exit: {
      d: "M0 0 L100 0 C100 30, 80 0, 50 0 C20 0, 0 30, 0 0 Z",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const }
    }
  };

  // Theme-aware colors matching active mode
  const loaderBg = isDark ? '#0f0a1a' : '#f3f0ff';
  const textColor = isDark ? '#fffbfe' : '#0f172a';
  const counterColor = isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(15, 23, 42, 0.08)';
  const pulseColor = isDark ? '#d0bcff' : '#6d28d9';

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center pointer-events-auto"
      style={{ backgroundColor: loaderBg }}
    >
      {/* Central Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Pulsing indicator dot */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-3 h-3 rounded-full mb-8"
          style={{
            backgroundColor: pulseColor,
            boxShadow: `0 0 15px ${pulseColor}`
          }}
        />

        {/* Word reveal */}
        <div className="h-10 overflow-hidden mb-4 relative flex items-center justify-center">
          <motion.p
            key={wordIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="text-2xl md:text-3xl font-space font-bold tracking-[0.25em]"
            style={{ color: textColor }}
          >
            {WORDS[wordIndex]}
          </motion.p>
        </div>

        {/* Loading Bar */}
        <div
          className="w-48 h-1 rounded-full overflow-hidden mb-6 relative"
          style={{ background: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(15, 23, 42, 0.1)' }}
        >
          <motion.div
            className="h-full absolute left-0 top-0"
            style={{
              width: `${progress}%`,
              background: isDark
                ? 'linear-gradient(to right, #a078ff, #ff78a0)'
                : 'linear-gradient(to right, #6d28d9, #0284c7)'
            }}
          />
        </div>

        {/* Digital Counter */}
        <h2
          className="text-7xl md:text-9xl font-space font-black tracking-tighter select-none drop-shadow-2xl"
          style={{ color: counterColor }}
        >
          {progress.toString().padStart(3, '0')}
        </h2>
      </div>

      {/* SVG Liquid Panel (Background underlay for exit warp) */}
      <svg
        className="absolute top-0 w-full h-[calc(100%+300px)] pointer-events-none -z-10"
        style={{ fill: loaderBg }}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <motion.path variants={curve} initial="initial" exit="exit" />
      </svg>
    </motion.div>
  );
}
