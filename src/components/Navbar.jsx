import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [language, setLanguage] = useState('en')

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'es' : 'en'))
  }

  return (
    <header className="border-b border-gray-200 bg-white shadow-sm">
      <nav className="mx-auto flex w-full max-w-7xl items-center gap-4 px-4 py-4 md:px-6 lg:gap-6">
        {/* Logo */}
        <NavLink to="/" className="shrink-0">
          <span className="text-2xl font-bold text-gray-900">Logo</span>
        </NavLink>

        {/* Search Bar */}
        <div className="hidden flex-1 md:block">
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none transition-colors focus:border-gray-400 focus:ring-1 focus:ring-gray-200"
          />
        </div>

        {/* Desktop Language and Login Button */}
        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={toggleLanguage}
            className="rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
            aria-label="Change language"
          >
            {language === 'en' ? 'EN' : 'ES'}
          </button>
          <NavLink
            to="/login"
            className="rounded-md bg-black px-6 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-gray-800"
          >
            Login
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="ml-auto rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 lg:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-gray-200 bg-white px-4 py-4 lg:hidden">
          <div className="mb-4 md:hidden">
            <input
              type="text"
              placeholder="Search..."
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none transition-colors focus:border-gray-400 focus:ring-1 focus:ring-gray-200"
            />
          </div>

          <div className="grid gap-2">
            <button
              onClick={toggleLanguage}
              className="rounded-md border border-gray-300 px-3 py-2 text-center text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
              aria-label="Change language"
            >
              {language === 'en' ? 'English' : 'Español'}
            </button>
            <NavLink
              to="/login"
              onClick={() => setIsOpen(false)}
              className="block rounded-md bg-black px-3 py-2 text-center text-sm font-medium text-white transition-all duration-200 hover:bg-gray-800"
            >
              Login
            </NavLink>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar