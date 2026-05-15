import { Suspense, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Preload } from '@react-three/drei';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Scene from './components/canvas/Scene';
import Hero from './components/dom/Hero';
import ProjectGallery from './components/dom/ProjectGallery';
import Contact from './components/dom/Contact';
import PageLoader from './components/dom/PageLoader';
import Resume from './components/dom/Resume';

function AppContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showLoader, setShowLoader] = useState(true);

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
        className={`relative w-full h-screen overflow-x-hidden bg-[#0f0f13] scroll-smooth transition-colors duration-1000 ${
          showLoader ? 'overflow-y-hidden pointer-events-none' : 'overflow-y-auto'
        }`}
      >
        {/* 3D Canvas Background */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
          <Canvas
            camera={{ position: [0, 0, 5], fov: 45 }}
            dpr={[1, 2]}
            gl={{ antialias: true, alpha: true }}
          >
            <color attach="background" args={['#0f0f13']} />
            <fog attach="fog" args={['#0f0f13', 5, 15]} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            
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
              <nav className="fixed top-0 w-full z-50 glass px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center mix-blend-difference">
                <div className="font-space font-bold text-lg sm:text-xl tracking-tighter">
                  <span className="gradient-text uppercase">Ashaz Pathan</span>
                </div>
                <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm font-medium tracking-wide items-center">
                  <a href="#hero" className="hover:text-white/70 transition-colors">Home</a>
                  <a href="#projects" className="hover:text-white/70 transition-colors">Projects</a>
                  <a href="#contact" className="hover:text-white/70 transition-colors">Contact</a>
                  <Link 
                    to="/myresume" 
                    className="bg-white text-black px-4 py-1.5 rounded-full hover:bg-white/80 transition-all font-bold tracking-tighter"
                  >
                    RESUME
                  </Link>
                </div>
              </nav>

              <main>
                <Hero />
                <ProjectGallery />
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
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
