import Image from 'next/image'
import logo from '@/public/logo.png'

interface LogoProps {
  className?: string
}

export function Logo({ className = 'h-8 w-auto' }: LogoProps) {
  return <Image src={logo} alt="Adaptive Sales" className={className} priority />
}
