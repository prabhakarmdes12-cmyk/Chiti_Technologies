# @chiti/ui

[![NPM Version](https://img.shields.io/npm/v/@chiti/ui.svg)](https://www.npmjs.com/package/@chiti/ui)
[![License](https://img.shields.io/npm/l/@chiti/ui.svg)](https://github.com/prabhakarmdes12-cmyk/chiti_technologies_Design_System_v3/blob/main/LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)

Enterprise-grade React components with haptic audio feedback and 3D physics. Built for modern SaaS applications.

## ✨ Features

- 🎵 **Haptic Audio Engine** - Premium sound feedback on interactions
- 🎭 **3D Physics** - Card tilt effects and smooth animations
- 🎨 **Design System** - Complete token architecture (Primitive → Semantic → Component)
- 📱 **Mobile Optimized** - Touch-friendly interactions
- ♿ **Accessible** - WCAG compliant components
- 🔧 **TypeScript** - Full type safety and IntelliSense support
- 🎯 **Polymorphic** - Single components work as buttons, links, or custom elements

## 📦 Installation

```bash
npm install @chiti/ui
```

**Peer Dependencies:** React 18+, React DOM 18+

## 🚀 Quick Start

```tsx
import React from 'react';
import { ChitiButton, ChitiCard } from '@chiti/ui';

function App() {
  return (
    <ChitiCard tilt={true}>
      <h3>Server Analytics</h3>
      <p>Real-time monitoring dashboard</p>

      <ChitiButton
        variant="cinematic"
        audioHapticTick={true}
        style={{ width: '100%' }}
      >
        Restart Node
      </ChitiButton>
    </ChitiCard>
  );
}

export default App;
```

## 🧩 Components

### Core Components

| Component | Description | Props |
|-----------|-------------|-------|
| `ChitiButton` | Polymorphic button with haptic feedback | `variant`, `audioHapticTick`, `as` |
| `ChitiCard` | Card with 3D tilt physics | `tilt`, `variant` |
| `ChitiBadge` | Status indicators | `variant`, `size` |
| `ChitiInput` | Form input fields | `variant`, `error`, `disabled` |
| `ChitiToggle` | Switch component | `checked`, `onChange` |
| `ChitiSkeleton` | Loading states | `height`, `width`, `borderRadius` |

### Advanced Features

- **Audio Haptic Feedback** - Premium tick sounds on interactions
- **3D Card Physics** - Mouse-following tilt effects
- **Theme Support** - Dark/light mode switching
- **Density Scaling** - Compact, default, spacious variants
- **Motion System** - Smooth 150ms cubic-bezier animations

## 🎨 Design System

### Token Architecture
```
Primitive Tokens → Semantic Tokens → Component Tokens
```

### Available Themes
- **Dark Mode** (Default) - Enterprise SaaS aesthetic
- **Light Mode** - Clean, professional appearance

### Density Variants
- **Compact** - High-density interfaces
- **Default** - Standard spacing
- **Spacious** - Generous padding for forms

## 📚 Documentation

### Live Demo
Explore all components: [https://chitiusdv30.vercel.app](https://chitiusdv30.vercel.app)

### Component API
Detailed API documentation available at the live demo.

## 🔧 Development

```bash
# Install dependencies
npm install

# Start development build
npm run dev

# Build for production
npm run build

# Run linting
npm run lint
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](https://github.com/prabhakarmdes12-cmyk/chiti_technologies_Design_System_v3/blob/main/CONTRIBUTING.md).

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-component`)
3. Commit your changes (`git commit -m 'Add amazing component'`)
4. Push to the branch (`git push origin feature/amazing-component`)
5. Open a Pull Request

## 📄 License

MIT © [Chiti Technologies](https://chitiusdv30.vercel.app)

## 🌟 About

Built by [Chiti Studio](https://portfolio2026-ruby.vercel.app/) - Enterprise design system for modern SaaS applications. Our proprietary architecture combines visual excellence with functional innovation.

**Live Demo:** [Explore Components](https://chitiusdv30.vercel.app/)

**Follow us:** [@chititech](https://twitter.com/chititech)

---

*Making enterprise software feel premium since 2026*