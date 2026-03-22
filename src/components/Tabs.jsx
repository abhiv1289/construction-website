import React from 'react'
import { NavLink } from 'react-router-dom'

const tabItems = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about-us' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact Us', path: '/contact-us' },
]

const Tabs = () => {
  return (
    <div className="border-b border-gray-200 bg-white w-full">
      <div className="mx-auto flex justify-around w-full max-w-7xl items-center gap-10 overflow-x-auto px-4 py-3 md:px-6">
        {tabItems.map((tab) => (
          <NavLink
            key={tab.path}
            to={tab.path}
            end={tab.path === '/'}
            className={({ isActive }) =>
              `whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              }`
            }
          >
            {tab.label}
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default Tabs