'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container-full">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-brand">
              <svg className="footer-logo" viewBox="0 0 240 70" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="lbFooter" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2563eb"/>
                    <stop offset="50%" stopColor="#1e40af"/>
                    <stop offset="100%" stopColor="#1e3a8a"/>
                  </linearGradient>
                </defs>

                {/* Icon */}
                <g>
                  <rect x="10" y="10" width="50" height="50" rx="14" fill="#dbeafe"/>

                  {/* Lead (left) */}
                  <circle cx="22" cy="35" r="3.5" fill="url(#lbFooter)"/>

                  {/* Lenders (right) */}
                  <circle cx="48" cy="25" r="3.5" fill="url(#lbFooter)"/>
                  <circle cx="48" cy="45" r="3.5" fill="url(#lbFooter)"/>

                  {/* Connection lines */}
                  <path d="M22 35 Q34 22 48 25" stroke="url(#lbFooter)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                  <path d="M22 35 Q34 48 48 45" stroke="url(#lbFooter)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                </g>

                {/* Brand Text */}
                <text x="70" y="42"
                      fontFamily="Inter, Poppins, sans-serif"
                      fontSize="28"
                      fontWeight="700"
                      fill="white">
                  LeadBrokers
                </text>
              </svg>
              <h3></h3>
              <p>Instant loan assistance from trusted financial partners</p>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/tools">Loan Tools</Link></li>
              <li><Link href="/guidance">Loan Guidance</Link></li>
              <li><Link href="/about">About Us</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><Link href="/services/personal-loans">Personal Loans</Link></li>
              <li><Link href="/services/home-loans">Home Loans</Link></li>
              <li><Link href="/services/business-loans">Business Loans</Link></li>
              <li><Link href="/services/eligibility-check">Eligibility Check</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:info@leadbrokers.in">Email: info@leadbrokers.in</a></li>
              <li><a href="tel:+919876543210">Phone: +91 98765 43210</a></li>
              {/* <li>Website: leadbrokers.in</li> */}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} LeadBrokers. All rights reserved.</p>
          <div className="footer-links">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
