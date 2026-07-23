import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, 
  Download, 
  ArrowLeft, 
  Mail, 
  Phone, 
  MapPin, 
  Code, 
  ExternalLink,
  GraduationCap,
  Briefcase,
  Code2,
  Trophy,
  Eye,
  X,
  Award
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ModeToggle from './ModeToggle';

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

/* Authentic 4-color Google G Icon */
const GoogleGIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" {...props}>
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
  </svg>
);

/* Multi-colored Google Brand Text */
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
          className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full h-full max-w-5xl max-h-[95vh] rounded-xl sm:rounded-2xl overflow-hidden glass-elevated shadow-2xl flex flex-col"
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-3 sm:px-5 py-3 border-b" style={{ background: 'var(--glass-dark)', borderColor: 'var(--glass-border)' }}>
              <div className="flex items-center gap-2 sm:gap-3 truncate">
                <div className="flex gap-1.5 shrink-0">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center gap-2 px-2.5 py-1 rounded-md glass truncate">
                  <FileText className="w-3.5 h-3.5 shrink-0" style={{ color: 'var(--text-tertiary)' }} />
                  <span className="text-[11px] sm:text-xs font-medium truncate" style={{ color: 'var(--text-secondary)' }}>Ashaz_Pathan_Resume.pdf</span>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                <a
                  href="/resume.pdf"
                  download
                  className="gradient-btn flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-lg text-xs font-medium"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Download</span>
                </a>
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-lg glass flex items-center justify-center transition-all duration-200 cursor-pointer"
                  title="Close preview"
                >
                  <X className="w-4 h-4" style={{ color: 'var(--text-secondary)' }} />
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

