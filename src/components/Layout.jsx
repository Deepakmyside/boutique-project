import { useState } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'

export default function Layout() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const [menuOpen, setMenuOpen] = useState(false)

  const linkClass = isHome
    ? 'hover:text-pink-400 transition-colors'
    : 'hover:text-rose-600 transition-colors'

  return (
    <div className="font-sans min-h-screen">
      <nav
        className={`absolute top-0 left-0 right-0 w-full z-30 flex justify-between items-center gap-2 px-3 py-3 sm:px-6 sm:py-5 md:px-10 lg:px-16 xl:px-28 transition-colors duration-300 ${
          isHome ? 'text-white bg-transparent' : 'text-gray-800 bg-white/95 backdrop-blur-sm shadow-sm'
        }`}
      >
        <Link
          to="/"
          className="flex items-center gap-1.5 sm:gap-3 shrink-0 min-w-0"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src="/logonow.png"
            alt="Ridhi Sidhi Boutique"
            className="h-7 w-7 sm:h-9 sm:w-9 md:h-10 md:w-10 object-contain"
          />
          <span className="text-sm sm:text-xl md:text-2xl font-bold truncate max-w-[45vw] sm:max-w-none">
            Ridhi Sidhi Tailors
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-5 lg:gap-8 text-base lg:text-lg shrink-0">
          <li>
            <Link to="/" className={`${linkClass} whitespace-nowrap`}>Home</Link>
          </li>
          <li>
            <Link to="/women-clothing" className={`${linkClass} whitespace-nowrap`}>Women&apos;s Clothing</Link>
          </li>
          <li>
            <Link to="/covers-making" className={`${linkClass} whitespace-nowrap`}>Covers Making</Link>
          </li>
          <li>
            <Link to="/alterations" className={`${linkClass} whitespace-nowrap`}>Alterations</Link>
          </li>
          <li className={`${linkClass} cursor-pointer whitespace-nowrap`}>Contact</li>
        </ul>

        {/* Mobile: hamburger button */}
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-white/10 transition-colors"
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 rounded-full bg-current transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-1' : ''}`} />
          <span className={`block w-5 h-0.5 rounded-full bg-current mt-1.5 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 rounded-full bg-current mt-1.5 transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      <div
        className={`md:hidden fixed inset-0 z-20 pt-16 transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!menuOpen}
      >
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setMenuOpen(false)}
          aria-hidden
        />
        <div
          className={`relative mx-4 mt-2 rounded-2xl shadow-xl border overflow-hidden transition-transform duration-300 ${
            menuOpen ? 'translate-y-0' : '-translate-y-4'
          } ${isHome ? 'bg-white/95 text-gray-800 border-white/20' : 'bg-white border-gray-200'}`}
        >
          <div className="py-2">
            <Link
              to="/"
              className="block px-5 py-3.5 text-base font-medium hover:bg-rose-50"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/"
              className="block px-5 py-3.5 text-base font-medium hover:bg-rose-50"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <p className="px-5 pt-3 pb-1.5 text-xs font-semibold uppercase tracking-wider text-gray-500">
              Custom Tailoring
            </p>
            <Link
              to="/women-clothing"
              className="block px-5 py-3 pl-7 text-base font-medium hover:bg-rose-50"
              onClick={() => setMenuOpen(false)}
            >
              Women&apos;s Clothing
            </Link>
            <Link
              to="/covers-making"
              className="block px-5 py-3 pl-7 text-base font-medium hover:bg-rose-50"
              onClick={() => setMenuOpen(false)}
            >
              Covers Making
            </Link>
            <Link
              to="/alterations"
              className="block px-5 py-3 pl-7 text-base font-medium hover:bg-rose-50"
              onClick={() => setMenuOpen(false)}
            >
              Alterations
            </Link>
            <div className="border-t border-gray-100 mt-2" />
            <button
              type="button"
              className="block w-full text-left px-5 py-3.5 text-base font-medium hover:bg-rose-50"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </button>
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  )
}
