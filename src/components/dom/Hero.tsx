import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-24 relative pt-24 pb-16">
      <div className="max-w-4xl z-10 pointer-events-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs sm:text-sm md:text-base tracking-[0.2em] text-accent-primary font-space uppercase mb-3 sm:mb-4"
        >
          Developer Portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 50 }}
          className="text-4xl sm:text-6xl md:text-8xl font-space font-bold leading-[1.1] sm:leading-tight tracking-tighter mb-4 sm:mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          Crafting <span className="gradient-text italic pr-1 sm:pr-4">Digital</span><br />
          Experiences
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg md:text-2xl font-inter max-w-2xl mb-8 sm:mb-12"
          style={{ color: 'var(--text-secondary)' }}
        >
          All my work at one place.
        </motion.p>

        <motion.a
          href="#projects"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="group inline-flex items-center gap-3 px-8 py-4 glass rounded-full transition-all duration-300 font-medium hover:scale-105 w-full sm:w-auto justify-center text-center"
          style={{ borderRadius: '9999px', color: 'var(--text-primary)' }}
        >
          <span>Explore Work</span>
          <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-4 sm:bottom-8 left-4 sm:left-6 md:left-24 flex items-center gap-3 sm:gap-4 text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] font-space"
        style={{ color: 'var(--text-tertiary)' }}
      >
        <div
          className="w-[1px] h-8 sm:h-12 relative overflow-hidden"
          style={{ background: 'var(--glass-border)' }}
        >
          <motion.div
            animate={{
              y: ["-100%", "100%"]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-0 left-0 w-full h-1/2"
            style={{
              background: `linear-gradient(to bottom, transparent, var(--accent-primary), transparent)`
            }}
          />
        </div>
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  );
}
