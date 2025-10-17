# Project Architecture

## Quick Start Overview

**Stack:** Next.js 15.5.2 (Latest, App Router) • TypeScript • Tailwind CSS • SSG-first with dynamic capabilities

**Goal:** Simple, fast website starting with two static pages (index and about), scalable for future growth.

### Next.js 15 Benefits
- **Improved Performance**: Faster builds and smaller bundles
- **React 19 Support**: Ready for latest React features
- **Better Caching**: Enhanced static and dynamic caching
- **Turbopack**: Faster local development (stable)

## Project Structure (Feature-based Architecture)

### Starting Simple: Two Pages (Index & About)
```
lalexi-nextjs-2/
├── app/                      # Next.js App Router (routes only)
│   ├── layout.tsx           # Root layout with global providers
│   ├── page.tsx             # Homepage route (/)
│   ├── favicon.ico          # Site favicon
│   └── about/
│       └── page.tsx         # About page route (/about)
├── features/                 # Feature-based modules
│   ├── home/                # Homepage feature
│   │   └── components/      # Homepage-specific components
│   │       ├── Hero/
│   │       │   └── index.tsx
│   │       └── Features/
│   │           └── index.tsx
│   └── about/               # About page feature
│       └── components/      # About-specific components
│           ├── TeamSection/
│           │   └── index.tsx
│           └── Mission/
│               └── index.tsx
├── shared/                   # Shared across all features
│   ├── components/          # Generic reusable components
│   │   ├── ui/             # Basic UI elements
│   │   │   ├── Button/
│   │   │   │   ├── index.tsx
│   │   │   │   ├── Button.types.ts
│   │   │   │   └── Button.test.tsx
│   │   │   ├── Card/
│   │   │   ├── Input/
│   │   │   └── Modal/
│   │   └── layout/         # Layout components
│   │       ├── Header/
│   │       │   └── index.tsx
│   │       ├── Footer/
│   │       │   └── index.tsx
│   │       └── Navigation/
│   │           └── index.tsx
│   ├── hooks/               # Shared custom hooks
│   │   ├── useMediaQuery.ts
│   │   ├── useLocalStorage.ts
│   │   └── useDebounce.ts
│   ├── lib/                 # Utility functions & helpers
│   │   ├── utils/
│   │   │   ├── cn.ts       # className utility
│   │   │   ├── format.ts   # Formatting utilities
│   │   │   └── validation.ts
│   │   └── api/
│   │       └── client.ts   # API client setup
│   ├── types/               # Global TypeScript types
│   │   ├── global.d.ts
│   │   └── api.types.ts
│   └── constants/           # App-wide constants
│       ├── routes.ts
│       └── config.ts
├── styles/                   # Global styles only
│   └── globals.css          # Tailwind directives & custom styles
├── public/                   # Static assets
│   ├── images/
│   ├── fonts/
│   └── icons/
├── tests/                    # Global test setup
│   ├── setup.ts
│   └── mocks/
├── .env.local               # Environment variables
├── .eslintrc.json           # ESLint configuration
├── .gitignore               # Git ignore rules
├── .prettierrc              # Code formatting
├── tailwind.config.ts       # Tailwind CSS configuration
├── postcss.config.mjs       # PostCSS configuration
├── next.config.ts           # Next.js configuration
├── package.json             # Dependencies & scripts
├── tsconfig.json            # TypeScript configuration
├── README.md                # Project documentation
└── ARCHITECTURE.md          # This file
```

### Why Feature-based Structure?

**Benefits:**
- **Scalability**: Each feature is self-contained and can grow independently
- **Team Collaboration**: Different teams can work on different features without conflicts
- **Code Organization**: Related code stays together (components, hooks, types, utils)
- **Easy Refactoring**: Features can be moved, deleted, or extracted easily
- **Clear Dependencies**: Shared code is explicitly in `shared/`, feature code is isolated
- **Better Testing**: Feature-specific tests stay with the feature

**Key Principles:**
1. **App directory is thin**: Only contains routes that import from features
2. **Features are independent**: Each feature folder contains everything it needs
3. **Shared is explicit**: Only truly shared code goes in shared/
4. **Co-location**: Keep related files together (component + styles + tests + types)

## Tailwind CSS Best Practices

### Why Tailwind CSS?

**Benefits:**
- ✅ Utility-first approach for rapid development
- ✅ No naming conflicts or specificity issues
- ✅ Built-in design system with consistent spacing, colors, etc.
- ✅ Responsive design with simple modifier syntax
- ✅ Tree-shaking removes unused CSS automatically
- ✅ No context switching between files

**Key Principles:**
- Use utility classes directly in components
- Extend Tailwind config for custom design tokens
- Use `@layer` directives for custom styles
- Compose utilities for complex, reusable components

### Tailwind Configuration Strategy

#### 1. **tailwind.config.ts** (Main Configuration)
```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#3b82f6',
          secondary: '#8b5cf6',
        },
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
};
export default config;
```

#### 2. **globals.css** (Tailwind Directives & Custom Layers)
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom base styles */
@layer base {
  body {
    @apply text-gray-900 bg-white;
  }
  h1 {
    @apply text-4xl font-bold;
  }
}

/* Custom component classes (when needed) */
@layer components {
  .btn-primary {
    @apply px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700;
  }
}

/* Custom utilities */
@layer utilities {
  .text-shadow {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }
}
```

#### 3. **Import Strategy in layout.tsx**
```tsx
// app/layout.tsx
import '@/styles/globals.css'
```

### File Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `Button.tsx`, `HeaderNav.tsx` |
| Global CSS | kebab-case | `globals.css` |
| Utilities | camelCase | `formatDate.ts`, `apiClient.ts` |
| Types | PascalCase.types.ts | `User.types.ts` |
| Hooks | camelCase with 'use' | `useAuth.ts`, `useTheme.ts` |
| Config Files | kebab-case | `tailwind.config.ts`, `postcss.config.mjs` |

## Core Configuration Files

### `package.json`
```json
{
  "name": "lalexi-nextjs-2",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "15.5.2",
    "react": "^18",
    "react-dom": "^18"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "autoprefixer": "^10",
    "postcss": "^8",
    "tailwindcss": "^3",
    "typescript": "^5",
    "eslint": "^8",
    "eslint-config-next": "15.5.2"
  }
}
```

### `tsconfig.json`
```json
{
  "compilerOptions": {
    "strict": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"],
      "@/features/*": ["./features/*"],
      "@/shared/*": ["./shared/*"],
      "@/styles/*": ["./styles/*"]
    }
  }
}
```

### `next.config.ts`
```typescript
import type { NextConfig } from 'next'

const config: NextConfig = {
  reactStrictMode: true,
  // output: 'export' // Uncomment for pure static export
}

export default config
```

## Rendering Strategy

### Current: Static Site Generation (SSG)
- Index and about pages are pre-built at build time
- Perfect for content that doesn't change often
- Fastest possible page loads
- No server required for hosting

### Future Options (When Needed)
- **Dynamic Pages**: Add API routes in `app/api/` when you need backend functionality
- **ISR**: Add `export const revalidate = 60` for pages that need periodic updates
- **SSR**: Remove `output: 'export'` from config for server-side features

## Getting Started

### 1. Initialize Project
```bash
# Using Next.js 15.5.2 (latest) with Tailwind CSS
npx create-next-app@latest . --typescript --app --tailwind --eslint
```

### 2. Create Simple Structure for Two Pages
```bash
# Create feature directories for index and about pages
mkdir -p features/home/components features/about/components

# Create shared directories for reusable components
mkdir -p shared/components/ui shared/components/layout
mkdir -p shared/hooks shared/lib/utils shared/types

# Create style and public directories
mkdir -p styles public/images

# Optional: Create test directory
mkdir -p tests
```

### 3. Install Dependencies
```bash
npm install
# Tailwind CSS and its dependencies are already included
# Optional: Add utility for className management (if needed)
npm install clsx
```

### 4. Start Development
```bash
npm run dev
```

Visit:
- `http://localhost:3000` - Homepage
- `http://localhost:3000/about` - About page

## Quick Start: Two-Page Implementation

### What You'll Build
- **Homepage** (`/`): Welcome message with hero section
- **About Page** (`/about`): Information about your project/company

### Minimal File Structure to Start
```
lalexi-nextjs-2/
├── app/
│   ├── layout.tsx           # Shared layout
│   ├── page.tsx             # Homepage
│   └── about/
│       └── page.tsx         # About page
├── features/
│   ├── home/
│   │   └── components/      # Homepage components
│   └── about/
│       └── components/      # About page components
├── shared/
│   └── components/
│       └── layout/          # Header, Footer
├── styles/
│   └── globals.css          # Global styles
└── [config files]           # package.json, tsconfig.json, etc.
```

### Why Start Simple?
1. **Fast Launch**: Get your site live quickly
2. **Learn the Structure**: Understand the pattern before scaling
3. **Easy to Extend**: Add features without refactoring
4. **Production-Ready**: This simple structure is already production-grade

## Feature-based Architecture Benefits

### 1. **Scalability**
- Features can grow independently without affecting others
- Easy to add/remove features without breaking the app
- Clear boundaries prevent code sprawl

### 2. **Team Collaboration**
- Multiple developers can work on different features simultaneously
- Clear ownership of code (feature teams own their features)
- Reduced merge conflicts

### 3. **Maintainability**
- Related code stays together (easier to understand context)
- Changes to a feature don't ripple through the codebase
- Easy to onboard new developers (clear structure)

### 4. **Reusability**
- Shared components are explicitly shared (in `shared/`)
- Features can be extracted into packages
- Components can be promoted from feature-specific to shared

### 5. **Testing**
- Feature tests stay with features
- Easier to test in isolation
- Clear test boundaries

## Best Practices

### DO's ✅
- **Keep features independent**: Features should not import from other features
- **Use shared explicitly**: Only truly reusable code goes in shared/
- **Co-locate related files**: Keep styles, tests, and types with components
- **Thin route files**: Routes should only import and compose from features
- **Clear naming**: Use descriptive names that reflect the feature's purpose

### DON'Ts ❌
- **Don't cross-import features**: Use shared/ for cross-feature code
- **Don't put business logic in routes**: Keep it in features
- **Don't over-abstract early**: Start feature-specific, promote to shared later
- **Don't mix concerns**: Keep features focused on their domain
- **Don't forget types**: Always add TypeScript types for better DX

## Page Templates

### Root Layout (app/layout.tsx)
```typescript
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '@/shared/components/layout/Header'
import { Footer } from '@/shared/components/layout/Footer'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | Lalexi',
    default: 'Lalexi',
  },
  description: 'Your website description',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
```

### Homepage Route (app/page.tsx)
```typescript
import type { Metadata } from 'next'
import { Hero } from '@/features/home/components/Hero'
import { Features } from '@/features/home/components/Features'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to our website',
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
    </main>
  )
}
```

### Feature Component Example (features/home/components/Hero/index.tsx)
```typescript
import { Button } from '@/shared/components/ui/Button'

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <h1 className="text-5xl font-bold text-gray-900 mb-4">
        Hello World Index
      </h1>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl text-center">
        Welcome to our feature-based architecture
      </p>
      <Button>Get Started</Button>
    </section>
  )
}
```

### Shared Component Example (shared/components/ui/Button/index.tsx)
```typescript
import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

export function Button({ 
  children, 
  variant = 'primary',
  size = 'md',
  className = '',
  ...props 
}: ButtonProps) {
  const baseStyles = "font-semibold rounded transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
  
  const variantStyles = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500",
    secondary: "bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500"
  }
  
  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  }
  
  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
```

### About Page Route (app/about/page.tsx)
```typescript
import type { Metadata } from 'next'
import { TeamSection } from '@/features/about/components/TeamSection'
import { Mission } from '@/features/about/components/Mission'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about us',
}

export default function AboutPage() {
  return (
    <main>
      <Mission />
      <TeamSection />
    </main>
  )
}
```

## Deployment

### Option 1: Static Export (Current)
Perfect for static content sites:
```bash
npm run build
# Creates 'out/' directory with static files
```

### Option 2: Node.js Server (Future)
When you need dynamic features:
- API routes
- Server-side rendering
- Middleware
- Real-time features

### Render.com Setup
1. Connect GitHub repository
2. Choose "Static Site" service
3. Build Command: `npm ci && npm run build`
4. Publish Directory: `.next` (or `out` if using export)

## Development Guidelines

### Feature Module Structure

Each feature follows this structure:
```
features/[feature-name]/
├── components/          # Feature-specific components (styled with Tailwind)
│   └── ComponentName/
│       ├── index.tsx
│       └── ComponentName.test.tsx
├── hooks/              # Feature-specific hooks
├── lib/                # Feature-specific utilities
├── types/              # Feature-specific types
├── api/                # Feature-specific API calls
├── store/              # Feature-specific state (if needed)
└── constants/          # Feature-specific constants
```

### Shared Module Structure

```
shared/
├── components/
│   ├── ui/            # Reusable UI components
│   └── layout/        # App-wide layout components
├── hooks/             # Reusable hooks
├── lib/               # Shared utilities
├── types/             # Shared type definitions
└── constants/         # Shared constants
```

### Import Aliases
Use specific aliases for clean, explicit imports:
```typescript
// Feature imports
import { Hero } from '@/features/home/components/Hero'
import { TeamSection } from '@/features/about/components/TeamSection'

// Shared imports
import { Button } from '@/shared/components/ui/Button'
import { Header } from '@/shared/components/layout/Header'
import { useMediaQuery } from '@/shared/hooks/useMediaQuery'
import { formatDate } from '@/shared/lib/utils/format'
import type { ApiResponse } from '@/shared/types/api.types'

// Style imports
import '@/styles/globals.css'
```

### Environment Variables
- Public (client): `NEXT_PUBLIC_API_URL`
- Private (server): `DATABASE_URL`

## Quick Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Check code quality |
| `npm run type-check` | Verify TypeScript types |

## Implementation Roadmap

### Phase 1: Foundation (Start Here)
1. ✅ Set up feature-based architecture
2. ⬜ Create basic layout components (Header, Footer)
3. ⬜ Implement homepage with Hero section
4. ⬜ Implement about page with content sections
5. ⬜ Add navigation between pages
6. ⬜ Configure Tailwind CSS and global styles

### Phase 2: Enhancement
1. ⬜ Implement shared hooks (useMediaQuery, useLocalStorage)
2. ⬜ Add loading and error states
3. ⬜ Implement SEO optimizations
4. ⬜ Add more UI components as needed
5. ⬜ Optimize performance (images, fonts)

### Phase 3: Growth
1. ⬜ Add new features/pages as needed
2. ⬜ Set up API client structure (when needed)
3. ⬜ Implement dynamic routes (if required)
4. ⬜ Add analytics and monitoring
5. ⬜ Consider state management (if complexity grows)

## Migration Guide

### From Simple Structure to Feature-based:
1. Create `features/` and `shared/` directories
2. Move page-specific components to respective features
3. Move reusable components to `shared/components/`
4. Update import paths to use new aliases
5. Style components using Tailwind utility classes

### Adding a New Page/Feature:
1. Create feature folder: `features/[feature-name]/`
2. Add feature components styled with Tailwind
3. Create route in `app/` that imports from feature
4. Add feature-specific types, hooks, and utilities as needed
5. Update navigation to include new page


