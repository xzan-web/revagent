import Image from 'next/image'
import logo from '@/public/logo.svg'

interface LogoProps {
  className?: string
}

export function Logo({ className = 'h-5 w-auto' }: LogoProps) {
  return <Image src={logo} alt="SaleBrain" className={className} priority />
}
