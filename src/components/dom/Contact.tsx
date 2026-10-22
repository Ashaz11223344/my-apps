import { motion } from 'framer-motion';
import { Mail, ArrowUpRight, MapPin } from 'lucide-react';
import CategoryDivider from './CategoryDivider';

const GithubIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

export default function Contact() {
  return (
    <>
      <CategoryDivider
        number="05"
        title="DIRECT INQUIRIES"
        align="right"
        id="contact-divider"
      />

      <section
        id="contact"
        className="py-24 sm:py-36 px-4 sm:px-8 md:px-16 lg:px-24 relative select-none"
        style={{ backgroundColor: '#E4E2DD', color: '#1E1E1E' }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 bg-[#DB4A2B]" />
              <span className="font-satoshi text-xs sm:text-sm font-bold tracking-[0.2em] text-[#DB4A2B] uppercase">
                Initiate Collaboration
              </span>
            </div>

            <h2
              className="font-clash uppercase font-bold text-[#1E1E1E] leading-[0.8] tracking-[-0.05em] mb-6"
              style={{
                fontSize: 'clamp(2.8rem, 8.5vw, 8rem)',
              }}
            >
              START A CONVERSATION.
            </h2>

            <p className="font-satoshi text-base sm:text-2xl text-[#444444] max-w-3xl font-medium leading-relaxed">
              Whether you need a high-performance web platform, an autonomous AI pipeline, or an award-winning full-stack engineer, let's connect and build something remarkable.
            </p>
          </motion.div>

          {/* Contact Action Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 pt-4">
            {/* Action 1: Email */}
            <a
              href="mailto:ashazpathan8@gmail.com"
              className="group p-6 sm:p-8 border-2 border-[#1E1E1E] bg-[#D9D6D0] hover:bg-[#1E1E1E] hover:text-[#E4E2DD] transition-all duration-300 flex flex-col justify-between shadow-[4px_4px_0px_#1E1E1E] hover:shadow-[6px_6px_0px_#DB4A2B] hover:-translate-y-1 hover:-translate-x-0.5 cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 border border-[#1E1E1E] group-hover:border-white flex items-center justify-center bg-white group-hover:bg-[#DB4A2B] text-[#1E1E1E] group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs font-bold text-[#DB4A2B] group-hover:text-white transition-colors">
                    01 // EMAIL
                  </span>
                </div>
                <h3 className="font-clash text-xl font-bold uppercase tracking-tight mb-2 text-[#1E1E1E] group-hover:!text-white transition-colors">
                  DIRECT EMAIL
                </h3>
                <p className="font-satoshi text-xs text-[#666666] group-hover:text-[#D9D6D0] mb-4 transition-colors">
                  Send details regarding projects, contracts, or engineering roles.
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#1E1E1E]/20 group-hover:border-white/20 font-mono text-xs font-bold text-[#1E1E1E] group-hover:text-[#E4E2DD] transition-colors">
                <span className="truncate">ashazpathan8@gmail.com</span>
                <ArrowUpRight className="w-4 h-4 shrink-0 text-[#1E1E1E] group-hover:text-[#DB4A2B] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
            </a>

            {/* Action 2: LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ashaz-pathan-751317336"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 sm:p-8 border-2 border-[#1E1E1E] bg-[#D9D6D0] hover:bg-[#1E1E1E] hover:text-[#E4E2DD] transition-all duration-300 flex flex-col justify-between shadow-[4px_4px_0px_#1E1E1E] hover:shadow-[6px_6px_0px_#DB4A2B] hover:-translate-y-1 hover:-translate-x-0.5 cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 border border-[#1E1E1E] group-hover:border-white flex items-center justify-center bg-white group-hover:bg-[#DB4A2B] text-[#1E1E1E] group-hover:text-white transition-colors">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs font-bold text-[#DB4A2B] group-hover:text-white transition-colors">
                    02 // NETWORK
                  </span>
                </div>
                <h3 className="font-clash text-xl font-bold uppercase tracking-tight mb-2 text-[#1E1E1E] group-hover:!text-white transition-colors">
                  LINKEDIN PROFILE
                </h3>
                <p className="font-satoshi text-xs text-[#666666] group-hover:text-[#D9D6D0] mb-4 transition-colors">
                  Professional updates, endorsements, and direct messaging.
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#1E1E1E]/20 group-hover:border-white/20 font-mono text-xs font-bold text-[#1E1E1E] group-hover:text-[#E4E2DD] transition-colors">
                <span>ashaz-pathan</span>
                <ArrowUpRight className="w-4 h-4 shrink-0 text-[#1E1E1E] group-hover:text-[#DB4A2B] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
            </a>

            {/* Action 3: GitHub */}
            <a
              href="https://github.com/Ashaz11223344"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 sm:p-8 border-2 border-[#1E1E1E] bg-[#D9D6D0] hover:bg-[#1E1E1E] hover:text-[#E4E2DD] transition-all duration-300 flex flex-col justify-between shadow-[4px_4px_0px_#1E1E1E] hover:shadow-[6px_6px_0px_#DB4A2B] hover:-translate-y-1 hover:-translate-x-0.5 cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 border border-[#1E1E1E] group-hover:border-white flex items-center justify-center bg-white group-hover:bg-[#DB4A2B] text-[#1E1E1E] group-hover:text-white transition-colors">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs font-bold text-[#DB4A2B] group-hover:text-white transition-colors">
                    03 // CODE
                  </span>
                </div>
                <h3 className="font-clash text-xl font-bold uppercase tracking-tight mb-2 text-[#1E1E1E] group-hover:!text-white transition-colors">
                  GITHUB REPOSITORIES
                </h3>
                <p className="font-satoshi text-xs text-[#666666] group-hover:text-[#D9D6D0] mb-4 transition-colors">
                  Explore open source implementations, scripts, and production codebases.
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#1E1E1E]/20 group-hover:border-white/20 font-mono text-xs font-bold text-[#1E1E1E] group-hover:text-[#E4E2DD] transition-colors">
                <span>Ashaz11223344</span>
                <ArrowUpRight className="w-4 h-4 shrink-0 text-[#1E1E1E] group-hover:text-[#DB4A2B] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
            </a>
          </div>

          {/* Location Banner */}
          <div className="mt-8 p-4 bg-[#ECEAE5] border border-[#1E1E1E] flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#DB4A2B]" />
              <span className="font-bold text-[#1E1E1E]">BASED IN NASHIK, MAHARASHTRA, INDIA</span>
            </div>
            <div className="text-[#666666]">
              COLLABORATING LOCALLY & REMOTELY GLOBALLY
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
