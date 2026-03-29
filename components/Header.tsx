'use client'

import Link from 'next/link'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  // { name: 'Core Activities', href: '/activities' },
  { name: 'Downloads', href: '/downloads' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Blog', href: '/blog' },
  { name: 'Membership', href: '/membership' },
  { name: 'Contact Us', href: '/contact' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          {/* Logo + Text */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.jpeg"
                alt="BETRA Logo"
                width={60}
                height={60}
                className="h-14 w-auto object-contain"
              />

              <div className="flex flex-col leading-tight">
                <span className="text-sm md:text-base font-semibold text-[#0a1a3a]">
                  Banking Education Training &
                </span>
                <span className="text-sm md:text-base font-semibold text-[#0a1a3a]">
                  Research Academy (BETRA)
                </span>
              </div>
            </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:space-x-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={
                    `rounded-md px-4 py-2 text-lg font-semibold transition-colors hover:bg-muted hover:text-black ` +
                    (isActive ? 'bg-muted text-blue-800' : 'text-[#0a1a3a]')
                  }
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden rounded-md p-2 text-gray-800 transition-colors hover:bg-muted"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-border md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => {
                const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={
                      `block rounded-md px-3 py-2 text-lg font-semibold transition-colors hover:bg-muted hover:text-black ` +
                      (isActive ? 'bg-muted text-blue-800' : 'text-[#0a1a3a]')
                    }
                    aria-current={isActive ? 'page' : undefined}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}