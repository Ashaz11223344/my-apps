import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  AlertTriangle, 
  Activity, 
  RefreshCw, 
  ExternalLink, 
  Maximize2, 
  CheckCircle2, 
  ShieldAlert, 
  X,
  Code2,
  Cpu
} from 'lucide-react';
import type { Project } from '../../data/projects';
import { 
  type UnavailableProjectMetadata, 
  pingProjectServer 
} from '../../features/projectAvailability';

interface UnavailablePreviewProps {
  project: Project;
  metadata: UnavailableProjectMetadata;
  onExpand: () => void;
  isHovered: boolean;
}

/**
 * Clean, aesthetic preview card displayed when a project is currently unavailable.
 * Displays "Not Available right now" with smooth ambient glow and subtle hover affordance.
 */
export function UnavailablePreviewScreen({
  project,
  metadata: _metadata,
  onExpand,
  isHovered
}: UnavailablePreviewProps) {
  return (
    <div 
      className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden"
      style={{ 
        background: 'radial-gradient(ellipse at 50% 40%, rgba(26, 18, 40, 0.95) 0%, rgba(12, 8, 20, 0.98) 100%)' 
      }}
      onClick={onExpand}
    >
      {/* Subtle ambient glow matching project theme */}
      <div 
        className="absolute w-56 h-56 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: project.color }}
      />
      <div 
        className="absolute w-40 h-40 rounded-full blur-2xl opacity-15 pointer-events-none"
        style={{ background: '#f59e0b' }}
      />

      <div className="relative z-10 flex flex-col items-center max-w-sm mx-auto px-4">
        {/* Sleek Glass Monogram Badge with Pulsing Live Dot */}
        <div 
          className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-4 sm:mb-5 border border-white/10"
          style={{ 
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02))',
            backdropFilter: 'blur(16px)',
            boxShadow: `0 12px 36px rgba(0, 0, 0, 0.4), 0 0 30px ${project.color}25`
          }}
        >
          {/* Subtle amber pulsing status dot */}
          <span className="absolute top-2.5 right-2.5 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500" />
          </span>

          <span className="text-2xl sm:text-3xl font-bold font-space" style={{ color: project.color }}>
            {project.title.charAt(0)}
          </span>
        </div>

        {/* Project Name & Status Chip */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-amber-300 bg-amber-500/10 border border-amber-500/25 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          <span className="font-semibold">{project.title}</span>
          <span className="opacity-60 text-[10px]">· Offline</span>
        </div>

        {/* Main Clean Headline */}
        <h4 className="font-space font-bold text-xl sm:text-2xl text-white tracking-tight mb-2">
          Not Available right now
        </h4>

        {/* Clean, minimal note */}
        <p className="text-xs sm:text-sm text-white/60 font-inter leading-relaxed max-w-xs">
          This project is temporarily undergoing scheduled updates.
        </p>
      </div>

      {/* Hover / Tap overlay with "Click to View Details" */}
      <motion.div
        className="absolute inset-0 z-20 flex items-center justify-center bg-black/60 backdrop-blur-sm pointer-events-none"
        initial={false}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.25 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2"
          initial={false}
          animate={{ y: isHovered ? 0 : 8, scale: isHovered ? 1 : 0.95 }}
          transition={{ duration: 0.25 }}
        >
          <div 
            className="w-12 h-12 rounded-full flex items-center justify-center border border-white/30"
            style={{ background: `${project.color}50` }}
          >
            <Maximize2 className="w-5 h-5 text-white" />
          </div>
          <span className="text-white text-xs font-medium tracking-wider uppercase font-space">
            Click to View Project Details
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}

/**
 * Interactive Status Badge rendered above the project title in the card
 */
export function ProjectAvailabilityBadge({
  metadata,
  onInfoClick
}: {
  metadata: UnavailableProjectMetadata;
  onInfoClick: () => void;
}) {
  return (
    <div className="inline-flex items-center gap-2 mb-3">
      <button
        onClick={onInfoClick}
        className="group inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium transition-all duration-300 hover:scale-105 cursor-pointer"
        style={{
          background: 'rgba(245, 158, 11, 0.15)',
          border: '1px solid rgba(245, 158, 11, 0.35)',
          color: '#fbbf24'
        }}
        title="Click for maintenance details & live status"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
        </span>
        <span>{metadata.statusLabel}</span>
        <span className="text-[10px] text-amber-300/70 group-hover:text-amber-200 underline underline-offset-2 ml-0.5">
          [Details]
        </span>
      </button>
    </div>
  );
}

/**
 * Friendly confirmation / offline notification modal when user clicks "Visit Site" on an unavailable project
 */
