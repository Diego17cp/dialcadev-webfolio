---
title: "Dialcore Bot"
description: "A Discord bot aimed at productivity and community engagement, featuring task management, pomodoro timer, learning modules, and more."
image: "/projects/portraits/dialcore-bot-portrait.webp"
technologies:
    - name: "Node.js"
      icon: "tabler:brand-nodejs"
      color: "#339933"
    - name: "TypeScript"
      icon: "tabler:brand-typescript"
      color: "#3178C6"
    - name: "Discord.js"
      icon: "devicon-plain:discordjs"
      color: "#7289DA"
    - name: "SQLite"
      icon: "devicon-plain:sqlite"
      color: "#003B57"
    - name: "Prisma"
      icon: "simple-icons:prisma"
      color: "#0C344B"
github: "https://github.com/Diego17cp/dialcore-bot"
demo: "https://dialcore.vercel.app"
featured: false
publishedAt: 2025-01-21
order: 5
---
# Dialcore Bot — Your community's productivity companion

**Dialcore Bot** is a modular and extensible **Discord bot** built in **TypeScript**, designed to enhance productivity and community engagement.

It pairs modular architecture principles with a flexible command system, allowing easy expansion of features while maintaining robust type safety and data persistence.

---

## ✨ Key Features

- 🤖 **Modular Command System**  
  Organized to separate features into command modules for maintenance and expansion.

- 🎛️ **Event and Interaction Handling**  
  Listens to Discord events and executes structured handlers for predictable behavior.

- 🧠 **TypeScript-first Architecture**  
  Strong typing across commands, events, and data models for developer confidence.

- 📦 **Database Integration with Prisma & SQLite**  
  Persistent storage of necessary data, structured through a type-safe ORM.

- 🔐 **Permission-aware Operations**  
  Commands respect Discord permissions and role hierarchies.

- 🚀 **Extensible Plugin-style Features**  
  Built to grow with new bot functionality without breaking existing flows.

---

## 🧱 Technical Overview

### Runtime

- **Node.js** with modern ES modules
- **Discord.js** for Discord API interactions
- **Prisma** as ORM with **SQLite** backend for dev simplicity

### Architecture Highlights

- Command registration and handler mapping
- Event listeners decoupled from core logic
- Prisma schema for structured data persistence
- Clear separation between Discord API layer and business logic
