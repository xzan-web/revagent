# LLM Copilot Development Guide

## Purpose
This document provides instructions for AI assistants, copilots, and LLM agents when working on this Next.js project. Follow these guidelines to maintain consistency with the established architecture.

## Project Context

- **Framework**: Next.js 16.3.6 (latest stable) with App Router and React 19.3
- **Language**: TypeScript (strict mode)
- **Architecture**: Feature-based structure
- **Styling**: Tailwind CSS v4.3.3 (latest stable)
- **Purpose**: Cursor AI-optimized starter for rapid landing page development
- **Content-Driven**: Uses markdown files to generate components
- **Component Library**: Pre-built marketing sections (Hero, Features, Pricing, Testimonials, CTA)

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

### 4. Styling with Tailwind CSS

```typescript
// ✅ CORRECT: Use Tailwind utility classes
<div className="flex flex-col items-center justify-center min-h-screen">

// ✅ CORRECT: Compose multiple utilities
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">

// ❌ WRONG: Don't use inline styles
<div style={{ display: 'flex', flexDirection: 'column' }}>

// ❌ WRONG: Don't create separate CSS files (use Tailwind utilities)
import './Hero.css'
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
```

3. **Component Template**:
```typescript
// shared/components/ui/Button/index.tsx
interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

export function Button({ children, onClick, variant = 'primary' }: ButtonProps) {
  const baseStyles = "font-bold py-2 px-4 rounded transition-colors"
  const variantStyles = {
    primary: "bg-blue-500 hover:bg-blue-700 text-white",
    secondary: "bg-gray-500 hover:bg-gray-700 text-white"
  }
  
  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]}`}
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

### Tailwind CSS Patterns

```typescript
// ✅ Use utility classes for styling
<div className="p-4 bg-blue-500 text-white rounded-lg">

// ✅ Group related utilities logically
<button className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded">

// ✅ Use responsive utilities
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

// ✅ Compose utilities into reusable variables for complex components
const cardStyles = "bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow"
<div className={cardStyles}>

// ❌ Don't use inline styles
<div style={{ padding: '16px', backgroundColor: 'blue' }}>
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
5. **DO** use Tailwind utility classes for styling
6. **DO** keep route files thin (composition only)
7. **DO** use semantic HTML elements
8. **DO** add proper TypeScript types
9. **DO** use Server Components by default
10. **DO** follow accessibility best practices

### DON'Ts ❌

1. **DON'T** import from other features (use shared instead)
2. **DON'T** put business logic in route files
3. **DON'T** use inline styles (use Tailwind utilities)
4. **DON'T** create files outside the defined structure
5. **DON'T** use `any` type in TypeScript
6. **DON'T** create custom CSS files (use Tailwind or extend in config)
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

# 2. Implement component using Tailwind classes
# 3. Export from index
# 4. Import where needed using @/shared/components/ui/Card
```

### Task: Add Content to Homepage

```bash
# 1. Create component in feature
mkdir -p features/home/components/NewSection
touch features/home/components/NewSection/index.tsx

# 2. Style with Tailwind utilities
# 3. Import in app/page.tsx
# 4. Add to page composition
```

### Task: Extend Tailwind Configuration

