# 🌟 Vesper 1.5B Instruct (v0.1) — Complete Model Context & Technical Dossier

| Field | Specification |
| :--- | :--- |
| **Model Name** | **`VESPER-1.5B-INSTRUCT-V0.1`** (also tagged `Vesper-1.5B-Convo-v1`) |
| **Base Model** | [`Qwen/Qwen2.5-1.5B-Instruct`](https://huggingface.co/Qwen/Qwen2.5-1.5B-Instruct) |
| **Model Scale** | **1.54 Billion Parameters** (`1,543,714,816` parameters) |
| **Architecture Tier** | **Tier-0 Local Ultra-Low Latency Ambient Brain** for Convo AI |
| **Developer / Creator** | **Ashaz Pathan** |
| **Training Paradigm** | 4-bit QLoRA (Quantized Low-Rank Adaptation) Supervised Fine-Tuning |
| **Target Runtime** | Local PC (Windows 10/11) running on Ollama / llama.cpp / vLLM |
| **Quantization Format** | GGUF (`Q4_K_M`) & Hugging Face PEFT LoRA Adapter (`adapter_model.safetensors`) |
| **VRAM Consumption** | **~950 MB – 1.1 GB** in 4-bit Q4_K_M |

---

## 1. Executive Summary & Purpose

**Vesper 1.5B Instruct v0.1** is a specialized, lightweight local Large Language Model built to serve as the **instant, offline voice and task dispatcher** for **Convo AI** (Ashaz Pathan's autonomous Windows desktop assistant).

### Why Vesper 1.5B was Created:
1. **Eliminate OpenRouter API Token Drain**: In desktop assistants, 70–80% of daily interactions are quick tasks (*"Who created you?"*, *"Set volume to 40%"*, *"I'm feeling burnt out"*, *"What's my schedule today?"*). Routing these to expensive cloud APIs consumes rate limits and incurs unnecessary latency. Vesper handles them 100% locally with zero token cost.
2. **Concurrent Coexistence with Local ONNX Models**: Convo AI runs a full computer vision and biometric pipeline in the background (`SCRFD` 500M face detection, `ArcFace` 512-d embeddings, `MiniFASNet` anti-spoofing, `Silero VAD`, and `Faster-Whisper` STT). Vesper's tiny ~1 GB VRAM footprint allows it to run alongside these models on consumer GPUs without causing Out-Of-Memory (OOM) crashes.
3. **Speech-Optimized Natural Prose**: Traditional LLMs produce long markdown lists. Vesper is trained to output concise, 1–3 sentence conversational prose tailored for real-time speech streaming over `Edge-TTS` and `Deepgram`.
4. **Cloud Escalation Gate**: When a user asks for complex multi-file coding or deep research, Vesper deterministically outputs an escalation token (`[ROUTE:CLOUD_API]`), letting the host system call heavy models only when strictly necessary.

---

## 2. Model Architecture & Training Specifications

### 2.1 Base Model Specifications
* **Base Architecture**: Qwen2.5 Transformer Decoder (Dense)
* **Hidden Dimension**: 1,536
* **Attention Heads**: 12 (Query) / 2 (Key/Value — Grouped Query Attention / GQA)
* **Layers**: 28 transformer blocks
* **Vocabulary Size**: 151,936 tokens
* **Context Window**: 32,768 tokens (tested up to 4,096 locally for low VRAM)

### 2.2 PEFT / QLoRA Hyperparameters
* **PEFT Library**: Hugging Face `peft 0.21.2` + `trl` + `bitsandbytes`
* **Quantization**: 4-bit NormalFloat (`nf4`) with double quantization enabled
* **Rank ($r$)**: `16`
* **LoRA Alpha ($\alpha$)**: `32`
* **LoRA Dropout**: `0.05`
* **Target Modules**: All attention and feed-forward projection layers:
  * Attention: `q_proj`, `k_proj`, `v_proj`, `o_proj`
  * MLP: `gate_proj`, `up_proj`, `down_proj`
* **Trainable Parameters**: `29,933,568` out of `1,543,714,816` (**~1.94% adapter**)
* **Adapter Footprint**: `36.9 MB` (`adapter_model.safetensors`)

---

## 3. Dataset & Knowledge Ingestion

Vesper 1.5B was trained on a multi-format dataset blending conversational instruct tasks with Ashaz Pathan's personal knowledge base:

1. **`vesper_convo_dataset.csv` (1,136+ rows)**:
   * **Domain Categories**:
     * `identity`: Convo AI ecosystem, offline biometrics, architecture.
     * `emotional_consoling`: Empathetic responses conditioned on webcam emotion states (`tired`, `sad`, `stressed`, `neutral`, `happy`).
     * `briefing_narrator`: Converting raw desktop JSON into natural morning/evening briefings.
     * `local_tool_call`: Fast JSON tool dispatch for volume, app opening, Spotify control, media playback.
     * `cloud_escalate`: Deterministic escalation detection.
2. **`convo_ai_instruct_dataset.jsonl`**:
   * General instruction-following, system utilities, task planning, and Python coding turns mapped to the unified ChatML template.
3. **Ashaz Pathan Knowledge Base**:
   * Complete bio: Student and software developer from Maharashtra, India.
   * Education: Studying Computer Science and Engineering (Direct Second Year / DSY) at **G.H. Raisoni College of Engineering and Management, Nagpur** (RTMNU affiliated, NAAC A+); Diploma in Computer Engineering from **MET Bhujbal Knowledge City, Nashik** (MSBTE, 89.67% distinction).
   * Published Author: *"Shadows of Love"* (fiction novel) and *"Meeting You Was A Coincidence"* (co-authored with Smiti Chavan).
   * Apps: *Focus: Daily Quotes & Growth* (Google Play), *Attendify*, *Lumina Spaces*, *Filex*, *FACET*, *VIDPULL*.

---

## 4. Ollama Runtime & Modelfile Configuration

```dockerfile
# ==============================================================================
# Modelfile for VESPER-1.5B-INSTRUCT-V0.1 (Tier-0 Local Voice & Dispatch Engine)
# ==============================================================================
FROM ./vesper-1.5b-q4_k_m.gguf

TEMPLATE """{{ if .System }}<|im_start|>system
{{ .System }}<|im_end|>
{{ end }}{{ if .Prompt }}<|im_start|>user
{{ .Prompt }}<|im_end|>
{{ end }}<|im_start|>assistant
{{ .Response }}<|im_end|>"""

PARAMETER stop "<|im_start|>"
PARAMETER stop "<|im_end|>"
PARAMETER stop "<|endoftext|>"
PARAMETER temperature 0.7
PARAMETER top_p 0.9
PARAMETER top_k 40
PARAMETER repeat_penalty 1.1

SYSTEM """You are Vesper (VESPER-1.5B-INSTRUCT-V0.1), the fast local ambient brain and desktop companion for Convo AI created by Ashaz Pathan. Keep responses concise, natural, warm, and optimized for voice."""
```

---

## 5. Performance Profile & Metrics

* **Tokens Per Second**: **75 – 110 tokens/sec** on NVIDIA RTX 30/40 series GPUs; **35 – 50 tokens/sec** on CPU.
* **Cold Start Latency**: $<150\text{ ms}$ (instantaneous wakeup).
* **RAM/VRAM Usage**: ~1.05 GB total.
* **Ideal Deployment**: Always running in the background as the default first-responder for Convo AI.
