---
title: "DialcaPharma"
description: "A full-stack pharmacy management system focused on inventory control, sales traceability, and operational reliability. Built with a clean, scalable architecture for real-world use."
image: "/projects/portraits/dialcapharma-portrait.webp"
technologies:
  - name: "React"
    icon: "tabler:brand-react"
    color: "#61DAFB"
  - name: "TypeScript"
    icon: "tabler:brand-typescript"
    color: "#3178C6"
  - name: "Vite"
    icon: "tabler:brand-vite"
    color: "#646CFF"
  - name: "Express"
    icon: "simple-icons:express"
    color: "#000000"
  - name: "Node.js"
    icon: "tabler:brand-nodejs"
    color: "#339933"
  - name: "PostgreSQL"
    icon: "devicon-plain:postgresql"
    color: "#4169E1"
github: "https://github.com/Diego17cp/dialcapharma"
featured: false
publishedAt: 2025-11-06
order: 2
---

# DialcaPharma — Pharmacy Management System

**DialcaPharma** is a full-stack web system designed to manage the daily operations of a pharmacy, with a strong focus on **inventory accuracy**, **sales traceability**, and **operational control**.

It is built as a real-world application, prioritizing **data integrity**, **auditing**, and **scalable architecture** over superficial features.

---

## ✨ Core Features

- 💊 **Inventory management with full traceability**  
  Automatic stock updates on every sale or adjustment, with detailed movement history.

- 🧾 **Sales and billing system**  
  Support for complete sales records, sale details, and structured transaction handling.

- 💳 **Multiple payment methods per sale**  
  Mixed payments support (cash, digital wallets, card, transfers, or loyalty points).

- ⭐ **Customer loyalty points system**  
  Points earned based on purchase value, redeemable as partial or full payment.

- 📉 **Low stock alerts**  
  Automatic notifications when products reach minimum stock levels.

- 🧑‍💼 **Role-based access control**  
  Protected routes and actions based on user roles.

- 🕵️ **Administrative audit log**  
  Sensitive actions are recorded for accountability and traceability.

---

## 🧠 System Design Philosophy

DialcaPharma is not a CRUD-heavy app. It is designed around **business rules and consistency**:

- Every sale is handled as a **single database transaction**
- Stock changes are always mirrored in movement logs
- Sale cancellations automatically revert inventory changes
- Sensitive operations are audited
- Logical deletion is used to preserve historical data

> Reliability over shortcuts.

---

## 🧱 Architecture Overview

### Frontend

- **React + TypeScript**
- Modular feature-based structure
- Clean separation between UI, state, and business logic
- Designed to scale without becoming tightly coupled

### Backend

- **Node.js + Express + TypeScript**
- Modular architecture inspired by clean architecture principles
- Clear separation of concerns:
  - Controllers
  - Services
  - Repositories
- **PostgreSQL** with Prisma ORM
- Fully transactional operations for critical flows (sales, stock, points)

---

## 🗃️ Data Model Highlights

- Products, Categories, and Inventory
- Sales, Sale Details, and Sale Payments
- Stock Movements with full history
- Customers and Loyalty Points
- Administrative Action History
- Logical deletion for long-term data integrity

The schema is designed to support **traceability and auditing**, not just storage.

---

## 🔐 Security & Access Control

- JWT-based authentication using HttpOnly cookies
- Role-based authorization guards
- Input validation across layers
- Secure password hashing
- Centralized error handling with structured API responses

---

## 🚀 Why DialcaPharma?

This project demonstrates my ability to:

- Design **real business systems**, not just UI demos
- Handle **complex transactional logic**
- Model databases for **traceability and long-term consistency**
- Build scalable backends with clear architectural boundaries
- Think in terms of **systems**, not just features

DialcaPharma represents a production-minded approach to full-stack development.

---

## 💻 Source Code

- GitHub Repository: https://github.com/dialcadev/dialcapharma
