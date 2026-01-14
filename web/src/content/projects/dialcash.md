---
title: "DialCash"
description: "An offline-first Android application for personal finance tracking, focused on clarity, control, and local data ownership. Built with Kotlin and SQLite."
image: "/projects/portraits/dialcash-portrait.webp"
technologies:
  - name: "Kotlin"
    icon: "tabler:brand-kotlin"
    color: "#7F52FF"
  - name: "Android"
    icon: "tabler:brand-android"
    color: "#3DDC84"
  - name: "SQLite"
    icon: "devicon-plain:sqlite"
    color: "#003B57"
github: "https://github.com/Diego17cp/dialcash"
download: "https://github.com/Diego17cp/dialcash/releases/latest"
demo: "https://dialcash.vercel.app"
featured: true
publishedAt: 2024-09-19
order: 4
---

# DialCash — Personal Finance Manager

**DialCash** is a native Android application designed for users who want **full control over their personal finances** without relying on cloud services or external accounts.

The app follows an **offline-first philosophy**, ensuring that all financial data remains stored locally on the device, providing speed, reliability, and privacy.

---

## ✨ Core Features

- 💸 **Expense and income tracking**  
  Record daily financial movements with clear categorization.

- 📊 **Balance and flow overview**  
  Visualize income vs expenses over time.

- 🗂️ **Category-based organization**  
  Custom categories with icons and colors for quick recognition.

- 📱 **Offline-first by design**  
  All data is stored locally using SQLite. No internet required.

- 🎨 **Modern Android UI**  
  Clean layouts following Material Design principles.

- 🔒 **Local data protection**  
  Device-level security without external servers.

---

## 🧠 Design Philosophy

DialCash is intentionally simple.

Instead of trying to automate everything, it focuses on:
- Clear data entry
- Fast access to information
- Minimal friction when tracking expenses
- Predictable behavior without hidden sync logic

> Your data. Your device. Your control.

---

## 🧱 Technical Overview

### Android Stack

- **Kotlin** as the primary language
- Native Android SDK
- Modern UI components
- ViewBinding for type-safe UI references
- Coroutines for asynchronous operations

### Data Layer

- **SQLite** as the local database
- Structured schema for long-term consistency
- Explicit DAO-style data access
- Manual control over queries and updates
- Support for schema evolution through migrations

---

## 🧾 Transaction Management

- Add, edit, and delete transactions
- Support for both income and expenses
- Optional notes for each entry
- Date-based organization for historical tracking

---

## 📈 Insights & Visualization

- Monthly summaries
- Income vs expense comparisons
- Category-based breakdowns
- Lightweight charts for quick analysis

The goal is clarity, not financial overload.

---

## 🔐 Privacy First

DialCash does **not**:
- Require user accounts
- Upload data to the cloud
- Track usage analytics

All financial data stays on the device, ensuring full user privacy.

---

## 📦 Installation

### Download APK

Get the latest release from GitHub:

https://github.com/Diego17cp/dialcash/releases/latest

### Build from Source

```bash
git clone https://github.com/Diego17cp/dialcash.git
# Open the project in Android Studio
# Build and run on an emulator or physical device
```

---

## 📋 Requirements

- Android 7.0 (API level 24) or higher
- Minimal storage usage
- No internet connection required

---

## 🎯 Why DialCash?

This project showcases my ability to:

- Build native Android applications

- Design offline-first data-driven systems

- Model local databases for reliability

- Balance UX simplicity with functional depth

- Ship a complete, usable product—not just a demo

- DialCash is built as a personal tool, but engineered with production-quality standards.