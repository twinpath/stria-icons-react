# Stria Icons React

React components wrapper for Stria Icons.

Stria is a unified visual language of pixel-perfect SVG icons, built with absolute geometric precision and zero dependency bloat.

## Installation

Install the package via npm, pnpm, or yarn:

```bash
npm install @stria-icons/react
```

## Usage

Import the required icons as components:

```jsx
import { User, Home, Settings } from '@stria-icons/react';

function App() {
  return (
    <div>
      <User size={24} color="blue" />
      <Home size={20} />
      <Settings size={32} />
    </div>
  );
}
```

### Component Props

Each icon component accepts the following props:
- `size` (number | string): Sets both width and height (default: `24`).
- `color` (string): Sets the stroke/fill color (default: `currentColor`).
- Any standard SVG element attributes (e.g. `className`, `style`, `onClick`).

## Licenses

- Code (compiler toolchain, wrappers, build scripts): MIT License
- Icon designs (SVGs in `/icons` directory): CC BY 4.0
