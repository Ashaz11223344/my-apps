import { useState, useEffect, useMemo, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Search, 
  Copy, 
  Check, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink,
  Volume2,
  VolumeX,
  Mic,
  Terminal,
  Brain,
  Sun,
  Zap,
  Clipboard,
  Clock,
  HardDrive,
  Music,
  LayoutGrid,
  FileText,
  CloudSun,
  ShieldCheck,
  Mail,
  GitBranch,
  PenTool,
  FolderOpen,
  Camera,
  PlaySquare,
  Calendar,
  Users,
  CheckSquare,
  MapPin,
  Radio,
  UserCheck,
  Cpu,
  Globe,
  Code2,
  Lightbulb,
  Sliders
} from 'lucide-react';
import { convoFeatures, convoCategories, type ConvoFeature } from '../../data/convoFeatures';

interface ConvoFeaturesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/* ─────────────────────────────────────────────────────────────
   Zero-Emoji Vector Icon Resolver
   ───────────────────────────────────────────────────────────── */
function FeatureIcon({ name, className = 'w-4 h-4' }: { name: string; className?: string }) {
  switch (name) {
    case 'mic': return <Mic className={className} />;
    case 'terminal': return <Terminal className={className} />;
    case 'brain': return <Brain className={className} />;
    case 'sun': return <Sun className={className} />;
    case 'zap': return <Zap className={className} />;
    case 'clipboard': return <Clipboard className={className} />;
    case 'clock': return <Clock className={className} />;
    case 'hard-drive': return <HardDrive className={className} />;
    case 'music': return <Music className={className} />;
    case 'layout-grid': return <LayoutGrid className={className} />;
    case 'file-text': return <FileText className={className} />;
    case 'search': return <Search className={className} />;
    case 'cloud-sun': return <CloudSun className={className} />;
    case 'shield-check': return <ShieldCheck className={className} />;
    case 'mail': return <Mail className={className} />;
    case 'sparkles': return <Sparkles className={className} />;
    case 'git-branch': return <GitBranch className={className} />;
    case 'pen-tool': return <PenTool className={className} />;
    case 'folder-open': return <FolderOpen className={className} />;
    case 'camera': return <Camera className={className} />;
    case 'play-square': return <PlaySquare className={className} />;
    case 'calendar': return <Calendar className={className} />;
    case 'users': return <Users className={className} />;
    case 'check-square': return <CheckSquare className={className} />;
    case 'map-pin': return <MapPin className={className} />;
    case 'radio': return <Radio className={className} />;
    case 'user-check': return <UserCheck className={className} />;
    case 'volume-2': return <Volume2 className={className} />;
    case 'cpu': return <Cpu className={className} />;
    case 'globe': return <Globe className={className} />;
    case 'code-2': return <Code2 className={className} />;
    default: return <Sparkles className={className} />;
  }
}

/* ─────────────────────────────────────────────────────────────
   Individual Memoized Feature Card (Optimized for 60fps Scroll)
   ───────────────────────────────────────────────────────────── */
interface FeatureCardProps {
  feat: ConvoFeature;
  isExpanded: boolean;
  copiedText: string | null;
  onToggleExpand: (id: string) => void;
  onCopy: (text: string) => void;
  simulatedReasoning: 'Quick' | 'Light' | 'Deep';
  setSimulatedReasoning: (mode: 'Quick' | 'Light' | 'Deep') => void;
  simulatedTone: 'Formal' | 'Casual' | 'Technical' | 'Concise';
  setSimulatedTone: (tone: 'Formal' | 'Casual' | 'Technical' | 'Concise') => void;
  simulatedIslandState: 'Idle' | 'Listening' | 'Speaking' | 'Thinking';
  setSimulatedIslandState: (st: 'Idle' | 'Listening' | 'Speaking' | 'Thinking') => void;
  simulatedMute: boolean;
  setSimulatedMute: (mute: boolean) => void;
  simulatedVolume: number;
  setSimulatedVolume: (vol: number) => void;
}

