# Big Digital Cl0ck 🕒

Big Digital Cl0ck is a modular, full-screen clock built with **Next.js 15**, **React 19**, **Tailwind CSS 4**, and **Flowbite React**. The application is optimized for high-visibility displays during workouts, studio classes, and live events while remaining useful on smaller screens.

---

## Table of Contents
1. [Features](#features)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Getting Started](#getting-started)
5. [Usage Guide](#usage-guide)
6. [Available Scripts](#available-scripts)
7. [Styling & Accessibility](#styling--accessibility)
8. [Testing & Quality](#testing--quality)
9. [Deployment](#deployment)
10. [Security & Privacy](#security--privacy)
11. [Roadmap](#roadmap)
12. [Contributing](#contributing)
13. [License](#license)

---

## Features
- **Four timing modes** designed for common training workflows:
  - **Time Mode** – Displays the current system time with large typography.
  - **Workout Mode** – Configure rounds with separate work/rest durations, presets (Tabata, EMOM), and quick duplication or reordering of blocks.
  - **Timer Mode** – A configurable countdown with intuitive time inputs.
  - **Stopwatch Mode** – Start, pause, and reset tracking with millisecond precision.
- **Persistent mode selection** using `localStorage`, so the interface remembers your last view.
- **Responsive layout** that scales from kiosk displays to mobile devices.
- **Keyboard- and pointer-friendly controls** leveraging Flowbite components and custom Tailwind utilities.
- **Dark-mode ready** theme that respects user preferences.

## Technology Stack
- **Framework**: Next.js (App Router, client components)
- **UI Library**: React with Flowbite React components
- **Styling**: Tailwind CSS v4 + custom utility classes
- **Icons**: Lucide React
- **Fonts**: Handjet, Space Grotesk, Space Mono, Roboto Mono via `@fontsource`

## Project Structure
```
cl0ck/
├── app/
│   ├── components/        # Reusable UI building blocks for each mode
│   ├── globals.css        # Tailwind layer declarations & global styles
│   ├── layout.tsx         # Root layout, metadata, and font loading
│   └── page.tsx           # Main page with mode switching logic
├── public/                # Static assets (favicons, og images)
├── next.config.ts         # Next.js configuration
├── package.json           # Scripts and dependencies
└── README.md
```

## Getting Started
### Prerequisites
- Node.js **18.x** or **20.x** (Next.js 15 requirement)
- npm **9+** (or use `pnpm`, `yarn`, or `bun` with equivalent commands)
- Git (optional but recommended)

### Installation
```bash
# Clone the repository
git clone https://github.com/your-username/cl0ck.git
cd cl0ck

# Install dependencies
npm install
```

### Development Server
```bash
npm run dev
```
Then open [http://localhost:3000](http://localhost:3000) in your browser. Hot module reloading keeps the UI up to date while you edit source files.

### Production Build
```bash
npm run build
npm start
```
This compiles the app for production and serves it locally. Use `npm run build` during CI to ensure the project is production-ready.

## Usage Guide
- **Switch modes** via the left sidebar or the drawer on smaller screens.
- **Workout Mode**
  - Edit block names directly in the card headers.
  - Adjust work/rest durations with the segmented time inputs (hours/minutes/seconds).
  - Reorder blocks using the arrow buttons, duplicate with the copy icon, or remove with the trash icon.
  - Apply presets (Tabata or EMOM) from the dropdown, or add custom rounds with the “Round” button.
  - The configuration is logged to the console when “Start Workout” is pressed; integrate this with future APIs as needed.
- **Timer Mode** and **Stopwatch Mode** share the same time input controls, supporting both mouse and keyboard interactions.
- **Fullscreen experience**: use your browser’s fullscreen shortcut (`F11` on Windows/Linux, `Ctrl+Cmd+F` on macOS) for dedicated displays.

## Available Scripts
| Command | Description |
| ------- | ----------- |
| `npm run dev` | Start the Next.js development server on port 3000. |
| `npm run build` | Create an optimized production build. |
| `npm run start` | Serve the production build locally. |
| `npm run lint` | Run Next.js ESLint checks. |
| `npm run postinstall` | Applies the Flowbite React patch (automatically triggered by npm). |

## Styling & Accessibility
- Tailwind CSS layers are defined in `app/globals.css`. Extend component styles via utility classes or Tailwind plugins.
- Flowbite React provides accessible primitives with sensible ARIA attributes. When adding new components, follow the same accessibility conventions (labels, keyboard focus states, and color contrast).
- Fonts are self-hosted via `@fontsource`, ensuring offline availability and consistent typography.

## Testing & Quality
- Use `npm run lint` to lint the project. Integrate this command into CI pipelines.
- Add unit tests with your preferred framework (e.g., Vitest, Jest, React Testing Library) if you extend the project. No automated tests are currently bundled.

## Deployment
The project is compatible with any platform that supports Next.js 15:
- [Vercel](https://vercel.com/) (recommended; zero-config deployment)
- [Netlify](https://www.netlify.com/)
- Self-hosted environments or containerized deployments

For serverless platforms, ensure Node.js 18+ runtimes and enable the App Router during build.

## Security & Privacy
- The repository contains **no API keys, secrets, or environment variables**; all configuration is client-side.
- Timekeeping data is stored only in the browser (`localStorage`) and never transmitted to external services.
- When integrating external APIs, store credentials in environment variables (e.g., `.env.local`) that remain uncommitted.

## Roadmap
Planned enhancements include:
- Exportable workout configurations and multi-device sync
- Voice control integration via the Web Speech API
- Hardware triggers for IoT-driven workouts (e.g., Raspberry Pi GPIO)
- Session analytics and historical tracking

## Contributing
1. Fork the repository and create your feature branch from `main`.
2. Install dependencies with `npm install`.
3. Commit using conventional messages when possible (e.g., `feat: add interval preview`).
4. Run `npm run lint` before opening a pull request.
5. Submit a PR describing your changes and testing steps.

## License
This project has not specified a license. If you intend to publish or distribute it, add an appropriate license file (e.g., MIT, Apache 2.0).
