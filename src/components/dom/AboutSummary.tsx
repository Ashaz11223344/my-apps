import { motion } from 'framer-motion';
import { Award, Code2, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import CategoryDivider from './CategoryDivider';

export default function AboutSummary() {
  return (
    <>
      <CategoryDivider
        number="03"
        title="PROFILE & BACKGROUND"
        align="right"
        id="about-divider"
      />

      <section
        id="about"
        className="py-20 sm:py-28 px-4 sm:px-8 md:px-16 lg:px-24 relative select-none border-b border-[#1E1E1E]/20"
      >
        <div className="max-w-7xl mx-auto">
          {/* Main Grid: Left 5 cols (Portrait/Bio summary) + Right 7 cols (Credentials & Timeline) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left 5 cols: Profile & Core Identity */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 flex flex-col"
            >
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-2 h-2 bg-[#DB4A2B]" />
                <span className="font-satoshi text-xs sm:text-sm font-bold tracking-[0.2em] text-[#DB4A2B] uppercase">
                  Executive Summary
                </span>
              </div>

              <h2 className="font-clash text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-[-0.05em] text-[#1E1E1E] mb-6">
                WHO IS ASHAZ PATHAN?
              </h2>

              <p className="font-satoshi text-base sm:text-lg text-[#444444] leading-relaxed mb-6 font-medium">
                <strong>Ashaz Pathan</strong> is a Computer Science and Engineering student at <strong>G H Raisoni College of Engineering and Management, Nagpur</strong> (2026–2029) and an alumnus of <strong>MET Bhujbal Knowledge City</strong> (2023–2026), working as a Full-Stack AI Developer in Maharashtra, India.
              </p>

              <p className="font-satoshi text-sm sm:text-base text-[#444444] leading-relaxed mb-8">
                As the architect behind <strong>Ashaz Apps</strong>, he creates production-grade web systems, high-performance automated tools, and 3D web interfaces. His architectural platform <em>Lumina Spaces</em> captured <strong>1st Place at the MAHA-VEER 2026 National Level Project Competition</strong>.
              </p>

              {/* Monospaced Key Metrics Table */}
              <div className="border border-[#1E1E1E] bg-[#D9D6D0] divide-y divide-[#1E1E1E]/20 text-xs font-mono mb-8">
                <div className="p-3.5 flex justify-between items-center">
                  <span className="text-[#666666] uppercase">Location</span>
                  <span className="font-bold text-[#1E1E1E]">Nashik &amp; Nagpur, Maharashtra, India</span>
                </div>
                <div className="p-3.5 flex justify-between items-center">
                  <span className="text-[#666666] uppercase">Education</span>
                  <span className="font-bold text-[#1E1E1E]">GHRCEM Nagpur (CSE, 2026–2029)</span>
                </div>
                <div className="p-3.5 flex justify-between items-center">
                  <span className="text-[#666666] uppercase">Key Honors</span>
                  <span className="font-bold text-[#DB4A2B]">1st Place Winner MAHA-VEER 2026</span>
                </div>
                <div className="p-3.5 flex justify-between items-center">
                  <span className="text-[#666666] uppercase">Industry Training</span>
                  <span className="font-bold text-[#1E1E1E]">3-Mo Full-Stack AI (NPIT Solutions)</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link to="/myresume" className="btn-raw w-full sm:w-auto">
                  <span>View Complete CV & Certifications</span>
                </Link>
                <Link to="/credentials" className="raw-link">
                  <span>Verified Credentials →</span>
                </Link>
              </div>
            </motion.div>

            {/* Right 7 cols: Core Pillars & Capabilities */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 flex flex-col gap-6"
            >
              {/* Card 1: 1st Place MAHA-VEER 2026 */}
              <div className="p-6 sm:p-8 bg-[#D9D6D0] border border-[#1E1E1E] relative overflow-hidden">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 border border-[#1E1E1E] bg-[#1E1E1E] text-white flex items-center justify-center">
                    <Award className="w-5 h-5 text-[#DB4A2B]" />
                  </div>
                  <div>
                    <span className="font-mono text-xs font-bold text-[#DB4A2B] uppercase tracking-wider block">
                      National Recognition
                    </span>
                    <h3 className="font-clash text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#1E1E1E]">
                      1st Place Winner — MAHA-VEER 2026
                    </h3>
                  </div>
                </div>
                <p className="font-satoshi text-xs sm:text-sm text-[#444444] leading-relaxed mb-4">
                  Awarded First Place at the MAHA-VEER 2026 National Level Project Competition for Lumina Spaces, recognized for automated architectural layout synthesis and interactive 3D spatial planning.
                </p>
                <div className="flex flex-wrap gap-2 font-mono text-[11px] text-[#1E1E1E]">
                  <span className="px-2 py-0.5 bg-white border border-[#1E1E1E]">National Competition</span>
                  <span className="px-2 py-0.5 bg-white border border-[#1E1E1E]">Lumina Spaces</span>
                  <span className="px-2 py-0.5 bg-white border border-[#1E1E1E]">100+ Engineering Teams</span>
                </div>
              </div>

              {/* Card 2: Full-Stack & AI Competence */}
              <div className="p-6 sm:p-8 bg-[#ECEAE5] border border-[#1E1E1E]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 border border-[#1E1E1E] bg-white text-[#1E1E1E] flex items-center justify-center">
                    <Code2 className="w-5 h-5 text-[#DB4A2B]" />
                  </div>
                  <div>
                    <span className="font-mono text-xs font-bold text-[#DB4A2B] uppercase tracking-wider block">
                      Engineering Stack
                    </span>
                    <h3 className="font-clash text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#1E1E1E]">
                      Full-Stack Web & AI Engineering
                    </h3>
                  </div>
                </div>
                <p className="font-satoshi text-xs sm:text-sm text-[#444444] leading-relaxed mb-4">
                  Proficient in modern TypeScript, React, Vite, Node.js, and Python backend services. Specialized in integrating computer vision models, real-time audio analysis, and Three.js 3D web environments.
                </p>
                <div className="flex flex-wrap gap-2 font-mono text-[11px] text-[#1E1E1E]">
                  <span className="px-2 py-0.5 bg-white border border-[#1E1E1E]">React / Vite</span>
                  <span className="px-2 py-0.5 bg-white border border-[#1E1E1E]">TypeScript</span>
                  <span className="px-2 py-0.5 bg-white border border-[#1E1E1E]">Python / PyTorch</span>
                  <span className="px-2 py-0.5 bg-white border border-[#1E1E1E]">Three.js</span>
                  <span className="px-2 py-0.5 bg-white border border-[#1E1E1E]">Node.js</span>
                </div>
              </div>

              {/* Card 3: Industry Certification & Training */}
              <div className="p-6 sm:p-8 bg-[#D9D6D0] border border-[#1E1E1E]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 border border-[#1E1E1E] bg-[#1E1E1E] text-white flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="font-mono text-xs font-bold text-[#DB4A2B] uppercase tracking-wider block">
                      Professional Training
                    </span>
                    <h3 className="font-clash text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#1E1E1E]">
                      NPIT Solutions Full-Stack AI/ML
                    </h3>
                  </div>
                </div>
                <p className="font-satoshi text-xs sm:text-sm text-[#444444] leading-relaxed mb-4">
                  Completed an intensive 3-month corporate training program covering machine learning pipelines, production RESTful APIs, high-availability database schemas, and edge model deployments.
                </p>
                <div className="flex flex-wrap gap-2 font-mono text-[11px] text-[#1E1E1E]">
                  <span className="px-2 py-0.5 bg-white border border-[#1E1E1E]">3 Months Training</span>
                  <span className="px-2 py-0.5 bg-white border border-[#1E1E1E]">AI/ML Production</span>
                  <span className="px-2 py-0.5 bg-white border border-[#1E1E1E]">Verified Credential</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
