# Content Templates for Cursor AI

This directory contains content templates that Cursor AI uses to generate landing page components quickly.

## How It Works

1. **Create a content file** in markdown format with YAML frontmatter
2. **Tell Cursor AI** to generate components from your content file
3. **Get a fully styled page** using Tailwind CSS and our component library

## Directory Structure

- `templates/` - Individual section templates (Hero, Features, Pricing, etc.)
- `examples/` - Complete landing page examples

## Content File Format

Content files use markdown with YAML frontmatter:

```markdown
---
section: hero
variant: centered
styling: blue-gradient
---

# Your Headline Here

Your subtitle or description text goes here.

[CTA Button Text](URL)
```

## Section Types

### Hero
- **Variants**: simple, centered, split
- **Use for**: Main page header with headline and CTA

### Features
- **Variants**: grid, list
- **Use for**: Product features, benefits, capabilities

### Pricing
- **Variants**: simple, comparison
- **Use for**: Pricing tiers, plans

### Testimonials
- **Variants**: grid, slider
- **Use for**: Customer reviews, social proof

### CTA (Call to Action)
- **Variants**: simple, split
- **Use for**: Action-focused sections, sign-ups

## Quick Start

### Creating a New Landing Page

1. Create a new content file: `.content/my-page.md`
2. Add frontmatter and content
3. Tell Cursor AI: "Generate a landing page from .content/my-page.md"

## Best Practices

1. **Keep content organized** - Use clear headings for each section
2. **Use frontmatter** - Specify section types and variants
3. **Be descriptive** - The AI works better with clear content structure
4. **Follow examples** - Check the examples/ directory for patterns

## Tips for Cursor AI

When prompting Cursor AI to generate pages:

- ✅ "Generate a landing page from .content/my-page.md"
- ✅ "Create Hero and Features sections from .content/hero.md"
- ✅ "Add a pricing section using content from .content/pricing.md"
- ❌ "Build a page" (too vague)
- ❌ Don't skip creating content files first

## Need Help?

Check the examples in `.content/examples/` for complete working examples.

