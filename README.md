# Lalexi Next.js Starter

A modern Next.js 15 starter template built with TypeScript, featuring a clean feature-based architecture and beautiful UI components.

## 🚀 Features

- **Next.js 15.5.2** with App Router
- **TypeScript** with strict mode enabled
- **Feature-based architecture** for scalable development
- **CSS Modules** for component-scoped styling
- **Static Site Generation (SSG)** for optimal performance
- **ESLint** configuration for code quality
- **Responsive design** that works on all devices
- **Modern UI components** with accessibility in mind

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── about/
│       └── page.tsx       # About page
├── features/              # Feature-based components
│   ├── home/
│   │   └── components/
│   │       ├── Hero/      # Hero section
│   │       └── Features/  # Features section
│   └── about/
│       └── components/
│           └── Mission/   # Mission section
├── shared/                # Shared components and utilities
│   └── components/
│       └── ui/
│           └── Button/    # Reusable Button component
├── styles/
│   └── globals.css        # Global styles
└── AGENTS.md              # Development guidelines
```

## 🛠️ Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🏗️ Architecture Principles

This starter follows a **feature-based architecture** that promotes:

- **Separation of concerns** - Each feature is self-contained
- **Scalability** - Easy to add new features without affecting existing ones
- **Reusability** - Shared components can be used across features
- **Maintainability** - Clear structure makes code easy to understand and modify

## 🎨 Styling

- **CSS Modules** for component-scoped styles
- **Global styles** in `styles/globals.css` for base styles
- **Responsive design** with mobile-first approach
- **Modern CSS** with flexbox and grid layouts

## 📱 Pages

- **Home** (`/`) - Hero section and features showcase
- **About** (`/about`) - Mission statement and company values

## 🔧 Development Guidelines

Please refer to `AGENTS.md` for detailed development guidelines, including:

- File naming conventions
- Component structure
- Import/export patterns
- TypeScript usage
- CSS Module patterns

## 🚀 Deployment

This project is configured for static export and can be deployed to:

- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- Any static hosting service

Build the project:
```bash
npm run build
```

The static files will be generated in the `out/` directory.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ using Next.js and TypeScript
