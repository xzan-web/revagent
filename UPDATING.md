# Version Management & Update Guide

This template is built with the latest stable versions. Follow this guide to keep dependencies up to date.

## Current Versions

As of this template:
- **Next.js**: 15.5.2
- **Tailwind CSS**: v4.1.14
- **React**: 18.x
- **TypeScript**: 5.x

## Philosophy

- ✅ Always use **latest stable** versions
- ✅ Update regularly for security and features
- ✅ Test thoroughly after major updates
- ❌ Don't skip major versions
- ❌ Don't use beta/canary in production

## Quick Update Check

```bash
# Check for available updates
npm run check-updates

# Or manually
npx npm-check-updates
```

## Updating Dependencies

### Minor & Patch Updates (Safe)

Minor (1.2.x → 1.3.x) and patch (1.2.1 → 1.2.2) updates are typically safe:

```bash
# Update to latest patch versions
npm update

# Check what would be updated
npm outdated
```

### Major Updates (Requires Testing)

Major version updates (15.x → 16.x) may have breaking changes.

## Updating Next.js

### Check for Updates

```bash
# See current version
npm list next

# Check latest version
npm info next version
```

### Update Process

**1. Read Release Notes**

Visit: https://github.com/vercel/next.js/releases

Look for:
- Breaking changes
- New features
- Upgrade guide
- Codemods available

**2. Update Package**

```bash
# Update to specific version
npm install next@latest

# Or specific version
npm install next@16.0.0
```

**3. Run Codemods (if available)**

Next.js often provides automated migration tools:

```bash
npx @next/codemod@latest upgrade
```

**4. Test Your Build**

```bash
# Clear cache
rm -rf .next

# Test build
npm run build

# Test locally
npm start
```

**5. Check for Warnings**

Review console output for deprecation warnings or errors.

### Common Next.js Migration Issues

**App Router Changes:**
- Check for updates to `metadata` API
- Review changes to Server/Client Components
- Verify route file conventions

**Image Optimization:**
- Update `next/image` if syntax changed
- Check image loader configuration

**Environment Variables:**
- Verify `.env` file structure
- Check `NEXT_PUBLIC_` prefixes

## Updating Tailwind CSS

### Tailwind v4 (Current)

We're using Tailwind CSS v4 which has significant changes from v3.

### Update Process

**1. Check Version**

```bash
npm list tailwindcss
```

**2. Read Migration Guide**

For v4 updates: https://tailwindcss.com/docs/upgrade-guide

**3. Update Package**

```bash
npm install tailwindcss@latest
```

**4. Update Configuration**

Tailwind v4 uses different config syntax. Current config:

```typescript
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
```

**5. Test Styles**

```bash
npm run dev
```

Check that all components render correctly.

### Tailwind v3 → v4 Migration

If starting from v3, major changes:
- New configuration format
- Updated utility classes
- Different plugin system
- Color palette changes

## Updating TypeScript

**1. Check Version**

```bash
npm list typescript
```

**2. Update**

```bash
npm install typescript@latest
```

**3. Update Type Definitions**

```bash
npm install @types/react@latest @types/react-dom@latest @types/node@latest
```

**4. Check tsconfig.json**

Review breaking changes in TypeScript release notes.

**5. Fix Type Errors**

```bash
npm run build
```

Address any new type errors.

## Updating React

React updates typically come with Next.js, but you can update independently:

```bash
npm install react@latest react-dom@latest
```

**Note:** Ensure compatibility with Next.js version.

## Update Workflow

### Monthly Maintenance

**1st of each month:**

```bash
# 1. Check for updates
npm outdated

# 2. Update patch versions
npm update

# 3. Test
npm run build
npm run dev

# 4. Commit changes
git add package*.json
git commit -m "chore: update dependencies"
```

### Quarterly Major Updates

**Once per quarter:**

```bash
# 1. Check for major updates
npx npm-check-updates

# 2. Review release notes for each major update

# 3. Update one at a time
npm install next@latest
# Test
npm run build

npm install tailwindcss@latest
# Test
npm run build

# 4. Create backup branch first
git checkout -b updates-q1-2024

# 5. Commit and test thoroughly
git add .
git commit -m "chore: major dependency updates Q1 2024"
```

## Testing Checklist

After any update:

### Build Test
- [ ] `npm run build` succeeds
- [ ] No TypeScript errors
- [ ] No ESLint warnings
- [ ] Build output looks correct

### Development Test
- [ ] `npm run dev` starts successfully
- [ ] Hot reload works
- [ ] No console errors
- [ ] All pages load

### Component Test
- [ ] All marketing components render
- [ ] Styling is correct
- [ ] Responsive design works
- [ ] Interactions work (buttons, forms)

### Production Test
- [ ] Build for production succeeds
- [ ] Start production server works
- [ ] Performance is acceptable
- [ ] SEO metadata intact

## Breaking Change Patterns

### Next.js Breaking Changes

Common breaking changes:
- Route file naming conventions
- Metadata API changes
- Image component API changes
- Font optimization changes
- Server/Client component rules

### Tailwind Breaking Changes

Common breaking changes:
- Utility class renames
- Configuration file structure
- Plugin API changes
- Color palette updates

### React Breaking Changes

Common breaking changes:
- Hook rules
- Concurrent rendering behavior
- Prop types

## Rollback Procedure

If an update causes issues:

**1. Revert package.json**

```bash
git checkout HEAD -- package.json package-lock.json
npm install
```

**2. Document the Issue**

Create an issue documenting:
- What version caused problems
- What broke
- Error messages
- Environment details

**3. Wait for Fix**

Either:
- Wait for the next patch release
- Find a workaround
- Report issue to package maintainer

## Dependency Security

### Check for Vulnerabilities

```bash
# Audit dependencies
npm audit

# Fix automatically if possible
npm audit fix

# For breaking changes
npm audit fix --force
```

### Security Updates

Always prioritize security updates:

```bash
# Update specific vulnerable package
npm install package-name@latest
```

## Keep This File Updated

When you update dependencies, update this file:

1. Update "Current Versions" section at top
2. Add any new migration notes
3. Document any issues encountered
4. Add new workarounds if needed

## Resources

### Official Docs
- [Next.js Upgrade Guide](https://nextjs.org/docs/upgrading)
- [Tailwind CSS Upgrade Guide](https://tailwindcss.com/docs/upgrade-guide)
- [React Changelog](https://react.dev/blog)
- [TypeScript Release Notes](https://www.typescriptlang.org/docs/handbook/release-notes/overview.html)

### Tools
- [npm-check-updates](https://www.npmjs.com/package/npm-check-updates)
- [Next.js Codemods](https://nextjs.org/docs/advanced-features/codemods)
- [Can I Use](https://caniuse.com/) - Browser compatibility

### Community
- [Next.js GitHub Discussions](https://github.com/vercel/next.js/discussions)
- [Tailwind CSS Discord](https://tailwindcss.com/discord)

---

**Remember:** Always test updates in a separate branch first. Never update right before a deploy!

