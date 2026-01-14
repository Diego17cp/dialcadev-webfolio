---
title: "Screaming Dialca React"
description: "A CLI tool to scaffold React + Vite projects using a feature-based, screaming architecture. Designed to standardize project structure and improve long-term maintainability."
image: "/projects/portraits/screaming-dialca-react-portrait.webp"
technologies:
  - name: "Node.js"
    icon: "tabler:brand-nodejs"
    color: "#339933"
  - name: "JavaScript"
    icon: "devicon-plain:javascript"
    color: "#F7DF1E"
  - name: "React"
    icon: "tabler:brand-react"
    color: "#61DAFB"
  - name: "Vite"
    icon: "tabler:brand-vite"
    color: "#646CFF"
  - name: "NPM"
    icon: "tabler:brand-npm"
    color: "#CB3837"
github: "https://github.com/Diego17cp/screaming-dialca-react"
npm: "https://www.npmjs.com/package/screaming-dialca-react"
featured: false
publishedAt: 2024-03-15
order: 3
---

# Screaming Dialca React — CLI Tool

**Screaming Dialca React** is a command-line tool that generates **React + Vite projects** using a **feature-based folder structure inspired by Screaming Architecture**.

It is designed to eliminate repetitive setup work while enforcing **clean project organization from day one**, making it easier to scale and maintain applications over time.

---

## ✨ Key Features

- ⚡ **Instant React + Vite scaffolding**
- 🗂️ **Feature-based project structure**  
  Organized by domain instead of technical layers.
- 🧠 **Architecture-first approach**  
  Promotes clarity, separation of concerns, and scalability.
- 📦 **Pre-installed common dependencies**
- 🔧 **ESLint and Prettier pre-configured**
- 🚀 **Zero manual setup required**
- 💬 **Interactive CLI prompts**

---

## 🧠 Why Screaming Architecture?

Instead of grouping files by type (`components`, `hooks`, `utils`), this tool encourages grouping by **feature or domain**, allowing projects to:

- Scale without becoming messy
- Reduce cross-feature coupling
- Improve code discoverability
- Make refactoring safer and easier

> The project structure should scream what the app does.

---

## 📦 Installation

Install globally:

```bash
npm install -g screaming-dialca-react
# Or run with npx
npx screaming-dialca-react
```

## 🚀 Usage
Run the CLI and follow the prompts:

```bash
screaming-dialca-react my-app
# Or with npx
npx screaming-dialca-react my-app

cd my-app
npm install
npm run dev
```

## 🛠️ Generated Structure
my-app/
├── src/
│   ├── app/           # Application-level components and configurations
│   ├── core/          # Application core (routing, theming, etc.)
│   ├── features/      # Feature-based modules
│   │   └── example/   # Example feature
│   │       ├── components/   # Feature-specific components
│   │       ├── hooks/        # Feature-specific hooks
│   │       ├── utils/        # Feature-specific utilities
│   │       ├── pages/        # Feature-specific pages
│   │       ├── constants/    # Feature-specific constants
│   │       ├── types/        # Feature-specific types (TypeScript)
│   │       ├── contexts/     # Feature-specific contexts
│   │       ├── stores/       # Feature-specific state management
│   │       └── services/     # Feature-specific services (API calls)
│   └── shared/        # Shared components, hooks, and utilities
└── README_SCREAMING.md  # Architecture documentation

## 🎯 Who is this for?

- Developers who want consistent project structure

- Teams tired of reinventing folder organization

- React developers who care about maintainability

- Anyone who prefers architecture over ad-hoc setups