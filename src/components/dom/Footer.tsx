import { Mail, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const GithubIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="relative w-full pt-20 sm:pt-28 pb-12 px-4 sm:px-8 md:px-16 lg:px-24 overflow-hidden border-t border-[#1E1E1E]"
      style={{ backgroundColor: '#1E1E1E', color: '#E4E2DD' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* Column 1: Large brand logo and social icons */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="font-clash text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-[-0.05em] text-[#E4E2DD] mb-3">
                ASHAZ PATHAN
              </h2>
              <p className="font-satoshi text-xs sm:text-sm text-[#A8A59E] uppercase tracking-wider mb-6">
                Full-Stack AI Developer & Computer Engineer • Nashik, India
              </p>
            </div>

            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://github.com/Ashaz11223344"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-[#E4E2DD] hover:bg-[#DB4A2B] hover:border-[#DB4A2B] hover:text-white transition-all duration-300"
              >
                <GithubIcon className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/ashaz-pathan-751317336"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-[#E4E2DD] hover:bg-[#DB4A2B] hover:border-[#DB4A2B] hover:text-white transition-all duration-300"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>

              <a
                href="mailto:ashazpathan8@gmail.com"
                aria-label="Email"
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-[#E4E2DD] hover:bg-[#DB4A2B] hover:border-[#DB4A2B] hover:text-white transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>

              <button
                onClick={scrollToTop}
                title="Back to top"
                aria-label="Back to top"
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-[#E4E2DD] hover:bg-white hover:text-[#1E1E1E] transition-all duration-300 ml-auto cursor-pointer"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Column 2: Link lists in 14px Satoshi */}
          <div>
            <h3 className="font-satoshi text-xs font-bold uppercase tracking-[0.2em] text-[#DB4A2B] mb-5">
              Navigation
            </h3>
            <ul className="space-y-3 font-satoshi text-[14px]">
              <li>
                <a href="#hero" className="text-[#A8A59E] hover:text-white transition-colors">
                  01 // Overview
                </a>
              </li>
              <li>
                <a href="#projects" className="text-[#A8A59E] hover:text-white transition-colors">
                  02 // Selected Work
                </a>
              </li>
              <li>
                <a href="#philosophy" className="text-[#A8A59E] hover:text-white transition-colors">
                  03 // Philosophy
                </a>
              </li>
              <li>
                <a href="#about" className="text-[#A8A59E] hover:text-white transition-colors">
                  04 // Profile & Credentials
                </a>
              </li>
              <li>
                <a href="#faq" className="text-[#A8A59E] hover:text-white transition-colors">
                  05 // FAQs
                </a>
              </li>
              <li>
                <Link to="/myresume" className="text-[#A8A59E] hover:text-[#DB4A2B] font-bold transition-colors">
                  06 // Interactive Resume →
                </Link>
              </li>
              <li>
                <Link to="/resume" className="text-[#A8A59E] hover:text-[#DB4A2B] font-bold transition-colors">
                  07 // Technical CV & Skills →
                </Link>
              </li>
              <li>
                <Link to="/credentials" className="text-[#A8A59E] hover:text-[#DB4A2B] font-bold transition-colors">
                  08 // Verified Credentials & Awards →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Link lists in 14px Satoshi */}
          <div>
            <h3 className="font-satoshi text-xs font-bold uppercase tracking-[0.2em] text-[#DB4A2B] mb-5">
              Featured Apps
            </h3>
            <ul className="space-y-3 font-satoshi text-[14px]">
              <li>
                <a href="https://github.com/Ashaz11223344/convo-ai" target="_blank" rel="noopener noreferrer" className="text-[#A8A59E] hover:text-white transition-colors">
                  Convo AI — Desktop OS
                </a>
              </li>
              <li>
                <a href="https://file-x.app" target="_blank" rel="noopener noreferrer" className="text-[#A8A59E] hover:text-white transition-colors">
                  Filex — Productivity Suite
                </a>
              </li>
              <li>
                <a href="https://www.getfocus.online/" target="_blank" rel="noopener noreferrer" className="text-[#A8A59E] hover:text-white transition-colors">
                  Focus — Companion App
                </a>
              </li>
              <li>
                <a href="https://luminaspaces.qzz.io/" target="_blank" rel="noopener noreferrer" className="text-[#A8A59E] hover:text-white transition-colors">
                  Lumina Spaces — 1st Place MAHA-VEER
                </a>
              </li>
              <li>
                <a href="https://movie-q-pi.vercel.app/index.html" target="_blank" rel="noopener noreferrer" className="text-[#A8A59E] hover:text-white transition-colors">
                  MovieQ — Discovery
                </a>
              </li>
              <li>
                <a href="https://attendify-attendance-identity.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-[#A8A59E] hover:text-white transition-colors">
                  Attendify — Facial AI
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Location, Contact & Availability */}
          <div>
            <h3 className="font-satoshi text-xs font-bold uppercase tracking-[0.2em] text-[#DB4A2B] mb-5">
              Status & Location
            </h3>
            <div className="space-y-3 font-satoshi text-[14px] text-[#A8A59E]">
              <p>
                <strong className="text-[#E4E2DD]">Location:</strong> Nashik, Maharashtra, India.
              </p>
              <p>
                <strong className="text-[#E4E2DD]">Education:</strong> G H Raisoni College of Engineering and Management, Nagpur (CSE, 2026–2029) • Ex-MET BKC.
              </p>
              <p>
                <strong className="text-[#E4E2DD]">Status:</strong> Available for select engineering contracts & high-impact full-stack roles.
              </p>
              <div className="pt-2">
                <a
                  href="mailto:ashazpathan8@gmail.com"
                  className="font-mono text-xs text-[#DB4A2B] hover:underline"
                >
                  ashazpathan8@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Massive dynamic year indicator in background-style text (#FFFFFF/10%) at 10vw size, right-aligned copyright notice */}
        <div className="relative pt-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          {/* Massive Year Indicator in background-style text (#FFFFFF/10%) at 10vw size */}
          <div
            className="font-clash font-bold select-none leading-none tracking-[-0.05em]"
            style={{
              fontSize: 'clamp(5rem, 10vw, 12rem)',
              color: 'rgba(255, 255, 255, 0.10)',
            }}
          >
            {new Date().getFullYear()}
          </div>

          {/* Right-aligned copyright notice */}
          <div className="font-satoshi text-xs sm:text-sm text-[#A8A59E] text-left md:text-right md:max-w-md pb-2">
            <p className="font-bold text-[#E4E2DD] uppercase tracking-wider mb-1">
              OPEN FOR CONTRACTS & CORE ROLES
            </p>
            <p>© {new Date().getFullYear()} Ashaz Pathan. Designed with code. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
