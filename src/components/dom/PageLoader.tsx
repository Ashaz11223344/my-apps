import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface PageLoaderProps {
  onComplete: () => void;
}

const WORDS = ["CONCEPT", "DESIGN", "DEVELOP", "PERFORMANCE", "IMMERSE"];

export default function PageLoader({ onComplete }: PageLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

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
          }, 600); // Small delay to let the user see "100%"
          return 100;
        }
        // Snappy, realistic loading increments
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

  // SVG path morphing for the liquid bottom edge
  const curve = {
    initial: {
      d: "M0 0 L100 0 L100 100 Q50 100 0 100 Z"
    },
    exit: {
      d: "M0 0 L100 0 L100 100 Q50 0 0 100 Z",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const }
    }
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050508] pointer-events-auto"
    >
      {/* Central Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Pulsing indicator dot */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-3 h-3 rounded-full bg-[#a078ff] mb-8 shadow-[0_0_15px_#a078ff]"
        />

        {/* Word reveal */}
        <div className="h-10 overflow-hidden mb-4 relative flex items-center justify-center">
          <motion.p
            key={wordIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="text-2xl md:text-3xl font-space font-bold tracking-[0.25em] text-white"
          >
            {WORDS[wordIndex]}
          </motion.p>
        </div>

        {/* Loading Bar */}
        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden mb-6 relative">
          <motion.div
            className="h-full bg-gradient-to-r from-[#a078ff] to-[#ff78a0] absolute left-0 top-0"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Huge Digital Counter */}
        <h2 className="text-7xl md:text-9xl font-space font-black tracking-tighter text-white/5 select-none drop-shadow-2xl">
          {progress.toString().padStart(3, '0')}
        </h2>
      </div>

      {/* SVG Liquid Panel (Background underlay for exit warp) */}
      <svg className="absolute top-0 w-full h-[calc(100%+300px)] fill-[#050508] pointer-events-none -z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
        <motion.path variants={curve} initial="initial" exit="exit" />
      </svg>
    </motion.div>
  );
}
