'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { href: '/',          label: 'Home' },
  { href: '/tools',     label: 'Loan Tools' },
  { href: '/guidance',  label: 'Guidance' },
  { href: '/about',     label: 'About' },
]

export default function Header() {
  const [isOpen, setIsOpen]     = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <nav className="navbar">
        <div className="nav-wrapper">
          <Link href="/" className="logo-link" aria-label="LeadBrokers home">
            <svg className="header-logo" viewBox="0 0 240 70" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <defs>
                <linearGradient id="lbTheme" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2563eb"/>
                  <stop offset="50%" stopColor="#1e40af"/>
                  <stop offset="100%" stopColor="#1e3a8a"/>
                </linearGradient>
              </defs>
              <g>
                <rect x="10" y="10" width="50" height="50" rx="14" fill="#eff6ff"/>
                <circle cx="22" cy="35" r="3.5" fill="url(#lbTheme)"/>
                <circle cx="48" cy="25" r="3.5" fill="url(#lbTheme)"/>
                <circle cx="48" cy="45" r="3.5" fill="url(#lbTheme)"/>
                <path d="M22 35 Q34 22 48 25" stroke="url(#lbTheme)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                <path d="M22 35 Q34 48 48 45" stroke="url(#lbTheme)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              </g>
              <text x="70" y="42"
                    fontFamily="Inter, Poppins, sans-serif"
                    fontSize="28"
                    fontWeight="700"
                    fill="#2563eb">
                LeadBrokers
              </text>
            </svg>
          </Link>

          <div className="nav-right">
            <ul className={`nav-menu${isOpen ? ' active' : ''}`}>
              {navLinks.map(({ href, label }) => {
                const isActive = pathname === href
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={isActive ? 'active' : ''}
                      onClick={() => setIsOpen(false)}
                    >
                      {label}
                    </Link>
                  </li>
                )
              })}
              <li>
                <Link
                  href="/contact"
                  className="nav-cta"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </li>
            </ul>

            <ThemeToggle />

            <button
              className="mobile-toggle"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              <span style={isOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}} />
              <span style={isOpen ? { opacity: 0 } : {}} />
              <span style={isOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}} />
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
