'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Me', href: '/about' },
    { name: 'Projects', href: '/projects' },
  ]

  return (
    <header className="w-full px-6 py-4 fixed top-0 left-0 right-0 z-50 bg-cappuccino/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-dark-green font-bold text-xl">
          MIRZA MUGHAL
        </Link>

        {/* Navigation */}
        <nav className="flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                pathname === item.href
                  ? 'text-dark-green'
                  : 'text-dark-green/70 hover:text-dark-green'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
