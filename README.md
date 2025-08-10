## What to do — React + TypeScript + Vite

A simple, fast, and user-friendly Todo app built with React, TypeScript, and Vite. It stores your tasks in the browser using localStorage and provides smooth keyboard interactions and a clean, modern UI powered by Tailwind CSS (via CDN for simplicity).

### Features

- **Add, edit, delete todos**: Persisted in localStorage
- **Keyboard friendly**:
  - **Enter** to add a new todo
  - **Enter** to save an edit
  - **Escape** to cancel editing
- **Responsive, accessible UI**: Clean spacing, clear affordances, and focus styles
- **Zero Tailwind build setup**: Tailwind via CDN for quick start

### Tech Stack

- **React** (with **TypeScript**)
- **Vite** for fast dev/build
- **Tailwind CSS** via CDN for styling
- **React Icons** for visual cues

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Run the app

```bash
npm run dev
```

Open the local URL printed in the terminal.

## Project Structure

```text
todotsx/
  ├─ src/
  │  ├─ components/
  │  │  ├─ TodoForm.tsx      # Add new todos (Enter or button)
  │  │  └─ TodoList.tsx      # List, edit, delete with keyboard support
  │  ├─ App.tsx              # App shell and layout
  │  ├─ TodoService.ts       # localStorage CRUD
  │  ├─ todo.ts              # Types
  │  └─ main.tsx             # React root
  └─ index.html              # Tailwind CDN and app root
```

## Keyboard & UX Details

- **Add new todo**: Focus starts on the input; press **Enter** or click **Add Todo**
- **Edit todo**: Click the edit icon
  - **Enter** saves the change
  - **Escape** cancels without saving
- **Delete todo**: Click the trash icon
- **Responsive**: Layout adapts from stacked (mobile) to inline controls (desktop)

## Styling Notes (Tailwind via CDN)

This project uses Tailwind through the CDN script in `index.html`, which is great for prototypes and small apps.

Pros:

- No build step or config needed
- Quick iteration

Trade-offs:

- Larger CSS payload than a proper build
- Limited customization (no plugins, no JIT configuration)

If you plan to grow this project, consider installing Tailwind via npm to enable tree-shaking, theming, plugins, and a smaller production CSS bundle.

## Available Scripts

- **dev**: Starts the Vite dev server
- **build**: Builds the app for production
- **preview**: Previews the production build locally

```bash
npm run dev
npm run build
npm run preview
```

## Future Improvements

- Completed state with checkboxes and filters (All / Active / Completed)
- Toast notifications for add/edit/delete
- Drag-and-drop sorting
- Tailwind npm setup with custom theme

## License

MIT — feel free to use this project as a starting point.
