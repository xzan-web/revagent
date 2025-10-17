# Contributing to Starter Website Template

Thank you for your interest in contributing! This template is designed to help teams build landing pages quickly with Cursor AI.

## How to Use (Not Contribute to Core)

**This template is meant to be used, not contributed to directly.**

Instead:
1. Click "Use this template" on GitHub
2. Create your own repository
3. Customize for your needs
4. Build your landing pages

## If You Want to Improve the Template

If you've found a bug or have an enhancement idea for the template itself:

### Reporting Issues

**Bug Reports:**
- Describe the issue clearly
- Include steps to reproduce
- Share your environment (Node version, OS)
- Include error messages

**Feature Requests:**
- Explain the use case
- Describe expected behavior
- Consider if it fits the template's scope

### Pull Requests

We welcome improvements! Follow these guidelines:

**Before Starting:**
1. Open an issue to discuss major changes
2. Check if someone else is working on it
3. Ensure it aligns with template goals

**PR Guidelines:**

1. **Follow the Architecture**
   - Feature-based structure
   - Tailwind CSS only (no CSS modules)
   - TypeScript strict mode
   - Path aliases (@/)

2. **Code Quality**
   - No ESLint warnings
   - Proper TypeScript types
   - Responsive design
   - Accessibility considered

3. **Documentation**
   - Update README.md if needed
   - Update AGENTS.md for AI guidance
   - Add examples to `.content/examples/`
   - Update types in `shared/types/`

4. **Testing**
   - Test build: `npm run build`
   - Test development: `npm run dev`
   - Check multiple screen sizes
   - Verify Cursor AI integration

**What We're Looking For:**

✅ New marketing component variants
✅ Improved Tailwind styling
✅ Better TypeScript types
✅ Enhanced documentation
✅ Bug fixes
✅ Performance improvements
✅ Accessibility enhancements

❌ Breaking changes without discussion
❌ CSS modules or inline styles
❌ Complexity without clear benefit
❌ Features outside marketing/landing page scope

### Component Contributions

**Adding New Components:**

1. Follow existing patterns in `shared/components/marketing/`
2. Create multiple variants (Simple, Advanced, etc.)
3. Use Tailwind CSS v4 utilities only
4. Add TypeScript types to `shared/types/marketing.types.ts`
5. Create template in `.content/templates/`
6. Add example to `.content/examples/`
7. Update AGENTS.md with usage patterns

**Example Structure:**
```
shared/components/marketing/NewSection/
├── NewSectionSimple.tsx
├── NewSectionAdvanced.tsx
└── index.tsx  # Barrel export
```

### Documentation Contributions

**Always Welcome:**
- Typo fixes
- Clarity improvements
- Additional examples
- Better explanations
- More content templates

### Development Setup

```bash
# Clone your fork
git clone <your-fork-url>

# Install dependencies
npm install

# Start development
npm run dev

# Run linter
npm run lint

# Build
npm run build
```

### Commit Messages

Follow conventional commits:

```
feat: add new testimonial slider variant
fix: correct TypeScript types for hero props
docs: improve quickstart guide
style: update tailwind classes for better responsive design
refactor: simplify pricing component structure
```

### Code Style

- Use TypeScript (strict mode)
- Named exports for components
- Tailwind CSS utilities only
- Functional components
- Descriptive variable names
- Comments for complex logic

### Review Process

1. Submit PR with clear description
2. Maintainers review code
3. Address feedback if needed
4. PR merged when approved

### Version Management

- Always use **latest stable** versions
- Update package.json if changing dependencies
- Document in UPDATING.md if migration needed
- Test thoroughly with new versions

## Questions?

- Open an issue for discussion
- Check existing issues first
- Be respectful and constructive

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for helping improve this template!** 🙏

