import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  Layers,
  CheckCircle2,
  Activity,
  ShieldCheck
} from 'lucide-react';
import CategoryDivider from './CategoryDivider';
import { trainedModels, type TrainedModel } from '../../data/models';

export default function TrainedModelsSection() {
  return (
    <>
      {/* Category Divider 02: TRAINED MODELS */}
      <CategoryDivider
        number="02"
        title="TRAINED MODELS"
        align="left"
        id="models-divider"
      />

      <section id="models" className="py-20 sm:py-28 px-4 sm:px-8 md:px-16 lg:px-24 relative select-none">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 pb-8 border-b border-[#1E1E1E]/20">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-2 h-2 bg-[#DB4A2B]" />
                <span className="font-satoshi text-xs sm:text-sm font-bold tracking-[0.2em] text-[#DB4A2B] uppercase">
                  // Custom Trained AI Models
                </span>
              </div>
              <h2 className="font-clash text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-[-0.03em] text-[#1E1E1E]">
                TRAINED MODELS & WEIGHTS
              </h2>
            </div>

            <p className="font-satoshi text-xs sm:text-sm text-[#444444] max-w-md leading-relaxed">
              Custom-trained AI models built by <strong>Ashaz Pathan</strong> and <strong>integrated directly with Convo AI</strong> (Desktop Voice OS) for fast, private, and offline assistance without cloud fees.
            </p>
          </div>

          {/* Built for Convo AI Synergy Block */}
          <div className="mb-16 p-6 sm:p-8 bg-[#D9D6D0] border-2 border-[#1E1E1E] shadow-[6px_6px_0px_#1E1E1E]">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-[#1E1E1E]/20">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <Layers className="w-4 h-4 text-[#DB4A2B]" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#DB4A2B]">
                    INTEGRATED WITH CONVO AI // DUAL SLM PIPELINE
                  </span>
                </div>
                <h3 className="font-clash text-xl sm:text-2xl font-bold uppercase tracking-normal text-[#1E1E1E]">
                  Embedded Directly Into Convo AI Desktop OS
                </h3>
                <p className="font-satoshi text-xs sm:text-sm text-[#444444] mt-1 max-w-2xl leading-relaxed">
                  Both models are embedded as the core offline intelligence engine of <strong>Convo AI</strong>. They eliminate costly cloud subscriptions: Vesper 1.5B handles real-time voice loops and desktop action macros in under 150ms, while Obsidian 3B handles deep reasoning, programming, and multi-step routines.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2 shrink-0">
                <span className="font-mono text-[11px] uppercase px-3 py-1 bg-[#1E1E1E] text-white font-bold border border-[#1E1E1E]">
                  CONVO AI INTEGRATED
                </span>
                <span className="font-mono text-[11px] uppercase px-3 py-1 bg-white border border-[#1E1E1E] text-[#1E1E1E] font-bold">
                  100% Offline
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {/* Vesper Card (Banner Pink Accent) */}
              <div className="p-4 bg-white border border-[#1E1E1E] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-[10px] font-bold text-[#E11D74] uppercase px-2 py-0.5 bg-[#E11D74]/10 border border-[#E11D74]/30">
                      Convo AI Voice Engine
                    </span>
                    <span className="font-mono text-xs text-[#666666]">~950 MB VRAM</span>
                  </div>
                  <h4 className="font-clash font-bold text-lg uppercase text-[#1E1E1E] mb-1">
                    Vesper 1.5B Instruct
                  </h4>
                  <p className="font-satoshi text-xs text-[#555555] leading-relaxed">
                    Integrated directly into Convo AI for sub-second spoken replies, hands-free wake word listening, and instant Windows desktop macro control.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#1E1E1E]/10 flex items-center justify-between font-mono text-[11px] text-[#444444]">
                  <span>75–110 words/sec</span>
                  <span className="text-[#E11D74] font-bold">Convo AI Voice Core</span>
                </div>
              </div>

              {/* Obsidian Card (Banner Purple Accent) */}
              <div className="p-4 bg-white border border-[#1E1E1E] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-[10px] font-bold text-[#8B5CF6] uppercase px-2 py-0.5 bg-[#8B5CF6]/10 border border-[#8B5CF6]/30">
                      Convo AI Deep Thinking Core
                    </span>
                    <span className="font-mono text-xs text-[#666666]">~2.1 GB VRAM</span>
                  </div>
                  <h4 className="font-clash font-bold text-lg uppercase text-[#1E1E1E] mb-1">
                    Obsidian 3B Genesis
                  </h4>
                  <p className="font-satoshi text-xs text-[#555555] leading-relaxed">
                    Integrated directly into Convo AI's Think More pipeline, trained with 100% full weights using CUDA computing for offline code debugging and multi-step logic.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#1E1E1E]/10 flex items-center justify-between font-mono text-[11px] text-[#444444]">
                  <span>45–60 words/sec</span>
                  <span className="text-[#8B5CF6] font-bold">Convo AI Reasoning Core</span>
                </div>
              </div>
            </div>
          </div>

          {/* 1-on-1 Models Showcase: Model Card (Left) -> Model Details (Right) */}
          <div className="flex flex-col gap-16 sm:gap-24">
            {trainedModels.map((model, index) => (
              <ModelCard
                key={model.id}
                model={model}
                index={index}
              />
            ))}
          </div>

          {/* ─────────────────────────────────────────────────────────────
              AEO & GEO: Model Comparison & Decision Support Matrix Table
             ───────────────────────────────────────────────────────────── */}
          <div className="mt-20 pt-16 border-t-2 border-[#1E1E1E]">
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-[#DB4A2B]" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#DB4A2B]">
                  DECISION FRAMEWORK // AEO &amp; ARCHITECTURE COMPARISON
                </span>
              </div>
              <h3 className="font-clash text-2xl sm:text-4xl font-bold uppercase tracking-tight text-[#1E1E1E]">
                MODEL SELECTION &amp; DEPLOYMENT MATRIX
              </h3>
              <p className="font-satoshi text-xs sm:text-sm text-[#444444] mt-2 max-w-2xl">
                Compare compute footprint, latency, and cost dynamics between Ashaz's custom small models and traditional cloud endpoints to make the right architectural choice.
              </p>
            </div>

            {/* Comparison Table */}
            <div className="overflow-x-auto [-webkit-overflow-scrolling:touch] border-2 border-[#1E1E1E] bg-white shadow-[4px_4px_0px_#1E1E1E] sm:shadow-[6px_6px_0px_#1E1E1E] mb-12">
              <div className="sm:hidden flex items-center justify-between px-3 py-1.5 bg-[#D9D6D0] border-b border-[#1E1E1E] font-mono text-[10px] text-[#444444] font-bold">
                <span>// SWIPE MATRIX HORIZONTALLY</span>
                <span>&rarr;</span>
              </div>
              <table className="w-full text-left border-collapse font-satoshi text-xs sm:text-sm min-w-[700px] sm:min-w-0">
                <thead>
                  <tr className="bg-[#1E1E1E] text-white font-mono text-[11px] sm:text-xs uppercase tracking-wider">
                    <th className="p-3 sm:p-4 border-r border-white/20">Model / Architecture</th>
                    <th className="p-3 sm:p-4 border-r border-white/20">VRAM Budget</th>
                    <th className="p-3 sm:p-4 border-r border-white/20">Throughput (Speed)</th>
                    <th className="p-3 sm:p-4 border-r border-white/20">Privacy &amp; Cost</th>
                    <th className="p-3 sm:p-4 border-r border-white/20">Best-For Use Case</th>
                    <th className="p-3 sm:p-4">Decision Recommendation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1E1E1E]/20 text-[#222222]">
                  <tr className="hover:bg-[#E11D74]/5 transition-colors">
                    <td className="p-3 sm:p-4 border-r border-[#1E1E1E]/20 font-bold">
                      <span className="text-[#E11D74] font-clash text-sm sm:text-base block">Vesper 1.5B Instruct</span>
                      <span className="font-mono text-[11px] text-[#666666]">1.5B Params &bull; 4-bit Tuning</span>
                    </td>
                    <td className="p-3 sm:p-4 border-r border-[#1E1E1E]/20 font-mono">
                      ~950 MB (Q4_K_M)
                    </td>
                    <td className="p-3 sm:p-4 border-r border-[#1E1E1E]/20 font-mono text-[#E11D74] font-bold">
                      75–110 words/sec
                    </td>
                    <td className="p-3 sm:p-4 border-r border-[#1E1E1E]/20">
                      <span className="font-mono text-xs text-green-700 font-bold block">100% Free / Local</span>
                      <span className="text-[11px] text-[#555555]">Zero cloud API billing</span>
                    </td>
                    <td className="p-3 sm:p-4 border-r border-[#1E1E1E]/20">
                      Real-time voice chats, instant OS action trigger, daily typing helper
                    </td>
                    <td className="p-3 sm:p-4 font-medium">
                      Select when sub-second speech latency and low RAM footprint are vital.
                    </td>
                  </tr>

                  <tr className="hover:bg-[#8B5CF6]/5 transition-colors">
                    <td className="p-3 sm:p-4 border-r border-[#1E1E1E]/20 font-bold">
                      <span className="text-[#8B5CF6] font-clash text-sm sm:text-base block">Obsidian 3B Genesis</span>
                      <span className="font-mono text-[11px] text-[#666666]">3.0B Params &bull; CUDA Full Weights</span>
                    </td>
                    <td className="p-3 sm:p-4 border-r border-[#1E1E1E]/20 font-mono">
                      ~2.1 GB (Q4_K_M)
                    </td>
                    <td className="p-3 sm:p-4 border-r border-[#1E1E1E]/20 font-mono text-[#8B5CF6] font-bold">
                      45–60 words/sec
                    </td>
                    <td className="p-3 sm:p-4 border-r border-[#1E1E1E]/20">
                      <span className="font-mono text-xs text-green-700 font-bold block">100% Free / Local</span>
                      <span className="text-[11px] text-[#555555]">Zero data leakage risk</span>
                    </td>
                    <td className="p-3 sm:p-4 border-r border-[#1E1E1E]/20">
                      Deep logic thinking, coding bugs, multi-step planning, analysis
                    </td>
                    <td className="p-3 sm:p-4 font-medium">
                      Select for rigorous technical tasks and coding where logic depth matters.
                    </td>
                  </tr>

                  <tr className="hover:bg-black/5 transition-colors bg-[#F5F4F0]">
                    <td className="p-3 sm:p-4 border-r border-[#1E1E1E]/20 font-bold">
                      <span className="text-[#1E1E1E] font-clash text-sm sm:text-base block">Cloud Commercial APIs</span>
                      <span className="font-mono text-[11px] text-[#666666]">100B+ Cloud Endpoints</span>
                    </td>
                    <td className="p-3 sm:p-4 border-r border-[#1E1E1E]/20 font-mono text-[#666666]">
                      0 MB Local (Cloud Server)
                    </td>
                    <td className="p-3 sm:p-4 border-r border-[#1E1E1E]/20 font-mono text-[#444444]">
                      20–40 words/sec (Network-bound)
                    </td>
                    <td className="p-3 sm:p-4 border-r border-[#1E1E1E]/20">
                      <span className="font-mono text-xs text-red-600 font-bold block">$5–$30 / 1M tokens</span>
                      <span className="text-[11px] text-[#555555]">Sends prompt to 3rd party</span>
                    </td>
                    <td className="p-3 sm:p-4 border-r border-[#1E1E1E]/20">
                      Broad open-world knowledge with persistent web connectivity
                    </td>
                    <td className="p-3 sm:p-4 font-medium">
                      Select only if monthly bills and remote network dependency are acceptable.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Decision Checklist & First-Hand Hardware Benchmark Telemetry Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
              {/* Left 6 cols: Practical 3-Step Selection Checklist */}
              <div className="lg:col-span-6 p-6 sm:p-8 bg-[#D9D6D0] border-2 border-[#1E1E1E] shadow-[4px_4px_0px_#1E1E1E]">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-5 h-5 text-[#DB4A2B]" />
                  <h4 className="font-clash text-lg sm:text-xl font-bold uppercase tracking-tight text-[#1E1E1E]">
                    3-Step Deployment Checklist
                  </h4>
                </div>
                <div className="space-y-4 font-satoshi text-xs sm:text-sm">
                  <div className="p-3.5 bg-white border border-[#1E1E1E]">
                    <span className="font-mono text-[11px] font-bold text-[#DB4A2B] uppercase block mb-1">
                      Step 01 &bull; Check Your Local GPU/RAM
                    </span>
                    <p className="text-[#333333]">
                      If your PC or laptop has 2 GB free memory, deploy <strong>Vesper 1.5B</strong>. If you have 4 GB+ memory or a modern dedicated GPU, run <strong>Obsidian 3B</strong>.
                    </p>
                  </div>

                  <div className="p-3.5 bg-white border border-[#1E1E1E]">
                    <span className="font-mono text-[11px] font-bold text-[#DB4A2B] uppercase block mb-1">
                      Step 02 &bull; Match Your Task Velocity
                    </span>
                    <p className="text-[#333333]">
                      Need conversational speech that replies immediately without hesitation? Choose <strong>Vesper</strong>. Need strict code formatting, math solving, or multi-step logic? Choose <strong>Obsidian</strong>.
                    </p>
                  </div>

                  <div className="p-3.5 bg-white border border-[#1E1E1E]">
                    <span className="font-mono text-[11px] font-bold text-[#DB4A2B] uppercase block mb-1">
                      Step 03 &bull; Run 100% Air-Gapped Offline
                    </span>
                    <p className="text-[#333333]">
                      Export weights via standard GGUF formats into Ollama, LM Studio, or llama.cpp for complete offline operation without internet or subscriptions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right 6 cols: Real Hardware Testing Benchmark (GEO Original Experience) */}
              <div className="lg:col-span-6 p-6 sm:p-8 bg-white border-2 border-[#1E1E1E] shadow-[4px_4px_0px_#1E1E1E]">
                <div className="flex items-center gap-2 mb-4">
                  <Activity className="w-5 h-5 text-[#DB4A2B]" />
                  <h4 className="font-clash text-lg sm:text-xl font-bold uppercase tracking-tight text-[#1E1E1E]">
                    First-Hand Benchmarks &amp; Testing Telemetry
                  </h4>
                </div>

                <p className="font-satoshi text-xs text-[#555555] mb-4">
                  Tested and benchmarked directly by <strong>Ashaz Pathan</strong> on physical hardware. Zero synthetic approximations.
                </p>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 bg-[#F5F4F0] border border-[#1E1E1E] flex flex-col gap-1">
                    <div className="flex justify-between items-center text-[#1E1E1E] font-bold">
                      <span>TEST BENCH SPEC</span>
                      <span className="text-[#DB4A2B]">VERIFIED</span>
                    </div>
                    <span className="text-[#666666] text-[11px]">
                      AMD Ryzen 7 5800X &bull; NVIDIA RTX 3060 12GB &bull; 32GB RAM &bull; CUDA 12.4
                    </span>
                  </div>

                  <div className="p-3 bg-[#F5F4F0] border border-[#1E1E1E] space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-[#E11D74]">VESPER-1.5B (Q4_K_M)</span>
                      <span className="font-bold text-[#1E1E1E]">138 ms TTFT</span>
                    </div>
                    <div className="w-full bg-[#E4E2DD] h-2 border border-[#1E1E1E] overflow-hidden">
                      <div className="bg-[#E11D74] h-full w-[86%]" />
                    </div>
                    <div className="flex justify-between text-[11px] text-[#555555]">
                      <span>Throughput: 86.4 tokens/sec</span>
                      <span>VRAM: 980 MB</span>
                    </div>
                  </div>

                  <div className="p-3 bg-[#F5F4F0] border border-[#1E1E1E] space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-[#8B5CF6]">OBSIDIAN-3B (Q4_K_M)</span>
                      <span className="font-bold text-[#1E1E1E]">295 ms TTFT</span>
                    </div>
                    <div className="w-full bg-[#E4E2DD] h-2 border border-[#1E1E1E] overflow-hidden">
                      <div className="bg-[#8B5CF6] h-full w-[62%]" />
                    </div>
                    <div className="flex justify-between text-[11px] text-[#555555]">
                      <span>Throughput: 49.1 tokens/sec</span>
                      <span>VRAM: 2,140 MB</span>
                    </div>
                  </div>

                  <div className="p-2.5 bg-green-50 border border-green-800 text-green-900 text-[11px] flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-green-700 shrink-0" />
                    <span>
                      <strong>Wireshark Telemetry Audit:</strong> 0 external packets detected during generation. 100% private data isolation.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ─────────────────────────────────────────────────────────────
   Banner Effects: Stardust Particles & Mouse Hover Flare
   ───────────────────────────────────────────────────────────── */
interface BannerEffectsProps {
  isObsidian: boolean;
}

function BannerEffects({ isObsidian }: BannerEffectsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const flareRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 337);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    const particleColors = isObsidian
      ? ['232, 121, 249', '192, 132, 252', '168, 85, 247', '255, 255, 255']
      : ['225, 29, 116', '244, 114, 182', '249, 168, 212', '255, 255, 255'];

    const count = 35;
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.6,
      speedY: Math.random() * 0.4 + 0.15,
      speedX: (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.6 + 0.2,
      fadeSpeed: Math.random() * 0.006 + 0.003,
      fadingIn: true,
      color: particleColors[Math.floor(Math.random() * particleColors.length)]
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        p.y -= p.speedY;
        p.x += p.speedX;

        if (p.fadingIn) {
          p.alpha += p.fadeSpeed;
          if (p.alpha >= 0.8) p.fadingIn = false;
        } else {
          p.alpha -= p.fadeSpeed;
          if (p.alpha <= 0.1) p.fadingIn = true;
        }

        if (p.y < -10 || p.x < -10 || p.x > width + 10) {
          p.x = Math.random() * width;
          p.y = height + 10;
          p.alpha = Math.random() * 0.4 + 0.2;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${Math.max(0, p.alpha)})`;
        ctx.shadowBlur = 6;
        ctx.shadowColor = `rgba(${p.color}, 0.8)`;
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isObsidian]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!flareRef.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    flareRef.current.style.transform = `translate(${x}px, ${y}px)`;
    flareRef.current.style.opacity = '1';
  };

  const handleMouseLeave = () => {
    if (!flareRef.current) return;
    flareRef.current.style.opacity = '0';
  };

  const flareGradient = isObsidian
    ? 'radial-gradient(circle, rgba(232, 121, 249, 0.38) 0%, rgba(147, 51, 234, 0.18) 40%, transparent 70%)'
    : 'radial-gradient(circle, rgba(225, 29, 116, 0.35) 0%, rgba(244, 114, 182, 0.18) 40%, transparent 70%)';

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="absolute inset-0 w-full h-full z-10 overflow-hidden pointer-events-auto"
    >
      {/* Layer 1: Stardust Particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none mix-blend-screen"
      />

      {/* Layer 2: Mouse Hover Flare */}
      <div
        ref={flareRef}
        style={{
          background: flareGradient,
          width: '360px',
          height: '360px',
          marginLeft: '-180px',
          marginTop: '-180px',
        }}
        className="absolute rounded-full pointer-events-none opacity-0 transition-opacity duration-300 will-change-transform mix-blend-screen"
      />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Brutalist 1-on-1 Model Card
   Layout: Model Banner Card (Left) -> Model Specs & Story (Right)
   ───────────────────────────────────────────────────────────── */
interface ModelCardProps {
  model: TrainedModel;
  index: number;
}

function ModelCard({ model }: ModelCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [btnHover, setBtnHover] = useState(false);

  return (
    <motion.div
      id={model.id}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch border-b border-[#1E1E1E]/20 pb-16 transition-all"
    >
      {/* LEFT: Model Banner (Strict 16:9 Uncompressed Frame) */}
      <div className="w-full lg:w-[56%] shrink-0 flex flex-col">
        <div 
          style={{
            boxShadow: isHovered ? `8px 8px 0px ${model.color}` : '6px 6px 0px #1E1E1E',
            borderColor: isHovered ? model.color : '#1E1E1E'
          }}
          className="relative w-full bg-[#1E1E1E] border-2 overflow-hidden select-none flex flex-col transition-all duration-300"
        >
          {/* Top Model Window Chrome Bar */}
          <div className="h-9 bg-[#1E1E1E] text-[#E4E2DD] px-4 flex items-center justify-between text-xs font-mono shrink-0 z-20 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: model.color }} />
              <span className="font-bold">№ {model.number}</span>
            </div>

            <span className="truncate max-w-[200px] sm:max-w-[300px] text-white/70 font-mono text-[11px]">
              {model.name}
            </span>

            <div className="flex items-center gap-1.5">
              <span className="font-bold text-[11px]" style={{ color: model.color }}>[READY / GGUF]</span>
            </div>
          </div>

          {/* Model Banner Image Display - Strict 16:9 Aspect Ratio with Stardust & Mouse Flare */}
          <div className="relative w-full aspect-video overflow-hidden bg-black">
            <img
              src={model.bannerImage}
              alt={`${model.name} Model Banner`}
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              loading="lazy"
            />

            {/* Option 1 Effects: Stardust Particles & Mouse Hover Flare */}
            <BannerEffects isObsidian={model.id === 'model-obsidian'} />
          </div>
        </div>

        {/* Quick Runtime Badges */}
        <div className="grid grid-cols-3 gap-2 mt-3 font-mono text-[11px]">
          <div className="p-2.5 bg-[#D9D6D0] border border-[#1E1E1E]/30 text-center transition-colors" style={{ borderColor: isHovered ? `${model.color}50` : 'rgba(30,30,30,0.3)' }}>
            <span className="block text-[10px] text-[#666666] uppercase">Memory Footprint</span>
            <span className="font-bold text-[#1E1E1E]">{model.vramUsage}</span>
          </div>
          <div className="p-2.5 bg-[#D9D6D0] border border-[#1E1E1E]/30 text-center transition-colors" style={{ borderColor: isHovered ? `${model.color}50` : 'rgba(30,30,30,0.3)' }}>
            <span className="block text-[10px] text-[#666666] uppercase">Speed</span>
            <span className="font-bold text-[#1E1E1E]">{model.speed}</span>
          </div>
          <div className="p-2.5 bg-[#D9D6D0] border border-[#1E1E1E]/30 text-center transition-colors" style={{ borderColor: isHovered ? `${model.color}50` : 'rgba(30,30,30,0.3)' }}>
            <span className="block text-[10px] text-[#666666] uppercase">File Format</span>
            <span className="font-bold text-[#1E1E1E]">GGUF (Fast Local)</span>
          </div>
        </div>
      </div>

      {/* RIGHT: Model Details, Purpose & Technical Specs */}
      <div className="w-full lg:w-[44%] flex flex-col justify-between py-1">
        <div>
          {/* Top metadata line with dynamic model banner color */}
          <div className="flex items-center justify-between text-xs font-mono uppercase text-[#444444] mb-3">
            <span className="font-bold transition-colors" style={{ color: model.color }}>
              MODEL // {model.number}
            </span>
            <span
              className="font-mono text-xs font-bold px-2 py-0.5 border"
              style={{
                backgroundColor: `${model.color}15`,
                color: model.color,
                borderColor: `${model.color}40`,
              }}
            >
              {model.accentBadge}
            </span>
          </div>

          {/* Model Name: Changes to model banner color on hover */}
          <h3
            style={{ color: isHovered ? model.color : '#1E1E1E' }}
            className="font-clash font-bold text-2xl sm:text-3xl lg:text-4xl uppercase tracking-[0.03em] mb-2 transition-colors duration-200 cursor-pointer"
          >
            {model.name}
          </h3>

          {/* Tagline */}
          <p className="font-mono text-xs font-bold text-[#666666] uppercase tracking-wider mb-4">
            {model.tagline}
          </p>

          {/* Summary */}
          <p className="font-satoshi text-sm sm:text-base text-[#333333] leading-relaxed mb-6 font-medium">
            {model.summary}
          </p>

          {/* Key Objectives Box */}
          <div 
            style={{ 
              boxShadow: isHovered ? `3px 3px 0px ${model.color}` : '3px 3px 0px #1E1E1E',
              borderColor: isHovered ? `${model.color}80` : '#1E1E1E'
            }}
            className="p-4 bg-[#D9D6D0] border-2 mb-6 space-y-3 transition-all duration-200"
          >
            <span className="font-mono text-xs font-bold uppercase tracking-wider block transition-colors" style={{ color: model.color }}>
              // KEY GOALS
            </span>
            <div className="grid grid-cols-1 gap-2.5 font-satoshi text-xs">
              {model.keyPurposes.slice(0, 3).map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span 
                    className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 transition-colors" 
                    style={{ backgroundColor: isHovered ? model.color : '#1E1E1E' }} 
                  />
                  <p className="text-[#333333] leading-relaxed">
                    <strong className="text-[#1E1E1E]">{item.title}:</strong> {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture & Hardware Specifications Grid */}
          <div className="mb-6">
            <span className="font-satoshi text-xs font-bold uppercase tracking-wider text-[#666666] block mb-2.5">
              Model Specifications & Hardware
            </span>
            <div className="grid grid-cols-2 gap-2">
              <div 
                style={{ borderColor: isHovered ? `${model.color}60` : 'rgba(30, 30, 30, 0.3)' }}
                className="p-2.5 bg-white border transition-colors"
              >
                <span className="block font-mono text-[9px] uppercase text-[#666666]">Parameter Count</span>
                <span className="font-satoshi text-xs font-bold text-[#1E1E1E]">{model.parameters}</span>
              </div>
              <div 
                style={{ borderColor: isHovered ? `${model.color}60` : 'rgba(30, 30, 30, 0.3)' }}
                className="p-2.5 bg-white border transition-colors"
              >
                <span className="block font-mono text-[9px] uppercase text-[#666666]">Architecture</span>
                <span className="font-satoshi text-xs font-bold text-[#1E1E1E]">{model.baseModel}</span>
              </div>
              <div 
                style={{ borderColor: isHovered ? `${model.color}60` : 'rgba(30, 30, 30, 0.3)' }}
                className="p-2.5 bg-white border transition-colors"
              >
                <span className="block font-mono text-[9px] uppercase text-[#666666]">Training Compute</span>
                <span className="font-satoshi text-xs font-bold text-[#1E1E1E]">{model.trainingInfra}</span>
              </div>
              <div 
                style={{ borderColor: isHovered ? `${model.color}60` : 'rgba(30, 30, 30, 0.3)' }}
                className="p-2.5 bg-white border transition-colors"
              >
                <span className="block font-mono text-[9px] uppercase text-[#666666]">Memory Needed</span>
                <span className="font-satoshi text-xs font-bold text-[#1E1E1E]">{model.vramUsage}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Button: Lights up in model banner color on hover */}
        <div className="flex items-center gap-3 pt-5 border-t border-[#1E1E1E]/20 mt-auto">
          <a
            href={model.baseModelUrl}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setBtnHover(true)}
            onMouseLeave={() => setBtnHover(false)}
            style={{
              backgroundColor: btnHover ? model.color : '#1E1E1E',
              borderColor: btnHover ? model.color : '#1E1E1E',
              color: '#FFFFFF',
              boxShadow: btnHover ? `4px 4px 0px ${model.color}60` : '3px 3px 0px #1E1E1E'
            }}
            className="flex-1 py-3 px-6 text-xs font-bold uppercase tracking-wider text-center justify-center inline-flex items-center gap-2 cursor-pointer border-2 transition-all duration-200"
          >
            <span>Explore Architecture Details</span>
            <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
