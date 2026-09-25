import Image from 'next/image'

interface LogoProps {
  className?: string
}

export function Logo({ className = 'h-8 w-auto' }: LogoProps) {
  return <Image src="/logo.png" alt="Adaptive Sales" width={422} height={80} className={className} priority />
}
