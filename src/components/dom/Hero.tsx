import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-6 md:px-24 relative pt-20">
      <div className="max-w-4xl z-10 pointer-events-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm md:text-base tracking-[0.2em] text-[#a078ff] font-space uppercase mb-4"
        >
          Developer Portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 50 }}
          className="text-4xl sm:text-6xl md:text-8xl font-space font-bold leading-tight tracking-tighter mb-6"
        >
          Crafting <span className="gradient-text italic pr-2 md:pr-4">Digital</span><br />
          Experiences
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg md:text-2xl text-gray-400 font-inter max-w-2xl mb-12"
        >
          All my work at one place.
        </motion.p>

        <motion.a
          href="#projects"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="group inline-flex items-center gap-3 px-8 py-4 glass rounded-full hover:bg-white/10 transition-all duration-300 font-medium"
        >
          <span>Explore Work</span>
          <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </motion.a>
      </div>

      {/* Scroll indicator absolute positioned */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-6 md:left-24 flex items-center gap-4 text-xs text-white/50 uppercase tracking-[0.25em] font-space"
      >
        <div className="w-[1px] h-12 bg-white/10 relative overflow-hidden">
          <motion.div
            animate={{
              y: ["-100%", "100%"]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-[#a078ff] to-transparent"
          />
        </div>
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  );
}