```bash
# 1. Add custom values to tailwind.config.ts
# 2. Extend theme with custom colors, spacing, etc.
# 3. Add custom utilities in @layer utilities in globals.css
# 4. For base styles, use @layer base in globals.css
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
| Hooks | camelCase with 'use' prefix | `useAuth.ts` |
| Utilities | camelCase | `formatDate.ts` |
| Types | PascalCase.types.ts | `User.types.ts` |
| Routes | lowercase folders | `app/about/page.tsx` |
| Config Files | kebab-case | `tailwind.config.ts` |

## Quality Checklist

Before completing any task, verify:

- [ ] Code follows the feature-based structure
- [ ] TypeScript types are properly defined
- [ ] Styling uses Tailwind utility classes
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
6. **Using inline styles** - Use Tailwind utility classes
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

---

## Content-Driven Development

This template is optimized for content-driven development where landing pages are generated from markdown files.

### How It Works

1. **Content files** (`.content/*.md`) define page structure and content
2. **AI reads** the markdown and frontmatter metadata
3. **Components are selected** based on section types
4. **Props are extracted** from content
5. **Page is generated** with proper imports and composition

### Reading `.content/` Files

When generating pages from content files:

**1. Parse Frontmatter**
```markdown
---
section: hero
variant: centered
theme: gradient
image: /hero.jpg
---
```

Extract metadata:
- `section` → Which component type (hero, features, pricing, testimonials, cta)
- `variant` → Which variant (simple, centered, split, grid, list)
- `theme` → Color theme
- Additional props (image, columns, etc.)

**2. Parse Content**

- `# Headline` → headline prop
- Paragraph text → subtitle/description prop
- `[Button Text](URL)` → buttons array
- `### Section Title` → Item titles
- List items (`-`, bullet points) → Features or benefits
- `**Bold text**` → Emphasized content or labels

**3. Map to Component**

Based on section + variant:
```typescript
// section: hero + variant: centered
import { HeroCentered } from '@/shared/components/marketing'

// section: features + variant: grid
import { FeaturesGrid } from '@/shared/components/marketing'

// section: pricing + variant: simple
import { PricingSimple } from '@/shared/components/marketing'
```

### Component Selection Logic

| Frontmatter | Component | Use When |
|-------------|-----------|----------|
| `section: hero` + `variant: simple` | `HeroSimple` | Simple centered hero |
| `section: hero` + `variant: centered` | `HeroCentered` | Hero with optional image |
| `section: hero` + `variant: split` | `HeroSplit` | Side-by-side layout |
| `section: features` + `variant: grid` | `FeaturesGrid` | 2-4 column grid |
| `section: features` + `variant: list` | `FeaturesList` | Alternating list |
| `section: pricing` + `variant: simple` | `PricingSimple` | 3-tier pricing |
| `section: pricing` + `variant: comparison` | `PricingComparison` | Comparison table |
| `section: testimonials` + `variant: grid` | `TestimonialsGrid` | Grid of testimonials |
| `section: testimonials` + `variant: slider` | `TestimonialsSlider` | Carousel |
| `section: cta` + `variant: simple` | `CTASimple` | Centered CTA |
| `section: cta` + `variant: split` | `CTASplit` | Split layout CTA |

### Props Extraction from Markdown

**Hero Section:**
```markdown
# Build Better Products Faster
Ship features your customers love.
[Get Started](#) [View Demo](#)
**Trusted by 10,000+ teams**
```

Extracts to:
```typescript
{
  headline: "Build Better Products Faster",
  subtitle: "Ship features your customers love.",
  buttons: [
    { text: "Get Started", href: "#" },
    { text: "View Demo", href: "#", variant: "secondary" }
  ],
  trustIndicator: "Trusted by 10,000+ teams"
}
```

**Features Section:**
```markdown
## Why Choose Us
Everything you need to succeed.

### Fast Development
Build 10x faster with our platform.

### Secure & Compliant
Enterprise-grade security included.
```

Extracts to:
```typescript
{
  title: "Why Choose Us",
  subtitle: "Everything you need to succeed.",
  features: [
    { title: "Fast Development", description: "Build 10x faster with our platform." },
    { title: "Secure & Compliant", description: "Enterprise-grade security included." }
  ]
}
```

**Pricing Section:**
```markdown
## Simple Pricing

### Starter
$0/month
Perfect for individuals.
- Feature 1
- Feature 2
[Get Started](#)

### Pro
$29/month
**MOST POPULAR**
For growing businesses.
- Feature 1
- Feature 2
[Start Trial](#)
```

Extracts to:
```typescript
{
  title: "Simple Pricing",
  tiers: [
    {
      name: "Starter",
      price: "$0",
      period: "month",
      description: "Perfect for individuals.",
      features: ["Feature 1", "Feature 2"],
      cta: { text: "Get Started", href: "#" }
    },
    {
      name: "Pro",
      price: "$29",
      period: "month",
      description: "For growing businesses.",
      features: ["Feature 1", "Feature 2"],
      cta: { text: "Start Trial", href: "#" },
      highlighted: true,
      badge: "MOST POPULAR"
    }
  ]
}
```

---

## Component Generation Workflow

### Step-by-Step Process

**Step 1: Parse Content File**

When user says: "Generate a landing page from .content/example.md"

1. Read the file content
2. Extract frontmatter (YAML between `---` markers)
3. Parse markdown body sections (separated by `---`)
4. Identify section types from content structure

**Step 2: Select Appropriate Component Variant**

For each section:
1. Identify section type (Hero, Features, Pricing, etc.)
2. Determine variant from frontmatter or content structure
3. Select matching component from `shared/components/marketing/`

**Step 3: Extract and Map Data to Props**

For each section:
1. Parse headlines, subheadings, paragraphs
2. Extract lists, links, and metadata
3. Create data object matching component prop types
4. Reference `shared/types/marketing.types.ts` for prop interfaces

**Step 4: Generate Page Composition**

Create route file in `app/[page]/page.tsx`:

```typescript
import type { Metadata } from 'next'
import { HeroCentered, FeaturesGrid, CTASimple } from '@/shared/components/marketing'

export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description',
}

export default function Page() {
  return (
    <main>
      <HeroCentered {...heroData} />
      <FeaturesGrid {...featuresData} />
      <CTASimple {...ctaData} />
    </main>
  )
}
```

**Step 5: Add to Route File**

1. Import components from `@/shared/components/marketing`
2. Import types if needed from `@/shared/types/marketing.types`
3. Define data objects with extracted content
4. Pass as props to components
5. Ensure metadata is set correctly

### Example Complete Generation

**Input:** `.content/landing.md`
```markdown
---
page: product-launch
sections:
  - hero-centered
  - features-grid
  - cta-simple
---

# Launch Your Product Faster
Build and ship in weeks, not months.
[Start Free Trial](#) [View Demo](#)

---

## Powerful Features

### Fast Development
Ship 10x faster.

### Secure by Default
Enterprise-grade security.

### Scales Automatically
Handle millions of users.

---

## Ready to Build?
Join thousands of developers.
[Get Started Free](#)
```

**Output:** `app/product-launch/page.tsx`
```typescript
import type { Metadata } from 'next'
import { HeroCentered, FeaturesGrid, CTASimple } from '@/shared/components/marketing'

export const metadata: Metadata = {
  title: 'Product Launch',
  description: 'Launch Your Product Faster',
}

export default function ProductLaunchPage() {
  return (
    <main>
      <HeroCentered
        headline="Launch Your Product Faster"
        subtitle="Build and ship in weeks, not months."
        buttons={[
          { text: 'Start Free Trial', href: '#' },
          { text: 'View Demo', href: '#', variant: 'secondary' },
        ]}
        theme="gradient"
      />
      
      <FeaturesGrid
        title="Powerful Features"
        features={[
          { title: 'Fast Development', description: 'Ship 10x faster.' },
          { title: 'Secure by Default', description: 'Enterprise-grade security.' },
          { title: 'Scales Automatically', description: 'Handle millions of users.' },
        ]}
        columns={3}
      />
      
      <CTASimple
        headline="Ready to Build?"
        description="Join thousands of developers."
        buttons={[{ text: 'Get Started Free', href: '#' }]}
        theme="blue"
      />
    </main>
  )
}
```

---

## Marketing Section Patterns

### Hero Section Guidelines

**Based on Tailwind UI Blocks patterns:**

**Simple Hero:**
- Centered content
- Large headline (text-5xl md:text-6xl)
- Subtitle below
- 1-2 CTA buttons
- Optional trust indicator
- Use for: Straightforward value propositions

**Centered Hero:**
- All of Simple Hero
- Plus: Large image/screenshot below
- Use for: Product screenshots, visual impact

**Split Hero:**
- Side-by-side layout (grid md:grid-cols-2)
- Content on one side, image on other
- Configurable image position
- Use for: Feature highlights with visual context

**Common Props:**
```typescript
{
  headline: string  // Main value proposition
  subtitle: string  // Supporting text
  buttons: CTAButton[]  // 1-2 action buttons
  theme: 'light' | 'dark' | 'gradient' | 'blue' | 'purple'
  trustIndicator?: string  // Social proof
  image?: string  // For centered/split
  imagePosition?: 'left' | 'right'  // For split
}
```

### Features Section Patterns

**Grid Layout:**
- 2-4 column grid (responsive)
- Icon + title + description per feature
- Centered alignment
- Use for: Multiple equal features

**List Layout:**
- Alternating side-by-side
- Image + content per feature
- More detailed descriptions
- Optional bullet points
- Use for: Fewer features with more detail

**Common Props:**
```typescript
{
  title: string
  subtitle?: string
  features: Array<{
    title: string
    description: string
    icon?: string  // For grid
    image?: string  // For list
    bullets?: string[]  // For list
  }>
  columns?: 2 | 3 | 4  // For grid
}
```

### Pricing Section Patterns

**Simple Pricing:**
- 3-tier card layout
- One tier can be highlighted
- Features list per tier
- CTA button per tier
- Use for: Standard SaaS pricing

**Comparison Table:**
- Table with features in rows
- Plans in columns
- Checkmarks for included features
- Use for: Detailed feature comparison

**Common Props:**
```typescript
{
  title: string
  subtitle?: string
  tiers: Array<{
    name: string
    price: string
    period: string
    description: string
    features: string[]
    cta: CTAButton
    highlighted?: boolean
    badge?: string  // "MOST POPULAR"
  }>
}
```

### Testimonials Patterns

**Grid:**
- 2-3 columns
- Quote + author + role + company
- Optional rating stars
- Optional avatar
- Use for: Multiple short testimonials

**Slider:**
- One testimonial at a time
- Larger quotes
- More detailed
- Use for: Fewer, longer testimonials

**Common Props:**
```typescript
{
  title: string
  subtitle?: string
  testimonials: Array<{
    quote: string
    author: string
    role: string
    company?: string
    image?: string
    rating?: number
  }>
  columns?: 2 | 3  // For grid
  autoplay?: boolean  // For slider
}
```

### CTA Patterns

**Simple:**
- Centered content
- Headline + description
- 1-2 buttons
- Optional stats or trust indicator
- Use for: Final conversion push

**Split:**
- Side-by-side layout
- Content + image/visual
- Benefits list
- Social proof
- Use for: More detailed CTA with visual

**Common Props:**
```typescript
{
  headline: string
  description?: string
  buttons: CTAButton[]
  theme: 'blue' | 'purple' | 'gradient' | 'dark' | 'light'
  trustIndicator?: string
  stats?: Array<{ value: string, label: string }>  // For simple
  benefits?: string[]  // For split
  image?: string  // For split
}
```

---

## Tips for AI-Assisted Development

### When User Provides Content File

1. ✅ DO read the entire .content/ file
2. ✅ DO parse frontmatter correctly
3. ✅ DO map sections to appropriate components
4. ✅ DO extract all content accurately
5. ✅ DO create proper TypeScript types
6. ✅ DO follow feature-based structure

### When User Asks for Component

1. ✅ DO use existing marketing components first
2. ✅ DO reference .content/templates/ for examples
3. ✅ DO check shared/types/marketing.types.ts for props
4. ✅ DO use Tailwind classes only
5. ✅ DO keep route files thin

### When Customizing

1. ✅ DO modify Tailwind classes
2. ✅ DO update theme props
3. ✅ DO extend types if needed
4. ✅ DO maintain responsive design
5. ❌ DON'T create CSS files

### Common AI Prompts

**Generate from content:**
```
Generate a landing page from .content/my-page.md
```

**Add specific section:**
```
Add a pricing section with 3 tiers using content from .content/pricing.md
```

**Customize existing:**
```
Update the hero section to use a split layout with the image on the left
```

**Create new page:**
```
Create a new /pricing page with PricingSimple component and 3 tiers
```

---
