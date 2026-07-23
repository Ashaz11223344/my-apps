import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useMotionTemplate, AnimatePresence } from 'framer-motion';
import { projects, type Project } from '../../data/projects';
import { X, ExternalLink, Maximize2, Monitor } from 'lucide-react';

export default function ProjectGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [expandedProject, setExpandedProject] = useState<Project | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (expandedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [expandedProject]);

  // Close modal on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setExpandedProject(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <>
      <section id="projects" ref={containerRef} className="py-16 sm:py-32 px-4 sm:px-6 md:px-24 relative z-10 pointer-events-auto">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 sm:mb-24">
            <p className="text-xs sm:text-sm tracking-[0.2em] text-accent-primary font-space uppercase mb-2 sm:mb-4">Selected Work</p>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-space font-bold" style={{ color: 'var(--text-primary)' }}>
              Featured <span className="gradient-text italic">Projects</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-12 sm:gap-24 md:gap-32">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onExpand={() => setExpandedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Full-Screen Expanded Modal */}
      <AnimatePresence>
        {expandedProject && (
          <ExpandedProjectModal
            project={expandedProject}
            onClose={() => setExpandedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

/* ─── Project Card with Immediate Auto-Loading Preview ─── */
function ProjectCard({ project, index, onExpand }: { project: Project; index: number; onExpand: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const iframeContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const [isMobile, setIsMobile] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [iframeScale, setIframeScale] = useState(0.35);

  useEffect(() => {
    const container = iframeContainerRef.current;
    if (!container) return;

    const IFRAME_WIDTH = 1440;

    const updateScale = () => {
      const { width } = container.getBoundingClientRect();
      if (width > 0) {
        setIframeScale(width / IFRAME_WIDTH);
      }
    };

    updateScale();

    const resizeObserver = new ResizeObserver(updateScale);
    resizeObserver.observe(container);
    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const y = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [30, -30]);
  const isEven = index % 2 === 0;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const background = useMotionTemplate`radial-gradient(800px circle at ${mouseX}px ${mouseY}px, ${project.color}30, transparent 80%)`;
  const iframeVirtualHeight = iframeScale > 0 ? Math.ceil((1 / iframeScale) * 900) : 900;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`project-card flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 sm:gap-8 md:gap-16 items-stretch`}
    >
      {/* Live Website Preview */}
      <motion.div
        style={{ y }}
        className="w-full md:w-[55%] aspect-[16/10] rounded-2xl relative overflow-hidden group cursor-pointer shrink-0"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onExpand}
      >
        {/* Outer glow border */}
        <div
          className="absolute -inset-[1px] rounded-2xl z-0 opacity-60 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, ${project.color}50, transparent 40%, transparent 60%, ${project.color}30)`,
          }}
        />

        {/* Inner glass card */}
        <div
          className="absolute inset-[1px] rounded-2xl overflow-hidden z-[1]"
          style={{ background: 'var(--bg-inset)' }}
        >
          {/* Browser Chrome Bar */}
          <div
            className="h-8 flex items-center px-3 gap-2 border-b relative z-30 shrink-0"
            style={{ background: 'var(--glass-dark)', borderColor: 'var(--glass-border)' }}
          >
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex-1 mx-2">
              <div
                className="rounded-md px-3 py-0.5 text-[10px] truncate max-w-[160px] sm:max-w-xs mx-auto text-center font-mono"
                style={{ background: 'var(--bg-base)', color: 'var(--text-tertiary)' }}
              >
                {project.link.replace(/^https?:\/\//, '').replace(/\/$/, '')}
              </div>
            </div>
            <Monitor className="w-3 h-3" style={{ color: 'var(--text-tertiary)' }} />
          </div>

          {/* Iframe Container */}
          <div ref={iframeContainerRef} className="relative w-full h-[calc(100%-2rem)] overflow-hidden">
            {/* Loading skeleton while website preview is loading */}
            {!iframeLoaded && (
              <div
                className="absolute inset-0 z-20 flex flex-col items-center justify-center p-4 sm:p-6 text-center"
                style={{ background: 'var(--bg-inset)' }}
              >
                <div 
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 animate-pulse"
                  style={{ 
                    background: `linear-gradient(135deg, ${project.color}20, ${project.color}40)`,
                    border: `1px solid ${project.color}50`,
                    boxShadow: `0 0 20px ${project.color}20`
                  }}
                >
                  <span className="text-xl sm:text-2xl font-bold font-space" style={{ color: project.color }}>
                    {project.title.charAt(0)}
                  </span>
                </div>
                <h4 className="font-space font-medium text-xs sm:text-sm mb-1" style={{ color: 'var(--text-primary)' }}>{project.title}</h4>
                <div 
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg border text-[9px] sm:text-[10px] uppercase tracking-wider font-space mt-1"
                  style={{ 
                    borderColor: `${project.color}50`,
                    background: `${project.color}15`,
                    color: 'var(--text-secondary)'
                  }}
                >
                  <div
                    className="w-3 h-3 rounded-full border-2 border-transparent animate-spin"
                    style={{ borderTopColor: project.color, borderRightColor: `${project.color}50` }}
                  />
                  Loading Preview...
                </div>
              </div>
            )}

            {/* Actual Iframe — Loads automatically on page load */}
            <iframe
              src={project.link}
              title={`${project.title} preview`}
              className="absolute top-0 left-0 border-none transition-opacity duration-700 ease-out"
              style={{
                width: '1440px',
                height: `${iframeVirtualHeight}px`,
                transform: `scale(${iframeScale})`,
                transformOrigin: 'top left',
                pointerEvents: 'none',
                opacity: iframeLoaded ? 1 : 0,
              }}
              sandbox="allow-scripts allow-same-origin allow-popups"
              loading="eager"
              onLoad={() => setIframeLoaded(true)}
            />

            {/* Hover / Tap overlay */}
            <motion.div
              className="absolute inset-0 z-10 flex items-center justify-center"
              initial={false}
              animate={{ opacity: isHovered && iframeLoaded ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
              <motion.div
                className="relative flex flex-col items-center gap-2 sm:gap-3"
                initial={false}
                animate={{ y: isHovered ? 0 : 10, scale: isHovered ? 1 : 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center border border-white/30"
                  style={{ background: `${project.color}40` }}
                >
                  <Maximize2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <span className="text-white text-xs sm:text-sm font-medium tracking-wider uppercase font-space">
                  Expand Preview
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Interactive hover glow */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-[2] rounded-2xl"
          style={{ background }}
        />
      </motion.div>

      {/* Info Section */}
      <div
        className="w-full md:w-[45%] flex flex-col justify-center p-6 sm:p-8 md:p-12 glass-card relative z-20"
      >
        <span className="text-5xl sm:text-6xl md:text-8xl font-space font-black mb-2 sm:mb-4" style={{ color: 'var(--accent-tertiary)', opacity: 0.35 }}>
          {project.number}
        </span>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-space font-bold mb-3 sm:mb-4" style={{ color: 'var(--text-primary)' }}>
          {project.title}
        </h3>
        <p className="text-base sm:text-lg mb-6 sm:mb-8 max-w-md leading-relaxed font-inter" style={{ color: 'var(--text-secondary)' }}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
          {project.tags.map((tag: string) => (
            <span
              key={tag}
              className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium tracking-wide glass-inset"
              style={{
                borderRadius: '9999px',
                color: 'var(--text-secondary)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={onExpand}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-white font-medium transition-all duration-300 hover:scale-105 cursor-pointer w-full sm:w-auto justify-center text-center"
            style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}bb)`, borderRadius: '0.75rem' }}
          >
            <Maximize2 className="w-4 h-4" />
            Full Preview
          </button>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 glass rounded-xl font-medium transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center text-center"
            style={{ color: 'var(--text-primary)', borderRadius: '0.75rem' }}
          >
            <ExternalLink className="w-4 h-4" />
            Visit Site
          </a>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Full-Screen Expanded Modal ─── */
function ExpandedProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const handleBackdropClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-6"
      onClick={handleBackdropClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/80 backdrop-blur-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Modal Content */}
      <motion.div
        className="relative w-full h-full max-w-6xl max-h-[96vh] sm:max-h-[92vh] rounded-xl sm:rounded-2xl overflow-hidden flex flex-col glass-elevated"
        style={{ boxShadow: `0 0 100px ${project.color}30, var(--shadow-ambient)` }}
        initial={{ scale: 0.9, y: 30, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 30, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      >
        {/* Top Bar */}
        <div
          className="h-12 flex items-center justify-between px-3 sm:px-4 shrink-0 border-b gap-2"
          style={{ background: 'var(--glass-dark)', borderColor: 'var(--glass-border)' }}
        >
          {/* Left: Traffic Lights & Title */}
          <div className="flex items-center gap-2 sm:gap-4 truncate">
            <div className="flex gap-1.5 shrink-0">
              <button
                onClick={onClose}
                className="w-3.5 h-3.5 rounded-full bg-[#ff5f57] hover:bg-[#ff3b30] transition-colors cursor-pointer flex items-center justify-center group"
                title="Close"
              >
                <X className="w-2 h-2 text-[#990000] opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]" />
              <div className="w-3.5 h-3.5 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex items-center gap-2 truncate">
              <div
                className="w-4 h-4 rounded flex items-center justify-center text-[8px] font-bold text-white shrink-0"
                style={{ background: project.color }}
              >
                {project.title.charAt(0)}
              </div>
              <span className="text-xs sm:text-sm font-medium font-space truncate" style={{ color: 'var(--text-primary)' }}>{project.title}</span>
            </div>
          </div>

          {/* Center: URL Bar (Desktop/Tablet) */}
          <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex">
            <div
              className="rounded-lg px-4 py-1.5 flex items-center gap-2 border min-w-[280px] md:min-w-[380px]"
              style={{ background: 'var(--bg-base)', borderColor: 'var(--glass-border)' }}
            >
              <div className="w-3 h-3 rounded-full border border-green-500 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              </div>
              <span className="text-xs font-mono truncate" style={{ color: 'var(--text-tertiary)' }}>
                {project.link}
              </span>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium px-2.5 sm:px-3 py-1.5 rounded-lg transition-all duration-300 hover:scale-105"
              style={{ background: `${project.color}25`, color: project.color, border: `1px solid ${project.color}40` }}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Open Original</span>
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

        {/* Iframe Area */}
        <div className="relative flex-1 bg-white">
          {!iframeLoaded && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-4 text-center" style={{ background: 'var(--bg-base)' }}>
              <div className="relative mb-4">
                <div
                  className="w-12 h-12 rounded-full border-[3px] border-transparent animate-spin"
                  style={{ borderTopColor: project.color, borderRightColor: `${project.color}40` }}
                />
              </div>
              <p className="text-sm font-medium font-space" style={{ color: 'var(--text-primary)' }}>Loading {project.title}...</p>
              <p className="text-xs mt-1 font-mono" style={{ color: 'var(--text-tertiary)' }}>Connecting to site</p>
            </div>
          )}

          <iframe
            src={project.link}
            title={`${project.title} full preview`}
            className="w-full h-full border-none"
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            onLoad={() => setIframeLoaded(true)}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
