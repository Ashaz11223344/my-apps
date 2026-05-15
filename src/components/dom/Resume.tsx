import { motion } from 'framer-motion';
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
  Trophy
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Resume() {
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
    <div className="relative z-10 min-h-screen text-white selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass px-6 py-4 flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-sm font-medium hover:text-blue-400 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>
        <div className="font-space font-bold text-xl tracking-tighter">
          <span className="gradient-text uppercase">Ashaz Pathan</span>
        </div>
        <a 
          href="/resume.pdf" 
          download 
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-600/20"
        >
          <Download className="w-4 h-4" />
          Download PDF
        </a>
      </nav>

      <main className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Profile Info */}
            <motion.div 
              variants={itemVariants} 
              whileHover={{ rotateX: -5, rotateY: 5, z: 50 }}
              className="glass-card p-8 rounded-3xl border border-white/5 transform-gpu transition-all duration-300"
            >
              <h1 className="text-3xl font-space font-bold mb-2">Ashaz Pathan</h1>
              <p className="text-blue-400 font-medium mb-6">Computer Engineering Student</p>
              
              <div className="space-y-4 text-sm text-white/70">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>ashazpathan8@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>+91 8308553555</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span>Nashik, Maharashtra, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                    <Code className="w-4 h-4" />
                  </div>
                  <a href="https://github.com/Ashaz11223344" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">github.com/Ashaz11223344</a>
                </div>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div 
              variants={itemVariants} 
              whileHover={{ rotateX: -5, rotateY: 5, z: 50 }}
              className="glass-card p-8 rounded-3xl border border-white/5 transform-gpu transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap className="w-5 h-5 text-blue-400" />
                <h2 className="text-xl font-space font-bold">Education</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-white">Diploma in Computer Engineering</h3>
                  <p className="text-sm text-white/60">MET Bhujbal Knowledge City, Nashik</p>
                  <p className="text-xs text-blue-400 mt-1">2023 — 2026</p>
                </div>
                <div>
                  <h3 className="font-bold text-white">Secondary School (Class 10th)</h3>
                  <p className="text-sm text-white/60">K K Wagh Universal School, Nashik</p>
                  <p className="text-xs text-blue-400 mt-1">2022 — 2023</p>
                </div>
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div 
              variants={itemVariants} 
              whileHover={{ rotateX: -5, rotateY: 5, z: 50 }}
              className="glass-card p-8 rounded-3xl border border-white/5 transform-gpu transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-6">
                <Code2 className="w-5 h-5 text-blue-400" />
                <h2 className="text-xl font-space font-bold">Technical Skills</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Python', 'React', 'TypeScript', 'HTML/CSS', 'MySQL', 'NumPy', 'Pandas', 'Matplotlib', 'C'].map((skill) => (
                  <span key={skill} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Summary */}
            <motion.div 
              variants={itemVariants} 
              whileHover={{ rotateX: 5, rotateY: -5, z: 50 }}
              className="glass-card p-8 rounded-3xl border border-white/5 transform-gpu transition-all duration-300"
            >
              <h2 className="text-xl font-space font-bold mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-400" />
                Professional Summary
              </h2>
              <p className="text-white/70 leading-relaxed">
                An ambitious Diploma student in Computer Engineering driven by curiosity, innovation, and continuous learning. 
                Recognized for combining logical problem solving with creativity to build practical web applications 
                using Python and modern web technologies. Passionate about developing real-world projects that 
                transform ideas into efficient and impactful digital products.
              </p>
            </motion.div>

            {/* Experience/Internship */}
            <motion.div 
              variants={itemVariants} 
              whileHover={{ rotateX: 5, rotateY: -5, z: 50 }}
              className="glass-card p-8 rounded-3xl border border-white/5 transform-gpu transition-all duration-300"
            >
              <h2 className="text-xl font-space font-bold mb-6 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-blue-400" />
                Internship
              </h2>
              <div className="relative pl-8 border-l border-white/10 space-y-8">
                <div className="relative">
                  <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-blue-600 border-4 border-[#0f0f13]" />
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg">Full Stack App Development (AI & ML)</h3>
                    <span className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10 text-white/50">June 2025 - Aug 2025</span>
                  </div>
                  <p className="text-blue-400 text-sm mb-3">NPIT Solutions</p>
                  <ul className="text-sm text-white/60 space-y-2 list-disc list-inside">
                    <li>Completed an intensive 3-month industrial training focused on building and deploying machine learning models into full stack applications.</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Projects */}
            <motion.div 
              variants={itemVariants} 
              whileHover={{ rotateX: 5, rotateY: -5, z: 50 }}
              className="glass-card p-8 rounded-3xl border border-white/5 transform-gpu transition-all duration-300"
            >
              <h2 className="text-xl font-space font-bold mb-6 flex items-center gap-2">
                <ExternalLink className="w-5 h-5 text-blue-400" />
                Featured Projects
              </h2>
              <div className="space-y-8">
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
                    <h3 className="font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                    <p className="text-sm text-white/60 mb-3 leading-relaxed">{project.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-[10px] uppercase tracking-wider font-bold text-white/40">Tools:</span>
                      <span className="text-xs text-blue-400/80">{project.tools}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div 
              variants={itemVariants} 
              whileHover={{ rotateX: 5, rotateY: -5, z: 50 }}
              className="glass-card p-8 rounded-3xl border border-white/5 transform-gpu transition-all duration-300"
            >
              <h2 className="text-xl font-space font-bold mb-6 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-blue-400" />
                Achievements
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "JIT Project Competition", role: "Participation", detail: "Demonstrated practical application of programming and problem-solving skills." },
                  { title: "IIT Bombay Cozmo Clench", role: "Participation", detail: "Competed in a national level technical competition, gaining exposure to advanced technology." },
                  { title: "MET Bhujbal HackFusion", role: "Semi-Finalist", detail: "Advanced to semi-finals competing against degree-level teams." }
                ].map((ach, index) => (
                  <div key={index} className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-bold text-sm">{ach.title}</h4>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-600/20 text-blue-400 border border-blue-600/30">{ach.role}</span>
                    </div>
                    <p className="text-xs text-white/50">{ach.detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="py-10 text-center text-white/30 text-xs border-t border-white/5">
        <p>© 2026 Ashaz Pathan • Designed & Built with Love</p>
      </footer>
    </div>
  );
}
