import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileText,
  Download,
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Briefcase,
  Code2,
  Trophy,
  Eye,
  X,
  Award,
  ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GoogleGIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" {...props}>
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
  </svg>
);

const GoogleText = () => (
  <span>
    <span style={{ color: '#4285F4' }}>G</span>
    <span style={{ color: '#EA4335' }}>o</span>
    <span style={{ color: '#FBBC05' }}>o</span>
    <span style={{ color: '#4285F4' }}>g</span>
    <span style={{ color: '#34A853' }}>l</span>
    <span style={{ color: '#EA4335' }}>e</span>
  </span>
);

function PDFPreviewModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-6 bg-[#1E1E1E]/80 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full h-full max-w-5xl max-h-[100dvh] sm:max-h-[94vh] bg-[#E4E2DD] border-2 border-[#1E1E1E] shadow-[4px_4px_0px_#1E1E1E] sm:shadow-[8px_8px_0px_#1E1E1E] flex flex-col overflow-hidden text-[#1E1E1E]"
          >
            {/* Top Bar */}
            <div className="h-12 bg-[#1E1E1E] text-[#E4E2DD] px-4 flex items-center justify-between border-b border-[#1E1E1E] shrink-0">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#DB4A2B]" />
                <span className="font-mono text-xs uppercase font-bold tracking-wider">
                  Ashaz_Pathan_Resume.pdf
                </span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="/resume.pdf"
                  download
                  className="btn-raw py-1 px-3 text-xs bg-[#DB4A2B] text-white border-[#DB4A2B]"
                >
                  <Download className="w-3.5 h-3.5 mr-1" />
                  <span>Download</span>
                </a>
                <button
                  onClick={onClose}
                  className="p-1 hover:text-[#DB4A2B] cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* PDF Embed */}
            <div className="flex-1 bg-white">
              <iframe
                src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=1"
                className="w-full h-full border-0"
                title="Resume PDF Preview"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ResumeSkeleton() {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-8 md:px-16 lg:px-24 max-w-6xl mx-auto">
      {/* Top Telemetry / Structure Status Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-[#D9D6D0]/60 border border-[#1E1E1E]/20 mb-8 font-mono text-xs">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-[#DB4A2B] animate-ping" />
          <span className="text-[#DB4A2B] font-bold tracking-wider">// COMPILING DOSSIER SCHEMA...</span>
        </div>
        <div className="flex items-center gap-2 text-[#666666]">
          <span>[PARSING ARCHIVE: CSE 2026-2029]</span>
          <span className="text-[#DB4A2B] font-bold">[SYNCING 1.5S]</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column Skeleton */}
        <div className="lg:col-span-4 space-y-6">
          {/* Identity Card Skeleton */}
          <div className="p-6 sm:p-8 bg-[#D9D6D0]/80 border-2 border-[#1E1E1E] shadow-[4px_4px_0px_#1E1E1E]">
            <div className="h-3 w-32 bg-[#DB4A2B]/30 mb-3" />
            <div className="h-8 w-48 bg-[#1E1E1E]/20 mb-2" />
            <div className="h-4 w-full bg-[#1E1E1E]/10 mb-6" />

            {/* Pill skeleton */}
            <div className="p-3 bg-white/80 border border-[#1E1E1E] mb-6 h-12 flex items-center justify-between shadow-[2px_2px_0px_#1E1E1E]">
              <div className="h-4 w-40 bg-[#1E1E1E]/15" />
              <div className="w-4 h-4 bg-[#1E1E1E]/15" />
            </div>

            {/* Contact list skeletons */}
            <div className="space-y-3 border-t border-[#1E1E1E]/20 pt-4">
              <div className="flex items-center gap-2.5">
                <div className="w-4 h-4 bg-[#DB4A2B]/20" />
                <div className="h-3.5 w-36 bg-[#1E1E1E]/15" />
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-4 h-4 bg-[#DB4A2B]/20" />
                <div className="h-3.5 w-44 bg-[#1E1E1E]/15" />
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-4 h-4 bg-[#DB4A2B]/20" />
                <div className="h-3.5 w-28 bg-[#1E1E1E]/15" />
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-4 h-4 bg-[#DB4A2B]/20" />
                <div className="h-3.5 w-40 bg-[#1E1E1E]/15" />
              </div>
            </div>

            {/* Action buttons skeleton */}
            <div className="pt-6 mt-4 border-t border-[#1E1E1E]/20 flex flex-col gap-2.5">
              <div className="h-10 w-full bg-[#1E1E1E]/15" />
              <div className="h-10 w-full bg-white/80 border border-[#1E1E1E]" />
            </div>
          </div>

          {/* Skills Card Skeleton */}
          <div className="p-6 bg-[#ECEAE5]/80 border border-[#1E1E1E]">
            <div className="h-5 w-32 bg-[#1E1E1E]/20 mb-4" />
            <div className="space-y-4">
              {[1, 2, 3].map((g) => (
                <div key={g}>
                  <div className="h-3 w-20 bg-[#DB4A2B]/30 mb-2" />
                  <div className="flex flex-wrap gap-1.5">
                    {[1, 2, 3, 4].map((pill) => (
                      <div key={pill} className="h-6 w-16 bg-white/80 border border-[#1E1E1E]/15" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages & Interests Skeleton */}
          <div className="p-6 bg-[#ECEAE5]/80 border border-[#1E1E1E]">
            <div className="h-4 w-28 bg-[#1E1E1E]/20 mb-3" />
            <div className="flex gap-2">
              <div className="h-6 w-20 bg-white/80 border border-[#1E1E1E]/15" />
              <div className="h-6 w-20 bg-white/80 border border-[#1E1E1E]/15" />
              <div className="h-6 w-20 bg-white/80 border border-[#1E1E1E]/15" />
            </div>
          </div>
        </div>

        {/* Right Column Skeleton */}
        <div className="lg:col-span-8 space-y-8">
          {/* Executive Summary Skeleton */}
          <div className="p-6 sm:p-8 bg-[#D9D6D0]/80 border-2 border-[#1E1E1E] shadow-[4px_4px_0px_#1E1E1E]">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-5 h-5 bg-[#DB4A2B]/20" />
              <div className="h-6 w-44 bg-[#1E1E1E]/20" />
            </div>
            <div className="space-y-2 mb-6">
              <div className="h-3.5 w-full bg-[#1E1E1E]/15" />
              <div className="h-3.5 w-11/12 bg-[#1E1E1E]/15" />
              <div className="h-3.5 w-4/5 bg-[#1E1E1E]/15" />
            </div>
            {/* 4 Stats Grid Skeleton */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[1, 2, 3, 4].map((stat) => (
                <div key={stat} className="p-3 bg-white/80 border border-[#1E1E1E]">
                  <div className="h-6 w-14 bg-[#DB4A2B]/25 mb-1" />
                  <div className="h-3 w-16 bg-[#1E1E1E]/15" />
                </div>
              ))}
            </div>
          </div>

          {/* Experience Skeleton */}
          <div className="p-6 sm:p-8 bg-[#ECEAE5]/80 border border-[#1E1E1E]">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-5 h-5 bg-[#DB4A2B]/20" />
              <div className="h-6 w-48 bg-[#1E1E1E]/20" />
            </div>
            <div className="space-y-6">
              {[1, 2].map((job) => (
                <div key={job} className="pb-6 border-b border-[#1E1E1E]/15 last:border-0 last:pb-0">
                  <div className="flex justify-between items-center mb-2">
                    <div className="h-5 w-56 bg-[#1E1E1E]/20" />
                    <div className="h-3.5 w-24 bg-[#1E1E1E]/15" />
                  </div>
                  <div className="h-3 w-40 bg-[#DB4A2B]/30 mb-3" />
                  <div className="space-y-1.5">
                    <div className="h-3 w-full bg-[#1E1E1E]/15" />
                    <div className="h-3 w-5/6 bg-[#1E1E1E]/15" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Skeleton */}
          <div className="p-6 sm:p-8 bg-[#D9D6D0]/80 border border-[#1E1E1E]">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-5 h-5 bg-[#DB4A2B]/20" />
              <div className="h-6 w-36 bg-[#1E1E1E]/20" />
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-white/90 border-2 border-[#1E1E1E] shadow-[3px_3px_0px_#1E1E1E]">
                <div className="flex justify-between items-center mb-2">
                  <div className="h-5 w-60 bg-[#1E1E1E]/20" />
                  <div className="h-4 w-20 bg-[#DB4A2B]/25" />
                </div>
                <div className="h-3 w-48 bg-[#DB4A2B]/30 mb-2" />
                <div className="h-3 w-full bg-[#1E1E1E]/15" />
              </div>
              <div className="p-4 bg-white/90 border border-[#1E1E1E]">
                <div className="flex justify-between items-center mb-2">
                  <div className="h-5 w-52 bg-[#1E1E1E]/20" />
                  <div className="h-3.5 w-20 bg-[#1E1E1E]/15" />
                </div>
                <div className="h-3 w-44 bg-[#1E1E1E]/15 mb-2" />
                <div className="h-3 w-4/5 bg-[#1E1E1E]/15" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Resume() {
  const [showPDF, setShowPDF] = useState(false);
  const [loading, setLoading] = useState(true);

  // Ensure page always starts at top and simulate 1.5s structure loading while gradient transitions
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    const timer = setTimeout(() => {
      setLoading(false);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative z-10 min-h-screen bg-transparent text-[#1E1E1E] selection:bg-[#DB4A2B] selection:text-white">
      <PDFPreviewModal isOpen={showPDF} onClose={() => setShowPDF(false)} />

      {/* Raw Form Fixed Nav */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#E4E2DD]/90 backdrop-blur-md border-b border-[#1E1E1E]/20 py-3 sm:py-4 px-3 sm:px-8 md:px-16 lg:px-24 flex items-center justify-between gap-2">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#1E1E1E]/25 hover:border-[#DB4A2B] bg-transparent text-[#1E1E1E] hover:text-[#DB4A2B] font-satoshi font-bold text-xs uppercase tracking-wider transition-all duration-200 group shrink-0 active:scale-95"
          title="Return to Main Portfolio"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform duration-200" />
          <span className="hidden sm:inline">[Back to Portfolio]</span>
          <span className="sm:hidden">[Portfolio]</span>
        </Link>

        <span className="font-clash font-bold text-sm sm:text-xl uppercase tracking-tight truncate text-center">
          <span className="hidden sm:inline">ASHAZ PATHAN // RESUME</span>
          <span className="sm:hidden">RESUME</span>
        </span>

        <button
          onClick={() => setShowPDF(true)}
          className="btn-raw py-1.5 px-3 sm:py-2 sm:px-4 text-xs shrink-0"
        >
          <Eye className="w-3.5 h-3.5 mr-1" />
          <span>View PDF</span>
        </button>
      </nav>

      {/* 1.5s Shimmer Progress Line right below navigation */}
      {loading && (
        <div className="fixed top-[52px] sm:top-[64px] left-0 w-full h-[2.5px] bg-[#1E1E1E]/10 z-50 overflow-hidden pointer-events-none">
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="h-full bg-[#DB4A2B]"
          />
        </div>
      )}

      {/* Content Swap: Instant structure without fade, smooth fade on content */}
      {loading ? (
        <ResumeSkeleton />
      ) : (
        <motion.div
          key="resume-real-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >

          {/* Main Resume Content */}
          <main className="pt-28 pb-20 px-4 sm:px-8 md:px-16 lg:px-24 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Profile Card, Contact, Skills */}
              <div className="lg:col-span-4 space-y-6">
                {/* Identity Card */}
                <div className="p-6 sm:p-8 bg-[#D9D6D0] border-2 border-[#1E1E1E] shadow-[4px_4px_0px_#1E1E1E]">
                  <div className="font-mono text-xs font-bold text-[#DB4A2B] uppercase mb-1">
                // CANDIDATE PROFILE
                  </div>
                  <h1 className="font-clash text-3xl font-bold uppercase tracking-[0.04em] text-[#1E1E1E] mb-1">
                    ASHAZ PATHAN
                  </h1>
                  <p className="font-satoshi text-xs font-bold uppercase tracking-wider text-[#444444] mb-4">
                    Computer Science &amp; Engineering Student &amp; Full-Stack AI Developer
                  </p>

                  {/* Google Student Ambassador Pill */}
                  <a
                    href="https://www.google.com/search?q=google+student+ambassador+2026+Ashaz+Pathan&ie=UTF-8"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Search Google Student Ambassador 2026 Ashaz Pathan"
                    className="p-3 bg-white border border-[#1E1E1E] mb-6 flex items-center justify-between gap-2.5 hover:bg-[#ECEAE5] hover:border-[#4285F4] transition-all cursor-pointer group shadow-[2px_2px_0px_#1E1E1E]"
                  >
                    <div className="flex items-center gap-2.5">
                      <GoogleGIcon className="w-5 h-5 shrink-0" />
                      <div className="text-xs font-bold text-[#1E1E1E] group-hover:text-[#4285F4] transition-colors">
                        <span><GoogleText /> Student Ambassador 2026</span>
                      </div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-[#666666] group-hover:text-[#4285F4] transition-colors shrink-0" />
                  </a>

                  {/* Contact List */}
                  <div className="space-y-3 font-mono text-xs border-t border-[#1E1E1E]/20 pt-4">
                    <div className="flex items-center gap-2 text-[#444444]">
                      <MapPin className="w-4 h-4 text-[#DB4A2B] shrink-0" />
                      <span>Nashik, Maharashtra, India</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#444444]">
                      <Mail className="w-4 h-4 text-[#DB4A2B] shrink-0" />
                      <a href="mailto:ashazpathan8@gmail.com" className="hover:underline">
                        ashazpathan8@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-[#444444]">
                      <Phone className="w-4 h-4 text-[#DB4A2B] shrink-0" />
                      <span>+91 93223 92138</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#444444]">
                      <LinkedinIcon className="w-4 h-4 text-[#DB4A2B] shrink-0" />
                      <a
                        href="https://www.linkedin.com/in/ashaz-pathan-751317336"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        linkedin.com/in/ashaz-pathan
                      </a>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-6 mt-4 border-t border-[#1E1E1E]/20 flex flex-col gap-2.5">
                    <a
                      href="/resume.pdf"
                      download
                      className="btn-raw w-full text-center justify-center text-xs"
                    >
                      <Download className="w-4 h-4 mr-1" />
                      <span>Download Resume PDF</span>
                    </a>
                    <button
                      onClick={() => setShowPDF(true)}
                      className="py-2.5 px-4 bg-white border border-[#1E1E1E] font-satoshi font-bold text-xs uppercase tracking-wider hover:bg-[#1E1E1E] hover:text-white transition-colors cursor-pointer text-center"
                    >
                      Full-Screen PDF Viewer
                    </button>
                  </div>
                </div>

                {/* Skills & Technologies */}
                <div className="p-6 bg-[#ECEAE5] border border-[#1E1E1E]">
                  <h2 className="font-clash text-lg font-bold uppercase tracking-[0.04em] text-[#1E1E1E] mb-4 flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-[#DB4A2B]" />
                    Technical Competencies
                  </h2>

                  <div className="space-y-4 font-satoshi text-xs">
                    <div>
                      <span className="font-bold uppercase tracking-wider text-[#666666] block mb-1.5">
                        Languages
                      </span>
                      <div className="flex flex-wrap gap-1.5 font-mono">
                        {['Python', 'TypeScript', 'C++', 'CUDA C', 'SQL', 'JavaScript', 'HTML5/CSS3'].map((item) => (
                          <span key={item} className="px-2 py-0.5 bg-white border border-[#1E1E1E]/30">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="font-bold uppercase tracking-wider text-[#DB4A2B] block mb-1.5">
                        AI &amp; Model Training
                      </span>
                      <div className="flex flex-wrap gap-1.5 font-mono">
                        {[
                          'Custom SLM Training',
                          'PyTorch',
                          'CUDA Computing',
                          '4-Bit Quantization',
                          'GGUF / llama.cpp',
                          'LoRA / SFT',
                          'Ollama',
                          'Computer Vision',
                          'Face Biometrics'
                        ].map((item) => (
                          <span key={item} className="px-2 py-0.5 bg-white border border-[#DB4A2B]/40 font-bold text-[#1E1E1E]">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="font-bold uppercase tracking-wider text-[#666666] block mb-1.5">
                        Web &amp; Spatial Frameworks
                      </span>
                      <div className="flex flex-wrap gap-1.5 font-mono">
                        {['React 19', 'Three.js / WebGL', 'Vite', 'Node.js', 'Express', 'TailwindCSS', 'Framer Motion'].map((item) => (
                          <span key={item} className="px-2 py-0.5 bg-white border border-[#1E1E1E]/30">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Experience, Education, Honors */}
              <div className="lg:col-span-8 space-y-8">
                {/* Honors & Awards */}
                <div className="p-6 sm:p-8 bg-[#D9D6D0] border-2 border-[#1E1E1E] shadow-[4px_4px_0px_#1E1E1E]">
                  <div className="flex items-center gap-2 mb-4">
                    <Trophy className="w-5 h-5 text-[#DB4A2B]" />
                    <h2 className="font-clash text-xl sm:text-2xl font-bold uppercase tracking-[0.04em] text-[#1E1E1E]">
                      Honors, Awards &amp; Ambassadorship
                    </h2>
                  </div>

                  <div className="space-y-6">
                    {/* 1. Google Student Ambassador */}
                    <a
                      href="https://www.google.com/search?q=google+student+ambassador+2026+Ashaz+Pathan&ie=UTF-8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-5 bg-white border border-[#1E1E1E] block hover:border-[#4285F4] hover:shadow-[4px_4px_0px_#4285F4] transition-all cursor-pointer group"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <GoogleGIcon className="w-5 h-5" />
                          <h3 className="font-clash font-bold text-base sm:text-lg uppercase tracking-[0.03em] group-hover:text-[#4285F4] transition-colors">
                            Google Student Ambassador 2026
                          </h3>
                        </div>
                        <span className="font-mono text-xs font-bold text-[#4285F4] px-2 py-0.5 bg-[#4285F4]/10 border border-[#4285F4]/30 flex items-center gap-1 group-hover:bg-[#4285F4] group-hover:text-white transition-colors">
                          <span>Ambassador</span>
                          <ExternalLink className="w-3 h-3" />
                        </span>
                      </div>
                      <p className="font-satoshi text-xs sm:text-sm text-[#444444] leading-relaxed">
                        Representing Google technologies and AI platforms on campus. Organizing workshops, technical sessions, and facilitating developer growth across modern cloud &amp; ML technologies.
                      </p>
                    </a>

                    {/* 2. MAHA-VEER 2026 1st Place */}
                    <div className="p-5 bg-white border border-[#1E1E1E]">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <Award className="w-5 h-5 text-[#DB4A2B]" />
                          <h3 className="font-clash font-bold text-base sm:text-lg uppercase tracking-[0.03em]">
                            MAHA-VEER 2026 — 1st Place Winner
                          </h3>
                        </div>
                        <span className="font-mono text-xs font-bold text-[#DB4A2B] px-2 py-0.5 bg-[#DB4A2B]/10 border border-[#DB4A2B]/30">
                          National Champion
                        </span>
                      </div>
                      <p className="font-satoshi text-xs sm:text-sm text-[#444444] leading-relaxed">
                        Won 1st Place nationwide at the MAHA-VEER 2026 National Level Project Competition for <strong>Lumina Spaces</strong>, an automated AI architectural redesign and 3D layout planner.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Custom AI Models Training Showcase */}
                <div className="p-6 sm:p-8 bg-[#D9D6D0] border-2 border-[#1E1E1E] shadow-[4px_4px_0px_#1E1E1E]">
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 bg-[#DB4A2B]" />
                      <h2 className="font-clash text-xl sm:text-2xl font-bold uppercase tracking-[0.04em] text-[#1E1E1E]">
                        AI Model Training &amp; Open Weights
                      </h2>
                    </div>
                    <span className="font-mono text-[10px] uppercase font-bold px-2.5 py-1 bg-[#1E1E1E] text-white">
                      Dual SLM Pipeline
                    </span>
                  </div>
                  <p className="font-satoshi text-xs sm:text-sm text-[#444444] leading-relaxed mb-4">
                    Trained and released custom Small Language Models (SLMs) running completely offline on consumer PCs with zero cloud fees. Both models are directly integrated as the brain of <strong>Convo AI</strong>:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
                    {/* Vesper 1.5B */}
                    <div className="p-4 bg-white border-2 border-[#1E1E1E] relative overflow-hidden">
                      <div className="w-1.5 h-full bg-[#E11D74] absolute top-0 left-0" />
                      <div className="pl-2">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-clash font-bold text-sm text-[#E11D74] uppercase">VESPER 1.5B INSTRUCT</span>
                          <span className="text-[10px] px-1.5 py-0.5 bg-[#E11D74]/10 text-[#E11D74] font-bold border border-[#E11D74]/30">4-BIT TUNING</span>
                        </div>
                        <p className="font-satoshi text-xs text-[#555555] mb-2 leading-relaxed">
                          1.54 Billion parameters optimized for sub-second voice loops and Windows macro control in Convo AI.
                        </p>
                        <div className="text-[11px] text-[#666666] space-y-0.5">
                          <div>&bull; VRAM: ~950 MB (Q4_K_M)</div>
                          <div>&bull; Speed: 75–110 words/sec</div>
                          <div>&bull; Integrated: Convo AI Real-Time Voice Brain</div>
                        </div>
                      </div>
                    </div>

                    {/* Obsidian 3B */}
                    <div className="p-4 bg-white border-2 border-[#1E1E1E] relative overflow-hidden">
                      <div className="w-1.5 h-full bg-[#8B5CF6] absolute top-0 left-0" />
                      <div className="pl-2">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-clash font-bold text-sm text-[#8B5CF6] uppercase">OBSIDIAN 3B GENESIS</span>
                          <span className="text-[10px] px-1.5 py-0.5 bg-[#8B5CF6]/10 text-[#8B5CF6] font-bold border border-[#8B5CF6]/30">CUDA FULL WEIGHTS</span>
                        </div>
                        <p className="font-satoshi text-xs text-[#555555] mb-2 leading-relaxed">
                          3.09 Billion parameters trained with 100% full weights via CUDA computing for multi-step logic and coding.
                        </p>
                        <div className="text-[11px] text-[#666666] space-y-0.5">
                          <div>&bull; VRAM: ~2.1 GB (Q4_K_M)</div>
                          <div>&bull; Speed: 45–60 words/sec</div>
                          <div>&bull; Integrated: Convo AI Deep Thinking &amp; Reasoning Core</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Experience & Practical Training */}
                <div className="p-6 sm:p-8 bg-[#ECEAE5] border border-[#1E1E1E]">
                  <div className="flex items-center gap-2 mb-6">
                    <Briefcase className="w-5 h-5 text-[#DB4A2B]" />
                    <h2 className="font-clash text-xl sm:text-2xl font-bold uppercase tracking-[0.04em] text-[#1E1E1E]">
                      Experience &amp; Industry Training
                    </h2>
                  </div>

                  <div className="space-y-6">
                    {/* AI Model Trainer Experience */}
                    <div className="pb-6 border-b border-[#1E1E1E]/20">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                        <h3 className="font-clash font-bold text-base sm:text-lg uppercase tracking-[0.03em] text-[#1E1E1E]">
                          AI Model Trainer &amp; Research Architect
                        </h3>
                        <span className="font-mono text-xs text-[#666666]">
                          2024 – Present
                        </span>
                      </div>
                      <p className="font-satoshi text-xs font-bold text-[#DB4A2B] uppercase mb-2">
                        Autonomous Systems &bull; Nashik, India
                      </p>
                      <p className="font-satoshi text-xs sm:text-sm text-[#444444] leading-relaxed">
                        Trained custom Small Language Models (SLMs) from scratch and fine-tuned for local on-device execution. Built <strong>Vesper 1.5B</strong> for sub-second voice interactions and <strong>Obsidian 3B</strong> with CUDA computing for deep code and reasoning tasks. Directly integrated both models into <strong>Convo AI</strong> as an offline dual-intelligence engine.
                      </p>
                    </div>

                    <div className="pb-6 border-b border-[#1E1E1E]/20">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                        <h3 className="font-clash font-bold text-base sm:text-lg uppercase tracking-[0.03em] text-[#1E1E1E]">
                          Full-Stack AI/ML Engineer Trainee
                        </h3>
                        <span className="font-mono text-xs text-[#666666]">
                          3 Months &bull; NPIT Solutions
                        </span>
                      </div>
                      <p className="font-satoshi text-xs font-bold text-[#DB4A2B] uppercase mb-2">
                        NPIT Solutions Pvt. Ltd. &bull; Nashik, India
                      </p>
                      <p className="font-satoshi text-xs sm:text-sm text-[#444444] leading-relaxed">
                        Designed and trained machine learning pipelines for automated object segmentation and real-time inference. Engineered production React web clients and backend Node.js microservices.
                      </p>
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                        <h3 className="font-clash font-bold text-base sm:text-lg uppercase tracking-[0.03em] text-[#1E1E1E]">
                          Lead Architect &amp; Developer
                        </h3>
                        <span className="font-mono text-xs text-[#666666]">
                          2023 – Present
                        </span>
                      </div>
                      <p className="font-satoshi text-xs font-bold text-[#DB4A2B] uppercase mb-2">
                        Ashaz Apps Ecosystem &bull; Nashik, India
                      </p>
                      <p className="font-satoshi text-xs sm:text-sm text-[#444444] leading-relaxed">
                        Architected 13+ production web apps including Convo AI (Desktop voice OS), Filex, Focus, and Invoice Generator with automated workflows and rich Three.js 3D web graphics.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div className="p-6 sm:p-8 bg-[#D9D6D0] border border-[#1E1E1E]">
                  <div className="flex items-center gap-2 mb-6">
                    <GraduationCap className="w-5 h-5 text-[#DB4A2B]" />
                    <h2 className="font-clash text-xl sm:text-2xl font-bold uppercase tracking-[0.04em] text-[#1E1E1E]">
                      Education
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {/* Current Degree */}
                    <div className="p-4 bg-white border-2 border-[#1E1E1E] shadow-[3px_3px_0px_#1E1E1E]">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-clash font-bold text-base uppercase text-[#1E1E1E]">
                            B.Tech in Computer Science &amp; Engineering
                          </h3>
                          <span className="font-mono text-[10px] font-bold text-[#DB4A2B] px-1.5 py-0.5 bg-[#DB4A2B]/10 border border-[#DB4A2B]/30 uppercase">
                            Current
                          </span>
                        </div>
                        <span className="font-mono text-xs text-[#DB4A2B] font-bold">2026 – 2029</span>
                      </div>
                      <p className="font-satoshi text-xs font-bold text-[#DB4A2B] uppercase mb-1">
                        G H Raisoni College of Engineering and Management &bull; Nagpur, Maharashtra, India
                      </p>
                      <p className="font-satoshi text-xs text-[#444444]">
                        Branch: Computer Science &amp; Engineering &bull; Focus: Advanced Artificial Intelligence, Machine Learning, Distributed Systems, Cloud Architecture &amp; Autonomous Software.
                      </p>
                    </div>

                    {/* Previous Diploma */}
                    <div className="p-4 bg-white border border-[#1E1E1E]">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                        <h3 className="font-clash font-bold text-base uppercase text-[#1E1E1E]">
                          Diploma in Computer Engineering
                        </h3>
                        <span className="font-mono text-xs text-[#666666]">2023 – 2026</span>
                      </div>
                      <p className="font-satoshi text-xs font-bold text-[#666666] uppercase mb-1">
                        MET Bhujbal Knowledge City &bull; Nashik, Maharashtra, India
                      </p>
                      <p className="font-satoshi text-xs text-[#444444]">
                        Focus: Data Structures &amp; Algorithms, Operating Systems, Database Management, Computer Networks, Software Engineering.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>

          {/* Footer with Return to Portfolio Action */}
          <footer className="py-12 text-center font-satoshi text-xs text-[#666666] border-t border-[#1E1E1E]/20 flex flex-col items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-4 py-2 border border-[#1E1E1E]/25 hover:border-[#DB4A2B] bg-transparent text-[#1E1E1E] hover:text-[#DB4A2B] font-satoshi font-bold text-xs uppercase tracking-wider transition-all duration-200 group active:scale-95"
              title="Return to Main Portfolio"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform duration-200" />
              <span>[Back to Portfolio]</span>
            </Link>
            <p>© {new Date().getFullYear()} Ashaz Pathan • OPEN FOR CONTRACTS & CORE ROLES</p>
          </footer>
        </motion.div>
      )}
    </div>
  );
}
