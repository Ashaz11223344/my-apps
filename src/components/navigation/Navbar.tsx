import { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu, X, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { projects, type Project } from '../../data/projects';

interface NavbarProps {
  onSelectProject?: (project: Project) => void;
}

export default function Navbar({ onSelectProject }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = (e?: Event) => {
      const scrollY = (e?.target as HTMLElement)?.scrollTop || window.scrollY || document.documentElement.scrollTop || 0;
      setIsScrolled(scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { capture: true, passive: true });
    return () => window.removeEventListener('scroll', handleScroll, { capture: true });
  }, []);

  // Close search on Escape key
  useEffect(() => {
    if (!searchOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSearchOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [searchOpen]);

  // Filter projects for search modal
  const filteredProjects = searchQuery.trim() === ''
    ? projects.slice(0, 6)
    : projects.filter((p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
    );

  const handleOpenProject = (proj: Project) => {
    setSearchOpen(false);
    if (onSelectProject) {
      onSelectProject(proj);
    } else {
      const el = document.getElementById(proj.id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Minimalist Fixed Navigation Bar */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b bg-[#E4E2DD]/95 backdrop-blur-md ${
          isScrolled
            ? 'border-[#1E1E1E]/20 py-3.5 shadow-sm'
            : 'border-[#1E1E1E]/10 py-4 sm:py-5'
        }`}
      >
        <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 flex items-center justify-between">
          {/* Left: Brand logo in 'Clash Display' (bold, uppercase, 2xl) */}
          <div className="flex items-center">
            <a
              href="#hero"
              className="font-clash font-bold text-xl sm:text-2xl uppercase tracking-[-0.03em] text-[#1E1E1E] hover:text-[#DB4A2B] transition-colors"
            >
              ASHAZ PATHAN
            </a>
          </div>

          {/* Center: Text links in Satoshi (medium, 14px, tracked out 0.1em) */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9 font-satoshi text-[14px] font-medium tracking-[0.1em] uppercase text-[#1E1E1E]">
            <a
              href="#projects"
              className="hover:text-[#DB4A2B] transition-colors relative py-1"
            >
              WORK
            </a>
            <a
              href="#models"
              className="hover:text-[#DB4A2B] transition-colors relative py-1"
            >
              MODELS
            </a>
            <a
              href="#philosophy"
              className="hover:text-[#DB4A2B] transition-colors relative py-1"
            >
              PHILOSOPHY
            </a>
            <a
              href="#about"
              className="hover:text-[#DB4A2B] transition-colors relative py-1"
            >
              ABOUT
            </a>
            <a
              href="#faq"
              className="hover:text-[#DB4A2B] transition-colors relative py-1"
            >
              FAQS
            </a>
            <Link
              to="/myresume"
              className="group relative px-2.5 py-1 border border-[#1E1E1E]/25 hover:border-[#DB4A2B] bg-transparent text-[#1E1E1E] hover:text-[#DB4A2B] transition-all duration-200 font-bold text-xs tracking-wider flex items-center gap-1 active:scale-95"
              title="View Complete Resume & Credentials"
            >
              <span className="text-[#DB4A2B]">RESUME</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#DB4A2B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <a
              href="#contact"
              className="hover:text-[#DB4A2B] transition-colors relative py-1"
            >
              CONTACT
            </a>
          </nav>

          {/* Right: Icon set (Search, Bag) using 20px Lucide icons */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Search Icon (20px) */}
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search Projects"
              className="p-2 border border-[#1E1E1E]/20 text-[#1E1E1E] hover:bg-[#1E1E1E] hover:text-[#E4E2DD] transition-all cursor-pointer"
              title="Quick Search (Projects & Specs)"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Bag / Archive Icon (20px) */}
            <a
              href="#projects"
              aria-label="View Projects Bag"
              className="p-2 border border-[#1E1E1E]/20 text-[#1E1E1E] hover:bg-[#1E1E1E] hover:text-[#E4E2DD] transition-all relative cursor-pointer"
              title="Project Collection (13 Apps)"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1.5 -right-1.5 bg-[#DB4A2B] text-white text-[9px] font-mono font-bold w-4 h-4 flex items-center justify-center">
                13
              </span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Mobile Menu"
              className="md:hidden p-2 border border-[#1E1E1E]/20 text-[#1E1E1E] hover:bg-[#1E1E1E] hover:text-[#E4E2DD] transition-all cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay with mix-blend-difference */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#1E1E1E] text-[#E4E2DD] p-6 pt-24 flex flex-col justify-between md:hidden"
          >
            <div className="flex flex-col gap-5 pt-4">
              <span className="text-xs font-mono tracking-widest text-[#DB4A2B] uppercase">
                // RAW FORM NAVIGATION
              </span>
              <a
                href="#hero"
                onClick={() => setMobileMenuOpen(false)}
                className="font-clash text-3xl font-bold uppercase tracking-[-0.03em] hover:text-[#DB4A2B] transition-colors"
              >
                01. OVERVIEW
              </a>
              <a
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
                className="font-clash text-3xl font-bold uppercase tracking-[-0.03em] hover:text-[#DB4A2B] transition-colors"
              >
                02. SELECTED WORK (13)
              </a>
              <a
                href="#models"
                onClick={() => setMobileMenuOpen(false)}
                className="font-clash text-3xl font-bold uppercase tracking-[-0.03em] text-[#DB4A2B] hover:text-[#DB4A2B] transition-colors"
              >
                03. TRAINED MODELS (2)
              </a>
              <a
                href="#philosophy"
                onClick={() => setMobileMenuOpen(false)}
                className="font-clash text-3xl font-bold uppercase tracking-[-0.03em] hover:text-[#DB4A2B] transition-colors"
              >
                04. PHILOSOPHY
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="font-clash text-3xl font-bold uppercase tracking-[-0.03em] hover:text-[#DB4A2B] transition-colors"
              >
                05. ABOUT & CREDENTIALS
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="font-clash text-3xl font-bold uppercase tracking-[-0.03em] hover:text-[#DB4A2B] transition-colors"
              >
                06. FAQS
              </a>
              <Link
                to="/myresume"
                onClick={() => setMobileMenuOpen(false)}
                className="font-clash text-3xl font-bold uppercase tracking-[-0.03em] text-[#DB4A2B]"
              >
                07. FULL RESUME →
              </Link>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="font-clash text-3xl font-bold uppercase tracking-[-0.03em] hover:text-[#DB4A2B] transition-colors"
              >
                08. CONTACT
              </a>
            </div>

            <div className="pt-8 border-t border-white/20 flex items-center justify-between">
              <p className="font-satoshi text-xs text-[#A8A59E]">
                Nashik, India • Full-Stack AI Developer
              </p>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="font-mono text-xs uppercase underline tracking-wider"
              >
                [CLOSE]
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interactive Quick Search Dialog */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#1E1E1E]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={(e) => {
              if (e.target === e.currentTarget) setSearchOpen(false);
            }}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-2xl bg-[#E4E2DD] border-2 border-[#1E1E1E] shadow-2xl p-6 sm:p-8 overflow-hidden text-[#1E1E1E]"
            >
              <div className="flex items-center justify-between pb-4 border-b border-[#1E1E1E]/20 mb-4">
                <div className="flex items-center gap-2">
                  <Search className="w-5 h-5 text-[#DB4A2B]" />
                  <span className="font-clash font-bold uppercase text-base sm:text-lg tracking-normal">
                    SEARCH // ECOSYSTEM PROJECTS
                  </span>
                </div>
                <button
                  onClick={() => setSearchOpen(false)}
                  className="p-1 hover:text-[#DB4A2B] cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="Type to filter by name, AI, Python, tool..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full bg-[#D9D6D0] border border-[#1E1E1E] px-4 py-3 font-satoshi text-base text-[#1E1E1E] placeholder:text-[#666666] focus:outline-none focus:border-[#DB4A2B]"
                />
              </div>

              <div className="max-h-[50vh] overflow-y-auto space-y-3 pr-1">
                {filteredProjects.length === 0 ? (
                  <div className="py-8 text-center text-sm font-satoshi text-[#666666]">
                    No matching projects found for "{searchQuery}".
                  </div>
                ) : (
                  filteredProjects.map((proj) => (
                    <div
                      key={proj.id}
                      onClick={() => handleOpenProject(proj)}
                      className="group p-3 border border-[#1E1E1E]/15 hover:border-[#1E1E1E] bg-[#ECEAE5] hover:bg-white transition-all cursor-pointer flex items-center justify-between"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-mono text-xs font-bold text-[#DB4A2B]">
                            {proj.number}
                          </span>
                          <h4 className="font-clash font-bold uppercase text-sm tracking-tight group-hover:text-[#DB4A2B] transition-colors">
                            {proj.title}
                          </h4>
                        </div>
                        <p className="font-satoshi text-xs text-[#666666] line-clamp-1">
                          {proj.description}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0 ml-3">
                        <span className="font-mono text-[10px] uppercase px-2 py-0.5 border border-[#1E1E1E]/20 bg-white">
                          {proj.tags[0]}
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-[#1E1E1E] group-hover:text-[#DB4A2B] transition-colors" />
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="mt-4 pt-3 border-t border-[#1E1E1E]/10 flex items-center justify-between text-xs font-satoshi text-[#666666]">
                <span>Showing {filteredProjects.length} of {projects.length} projects</span>
                <span className="font-mono text-[11px]">ESC to close</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
