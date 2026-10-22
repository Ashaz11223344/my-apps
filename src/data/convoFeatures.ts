export interface ConvoFeature {
  id: string;
  number: string;
  title: string;
  iconName: string;
  category: 'voice' | 'system' | 'google' | 'intelligence' | 'developer';
  categoryLabel: string;
  summary: string;
  riskLevel?: 'LOW' | 'MEDIUM' | 'HIGH';
  shortcut?: string;
  commands: string[];
  subFeatures: string[];
  highlights?: { label: string; value: string }[];
}

export const convoCategories = [
  { id: 'all', label: 'All Capabilities', iconName: 'sparkles' },
  { id: 'voice', label: 'Voice & Biometrics', iconName: 'mic' },
  { id: 'system', label: 'System & Automation', iconName: 'cpu' },
  { id: 'google', label: 'Google & Cloud Apps', iconName: 'globe' },
  { id: 'intelligence', label: 'Reasoning & Writing', iconName: 'brain' },
  { id: 'developer', label: 'Developer & Tasks', iconName: 'code-2' }
] as const;

export const convoFeatures: ConvoFeature[] = [
  {
    id: 'voice-activation',
    number: '01',
    title: 'Voice, Wake Word & Hands-Free Activation',
    iconName: 'mic',
    category: 'voice',
    categoryLabel: 'Voice & Biometrics',
    summary: 'Sub-second voice listening and speech synthesis with push-to-talk, wake word detection, double-clap activation, and instant speech interruption.',
    riskLevel: 'LOW',
    shortcut: 'Space (Hold)',
    commands: [
      '"Hey Convo"',
      'Hold configured PTT key',
      'Clap hands twice in quick succession',
      'Speak to interrupt Convo anytime'
    ],
    subFeatures: [
      'Push-To-Talk (PTT): Configurable to any key (Space, CapsLock, or custom) for zero accidental triggers.',
      'Wake Word ("Hey Convo"): Always-listening low-power local detection.',
      'Double-Clap Trigger: Awakens Convo AI to the front hands-free from anywhere across the room.',
      'Adaptive VAD: Silero and WebRTC Voice Activity Detection detects pauses naturally without awkward delays.',
      'Instant Interruption: Speaking while Convo talks immediately cuts TTS playback.'
    ],
    highlights: [
      { label: 'Latency', value: 'Sub-second (~140ms)' },
      { label: 'Trigger Modes', value: 'PTT, Wake Word, Double-Clap' },
      { label: 'Audio Engine', value: 'Silero VAD + Fast TTS' }
    ]
  },
  {
    id: 'global-summon',
    number: '02',
    title: 'Global Summon (Spotlight / Raycast Style)',
    iconName: 'terminal',
    category: 'system',
    categoryLabel: 'System & Automation',
    summary: 'Instant screen-centered overlay summonable anywhere in Windows over full-screen games, IDEs, or browser windows.',
    riskLevel: 'LOW',
    shortcut: 'Ctrl + Shift + Space',
    commands: [
      'Press Ctrl + Shift + Space anywhere',
      'Press Esc to dismiss to background'
    ],
    subFeatures: [
      'Global Windows Hook: Works over full-screen games, IDEs, code editors, and browsers.',
      'Customizable Key Combo: Set any combination of 1 to 5 keys (e.g. Win + Space, Ctrl + Alt + Tab + C).',
      'Auto-Focus: Centers on your active monitor and activates voice or text input immediately.',
      'Seamless Dismiss: Hitting hotkey again or Esc drops Convo back into low-power background standby.'
    ],
    highlights: [
      { label: 'Default Combo', value: 'Ctrl + Shift + Space' },
      { label: 'Customization', value: '1 to 5 Keys' },
      { label: 'Monitors', value: 'Multi-monitor Aware' }
    ]
  },
  {
    id: 'long-term-memory',
    number: '03',
    title: 'Deep Personal Long-Term Memory',
    iconName: 'brain',
    category: 'intelligence',
    categoryLabel: 'Reasoning & Writing',
    summary: 'Episodic and semantic memory that remembers user identity, habits, preferences, and project details across reboots.',
    riskLevel: 'LOW',
    commands: [
      '"My name is Ashaz and I\'m a software developer."',
      '"Remember that I prefer Python and dark mode."',
      '"What do you remember about me?"',
      '"What are my favorite programming languages?"',
      '"Forget that I like coffee."'
    ],
    subFeatures: [
      'Auto-Extraction: Extracts personal facts, preferences, habits, and active projects without manual tagging.',
      'Local Storage: 100% private SQLite database stored at data/convo.db with zero cloud telemetry.',
      'Memory GUI: Press M in mode select to view, search, edit, or purge memories.'
    ],
    highlights: [
      { label: 'Storage', value: 'Local SQLite (data/convo.db)' },
      { label: 'Extraction', value: 'Autonomous Semantic' },
      { label: 'Management', value: 'Dedicated Memory GUI (M)' }
    ]
  },
  {
    id: 'morning-briefing',
    number: '04',
    title: 'One-Shot Morning & Work Briefing',
    iconName: 'sun',
    category: 'intelligence',
    categoryLabel: 'Reasoning & Writing',
    summary: 'Comprehensive start-of-day audio and visual briefing consolidating identity greeting, schedule, weather, battery health, and top news.',
    riskLevel: 'LOW',
    commands: [
      '"Good morning Convo"',
      '"Give me my morning briefing"',
      '"Brief me on today"'
    ],
    subFeatures: [
      'Personal Greeting: Welcomes you by remembered name ("Good morning Ashaz!").',
      'Atmospheric Weather: Local temperature, sky conditions, and rain forecast.',
      'Pending Tasks & Notes: Overview of active reminders and saved notes.',
      'Hardware Diagnostics: Laptop battery %, thermal load, and memory usage.',
      'Top Live News: Instant top headlines retrieved from DuckDuckGo.'
    ],
    highlights: [
      { label: 'Delivery', value: 'Synchronous Spoken + Visual Card' },
      { label: 'Components', value: 'Greeting, Weather, Tasks, News' }
    ]
  },
  {
    id: 'automation-macros',
    number: '05',
    title: 'Learned Automation Macros & Multi-Step Routines',
    iconName: 'zap',
    category: 'system',
    categoryLabel: 'System & Automation',
    summary: 'Chain multiple applications, files, and terminal scripts into single spoken keywords or one-click routine cards.',
    riskLevel: 'MEDIUM',
    commands: [
      '"Start project mode"',
      '"Run coding routine"',
      '"Night mode"'
    ],
    subFeatures: [
      'Multi-App Chaining: Launch up to 5 apps, IDEs, browser links, and terminal scripts in one trigger.',
      'Smart Path Resolver: Cleans quotes from Windows "Copy as path" and auto-scans the Windows Start Menu.',
      'One-Click Run: Run routines from GUI cards or spoken commands anytime.'
    ],
    highlights: [
      { label: 'Max Apps / Routine', value: 'Up to 5 apps & scripts' },
      { label: 'File Types', value: '.exe, .lnk shortcuts, folders' }
    ]
  },
  {
    id: 'clipboard-intelligence',
    number: '06',
    title: 'Clipboard Intelligence & History',
    iconName: 'clipboard',
    category: 'system',
    categoryLabel: 'System & Automation',
    summary: 'Direct clipboard transformation, grammar polishing, summarization, and historical clipboard inspection hands-free.',
    riskLevel: 'LOW',
    commands: [
      '"What is on my clipboard?"',
      '"Fix the grammar of what I copied."',
      '"Summarize this copied text."',
      '"Copy this code snippet to my clipboard."',
      '"Show my clipboard history."'
    ],
    subFeatures: [
      'Read Aloud: Verbalizes copied text on command.',
      'In-Place Rewrite: Fixes grammar and writes polished text back to Windows clipboard for Ctrl+V.',
      'Clipboard History: Stores and cycles through the last 5 copied items.'
    ],
    highlights: [
      { label: 'Buffer Size', value: '5 historical clipboard items' },
      { label: 'Actions', value: 'Grammar fix, summary, extraction' }
    ]
  },
  {
    id: 'timers-alarms',
    number: '07',
    title: 'Timers, Alarms, Reminders & World Clock',
    iconName: 'clock',
    category: 'system',
    categoryLabel: 'System & Automation',
    summary: 'Spoken timer countdowns, scheduled reminders, chime alerts, and international time zone calculations.',
    riskLevel: 'LOW',
    commands: [
      '"Set a timer for 10 minutes."',
      '"Remind me to drink water in 30 minutes."',
      '"Set an alarm for 5:30 PM."',
      '"How much time is left on my timer?"',
      '"What time is it in Tokyo / London / New York?"'
    ],
    subFeatures: [
      'Chime & Notification: Plays an audible chime and native Windows toast notification upon expiry.',
      'Time Math: Calculates days until specific holidays or calendar dates.',
      'World Clock: Time zone conversions across all international capitals.'
    ]
  },
  {
    id: 'system-health',
    number: '08',
    title: 'System Health & Hardware Inspector',
    iconName: 'hard-drive',
    category: 'system',
    categoryLabel: 'System & Automation',
    summary: 'Real-time telemetry on CPU, RAM, GPU, storage drives, battery status, and memory-hogging background processes.',
    riskLevel: 'LOW',
    commands: [
      '"What is my CPU and RAM usage?"',
      '"Check my laptop battery percentage."',
      '"How much free space is left on drive C:?"',
      '"What is my local and public IP address?"',
      '"Which application is using the most memory right now?"'
    ],
    subFeatures: [
      'Process Inspector: Identifies top RAM/CPU consumer processes.',
      'Battery Telemetry: Percentage, charging state, and estimated remaining life.',
      'Network Telemetry: Local IPv4 and public IP detection.'
    ]
  },
  {
    id: 'media-volume',
    number: '09',
    title: 'Media & System Volume Control',
    iconName: 'music',
    category: 'system',
    categoryLabel: 'System & Automation',
    summary: 'Hands-free master audio level adjustment, mute toggling, and native Windows media player controls.',
    riskLevel: 'LOW',
    commands: [
      '"Set system volume to 40%."',
      '"Turn up the volume."',
      '"Lower volume by 15%."',
      '"Mute system volume." / "Unmute."',
      '"Play" / "Pause" / "Next track" / "Previous track"'
    ],
    subFeatures: [
      'Fine Volume Control: Granular percentage adjustments.',
      'Multimedia Key Simulation: Triggers hardware play, pause, and track skip.',
      'Dynamic Audio Bar: Synced real-time audio slider across Voice & Chat modes.'
    ]
  },
  {
    id: 'app-launch',
    number: '10',
    title: 'Application Launch & Windows Store Control',
    iconName: 'layout-grid',
    category: 'system',
    categoryLabel: 'System & Automation',
    summary: 'Voice and text launcher for desktop applications, developer tools, browsers, and Windows Store apps.',
    riskLevel: 'LOW',
    commands: [
      '"Open Chrome" / "Open Brave" / "Open Firefox"',
      '"Launch VS Code" / "Open Visual Studio"',
      '"Open Spotify" / "Launch Discord" / "Open Slack"',
      '"Open Calculator" / "Open Settings" / "Open Snipping Tool"',
      '"Open File Explorer" / "Open Terminal"'
    ],
    subFeatures: [
      'Universal Launch: Matches app names against installed Windows registry and Start Menu items.',
      'Fast Execution: Sub-second background process spawning.'
    ]
  },
  {
    id: 'smart-notes',
    number: '11',
    title: 'Smart Notes & Scratchpad',
    iconName: 'file-text',
    category: 'developer',
    categoryLabel: 'Developer & Tasks',
    summary: 'Instant voice-captured notes, task management, searchable scratchpad, and Google Docs export.',
    riskLevel: 'LOW',
    commands: [
      '"Take a note: Buy coffee beans tomorrow morning."',
      '"Add note: Refactor ProceduralMemory lock."',
      '"List all my notes."',
      '"Search notes for project."',
      '"Delete note #1."'
    ],
    subFeatures: [
      'Full Text Search: Filter notes instantly by keyword.',
      'Persistent SQLite: Saved permanently across sessions.',
      'Export Ready: One-click export to Google Docs.'
    ]
  },
  {
    id: 'web-search',
    number: '12',
    title: 'Real-Time Web Search & Current Events',
    iconName: 'search',
    category: 'intelligence',
    categoryLabel: 'Reasoning & Writing',
    summary: 'Live web information gathering powered by DuckDuckGo for breaking news, stock prices, and technical specs.',
    riskLevel: 'LOW',
    commands: [
      '"Search the web for the latest SpaceX launch."',
      '"What is the stock price of Apple?"',
      '"Who won yesterday\'s football match?"',
      '"Search for Python 3.12 release highlights."'
    ],
    subFeatures: [
      'Live DuckDuckGo API: Fresh search snippets with clean summaries.',
      'Zero Tracking: Privacy-first web queries.'
    ]
  },
  {
    id: 'weather',
    number: '13',
    title: 'Weather & Atmospheric Reports',
    iconName: 'cloud-sun',
    category: 'system',
    categoryLabel: 'System & Automation',
    summary: 'Instant local and international weather forecasts, precipitation, humidity, and atmospheric conditions.',
    riskLevel: 'LOW',
    commands: [
      '"What is the weather outside?"',
      '"What is the weather in Tokyo?"',
      '"Will it rain this afternoon in London?"',
      '"Check temperature and humidity."'
    ],
    subFeatures: [
      'Geo-IP Auto-Detection: Automatically checks your local city without manual configuration.',
      'Global City Support: Check any city worldwide.'
    ]
  },
  {
    id: 'safety-policy',
    number: '14',
    title: 'Safety Policy & Audit Activity Log',
    iconName: 'shield-check',
    category: 'system',
    categoryLabel: 'System & Automation',
    summary: 'Tiered risk engine that validates actions and maintains an immutable chronological audit trail.',
    riskLevel: 'LOW',
    shortcut: 'Press A in Mode Select',
    commands: [
      'Open Activity GUI (A)',
      'Inspect immutable action audit trail'
    ],
    subFeatures: [
      'Tiered Risk Engine: LOW (auto-run), MEDIUM (logged & validated), HIGH (requires explicit user confirmation).',
      'Immutable Audit: Every executed tool and script is logged to a secure local ledger.'
    ]
  },
  {
    id: 'email-dispatch',
    number: '15',
    title: 'Email Dispatch & Inbox Intelligence',
    iconName: 'mail',
    category: 'developer',
    categoryLabel: 'Developer & Tasks',
    summary: 'Full SMTP/IMAP assistant with interactive multi-recipient sending, unread email checks, live search, and conversational reading.',
    riskLevel: 'MEDIUM',
    commands: [
      '"Convo, do I have any new emails?"',
      '"Read my latest emails"',
      '"Search emails from college"',
      '"I want to send email to xyz@mail.com about my project"'
    ],
    subFeatures: [
      'Interactive Send Workflow: Step-by-step popup with recipient tags, raw notes, AI auto-drafting, preview, and confirmation.',
      'Unread Email Reader: Audio summary with one-click full reader cards.',
      'Mailbox Search: Fast IMAP search by sender, date, or subject keyword.'
    ]
  },
  {
    id: 'think-more',
    number: '16',
    title: 'Think More (Intelligent Deep Reasoning)',
    iconName: 'sparkles',
    category: 'intelligence',
    categoryLabel: 'Reasoning & Writing',
    summary: 'Two-tier reasoning with 5-signal auto-detection balancing sub-second voice replies with deep multi-angle chain-of-thought analysis.',
    riskLevel: 'LOW',
    commands: [
      '"Think more about this" / "Think harder"',
      '"Quick answer" / "Just give me the short version"',
      'Click [Auto / Quick / Deep] in Chat Mode'
    ],
    subFeatures: [
      'Multi-Signal Detection: Evaluates keywords, emotional tone, length, context, and code entities.',
      'Quick Mode (1-3): Instant 1-2s response for fast tasks.',
      'Light Mode (4-6): Balanced 10-25s budget for explanations.',
      'Deep Mode (7-10): Thorough 30-45s reasoning for complex code, math, and logic.',
      'Collapsible Thinking Panel: Real-time elapsed timer with LLM chain-of-thought trace.'
    ]
  },
  {
    id: 'github-integration',
    number: '17',
    title: 'GitHub Integration & Developer Tools',
    iconName: 'git-branch',
    category: 'developer',
    categoryLabel: 'Developer & Tasks',
    summary: 'Inspect repositories, track issues and pull requests, read commit logs, check unread notifications, and clone repos locally.',
    riskLevel: 'MEDIUM',
    commands: [
      '"Convo, show me my GitHub repositories."',
      '"Check stars and open issues on facebook/react."',
      '"What are my unread GitHub notifications?"',
      '"What are the latest commits on convo-ai?"',
      '"Clone https://github.com/ashaz/convo-ai to Desktop"'
    ],
    subFeatures: [
      'Repository Inspector: Stars, forks, open issues, branches, and licenses.',
      'Commit & PR Feed: Recent commit history and active pull request status.',
      'Local Git Clone: Clones any remote repository directly using local git.',
      'Issue Creator: Opens issues directly from your voice commands.'
    ]
  },
  {
    id: 'writing-assistant',
    number: '18',
    title: 'Writing Assistant (Grammar, Tone & Clarity)',
    iconName: 'pen-tool',
    category: 'intelligence',
    categoryLabel: 'Reasoning & Writing',
    summary: 'Real-time 100% offline editor computing readability metrics, detecting passive voice and fillers, adjusting tone, and rewriting clipboard text.',
    riskLevel: 'LOW',
    commands: [
      '"Proofread this clipboard text"',
      '"Make this email more professional"',
      '"Make it more concise"',
      '"What reading level is this?"',
      '"Analyze my writing for passive voice"'
    ],
    subFeatures: [
      '5 Supported Tones: Formal/Professional, Casual, Technical, Friendly, Concise.',
      'Flesch Reading Ease & Grade Level: Evaluates reading difficulty deterministically.',
      'Passive Voice Detector: Finds auxiliary "be" forms with active suggestions.',
      'Filler Scanner: Catches duplicate words and bloated filler phrases.',
      'In-Place Clipboard Update: Immediately ready for Ctrl+V.'
    ]
  },
  {
    id: 'google-docs',
    number: '19',
    title: 'Google Drive & Docs Intelligence',
    iconName: 'folder-open',
    category: 'google',
    categoryLabel: 'Google & Cloud Apps',
    summary: 'Browse Drive, view visual document thumbnails, read and summarize Google Docs in an in-GUI reader modal, and draft new documents.',
    riskLevel: 'MEDIUM',
    commands: [
      '"Show me my recent Google Docs"',
      '"Search Google Drive for \'Project Pitch\'"',
      '"Summarize my Google Doc on AI Ethics"',
      '"Create a Google Doc called \'Meeting Minutes\' with..."',
      '"Export my notes to a Google Doc"'
    ],
    subFeatures: [
      'Visual Thumbnail Gallery: Page renders with Google brand color badges.',
      'In-GUI Document Reader: Scrollable modal reader with one-click copy and Convo summarization.',
      'Document Creator: Drafts formatted documents directly to your Drive.'
    ]
  },
  {
    id: 'google-photos',
    number: '20',
    title: 'Google Photos & Video Gallery',
    iconName: 'camera',
    category: 'google',
    categoryLabel: 'Google & Cloud Apps',
    summary: 'Official Google Photos Picker API integration to browse, pick, and preview photos, videos, and albums with in-app zoom and video streaming.',
    riskLevel: 'LOW',
    commands: [
      '"Open Google Photos Picker to select photos and videos"',
      '"Fetch my picked photos from Google Photos"',
      '"Browse my Vacation album in Google Photos"',
      '"Show me my top 5 recent photos from google photos"'
    ],
    subFeatures: [
      'Official Picker API: Secure OAuth photo and video selection.',
      'Video Streaming: In-app video playback badge and streaming viewer.',
      'In-App Zoom: High-resolution modal preview without browser opening.'
    ]
  },
  {
    id: 'youtube-intelligence',
    number: '21',
    title: 'YouTube Video Intelligence & Player Preview',
    iconName: 'play-square',
    category: 'google',
    categoryLabel: 'Google & Cloud Apps',
    summary: 'Search YouTube videos with 16:9 thumbnails, channel badges, view counts, in-browser playback, and instant transcript summarization.',
    riskLevel: 'LOW',
    commands: [
      '"Play lofi beats for coding on YouTube"',
      '"Search YouTube for Unreal Engine 5.5 tutorials"',
      '"Find quantum computing documentaries on YouTube"',
      '"Summarize this YouTube video: https://youtube.com/..."'
    ],
    subFeatures: [
      'Visual Search Cards: 16:9 thumbnail previews, channel tags, and durations.',
      'Transcript Summarizer: Extracts video captions to deliver instant summaries.'
    ]
  },
  {
    id: 'google-calendar',
    number: '22',
    title: 'Google Calendar & Schedule Intelligence',
    iconName: 'calendar',
    category: 'google',
    categoryLabel: 'Google & Cloud Apps',
    summary: 'Schedule inspection, cybernetic vertical timeline cards, new appointment creation, and one-click Google Meet video joining.',
    riskLevel: 'MEDIUM',
    commands: [
      '"What\'s on my schedule today?"',
      '"Check my calendar for this week"',
      '"Schedule a team sync tomorrow at 3 PM"',
      '"Do I have any meetings this afternoon?"'
    ],
    subFeatures: [
      'Vertical Timeline Card: Time ranges and meeting titles.',
      'One-Click Google Meet: Green "Meet" button directly launches the call.',
      'Event Creator: Schedules appointments with optional video links.'
    ]
  },
  {
    id: 'google-contacts',
    number: '23',
    title: 'Google Contacts (People API) Intelligence',
    iconName: 'users',
    category: 'google',
    categoryLabel: 'Google & Cloud Apps',
    summary: 'Search and browse your Google Contacts with avatar initials cards, phone numbers, email addresses, and quick clipboard actions.',
    riskLevel: 'LOW',
    commands: [
      '"Find contact for Alex"',
      '"Show my Google Contacts"',
      '"What is Sarah\'s phone number?"',
      '"Find my doctor\'s email in contacts"'
    ],
    subFeatures: [
      'Avatar Cards: Initial badges with phone and email tags.',
      'One-Click Copy: Instantly copies phone or email to clipboard.'
    ]
  },
  {
    id: 'google-forms',
    number: '24',
    title: 'Google Forms Intelligence',
    iconName: 'check-square',
    category: 'google',
    categoryLabel: 'Google & Cloud Apps',
    summary: 'Inspect Google Form structures, survey questions, and responder links directly within Convo AI.',
    riskLevel: 'LOW',
    commands: [
      '"Inspect Google Form 1FAIpQLSc..."',
      '"What questions are on my survey form?"'
    ],
    subFeatures: [
      'Structure Inspector: Reads form questions, choices, and submission links.'
    ]
  },
  {
    id: 'google-maps',
    number: '25',
    title: 'Google Maps Navigation & Place Discovery',
    iconName: 'map-pin',
    category: 'google',
    categoryLabel: 'Google & Cloud Apps',
    summary: 'Discover places, find cafes, calculate driving or transit routes, and launch turn-by-turn navigation on Google Maps with interactive destination cards.',
    riskLevel: 'LOW',
    commands: [
      '"Find coffee shops with Wi-Fi near me"',
      '"How do I drive from Central Park to JFK Airport?"',
      '"Walking directions from Times Square to Empire State Building"'
    ],
    subFeatures: [
      'Turn-by-Turn Launch: Directly launches Google Maps routing.',
      'Local Place Cards: Business ratings, open hours, and addresses.'
    ]
  },
  {
    id: 'dynamic-island',
    number: '26',
    title: 'Floating Dynamic Island (Desktop HUD)',
    iconName: 'radio',
    category: 'voice',
    categoryLabel: 'Voice & Biometrics',
    summary: 'Translucent glassmorphism HUD pinned to top of screen with interactive canvas audio equalizer waveforms and state morphing.',
    riskLevel: 'LOW',
    commands: [
      'Toggle Dynamic Island in Settings',
      'Click waveform to speak or interrupt',
      'Drag HUD anywhere on monitor canvas'
    ],
    subFeatures: [
      'Interactive Waveform Visualizer: Real-time frequency bars reacting dynamically to speech pitch, cadence, and TTS output.',
      'State Morphing: Smoothly transitions between Idle, Listening (410x54 px), Thinking (360x50 px), and Speaking (500x72 px).',
      'Draggable HUD: Place anywhere on screen over games and IDEs.'
    ],
    highlights: [
      { label: 'HUD Style', value: 'Glassmorphism Translucent' },
      { label: 'States', value: 'Idle, Listening, Thinking, Speaking' }
    ]
  },
  {
    id: 'presence-sensing',
    number: '27',
    title: 'Presence Sensing & Walk-Away Auto-Lock',
    iconName: 'user-check',
    category: 'voice',
    categoryLabel: 'Voice & Biometrics',
    summary: 'Zero-GPU biometric presence checking that automatically locks Windows when you step away and welcomes you back with spoken summaries upon return.',
    riskLevel: 'LOW',
    commands: [
      'Configure auto-lock timeout (30s, 60s, 2m, 5m)',
      'Step away to trigger LockWorkStation',
      'Return to receive personalized spoken briefing'
    ],
    subFeatures: [
      'Walk-Away Lock: Auto-locks Windows workstation when you leave your desk.',
      'Welcome Back Greeting: "Welcome back Ashaz! You have 2 unread emails waiting."',
      'Zero GPU Overhead: Grabs snapshot once every 5 seconds on CPU with 0% GPU load.'
    ],
    highlights: [
      { label: 'GPU Overhead', value: '0% (Periodic CPU HOG snapshot)' },
      { label: 'Action', value: 'Native Windows LockWorkStation' }
    ]
  },
  {
    id: 'volume-slider',
    number: '28',
    title: 'Dynamic Audio Volume Slider & Speaker Mute',
    iconName: 'volume-2',
    category: 'voice',
    categoryLabel: 'Voice & Biometrics',
    summary: 'Unified real-time audio volume controller with instant speaker mute and synchronized volume sliders across Voice, Chat, and Dynamic Island.',
    riskLevel: 'LOW',
    commands: [
      'Click Speaker icon to mute speech immediately',
      'Drag slider (0 - 100%) for real-time speech volume',
      'Click Read Aloud on any chat message'
    ],
    subFeatures: [
      'Instant Mute: Instantly silences speech output without stopping text generation.',
      'Smooth Audio Scaling: Drag slider dynamically without audio popping.',
      'Read Aloud: Dedicated button on every assistant chat bubble.'
    ]
  }
];
