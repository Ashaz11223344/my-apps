import { useState, useRef } from 'react';
import { AnimatePresence, motion, type Variants } from 'framer-motion';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import DynamicGradientBackground from './components/dom/DynamicGradientBackground';
import Navbar from './components/navigation/Navbar';
import Hero from './components/dom/Hero';
import ProjectGallery from './components/dom/ProjectGallery';
import CampaignBlock from './components/dom/CampaignBlock';
import AboutSummary from './components/dom/AboutSummary';
import FAQSection from './components/dom/FAQSection';
import Contact from './components/dom/Contact';
import Footer from './components/dom/Footer';
import PageLoader from './components/dom/PageLoader';
import Resume from './components/dom/Resume';
import TrainedModelsSection from './components/dom/TrainedModelsSection';

// Page slide variants: Direction 1 = Forward (to Resume), Direction -1 = Inverted (back to Portfolio)
const pageVariants: Variants = {
  initial: (dir: number) => ({
    x: dir > 0 ? '35%' : '-35%',
    opacity: 0,
  }),
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      x: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const },
      opacity: { duration: 0.35, ease: 'easeOut' },
    },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? '-30%' : '30%',
    opacity: 0,
    transition: {
      x: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const },
      opacity: { duration: 0.25, ease: 'easeIn' },
    },
  }),
};

// Directional background light-wave sweep during route transitions
const bgSweepVariants: Variants = {
  initial: (dir: number) => ({
    x: dir > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  animate: {
    x: '0%',
    opacity: [0, 0.22, 0],
    transition: {
      x: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const },
      opacity: { duration: 0.65, times: [0, 0.35, 1], ease: 'easeInOut' },
    },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? '-100%' : '100%',
    opacity: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

function PortfolioView() {
  return (
    <div className="relative z-10 flex flex-col min-h-screen">
      {/* Minimalist Fixed Navigation */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Product Grid & Project Cards & Expanded Project Modal */}
        <ProjectGallery />

        {/* Trained Small Language Models (SLMs) & Weights Showcase */}
        <TrainedModelsSection />

        {/* Campaign Block */}
        <CampaignBlock />

        {/* Profile & Credentials */}
        <AboutSummary />

        {/* FAQs & SEO Structured Knowledge */}
        <FAQSection />

        {/* Direct Contact Inquiries */}
        <Contact />
      </main>

      {/* 4-Column Brutalist Footer with 10vw Year */}
      <Footer />
    </div>
  );
}

function AppContent() {
  const [showLoader, setShowLoader] = useState(true);
  const location = useLocation();

  const isResumePath = (p: string) =>
    p === '/myresume' || p === '/resume' || p === '/credentials';

  // Synchronously compute transition direction between renders
  const prevPathRef = useRef(location.pathname);
  const directionRef = useRef(1);

  if (prevPathRef.current !== location.pathname) {
    const prev = prevPathRef.current;
    const curr = location.pathname;

    if (isResumePath(curr) && !isResumePath(prev)) {
      // Forward into Resume (direction = 1)
      directionRef.current = 1;
    } else if (!isResumePath(curr) && isResumePath(prev)) {
      // Inverted back to Portfolio (direction = -1)
      directionRef.current = -1;
    } else {
      directionRef.current = 1;
    }
    prevPathRef.current = curr;
  }

  const direction = directionRef.current;
  const isResume = isResumePath(location.pathname);

  return (
    <>
      {/* Raw Form Brutalist Preloader Screen */}
      <AnimatePresence mode="wait">
        {showLoader && (
          <PageLoader onComplete={() => setShowLoader(false)} />
        )}
      </AnimatePresence>

      <div
        className={`relative w-full min-h-screen overflow-x-hidden selection:bg-[#DB4A2B] selection:text-white ${
          showLoader ? 'overflow-hidden max-h-screen pointer-events-none' : ''
        }`}
        style={{
          backgroundColor: isResume ? '#DDD8CE' : '#E4E2DD',
          color: '#1E1E1E',
          transition: 'background-color 1000ms cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Dynamic Living Gradient Background with Morphing State */}
        <DynamicGradientBackground isResume={isResume} />

        {/* Ambient Directional Background Sweep Lighting on Route Transition */}
        <AnimatePresence custom={direction}>
          <motion.div
            key={`bg-lightwave-${isResume ? 'resume' : 'portfolio'}`}
            custom={direction}
            variants={bgSweepVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 pointer-events-none z-[1]"
            style={{
              background:
                'radial-gradient(ellipse 90% 60% at 50% 50%, rgba(219, 74, 43, 0.18) 0%, rgba(248, 163, 72, 0.12) 45%, transparent 75%)',
            }}
          />
        </AnimatePresence>

        {/* Animated Directional Route Transition */}
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={isResume ? 'resume-view' : 'portfolio-view'}
            custom={direction}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            onAnimationStart={() => {
              // Ensure incoming page begins cleanly at top without disturbing outgoing page
              window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
              document.documentElement.scrollTop = 0;
              document.body.scrollTop = 0;
            }}
            className="w-full min-h-screen"
          >
            <Routes location={location}>
              <Route path="/" element={<PortfolioView />} />
              <Route
                path="/myresume"
                element={
                  <div className="relative z-10 flex flex-col min-h-screen">
                    <Resume />
                  </div>
                }
              />
              <Route
                path="/resume"
                element={
                  <div className="relative z-10 flex flex-col min-h-screen">
                    <Resume />
                  </div>
                }
              />
              <Route
                path="/credentials"
                element={
                  <div className="relative z-10 flex flex-col min-h-screen">
                    <Resume />
                  </div>
                }
              />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
