import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useMotionTemplate, AnimatePresence } from 'framer-motion';
import { projects, type Project } from '../../data/projects';
import { ArrowUpRight, X, ExternalLink, Maximize2, Monitor } from 'lucide-react';

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
      <section id="projects" ref={containerRef} className="py-32 px-6 md:px-24 relative z-10 pointer-events-auto">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <p className="text-sm tracking-[0.2em] text-[#a078ff] font-space uppercase mb-4">Selected Work</p>
            <h2 className="text-4xl md:text-6xl font-space font-bold">Featured <span className="gradient-text italic">Projects</span></h2>
          </div>

          <div className="grid grid-cols-1 gap-16 md:gap-32">
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

/* ─── Project Card with Live Iframe Preview ─── */
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

  // Dynamically calculate iframe scale based on container size
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

  const background = useMotionTemplate`radial-gradient(800px circle at ${mouseX}px ${mouseY}px, ${project.color}40, transparent 80%)`;

  // Calculate iframe virtual height to fill the container
  const iframeVirtualHeight = iframeScale > 0 ? Math.ceil((1 / iframeScale) * 900) : 900;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`project-card flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center`}
    >
      {/* Live Website Preview */}
      <motion.div
        style={{ y }}
        className="w-full md:w-[55%] aspect-[16/10] rounded-2xl relative overflow-hidden group cursor-pointer"
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

        {/* Inner card */}
        <div className="absolute inset-[1px] rounded-2xl overflow-hidden bg-[#0c0c10] z-[1]">
          {/* Browser Chrome Bar */}
          <div className="h-8 bg-[#1a1a24] flex items-center px-3 gap-2 border-b border-white/5 relative z-30 shrink-0">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex-1 mx-2">
              <div className="bg-[#0f0f18] rounded-md px-3 py-0.5 text-[10px] text-white/30 truncate max-w-[200px] sm:max-w-xs mx-auto text-center font-mono">
                {project.link.replace(/^https?:\/\//, '').replace(/\/$/, '')}
              </div>
            </div>
            <Monitor className="w-3 h-3 text-white/20" />
          </div>

          {/* Iframe Container */}
          <div ref={iframeContainerRef} className="relative w-full h-[calc(100%-2rem)] overflow-hidden">
            {/* Loading skeleton */}
            {!iframeLoaded && (
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <div className="absolute inset-0 bg-[#0c0c10]" />
                <div className="relative flex flex-col items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full border-2 border-transparent animate-spin"
                    style={{ borderTopColor: project.color, borderRightColor: `${project.color}50` }}
                  />
                  <span className="text-white/30 text-xs tracking-wider uppercase">Loading Preview</span>
                </div>
              </div>
            )}

            {/* The actual iframe — dynamically scaled to fill the container */}
            <iframe
              src={project.link}
              title={`${project.title} preview`}
              className="absolute top-0 left-0 border-none"
              style={{
                width: '1440px',
                height: `${iframeVirtualHeight}px`,
                transform: `scale(${iframeScale})`,
                transformOrigin: 'top left',
                pointerEvents: 'none',
              }}
              sandbox="allow-scripts allow-same-origin allow-popups"
              loading="lazy"
              onLoad={() => setIframeLoaded(true)}
            />

            {/* Hover overlay */}
            <motion.div
              className="absolute inset-0 z-10 flex items-center justify-center"
              initial={false}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
              <motion.div
                className="relative flex flex-col items-center gap-3"
                initial={false}
                animate={{ y: isHovered ? 0 : 10, scale: isHovered ? 1 : 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center border border-white/20"
                  style={{ background: `${project.color}30` }}
                >
                  <Maximize2 className="w-6 h-6 text-white" />
                </div>
                <span className="text-white text-sm font-medium tracking-wider uppercase">Expand Preview</span>
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
      <div className="w-full md:w-[45%] flex flex-col justify-center p-8 md:p-12 rounded-2xl relative z-20 backdrop-blur-2xl bg-[#0f0f13]/80 border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
        <span className="text-6xl md:text-8xl font-space font-black text-white/10 mb-4">{project.number}</span>
        <h3 className="text-3xl md:text-4xl font-space font-bold mb-4 text-white drop-shadow-lg">{project.title}</h3>
        <p className="text-gray-300 text-lg mb-8 max-w-md leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-3 mb-8">
          {project.tags.map((tag: string) => (
            <span key={tag} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium tracking-wide text-gray-200">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={onExpand}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}99)` }}
          >
            <Maximize2 className="w-4 h-4" />
            Full Preview
          </button>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium transition-all duration-300 hover:bg-white/10 hover:scale-105"
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
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      onClick={handleBackdropClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/90 backdrop-blur-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Modal Content */}
      <motion.div
        className="relative w-[96vw] h-[94vh] rounded-2xl overflow-hidden flex flex-col"
        style={{ boxShadow: `0 0 100px ${project.color}20, 0 0 60px rgba(0,0,0,0.8)` }}
        initial={{ scale: 0.85, y: 40, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.85, y: 40, opacity: 0 }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
      >
        {/* Top Bar */}
        <div
          className="h-12 flex items-center justify-between px-4 shrink-0 border-b border-white/10"
          style={{ background: `linear-gradient(135deg, #1a1a24, #12121a)` }}
        >
          {/* Left: Traffic Lights & Title */}
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
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
            <div className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded flex items-center justify-center text-[8px] font-bold"
                style={{ background: project.color }}
              >
                {project.title.charAt(0)}
              </div>
              <span className="text-white/70 text-sm font-medium">{project.title}</span>
            </div>
          </div>

          {/* Center: URL Bar */}
          <div className="absolute left-1/2 -translate-x-1/2 hidden sm:flex">
            <div className="bg-[#0a0a12] rounded-lg px-4 py-1.5 flex items-center gap-2 border border-white/5 min-w-[300px] md:min-w-[400px]">
              <div className="w-3 h-3 rounded-full border border-white/20 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              </div>
              <span className="text-white/40 text-xs font-mono truncate">
                {project.link}
              </span>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-lg transition-all duration-300 hover:scale-105"
              style={{ background: `${project.color}30`, color: project.color }}
            >
              <ExternalLink className="w-3 h-3" />
              Open Original
            </a>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-lg bg-white/5 hover:bg-red-500/20 border border-white/10 hover:border-red-500/40 flex items-center justify-center transition-all duration-200 group"
              title="Close preview"
            >
              <X className="w-4 h-4 text-white/50 group-hover:text-red-400 transition-colors" />
            </button>
          </div>
        </div>

        {/* Iframe Area */}
        <div className="relative flex-1 bg-white">
          {/* Loading State */}
          {!iframeLoaded && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#0c0c10]">
              <div className="relative mb-6">
                <div
                  className="w-16 h-16 rounded-full border-[3px] border-transparent animate-spin"
                  style={{ borderTopColor: project.color, borderRightColor: `${project.color}40` }}
                />
                <div
                  className="absolute inset-2 rounded-full border-[2px] border-transparent animate-spin"
                  style={{ borderBottomColor: project.color, animationDirection: 'reverse', animationDuration: '1.5s' }}
                />
              </div>
              <p className="text-white/60 text-sm font-medium">Loading {project.title}...</p>
              <p className="text-white/30 text-xs mt-1">This may take a moment</p>
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

        {/* Bottom Info Bar */}
        <div
          className="h-10 flex items-center justify-between px-4 shrink-0 border-t border-white/10"
          style={{ background: '#12121a' }}
        >
          <div className="flex items-center gap-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border"
                style={{ color: project.color, borderColor: `${project.color}30`, background: `${project.color}10` }}
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="text-white/20 text-[10px] tracking-wider uppercase">
            Project {project.number} of {String(projects.length).padStart(2, '0')}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}
