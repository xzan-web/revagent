# LLM Copilot Development Guide

## Purpose
This document provides instructions for AI assistants, copilots, and LLM agents when working on this Next.js project. Follow these guidelines to maintain consistency with the established architecture.

## Project Context

- **Framework**: Next.js 15.5.2 (latest) with App Router
- **Language**: TypeScript (strict mode)
- **Architecture**: Feature-based structure
- **Current Scope**: Two pages (index and about)
- **Styling**: CSS Modules
- **Rendering**: Static Site Generation (SSG)

## Critical Rules

### 1. ALWAYS Follow Feature-based Structure

```
✅ CORRECT:
features/home/components/Hero/index.tsx
features/about/components/Mission/index.tsx
shared/components/ui/Button/index.tsx

❌ WRONG:
app/components/Hero.tsx
components/Hero.tsx
src/Hero.tsx
```

### 2. Route Files Must Be Thin

```typescript
// ✅ CORRECT: app/page.tsx
import { Hero } from '@/features/home/components/Hero'
import { Features } from '@/features/home/components/Features'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
    </main>
  )
}

// ❌ WRONG: Don't put business logic in route files
export default function HomePage() {
  const [data, setData] = useState() // NO!
  // Complex logic here... NO!
  return <main>...</main>
}
```

### 3. Import Paths Must Use Aliases

```typescript
// ✅ CORRECT:
import { Button } from '@/shared/components/ui/Button'
import { Hero } from '@/features/home/components/Hero'
import '@/styles/globals.css'

// ❌ WRONG:
import { Button } from '../../../shared/components/ui/Button'
import { Hero } from './features/home/components/Hero'
```

### 4. CSS Must Use Modules

```typescript
// ✅ CORRECT:
import styles from './Hero.module.css'
<div className={styles.hero}>

// ❌ WRONG:
import './Hero.css'
<div className="hero">
```

## File Creation Guidelines

### When Creating a New Component

1. **Determine Location**:
   - Is it used by multiple features? → `shared/components/`
   - Is it specific to one page? → `features/[page]/components/`
   - Is it a layout element? → `shared/components/layout/`

2. **Create Component Folder**:
```bash
# For a new Button component in shared
mkdir -p shared/components/ui/Button
touch shared/components/ui/Button/index.tsx
touch shared/components/ui/Button/Button.module.css
```

3. **Component Template**:
```typescript
// shared/components/ui/Button/index.tsx
import styles from './Button.module.css'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

export function Button({ children, onClick, variant = 'primary' }: ButtonProps) {
  return (
    <button 
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
```

### When Creating a New Page

1. **Create Route File**:
```bash
# For a new contact page
mkdir -p app/contact
touch app/contact/page.tsx
```

2. **Create Feature Structure**:
```bash
mkdir -p features/contact/components
```

3. **Page Template**:
```typescript
// app/contact/page.tsx
import type { Metadata } from 'next'
import { ContactForm } from '@/features/contact/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with us',
}

export default function ContactPage() {
  return (
    <main>
      <ContactForm />
    </main>
  )
}
```

## Code Patterns

### Component Exports

```typescript
// ✅ Named exports for components
export function Button() { }

// ❌ Avoid default exports for components
export default Button
```

### TypeScript Usage

```typescript
// ✅ Always use TypeScript interfaces
interface Props {
  title: string
  count: number
}

// ✅ Use type for unions/intersections
type Variant = 'primary' | 'secondary'

// ❌ Don't use 'any'
const data: any = fetch() // NO!
```

### CSS Module Patterns

```css
/* Button.module.css */

/* ✅ Use camelCase for class names */
.button {
  padding: 8px 16px;
}

.buttonPrimary {
  background: blue;
}

/* ❌ Avoid kebab-case in CSS modules */
.button-primary { /* Will need bracket notation in JS */
  background: blue;
}
```

### State Management

```typescript
// ✅ Keep state close to where it's used
function Component() {
  const [local, setLocal] = useState()
  return <div>...</div>
}

// ❌ Don't create global state prematurely
// Only add state management when actually needed
```

