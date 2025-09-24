'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '/projects' },
  ]

  return (
    <header className="w-full px-6 py-4 fixed top-0 left-0 right-0 z-50 bg-cappuccino/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a 
          href="https://www.linkedin.com/in/mirza-mughal/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-dark-green font-bold text-xl hover:scale-105 transition-transform duration-200"
        >
          MIRZA MUGHAL
        </a>

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
