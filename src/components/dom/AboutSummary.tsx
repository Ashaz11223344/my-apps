import { motion } from 'framer-motion';
import { User, Award, Code2, Rocket, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutSummary() {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 md:px-24 relative z-10 pointer-events-auto">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 sm:mb-16">
          <p className="text-xs sm:text-sm tracking-[0.2em] text-accent-primary font-space uppercase mb-2 sm:mb-4">
            Executive Summary & Overview
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-space font-bold" style={{ color: 'var(--text-primary)' }}>
            About <span className="gradient-text italic">Ashaz Pathan</span>
          </h2>
        </div>

        {/* Top Summary Answer / Definition Box for AEO & GEO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-elevated p-6 sm:p-10 rounded-3xl mb-12 relative overflow-hidden"
          style={{ background: 'var(--glass-light)', backdropFilter: 'var(--backdrop-blur)' }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-2xl glass text-accent-primary">
              <User className="w-6 h-6" />
            </div>
            <h3 className="text-xl sm:text-2xl font-space font-bold" style={{ color: 'var(--text-primary)' }}>
              Who is Ashaz Pathan?
            </h3>
          </div>

          <p className="text-base sm:text-lg font-inter leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
            <strong style={{ color: 'var(--text-primary)' }}>Ashaz Pathan</strong> is a Computer Engineering student (MET Bhujbal Knowledge City, 2023–2026) and Full-Stack AI Developer specializing in modern web applications, 3D interactive interfaces (Three.js / React Three Fiber), and automated software tools. He builds high-performance, visually engaging digital solutions for startups, tech teams, and individual clients.
          </p>

          {/* Quick Takeaways Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-white/10">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-space uppercase tracking-wider text-accent-primary font-semibold">Specialization</span>
              <span className="text-sm font-inter font-medium" style={{ color: 'var(--text-primary)' }}>Full-Stack AI & Web Dev</span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-xs font-space uppercase tracking-wider text-accent-primary font-semibold">Key Award</span>
              <span className="text-sm font-inter font-medium" style={{ color: 'var(--text-primary)' }}>1st Place MAHA-VEER 2026</span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-xs font-space uppercase tracking-wider text-accent-primary font-semibold">Location & Education</span>
              <span className="text-sm font-inter font-medium" style={{ color: 'var(--text-primary)' }}>Nashik, India (MET BKC)</span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-xs font-space uppercase tracking-wider text-accent-primary font-semibold">Live Projects</span>
              <span className="text-sm font-inter font-medium" style={{ color: 'var(--text-primary)' }}>10+ Web & AI Applications</span>
            </div>
          </div>
        </motion.div>

        {/* Detailed Competency Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Core Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="glass p-6 sm:p-8 rounded-3xl flex flex-col justify-between"
          >
            <div>
              <div className="p-3 rounded-2xl glass text-accent-primary w-fit mb-5">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-space font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                Full-Stack & AI Engineering
              </h3>
              <p className="text-sm font-inter leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                Building production-grade web platforms, interactive dashboards, and AI integrations using React, TypeScript, Python, and Node.js.
              </p>
              <ul className="space-y-2 text-xs font-inter" style={{ color: 'var(--text-secondary)' }}>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent-primary flex-shrink-0" />
                  <span>React, TypeScript & Vite Architecture</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent-primary flex-shrink-0" />
                  <span>AI/ML API Integration & Automation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent-primary flex-shrink-0" />
                  <span>Interactive 3D Web Graphics (Three.js)</span>
                </li>
              </ul>
            </div>
            <div className="pt-6">
              <a href="#projects" className="text-xs font-space font-bold uppercase tracking-wider text-accent-primary hover:underline">
                Explore Selected Projects &rarr;
              </a>
            </div>
          </motion.div>

          {/* Card 2: Proven Results */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass p-6 sm:p-8 rounded-3xl flex flex-col justify-between"
          >
            <div>
              <div className="p-3 rounded-2xl glass text-accent-primary w-fit mb-5">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-space font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                Award-Winning Achievements
              </h3>
              <p className="text-sm font-inter leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                Recognized nationally for innovative project development and practical AI solution design.
              </p>
              <ul className="space-y-2 text-xs font-inter" style={{ color: 'var(--text-secondary)' }}>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent-primary flex-shrink-0" />
                  <span>1st Place National Winner — MAHA-VEER 2026</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent-primary flex-shrink-0" />
                  <span>NPIT Solutions 3-Month AI/ML Internship</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent-primary flex-shrink-0" />
                  <span>Computer Engineering Diploma (2023–2026)</span>
                </li>
              </ul>
            </div>
            <div className="pt-6">
              <Link to="/myresume" className="text-xs font-space font-bold uppercase tracking-wider text-accent-primary hover:underline">
                View Full Interactive Resume &rarr;
              </Link>
            </div>
          </motion.div>

          {/* Card 3: Target Audience & Use Cases */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="glass p-6 sm:p-8 rounded-3xl flex flex-col justify-between"
          >
            <div>
              <div className="p-3 rounded-2xl glass text-accent-primary w-fit mb-5">
                <Rocket className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-space font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                Target Audience & Collaboration
              </h3>
              <p className="text-sm font-inter leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                Who Ashaz works with to deliver scalable, user-centric software solutions:
              </p>
              <ul className="space-y-2 text-xs font-inter" style={{ color: 'var(--text-secondary)' }}>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent-primary flex-shrink-0" />
                  <span>Startups seeking MVP product development</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent-primary flex-shrink-0" />
                  <span>Engineering teams needing full-stack support</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent-primary flex-shrink-0" />
                  <span>Businesses upgrading UI/UX & Web Performance</span>
                </li>
              </ul>
            </div>
            <div className="pt-6">
              <a href="#contact" className="text-xs font-space font-bold uppercase tracking-wider text-accent-primary hover:underline">
                Get In Touch For Collaboration &rarr;
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
