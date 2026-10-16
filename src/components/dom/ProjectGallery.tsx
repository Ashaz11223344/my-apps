import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useMotionTemplate, AnimatePresence } from 'framer-motion';
import { projects, type Project } from '../../data/projects';
import { X, ExternalLink, Maximize2, Monitor, AlertTriangle } from 'lucide-react';
import { getProjectAvailability } from '../../features/projectAvailability';
import {
  UnavailablePreviewScreen,
  ProjectAvailabilityBadge,
  UnavailableNoticeModal,
  PreservedProjectDetailModal
} from './UnavailableProjectView';

const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

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

/* ─── Project Card with Interactive Preview & Availability Awareness ─── */
function ProjectCard({ project, index, onExpand }: { project: Project; index: number; onExpand: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const iframeContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' ? window.innerWidth < 768 : false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [iframeScale, setIframeScale] = useState(0.35);
  const [containerHeight, setContainerHeight] = useState(0);
  const [showNoticeModal, setShowNoticeModal] = useState(false);

  // Fetch project availability state by ID
  const availability = getProjectAvailability(project.id);
  const isUnavailable = availability.flag === 'Unavailable';

  useEffect(() => {
    if (isUnavailable || isMobile) return;
    const container = iframeContainerRef.current;
    if (!container) return;

    const IFRAME_WIDTH = 1440;

    const updateScale = () => {
      const { width, height } = container.getBoundingClientRect();
      if (width > 0) {
        setIframeScale(width / IFRAME_WIDTH);
        setContainerHeight(height);
      }
    };

    updateScale();

    const resizeObserver = new ResizeObserver(updateScale);
    resizeObserver.observe(container);
    return () => resizeObserver.disconnect();
  }, [isUnavailable, isMobile]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const isEven = index % 2 === 0;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    if (isMobile) return;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const background = useMotionTemplate`radial-gradient(800px circle at ${mouseX}px ${mouseY}px, ${project.color}30, transparent 80%)`;
  const iframeVirtualHeight = 900;
  const translateYVirtual = iframeScale > 0 && containerHeight > 0
    ? (containerHeight / iframeScale - iframeVirtualHeight) / 2
    : 0;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`project-card flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 sm:gap-8 md:gap-16 items-center`}
    >
      {/* Live Website Preview or Interactive Maintenance Standby */}
      <motion.div
        style={isMobile ? undefined : { y }}
        className="w-full md:w-[55%] aspect-[16/10] rounded-2xl relative overflow-hidden group cursor-pointer shrink-0 self-center"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onExpand}
      >
        {/* Outer glow border */}
        <div
          className="absolute -inset-[1px] rounded-2xl z-0 opacity-60 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: isUnavailable
              ? `linear-gradient(135deg, rgba(245, 158, 11, 0.6), transparent 40%, transparent 60%, ${project.color}40)`
              : `linear-gradient(135deg, ${project.color}50, transparent 40%, transparent 60%, ${project.color}30)`,
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
                className="rounded-md px-3 py-0.5 text-[10px] truncate max-w-[160px] sm:max-w-xs mx-auto text-center font-mono flex items-center justify-center gap-1.5"
                style={{ background: 'var(--bg-base)', color: isUnavailable ? '#fbbf24' : 'var(--text-tertiary)' }}
              >
                {isUnavailable && <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />}
                <span>{project.link.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
              </div>
            </div>
            <Monitor className="w-3 h-3" style={{ color: 'var(--text-tertiary)' }} />
          </div>

          {/* Interactive Screen Area */}
          {isUnavailable ? (
            <UnavailablePreviewScreen
              project={project}
              metadata={availability}
              onExpand={onExpand}
              isHovered={isHovered}
            />
          ) : project.image ? (
            /* Screenshot Image Preview (Convo AI Desktop OS Mode) */
            <div
              className="relative w-full h-[calc(100%-2rem)] overflow-hidden bg-[#0d0c0b] flex items-center justify-center group/img cursor-pointer"
              onClick={onExpand}
            >
              <img
                src={project.image}
                alt={`${project.title} Interface Preview`}
                className="w-full h-full object-contain object-center transition-transform duration-700 ease-out group-hover/img:scale-105"
                loading="eager"
              />
              {!project.image?.endsWith('.svg') && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              )}

              {/* Hover / Tap overlay */}
              <motion.div
                className="absolute inset-0 z-10 flex items-center justify-center transition-opacity duration-300 pointer-events-none"
                style={{
                  background: 'rgba(0, 0, 0, 0.45)',
                  backdropFilter: 'blur(3px)',
                  opacity: isHovered ? 1 : 0
                }}
              >
                <div
                  className="flex flex-col items-center gap-2 transform transition-transform duration-300"
                  style={{ transform: isHovered ? 'scale(1)' : 'scale(0.9)' }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center border border-white/30 shadow-lg"
                    style={{ background: `${project.color}70` }}
                  >
                    <Maximize2 className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white text-xs font-semibold tracking-wider uppercase font-space">
                    Expand Preview
                  </span>
                </div>
              </motion.div>
            </div>
          ) : isMobile ? (
            /* Mobile-Optimized Lightweight Native Preview (Prevents mobile tab crashes from 12 concurrent iframes) */
            <div
              className="relative w-full h-[calc(100%-2rem)] flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden cursor-pointer"
              style={{
                background: 'radial-gradient(ellipse at 50% 40%, rgba(26, 18, 40, 0.95) 0%, rgba(12, 8, 20, 0.98) 100%)'
              }}
              onClick={onExpand}
            >
              {/* Subtle ambient glow in project brand color */}
              <div
                className="absolute w-44 h-44 rounded-full blur-3xl opacity-25 pointer-events-none"
                style={{ background: project.color }}
              />

              <div className="relative z-10 flex flex-col items-center max-w-sm mx-auto px-4">
                {/* Monogram Badge */}
                <div
                  className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-3 border border-white/10 shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${project.color}35, rgba(255, 255, 255, 0.05))`,
                    boxShadow: `0 8px 30px ${project.color}35`
                  }}
                >
                  <span className="text-2xl font-space font-bold text-white">
                    {project.title.charAt(0)}
                  </span>
                  <span
                    className="absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-[#120814] flex items-center justify-center"
                    style={{ background: '#22c55e' }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                  </span>
                </div>

                <h4 className="font-space font-bold text-base text-white mb-1">
                  {project.title}
                </h4>

                <div className="flex items-center gap-2 mb-3">
                  <span className="flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-green-500/20 text-green-300 border border-green-500/30 uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    Online & Active
                  </span>
                </div>

                {/* Tap to Preview CTA */}
                <div
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-space font-semibold text-white shadow-md active:scale-95 transition-transform"
                  style={{
                    background: `linear-gradient(135deg, ${project.color}, ${project.color}cc)`
                  }}
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Interactive Preview</span>
                </div>
              </div>
            </div>
          ) : (
            /* Desktop View: Interactive Scaled Iframe */
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

              {/* Actual Iframe — Loads lazily on desktop */}
              <iframe
                src={project.link}
                title={`${project.title} preview`}
                className="absolute top-0 left-0 border-none transition-opacity duration-700 ease-out"
                style={{
                  width: '1440px',
                  height: `${iframeVirtualHeight}px`,
                  transform: `scale(${iframeScale}) translateY(${translateYVirtual}px)`,
                  transformOrigin: 'top left',
                  pointerEvents: 'none',
                  opacity: iframeLoaded ? 1 : 0,
                }}
                sandbox="allow-scripts allow-same-origin allow-popups"
                loading="lazy"
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
          )}
        </div>

        {/* Interactive hover glow */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-[2] rounded-2xl"
          style={{ background }}
        />
      </motion.div>

      {/* Info Section — Full Details Preserved */}
      <div
        className="w-full md:w-[45%] flex flex-col justify-center p-6 sm:p-8 md:p-12 glass-card relative z-20"
      >
        <span className="text-5xl sm:text-6xl md:text-8xl font-space font-black mb-2 sm:mb-4" style={{ color: 'var(--accent-tertiary)', opacity: 0.35 }}>
          {project.number}
        </span>

        {/* Interactive Availability Indicator for Unavailable Projects */}
        {isUnavailable && (
          <ProjectAvailabilityBadge
            metadata={availability}
            onInfoClick={onExpand}
          />
        )}

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
            {isUnavailable ? 'Project Specs & Status' : 'Full Preview'}
          </button>

          {isUnavailable ? (
            <button
              onClick={() => setShowNoticeModal(true)}
              className="inline-flex items-center gap-2 px-6 py-3.5 glass rounded-xl font-medium transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center text-center cursor-pointer"
              style={{
                color: '#fbbf24',
                borderRadius: '0.75rem',
                border: '1px solid rgba(245, 158, 11, 0.4)'
              }}
            >
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              Offline Notice
            </button>
          ) : (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 glass rounded-xl font-medium transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center text-center group"
              style={{ color: 'var(--text-primary)', borderRadius: '0.75rem' }}
            >
              {project.image ? (
                <>
                  <GithubIcon className="w-4 h-4 text-accent-primary group-hover:scale-110 transition-transform" />
                  <span>View Project</span>
                </>
              ) : (
                <>
                  <ExternalLink className="w-4 h-4" />
                  <span>Visit Site</span>
                </>
              )}
            </a>
          )}
        </div>

        {/* Offline Notice Modal for Unavailable Projects */}
        {isUnavailable && (
          <UnavailableNoticeModal
            project={project}
            metadata={availability}
            isOpen={showNoticeModal}
            onClose={() => setShowNoticeModal(false)}
            onOpenDetails={onExpand}
          />
        )}
      </div>
    </motion.div>
  );
}

/* ─── Full-Screen Expanded Modal with Preserved Project Details ─── */
function ExpandedProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const availability = getProjectAvailability(project.id);
  const isUnavailable = availability.flag === 'Unavailable';

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
        style={{
          boxShadow: isUnavailable
            ? `0 0 100px rgba(245, 158, 11, 0.25), var(--shadow-ambient)`
            : `0 0 100px ${project.color}30, var(--shadow-ambient)`
        }}
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
              <span className="text-xs sm:text-sm font-medium font-space truncate" style={{ color: 'var(--text-primary)' }}>
                {project.title}
              </span>
              {isUnavailable && (
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30 uppercase tracking-wider shrink-0">
                  Maintenance
                </span>
              )}
            </div>
          </div>

          {/* Center: URL Bar (Desktop/Tablet) */}
          <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex">
            <div
              className="rounded-lg px-4 py-1.5 flex items-center gap-2 border min-w-[280px] md:min-w-[380px]"
              style={{ background: 'var(--bg-base)', borderColor: 'var(--glass-border)' }}
            >
              <div className={`w-3 h-3 rounded-full border ${isUnavailable ? 'border-amber-500' : 'border-green-500'} flex items-center justify-center`}>
                <div className={`w-1.5 h-1.5 rounded-full ${isUnavailable ? 'bg-amber-400' : 'bg-green-400'}`} />
              </div>
              <span className="text-xs font-mono truncate" style={{ color: 'var(--text-tertiary)' }}>
                {project.link} {isUnavailable ? '[Offline]' : ''}
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
              {project.image ? (
                <>
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>View Project</span>
                </>
              ) : (
                <>
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Open Original</span>
                </>
              )}
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

        {/* Modal Main Content: Preserved Details for Unavailable projects, Expanded Image for image projects, Live Iframe for active projects */}
        {isUnavailable ? (
          <PreservedProjectDetailModal project={project} metadata={availability} />
        ) : project.image ? (
          <div className="relative flex-1 bg-[#0d0c0b] overflow-hidden flex items-center justify-center p-3 sm:p-6 select-none">
            <div className="relative w-full h-full max-w-5xl flex items-center justify-center">
              <img
                src={project.image}
                alt={`${project.title} full expanded preview`}
                className="w-full h-full max-h-[82vh] object-contain rounded-xl"
              />
            </div>
          </div>
        ) : (
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
        )}
      </motion.div>
    </motion.div>
  );
}
