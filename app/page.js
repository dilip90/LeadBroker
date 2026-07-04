import Link from 'next/link'

export const metadata = {
  title: 'Personal Loan Offers India | Eligibility Check & EMI Tools',
  description: 'Check instant personal loan eligibility, compare offers, and calculate EMI online in India. Fast approval tools, low-interest options, and quick matching.',
  alternates: {
    canonical: '/',
  },
}

export default function Home() {
  const homepageFaqs = [
    {
      q: 'How can I check personal loan eligibility online in India?',
      a: 'You can check personal loan eligibility online by entering your monthly income, current EMI obligations, and employment type. This helps you estimate borrowing comfort before applying.',
    },
    {
      q: 'Can I compare personal loan offers before applying?',
      a: 'Yes. Comparing loan offers helps you review interest rates, EMI, repayment tenure, and lender fit before you submit a final application.',
    },
    {
      q: 'Is an EMI calculator useful before applying for an instant loan?',
      a: 'Yes. An EMI calculator helps you understand your likely monthly repayment, total interest, and overall affordability so you can choose a better loan tenure.',
    },
    {
      q: 'Can users with low CIBIL still explore loan options?',
      a: 'Users with low CIBIL can still explore loan options, but final approval depends on lender policy, income profile, obligations, and documentation.',
    },
  ]

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How can I check personal loan eligibility online in India?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can check personal loan eligibility online by entering your monthly income, existing EMIs, and employment type. LeadBrokers gives an instant estimate to help you plan before applying.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does checking loan eligibility affect my CIBIL score?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'An eligibility check tool is typically used for indicative planning and does not automatically mean final lender approval. Final terms and lender checks depend on documentation and profile review.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I compare personal loan offers before applying?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. You can compare personal loan offers by checking estimated EMI, interest rate, repayment tenure, and lender suitability before moving ahead with an application.',
        },
      },
    ],
  }

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'LeadBrokers',
    url: 'https://leadbrokers.in',
    areaServed: 'India',
    description: 'LeadBrokers helps users in India check personal loan eligibility, compare loan offers, and use EMI tools online.',
  }

  const benefits = [
    { icon: '✓', title: 'Instant Eligibility Check', desc: 'Get your eligibility within seconds' },
    { icon: '✓', title: 'Trusted Partners', desc: 'Connect with verified financial institutions' },
    { icon: '✓', title: 'Best Offers', desc: 'Compare and choose the best loan rates' },
    { icon: '✓', title: 'Expert Guidance', desc: 'Professional advice for your financial needs' },
  ]

  const steps = [
    { num: '1', title: 'Share Details', desc: 'Enter your basic information and loan requirements' },
    { num: '2', title: 'Check Eligibility', desc: 'Get instant eligibility results in seconds' },
    { num: '3', title: 'View Offers', desc: 'See personalised loan offers from partners' },
    { num: '4', title: 'Get Connected', desc: 'Connect directly with financial partners' },
  ]

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            {/* Left */}
            <div className="hero-text">
              <div className="hero-badge">
                <span className="hero-badge-dot" />
                50,000+ eligibility checks · Borrowers across India
              </div>

              <h1>
                Instant Personal Loan{' '}
                <span style={{ color: 'var(--primary)', position: 'relative', display: 'inline-block' }}>
                  Offers
                  <svg
                    aria-hidden="true"
                    style={{ position: 'absolute', bottom: '-6px', left: 0, width: '100%', height: 6 }}
                    viewBox="0 0 100 6"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path d="M0 5 Q25 0 50 5 Q75 10 100 5" stroke="var(--primary)" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  </svg>
                </span>{' '}
                in Minutes
              </h1>

              <p>
                Check personal loan eligibility online, compare offers from banks and NBFCs, and use EMI tools to find the right loan in India.
              </p>

              {/* Bank logos strip — TODO: add real logos later
              <div style={{ marginBottom: '2rem' }}>
                <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '10px' }}>
                  Loan offers from trusted partners
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {['SBI', 'HDFC Bank', 'ICICI Bank', 'Axis Bank', 'Kotak', 'IDFC First'].map(bank => (
                    <span key={bank} style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '5px 12px',
                      borderRadius: 'var(--r-full)',
                      border: '1px solid var(--border)',
                      background: 'var(--surface)',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      color: 'var(--text-secondary)',
                      letterSpacing: '-0.01em',
                    }}>{bank}</span>
                  ))}
                </div>
              </div>
              */}

              <div style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  '✓ 100% free eligibility check — no credit score impact',
                  '✓ Compare offers from top banks & NBFCs',
                  '✓ Get matched in under 2 minutes',
                ].map(text => (
                  <span key={text} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'flex-start', gap: 6 }}>
                    {text}
                  </span>
                ))}
              </div>

              <div className="cta-buttons">
                <Link href="/contact" className="btn btn-primary btn-lg">
                  Check Eligibility
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </Link>
                <Link href="/tools" className="btn btn-secondary btn-lg">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                  EMI Calculator
                </Link>
              </div>

              {/* Mobile-only trust strip — hidden on desktop via CSS */}
              <div className="hero-mobile-stats">
                <div className="hero-mobile-stat">
                  <span className="hero-mobile-stat-val">50K+</span>
                  <span className="hero-mobile-stat-lbl">Checks Done</span>
                </div>
                <div className="hero-mobile-stat">
                  <span className="hero-mobile-stat-val">6</span>
                  <span className="hero-mobile-stat-lbl">Bank Partners</span>
                </div>
                <div className="hero-mobile-stat">
                  <span className="hero-mobile-stat-val">Free</span>
                  <span className="hero-mobile-stat-lbl">Tools & Check</span>
                </div>
              </div>
            </div>

            {/* Right — phone illustration */}
            <div className="hero-illustration">
              <div className="hero-bg-circle" />
              <div style={{
                position: 'relative',
                zIndex: 2,
                width: 'min(240px, 90%)',
                background: '#0f172a',
                borderRadius: 40,
                padding: '18px 10px 22px',
                boxShadow: '0 24px 56px rgba(0,0,0,0.3)',
              }}>
                {/* Status bar */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 14 }}>
                  <div style={{ width: 80, height: 6, borderRadius: 3, background: '#1e293b', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', left: 0, top: 0, width: '72%', height: '100%', borderRadius: 3, background: '#22c55e' }} />
                  </div>
                </div>

                {/* Screen */}
                <div style={{ background: '#ffffff', borderRadius: 28, padding: '18px 14px 14px', display: 'flex', flexDirection: 'column', gap: 10 }}>

                  {/* App name */}
                  <div style={{ textAlign: 'center', fontSize: '1rem', fontWeight: 700, color: '#2563eb', letterSpacing: '-0.02em' }}>
                    LeadBrokers
                  </div>

                  {/* Loan estimate card */}
                  <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 18, padding: '14px 12px', textAlign: 'center' }}>
                    <div style={{ fontSize: '0.72rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>
                      Your Loan Estimate
                    </div>
                    <div style={{ fontSize: '1.7rem', fontWeight: 800, color: '#1d4ed8', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                      ₹2,50,000
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5, marginTop: 10 }}>
                      <div style={{
                        width: 22, height: 22, borderRadius: '50%',
                        background: '#ecfdf5', border: '2px solid #22c55e',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '0.7rem', color: '#16a34a', fontWeight: 700,
                      }}>✓</div>
                      <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#16a34a' }}>Eligible</span>
                    </div>
                  </div>

                  {/* Details rows */}
                  <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 18, padding: '4px 12px' }}>
                    {[
                      { label: 'Monthly EMI', value: '₹8,500+' },
                      { label: 'Interest Rate', value: '10–24% p.a.' },
                      { label: 'Tenure', value: '12–60 mo' },
                    ].map((row, i) => (
                      <div key={i} style={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                        padding: '8px 0',
                        borderBottom: i < 2 ? '1px solid #e2e8f0' : 'none',
                      }}>
                        <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>{row.label}</span>
                        <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#1d4ed8' }}>{row.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div style={{
                    background: '#2563eb', borderRadius: 24,
                    padding: '11px 12px', textAlign: 'center',
                    fontSize: '0.85rem', fontWeight: 700, color: 'white',
                    letterSpacing: '-0.01em',
                  }}>
                    Check Eligibility
                  </div>

                  {/* Disclaimer */}
                  <div style={{ textAlign: 'center', fontSize: '0.6rem', color: '#94a3b8', lineHeight: 1.4 }}>
                    *Indicative figures. Final terms by lender.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Loan Tools ─────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Free Tools</div>
            <h2>Loan Tools for EMI Calculation and Eligibility Check</h2>
            <p>Smart calculators to help you plan before you apply</p>
          </div>

          <div className="tools-grid">
            <div className="card card-elevated">
              <div className="feature-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              <h3>Personal Loan EMI Calculator</h3>
              <p>Calculate monthly EMI, total interest, and repayment outgo before you apply for a personal loan online.</p>
              <Link href="/tools#emi" className="btn btn-primary">Calculate Now</Link>
            </div>

            <div className="card card-elevated">
              <div className="feature-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                </svg>
              </div>
              <h3>Loan Eligibility Checker</h3>
              <p>Check loan eligibility online using income and EMI details to estimate approval comfort before applying.</p>
              <Link href="/tools#eligibility" className="btn btn-primary">Check Now</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefits ───────────────────────────────────────── */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Why LeadBrokers</div>
            <h2>Why Choose LeadBrokers for Personal Loan Comparison in India?</h2>
          </div>
          <div className="benefits-list animate-children">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="benefit-item">
                <div className="benefit-icon">{benefit.icon}</div>
                <div className="benefit-text">
                  <h4>{benefit.title}</h4>
                  <p>{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ───────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Process</div>
            <h2>How to Check Eligibility and Compare Loan Offers</h2>
            <p>Four simple steps to find the right loan for you</p>
          </div>
          <div className="how-it-works animate-children">
            {steps.map((step, idx) => (
              <div key={idx} className="step">
                <div className="step-number">{step.num}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQs ───────────────────────────────────────────── */}
      <section className="section section-dark">
        <div className="container" style={{ maxWidth: 860 }}>
          <div className="section-header">
            <div className="section-eyebrow">FAQs</div>
            <h2>Frequently Asked Questions About Instant Personal Loans</h2>
          </div>
          <div style={{ display: 'grid', gap: 12 }}>
            {homepageFaqs.map((faq) => (
              <div key={faq.q} className="card" style={{ padding: '22px 24px' }}>
                <h3 style={{ marginBottom: 10, fontSize: '1rem', color: 'var(--text)', letterSpacing: '-0.01em' }}>{faq.q}</h3>
                <p style={{ marginBottom: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section className="cta-section" style={{ marginTop: 0 }}>
        <div className="container">
          <div className="section-eyebrow" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.25)', marginBottom: 16 }}>
            Get Started Free
          </div>
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>Ready to Check Your Loan Eligibility?</h2>
          <p>Use LeadBrokers to compare personal loan offers, calculate EMI, and move toward fast approval with more confidence.</p>
          <Link href="/contact" className="btn btn-lg" style={{ background: 'white', color: 'var(--primary)', fontWeight: 700 }}>
            Get Loan Offers Now
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </Link>
        </div>
      </section>
    </main>
  )
}
