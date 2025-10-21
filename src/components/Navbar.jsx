import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-semibold text-gray-900">
              Aseryx
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              to="/"
              className={`px-4 py-2 rounded-md transition ${
                isActive('/') 
                  ? 'bg-gray-900 text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Home
            </Link>
            <Link
              to="/members"
              className={`px-4 py-2 rounded-md transition ${
                isActive('/members') 
                  ? 'bg-black text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Members
            </Link>
            <Link
              to="/partners"
              className={`px-4 py-2 rounded-md transition ${
                isActive('/partners') 
                  ? 'bg-black text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Research Partners
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md ${
                isActive('/') 
                  ? 'bg-gray-900 text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/members"
              className={`block px-3 py-2 rounded-md ${
                isActive('/members') 
                  ? 'bg-blue-500 text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Members
            </Link>
            <Link
              to="/partners"
              className={`block px-3 py-2 rounded-md ${
                isActive('/partners') 
                  ? 'bg-blue-500 text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Research Partners
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
