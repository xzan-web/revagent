# Quick Start Guide

Get your landing page up and running in 5 minutes.

## Prerequisites

- Node.js 18+ installed
- Basic familiarity with command line
- Cursor AI or VS Code (Cursor AI recommended)

## Setup (2 minutes)

### 1. Clone and Install

```bash
# Clone the repository
git clone <your-repo-url>
cd starter-website-template

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the template.

### 2. Verify Installation

You should see a basic "Hello World" page. If so, you're ready to build!

## Create Your First Landing Page (3 minutes)

### Method 1: Using Content Files (Recommended)

**Step 1:** Create a content file

```bash
# Create your content file
touch .content/my-landing-page.md
```

**Step 2:** Add your content

Open `.content/my-landing-page.md` and add:

```markdown
---
page: landing
sections:
  - hero-centered
  - features-grid
  - pricing-simple
  - cta-simple
---

# Launch Your Product Faster

Build and ship your SaaS in weeks, not months.

[Start Free Trial](#) [View Demo](#)

---

## Powerful Features

### Lightning Fast
Ship features 10x faster.

### Secure by Default
Enterprise-grade security included.

### Scales Automatically
Handle millions of users effortlessly.

---

## Simple Pricing

### Starter - $0/month
Perfect for getting started.
- Up to 3 projects
- 1 GB storage
[Get Started](#)

### Pro - $29/month
For growing businesses.
- Unlimited projects
- 50 GB storage
[Start Trial](#)

---

## Ready to Build?

Join thousands of developers building the future.

[Get Started Free](#)
```

**Step 3:** Tell Cursor AI to generate

In Cursor AI, type:

```
Generate a landing page from .content/my-landing-page.md
```

Cursor AI will:
1. Create a new route in `app/my-landing-page/page.tsx`
2. Use the marketing components
3. Map your content to component props
4. Generate a fully styled page

### Method 2: Manual Component Usage

**Step 1:** Create a new page

```bash
mkdir -p app/landing
touch app/landing/page.tsx
```

**Step 2:** Use marketing components

```typescript
// app/landing/page.tsx
import type { Metadata } from 'next'
import { HeroCentered, FeaturesGrid, CTASimple } from '@/shared/components/marketing'

export const metadata: Metadata = {
  title: 'Landing Page',
  description: 'My awesome landing page',
}

export default function LandingPage() {
  return (
    <main>
      <HeroCentered
        headline="Build Better Products Faster"
        subtitle="Ship features your customers love with our platform."
        buttons={[
          { text: 'Start Free Trial', href: '#' },
          { text: 'View Demo', href: '#', variant: 'secondary' },
        ]}
        trustIndicator="Trusted by 10,000+ teams"
        theme="gradient"
      />

      <FeaturesGrid
        title="Everything You Need"
        features={[
          { title: 'Fast', description: 'Lightning fast performance.' },
          { title: 'Secure', description: 'Enterprise-grade security.' },
          { title: 'Scalable', description: 'Grows with your business.' },
        ]}
      />

      <CTASimple
        headline="Ready to Get Started?"
        buttons={[{ text: 'Start Free', href: '#' }]}
        trustIndicator="No credit card required"
      />
    </main>
  )
}
```

## Available Components

### Hero Sections
- `HeroSimple` - Simple centered hero
- `HeroCentered` - Hero with optional image
- `HeroSplit` - Split layout with image

### Feature Sections
- `FeaturesGrid` - Grid layout (2-4 columns)
- `FeaturesList` - Alternating list with images

### Pricing Sections
- `PricingSimple` - 3-tier pricing cards
- `PricingComparison` - Comparison table

### Testimonials
- `TestimonialsGrid` - Grid of testimonials
- `TestimonialsSlider` - Carousel slider

### Call to Action
- `CTASimple` - Centered CTA
- `CTASplit` - Split layout CTA

### Layout
- `Header` - Navigation header
- `Footer` - Footer with links

## Common Workflows

### Add Header and Footer

Update `app/layout.tsx`:

```typescript
import { Header } from '@/shared/components/layout/Header'
import { Footer } from '@/shared/components/layout/Footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
```

### Customize Colors

Edit `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      brand: {
        primary: '#your-color',
        secondary: '#your-color',
      },
    },
  },
},
```

Then use in components: `bg-brand-primary`

### Add a New Page

1. Create directory: `mkdir -p app/pricing`
2. Create page: `touch app/pricing/page.tsx`
3. Use components or create content file
4. Add to navigation in Header component

## Tips for Working with Cursor AI

### Best Prompts

✅ Good prompts:
- "Generate a landing page from .content/landing.md"
- "Create a pricing section with 3 tiers using PricingSimple"
- "Add a hero section using HeroSplit with the image on the left"

❌ Avoid vague prompts:
- "Make a website"
- "Add features"
- "Build something"

### Content-Driven Workflow

1. Write content in `.content/` first
2. Structure it with frontmatter
3. Let Cursor AI map it to components
4. Refine with Tailwind classes if needed

### Customization Workflow

1. Start with existing components
2. Customize with Tailwind utilities
3. Extract patterns to new components if repeated
4. Keep components in proper directories

## Troubleshooting

### Component Not Found

Check your import path uses `@/`:
```typescript
import { Hero } from '@/shared/components/marketing'  // ✅ Correct
import { Hero } from '../shared/components/marketing' // ❌ Wrong
```

### Styles Not Working

Ensure Tailwind is processing your files. Check `tailwind.config.ts`:
```typescript
content: [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./shared/**/*.{js,ts,jsx,tsx}",
  "./features/**/*.{js,ts,jsx,tsx}",
],
```

### Build Errors

```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

## Next Steps

- Read [ARCHITECTURE.md](./ARCHITECTURE.md) for structure details
- Read [AGENTS.md](./AGENTS.md) for AI-specific guidelines
- Check `.content/examples/` for more examples
- Explore `shared/components/marketing/` for all components

## Need Help?

- Check examples in `.content/examples/`
- Review component props in `shared/types/marketing.types.ts`
- Read the full docs in AGENTS.md
- Look at existing component implementations

## Deploy Your Site

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Deploy (automatic)

### Deploy to Netlify

1. Push to GitHub
2. New site from Git in Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`

---

**You're ready to build!** Start with a content file or jump straight to components. Happy building! 🚀