export function UnavailableNoticeModal({
  project,
  metadata,
  isOpen,
  onClose,
  onOpenDetails
}: {
  project: Project;
  metadata: UnavailableProjectMetadata;
  isOpen: boolean;
  onClose: () => void;
  onOpenDetails: () => void;
}) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg rounded-2xl glass-elevated p-6 sm:p-8 overflow-hidden shadow-2xl"
          style={{ 
            background: 'var(--bg-elevated)', 
            border: '1px solid rgba(245, 158, 11, 0.3)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5), 0 0 40px rgba(245, 158, 11, 0.15)' 
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
            style={{ color: 'var(--text-secondary)' }}
          >
            <X className="w-5 h-5" />
          </button>

          {/* Icon Header */}
          <div className="flex items-center gap-3 mb-4">
            <div 
              className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border border-amber-500/40"
              style={{ background: 'rgba(245, 158, 11, 0.15)' }}
            >
              <AlertTriangle className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-semibold">
                Service Notice
              </span>
              <h3 className="text-xl font-space font-bold" style={{ color: 'var(--text-primary)' }}>
                {project.title} is Unavailable
              </h3>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-3 mb-6 text-sm" style={{ color: 'var(--text-secondary)' }}>
            <p className="leading-relaxed">
              {metadata.detailedMessage}
            </p>
            <div 
              className="p-3 rounded-xl border text-xs font-mono"
              style={{ background: 'var(--bg-inset)', borderColor: 'var(--glass-border)' }}
            >
              <div className="flex justify-between py-0.5">
                <span className="opacity-70">Reason:</span>
                <span className="font-semibold text-amber-400">{metadata.reason}</span>
              </div>
              <div className="flex justify-between py-0.5">
                <span className="opacity-70">Progress:</span>
                <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>{metadata.estimatedReturn}</span>
              </div>
              <div className="flex justify-between py-0.5">
                <span className="opacity-70">Live URL:</span>
                <span className="truncate max-w-[200px]">{project.link}</span>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenDetails();
              }}
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-space font-medium text-white transition-all hover:scale-102 cursor-pointer"
              style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}bb)` }}
            >
              <Maximize2 className="w-4 h-4" />
              View Preserved Project Details
            </button>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl glass font-space font-medium text-xs transition-all hover:scale-102"
              style={{ color: 'var(--text-secondary)' }}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Open URL Anyway
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

/**
 * Rich Project Detail view rendered inside ExpandedProjectModal.
 * Keeps and showcases all project details (number, title, description, tags, features, tech stack)
 * while clearly presenting the current maintenance status and health-check diagnostics.
 */
export function PreservedProjectDetailModal({
  project,
  metadata
}: {
  project: Project;
  metadata: UnavailableProjectMetadata;
}) {
  const [showLiveIframe, setShowLiveIframe] = useState(false);
  const [isPinging, setIsPinging] = useState(false);
  const [pingResult, setPingResult] = useState<{
    latencyMs: number;
    statusCode: number;
    timestamp: string;
    message: string;
  } | null>(null);

  const handlePing = async () => {
    setIsPinging(true);
    try {
      const res = await pingProjectServer(project.id);
      setPingResult(res);
    } finally {
      setIsPinging(false);
    }
  };

  return (
    <div className="w-full h-full overflow-y-auto p-4 sm:p-8 space-y-6" style={{ background: 'var(--bg-base)' }}>
      {/* Maintenance Status Banner */}
      <div 
        className="p-4 sm:p-6 rounded-2xl border flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
        style={{
          background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.12), rgba(245, 158, 11, 0.05))',
          borderColor: 'rgba(245, 158, 11, 0.3)'
        }}
      >
        <div className="flex items-start gap-4">
          <div 
            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border border-amber-500/40"
            style={{ background: 'rgba(245, 158, 11, 0.2)' }}
          >
            <ShieldAlert className="w-6 h-6 text-amber-400" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                {metadata.statusLabel}
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-mono">
                {metadata.badgeText}
              </span>
            </div>
            <h4 className="text-lg font-space font-bold mt-1" style={{ color: 'var(--text-primary)' }}>
              {metadata.reason}
            </h4>
            <p className="text-sm mt-1 max-w-2xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {metadata.detailedMessage}
            </p>
          </div>
        </div>

        {/* Live Server Diagnostic Trigger */}
        <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
          <button
            onClick={handlePing}
            disabled={isPinging}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-semibold transition-all hover:scale-105 cursor-pointer bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isPinging ? 'animate-spin' : ''}`} />
            <span>{isPinging ? 'Testing Connection...' : 'Ping Live Server'}</span>
          </button>
        </div>
      </div>

      {/* Ping Diagnostic Feedback (if triggered) */}
      {pingResult && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-xl border font-mono text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2"
          style={{ background: 'var(--bg-inset)', borderColor: 'var(--glass-border)' }}
        >
          <div className="flex items-center gap-2 text-amber-400 font-medium">
            <Activity className="w-4 h-4" />
            <span>{pingResult.message}</span>
          </div>
          <div className="flex items-center gap-3 text-xs" style={{ color: 'var(--text-tertiary)' }}>
            <span>Latency: <strong className="text-emerald-400">{pingResult.latencyMs}ms</strong></span>
            <span>Timestamp: {pingResult.timestamp}</span>
          </div>
        </motion.div>
      )}

      {/* Core Project Details Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Overview & Capabilities */}
        <div className="lg:col-span-2 space-y-6">
          {/* Project Summary Card */}
          <div className="p-6 sm:p-8 rounded-2xl glass-card space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-4xl sm:text-5xl font-space font-black opacity-30" style={{ color: project.color }}>
                {project.number}
              </span>
              <div>
                <h3 className="text-2xl sm:text-3xl font-space font-bold" style={{ color: 'var(--text-primary)' }}>
                  {project.title}
                </h3>
                <span className="text-xs font-mono" style={{ color: 'var(--text-tertiary)' }}>
                  ID: {project.id}
                </span>
              </div>
            </div>

            <p className="text-base sm:text-lg leading-relaxed font-inter" style={{ color: 'var(--text-secondary)' }}>
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 text-xs font-medium rounded-full glass-inset"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Key Capabilities */}
          <div className="p-6 sm:p-8 rounded-2xl glass-card space-y-4">
            <h4 className="text-lg font-space font-bold flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
              <Cpu className="w-5 h-5 text-purple-400" />
              Core Capabilities & Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {metadata.technicalSpecs.coreFeatures.map((feature, idx) => (
                <div 
                  key={idx}
                  className="p-3.5 rounded-xl border flex items-start gap-2.5 text-sm"
                  style={{ background: 'var(--bg-inset)', borderColor: 'var(--glass-border)' }}
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span style={{ color: 'var(--text-secondary)' }}>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Architecture, Tech Stack & Links */}
        <div className="space-y-6">
          {/* Technical Specs Card */}
          <div className="p-6 rounded-2xl glass-card space-y-4">
            <h4 className="text-base font-space font-bold flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
              <Code2 className="w-4 h-4 text-accent-primary" />
              Technical Architecture
            </h4>

            <div className="space-y-3 text-xs font-inter">
              <div>
                <span className="font-mono text-[11px] block opacity-60 uppercase mb-1">Architecture</span>
                <p className="p-2.5 rounded-lg border font-mono text-[11px]" style={{ background: 'var(--bg-inset)', borderColor: 'var(--glass-border)', color: 'var(--text-secondary)' }}>
                  {metadata.technicalSpecs.architecture}
                </p>
              </div>

              <div>
                <span className="font-mono text-[11px] block opacity-60 uppercase mb-1">Tech Stack</span>
                <div className="flex flex-wrap gap-1.5">
                  {metadata.technicalSpecs.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono border"
                      style={{ background: 'var(--bg-inset)', borderColor: 'var(--glass-border)', color: 'var(--text-primary)' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="font-mono text-[11px] block opacity-60 uppercase mb-1">Upgrade Roadmap</span>
                <p className="p-2.5 rounded-lg border text-xs" style={{ background: 'var(--bg-inset)', borderColor: 'var(--glass-border)', color: 'var(--text-secondary)' }}>
                  {metadata.technicalSpecs.migrationDetails}
                </p>
              </div>
            </div>
          </div>

          {/* Live Link / Iframe Test Option */}
          <div className="p-6 rounded-2xl glass-card space-y-4">
            <h4 className="text-base font-space font-bold" style={{ color: 'var(--text-primary)' }}>
              External Destination
            </h4>
            <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              The application URL is hosted at the following domain. It is currently responding with maintenance headers.
            </p>
            <div 
              className="p-2.5 rounded-xl border font-mono text-xs truncate"
              style={{ background: 'var(--bg-inset)', borderColor: 'var(--glass-border)', color: 'var(--text-tertiary)' }}
            >
              {project.link}
            </div>

            <div className="space-y-2 pt-2">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl glass font-space font-medium text-xs transition-all hover:scale-102"
                style={{ color: 'var(--text-primary)' }}
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Open External Link in New Tab
              </a>

              <button
                onClick={() => setShowLiveIframe(!showLiveIframe)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 font-mono text-xs text-white/70 hover:text-white transition-colors cursor-pointer"
              >
                <span>{showLiveIframe ? 'Hide Embedded Test Frame' : 'Attempt Live Frame Connection'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded Live Iframe (Optional Test) */}
      {showLiveIframe && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: '400px' }}
          className="rounded-2xl overflow-hidden border border-white/20 relative"
        >
          <div className="h-8 bg-black/60 px-4 flex items-center justify-between text-xs font-mono text-white/70">
            <span>Direct Frame Connection: {project.link}</span>
            <button onClick={() => setShowLiveIframe(false)} className="hover:text-white cursor-pointer">
              Close Frame
            </button>
          </div>
          <iframe
            src={project.link}
            title={`${project.title} live probe`}
            className="w-full h-[calc(100%-2rem)] bg-white"
            sandbox="allow-scripts allow-same-origin allow-popups"
          />
        </motion.div>
      )}
    </div>
  );
}
