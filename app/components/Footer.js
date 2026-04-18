'use client'

import Link from 'next/link'
import Logo from './Logo'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container-full">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-brand">
              <Logo className="footer-logo" />
              <h3>LeadBrokers</h3>
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