## DO's and DON'Ts

### DO's ✅

1. **DO** keep components small and focused
2. **DO** co-locate tests with components
3. **DO** use TypeScript strict mode
4. **DO** follow the existing folder structure
5. **DO** use CSS Modules for component styles
6. **DO** keep route files thin (composition only)
7. **DO** use semantic HTML elements
8. **DO** add proper TypeScript types
9. **DO** use Server Components by default
10. **DO** follow accessibility best practices

### DON'Ts ❌

1. **DON'T** import from other features (use shared instead)
2. **DON'T** put business logic in route files
3. **DON'T** use inline styles (use CSS Modules)
4. **DON'T** create files outside the defined structure
5. **DON'T** use `any` type in TypeScript
6. **DON'T** create global CSS for component-specific styles
7. **DON'T** use default exports for components
8. **DON'T** add "use client" unless necessary
9. **DON'T** create deeply nested component structures
10. **DON'T** ignore ESLint warnings

## Common Tasks

### Task: Add a New UI Component

```bash
# 1. Create component structure
mkdir -p shared/components/ui/Card
touch shared/components/ui/Card/index.tsx
touch shared/components/ui/Card/Card.module.css

# 2. Implement component
# 3. Export from index
# 4. Import where needed using @/shared/components/ui/Card
```

### Task: Add Content to Homepage

```bash
# 1. Create component in feature
mkdir -p features/home/components/NewSection
touch features/home/components/NewSection/index.tsx
touch features/home/components/NewSection/NewSection.module.css

# 2. Import in app/page.tsx
# 3. Add to page composition
```

### Task: Add Global Styles

```bash
# 1. Add to styles/globals.css for truly global styles
# 2. Or create new file in styles/ and import in app/layout.tsx
# 3. Never add component-specific styles globally
```

### Task: Add a Shared Hook

```bash
# 1. Create in shared/hooks/
touch shared/hooks/useWindowSize.ts

# 2. Export named function starting with 'use'
# 3. Import using @/shared/hooks/useWindowSize
```

## File Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase folder & file | `Button/index.tsx` |
| CSS Modules | PascalCase.module.css | `Button.module.css` |
| Hooks | camelCase with 'use' prefix | `useAuth.ts` |
| Utilities | camelCase | `formatDate.ts` |
| Types | PascalCase.types.ts | `User.types.ts` |
| Routes | lowercase folders | `app/about/page.tsx` |

## Quality Checklist

Before completing any task, verify:

- [ ] Code follows the feature-based structure
- [ ] TypeScript types are properly defined
- [ ] CSS uses modules (not global styles)
- [ ] Imports use path aliases (@/)
- [ ] Components are in the correct location
- [ ] No business logic in route files
- [ ] Code passes ESLint checks
- [ ] Accessibility is considered
- [ ] Component is reusable where appropriate
- [ ] File naming follows conventions

## Common Mistakes to Avoid

1. **Creating app/components/** - Use features/ or shared/components/
2. **Using relative imports** - Always use @/ aliases
3. **Mixing concerns** - Keep features independent
4. **Over-engineering** - Start simple, refactor when needed
5. **Ignoring TypeScript** - Always add proper types
6. **Global styles for components** - Use CSS Modules
7. **Large route files** - Keep them thin, logic in features
8. **Cross-feature imports** - Use shared/ for shared code
9. **Premature optimization** - Build working code first
10. **Skipping the structure** - Always follow the architecture

## When in Doubt

1. Check ARCHITECTURE.md for structure guidelines
2. Look at existing code for patterns
3. Keep it simple - don't over-engineer
4. Follow React and Next.js best practices
5. Prioritize readability and maintainability

## Remember

- This is a **production-grade** architecture
- Start simple (2 pages) but think scalable
- Every file has a proper place
- Consistency is key
- The structure is designed to grow with the project

---

*Last Updated: Follow these guidelines to maintain code quality and consistency across the project.*
