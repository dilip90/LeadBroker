'use client'

import Link from 'next/link'

const ShieldIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', marginRight: 4 }}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
)

const MailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', marginRight: 6, flexShrink: 0 }}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
)

const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', marginRight: 6, flexShrink: 0 }}>
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
)

const ArrowRightIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', marginLeft: 4 }}>
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
)

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Brand */}
        <div className="footer-section footer-brand">
          <svg className="footer-logo" viewBox="0 0 240 70" xmlns="http://www.w3.org/2000/svg" aria-label="LeadBrokers">
            <defs>
              <linearGradient id="lbFooter" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2563eb"/>
                <stop offset="50%" stopColor="#1e40af"/>
                <stop offset="100%" stopColor="#1e3a8a"/>
              </linearGradient>
            </defs>
            <g>
              <rect x="10" y="10" width="50" height="50" rx="14" fill="rgba(219,234,254,0.15)"/>
              <circle cx="22" cy="35" r="3.5" fill="url(#lbFooter)"/>
              <circle cx="48" cy="25" r="3.5" fill="url(#lbFooter)"/>
              <circle cx="48" cy="45" r="3.5" fill="url(#lbFooter)"/>
              <path d="M22 35 Q34 22 48 25" stroke="url(#lbFooter)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              <path d="M22 35 Q34 48 48 45" stroke="url(#lbFooter)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            </g>
            <text x="70" y="42"
                  fontFamily="Inter, Poppins, sans-serif"
                  fontSize="28"
                  fontWeight="700"
                  fill="white">
              LeadBrokers
            </text>
          </svg>
          <p style={{ marginTop: 14 }}>
            Instant loan assistance connecting borrowers with verified financial partners across India.
          </p>
          <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)' }}>
            <ShieldIcon />
            <span>Verified financial partners only</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/tools">Loan Tools</Link></li>
            <li><Link href="/guidance">Loan Guidance</Link></li>
            <li><Link href="/about">About Us</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><Link href="/services/personal-loans">Personal Loans</Link></li>
            <li><Link href="/services/home-loans">Home Loans</Link></li>
            <li><Link href="/services/business-loans">Business Loans</Link></li>
            <li><Link href="/services/eligibility-check">Eligibility Check</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li style={{ display: 'flex', alignItems: 'center', color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem' }}>
              <MailIcon />
              <a href="mailto:techtitan0190@gmail.com" style={{ wordBreak: 'break-all' }}>techtitan0190@gmail.com</a>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', color: 'rgba(255,255,255,0.35)', fontSize: '0.8rem', marginTop: 2 }}>
              <ClockIcon />
              <span>Mon–Sat, 10am–6pm IST</span>
            </li>
            <li style={{ marginTop: 12 }}>
              <Link href="/contact" style={{ color: '#60a5fa', fontWeight: 600, fontSize: '0.875rem', display: 'inline-flex', alignItems: 'center' }}>
                Submit Loan Request
                <ArrowRightIcon />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-disclaimer">
        LeadBrokers is not a bank, NBFC, or lender. We only connect users with verified financial partners. Loan approval and terms are decided solely by the lending partners.
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} LeadBrokers. All rights reserved.</p>
        <div className="footer-links">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-service">Terms of Service</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  )
}
