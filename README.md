# vite-react-calculator

A clean, minimal calculator application built as part of a Distributed Systems course assignment on cloud monitoring and deployment. The app demonstrates core React concepts combined with a modern development workflow — local development with Vite, version control via GitHub, and automatic cloud deployment through Vercel.

## Live Demo

[https://vite-react-calculator-zxjy.vercel.app](https://vite-react-calculator-zxjy.vercel.app)

## Features

- Addition, subtraction, multiplication, and division
- Input validation with error handling (e.g. division by zero)
- Clean, responsive dark UI
- Instant result display with expression preview

## Tech Stack

- **React** — component-based UI
- **Vite** — fast dev server and build tool
- **TypeScript** — type-safe code

## Project Structure
src/
├── components/
│   └── Calculator/
│       ├── Kalkulator.tsx        # Main UI component
│       └── kalkulatorLogika.ts   # Calculator logic (separated from UI)
├── types/
│   └── Kalkulator.ts             # Shared TypeScript types and interfaces
└── App.tsx                       # Root component
## Getting Started

Clone the repository and run locally:

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Deployment

The app is deployed on **Vercel** and connected to this GitHub repository.
Every push to the `main` branch automatically triggers a new production deployment.