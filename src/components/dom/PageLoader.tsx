import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  preloadAllProjects, 
  isProjectsCacheAvailable, 
  type PreloadProgressInfo 
} from '../../utils/projectCache';

interface PageLoaderProps {
  onComplete: () => void;
}

export default function PageLoader({ onComplete }: PageLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState('SYSTEM INITIALIZATION');
  const [currentItem, setCurrentItem] = useState('Initializing High-Speed Cache...');
  const [isCached, setIsCached] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const cached = isProjectsCacheAvailable();
    setIsCached(cached);

    let isMounted = true;

    // Run active project preloading & browser caching
    preloadAllProjects((info: PreloadProgressInfo) => {
      if (!isMounted) return;
      setProgress(info.progress);
      setStage(info.stage);
      setCurrentItem(info.currentItem);
    }).then(() => {
      if (!isMounted) return;
      setProgress(100);
      setStage(cached ? 'BROWSER CACHE RESTORED' : 'PROJECTS INGESTION COMPLETE');
      setCurrentItem('13 Project Cards & Links Ready');

      setTimeout(() => {
        onComplete();
        document.body.style.overflow = '';
      }, cached ? 260 : 420);
    });

    return () => {
      isMounted = false;
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  // Brutalist Curtain Slide Up on Exit
  const slideUp = {
    initial: { y: 0 },
    exit: {
      y: "-100%",
      transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="fixed inset-0 z-[9999] flex flex-col justify-between p-6 sm:p-12 pointer-events-auto select-none"
      style={{ backgroundColor: '#1E1E1E', color: '#E4E2DD' }}
    >
      {/* Top Header */}
      <div className="flex items-center justify-between font-mono text-xs uppercase tracking-widest text-[#A8A59E]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-[#DB4A2B]" />
          <span>ASHAZ PATHAN // SYSTEM INGESTION</span>
        </div>
        <span className="px-2 py-0.5 border border-white/20 bg-white/5 text-[11px] font-bold">
          {isCached ? '[CACHED IN BROWSER]' : '[PRELOADING 13 PROJECTS]'}
        </span>
      </div>

      {/* Center Typographic Display */}
      <div className="my-auto flex flex-col items-center text-center max-w-2xl mx-auto w-full px-4">
        {/* Stage Title */}
        <div className="h-10 sm:h-12 overflow-hidden mb-2 relative flex items-center justify-center">
          <motion.p
            key={stage}
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -25, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="font-clash text-xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wider text-[#E4E2DD]"
          >
            {stage}
          </motion.p>
        </div>

        {/* Current Preloading Item / Node */}
        <p className="font-mono text-xs sm:text-sm text-[#DB4A2B] font-bold truncate max-w-md mb-6">
          &gt; {currentItem}
        </p>

        {/* Brutalist Rectangular Progress Track */}
        <div className="w-full max-w-xs sm:max-w-md h-2.5 bg-white/10 border border-white/20 overflow-hidden mb-4 relative">
          <motion.div
            className="h-full bg-[#DB4A2B] absolute left-0 top-0 transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Subtext info */}
        <div className="flex items-center justify-between w-full max-w-xs sm:max-w-md font-mono text-[11px] text-[#A8A59E] mb-6">
          <span>{isCached ? 'CACHED INSTANT BOOT' : 'SAVING TO STORAGE'}</span>
          <span>13 LIVE NODES</span>
        </div>

        {/* Massive Monospaced Counter */}
        <div className="font-clash font-bold text-7xl sm:text-9xl text-white/10 tracking-tighter leading-none select-none">
          {progress.toString().padStart(3, '0')}%
        </div>
      </div>

      {/* Bottom Footer Indicator */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between font-mono text-xs uppercase text-[#A8A59E] border-t border-white/10 pt-4 gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>SWISS BRUTALIST ARCHITECTURE • PERSISTENT BROWSER CACHE</span>
        </div>
        <span className="text-[#DB4A2B] font-bold">
          {isCached ? 'CACHED • READY' : 'PRELOAD & CACHE ACTIVATED'}
        </span>
      </div>
    </motion.div>
  );
}
