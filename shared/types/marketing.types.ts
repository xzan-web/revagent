// Marketing Component Type Definitions
// These types are used across all marketing section components

// Common types
export interface CTAButton {
  text: string
  href: string
  variant?: 'primary' | 'secondary' | 'outline'
}

// Hero Section Types
export interface HeroProps {
  headline: string
  subtitle: string
  buttons?: CTAButton[]
  image?: string
  imageAlt?: string
  trustIndicator?: string
  theme?: 'light' | 'dark' | 'gradient' | 'blue' | 'purple'
}

export interface HeroSimpleProps extends HeroProps {}

export interface HeroCenteredProps extends HeroProps {
  image?: string
  imageAlt?: string
}

export interface HeroSplitProps extends HeroProps {
  image: string
  imageAlt: string
  imagePosition?: 'left' | 'right'
}

// Features Section Types
export interface Feature {
  title: string
  description: string
  icon?: string
  image?: string
}

export interface FeaturesProps {
  title: string
  subtitle?: string
  features: Feature[]
  theme?: 'light' | 'dark' | 'gray'
}

export interface FeaturesGridProps extends FeaturesProps {
  columns?: 2 | 3 | 4
}

export interface FeaturesListProps extends FeaturesProps {
  features: (Feature & { bullets?: string[] })[]
}

// Pricing Section Types
export interface PricingFeature {
  text: string
  included: boolean
}

export interface PricingTier {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  cta: CTAButton
  highlighted?: boolean
  badge?: string
}

export interface PricingProps {
  title: string
  subtitle?: string
  tiers: PricingTier[]
  billingPeriod?: 'monthly' | 'yearly' | 'both'
  theme?: 'light' | 'dark'
}

export interface PricingSimpleProps extends PricingProps {}

export interface PricingComparisonProps extends PricingProps {
  comparisonFeatures?: string[]
}

// Testimonials Section Types
export interface Testimonial {
  quote: string
  author: string
  role: string
  company?: string
  image?: string
  rating?: number
}

export interface TestimonialsProps {
  title: string
  subtitle?: string
  testimonials: Testimonial[]
  theme?: 'light' | 'dark' | 'gradient'
}

export interface TestimonialsGridProps extends TestimonialsProps {
  columns?: 2 | 3
}

export interface TestimonialsSliderProps extends TestimonialsProps {
  autoplay?: boolean
}

// CTA Section Types
export interface CTAProps {
  headline: string
  description?: string
  buttons: CTAButton[]
  trustIndicator?: string
  theme?: 'blue' | 'purple' | 'gradient' | 'dark' | 'light'
}

export interface CTASimpleProps extends CTAProps {
  stats?: Array<{
    value: string
    label: string
  }>
}

export interface CTASplitProps extends CTAProps {
  image?: string
  imagePosition?: 'left' | 'right'
  benefits?: string[]
  socialProof?: string
}

