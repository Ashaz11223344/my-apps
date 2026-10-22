import { motion } from 'framer-motion';
import { ArrowDown, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between pt-28 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-8 md:px-16 lg:px-24 overflow-hidden select-none bg-transparent"
      style={{ color: '#1E1E1E' }}
    >

      {/* Top Metadata Strip */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-[#1E1E1E]/20 pb-4 text-xs font-satoshi font-bold uppercase tracking-[0.15em] text-[#444444]"
      >
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 bg-[#DB4A2B]" />
          <span>ASHAZ APPS &bull; PORTFOLIO 2026</span>
        </div>

        <div className="flex items-center gap-2 text-[#DB4A2B]">
          <MapPin className="w-3.5 h-3.5" />
          <span>NASHIK, MAHARASHTRA, INDIA</span>
        </div>

        <div className="hidden lg:block font-mono text-[11px] text-[#666666]">
          [1ST PLACE MAHA-VEER 2026 WINNER]
        </div>
      </motion.div>

      {/* Hero Massive Typography: 'Clash Display', 18vw size, uppercase, line-height 0.75, 2nd line indented 15vw */}
      <div className="relative z-10 my-auto py-6 sm:py-8">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col font-clash uppercase font-bold text-[#1E1E1E] tracking-[-0.05em] leading-[0.75]"
          style={{
            fontSize: 'clamp(3.8rem, 16vw, 18vw)',
          }}
        >
          {/* First Line */}
          <span className="block transform hover:translate-x-2 transition-transform duration-300">
            ASHAZ
          </span>

          {/* Second Line Indented 15vw */}
          <span
            className="block pl-[10vw] sm:pl-[15vw] text-[#1E1E1E] transform hover:translate-x-2 transition-transform duration-300"
          >
            PATHAN
          </span>
          <span className="sr-only"> — Full-Stack AI Developer & Software Engineer</span>
        </motion.h1>
      </div>

      {/* AEO / GEO Direct Answer & Executive Summary Block */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 my-4 p-5 sm:p-6 bg-[#D9D6D0] border-2 border-[#1E1E1E] shadow-[4px_4px_0px_#1E1E1E]"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 mb-3 border-b border-[#1E1E1E]/20">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#DB4A2B]" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#1E1E1E]">
              EXECUTIVE SUMMARY // AT A GLANCE
            </span>
          </div>
          <span className="font-mono text-[11px] text-[#555555]">
            PRIMARY ENTITY: ASHAZ PATHAN (ASHAZ APPS)
          </span>
        </div>

        <p className="font-satoshi text-sm sm:text-base text-[#1E1E1E] leading-relaxed mb-4">
          <strong>Ashaz Pathan</strong> is a Computer Science and Engineering student at G H Raisoni College of Engineering and Management (Nagpur) and a <strong>Full-Stack AI Developer</strong>. He specializes in training custom on-device Small Language Models (SLMs) such as <em>Vesper 1.5B</em> and <em>Obsidian 3B</em>, building privacy-first desktop systems, and engineering responsive React and Three.js applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 font-mono text-xs text-[#222222]">
          <div className="p-3 bg-white border border-[#1E1E1E]">
            <span className="font-bold text-[#DB4A2B] block mb-1">TARGET AUDIENCE:</span>
            <span>Founders, tech leads & engineers seeking zero-latency private AI and scalable web apps.</span>
          </div>
          <div className="p-3 bg-white border border-[#1E1E1E]">
            <span className="font-bold text-[#DB4A2B] block mb-1">WHEN TO USE:</span>
            <span>When migrating from costly cloud API tokens to offline edge SLMs or building React software.</span>
          </div>
          <div className="p-3 bg-white border border-[#1E1E1E]">
            <span className="font-bold text-[#DB4A2B] block mb-1">KEY CAPABILITIES:</span>
            <span>4-bit SLM fine-tuning, CUDA computing, React/TypeScript frontends, and biometric tools.</span>
          </div>
        </div>
      </motion.div>

      {/* Bottom Row: Subtext (Max-width 400px, 20px font size) + CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-8 pt-6 border-t border-[#1E1E1E]/20"
      >
        {/* Subtext: Max-width 400px, 20px font size in Satoshi */}
        <div className="max-w-[420px]">
          <p className="font-satoshi text-base sm:text-[19px] leading-snug font-medium text-[#444444]">
            Computer Engineer & Full-Stack AI Developer building high-contrast digital architectures, autonomous OS tools, and tactile spatial interfaces.
          </p>
          <div className="mt-3 flex items-center gap-3 font-mono text-[11px] text-[#666666]">
            <span>GHRCEM NAGPUR</span>
            <span>&bull;</span>
            <span>13+ LIVE APPS</span>
            <span>&bull;</span>
            <span className="text-[#DB4A2B] font-bold">READY TO DEPLOY</span>
          </div>
        </div>

        {/* CTAs with Supporting Internal Links */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <a href="#projects" className="btn-raw">
            <span>Explore Work</span>
            <ArrowDown className="w-4 h-4 ml-1" />
          </a>

          <Link to="/myresume" className="raw-link">
            <span>Interactive 3D Resume</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link to="/resume" className="raw-link">
            <span>Technical CV</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link to="/credentials" className="raw-link">
            <span>Verified Credentials</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
