import { Logo } from '@/shared/components/ui/Logo'
import { MobileMenu } from '@/features/home/components/MobileMenu'
import { navLinks } from '@/features/home/components/Header/navLinks'

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-md ring-1 ring-gray-900/5">
      <nav aria-label="Главное меню" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5"><Logo /></a>
        </div>
        <div className="flex lg:hidden">
          <MobileMenu links={navLinks} />
        </div>
        <div className="hidden lg:flex lg:gap-x-10">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm/6 font-semibold text-gray-900">{link.label}</a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#audit" className="rounded-full bg-gray-950 px-3.5 py-2 text-sm font-semibold text-white hover:bg-gray-700">Получить разбор продаж</a>
        </div>
      </nav>
    </header>
  )
}
