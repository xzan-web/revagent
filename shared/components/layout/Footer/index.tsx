interface FooterLink {
  label: string
  href: string
}

interface FooterSection {
  title: string
  links: FooterLink[]
}

interface SocialLink {
  name: string
  href: string
  icon: string
}

interface FooterProps {
  siteName?: string
  description?: string
  sections?: FooterSection[]
  socialLinks?: SocialLink[]
  copyrightText?: string
}

export function Footer({
  siteName = 'Your Brand',
  description = 'Build better products faster with our modern development platform.',
  sections = [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '#features' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'FAQ', href: '#faq' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Blog', href: '#' },
        { label: 'Careers', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy', href: '#' },
        { label: 'Terms', href: '#' },
        { label: 'Security', href: '#' },
      ],
    },
  ],
  socialLinks = [
    { name: 'Twitter', href: '#', icon: '𝕏' },
    { name: 'GitHub', href: '#', icon: 'GitHub' },
    { name: 'LinkedIn', href: '#', icon: 'LinkedIn' },
  ],
  copyrightText,
}: FooterProps) {
  const currentYear = new Date().getFullYear()
  const copyright = copyrightText || `© ${currentYear} ${siteName}. All rights reserved.`

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">{siteName}</h3>
            <p className="text-gray-400 mb-4">{description}</p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <span>{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Link sections */}
          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-400 text-sm text-center">{copyright}</p>
        </div>
      </div>
    </footer>
  )
}

