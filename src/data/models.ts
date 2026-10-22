export interface ModelPurpose {
  title: string;
  desc: string;
}

export interface ModelSpecItem {
  label: string;
  value: string;
}

export interface TrainedModel {
  id: string;
  number: string;
  name: string;
  releaseTag: string;
  baseModel: string;
  baseModelUrl: string;
  parameters: string;
  exactParameters: string;
  tier: string;
  tierRole: string;
  creator: string;
  trainingParadigm: string;
  trainingInfra: string;
  precision: string;
  targetRuntime: string;
  quantizationFormat: string;
  vramUsage: string;
  diskSize: string;
  speed: string;
  coldStartLatency: string;
  contextWindow: string;
  bannerImage: string;
  color: string;
  accentBadge: string;
  tagline: string;
  summary: string;
  keyPurposes: ModelPurpose[];
  specs: ModelSpecItem[];
}

export const trainedModels: TrainedModel[] = [
  {
    id: 'model-vesper',
    number: '01',
    name: 'VESPER-1.5B-INSTRUCT-V0.1',
    releaseTag: 'Vesper-1.5B-Convo-v1',
    baseModel: '1.5B Parameter Transformer Base',
    baseModelUrl: 'https://huggingface.co/models?search=1.5B+instruct',
    parameters: '1.54 Billion Parameters',
    exactParameters: '1,543,714,816 parameters',
    tier: 'Fast Voice & Daily Task Model',
    tierRole: 'Instant Offline Voice Assistant for Convo AI',
    creator: 'Ashaz Pathan',
    trainingParadigm: '4-bit Efficient Training',
    trainingInfra: 'Local CUDA GPU Computing',
    precision: '4-bit NormalFloat with Fast Compute',
    targetRuntime: 'Windows 10/11 on Ollama / llama.cpp',
    quantizationFormat: 'GGUF (Q4_K_M)',
    vramUsage: '~950 MB VRAM',
    diskSize: '~1.05 GB',
    speed: '75 – 110 words/sec',
    coldStartLatency: 'Under 150 ms',
    contextWindow: '4,096 tokens',
    bannerImage: '/models/vesper-1.5B-instruct-v0.1.png',
    color: '#E11D74', // Vesper Banner Vibrant Magenta-Pink
    accentBadge: 'FAST VOICE BRAIN',
    tagline: 'Directly integrated into Convo AI as its fast voice and macro engine',
    summary: 'A fast, lightweight AI model built by Ashaz Pathan and integrated directly into Convo AI as its offline voice brain. It answers spoken questions in under 150ms, handles daily PC macro actions, and runs completely locally without internet.',
    keyPurposes: [
      {
        title: 'Zero Cloud Fees',
        desc: 'Handles routine daily questions, volume control, and everyday chats locally with zero API costs.'
      },
      {
        title: 'Light on Hardware',
        desc: 'Uses under 1 GB VRAM, leaving plenty of power for face login and voice recognition tools.'
      },
      {
        title: 'Natural Voice Replies',
        desc: 'Gives quick, natural 1 to 2 sentence answers that sound great when spoken out loud.'
      },
      {
        title: 'Direct Convo AI Integration',
        desc: 'Embedded into Convo AI to power push-to-talk, wake word listening, and instant PC tasks.'
      }
    ],
    specs: [
      { label: 'Scale', value: '1.54 Billion Parameters' },
      { label: 'Base Architecture', value: '1.5B Transformer Base' },
      { label: 'Training Method', value: '4-bit Efficient Fine-Tuning' },
      { label: 'Memory Footprint', value: '~950 MB VRAM' },
      { label: 'Speed', value: '75 – 110 tokens/sec' },
      { label: 'Target System', value: 'Windows 10/11 • Local PC' }
    ]
  },
  {
    id: 'model-obsidian',
    number: '02',
    name: 'OBSIDIAN-3B-GENESIS',
    releaseTag: 'OBSIDIAN-3B-INSTRUCT-V0.1',
    baseModel: '3.0B Parameter Transformer Base',
    baseModelUrl: 'https://huggingface.co/models?search=3B+instruct',
    parameters: '3.09 Billion Parameters',
    exactParameters: '3,085,938,688 parameters',
    tier: 'Deep Reasoning & Thinking Model',
    tierRole: 'Heavy Problem Solving Core for Convo AI',
    creator: 'Ashaz Pathan',
    trainingParadigm: '100% Full-Parameter Training with CUDA Computing',
    trainingInfra: 'NVIDIA A100 GPU (CUDA Computing)',
    precision: 'Native Bfloat16 Precision',
    targetRuntime: 'Windows 10/11 on Ollama / llama.cpp',
    quantizationFormat: 'GGUF (Q4_K_M)',
    vramUsage: '~2.1 GB VRAM',
    diskSize: '~2.05 GB',
    speed: '45 – 60 words/sec',
    coldStartLatency: 'Under 300 ms',
    contextWindow: '4,096 tokens',
    bannerImage: '/models/obsidian-3b-genesis.png',
    color: '#8B5CF6', // Obsidian Banner Electric Violet-Purple
    accentBadge: 'CUDA COMPUTING',
    tagline: 'Directly integrated into Convo AI as its deep reasoning and code engine',
    summary: 'The flagship smart model built by Ashaz Pathan and integrated directly into Convo AI as its deep thinking core. Every single parameter was trained from scratch using NVIDIA CUDA computing, giving it deep reasoning power for coding, analysis, and step-by-step thinking.',
    keyPurposes: [
      {
        title: '100% Full Model Training',
        desc: 'All 3.08 billion parameters were fully trained using CUDA computing, ensuring deep understanding without relying on small adapters.'
      },
      {
        title: 'Direct Convo AI Integration',
        desc: 'Embedded as the Think More engine in Convo AI for deep chain-of-thought analysis and code writing.'
      },
      {
        title: 'Accurate Creator Knowledge',
        desc: 'Understands verified facts about creator Ashaz Pathan and his apps without guessing or making things up.'
      },
      {
        title: 'Complex Problem Solving',
        desc: 'Solves programming problems, writes clean code, and plans multi-step tasks completely offline.'
      }
    ],
    specs: [
      { label: 'Scale', value: '3.09 Billion Parameters' },
      { label: 'Base Architecture', value: '3.0B Transformer Base' },
      { label: 'Training Hardware', value: 'NVIDIA A100 GPU (CUDA Computing)' },
      { label: 'Memory Footprint', value: '~2.1 GB VRAM' },
      { label: 'Speed', value: '45 – 60 tokens/sec' },
      { label: 'Target System', value: 'Windows 10/11 • Local PC' }
    ]
  }
];