const FeatureCard = memo(function FeatureCard({
  feat,
  isExpanded,
  copiedText,
  onToggleExpand,
  onCopy,
  simulatedReasoning,
  setSimulatedReasoning,
  simulatedTone,
  setSimulatedTone,
  simulatedIslandState,
  setSimulatedIslandState,
  simulatedMute,
  setSimulatedMute,
  simulatedVolume,
  setSimulatedVolume,
}: FeatureCardProps) {
  return (
    <div
      className={`p-3.5 sm:p-5 bg-white border-2 border-[#1E1E1E] shadow-[3px_3px_0px_#1E1E1E] sm:shadow-[4px_4px_0px_#1E1E1E] transition-[border-color,box-shadow] duration-150 ${
        isExpanded ? 'border-[#8b5cf6] shadow-[4px_4px_0px_#8b5cf6]' : 'hover:border-[#8b5cf6]'
      }`}
      style={{ contain: 'layout style' }}
    >
      {/* Card Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3 pb-3 border-b border-[#1E1E1E]/15">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <span className="font-mono text-[11px] font-bold text-[#8b5cf6] px-1.5 sm:px-2 py-0.5 bg-[#8b5cf6]/10 border border-[#8b5cf6]/30 shrink-0">
            #{feat.number}
          </span>
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded bg-[#8b5cf6]/10 border border-[#8b5cf6]/30 flex items-center justify-center text-[#8b5cf6] shrink-0">
            <FeatureIcon name={feat.iconName} className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </div>
          <h4 className="font-clash font-bold text-sm sm:text-base md:text-lg uppercase text-[#1E1E1E] tracking-tight leading-snug">
            {feat.title}
          </h4>
        </div>

        <div className="flex items-center justify-between sm:justify-end gap-2 shrink-0 pt-1 sm:pt-0">
          <div className="flex items-center gap-1.5">
            {feat.shortcut && (
              <span className="font-mono text-[9px] sm:text-[10px] uppercase font-bold px-1.5 sm:px-2 py-0.5 bg-[#ECEAE5] border border-[#1E1E1E] text-[#1E1E1E]">
                {feat.shortcut}
              </span>
            )}
            {feat.riskLevel && (
              <span
                className={`font-mono text-[9px] sm:text-[10px] uppercase font-bold px-1.5 sm:px-2 py-0.5 border ${
                  feat.riskLevel === 'HIGH'
                    ? 'bg-red-100 text-red-700 border-red-300'
                    : feat.riskLevel === 'MEDIUM'
                    ? 'bg-amber-100 text-amber-700 border-amber-300'
                    : 'bg-emerald-100 text-emerald-700 border-emerald-300'
                }`}
              >
                Risk: {feat.riskLevel}
              </span>
            )}
          </div>
          <button
            onClick={() => onToggleExpand(feat.id)}
            className="p-1 sm:p-1.5 border border-[#1E1E1E] hover:bg-[#1E1E1E] hover:text-white transition-colors cursor-pointer"
            title={isExpanded ? 'Collapse specs' : 'Expand full specs'}
            aria-label={isExpanded ? 'Collapse specs' : 'Expand specs'}
          >
            {isExpanded ? <ChevronUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
          </button>
        </div>
      </div>

      {/* Summary */}
      <p className="font-satoshi text-xs sm:text-sm text-[#444444] leading-relaxed my-2.5 sm:my-3 font-medium">
        {feat.summary}
      </p>

      {/* Interactive Spoken Commands Pill Strip */}
      <div className="my-2.5 sm:my-3">
        <span className="font-mono text-[10px] uppercase font-bold text-[#666666] tracking-wider flex items-center gap-1.5 mb-1.5">
          <Volume2 className="w-3 h-3 text-[#8b5cf6]" />
          <span>Click Voice Command to Copy &amp; Test:</span>
        </span>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {feat.commands.map((cmd, i) => {
            const isThisCopied = copiedText === cmd;
            return (
              <button
                key={i}
                onClick={() => onCopy(cmd)}
                title="Click to copy voice command"
                className={`px-2 sm:px-2.5 py-1 font-mono text-[11px] sm:text-xs border flex items-center gap-1.5 transition-colors cursor-pointer max-w-full text-left ${
                  isThisCopied
                    ? 'bg-emerald-600 text-white border-emerald-700'
                    : 'bg-[#ECEAE5] text-[#1E1E1E] border-[#1E1E1E]/30 hover:border-[#8b5cf6] hover:bg-[#8b5cf6]/10'
                }`}
              >
                {isThisCopied ? (
                  <Check className="w-3 h-3 shrink-0 text-white" />
                ) : (
                  <Copy className="w-3 h-3 text-[#666666] shrink-0" />
                )}
                <span className="truncate">{cmd}</span>
                {isThisCopied && <span className="text-[9px] font-bold uppercase ml-1 shrink-0">Copied!</span>}
              </button>
            );
          })}
        </div>
      </div>

      {/* Expandable Deep Sub-Features Drawer (Fast pure CSS transition for smooth scroll) */}
      {isExpanded && (
        <div className="mt-3.5 pt-3.5 border-t border-[#1E1E1E]/20 space-y-3.5 sm:space-y-4">
          {/* Sub-features list */}
          <div>
            <span className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#1E1E1E] block mb-2">
              // TECHNICAL ARCHITECTURE &amp; OPERATIONAL SPECS:
            </span>
            <ul className="space-y-1.5 font-satoshi text-xs sm:text-sm text-[#333333]">
              {feat.subFeatures.map((sf, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#8b5cf6] font-bold mt-0.5 leading-none">&bull;</span>
                  <span className="leading-relaxed">{sf}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Interactive Feature Simulators */}
          {feat.id === 'think-more' && (
            <div className="p-3 bg-[#D9D6D0] border border-[#1E1E1E] space-y-2">
              <span className="font-mono text-[11px] sm:text-xs font-bold text-[#1E1E1E] uppercase flex items-center gap-1.5">
                <Brain className="w-3.5 h-3.5 text-[#8b5cf6]" />
                <span>Interactive Simulator: Reasoning Depth Tiers</span>
              </span>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 font-mono text-xs">
                {(['Quick', 'Light', 'Deep'] as const).map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setSimulatedReasoning(mode)}
                    className={`px-2.5 sm:px-3 py-1 border transition-colors cursor-pointer flex items-center gap-1.5 ${
                      simulatedReasoning === mode
                        ? 'bg-[#8b5cf6] text-white border-[#8b5cf6] font-bold'
                        : 'bg-white text-[#333333] border-[#1E1E1E]/40'
                    }`}
                  >
                    {mode === 'Quick' ? <Zap className="w-3 h-3 text-amber-300" /> : mode === 'Light' ? <Lightbulb className="w-3 h-3 text-yellow-300" /> : <Brain className="w-3 h-3 text-purple-200" />}
                    <span>{mode} ({mode === 'Quick' ? '1-3' : mode === 'Light' ? '4-6' : '7-10'})</span>
                  </button>
                ))}
              </div>
              <p className="font-mono text-[10px] sm:text-[11px] text-[#555555] leading-relaxed">
                {simulatedReasoning === 'Quick' && 'Simulated mode: ~1-2s response budget for fast time, weather, and macro launches.'}
                {simulatedReasoning === 'Light' && 'Simulated mode: ~10-25s budget for balanced explanations and email drafting.'}
                {simulatedReasoning === 'Deep' && 'Simulated mode: ~30-45s budget with chain-of-thought panel for code bugs and logic analysis.'}
              </p>
            </div>
          )}

          {feat.id === 'writing-assistant' && (
            <div className="p-3 bg-[#D9D6D0] border border-[#1E1E1E] space-y-2">
              <span className="font-mono text-[11px] sm:text-xs font-bold text-[#1E1E1E] uppercase flex items-center gap-1.5">
                <PenTool className="w-3.5 h-3.5 text-[#8b5cf6]" />
                <span>Interactive Simulator: Writing Tone Polisher</span>
              </span>
              <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                {(['Formal', 'Casual', 'Technical', 'Concise'] as const).map((tone) => (
                  <button
                    key={tone}
                    onClick={() => setSimulatedTone(tone)}
                    className={`px-2.5 sm:px-3 py-1 border transition-colors cursor-pointer ${
                      simulatedTone === tone
                        ? 'bg-[#1E1E1E] text-white border-[#1E1E1E] font-bold'
                        : 'bg-white text-[#333333] border-[#1E1E1E]/40'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
              <div className="p-2.5 bg-white border border-[#1E1E1E] font-satoshi text-xs text-[#222222]">
                {simulatedTone === 'Formal' && 'Polished: "I am writing to formally transmit our quarterly engineering deliverables for your review."' }
                {simulatedTone === 'Casual' && 'Polished: "Hey! Just dropped the new project updates over to you. Let me know what you think!"' }
                {simulatedTone === 'Technical' && 'Polished: "The asynchronous pipeline achieved 86 tokens/sec inference via GGUF 4-bit NormalFloat weights."' }
                {simulatedTone === 'Concise' && 'Polished: "Quarterly updates sent. Ready for review."' }
              </div>
            </div>
          )}

          {feat.id === 'dynamic-island' && (
            <div className="p-3 bg-[#D9D6D0] border border-[#1E1E1E] space-y-2">
              <span className="font-mono text-[11px] sm:text-xs font-bold text-[#1E1E1E] uppercase flex items-center gap-1.5">
                <Radio className="w-3.5 h-3.5 text-[#8b5cf6]" />
                <span>Interactive Simulator: Desktop HUD State Morphing</span>
              </span>
              <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                {(['Idle', 'Listening', 'Speaking', 'Thinking'] as const).map((st) => (
                  <button
                    key={st}
                    onClick={() => setSimulatedIslandState(st)}
                    className={`px-2.5 sm:px-3 py-1 border transition-colors cursor-pointer ${
                      simulatedIslandState === st
                        ? 'bg-[#8b5cf6] text-white border-[#8b5cf6] font-bold'
                        : 'bg-white text-[#333333] border-[#1E1E1E]/40'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
              <div className="h-10 bg-[#1E1E1E] border border-black flex items-center justify-between px-3 sm:px-4 text-xs font-mono text-white">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${
                    simulatedIslandState === 'Idle' ? 'bg-cyan-400' :
                    simulatedIslandState === 'Listening' ? 'bg-emerald-400' :
                    simulatedIslandState === 'Speaking' ? 'bg-[#E11D74]' : 'bg-[#8b5cf6]'
                  }`} />
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-wider font-bold">
                    HUD: {simulatedIslandState}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  {[40, 70, 90, 50, 80, 60, 30].map((h, idx) => (
                    <div
                      key={idx}
                      className="w-1 bg-cyan-400"
                      style={{ height: `${Math.round(h * (simulatedIslandState === 'Idle' ? 0.3 : 0.8))}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {feat.id === 'volume-slider' && (
            <div className="p-3 bg-[#D9D6D0] border border-[#1E1E1E] space-y-2 font-mono text-xs">
              <span className="font-bold text-[#1E1E1E] uppercase flex items-center gap-1.5 text-[11px] sm:text-xs">
                <Sliders className="w-3.5 h-3.5 text-[#8b5cf6]" />
                <span>Interactive Simulator: Real-Time Audio Bar</span>
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSimulatedMute(!simulatedMute)}
                  className="p-1.5 bg-white border border-[#1E1E1E] hover:bg-[#1E1E1E] hover:text-white transition-colors cursor-pointer"
                  title={simulatedMute ? 'Unmute' : 'Mute'}
                  aria-label={simulatedMute ? 'Unmute' : 'Mute'}
                >
                  {simulatedMute ? <VolumeX className="w-4 h-4 text-red-600" /> : <Volume2 className="w-4 h-4 text-emerald-600" />}
                </button>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={simulatedMute ? 0 : simulatedVolume}
                  onChange={(e) => {
                    setSimulatedVolume(Number(e.target.value));
                    if (simulatedMute) setSimulatedMute(false);
                  }}
                  className="flex-1 accent-[#8b5cf6] cursor-pointer"
                />
                <span className="w-12 font-bold text-right text-[11px] sm:text-xs">
                  {simulatedMute ? 'MUTE' : `${simulatedVolume}%`}
                </span>
              </div>
            </div>
          )}

          {/* Highlights badges */}
          {feat.highlights && feat.highlights.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 font-mono text-[11px] pt-1">
              {feat.highlights.map((h, i) => (
                <div key={i} className="p-2 bg-[#F5F4F0] border border-[#1E1E1E]/20">
                  <span className="text-[#666666] block text-[10px] uppercase">{h.label}</span>
                  <span className="font-bold text-[#1E1E1E]">{h.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
});

/* ─────────────────────────────────────────────────────────────
   Main Convo Features Modal Component
   ───────────────────────────────────────────────────────────── */
export default function ConvoFeaturesModal({ isOpen, onClose }: ConvoFeaturesModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeTab, setActiveTab] = useState<'features' | 'cheatsheet'>('features');
  const [expandedId, setExpandedId] = useState<string | null>('voice-activation');
  const [copiedText, setCopiedText] = useState<string | null>(null);

  // Interactive Mini Simulators State
  const [simulatedTone, setSimulatedTone] = useState<'Formal' | 'Casual' | 'Technical' | 'Concise'>('Formal');
  const [simulatedReasoning, setSimulatedReasoning] = useState<'Quick' | 'Light' | 'Deep'>('Deep');
  const [simulatedIslandState, setSimulatedIslandState] = useState<'Idle' | 'Listening' | 'Speaking' | 'Thinking'>('Listening');
  const [simulatedMute, setSimulatedMute] = useState(false);
  const [simulatedVolume, setSimulatedVolume] = useState(80);

  // Keyboard navigation & lock scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Handle command copy
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => {
      setCopiedText((prev) => (prev === text ? null : prev));
    }, 2000);
  };

  // Filtered features list
  const filteredFeatures = useMemo(() => {
    return convoFeatures.filter((f) => {
      const matchesCategory = selectedCategory === 'all' || f.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesSearch =
        f.title.toLowerCase().includes(q) ||
        f.summary.toLowerCase().includes(q) ||
        f.commands.some((c) => c.toLowerCase().includes(q)) ||
        f.subFeatures.some((sf) => sf.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[110] flex items-center justify-center p-1 sm:p-4 md:p-6 bg-[#1E1E1E]/85 backdrop-blur-md select-none"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 18 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full h-full max-w-6xl max-h-[100dvh] sm:max-h-[94vh] bg-[#E4E2DD] border-2 border-[#1E1E1E] shadow-[4px_4px_0px_#1E1E1E] sm:shadow-[8px_8px_0px_#1E1E1E] flex flex-col overflow-hidden text-[#1E1E1E]"
          >
            {/* Modal Top Header Bar */}
            <div className="py-2.5 sm:py-3.5 px-3 sm:px-6 bg-[#1E1E1E] text-[#E4E2DD] flex flex-col sm:flex-row items-stretch sm:items-center justify-between border-b border-[#1E1E1E] shrink-0 gap-2 sm:gap-4">
              <div className="flex items-center justify-between sm:justify-start gap-2.5 sm:gap-3 truncate">
                <div className="flex items-center gap-2.5 truncate">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded bg-[#8b5cf6] text-white flex items-center justify-center shrink-0">
                    <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div className="truncate">
                    <div className="flex items-center gap-2">
                      <h3 className="font-clash font-bold text-sm sm:text-lg md:text-xl uppercase tracking-tight text-[#E4E2DD] truncate">
                        CONVO AI // CAPABILITIES GUIDE
                      </h3>
                      <span className="hidden xs:inline-block font-mono text-[9px] sm:text-[10px] uppercase font-bold px-1.5 sm:px-2 py-0.5 bg-[#8b5cf6]/20 text-[#a78bfa] border border-[#8b5cf6]/40 shrink-0">
                        28 Deep Features
                      </span>
                    </div>
                    <p className="font-mono text-[10px] sm:text-[11px] text-[#A8A59E] hidden md:block">
                      Autonomous voice intelligence, local dual SLMs, presence sensing &amp; native Windows macros
                    </p>
                  </div>
                </div>

                {/* Mobile Close Button (Right-aligned in top row on mobile) */}
                <button
                  onClick={onClose}
                  aria-label="Close modal"
                  className="sm:hidden p-1.5 border border-white/20 hover:bg-[#DB4A2B] hover:border-[#DB4A2B] text-white transition-colors cursor-pointer shrink-0"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Tab Selector & Desktop Close */}
              <div className="flex items-center justify-between sm:justify-end gap-2 sm:gap-3 shrink-0">
                <div className="flex items-center border border-white/20 p-0.5 bg-black/30 font-mono text-[11px] sm:text-xs flex-1 sm:flex-initial">
                  <button
                    onClick={() => setActiveTab('features')}
                    className={`flex-1 sm:flex-initial px-2.5 sm:px-3 py-1 font-bold transition-colors cursor-pointer text-center ${
                      activeTab === 'features' ? 'bg-[#8b5cf6] text-white' : 'text-[#A8A59E] hover:text-white'
                    }`}
                  >
                    Feature Explorer
                  </button>
                  <button
                    onClick={() => setActiveTab('cheatsheet')}
                    className={`flex-1 sm:flex-initial px-2.5 sm:px-3 py-1 font-bold transition-colors cursor-pointer text-center ${
                      activeTab === 'cheatsheet' ? 'bg-[#8b5cf6] text-white' : 'text-[#A8A59E] hover:text-white'
                    }`}
                  >
                    Cheat Sheet
                  </button>
                </div>

                <button
                  onClick={onClose}
                  aria-label="Close modal"
                  className="hidden sm:inline-flex p-1.5 border border-white/20 hover:bg-[#DB4A2B] hover:border-[#DB4A2B] text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Filter and Search Bar */}
            <div className="p-3 sm:p-5 bg-[#D9D6D0] border-b border-[#1E1E1E] shrink-0 space-y-2.5 sm:space-y-3">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-3">
                {/* Search Input */}
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-[#666666] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search capabilities, commands (e.g. 'morning', 'timer', 'drive', 'volume')..."
                    className="w-full pl-9 pr-14 py-2 bg-white border border-[#1E1E1E] font-satoshi text-xs sm:text-sm text-[#1E1E1E] focus:outline-none focus:ring-1 focus:ring-[#8b5cf6] placeholder-[#888888]"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[11px] font-mono font-bold text-[#666666] hover:text-[#1E1E1E] px-1.5 py-0.5 bg-[#ECEAE5] border border-[#1E1E1E]/30"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* Counter */}
                <div className="font-mono text-[11px] sm:text-xs text-[#555555] shrink-0 self-end sm:self-center">
                  Showing <strong className="text-[#1E1E1E]">{filteredFeatures.length}</strong> of 28 capabilities
                </div>
              </div>

              {/* Category Filter Chips (Smooth Touch Horizontal Scrolling) */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none font-mono text-[11px] sm:text-xs touch-pan-x [-webkit-overflow-scrolling:touch]">
                {convoCategories.map((cat) => {
                  const isActive = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-2.5 sm:px-3 py-1.5 border whitespace-nowrap transition-colors cursor-pointer font-bold flex items-center gap-1.5 shrink-0 ${
                        isActive
                          ? 'bg-[#1E1E1E] text-white border-[#1E1E1E] shadow-[2px_2px_0px_#8b5cf6]'
                          : 'bg-white text-[#444444] border-[#1E1E1E]/30 hover:border-[#1E1E1E]'
                      }`}
                    >
                      <FeatureIcon name={cat.iconName} className="w-3.5 h-3.5 shrink-0" />
                      <span>{cat.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Main Interactive Body Area (Hardware-accelerated smooth scrolling) */}
            <div className="flex-1 smooth-scroll-container p-3 sm:p-5 md:p-6 space-y-3 sm:space-y-4">
              {activeTab === 'features' ? (
                /* Feature Explorer Cards Grid */
                filteredFeatures.length === 0 ? (
                  <div className="py-16 sm:py-20 text-center">
                    <p className="font-clash font-bold text-lg sm:text-xl uppercase text-[#666666] mb-2">
                      No matching capabilities found
                    </p>
                    <p className="font-satoshi text-xs sm:text-sm text-[#888888] mb-4">
                      Try searching for voice, clipboard, email, thinking, or Google apps.
                    </p>
                    <button
                      onClick={() => {
                        setSearchQuery('');
                        setSelectedCategory('all');
                      }}
                      className="btn-raw text-xs"
                    >
                      Reset Filters
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-3 sm:gap-4">
                    {filteredFeatures.map((feat) => (
                      <FeatureCard
                        key={feat.id}
                        feat={feat}
                        isExpanded={expandedId === feat.id}
                        copiedText={copiedText}
                        onToggleExpand={(id) => setExpandedId(expandedId === id ? null : id)}
                        onCopy={handleCopy}
                        simulatedReasoning={simulatedReasoning}
                        setSimulatedReasoning={setSimulatedReasoning}
                        simulatedTone={simulatedTone}
                        setSimulatedTone={setSimulatedTone}
                        simulatedIslandState={simulatedIslandState}
                        setSimulatedIslandState={setSimulatedIslandState}
                        simulatedMute={simulatedMute}
                        setSimulatedMute={setSimulatedMute}
                        simulatedVolume={simulatedVolume}
                        setSimulatedVolume={setSimulatedVolume}
                      />
                    ))}
                  </div>
                )
              ) : (
                /* Command Cheat Sheet View */
                <div>
                  {/* Mobile Command Cards (< 640px) */}
                  <div className="sm:hidden space-y-3">
                    <div className="p-3 bg-[#D9D6D0] border border-[#1E1E1E] text-xs font-mono mb-2">
                      <span className="font-bold text-[#1E1E1E] block mb-0.5">QUICK VOICE COMMANDS</span>
                      <span className="text-[#555555]">Tap any command to copy it to clipboard.</span>
                    </div>

                    {[
                      { intent: 'Summon Convo Anywhere', cmd: '"Hey Convo" or Summon Hotkey', shortcut: 'Ctrl + Shift + Space' },
                      { intent: 'Push-To-Talk Voice', cmd: 'Hold PTT key and speak naturally', shortcut: 'Space (or CapsLock)' },
                      { intent: 'Morning Briefing', cmd: '"Good morning Convo" / "Brief me on today"', shortcut: 'Voice Command' },
                      { intent: 'Think More / Deeper', cmd: '"Think more about this" / "Think harder"', shortcut: 'Voice or UI Button' },
                      { intent: 'Quick Short Answer', cmd: '"Quick answer" / "Give me the short version"', shortcut: 'Voice Command' },
                      { intent: 'Check Unread Emails', cmd: '"Convo, do I have any new emails?"', shortcut: 'Voice or Chat' },
                      { intent: 'Read Latest Emails', cmd: '"Read my latest emails"', shortcut: 'Voice or Chat' },
                      { intent: 'Send Interactive Email', cmd: '"I want to send email to college regarding project"', shortcut: 'Interactive Modal' },
                      { intent: 'Proofread Clipboard', cmd: '"Proofread this clipboard text" / "Check grammar"', shortcut: 'Auto Clipboard' },
                      { intent: 'Formal Tone Polish', cmd: '"Make this email more professional"', shortcut: 'Auto Clipboard' },
                      { intent: 'Reading Level Analysis', cmd: '"What reading level is this?" / "Check readability"', shortcut: 'Offline NLP' },
                      { intent: 'Google Photos Picker', cmd: '"Open Google Photos Picker to select photos and videos"', shortcut: 'Official API' },
                      { intent: 'Search Google Drive', cmd: '"Search Google Drive for \'Project Pitch\'"', shortcut: 'Visual Cards' },
                      { intent: 'Summarize Google Doc', cmd: '"Summarize my Google Doc on AI Ethics"', shortcut: 'In-GUI Reader' },
                      { intent: 'GitHub Repositories', cmd: '"Show me my GitHub repositories"', shortcut: 'GitHub API' },
                      { intent: 'Clone Repository', cmd: '"Clone https://github.com/ashaz/convo-ai to Desktop"', shortcut: 'Local Git' },
                      { intent: 'Run Macro Routine', cmd: '"Start project mode" / "Run coding routine"', shortcut: 'Settings Card' },
                      { intent: 'Check PC Hardware', cmd: '"What is my CPU and RAM usage?"', shortcut: 'psutil Telemetry' },
                      { intent: 'Set Timer / Alarm', cmd: '"Set a timer for 15 minutes"', shortcut: 'Chime & Toast' },
                      { intent: 'Open Memory GUI', cmd: '"What do you remember about me?"', shortcut: 'Press M key' },
                      { intent: 'Activity Audit Log', cmd: 'Inspect chronological tool execution log', shortcut: 'Press A key' },
                      { intent: 'Settings Control', cmd: 'Configure voice, email, and presence lock', shortcut: 'Press S key' }
                    ].map((item, index) => {
                      const isCopied = copiedText === item.cmd;
                      return (
                        <div
                          key={index}
                          onClick={() => handleCopy(item.cmd)}
                          className="p-3 bg-white border border-[#1E1E1E] shadow-[2px_2px_0px_#1E1E1E] cursor-pointer hover:border-[#8b5cf6] transition-colors"
                        >
                          <div className="flex items-center justify-between gap-2 mb-1.5">
                            <span className="font-clash font-bold text-xs uppercase text-[#1E1E1E]">
                              {item.intent}
                            </span>
                            <span className="font-mono text-[9px] px-1.5 py-0.5 bg-[#ECEAE5] border border-[#1E1E1E]/30 shrink-0">
                              {item.shortcut}
                            </span>
                          </div>
                          <div className="flex items-center justify-between gap-2 font-mono text-xs">
                            <span className="text-[#333333] break-all leading-tight">{item.cmd}</span>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleCopy(item.cmd);
                              }}
                              className={`px-2 py-1 text-[10px] font-bold uppercase border shrink-0 transition-colors ${
                                isCopied
                                  ? 'bg-emerald-600 text-white border-emerald-700'
                                  : 'bg-[#ECEAE5] border-[#1E1E1E]/40 hover:bg-[#8b5cf6] hover:text-white'
                              }`}
                            >
                              {isCopied ? 'Copied' : 'Copy'}
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Tablet & Desktop Table View (>= 640px) */}
                  <div className="hidden sm:block border-2 border-[#1E1E1E] bg-white shadow-[4px_4px_0px_#1E1E1E] overflow-x-auto [-webkit-overflow-scrolling:touch]">
                    <table className="w-full text-left border-collapse font-satoshi text-xs sm:text-sm">
                      <thead>
                        <tr className="bg-[#1E1E1E] text-white font-mono text-xs uppercase tracking-wider">
                          <th className="p-3 border-r border-white/20">Intent / Task</th>
                          <th className="p-3 border-r border-white/20">Example Voice Command</th>
                          <th className="p-3 border-r border-white/20">Shortcut / Trigger</th>
                          <th className="p-3 text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#1E1E1E]/20 text-[#222222] font-mono text-xs">
                        {[
                          { intent: 'Summon Convo Anywhere', cmd: '"Hey Convo" or Summon Hotkey', shortcut: 'Ctrl + Shift + Space' },
                          { intent: 'Push-To-Talk Voice', cmd: 'Hold PTT key and speak naturally', shortcut: 'Space (or CapsLock)' },
                          { intent: 'Morning Briefing', cmd: '"Good morning Convo" / "Brief me on today"', shortcut: 'Voice Command' },
                          { intent: 'Think More / Deeper', cmd: '"Think more about this" / "Think harder"', shortcut: 'Voice or UI Button' },
                          { intent: 'Quick Short Answer', cmd: '"Quick answer" / "Give me the short version"', shortcut: 'Voice Command' },
                          { intent: 'Check Unread Emails', cmd: '"Convo, do I have any new emails?"', shortcut: 'Voice or Chat' },
                          { intent: 'Read Latest Emails', cmd: '"Read my latest emails"', shortcut: 'Voice or Chat' },
                          { intent: 'Send Interactive Email', cmd: '"I want to send email to college regarding project"', shortcut: 'Interactive Modal' },
                          { intent: 'Proofread Clipboard', cmd: '"Proofread this clipboard text" / "Check grammar"', shortcut: 'Auto Clipboard' },
                          { intent: 'Formal Tone Polish', cmd: '"Make this email more professional"', shortcut: 'Auto Clipboard' },
                          { intent: 'Reading Level Analysis', cmd: '"What reading level is this?" / "Check readability"', shortcut: 'Offline NLP' },
                          { intent: 'Google Photos Picker', cmd: '"Open Google Photos Picker to select photos and videos"', shortcut: 'Official API' },
                          { intent: 'Search Google Drive', cmd: '"Search Google Drive for \'Project Pitch\'"', shortcut: 'Visual Cards' },
                          { intent: 'Summarize Google Doc', cmd: '"Summarize my Google Doc on AI Ethics"', shortcut: 'In-GUI Reader' },
                          { intent: 'GitHub Repositories', cmd: '"Show me my GitHub repositories"', shortcut: 'GitHub API' },
                          { intent: 'Clone Repository', cmd: '"Clone https://github.com/ashaz/convo-ai to Desktop"', shortcut: 'Local Git' },
                          { intent: 'Run Macro Routine', cmd: '"Start project mode" / "Run coding routine"', shortcut: 'Settings Card' },
                          { intent: 'Check PC Hardware', cmd: '"What is my CPU and RAM usage?"', shortcut: 'psutil Telemetry' },
                          { intent: 'Set Timer / Alarm', cmd: '"Set a timer for 15 minutes"', shortcut: 'Chime & Toast' },
                          { intent: 'Open Memory GUI', cmd: '"What do you remember about me?"', shortcut: 'Press M key' },
                          { intent: 'Activity Audit Log', cmd: 'Inspect chronological tool execution log', shortcut: 'Press A key' },
                          { intent: 'Settings Control', cmd: 'Configure voice, email, and presence lock', shortcut: 'Press S key' }
                        ].map((item, index) => {
                          const isCopied = copiedText === item.cmd;
                          return (
                            <tr key={index} className="hover:bg-[#8b5cf6]/5 transition-colors">
                              <td className="p-3 border-r border-[#1E1E1E]/20 font-bold font-satoshi text-sm">
                                {item.intent}
                              </td>
                              <td className="p-3 border-r border-[#1E1E1E]/20 font-medium text-[#1E1E1E]">
                                {item.cmd}
                              </td>
                              <td className="p-3 border-r border-[#1E1E1E]/20 text-[#666666]">
                                <span className="px-2 py-0.5 bg-[#ECEAE5] border border-[#1E1E1E]/30">
                                  {item.shortcut}
                                </span>
                              </td>
                              <td className="p-3 text-center">
                                <button
                                  onClick={() => handleCopy(item.cmd)}
                                  className={`px-2.5 py-1 text-[11px] border transition-colors cursor-pointer font-bold ${
                                    isCopied
                                      ? 'bg-emerald-600 text-white border-emerald-700'
                                      : 'bg-white border-[#1E1E1E] hover:bg-[#8b5cf6] hover:text-white'
                                  }`}
                                >
                                  {isCopied ? 'Copied!' : 'Copy'}
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Bottom Footer */}
            <div className="py-2.5 sm:py-0 h-auto sm:h-12 bg-[#1E1E1E] text-[#E4E2DD] px-3 sm:px-6 flex flex-col sm:flex-row items-center justify-between border-t border-[#1E1E1E] shrink-0 font-mono text-[11px] sm:text-xs gap-2">
              <div className="flex items-center gap-2 text-center sm:text-left">
                <span className="w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-emerald-400/40 shrink-0" />
                <span className="text-white/80">CONVO AI V1.0 // 28 INTERACTIVE CAPABILITIES READY</span>
              </div>
              <a
                href="https://github.com/Ashaz11223344/convo-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1 bg-[#8b5cf6] text-white hover:bg-white hover:text-[#1E1E1E] transition-colors font-bold uppercase tracking-wider text-[10px] sm:text-[11px]"
              >
                <span>GitHub Repo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
