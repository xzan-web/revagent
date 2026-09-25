# Using This Template

This is a Cursor AI-optimized starter template for building landing pages fast.

## For Teams

### Quick Start

1. **Click "Use this template"** button on GitHub
2. **Clone your new repository**
3. **Install and run:**
   ```bash
   npm install
   npm run dev
   ```

### What's Included

- ✅ Next.js 15.5.2 (latest stable)
- ✅ Tailwind CSS v4.1.14 (latest stable)
- ✅ TypeScript strict mode
- ✅ Pre-built marketing components
- ✅ Content-driven development system
- ✅ Cursor AI optimization (.cursorrules)

### How to Build Pages

**Option 1: Content-Driven (Recommended)**

1. Create `.content/my-page.md`:
```markdown
---
sections: [hero-centered, features-grid, pricing-simple]
---

# Your Headline
Your content here...
```

2. Tell Cursor AI:
```
Generate a landing page from .content/my-page.md
```

**Option 2: Direct Component Usage**

```typescript
import { HeroCentered, FeaturesGrid } from '@/shared/components/marketing'

export default function Page() {
  return (
    <main>
      <HeroCentered {...data} />
      <FeaturesGrid {...data} />
    </main>
  )
}
```

## Documentation

- **[QUICKSTART.md](../QUICKSTART.md)** - 5-minute setup guide
- **[AGENTS.md](../AGENTS.md)** - Complete AI development guide  
- **[ARCHITECTURE.md](../ARCHITECTURE.md)** - Architecture details
- **[UPDATING.md](../UPDATING.md)** - Keep dependencies updated

## Component Library

### Marketing Sections

- **Hero**: Simple, Centered, Split variants
- **Features**: Grid (2-4 cols), List with images
- **Pricing**: Simple 3-tier, Comparison table
- **Testimonials**: Grid, Slider/Carousel
- **CTA**: Simple, Split with image
- **Layout**: Header with navigation, Footer

All components:
- Use Tailwind CSS v4 utilities
- Fully responsive
- TypeScript typed
- Accessibility built-in

## Customization

### Colors

Edit `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      brand: { primary: '#...', secondary: '#...' }
    }
  }
}
```

### Fonts

Update `app/layout.tsx`:

```typescript
import { YourFont } from 'next/font/google'
```

### Components

All components in `shared/components/marketing/` can be:
- Used as-is
- Customized with Tailwind classes  
- Extended with new variants

## Deployment

### Vercel (Recommended)

```bash
# Push to GitHub, then import in Vercel
# Deploys automatically
```

### Other Platforms

```bash
npm run build  # Build for production
npm start      # Run production server
```

Works with: Netlify, Railway, Render, AWS, etc.

## Team Workflow

1. **Developer** clones repository
2. **Content Creator** writes `.content/page.md`
3. **Developer** tells Cursor AI to generate page
4. **Team** reviews and deploys

## Keeping Updated

```bash
# Check for updates
npm run check-updates

# Update dependencies
npm update
```

See [UPDATING.md](../UPDATING.md) for detailed version management.

## Support

- Read documentation files in root directory
- Check `.content/examples/` for patterns
- Review `shared/types/marketing.types.ts` for TypeScript types
- Look at existing component implementations

## License

MIT License - Free for personal and commercial use.

---

**Ready to build?** Start with [QUICKSTART.md](../QUICKSTART.md)!

