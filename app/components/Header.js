'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="header">
      <nav className="navbar">
        <div className="container-full">
          <div className="nav-wrapper">
            <Link href="/" className="logo-link">
              <svg width="180" height="60" viewBox="0 0 240 70" xmlns="http://www.w3.org/2000/svg" style={{ display: 'flex', alignItems: 'center' }}>
                <defs>
                  <linearGradient id="lbTheme" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2563eb"/>
                    <stop offset="50%" stopColor="#1e40af"/>
                    <stop offset="100%" stopColor="#1e3a8a"/>
                  </linearGradient>
                </defs>

                {/* Icon */}
                <g>
                  <rect x="10" y="10" width="50" height="50" rx="14" fill="#eff6ff"/>

                  {/* Lead (left) */}
                  <circle cx="22" cy="35" r="3.5" fill="url(#lbTheme)"/>

                  {/* Lenders (right) */}
                  <circle cx="48" cy="25" r="3.5" fill="url(#lbTheme)"/>
                  <circle cx="48" cy="45" r="3.5" fill="url(#lbTheme)"/>

                  {/* Connection lines */}
                  <path d="M22 35 Q34 22 48 25" stroke="url(#lbTheme)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                  <path d="M22 35 Q34 48 48 45" stroke="url(#lbTheme)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                </g>

                {/* Brand Text */}
                <text x="70" y="42"
                      fontFamily="Inter, Poppins, sans-serif"
                      fontSize="28"
                      fontWeight="700"
                      fill="#2563eb">
                  LeadBrokers
                </text>
              </svg>
            </Link>

            <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </button>

            <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/tools">Loan Tools</Link></li>
              <li><Link href="/guidance">Loan Guidance</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact" className="nav-cta">Get Started</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}