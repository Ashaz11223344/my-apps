import { motion } from 'framer-motion';
import { ArrowDown, FileText, HelpCircle, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-24 relative pt-28 pb-16">
      <div className="max-w-4xl z-10 pointer-events-auto">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs sm:text-sm md:text-base tracking-[0.2em] text-accent-primary font-space uppercase mb-3 sm:mb-4"
        >
          Official Developer Portfolio & Technical Showcase
        </motion.p>

        {/* H1 Title Aligned with Meta Title for SEO */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 50 }}
          className="text-3xl sm:text-5xl md:text-7xl font-space font-bold leading-[1.1] sm:leading-tight tracking-tighter mb-4 sm:mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          <span className="gradient-text uppercase">Ashaz Pathan</span><br />
          <span className="text-xl sm:text-3xl md:text-4xl font-normal block mt-2" style={{ color: 'var(--text-secondary)' }}>
            Computer Engineer & Full-Stack AI Developer
          </span>
        </motion.h1>

        {/* Executive Summary & Definition Paragraph for AEO & GEO */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl font-inter max-w-2xl mb-6 leading-relaxed"
          style={{ color: 'var(--text-secondary)' }}
        >
          Welcome to the personal engineering portfolio of Ashaz Pathan. I design and build modern web applications, 3D interactive interfaces, and intelligent AI tools crafted with precision, performance, and clean architecture.
        </motion.p>

        {/* Top Summary Box (AEO Direct Answer Signal) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="glass p-4 sm:p-5 rounded-2xl mb-8 max-w-2xl border-l-4 border-accent-primary"
        >
          <p className="text-xs font-space font-bold uppercase tracking-wider text-accent-primary mb-1">
            Top Summary & Core Expertise
          </p>
          <p className="text-xs sm:text-sm font-inter leading-normal" style={{ color: 'var(--text-primary)' }}>
            <strong>Specialization:</strong> Full-Stack Web Development, AI/ML Integrations, Three.js 3D Web Graphics, and Computer Engineering. Winner of <strong>1st Place at MAHA-VEER 2026</strong> national competition.
          </p>
        </motion.div>

        {/* Internal Action Links (SEO Internal Linking requirement) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-3.5 glass rounded-full transition-all duration-300 font-medium hover:scale-105 text-sm"
            style={{ borderRadius: '9999px', color: 'var(--text-primary)' }}
          >
            <span>Explore Featured Projects</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform text-accent-primary" />
          </a>

          <Link
            to="/myresume"
            className="group inline-flex items-center gap-2 px-6 py-3.5 glass rounded-full transition-all duration-300 font-medium hover:scale-105 text-sm"
            style={{ borderRadius: '9999px', color: 'var(--text-primary)' }}
          >
            <FileText className="w-4 h-4 text-accent-primary" />
            <span>Interactive Resume</span>
          </Link>

          <a
            href="#faq"
            className="group inline-flex items-center gap-2 px-6 py-3.5 glass rounded-full transition-all duration-300 font-medium hover:scale-105 text-sm"
            style={{ borderRadius: '9999px', color: 'var(--text-primary)' }}
          >
            <HelpCircle className="w-4 h-4 text-accent-primary" />
            <span>FAQ & Services</span>
          </a>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-6 py-3.5 glass rounded-full transition-all duration-300 font-medium hover:scale-105 text-sm"
            style={{ borderRadius: '9999px', color: 'var(--text-primary)' }}
          >
            <Mail className="w-4 h-4 text-accent-primary" />
            <span>Get In Touch</span>
          </a>
        </motion.div>
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
        <span>Scroll to explore portfolio</span>
      </motion.div>
    </section>
  );
}
