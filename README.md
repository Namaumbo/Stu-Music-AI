# React + Vite + Chakra UI + Recoil + TailwindCSS Starter

This project is a modern React boilerplate configured with [Vite](https://vitejs.dev/), [Chakra UI](https://chakra-ui.com/), [Recoil](https://recoiljs.org/), and [Tailwind CSS](https://tailwindcss.com/).

## Features

- ⚡️ **Vite** for lightning-fast development
- 🎨 **Chakra UI** for accessible design systems
- 💾 **Recoil** for global state management
- 💎 **Tailwind CSS** for utility-first styling
- 🚀 Ready-to-use project structure

## Getting Started

### 1. Clone the repository

```bash
git clone <REPO_URL>
cd <project-directory>
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Start the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
├── src/
│   ├── main.jsx                  # app bootstrap (providers) + global CSS import
│   ├── app/                      # app shell: router/layout/global styles
│   │   ├── App.jsx
│   │   ├── layout/
│   │   └── styles/
│   ├── features/                 # feature modules (pages + components + state)
│   │   ├── home/
│   │   ├── albums/
│   │   ├── tracks/
│   │   ├── player/
│   │   └── voting/
│   ├── shared/                   # cross-cutting reusable code
│   │   ├── components/
│   │   └── api/
├── public/
├── vite.config.js
├── tailwind.config.js
├── package.json
└── README.md
```

### Conventions

- **App shell**: put global layout and routing in `src/app/`.
- **Features**: keep feature-specific UI/state in `src/features/<feature>/`.
- **Shared**: put reusable components/utilities in `src/shared/`.
- **Imports**: prefer the `@` alias (e.g. `@/features/player/...`) over deep relative paths.

## Configuration Highlights

- **Vite** handles fast refresh and optimized builds.
- **ChakraProvider** and **RecoilRoot** wrap the app in `src/main.jsx`.
- **Tailwind CSS** is loaded via PostCSS in `vite.config.js`.
- Path alias `@` resolves to `src/` for cleaner imports.

## Customization

- Customize Chakra theme in `/src/theme`.
- Extend or override Tailwind in `tailwind.config.js`.

## License

MIT