export default function Resume() {
  const [showPDF, setShowPDF] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="relative z-10 min-h-screen selection:bg-purple-500/30" style={{ color: 'var(--text-primary)' }}>
      {/* PDF Preview Modal */}
      <PDFPreviewModal isOpen={showPDF} onClose={() => setShowPDF(false)} />

      {/* Apple-Style Floating Glass Navigation Bar */}
      <nav 
        className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 w-[92%] sm:w-[88%] max-w-5xl z-50 glass rounded-full px-4 sm:px-7 py-2.5 sm:py-3 flex justify-between items-center transition-all duration-300"
        style={{
          boxShadow: 'var(--shadow-ambient)',
          borderRadius: '9999px',
        }}
      >
        <Link 
          to="/" 
          className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium transition-colors group px-3 py-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10"
          style={{ color: 'var(--accent-primary)' }}
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="hidden sm:inline font-space font-semibold">Back to Portfolio</span>
          <span className="sm:hidden font-space font-semibold">Back</span>
        </Link>
        <div className="font-space font-bold text-base sm:text-xl tracking-tighter">
          <span className="gradient-text uppercase">Ashaz Pathan</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <ModeToggle />
          <button 
            onClick={() => setShowPDF(true)}
            className="gradient-btn flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 hover:scale-105 shadow-md"
          >
            <Eye className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">View Resume</span>
            <span className="sm:hidden">PDF</span>
          </button>
        </div>
      </nav>

      <main className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 max-w-5xl mx-auto">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6 sm:space-y-8">
            {/* Profile Info */}
            <motion.div 
              variants={itemVariants} 
              whileHover={{ rotateX: -3, rotateY: 3, z: 30 }}
              className="glass-card p-6 sm:p-8 rounded-2xl sm:rounded-3xl transform-gpu transition-all duration-300"
            >
              <h1 className="text-2xl sm:text-3xl font-space font-bold mb-1" style={{ color: 'var(--text-primary)' }}>Ashaz Pathan</h1>
              <p className="text-xs sm:text-sm font-semibold mb-1" style={{ color: 'var(--accent-primary)' }}>Computer Engineering Student</p>
              
              {/* Google Student Ambassador Highlight Pill with Google Theme */}
              <div 
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-bold border mb-6 mt-1 shadow-sm transition-all duration-300"
                style={{
                  background: 'rgba(66, 133, 244, 0.08)',
                  borderColor: 'rgba(66, 133, 244, 0.3)',
                  boxShadow: '0 0 12px rgba(66, 133, 244, 0.15)'
                }}
              >
                <GoogleGIcon className="w-4 h-4 shrink-0" />
                <span>
                  <GoogleText /> <span style={{ color: 'var(--text-primary)' }}>Student Ambassador (2026)</span>
                </span>
              </div>
              
              <div className="space-y-3.5 text-xs sm:text-sm" style={{ color: 'var(--text-secondary)' }}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg glass flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-accent-primary" />
                  </div>
                  <span className="truncate">ashazpathan8@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg glass flex items-center justify-center shrink-0">
                    <LinkedinIcon className="w-4 h-4 text-accent-primary" />
                  </div>
                  <a href="https://www.linkedin.com/in/ashaz-pathan-751317336" target="_blank" rel="noreferrer" className="hover:underline transition-all truncate">
                    linkedin.com/in/ashaz-pathan
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg glass flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-accent-primary" />
                  </div>
                  <span>+91 8308553555</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg glass flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-accent-primary" />
                  </div>
                  <span>Nashik, Maharashtra, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg glass flex items-center justify-center shrink-0">
                    <Code className="w-4 h-4 text-accent-primary" />
                  </div>
                  <a href="https://github.com/Ashaz11223344" target="_blank" rel="noreferrer" className="hover:underline transition-all truncate">github.com/Ashaz11223344</a>
                </div>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div 
              variants={itemVariants} 
              whileHover={{ rotateX: -3, rotateY: 3, z: 30 }}
              className="glass-card p-6 sm:p-8 rounded-2xl sm:rounded-3xl transform-gpu transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap className="w-5 h-5 text-accent-primary" />
                <h2 className="text-lg sm:text-xl font-space font-bold" style={{ color: 'var(--text-primary)' }}>Education</h2>
              </div>
              <div className="space-y-5 sm:space-y-6">
                <div>
                  <h3 className="font-bold text-sm sm:text-base" style={{ color: 'var(--text-primary)' }}>Diploma in Computer Engineering</h3>
                  <p className="text-xs sm:text-sm" style={{ color: 'var(--text-secondary)' }}>MET Bhujbal Knowledge City, Nashik</p>
                  <p className="text-xs font-semibold mt-1" style={{ color: 'var(--accent-primary)' }}>2023 — 2026</p>
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base" style={{ color: 'var(--text-primary)' }}>Secondary School (Class 10th)</h3>
                  <p className="text-xs sm:text-sm" style={{ color: 'var(--text-secondary)' }}>K K Wagh Universal School, Nashik</p>
                  <p className="text-xs font-semibold mt-1" style={{ color: 'var(--accent-primary)' }}>2022 — 2023</p>
                </div>
              </div>
            </motion.div>

            {/* Technical Skills */}
            <motion.div 
              variants={itemVariants} 
              whileHover={{ rotateX: -3, rotateY: 3, z: 30 }}
              className="glass-card p-6 sm:p-8 rounded-2xl sm:rounded-3xl transform-gpu transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-6">
                <Code2 className="w-5 h-5 text-accent-primary" />
                <h2 className="text-lg sm:text-xl font-space font-bold" style={{ color: 'var(--text-primary)' }}>Technical Skills</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Python', 'React', 'TypeScript', 'HTML/CSS', 'MySQL', 'NumPy', 'Pandas', 'Matplotlib', 'C'].map((skill) => (
                  <span key={skill} className="px-3 py-1 rounded-full text-xs font-medium glass-inset" style={{ color: 'var(--text-primary)' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            {/* Summary */}
            <motion.div 
              variants={itemVariants} 
              whileHover={{ rotateX: 3, rotateY: -3, z: 30 }}
              className="glass-card p-6 sm:p-8 rounded-2xl sm:rounded-3xl transform-gpu transition-all duration-300"
            >
              <h2 className="text-lg sm:text-xl font-space font-bold mb-3 sm:mb-4 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                <FileText className="w-5 h-5 text-accent-primary" />
                Professional Summary
              </h2>
              <p className="text-sm sm:text-base leading-relaxed font-inter" style={{ color: 'var(--text-secondary)' }}>
                An ambitious Computer Engineering student and <strong className="font-bold"><GoogleText /> Student Ambassador (2026)</strong> driven by curiosity, innovation, and continuous learning. 
                Recognized for combining logical problem solving with creativity to build practical web applications 
                using Python and modern web technologies. Passionate about developing real-world projects that 
                transform ideas into efficient and impactful digital products.
              </p>
            </motion.div>

            {/* Internship */}
            <motion.div 
              variants={itemVariants} 
              whileHover={{ rotateX: 3, rotateY: -3, z: 30 }}
              className="glass-card p-6 sm:p-8 rounded-2xl sm:rounded-3xl transform-gpu transition-all duration-300"
            >
              <h2 className="text-lg sm:text-xl font-space font-bold mb-6 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                <Briefcase className="w-5 h-5 text-accent-primary" />
                Internship
              </h2>
              <div className="relative pl-6 sm:pl-8 border-l space-y-8" style={{ borderColor: 'var(--glass-border)' }}>
                <div className="relative">
                  <div className="absolute -left-[31px] sm:-left-[37px] top-1 w-4 h-4 rounded-full bg-accent-primary border-4" style={{ borderColor: 'var(--bg-base)' }} />
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1">
                    <h3 className="font-bold text-base sm:text-lg" style={{ color: 'var(--text-primary)' }}>Full Stack App Development (AI & ML)</h3>
                    <span className="text-[10px] sm:text-xs px-2 py-0.5 sm:py-1 rounded glass self-start" style={{ color: 'var(--text-tertiary)' }}>June 2025 - Aug 2025</span>
                  </div>
                  <p className="font-semibold text-xs sm:text-sm mb-3" style={{ color: 'var(--accent-primary)' }}>NPIT Solutions</p>
                  <ul className="text-xs sm:text-sm space-y-2 list-disc list-inside" style={{ color: 'var(--text-secondary)' }}>
                    <li>Completed an intensive 3-month industrial training focused on building and deploying machine learning models into full stack applications.</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Featured Projects */}
            <motion.div 
              variants={itemVariants} 
              whileHover={{ rotateX: 3, rotateY: -3, z: 30 }}
              className="glass-card p-6 sm:p-8 rounded-2xl sm:rounded-3xl transform-gpu transition-all duration-300"
            >
              <h2 className="text-lg sm:text-xl font-space font-bold mb-6 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                <ExternalLink className="w-5 h-5 text-accent-primary" />
                Featured Projects
              </h2>
              <div className="space-y-6 sm:space-y-8">
                {[
                  {
                    title: "Lumina Spaces – AI Interior Redesign System",
                    desc: "An intelligent spatial redesign platform that transforms static room images into structurally accurate, build-ready 3D concepts while preserving architectural geometry.",
                    tools: "React 19, TypeScript, Three.js, WebGL, Multimodal AI"
                  },
                  {
                    title: "MovieQ – AI Powered Mood Based Recommendation Engine",
                    desc: "A movie discovery platform leveraging multimodal search and AI algorithms to provide personalized film suggestions across a database of millions of titles.",
                    tools: "React 18, TypeScript, OpenAI API, TMDB API, Tailwind CSS"
                  },
                  {
                    title: "Attendify – Smart Attendance Management System",
                    desc: "A real-time, role-based educational platform that automates attendance tracking through client-side facial recognition and reactive data syncing.",
                    tools: "React 18, TypeScript, Convex (BaaS), face-api.js, Tailwind CSS"
                  }
                ].map((project, index) => (
                  <div key={index} className="group">
                    <h3 className="font-bold text-sm sm:text-base mb-1.5 sm:mb-2 group-hover:text-accent-primary transition-colors" style={{ color: 'var(--text-primary)' }}>{project.title}</h3>
                    <p className="text-xs sm:text-sm mb-2.5 sm:mb-3 leading-relaxed font-inter" style={{ color: 'var(--text-secondary)' }}>{project.desc}</p>
                    <div className="flex flex-wrap gap-2 items-center">
                      <span className="text-[10px] uppercase tracking-wider font-bold" style={{ color: 'var(--text-tertiary)' }}>Tools:</span>
                      <span className="text-[11px] sm:text-xs font-semibold" style={{ color: 'var(--accent-primary)' }}>{project.tools}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Achievements & Leadership */}
            <motion.div 
              variants={itemVariants} 
              whileHover={{ rotateX: 3, rotateY: -3, z: 30 }}
              className="glass-card p-6 sm:p-8 rounded-2xl sm:rounded-3xl transform-gpu transition-all duration-300"
            >
              <h2 className="text-lg sm:text-xl font-space font-bold mb-6 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                <Trophy className="w-5 h-5 text-accent-primary" />
                Achievements & Leadership
              </h2>
              <div className="flex flex-col gap-4">
                {/* 1. Google Student Ambassador 2026 — Official Google Brand Theme */}
                <div 
                  className="p-5 sm:p-6 rounded-xl sm:rounded-2xl relative overflow-hidden transition-all duration-300"
                  style={{
                    background: 'var(--glass-elevated)',
                    border: '1px solid transparent',
                    backgroundImage: 'linear-gradient(var(--glass-elevated), var(--glass-elevated)), linear-gradient(135deg, #4285F4, #EA4335, #FBBC05, #34A853)',
                    backgroundOrigin: 'border-box',
                    backgroundClip: 'padding-box, border-box',
                    boxShadow: '0 8px 32px rgba(66, 133, 244, 0.12)'
                  }}
                >
                  <div className="flex flex-wrap justify-between items-center mb-3 gap-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl flex items-center justify-center p-1.5 shadow-md" style={{ background: 'rgba(255, 255, 255, 0.95)' }}>
                        <GoogleGIcon className="w-5 h-5 shrink-0" />
                      </div>
                      <h4 className="font-bold text-base sm:text-lg font-space" style={{ color: 'var(--text-primary)' }}>
                        <GoogleText /> Student Ambassador
                      </h4>
                    </div>
                    <span 
                      className="flex items-center gap-1.5 text-[10px] sm:text-[11px] px-3 py-1 rounded-full font-bold uppercase tracking-wider shadow-sm"
                      style={{
                        background: 'linear-gradient(135deg, rgba(66, 133, 244, 0.15), rgba(52, 168, 83, 0.15))',
                        color: '#4285F4',
                        border: '1px solid rgba(66, 133, 244, 0.4)'
                      }}
                    >
                      <GoogleGIcon className="w-3.5 h-3.5" />
                      Ambassador 2026
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm mb-2 font-semibold" style={{ color: '#4285F4' }}>
                    Google Student Ambassador Program • 2026
                  </p>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Representing Google developer ecosystem and technologies on campus, organizing technical workshops, connecting student developers with Google tools (AI/ML, Cloud, Web), and building collaborative tech communities.
                  </p>
                </div>

                {/* 2. MAHA-VEER 2026 — Featured 1st Place */}
                <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl glass-elevated relative overflow-hidden">
                  <div className="flex flex-wrap justify-between items-center mb-2 gap-2">
                    <div className="flex items-center gap-2">
                      <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                      <h4 className="font-bold text-base sm:text-lg font-space" style={{ color: 'var(--text-primary)' }}>MAHA-VEER 2026</h4>
                    </div>
                    <span className="flex items-center gap-1 text-[10px] sm:text-[11px] px-3 py-1 rounded-full bg-amber-500/20 text-amber-500 border border-amber-500/40 font-bold uppercase tracking-wider">
                      <Award className="w-3.5 h-3.5" />
                      1st Place
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm mb-1.5 font-semibold" style={{ color: 'var(--accent-primary)' }}>National Level Technical Event • Mahavir Polytechnic, Nashik</p>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>Won first place and trophy with the project <span className="font-semibold text-accent-primary">Lumina Spaces – AI Interior Redesign System</span>, competing at the national level against teams from across the country.</p>
                </div>

                {/* 3. Stacked Competition Cards - Full Width Vertical Stack */}
                {[
                  { title: "JIT Project Competition", role: "Participation", detail: "Demonstrated practical application of programming and problem-solving skills." },
                  { title: "IIT Bombay Cozmo Clench", role: "Participation", detail: "Competed in a national level technical competition, gaining exposure to advanced technology." },
                  { title: "MET Bhujbal HackFusion", role: "Semi-Finalist", detail: "Advanced to semi-finals competing against degree-level teams." }
                ].map((ach, index) => (
                  <div key={index} className="p-4 sm:p-5 rounded-xl sm:rounded-2xl glass">
                    <div className="flex flex-wrap justify-between items-center mb-2 gap-2">
                      <h4 className="font-bold text-base sm:text-lg font-space" style={{ color: 'var(--text-primary)' }}>{ach.title}</h4>
                      <span className="text-[10px] sm:text-[11px] px-3 py-1 rounded-full font-semibold text-accent-primary glass-inset shrink-0">{ach.role}</span>
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{ach.detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="py-8 sm:py-10 text-center text-xs border-t" style={{ borderColor: 'var(--glass-border)', color: 'var(--text-tertiary)' }}>
        <p>© {new Date().getFullYear()} Ashaz Pathan • Designed & Built with Love</p>
      </footer>
    </div>
  );
}
