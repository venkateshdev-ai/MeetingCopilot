# 🤖 Meeting Optimization Copilot (POC)

> **An AI-Native Discovery Tool for High-Growth Product Studios**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-black?logo=vercel)](https://meeting-copilot-one.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-98.2%25-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)

The **Meeting Optimization Copilot** is a Proof of Concept (POC) designed to eliminate **"Discovery Friction"**. It leverages **RAG (Retrieval-Augmented Generation)** to autonomously synthesize stakeholder meeting transcripts into actionable product artifacts — PRDs, User Stories, and Acceptance Criteria.

🔗 **[View Live Demo →](https://meeting-copilot-one.vercel.app/)**

---

## 🎯 The Problem

Product Managers in studio environments spend **5–8 hours weekly** translating meeting notes into technical tickets. This tool reduces that overhead by **70%**, ensuring the "Ground Truth" discussed in discovery sessions is preserved and immediately actionable.

| Before | After |
|--------|-------|
| 120 min manual synthesis | < 10 min to artifact |
| Misalignment between transcript & tickets | 100% scope alignment |
| Context lost in translation | RAG-preserved ground truth |

---

## 📸 Screenshots

**AI-Native Analysis Dashboard**

![Dashboard UI](./ScreenShots/Screenshot%202026-02-07%20at%2010.26.06%E2%80%AFAM.png)

**Transcript Review Panel**

![Transcript Panel](./ScreenShots/Screenshot%202026-02-07%20at%2010.26.14%E2%80%AFAM.png)

**Artifact Generation Output**

![Artifact Output](./ScreenShots/Screenshot%202026-02-07%20at%2010.26.21%E2%80%AFAM.png)

---

## 🛠️ Technical Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript (98.2% of codebase) |
| UI/UX | Tailwind CSS + Shadcn/UI |
| AI Logic | RAG pipeline for transcript analysis |
| Discovery | Balsamiq (low-fidelity prototyping) |
| Deployment | Vercel |

---

## 🧠 Product Discovery & Design Logic

This project prioritizes **"Discovery-First" development** to mitigate usability and feasibility risks before writing a single line of code.

### 1. Usability Validation (Balsamiq)
Before development, the user journey was mapped via Balsamiq wireframes. Discovery files are in the root directory:
- 📄 **Wireframe PDF:** [`MeetingPOC_wireframe.pdf`](./MeetingPOC_wireframe.pdf)
- 🗂️ **Balsamiq Project:** [`Meetpilot.bmpr`](./Meetpilot.bmpr)
- 📋 **PRD:** [`Product Requirement Document`](./Product%20Requirement%20Document)

### 2. Implementation
The interface was developed from discovery insights to facilitate side-by-side transcript review and artifact generation. See [`ScreenShots/`](./ScreenShots/) for full UI walkthroughs.

---

## 📂 Repository Structure

```
MeetingCopilot/
├── app/                        # Next.js App Router pages
│   ├── page.tsx               # Main application page
│   ├── layout.tsx             # Root layout
│   └── globals.css            # Global styles
├── components/                 # Modular Shadcn/UI components
├── lib/                        # Core business logic & RAG prompt templates
├── ScreenShots/                # UI implementation visuals
├── MeetingPOC_wireframe.pdf   # Low-fidelity wireframes
├── Product Requirement Document # PRD artifact
└── Meetpilot.bmpr             # Raw Balsamiq project file
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- pnpm (`npm install -g pnpm`)

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/venkateshdev-ai/MeetingCopilot.git
cd MeetingCopilot

# 2. Install dependencies
pnpm install

# 3. Set up environment variables
cp .env.example .env.local
# Fill in your API keys in .env.local

# 4. Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔑 Environment Variables

Copy `.env.example` to `.env.local` and fill in the required values. See [`.env.example`](./.env.example) for all required variables.

---

## 📈 Success Metrics (Projected)

- **Time-to-Artifact:** Reduction from 120 minutes → < 10 minutes
- **Scope Protection:** 100% alignment between meeting transcript and generated Acceptance Criteria
- **Studio ROI:** Faster delivery cycles and reduced misalignment for enterprise clients

---

## 🤝 Contributing

This is a POC project. Feedback and ideas are welcome — open an issue or reach out directly.

---

*Built with ❤️ as a Discovery-First AI Product Management POC*
