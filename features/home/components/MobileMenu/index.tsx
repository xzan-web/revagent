'use client'

import { useRef } from 'react'
import { Logo } from '@/shared/components/ui/Logo'

interface NavLink {
  href: string
  label: string
}

interface MobileMenuProps {
  links: NavLink[]
}

export function MobileMenu({ links }: MobileMenuProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const open = () => dialogRef.current?.showModal()
  const close = () => dialogRef.current?.close()

  const linkStyles = '-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50'

  return (
    <>
      <button type="button" onClick={open} className="-m-2.5 inline-flex items-center justify-center rounded-full p-2.5 text-gray-700">
        <span className="sr-only">Открыть меню</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="size-6"><path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>
      <dialog
        ref={dialogRef}
        aria-label="Меню"
        onClick={(e) => { if (e.target === e.currentTarget) close() }}
        className="m-0 ml-auto h-full max-h-none w-full max-w-none bg-white p-6 backdrop:bg-transparent sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 lg:hidden"
      >
        <div className="flex items-center justify-between">
          <a href="#" onClick={close} className="-m-1.5 p-1.5"><Logo /></a>
          <button type="button" onClick={close} className="-m-2.5 rounded-full p-2.5 text-gray-700">
            <span className="sr-only">Закрыть меню</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="size-6"><path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {links.map((link) => (
                <a key={link.href} href={link.href} onClick={close} className={linkStyles}>{link.label}</a>
              ))}
            </div>
            <div className="py-6">
              <a href="#audit" onClick={close} className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-brand-700 hover:bg-gray-50">Получить разбор продаж</a>
            </div>
          </div>
        </div>
      </dialog>
    </>
  )
}
