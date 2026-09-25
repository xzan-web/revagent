# Cursor AI Starter Website Template

**Create landing pages in minutes, not hours.** A production-ready Next.js starter template optimized for Cursor AI that lets your team build beautiful marketing pages using simple markdown content files.

## ✨ What Makes This Special?

- **Content-Driven**: Write content in markdown → Tell Cursor AI → Get a fully styled page
- **Cursor AI Optimized**: Built-in `.cursorrules` and detailed prompts for AI assistance
- **Latest Tech Stack**: Next.js 16.3.6 + Tailwind CSS v4.3.3 + TypeScript
- **Pre-built Components**: Hero, Features, Pricing, Testimonials, CTA sections ready to use
- **Production-Ready**: Feature-based architecture that scales
- **Zero Config**: Works perfectly with Tailwind out of the box

## 🚀 Quick Start

```bash
# 1. Clone and install
git clone <your-repo-url>
cd starter-website-template
npm install

# 2. Start development
npm run dev

# 3. Open browser
# Visit http://localhost:3000
```

**Ready in 30 seconds!** See [QUICKSTART.md](./QUICKSTART.md) for detailed guide.

## 🎯 Perfect For

- **Teams** who need to ship landing pages fast
- **Developers** who want AI-assisted development
- **Agencies** building client websites
- **Startups** launching product pages
- **Anyone** who wants to skip the setup and start building

## ⚡ Key Features

### Content-Driven Development
Create `.content/my-page.md` with your content, tell Cursor AI to generate, and get a complete page:

```markdown
---
sections: [hero-centered, features-grid, pricing-simple]
---

# Build Better Products Faster
Your subtitle here...
```

### Pre-Built Marketing Components
- **Hero Sections**: Simple, Centered, Split layouts
- **Features**: Grid and List layouts
- **Pricing**: Simple tiers and Comparison tables
- **Testimonials**: Grid and Slider views
- **CTAs**: Simple and Split call-to-actions
- **Layout**: Header with navigation, Footer

### Latest Stable Versions
- **Next.js**: 16.3.6 (App Router, React Server Components)
- **Tailwind CSS**: v4.3.3 (Latest utilities, performance)
- **TypeScript**: 5.x (Strict mode)
- **React**: 18.x (Concurrent features)

## 📁 Project Structure

```
starter-website-template/
├── .content/                    # Content templates & examples
│   ├── templates/              # Section templates
│   │   ├── hero.md
│   │   ├── features.md
│   │   ├── pricing.md
│   │   └── ...
│   └── examples/               # Complete page examples
│       └── landing-page.md
├── app/                        # Next.js routes (thin)
│   ├── layout.tsx
│   └── page.tsx
├── shared/                     # Shared code
│   ├── components/
│   │   ├── marketing/         # Marketing sections
│   │   │   ├── Hero/          # Hero variants
│   │   │   ├── Features/      # Features variants
│   │   │   ├── Pricing/       # Pricing variants
│   │   │   ├── Testimonials/  # Testimonial variants
│   │   │   └── CTA/           # CTA variants
│   │   └── layout/            # Header, Footer
│   ├── types/                 # TypeScript types
│   │   └── marketing.types.ts
│   └── hooks/                 # Custom React hooks
├── features/                   # Feature-specific code
│   └── [feature]/
│       └── components/
├── .cursorrules               # Cursor AI configuration
├── QUICKSTART.md              # 5-minute setup guide
├── AGENTS.md                  # AI development guide
├── UPDATING.md                # Version management
└── ARCHITECTURE.md            # Architecture details
```

## 🎬 How It Works

### 1. Write Content (Markdown)

Create `.content/my-landing.md`:

```markdown
---
sections: [hero-centered, features-grid, cta-simple]
---

# Build Amazing Products
Ship faster with our platform.

[Get Started](#)

---

## Key Features

### Fast Development
Build 10x faster...

### Secure & Scalable
Enterprise-grade...
```

### 2. Tell Cursor AI

In Cursor, simply type:
```
Generate a landing page from .content/my-landing.md
```

### 3. Get Your Page

Cursor AI will:
- ✅ Create the route file
- ✅ Import correct components
- ✅ Map content to props
- ✅ Generate fully styled page

## 💡 Usage Examples

### Use Pre-Built Components

