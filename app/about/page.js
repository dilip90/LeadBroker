import Link from 'next/link'

export const metadata = {
  title: 'About LeadBrokers',
  description: 'Learn how LeadBrokers helps users in India compare loan offers, check eligibility online, and use EMI tools for smarter borrowing decisions.',
  alternates: {
    canonical: '/about',
  },
}

const values = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="16"/>
        <line x1="8" y1="12" x2="16" y2="12"/>
      </svg>
    ),
    title: 'Transparency',
    desc: 'Complete transparency in all our processes and loan terms'
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Trust',
    desc: 'We partner only with verified and trusted financial institutions'
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    title: 'Speed',
    desc: 'Fast eligibility checks and quick loan approvals'
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    ),
    title: 'Quality',
    desc: 'High-quality service with expert guidance at every step'
  },
]

const whyUs = [
  { title: 'Instant Eligibility Check', desc: 'Get your loan eligibility instantly with our advanced algorithm' },
  { title: 'Multiple Loan Options', desc: 'Choose from personal, home, and business loans' },
  { title: 'Trusted Partners', desc: 'We work with verified and regulated financial institutions' },
  { title: 'Expert Guidance', desc: 'Get personalised advice from our loan experts' },
]

export default function About() {
  return (
    <main>
      {/* Hero */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container" style={{ maxWidth: 840 }}>
          <div className="section-header" style={{ textAlign: 'left', marginBottom: '2rem' }}>
            <div className="section-eyebrow" style={{ marginBottom: 16 }}>About Us</div>
            <h1 style={{ marginBottom: '1.25rem' }}>About LeadBrokers</h1>
            <p style={{ fontSize: '1.05rem', maxWidth: '100%', margin: 0 }}>
              LeadBrokers is a leading loan assistance platform that helps individuals and businesses find the best loan offers from trusted financial partners. Our mission is to make the loan process simple, transparent, and accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section section-dark">
        <div className="container" style={{ maxWidth: 840 }}>
          <div className="section-eyebrow" style={{ marginBottom: 14 }}>Our Mission</div>
          <h2 style={{ textAlign: 'left', marginBottom: '1.25rem' }}>Our Mission</h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8 }}>
            To simplify the loan process by providing instant eligibility checks, accurate EMI calculations, and personalised loan offers from the most trusted financial institutions in India. We believe that financial assistance should be accessible to all, and we work to remove the complexities in the lending process.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container" style={{ maxWidth: 840 }}>
          <div className="section-eyebrow" style={{ marginBottom: 14 }}>What We Stand For</div>
          <h2 style={{ textAlign: 'left', marginBottom: '2rem' }}>Our Values</h2>
          <div className="tools-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
            {values.map((value, idx) => (
              <div key={idx} className="feature-card" style={{ textAlign: 'center', padding: '28px 20px' }}>
                <div className="feature-icon" style={{ margin: '0 auto 1rem' }}>
                  {value.icon}
                </div>
                <h3 style={{ fontSize: '1rem', marginBottom: 8 }}>{value.title}</h3>
                <p style={{ fontSize: '0.875rem', margin: 0, color: 'var(--text-muted)' }}>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="section section-dark">
        <div className="container" style={{ maxWidth: 840 }}>
          <div className="section-eyebrow" style={{ marginBottom: 14 }}>Why Us</div>
          <h2 style={{ textAlign: 'left', marginBottom: '2rem' }}>Why Choose Us?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16 }}>
            {whyUs.map((item, idx) => (
              <div key={idx} className="benefit-item">
                <div className="benefit-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <div className="benefit-text">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" style={{ marginTop: 0 }}>
        <div className="container">
          <h2 style={{ color: 'white' }}>Ready to Find Your Perfect Loan?</h2>
          <p>Get started with our instant eligibility check and find the best loan offers for you</p>
          <Link href="/contact" className="btn btn-lg" style={{ background: 'white', color: 'var(--primary)', fontWeight: 700 }}>
            Check Eligibility Now
          </Link>
        </div>
      </section>
    </main>
  )
}
