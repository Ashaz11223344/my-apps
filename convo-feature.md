# 🌟 What Convo AI Can Do — Complete Capabilities Guide

Welcome to **Convo AI**, your ultra-fast, intelligent Windows desktop companion. Convo combines deep long-term memory, voice intelligence, learned automation macros, system hardware diagnostics, clipboard tools, and live web research into a unified interface.

Below is the complete manual of everything Convo AI can do, along with example voice commands and keyboard shortcuts.

---

## 📑 Table of Contents
1. [🎙️ Voice, Wake Word & Hands-Free Activation](#1-️-voice-wake-word--hands-free-activation)
2. [🚀 Global Summon (Spotlight / Raycast Style)](#2--global-summon-spotlight--raycast-style)
3. [🧠 Deep Personal Long-Term Memory](#3--deep-personal-long-term-memory)
4. [☀️ One-Shot Morning & Work Briefing](#4-️-one-shot-morning--work-briefing)
5. [⚡ Learned Automation Macros & Multi-Step Routines](#5--learned-automation-macros--multi-step-routines)
6. [📋 Clipboard Intelligence & History](#6--clipboard-intelligence--history)
7. [⏱️ Timers, Alarms, Reminders & World Clock](#7-️-timers-alarms-reminders--world-clock)
8. [💻 System Health & Hardware Inspector](#8--system-health--hardware-inspector)
9. [🎵 Media & System Volume Control](#9--media--system-volume-control)
10. [📱 Application Launch & Windows Store Control](#10--application-launch--windows-store-control)
11. [📝 Smart Notes & Scratchpad](#11--smart-notes--scratchpad)
12. [🌐 Real-Time Web Search & Current Events](#12--real-time-web-search--current-events)
13. [🌦️ Weather & Atmospheric Reports](#13-️-weather--atmospheric-reports)
14. [🛡️ Safety Policy & Audit Activity Log](#14-️-safety-policy--audit-activity-log)
15. [📧 Email Dispatch & Management](#15--email-dispatch--management)
16. [🧠 Think More (Intelligent Deep Reasoning)](#16--think-more-intelligent-deep-reasoning)
17. [🐙 GitHub Integration & Developer Tools](#17--github-integration--developer-tools)
18. [✍️ Writing Assistant (Grammar, Tone & Clarity)](#18-️-writing-assistant-grammar-tone--clarity)
19. [📁 Google Drive & Docs Intelligence](#19--google-drive--docs-intelligence)
20. [📸 Google Photos & Visual Gallery](#20--google-photos--visual-gallery)
21. [🪟 Floating Dynamic Island (Desktop HUD)](#21-️-floating-dynamic-island-desktop-hud)
22. [👤 Presence Sensing & Walk-Away Auto-Lock](#22-️-presence-sensing--walk-away-auto-lock)

---

## 1. 🎙️ Voice, Wake Word & Hands-Free Activation

Convo AI offers multiple ways to speak and listen with sub-second latency and realistic speech synthesis.

| Method | How to Trigger | What Happens |
| :--- | :--- | :--- |
| **Push-To-Talk (PTT)** | Hold down your configured key (e.g. `Space`, `CapsLock`, or any key) | Convo listens while the key is pressed and answers immediately upon release. |
| **Wake Word** | Say **"Hey Convo"** | Automatically wakes Convo up and streams your request. |
| **Double-Clap Trigger** | Clap hands twice in quick succession (anywhere / background) | Awakens Convo AI to the front and activates voice turn listening hands-free (toggleable in Settings). |
| **Adaptive VAD** | Automatic during voice mode | Silero / WebRTC Voice Activity Detection detects pauses naturally and prevents awkward delays. |
| **Instant Interruption** | Speak while Convo is talking | Convo halts its TTS playback instantly to listen to your correction. |

---

## 2. 🚀 Global Summon (Spotlight / Raycast Style)

Summon Convo AI from any app, full-screen game, or desktop workspace.

- **Default Key Combo**: `Ctrl + Shift + Space`
- **Customizable**: Set any combination of **1 to 5 keys** (e.g. `Ctrl + Shift + Alt + Tab + C`, `Win + Space`, or custom keys) in Settings.
- **Behavior**:
  - Centers Convo on your active monitor.
  - Automatically activates voice listening or chat input.
  - Pressing the hotkey again or hitting `Esc` seamlessly dismisses the window back to the background.

---

## 3. 🧠 Deep Personal Long-Term Memory

Convo AI maintains episodic and semantic memory about you across reboots and sessions.

### 🗣️ What to Say
- *"My name is Ashaz and I'm a software developer."*
- *"Remember that I prefer Python and dark mode."*
- *"What is my name?"*
- *"What do you remember about me?"*
- *"What are my favorite programming languages?"*
- *"Forget that I like coffee."*

### ✨ Features
- **Auto-Extraction**: Learns facts, preferences, habits, and projects naturally from your conversations without manual tagging.
- **Memory GUI**: Open the **🧠 Memory View** (`M` key from mode select) to view, search, filter, edit, or delete stored memories.
- **Privacy First**: All memories are stored locally in SQLite (`data/convo.db`).

---

## 4. ☀️ One-Shot Morning & Work Briefing

Start your day or work session with a consolidated audio & visual briefing.

### 🗣️ What to Say
- *"Good morning Convo"*
- *"Give me my morning briefing"*
- *"Brief me on today"*

### 📋 What You Get in One Shot:
1. **Personal Greeting**: Welcomes you by your remembered name (*"Good morning Ashaz!"*).
2. **Date & Time**: Current local time and date.
3. **Weather Report**: Local temperature, skies, and precipitation conditions.
4. **Reminders & Notes**: Active tasks and pending notes.
5. **System & Battery Health**: Laptop battery percentage and hardware load.
6. **Top News Headlines**: Live top headlines retrieved from DuckDuckGo.

---

## 5. ⚡ Learned Automation Macros & Multi-Step Routines

Chain multiple actions and applications into custom spoken or clicked routines.

### 🗣️ What to Say
- *"Start project mode"*
- *"Run coding routine"*
- *"Night mode"*

### ⚙️ Multi-Step Command Manual Setup (In Settings)
- **BOX 1: CALLING PHASE (KEY WORD)**: Specify your keyword (e.g. `Project Mode`).
- **BOX 2: SELECT APPS (UP TO 5 APPS)**:
  - Add up to 5 apps using `Browse` or `Directory`.
  - Supports `.exe` binaries, Windows `.lnk` shortcuts, and folder paths.
  - Automatically cleans quotes from Windows **"Copy as path"**.
  - Automatically scans the Windows Start Menu if you type names like `Brave`, `VS Code`, or `Antigravity IDE`.
- **Run Now & Delete**: Run routines with a single click or delete routines anytime.

---

## 6. 📋 Clipboard Intelligence & History

Interact with and transform your Windows clipboard hands-free.

### 🗣️ What to Say
- *"What is on my clipboard?"* — Reads out copied text.
- *"Fix the grammar of what I copied."* — Corrects grammar and returns the polished text.
- *"Summarize this copied text."* — Generates a concise summary of clipboard contents.
- *"Copy this code snippet to my clipboard."* — Directly copies AI answers or snippets to your Windows clipboard.
- *"Show my clipboard history."* — Accesses the last 5 text items copied across apps.

---

## 7. ⏱️ Timers, Alarms, Reminders & World Clock

Manage your schedule and time math without leaving your keyboard.

### 🗣️ What to Say
- *"Set a timer for 10 minutes."*
- *"Remind me to drink water in 30 minutes."*
- *"Set an alarm for 5:30 PM."*
- *"How much time is left on my timer?"*
- *"What time is it in Tokyo / London / New York?"*
- *"How many days until New Year / December 25th?"*

### 🔔 Alert System
When a timer expires, Convo displays a desktop notification and plays a chime to notify you.

---

## 8. 💻 System Health & Hardware Inspector

Keep tabs on your PC hardware, thermals, storage, and networking.

### 🗣️ What to Say
- *"What is my CPU and RAM usage?"*
- *"Check my laptop battery percentage."*
- *"How much free space is left on drive C:?"*
- *"What is my local and public IP address?"*
- *"Which application is using the most memory right now?"*
- *"Show full system hardware summary."*

---

## 9. 🎵 Media & System Volume Control

Control your Windows master audio and media playback hands-free.

### 🗣️ What to Say
- *"Set system volume to 40%."*
- *"Turn up the volume."* / *"Lower volume by 15%."*
- *"Mute system volume."* / *"Unmute."*
- *"Play"* / *"Pause"* / *"Next track"* / *"Previous track"* (Simulates native Windows multimedia keys).

---

## 10. 📱 Application Launch & Windows Store Control

Quickly launch any software installed on your machine.

### 🗣️ What to Say
- *"Open Chrome"* / *"Open Brave"* / *"Open Firefox"*
- *"Launch VS Code"* / *"Open Visual Studio"*
- *"Open Spotify"* / *"Launch Discord"* / *"Open Slack"*
- *"Open Calculator"* / *"Open Settings"* / *"Open Camera"* / *"Open Snipping Tool"*
- *"Open File Explorer"* / *"Open Terminal"*

---

## 11. 📝 Smart Notes & Scratchpad

Capture thoughts, tasks, and ideas instantly.

### 🗣️ What to Say
- *"Take a note: Buy coffee beans tomorrow morning."*
- *"Add note: Refactor ProceduralMemory lock."*
- *"List all my notes."*
- *"Search notes for project."*
- *"Delete note #1."*

---

## 12. 🌐 Real-Time Web Search & Current Events

Stay informed with live web search powered by DuckDuckGo.

### 🗣️ What to Say
- *"Search the web for the latest SpaceX launch."*
- *"What is the stock price of Apple?"*
- *"Who won yesterday's football match?"*
- *"Search for Python 3.12 release highlights."*

---

## 13. 🌦️ Weather & Atmospheric Reports

Get instant local and international forecasts.

### 🗣️ What to Say
- *"What is the weather outside?"*
- *"What is the weather in Tokyo?"*
- *"Will it rain this afternoon in London?"*
- *"Check temperature and humidity."*

---

## 14. 🛡️ Safety Policy & Audit Activity Log

Convo AI includes built-in safety controls:
- **Tiered Risk Engine**:
  - `LOW`: Volume adjustments, clipboard reads, system queries (run automatically).
  - `MEDIUM`: File writes, directory creation (logged and validated).
  - `HIGH`: File deletion, external script execution (requires explicit confirmation).
- **Activity Log View**: Open **⚡ Activity (`A`)** to inspect an immutable chronological audit trail of all actions executed by Convo AI.

---

## 15. 📧 Email Dispatch & Inbox Intelligence

Convo AI includes a complete SMTP/IMAP email assistant with interactive sending workflows, inbox querying, live searching, and conversational reading.

### 📥 Email Reading & Inbox Intelligence
- **Check Unread Emails (`email.get_unread_emails`)**: Fetches your newest unread emails with sender, subject, date, and a snippet.
  - Spoken trigger: *"Convo, do I have any new emails?"* or *"Check my unread emails"*.
  - Convo: *"You have unread emails. The most recent is from Ashaz regarding 'Happy Birthday Wishes and Birthday Party Invitation'. Would you like me to read the details?"*
- **Read Latest Emails (`email.read_latest_emails`)**: Retrieves the latest emails in your Inbox.
  - Spoken trigger: *"Read my latest emails"* or *"What are my recent emails?"*.
- **Search Mailbox (`email.search_emails`)**: Searches your mailbox by sender, subject keyword, or topic.
  - Spoken trigger: *"Search emails from college"* or *"Find emails about interview"*.
- **Extract & Read Body (`email.read_email_content`)**: Extracts the full body text (clean plain-text without messy HTML) and reads or summarizes it.
  - Conversational follow-up: *"Yes, what does it say?"* or *"Read it out loud"*.
- **Visual Cards in Chat Mode**: Renders cybernetic email cards (`EmailListCard`) with sender badges, dates, subjects, and one-click "📖 Read Details" buttons, plus full clean-text message readers (`EmailDetailCard`).

### 🔄 Guided Multi-Step Sending Workflow
1. **Trigger**: Say or type *"I want to send email"* or *"I want to send email to xyz@mail.com about my college details and all"*.
2. **Recipients**: An interactive popup prompts for recipients. Send to single or multiple recipients using comma-separated format: `xyz@mail.com, pyq@mail.com`.
3. **Raw Info Input**: Convo prompts for your raw notes or bullet points.
4. **✨ AI Auto-Draft**: Convo automatically crafts a professional subject line and polishes the email body.
5. **Full Preview & Edit**: Review the recipients, subject, and body with full freedom to make edits.
6. **Confirmation & Send**: Dispatches securely via SSL/TLS SMTP only after your explicit confirmation.
7. **Spoken Feedback**: In voice mode, Convo gives verbal confirmation upon successful delivery.

### ⚙️ Email Management (Settings)
- Navigate to **Settings → 📧 Email Management** to configure your email address, Google App Password, SMTP host/port, and IMAP host/port.
- Includes a **"⚡ Test Connection"** button for instant SMTP and IMAP SSL diagnostics.

---

## 16. 🧠 Think More (Intelligent Deep Reasoning)

Convo AI balances sub-second voice responsiveness with powerful deep thinking when tackling tough problems.

### ⚡ Two-Tier Reasoning & Multi-Signal Auto-Detection
Convo evaluates query complexity across 5 weighted signals (keywords, emotional tone, query length, conversation context, and technical/code entities):
- **Quick Mode (Score 1–3)**: Instant replies (~1–2s) with low reasoning effort. Best for time, weather, application launches, and factual lookups.
- **Light Mode (Score 4–6)**: Balanced reasoning (~10–25s budget) for writing advice, drafting, and explanations.
- **Deep Mode (Score 7–10)**: Thorough multi-angle reasoning (~30–45s in chat, 8s in voice) for emotional support, complex calculations, code debugging, and life planning.

### 🎙️ Voice Commands for Deep Reasoning
Control reasoning effort with natural spoken commands:
- *"Think more about this"* / *"Think harder"* / *"Go deeper on this"* → Forces deep reasoning for your next query.
- *"Quick answer"* / *"Just give me the short version"* / *"TLDR"* → Forces immediate concise response without deep thinking.

### 🖥️ Chat UI & Thinking Panel
- **Mode Toggle Button**: Click the `[🧠 Auto / ⚡ Quick / 💭 Deep]` button beside the message input to override reasoning depth for your chat session.
- **Collapsible Thinking Panel**: In chat mode, assistant responses include an expandable `▼ 💭 Thinking (X.Xs)` panel with a real-time elapsed timer showing the LLM's internal monologue and chain of thought.
- **Latency Protection in Voice**: In voice mode, thinking time is strictly capped at 8 seconds with visual orb feedback (*"THINKING DEEPER..."*), and reasoning traces are never read aloud.

### ⚙️ Reasoning Settings
Configure your preferences in **Settings → 🧠 Reasoning**:
- Default mode: `Always Quick`, `Smart Auto-Detect`, or `Always Deep`.
- Max thinking time sliders for Voice (5–15s) and Chat (15–60s).
- Toggle visibility of the chat thinking panel.

---

## 17. 🐙 GitHub Integration & Developer Tools

Convo AI deeply integrates with GitHub to explore repositories, track issues and pull requests, read commit logs, monitor unread notifications, and clone repositories locally.

### 🗣️ What to Say

```
"Convo, show me my GitHub repositories."
"Check stars and open issues on facebook/react."
"What are my unread GitHub notifications?"
"What are the latest commits on convo-ai?"
"List open pull requests on torvalds/linux."
"Create an issue on convo-ai titled 'Add dark theme toggle' with body 'Please add a toggle in settings'."
"Clone repository https://github.com/ashaz/convo-ai to my Desktop."
"Search GitHub for voice assistant python projects."
```

### ⚡ Supported Actions

| Action | Description | Risk Level |
| :--- | :--- | :--- |
| **User Profile** | View bio, follower count, public repos, and GitHub profile details. | `LOW` |
| **List Repositories** | List owned or user-specified repositories with stars, language, and update dates. | `LOW` |
| **Repository Stats** | Deep inspect stars, forks, open issues count, default branch, and license. | `LOW` |
| **Search Projects** | Search GitHub projects by topic, language, or keyword. | `LOW` |
| **Issues & PRs** | View open issues, authors, labels, and active pull requests. | `LOW` |
| **Commit History** | Inspect recent commit messages, authors, and SHAs on any branch. | `LOW` |
| **Unread Notifications** | Catch up on mentions, review requests, and thread alerts. | `LOW` |
| **Create Issue** | Open a new issue directly on your repository. | `MEDIUM` |
| **Clone Repository** | Clones any remote repository directly to your PC via local `git`. | `MEDIUM` |

### ⚙️ Authentication & Settings
Configure your GitHub Personal Access Token (PAT) in **Settings → 🐙 GitHub**:
- Public repository lookups, search, and commit history work with zero token.
- Enter your token to unlock private repositories, issue creation, and unread notifications.

---

## 18. ✍️ Writing Assistant (Grammar, Tone & Clarity)

Convo AI serves as your real-time editor and writing coach for emails, essays, and documentation. Operating 100% offline and locally, it calculates readability metrics, detects passive voice and wordiness, adjusts tone on the fly, and updates your Windows clipboard in-place for instant `Ctrl+V` pasting.

### 🎭 Supported Tones
- **Formal / Professional**: Boardroom-ready, polished, polite, and authoritative. Eliminates slang and contractions.
- **Casual**: Relaxed, conversational, warm, and approachable. Ideal for messaging and peer updates.
- **Technical**: Precise, domain-accurate, unambiguous, and developer-focused.
- **Friendly**: Enthusiastic, welcoming, and empathetic.
- **Concise**: Eliminates fluff, wordy filler phrases, and filler adverbs for maximum punch in minimum words.

### 🔍 Deterministic Linguistic Metrics (100% Offline)
- **Reading Level Analysis**: Computes Flesch Reading Ease (0–100) and Flesch-Kincaid Grade Level (*"This is college-level"*, *"This is high school level"*, *"Plain English"*).
- **Passive Voice Detector**: Identifies auxiliary `be` constructions followed by past participles (e.g., *"was written"*, *"has been reviewed"*) and highlights them with active voice alternatives.
- **Repetition & Filler Scanner**: Catches consecutive duplicate words (*"the the"*), bloated filler phrases (*"in order to"*, *"due to the fact that"*, *"at the end of the day"*), and weak qualifiers (*"very"*, *"basically"*).
- **In-Place Clipboard Workflow**: Simply copy any text (`Ctrl+C`), say your command, and Convo rewrites the text, copies the polished version directly back to your clipboard, and tells you what changed so you can immediately paste (`Ctrl+V`).

### 🗣️ Example Voice & Chat Commands
```text
"Proofread this clipboard text"
"Make this email more professional"
"Make it more concise"
"Formal tone"
"Check grammar on my essay"
"What reading level is this?"
"Analyze my writing for passive voice"
```

---

## 19. 📁 Google Drive & Docs Intelligence (with Visual Previews & In-GUI Reader)

Connect your Google Workspace directly to Convo AI to find documents across Google Drive, view visual document thumbnails and excerpts in the GUI, preview files in an in-GUI reader modal, summarize Google Docs hands-free, draft new documents, and export Convo notes into Google Docs.

### ⚡ Supported Actions

| Action | Description | Risk Level |
| :--- | :--- | :--- |
| **List Recent Docs** | Fetch recent Google Docs, Sheets, Slides, and PDFs with visual page thumbnails and snippets (`google.list_recent_docs`). | `LOW` |
| **Search Drive** | Search files and documents by title or full-text keyword with visual thumbnail cards (`google.search_drive`). | `LOW` |
| **Read Google Doc** | Retrieve and read full text of any Google Document with formatted reader view (`google.read_google_doc`). | `LOW` |
| **Create Google Doc** | Draft and create a new Google Doc with title and content in your Drive (`google.create_google_doc`). | `MEDIUM` |
| **Export Notes to Doc** | Compile all your saved Convo notes into a formatted Google Document (`google.export_notes_to_doc`). | `MEDIUM` |

### ✨ Visual Preview & Reader Features (Parity with Google Photos)
- **Visual Preview Gallery (`GoogleDocsGalleryCard`)**: When asking for recent documents or searching files, Convo renders a sleek horizontal scrollable card gallery containing:
  - **Document Page Thumbnails**: High-resolution page renders cached locally.
  - **Brand Type Badges**: Distinctive Google brand color indicators (`#4285F4` Docs Blue, `#0F9D58` Sheets Green, `#F4B400` Slides Yellow, `#EA4335` PDF Red).
  - **Text Snippets**: Live extracted text previews of document openings.
  - **Quick Action Buttons**: "🔍 Preview" and "🌐 Open in Drive/Docs".
- **In-GUI Document Reader (`GoogleDocViewerDialog`)**: Clicking any document card or "Preview" opens an elegant modal reader dialog displaying:
  - Document page render image.
  - Complete scrollable text content with word and character metrics.
  - **📋 Copy Text**: One-click clipboard copy.
  - **🤖 Summarize in Convo**: Instantly asks Convo to read and analyze the document directly in your chat/voice session.
  - **🌐 Open in Google Docs**: Direct browser navigation.
- **Detailed Single Read Card (`GoogleDocDetailCard`)**: Reading a specific doc renders an inline preview card with quick reader access.

### 🗣️ Example Voice & Chat Commands
```text
"Show me my recent Google Docs"
"Give me my recent files from Google Drive"
"List my recent Google Sheets"
"Search Google Drive for 'Project Pitch'"
"Summarize my Google Doc on AI Ethics"
"What does my 'Research Notes' doc say?"
"Create a Google Doc called 'Meeting Minutes' with the summary of our conversation"
"Export my notes to a Google Doc"
```

### ⚙️ Quick Setup (One-Time)
1. Place your OAuth `credentials.json` from Google Cloud Console in `config/google_credentials.json`.
2. Speak or type any Google Drive or Docs command. A browser window opens for you to click **Allow**.
3. Convo securely stores the authorization token locally in `data/google_token.json` and refreshes it automatically!

---

## 20. 📸 Google Photos & Video Gallery (photospicker.googleapis.com)

Convo AI integrates with the official **Google Photos Picker API (`photospicker.googleapis.com`)** to pick, manage, and preview your **photos, videos, and albums** with actual visual thumbnails, camera metadata, in-app zoom preview, and direct video streaming right inside the GUI.

### 🗣️ Example Commands
```
"Open Google Photos Picker to select photos and videos"
"Fetch my picked photos from Google Photos"
"Browse my Vacation album in Google Photos"
"Show me my top 5 recent photos from google photos"
"List my Google Photos albums"
```

### ✨ Features
- **Official Google Photos Picker**: Securely browse and choose photos and videos from your Google Photos library with auto-closing picker sessions.
- **Photos & Videos Support**: Seamless support for photos (`JPEG`, `PNG`, `HEIC`) and videos (`MP4`, `MOV`), including video overlay badges and one-click video streaming (`▶ Play Video`).
- **Album Management**: Browse and pick items from specific albums by name (e.g. *Vacation*, *Family*, *Portraits*).
- **In-App Zoom & Preview**: Click any photo or video in the horizontal gallery strip to open the high-resolution reader dialog inside Convo AI without leaving the app.
- **One-Click Action Buttons**: Click `"⚡ Fetch Picked Media"` directly on the card to import selected items immediately.

## 21. ▶️ YouTube Video Intelligence & Player Preview

Convo AI can search YouTube videos, preview high-resolution 16:9 thumbnails, channel badges, duration tags, and view counts in an interactive visual gallery, play videos directly in your browser, or fetch video transcripts for instant summarization.

### ⚡ Supported Actions
| Action | Description | Risk Level |
| :--- | :--- | :--- |
| **Search YouTube** | Search YouTube with rich visual video thumbnails and duration badges (`youtube.search_videos`). | `LOW` |
| **Play Video** | Launch video playback directly in browser or mini-player (`youtube.play_video`). | `LOW` |
| **Summarize Video** | Fetch video captions and transcript to provide an instant executive summary (`youtube.get_video_transcript`). | `LOW` |

### 🗣️ Example Commands
```text
"Play lofi beats for coding on YouTube"
"Search YouTube for Unreal Engine 5.5 tutorials"
"Find quantum computing documentaries on YouTube"
"Summarize this YouTube video: https://www.youtube.com/watch?v=..."
```

---

## 22. 📅 Google Calendar & Schedule Intelligence

Convo AI connects to your Google Calendar to view upcoming appointments, display a cybernetic vertical timeline card, schedule new meetings, and join Google Meet video calls with a single click.

### ⚡ Supported Actions
| Action | Description | Risk Level |
| :--- | :--- | :--- |
| **Upcoming Events** | Fetch upcoming appointments with meeting links (`calendar.list_upcoming_events`). | `LOW` |
| **Schedule Event** | Create a new calendar event with optional Google Meet link (`calendar.create_event`). | `MEDIUM` |

### ✨ Visual Timeline Card (`CalendarTimelineCard`)
- **Time Badges**: Clean time ranges (e.g. `10:00 - 11:30`) and date tags.
- **📹 One-Click Google Meet**: Clicking the neon green "Meet" button instantly opens the video call.
- **Event Modal (`CalendarEventDialog`)**: Full agenda, location, attendee response status, and calendar link.

### 🗣️ Example Commands
```text
"What's on my schedule today?"
"Check my calendar for this week"
"Schedule a team sync tomorrow at 3 PM"
"Do I have any meetings this afternoon?"
```

---

## 23. 👥 Google Contacts (People API) Intelligence

Search and browse your Google Contacts with visual avatar or initials cards, phone numbers, email addresses, and quick clipboard actions.

### 🗣️ Example Commands
```text
"Find contact for Alex"
"Show my Google Contacts"
"What is Sarah's phone number?"
"Find my doctor's email in contacts"
```

---

## 24. 📝 Google Forms Intelligence

Inspect Google Form structures, survey questions, and responder links directly within Convo AI.

### 🗣️ Example Commands
```text
"Inspect Google Form 1FAIpQLSc..."
"What questions are on my survey form?"
```

---

## 25. 🗺️ Google Maps Navigation & Place Discovery

Discover places, find cafes, calculate driving or transit routes, and launch turn-by-turn navigation on Google Maps with interactive destination cards.

### 🗣️ Example Commands
```text
"Find coffee shops with Wi-Fi near me"
"How do I drive from Central Park to JFK Airport?"
"Walking directions from Times Square to Empire State Building"
```

---

## 26. 🪟 Floating Dynamic Island (Desktop HUD)

An optional translucent glassmorphism HUD bar pinned to the top of your screen that keeps Convo AI visible without obstructing your full workspace while gaming, coding, or watching videos.

### ✨ Features
- **Dynamic Waveform Visualizer**: Static state pills are replaced with an interactive canvas-rendered live audio equalizer with real-time frequency bars:
  - **Idle State**: Features a subtle breathing cyan wave indicating Convo AI is online and listening for your summon.
  - **Listening State**: Real-time frequency bars dynamically react to the pitch, volume, and cadence of your voice.
  - **Speaking State**: Multi-band cyber magenta & neon cyan equalizer pulses and dances synchronously to Convo AI's live speech output.
  - **Thinking State**: Flowing cognitive quantum oscillations with shimmering gradient waves.
  - **Interactive**: Click directly on the waveform visualizer to start speaking or interrupt active playback!
- **Dynamic State Morphing**:
  - **Listening**: Expands smoothly into an animated neon equalizer visualizer with real-time soundwave bars (`410x54 px`).
  - **Thinking**: Displays a cognitive pulsing beam with reasoning activity (`360x50 px`).
  - **Speaking**: Expands to display real-time live streaming subtitles and audio playback waveforms (`500x72 px`).
  - **Welcome**: Pops up a greeting card when presence sensing detects your return (`430x62 px`).
- **Crisp Vector Action Markings**:
  - **🎙 Microphone Button**: Click to start voice listening immediately, or interrupt active speech playback (turns red ⏹ during speech/listening).
  - **🪟 Expand Window Button**: Click or double-click the capsule to open/restore the full Convo AI window.
  - **✕ Dismiss Button**: Quickly minimize the HUD.
- **Draggable**: Drag the HUD anywhere on your monitor canvas.
- **Toggleable in Settings**: Enable or disable anytime from **Settings → Voice & Audio**.

---

## 27. 👤 Presence Sensing & Walk-Away Auto-Lock

Uses your local biometric profile and periodic webcam checks to protect your PC and deliver intelligent greetings.

### ✨ Features
- **Walk-Away Auto-Lock**: When you step away from your desk for longer than your configured timeout (30s, 60s default, 2m, 5m), Convo automatically locks your Windows workstation (`Win + L` / `LockWorkStation`).
- **Welcome Back Greeting**: When you sit back down and your face is recognized, Convo awakens and delivers a warm spoken & visual greeting:
  - *"Welcome back, Ashaz! System secure. You have 2 unread emails and 1 pending task waiting for you."*
- **Ultra-Low CPU / 0% GPU Overhead**: Grabs a single camera frame snapshot every **5.0 seconds** using downscaled CPU-based HOG face detection. Releases hardware between checks so your GPU has **0% load** and webcam is never locked.
- **Toggleable in Settings**: Enable/disable, configure walk-away timeout, and toggle welcome greetings in **Settings → 🛡️ Face Lock**.

---

## 28. 🔊 Dynamic Audio Volume Slider & Speaker Mute Control

A unified, real-time audio volume controller built directly into **Voice Mode**, **Chat Mode**, and the **Dynamic Island**:

### ✨ Features
- **Instant Speaker Mute (🔊 / 🔇)**: Click the speaker button in either Voice Mode or Chat Mode to immediately silence Convo AI's speech output.
- **Dynamic Audio Bar (0 - 100%)**: Drag the glowing cyber slider to set Convo AI's speech volume dynamically in real time without audio popping or distortion.
- **Cross-View Synchronization**: Changes in Voice Mode, Chat Mode, or Settings synchronize in lockstep via `EventBus` and `AudioVisualizerBridge`.
- **Chat Mode Read Aloud**: Every assistant message bubble in Chat Mode features a dedicated **🔊 Read Aloud** button so you can listen to any response on demand.


---

## 🎯 Quick Reference Cheat Sheet

| Intent | Example Voice Command | Shortcut |
| :--- | :--- | :--- |
| **Summon Convo** | Anywhere in Windows | `Ctrl + Shift + Space` |
| **Voice Mode** | Press & hold | `Space` (or your PTT key) |
| **Google Photos** | *"Show me my top 5 recent photos from google photos"* | Spoken or Chat |
| **Search Photos by Date**| *"Search photos from 2025"* | Spoken or Chat |
| **Search Google Drive** | *"Search Google Drive for 'Project Pitch'"* | Spoken or Chat |
| **Summarize Google Doc** | *"Summarize my Google Doc on AI Ethics"* | Spoken or Chat |
| **Create Google Doc** | *"Create a Google Doc called 'Meeting Notes' with..."* | Spoken or Chat |
| **Export Notes to Doc** | *"Export my notes to a Google Doc"* | Spoken or Chat |
| **Proofread Clipboard** | *"Proofread this clipboard text"* / *"Check grammar"* | Spoken or Chat |
| **Professional Email** | *"Make this email more professional"* / *"Formal tone"* | Spoken or Chat |
| **Make Text Concise** | *"Make it more concise"* / *"Cut the fluff"* | Spoken or Chat |
| **Reading Level Analysis**| *"What reading level is this?"* / *"Check readability"* | Spoken or Chat |
| **Think More / Deeper** | *"Think more about this"* / *"Think harder"* | Spoken or Chat |
| **Quick Answer** | *"Quick answer"* / *"Give me the short version"* | Spoken or Chat |
| **Check Unread Emails** | *"Convo, do I have any new emails?"* | Spoken or Chat |
| **Read Latest Emails** | *"Read my latest emails"* | Spoken or Chat |
| **Search Emails** | *"Search emails from college"* / *"Find interview emails"* | Spoken or Chat |
| **Read Email Content** | *"Yes, what does it say?"* / *"Read the details"* | Spoken or Chat |
| **Send Email** | *"I want to send email to advisor@college.edu about my project"* | Spoken or Chat |
| **GitHub Repositories** | *"Show me my GitHub repositories"* | Spoken or Chat |
| **GitHub Notifications** | *"What are my unread GitHub notifications?"* | Spoken or Chat |
| **Repo Stats / Stars** | *"Check stars and open issues on convo-ai"* | Spoken or Chat |
| **Recent Commits** | *"What are the latest commits on convo-ai?"* | Spoken or Chat |
| **Clone Repo** | *"Clone https://github.com/ashaz/convo-ai to Desktop"* | Spoken or Chat |
| **Morning Briefing** | *"Good morning Convo"* | Spoken |
| **Run Macro** | *"Project Mode"* / *"Coding Mode"* | Spoken or Settings Card |
| **Check Hardware** | *"What is my CPU and RAM usage?"* | Spoken or Chat |
| **Set Timer** | *"Set a timer for 15 minutes"* | Spoken or Chat |
| **Check Clipboard** | *"Fix the grammar of what I copied"* | Spoken or Chat |
| **Web Query** | *"Search the web for ... "* | Spoken or Chat |
| **Memory GUI** | Mode Select | Press `M` |
| **Settings GUI** | Mode Select | Press `S` |
| **Activity GUI** | Mode Select | Press `A` |
| **Capabilities Guide**| Mode Select | Press `W` |

---
*Convo AI — Intelligent, Fast, and Always Ready on Your Desktop.*