```typescript
import { HeroCentered, FeaturesGrid } from '@/shared/components/marketing'

export default function Page() {
  return (
    <main>
      <HeroCentered
        headline="Build Better Products"
        subtitle="Ship faster with our platform"
        buttons={[{ text: 'Get Started', href: '#' }]}
        theme="gradient"
      />
      <FeaturesGrid
        title="Why Choose Us"
        features={[...]}
      />
    </main>
  )
}
```

### Customize with Tailwind

All components use Tailwind CSS v4. Customize anything:

```typescript
<HeroSimple theme="blue" />           // Use built-in themes
<HeroCentered className="py-32" />     // Add utilities
<FeaturesGrid columns={4} />           // Configure props
```

## 📝 Available Commands

```bash
npm run dev            # Start development server
npm run build          # Build for production
npm run start          # Start production server
npm run lint           # Check code quality
npm run check-updates  # Check for dependency updates
```

## 🏗️ Architecture

**Feature-Based Structure** for scalability:

- `app/` - Routes only (composition, no logic)
- `shared/` - Reusable code across features
- `features/` - Feature-specific code (isolated)
- `.content/` - Content templates for AI

**Key Principles:**
- Thin route files
- Components are Tailwind-only (no CSS modules)
- TypeScript strict mode
- Server Components by default
- Path aliases (@/) for imports

## 📚 Documentation

- **[QUICKSTART.md](./QUICKSTART.md)** - Get started in 5 minutes
- **[AGENTS.md](./AGENTS.md)** - Complete AI development guide
- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Detailed architecture
- **[UPDATING.md](./UPDATING.md)** - Version management
- **[.cursorrules](./.cursorrules)** - Cursor AI configuration

## 🎨 Component Library

### Hero Sections
- `HeroSimple` - Centered with buttons
- `HeroCentered` - With optional image below
- `HeroSplit` - Side-by-side text and image

### Features
- `FeaturesGrid` - 2-4 column grid
- `FeaturesList` - Alternating with images

### Pricing
- `PricingSimple` - 3-tier cards
- `PricingComparison` - Comparison table

### Testimonials
- `TestimonialsGrid` - Grid layout
- `TestimonialsSlider` - Carousel

### CTA
- `CTASimple` - Centered call-to-action
- `CTASplit` - Split with image/content

### Layout
- `Header` - Responsive navigation
- `Footer` - Links and social

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Push to GitHub, then:
# 1. Import project in Vercel
# 2. Deploy automatically
```

### Other Platforms

```bash
npm run build   # Builds to .next/
npm start       # Runs production server
```

Works with: Netlify, Railway, Render, AWS, etc.

## 🔄 Keeping Updated

```bash
# Check for updates
npm run check-updates

# Update dependencies
npm update

# See UPDATING.md for details
```

Current versions always in `package.json`.

## 🤝 For Teams

### Publishing to GitHub

1. Create new repo on GitHub
2. Push this template:
   ```bash
   git remote set-url origin <your-repo-url>
   git push -u origin main
   ```
3. Team members clone and start building

### Team Workflow

1. Clone repository
2. Create content file in `.content/`
3. Use Cursor AI to generate page
4. Customize with Tailwind
5. Commit and deploy

## 🛠️ Customization

### Change Colors

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

### Add Fonts

Update `app/layout.tsx`:

```typescript
import { YourFont } from 'next/font/google'
```

### Modify Components

Components are in `shared/components/marketing/`. Edit directly or create new variants.

## 📖 Learning Resources

- [Next.js 15 Docs](https://nextjs.org/docs)
- [Tailwind CSS v4](https://tailwindcss.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Cursor AI](https://cursor.sh)

## 💬 Support

- Read the [QUICKSTART.md](./QUICKSTART.md)
- Check [AGENTS.md](./AGENTS.md) for AI guidance
- Review component examples in `.content/examples/`
- Look at type definitions in `shared/types/`

## 📄 License

MIT License - Use freely for personal and commercial projects.

## 🙏 Credits

Built with:
- [Next.js](https://nextjs.org) by Vercel
- [Tailwind CSS](https://tailwindcss.com) by Tailwind Labs
- Inspired by [Tailwind UI](https://tailwindui.com)
- Optimized for [Cursor AI](https://cursor.sh)

---

**Ready to build?** Read [QUICKSTART.md](./QUICKSTART.md) and start creating! 🚀
