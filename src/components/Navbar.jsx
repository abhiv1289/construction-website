import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Products', path: '/products' },
  { label: 'Blog', path: '/blog' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Contact', path: '/contact' },
  { label: 'Dashboard', path: '/dashboard' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="mx-auto flex w-full max-w-7xl items-center gap-4 px-4 py-3 md:px-6">
        <NavLink to="/" className="text-xl font-bold text-slate-800">
          Logo
        </NavLink>

        <div className="hidden flex-1 md:block">
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-slate-500"
          />
        </div>

        <ul className="hidden items-center gap-3 lg:flex">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `rounded px-2 py-1 text-sm font-medium transition-colors ${
                    isActive ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-100'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="ml-auto rounded border border-gray-300 px-3 py-2 text-sm font-medium text-slate-700 lg:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-gray-200 px-4 pb-4 lg:hidden">
          <div className="py-3 md:hidden">
            <input
              type="text"
              placeholder="Search..."
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-slate-500"
            />
          </div>

          <ul className="grid gap-2">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block rounded px-3 py-2 text-sm font-medium transition-colors ${
                      isActive ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-100'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar