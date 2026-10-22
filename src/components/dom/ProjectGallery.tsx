import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, type Project } from '../../data/projects';
import {
  X,
  ExternalLink,
  Maximize2,
  AlertTriangle,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { getProjectAvailability } from '../../features/projectAvailability';
import CategoryDivider from './CategoryDivider';
import ConvoFeaturesModal from './ConvoFeaturesModal';

const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export default function ProjectGallery() {
  const [expandedProject, setExpandedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  // Categories for brutalist filter tabs
  const categories = ['ALL', 'AI & OS', 'WEB APPS', 'TOOLS', 'CREATIVE'];

  // Filter projects by category
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'ALL') return projects;
    return projects.filter((p) => {
      const tagsStr = p.tags.join(' ').toLowerCase();
      if (activeCategory === 'AI & OS') return tagsStr.includes('ai') || tagsStr.includes('os') || tagsStr.includes('voice');
      if (activeCategory === 'WEB APPS') return tagsStr.includes('web app') || tagsStr.includes('architect') || tagsStr.includes('entertainment');
      if (activeCategory === 'TOOLS') return tagsStr.includes('tool') || tagsStr.includes('productivity') || tagsStr.includes('security');
      if (activeCategory === 'CREATIVE') return tagsStr.includes('creative') || tagsStr.includes('personal') || tagsStr.includes('design');
      return true;
    });
  }, [activeCategory]);

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
      {/* Category Divider 01 before the Product Grid */}
      <CategoryDivider
        number="01"
        title="SELECTED WORK"
        align="right"
        id="projects-divider"
      />

      <section id="projects" className="py-20 sm:py-28 px-4 sm:px-8 md:px-16 lg:px-24 relative select-none">
        <div className="max-w-7xl mx-auto">
          {/* Header & Category Filter Tabs */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 pb-8 border-b border-[#1E1E1E]/20">
            <div>
              <div className="inline-flex flex-wrap items-center gap-2 mb-3">
                <span className="w-2 h-2 bg-[#DB4A2B]" />
                <span className="font-satoshi text-xs sm:text-sm font-bold tracking-[0.2em] text-[#DB4A2B] uppercase">
                  Production Applications & Systems
                </span>
                <span className="font-mono text-[10px] uppercase font-bold px-2 py-0.5 bg-emerald-500/10 text-emerald-700 border border-emerald-500/30">
                  Preloaded &amp; Cached in Browser
                </span>
              </div>
              <h2 className="font-clash text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-[-0.05em] text-[#1E1E1E]">
                PROJECTS CATALOG
              </h2>
            </div>

            {/* Brutalist Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 font-satoshi text-xs font-bold uppercase tracking-[0.1em] border border-[#1E1E1E] transition-all cursor-pointer ${isActive
                        ? 'bg-[#1E1E1E] text-[#E4E2DD]'
                        : 'bg-transparent text-[#1E1E1E] hover:bg-[#D9D6D0]'
                      }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 1 on 1 Project Showcase: Project Card -> Project Details */}
          <div className="flex flex-col gap-16 sm:gap-24">
            {filteredProjects.map((project, index) => (
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

      {/* Full-Screen Raw Form Brutalist Project Detail Modal */}
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

/* ─────────────────────────────────────────────────────────────
   Brutalist 1-on-1 Project Showcase Item
   Layout: Project Card (Left) -> Project Details (Right)
   ───────────────────────────────────────────────────────────── */
interface ProjectCardProps {
  project: Project;
  index: number;
  onExpand: () => void;
}

function ProjectCard({ project, onExpand }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [scale, setScale] = useState(0.45);
  const [containerHeight, setContainerHeight] = useState(0);
  const [isInView, setIsInView] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const availability = getProjectAvailability(project.id);
  const isUnavailable = availability.flag === 'Unavailable';

  // Only observe & mount iframe when approaching viewport (prevents lag & memory spikes)
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(el);
          }
        });
      },
      { rootMargin: '350px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Compute precise scaling to make standard 1280px desktop site fill 16/10 card frame perfectly
  useEffect(() => {
    if (project.image || isUnavailable) return;
    const container = containerRef.current;
    if (!container) return;

    const updateScale = () => {
      const { width, height } = container.getBoundingClientRect();
      if (width > 0 && height > 0) {
        setScale(width / 1280);
        setContainerHeight(height);
      }
    };

    updateScale();
    const ro = new ResizeObserver(updateScale);
    ro.observe(container);
    return () => ro.disconnect();
  }, [project.image, isUnavailable]);

  return (
    <motion.div
      ref={cardRef}
      id={project.id}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch border-b border-[#1E1E1E]/20 pb-16 transition-all"
    >
      {/* LEFT: Project Card (Preview Frame with 16/10 aspect ratio) */}
      <div className="w-full lg:w-[56%] shrink-0 flex flex-col">
        <div
          onClick={onExpand}
          className="relative w-full aspect-[16/10] bg-[#D9D6D0] border-2 border-[#1E1E1E] shadow-[6px_6px_0px_#1E1E1E] overflow-hidden cursor-pointer select-none flex flex-col transition-all duration-300 group-hover:shadow-[8px_8px_0px_#DB4A2B]"
        >
          {/* Top Browser / OS Chrome Bar */}
          <div className="h-9 bg-[#1E1E1E] text-[#E4E2DD] px-4 flex items-center justify-between text-xs font-mono shrink-0 z-20">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: project.color }} />
              <span className="font-bold">№ {project.number}</span>
            </div>

            <span className="truncate max-w-[200px] sm:max-w-[300px] opacity-75 font-mono text-[11px]">
              {project.link.replace(/^https?:\/\//, '').replace(/\/$/, '')}
            </span>

            <div className="flex items-center gap-1.5">
              {isUnavailable ? (
                <span className="text-amber-400 font-bold text-[11px]">[OFFLINE]</span>
              ) : (
                <span className="text-emerald-400 font-bold text-[11px]">[READY]</span>
              )}
            </div>
          </div>

          {/* Inner Content Area */}
          <div className="relative flex-1 w-full h-[calc(100%-2.25rem)] overflow-hidden transition-transform duration-500 ease-out group-hover:scale-[1.02]">
            {/* Convo AI Animated Vector SVG Preview */}
            {project.image ? (
              <div className="w-full h-full bg-[#0d0c0b] flex items-center justify-center p-6">
                <img
                  src={project.image}
                  alt={`${project.title} Interface`}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
            ) : isUnavailable ? (
              /* Unavailable Standby Poster */
              <div className="w-full h-full bg-[#E4E2DD] flex flex-col items-center justify-center p-8 text-center border-t border-[#1E1E1E]/10">
                <div className="w-16 h-16 border-2 border-amber-500 bg-amber-500/10 flex items-center justify-center mb-4">
                  <AlertTriangle className="w-8 h-8 text-amber-600" />
                </div>
                <span className="font-mono text-xs font-bold text-amber-600 uppercase tracking-widest mb-1">
                  Scheduled Maintenance
                </span>
                <h4 className="font-clash font-bold text-2xl uppercase tracking-[0.03em] text-[#1E1E1E] mb-2">
                  {project.title}
                </h4>
                <p className="font-satoshi text-xs text-[#666666] max-w-[280px]">
                  Undergoing container & pipeline migration. Click to inspect specs.
                </p>
              </div>
            ) : (
              /* Live Scaled Website Preview Iframe with Lazy Loading & Fallback */
              <div ref={containerRef} className="relative w-full h-full bg-[#E4E2DD] overflow-hidden">
                {/* Loading State & Skeleton */}
                {!iframeLoaded && (
                  <div className="absolute inset-0 z-10 bg-[#E4E2DD] flex flex-col items-center justify-center p-6 text-center">
                    <div
                      className="w-16 h-16 border-2 border-[#1E1E1E] flex items-center justify-center mb-3 shadow-[4px_4px_0px_#1E1E1E]"
                      style={{ backgroundColor: `${project.color}25` }}
                    >
                      <span className="font-clash font-bold text-3xl" style={{ color: project.color }}>
                        {project.title.charAt(0)}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      <div
                        className="w-4 h-4 border-2 border-[#1E1E1E] border-t-transparent rounded-full animate-spin"
                        style={{ borderTopColor: project.color }}
                      />
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#1E1E1E]">
                        Connecting Live Deployment...
                      </span>
                    </div>
                    <span className="font-mono text-xs text-[#666666] truncate max-w-[240px]">
                      {project.link.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                    </span>
                  </div>
                )}

                {/* Actual Iframe with Native Lazy Loading & Viewport Observer */}
                {isInView && (
                  <iframe
                    src={project.link}
                    title={`${project.title} live preview`}
                    className="absolute top-0 left-0 border-none transition-opacity duration-500 ease-out"
                    style={{
                      width: '1280px',
                      height: `${scale > 0 && containerHeight > 0 ? containerHeight / scale : 1000}px`,
                      transform: `scale(${scale})`,
                      transformOrigin: 'top left',
                      pointerEvents: 'none',
                      opacity: iframeLoaded ? 1 : 0,
                    }}
                    sandbox="allow-scripts allow-same-origin allow-popups"
                    loading="lazy"
                    onLoad={() => setIframeLoaded(true)}
                  />
                )}
              </div>
            )}

            {/* Hover Overlay with Expand Specs CTA */}
            <div
              className={`absolute inset-0 z-30 bg-[#1E1E1E]/50 backdrop-blur-xs flex flex-col items-center justify-center transition-opacity duration-300 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'
                }`}
            >
              <div className="bg-[#E4E2DD] text-[#1E1E1E] px-5 py-2.5 border-2 border-[#1E1E1E] shadow-[4px_4px_0px_#DB4A2B] flex items-center gap-2 font-satoshi font-bold text-xs uppercase tracking-[0.1em]">
                <Maximize2 className="w-4 h-4 text-[#DB4A2B]" />
                <span>Expand Project Specs & Live View</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT: Project Details (Project Card -> Project Details) */}
      <div className="w-full lg:w-[44%] flex flex-col justify-between py-1">
        <div>
          {/* Top info line: Project number without "ACTIVE SYSTEM" text */}
          <div className="flex items-center justify-between text-xs font-mono uppercase text-[#444444] mb-3">
            <span className="font-bold text-[#DB4A2B]">SYSTEM PROFILE // № {project.number}</span>
            {isUnavailable ? (
              <span className="text-amber-600 font-bold px-2 py-0.5 bg-amber-500/10 border border-amber-600/30">
                MAINTENANCE
              </span>
            ) : (
              <span className="text-emerald-700 font-bold px-2 py-0.5 bg-emerald-500/10 border border-emerald-600/30">
                LIVE PRODUCTION
              </span>
            )}
          </div>

          {/* Product/Project Name: Bold uppercase Clash Display.
              Hover state dynamically changes color to project.color! */}
          <h3
            onClick={onExpand}
            style={{ color: isHovered ? project.color : '#1E1E1E' }}
            className="font-clash font-bold text-2xl sm:text-3xl lg:text-4xl uppercase tracking-[0.03em] cursor-pointer mb-4 transition-colors duration-200"
          >
            {project.title}
          </h3>

          {/* Detailed Description */}
          <p className="font-satoshi text-sm sm:text-base text-[#333333] leading-relaxed mb-6 font-medium">
            {project.description}
          </p>

          {/* Technical Architecture & Blueprint Block */}
          <div className="p-4 bg-[#D9D6D0] border-2 border-[#1E1E1E] shadow-[3px_3px_0px_#1E1E1E] mb-6">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#DB4A2B] block mb-1">
              // TECHNICAL BLUEPRINT
            </span>
            <p className="font-satoshi text-xs text-[#444444] leading-relaxed">
              {project.image
                ? "Autonomous voice-driven desktop intelligence featuring local neural processing, real-time presence detection, and native OS automation."
                : isUnavailable
                  ? availability.detailedMessage
                  : "Engineered for high client responsiveness, isolated sandboxed computation, and instant deployment."}
            </p>
          </div>

          {/* Tags in brutalist badges */}
          <div className="mb-6">
            <span className="font-satoshi text-xs font-bold uppercase tracking-wider text-[#666666] block mb-2">
              Integrated Technologies
            </span>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs uppercase px-2.5 py-1 border border-[#1E1E1E] bg-[#E4E2DD] text-[#1E1E1E] font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-5 border-t border-[#1E1E1E]/20 mt-auto">
          <button
            onClick={onExpand}
            className="btn-raw flex-1 py-3 px-5 text-xs font-bold uppercase tracking-wider text-center justify-center cursor-pointer"
          >
            <Maximize2 className="w-4 h-4 mr-1.5" />
            <span>Specs & Detail</span>
          </button>

          {project.image ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
              className="py-3 px-5 border-2 border-[#1E1E1E] bg-[#E4E2DD] hover:bg-[#1E1E1E] hover:text-white transition-all font-satoshi font-bold text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-[3px_3px_0px_#1E1E1E]"
              title="GitHub Repository"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub Repository</span>
            </a>
          ) : (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.title} site`}
              className="py-3 px-5 border-2 border-[#1E1E1E] bg-[#E4E2DD] hover:bg-[#1E1E1E] hover:text-white transition-all font-satoshi font-bold text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-[3px_3px_0px_#1E1E1E]"
              title="Direct Live Link"
            >
              <span>Visit Production App</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Full-Screen Raw Form Brutalist Project Detail Modal
   Preserves all project details, live iframe preview, architecture,
   tech stack, offline maintenance info, and external links!
   ───────────────────────────────────────────────────────────── */
interface ExpandedProjectModalProps {
  project: Project;
  onClose: () => void;
}

function ExpandedProjectModal({ project, onClose }: ExpandedProjectModalProps) {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [showFeaturesModal, setShowFeaturesModal] = useState(false);
  const availability = getProjectAvailability(project.id);
  const isUnavailable = availability.flag === 'Unavailable';

  const handleBackdropClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 bg-[#1E1E1E]/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-6 overflow-y-auto"
    >
      <motion.div
        initial={{ scale: 0.95, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 30 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-6xl max-h-[94vh] bg-[#E4E2DD] border-2 border-[#1E1E1E] shadow-[8px_8px_0px_#1E1E1E] flex flex-col overflow-hidden text-[#1E1E1E]"
      >
        {/* Modal Top Header Bar */}
        <div className="h-14 bg-[#1E1E1E] text-[#E4E2DD] px-4 sm:px-6 flex items-center justify-between border-b border-[#1E1E1E] shrink-0 gap-3">
          {/* Left: Project Number & Title */}
          <div className="flex items-center gap-3 truncate">
            <span className="font-mono text-xs font-bold text-[#DB4A2B] px-2 py-0.5 border border-[#DB4A2B]">
              № {project.number}
            </span>
            <h3 className="font-clash font-bold text-lg sm:text-xl uppercase tracking-tight truncate text-[#E4E2DD]">
              {project.title}
            </h3>
            {isUnavailable ? (
              <span className="hidden sm:inline-block font-mono text-[10px] uppercase px-2 py-0.5 bg-amber-500/20 text-amber-400 border border-amber-500/40">
                Maintenance
              </span>
            ) : (
              <span className="hidden sm:inline-block font-mono text-[10px] uppercase px-2 py-0.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                Online &amp; Active
              </span>
            )}
          </div>

          {/* Right: View detailed Features (Only Convo AI) + Visit + Close */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {project.id === 'project-convo' && (
              <button
                onClick={() => setShowFeaturesModal(true)}
                title="View detailed Features"
                className="flex items-center gap-1.5 font-mono text-[11px] sm:text-xs px-2.5 sm:px-3 py-1.5 bg-[#8b5cf6] text-white hover:bg-white hover:text-[#1E1E1E] transition-all cursor-pointer font-bold border border-[#8b5cf6] shadow-[2px_2px_0px_#1E1E1E] shrink-0"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">View detailed Features</span>
                <span className="sm:hidden">Detailed Features</span>
              </button>
            )}

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-satoshi font-bold text-xs uppercase px-3 py-1.5 bg-[#DB4A2B] text-white hover:bg-white hover:text-[#1E1E1E] transition-colors"
            >
              {project.image ? (
                <>
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </>
              ) : (
                <>
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Visit App</span>
                </>
              )}
            </a>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 border border-white/20 hover:bg-[#DB4A2B] hover:border-[#DB4A2B] text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Main Content Area: Split View on Desktop (Preview Left, Preserved Specs Right) */}
        <div className="flex-1 overflow-y-auto flex flex-col lg:flex-row">
          {/* Left: Interactive Preview Frame */}
          <div className="w-full lg:w-[60%] min-h-[380px] lg:min-h-full bg-[#1E1E1E] relative border-b lg:border-b-0 lg:border-r border-[#1E1E1E] flex flex-col">
            {/* Screen Chrome */}
            <div className="h-8 bg-[#2A2A2A] text-white/70 px-3 flex items-center justify-between text-[11px] font-mono shrink-0">
              <span className="truncate">{project.link}</span>
              <span className="font-bold text-[#DB4A2B]">// FULL PREVIEW</span>
            </div>

            <div className="relative flex-1 w-full h-full min-h-[350px] bg-white">
              {project.image ? (
                <div className="w-full h-full bg-[#0d0c0b] flex items-center justify-center p-6">
                  <img
                    src={project.image}
                    alt={`${project.title} Expanded View`}
                    className="max-h-[65vh] w-auto object-contain"
                  />
                </div>
              ) : isUnavailable ? (
                /* Unavailable Maintenance Detail inside modal */
                <div className="w-full h-full bg-[#E4E2DD] p-8 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 text-amber-600 font-mono text-xs uppercase font-bold mb-3">
                    <AlertTriangle className="w-4 h-4" />
                    <span>{availability.statusLabel}</span>
                  </div>
                  <h4 className="font-clash text-2xl sm:text-3xl font-bold uppercase text-[#1E1E1E] mb-3">
                    Scheduled Infrastructure Update
                  </h4>
                  <p className="font-satoshi text-sm text-[#444444] leading-relaxed mb-6">
                    {availability.detailedMessage}
                  </p>
                  <div className="p-4 bg-[#D9D6D0] border border-[#1E1E1E] space-y-2 font-mono text-xs">
                    <p><strong>REASON:</strong> {availability.reason}</p>
                    <p><strong>ESTIMATED RETURN:</strong> {availability.estimatedReturn}</p>
                    <p><strong>SERVICE:</strong> {availability.technicalSpecs.serviceName}</p>
                  </div>
                </div>
              ) : (
                /* Live Interactive Iframe */
                <>
                  {!iframeLoaded && (
                    <div className="absolute inset-0 z-10 bg-[#E4E2DD] flex flex-col items-center justify-center p-4">
                      <div className="w-10 h-10 border-2 border-transparent border-t-[#DB4A2B] rounded-full animate-spin mb-3" />
                      <span className="font-clash font-bold text-sm uppercase tracking-wider text-[#1E1E1E]">
                        Loading {project.title}...
                      </span>
                      <span className="font-mono text-xs text-[#666666] mt-1">Connecting to live deployment</span>
                    </div>
                  )}

                  <iframe
                    src={project.link}
                    title={`${project.title} live interface`}
                    className="w-full h-full min-h-[480px] border-none"
                    sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                    onLoad={() => setIframeLoaded(true)}
                  />
                </>
              )}
            </div>
          </div>

          {/* Right: Comprehensive Preserved Project Details & Architecture */}
          <div className="w-full lg:w-[40%] p-6 sm:p-8 flex flex-col justify-between bg-[#E4E2DD]">
            <div>
              {/* Tag row */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-[#DB4A2B] uppercase tracking-wider">
                  SYSTEM PROFILE // {project.number}
                </span>
                <span className="font-mono text-xs uppercase px-2 py-0.5 border border-[#1E1E1E]">
                  {project.tags[0]}
                </span>
              </div>

              {/* Title */}
              <h2 className="font-clash text-2xl sm:text-3xl font-bold uppercase tracking-[-0.04em] text-[#1E1E1E] mb-3">
                {project.title}
              </h2>

              {/* Description */}
              <p className="font-satoshi text-sm sm:text-base text-[#444444] leading-relaxed mb-6 font-medium">
                {project.description}
              </p>

              {/* Technical Architecture Details */}
              <div className="space-y-4 mb-6">
                <div className="p-4 bg-[#D9D6D0] border border-[#1E1E1E]">
                  <span className="font-satoshi text-xs font-bold uppercase tracking-wider text-[#1E1E1E] block mb-1">
                    System Architecture & Objective
                  </span>
                  <p className="font-satoshi text-xs text-[#444444] leading-relaxed">
                    Engineered with high performance in mind, minimizing network roundtrips and optimizing for edge responsiveness and fluid user interaction.
                  </p>
                </div>

                {/* If Convo AI, show Interactive Capabilities Trigger */}
                {project.id === 'project-convo' && (
                  <div className="p-4 bg-[#8b5cf6]/10 border-2 border-[#8b5cf6] shadow-[3px_3px_0px_#1E1E1E]">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-mono text-xs font-bold text-[#8b5cf6] uppercase flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Convo AI Capabilities Guide</span>
                      </span>
                      <span className="font-mono text-[10px] px-2 py-0.5 bg-[#8b5cf6] text-white font-bold">
                        28 Deep Features
                      </span>
                    </div>
                    <p className="font-satoshi text-xs text-[#333333] mb-3 leading-relaxed">
                      Hands-free voice, long-term memory, Think More deep reasoning, presence auto-lock, and Google Workspace integration.
                    </p>
                    <button
                      onClick={() => setShowFeaturesModal(true)}
                      className="w-full py-2 px-3 bg-[#8b5cf6] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#1E1E1E] transition-colors cursor-pointer flex items-center justify-center gap-1.5 border border-[#8b5cf6]"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Explore 28 Features</span>
                    </button>
                  </div>
                )}

                {isUnavailable && (
                  <div className="p-4 bg-amber-500/10 border border-amber-600/40 text-xs">
                    <span className="font-mono font-bold text-amber-800 uppercase block mb-1">
                      Migration Blueprint
                    </span>
                    <p className="font-satoshi text-amber-900 leading-relaxed">
                      {availability.technicalSpecs.migrationDetails}
                    </p>
                  </div>
                )}
              </div>

              {/* Tech Stack Chips */}
              <div className="mb-6">
                <span className="font-satoshi text-xs font-bold uppercase tracking-wider text-[#1E1E1E] block mb-2">
                  Integrated Technologies
                </span>
                <div className="flex flex-wrap gap-2">
                  {(isUnavailable ? availability.technicalSpecs.techStack : project.tags).map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs px-2.5 py-1 bg-white border border-[#1E1E1E] text-[#1E1E1E] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions inside Modal */}
            <div className="pt-6 border-t border-[#1E1E1E]/20 flex flex-col sm:flex-row gap-3">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-raw flex-1 text-center justify-center"
              >
                <span>{project.image ? 'View Source Code' : 'Open Production App'}</span>
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </a>

              <button
                onClick={onClose}
                className="py-3 px-5 border border-[#1E1E1E] font-satoshi font-bold text-xs uppercase tracking-wider hover:bg-[#1E1E1E] hover:text-white transition-colors cursor-pointer text-center"
              >
                Close View
              </button>
            </div>
          </div>
        </div>

        {/* Convo AI Interactive Features Modal */}
        <ConvoFeaturesModal
          isOpen={showFeaturesModal}
          onClose={() => setShowFeaturesModal(false)}
        />
      </motion.div>
    </motion.div>
  );
}
