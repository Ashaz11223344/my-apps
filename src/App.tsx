import { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Preload } from '@react-three/drei';
import { AnimatePresence, motion } from 'framer-motion';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Menu, X, FileText } from 'lucide-react';
import Scene from './components/canvas/Scene';
import Hero from './components/dom/Hero';
import AboutSummary from './components/dom/AboutSummary';
import ProjectGallery from './components/dom/ProjectGallery';
import FAQSection from './components/dom/FAQSection';
import Contact from './components/dom/Contact';
import PageLoader from './components/dom/PageLoader';
import Resume from './components/dom/Resume';
import ModeToggle from './components/dom/ModeToggle';
import { ModeProvider, useModeContext } from './context/ModeContext';

function AppContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showLoader, setShowLoader] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark } = useModeContext();

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  // Canvas background and fog colors matching current mode
  const canvasBg = isDark ? '#0f0a1a' : '#f3f0ff';

  return (
    <>
      {/* Liquid SVG Preloader Screen */}
      <AnimatePresence mode="wait">
        {showLoader && (
          <PageLoader onComplete={() => setShowLoader(false)} />
        )}
      </AnimatePresence>

      <div
        ref={containerRef}
        className={`relative w-full h-screen overflow-x-hidden scroll-smooth ${
          showLoader ? 'overflow-y-hidden pointer-events-none' : 'overflow-y-auto'
        }`}
        style={{ backgroundColor: 'var(--bg-base)', color: 'var(--text-primary)' }}
      >
        {/* 3D Canvas Background */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
          <Canvas
            camera={{ position: [0, 0, 5], fov: 45 }}
            dpr={[1, 2]}
            gl={{ antialias: true, alpha: true }}
          >
            <color attach="background" args={[canvasBg]} />
            <fog attach="fog" args={[canvasBg, 5, 15]} />
            <ambientLight intensity={isDark ? 0.6 : 0.95} />
            <directionalLight position={[10, 10, 5]} intensity={isDark ? 1.2 : 1.6} />

            <Suspense fallback={null}>
              <Scene containerRef={containerRef} />
              <Environment preset="city" />
              <Preload all />
            </Suspense>
          </Canvas>
        </div>

        {/* HTML DOM Overlay */}
        <Routes>
          <Route path="/" element={
            <div className="relative z-10">
              {/* Apple-Style Floating Glass Navigation Bar */}
              <nav 
                className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 w-[92%] sm:w-[88%] max-w-5xl z-50 glass rounded-full px-4 sm:px-7 py-2.5 sm:py-3 flex justify-between items-center transition-all duration-300"
                style={{
                  boxShadow: 'var(--shadow-ambient)',
                  borderRadius: '9999px',
                }}
              >
                {/* Brand Logo */}
                <div className="font-space font-bold text-base sm:text-xl tracking-tighter">
                  <a href="#hero" className="gradient-text uppercase">Ashaz Pathan</a>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-1.5 text-xs sm:text-sm font-medium tracking-wide items-center">
                  <a
                    href="#hero"
                    className="px-3.5 py-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-all font-space font-semibold"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Home
                  </a>
                  <a
                    href="#about"
                    className="px-3.5 py-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-all font-space font-semibold"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    About
                  </a>
                  <a
                    href="#projects"
                    className="px-3.5 py-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-all font-space font-semibold"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Projects
                  </a>
                  <a
                    href="#faq"
                    className="px-3.5 py-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-all font-space font-semibold"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    FAQ
                  </a>
                  <a
                    href="#contact"
                    className="px-3.5 py-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-all font-space font-semibold"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Contact
                  </a>

                  <ModeToggle />

                  <Link
                    to="/myresume"
                    className="gradient-btn px-4 py-2 rounded-full text-xs font-bold tracking-tight transition-all duration-300 hover:scale-105 shadow-md ml-1"
                  >
                    RESUME
                  </Link>
                </div>

                {/* Mobile Right Quick Action Group */}
                <div className="flex md:hidden items-center gap-2">
                  <ModeToggle />
                  <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="p-2 rounded-full glass cursor-pointer flex items-center justify-center transition-all duration-200"
                    aria-label="Toggle menu"
                    style={{ width: '38px', height: '38px', borderRadius: '9999px' }}
                  >
                    {mobileMenuOpen ? (
                      <X className="w-5 h-5" style={{ color: 'var(--text-primary)' }} />
                    ) : (
                      <Menu className="w-5 h-5" style={{ color: 'var(--text-primary)' }} />
                    )}
                  </button>
                </div>
              </nav>

              {/* Mobile Drawer Overlay */}
              <AnimatePresence>
                {mobileMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="fixed top-20 left-1/2 -translate-x-1/2 w-[92%] max-w-lg z-40 md:hidden p-6 glass-elevated rounded-3xl flex flex-col gap-6 shadow-2xl"
                    style={{ background: 'var(--glass-light)', backdropFilter: 'var(--backdrop-blur)' }}
                  >
                    <div className="flex flex-col gap-3">
                      <a
                        href="#hero"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-lg font-space font-bold py-2 px-4 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        Home
                      </a>
                      <a
                        href="#about"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-lg font-space font-bold py-2 px-4 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        About
                      </a>
                      <a
                        href="#projects"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-lg font-space font-bold py-2 px-4 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        Projects
                      </a>
                      <a
                        href="#faq"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-lg font-space font-bold py-2 px-4 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        FAQ
                      </a>
                      <a
                        href="#contact"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-lg font-space font-bold py-2 px-4 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        Contact
                      </a>
                    </div>

                    <div className="pt-2">
                      <Link
                        to="/myresume"
                        onClick={() => setMobileMenuOpen(false)}
                        className="gradient-btn w-full py-3.5 rounded-full flex items-center justify-center gap-2 text-sm font-bold tracking-wider uppercase shadow-lg"
                      >
                        <FileText className="w-4 h-4" />
                        View Full Resume
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <main>
                <Hero />
                <AboutSummary />
                <ProjectGallery />
                <FAQSection />
                <Contact />
              </main>
            </div>
          } />
          <Route path="/myresume" element={<Resume />} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ModeProvider>
        <AppContent />
      </ModeProvider>
    </BrowserRouter>
  );
}

export default App;
