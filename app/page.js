import Link from 'next/link'

export const metadata = {
  title: 'Instant Personal Loan India | Eligibility & EMI Tools',
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
    { icon: '\u2713', title: 'Instant Eligibility Check', desc: 'Get your eligibility within seconds' },
    { icon: '\u2713', title: 'Trusted Partners', desc: 'Connect with verified financial institutions' },
    { icon: '\u2713', title: 'Best Offers', desc: 'Compare and choose the best loan rates' },
    { icon: '\u2713', title: 'Expert Guidance', desc: 'Professional advice for your financial needs' },
  ]

  const steps = [
    { num: '1', title: 'Share Details', desc: 'Enter your basic information' },
    { num: '2', title: 'Check Eligibility', desc: 'Get instant eligibility results' },
    { num: '3', title: 'View Offers', desc: 'See personalized loan offers' },
    { num: '4', title: 'Get Connected', desc: 'Connect with financial partners' },
  ]

  const testimonials = [
    {
      rating: '\u2605\u2605\u2605\u2605\u2605',
      text: 'LeadBrokers helped me get the perfect loan offer in just 10 minutes. The process was super simple!',
      name: 'Rajesh Kumar',
      role: 'Business Owner'
    },
    {
      rating: '\u2605\u2605\u2605\u2605\u2605',
      text: 'Best EMI calculator and eligibility checker I have used. Very accurate and user-friendly.',
      name: 'Priya Sharma',
      role: 'Salaried Professional'
    },
    {
      rating: '\u2605\u2605\u2605\u2605\u2605',
      text: 'Great service! Different loan options from multiple financial partners made my choice easy.',
      name: 'Amit Patel',
      role: 'Entrepreneur'
    },
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

      {/* Hero Section */}
      <section className="hero" style={{
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
        padding: '120px 0 80px',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
      }}>
        <div className="container" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px'
        }}>
          <div className="hero-grid" style={{
            display: 'grid',
            gap: '3rem',
            alignItems: 'center',
            position: 'relative',
            zIndex: '1'
          }}>
            {/* Left Column - Text Content */}
            <div className="hero-text" style={{
              paddingRight: '16px'
            }}>
              <div className="hero-badge" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#f0f4ff',
                color: '#2563eb',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '14px',
                fontWeight: '500',
                marginBottom: '24px'
              }}>
                <span style={{
                  width: '8px',
                  height: '8px',
                  background: '#2563eb',
                  borderRadius: '50%'
                }}></span>
                Trusted by 10,000+ Users
              </div>

              <h1 style={{
                fontSize: '56px',
                fontWeight: '700',
                lineHeight: '1.1',
                color: '#1e293b',
                marginBottom: '24px',
                letterSpacing: '-0.02em'
              }}>
                Instant Personal Loan{' '}
                <span style={{
                  color: '#2563eb',
                  position: 'relative'
                }}>
                  Approval
                  <svg style={{
                    position: 'absolute',
                    bottom: '-8px',
                    left: '0',
                    width: '100%',
                    height: '8px'
                  }} viewBox="0 0 100 8" fill="none">
                    <path d="M0 6 Q25 0 50 6 Q75 12 100 6" stroke="#2563eb" strokeWidth="2" fill="none"/>
                  </svg>
                </span>{' '}
                in Minutes
              </h1>

              <p style={{
                fontSize: '20px',
                lineHeight: '1.6',
                color: '#64748b',
                marginBottom: '40px',
                maxWidth: '500px'
              }}>
                Check personal loan eligibility online, compare offers from banks and NBFCs, and use EMI tools to find the right loan in India.
              </p>

              <div style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#2563eb',
                marginBottom: '40px',
                padding: '12px 16px',
                background: '#f0f4ff',
                borderRadius: '8px',
                display: 'inline-block'
              }}>
                ✓ We are dealing with all types of loans
              </div>

              <div className="hero-stats" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '32px',
                marginBottom: '48px'
              }}>
                <div className="stat-item">
                  <div style={{
                    fontSize: '24px',
                    fontWeight: '700',
                    color: '#2563eb',
                    marginBottom: '8px'
                  }}>Instant Eligibility</div>
                  <div style={{
                    fontSize: '14px',
                    color: '#64748b'
                  }}>Check loan eligibility online in minutes</div>
                </div>
                <div className="stat-item">
                  <div style={{
                    fontSize: '24px',
                    fontWeight: '700',
                    color: '#2563eb',
                    marginBottom: '8px'
                  }}>Compare Offers</div>
                  <div style={{
                    fontSize: '14px',
                    color: '#64748b'
                  }}>Compare personal loan offers from verified lenders</div>
                </div>
                <div className="stat-item">
                  <div style={{
                    fontSize: '24px',
                    fontWeight: '700',
                    color: '#2563eb',
                    marginBottom: '8px'
                  }}>Expert Guidance</div>
                  <div style={{
                    fontSize: '14px',
                    color: '#64748b'
                  }}>Get support for fast approval and better loan planning</div>
                </div>
              </div>

              <div className="cta-buttons" style={{
                display: 'flex',
                gap: '16px',
                alignItems: 'center'
              }}>
                <Link href="/contact" style={{
                  background: '#2563eb',
                  color: 'white',
                  padding: '16px 32px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontSize: '16px',
                  fontWeight: '600',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)'
                }}>
                  Check Eligibility
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>

                <Link href="/tools" style={{
                  background: 'transparent',
                  color: '#2563eb',
                  padding: '16px 32px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontSize: '16px',
                  fontWeight: '600',
                  border: '2px solid #2563eb',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.2s ease'
                }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 8L6 12L14 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Use EMI Calculator
                </Link>
              </div>
            </div>

            {/* Right Column - Illustration */}
            <div className="hero-illustration" style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%'
            }}>
              <div className="hero-bg-circle" style={{
                position: 'absolute',
                inset: '0',
                margin: 'auto',
                width: 'min(320px, 78vw)',
                aspectRatio: '1 / 1',
                borderRadius: '50%',
                background: '#eff6ff',
                opacity: '0.6'
              }}></div>

              <svg viewBox="0 0 240 520" fill="none" aria-hidden="true" style={{
                position: 'relative',
                zIndex: '2',
                width: 'min(240px, 100%)',
                maxWidth: '240px',
                height: 'auto',
                display: 'block'
              }}>
                <rect x="10" y="24" width="220" height="472" rx="36" fill="#0f172a"/>
                <rect x="22" y="48" width="196" height="432" rx="28" fill="#ffffff"/>

                <rect x="34" y="68" width="172" height="10" rx="5" fill="#e2e8f0"/>
                <rect x="34" y="68" width="138" height="10" rx="5" fill="#22c55e"/>
                <text x="120" y="118" textAnchor="middle" fontSize="18" fontWeight="700" fill="#2563eb">LeadBrokers</text>

                <rect x="34" y="132" width="172" height="154" rx="20" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1"/>
                <text x="120" y="170" textAnchor="middle" fontSize="14" fontWeight="600" fill="#475569">Your Loan Status</text>
                <text x="120" y="210" textAnchor="middle" fontSize="28" fontWeight="700" fill="#1d4ed8">{'\u20B9'}2,50,000</text>
                <g transform="translate(120, 248)">
                  <circle cx="0" cy="0" r="18" fill="#ecfdf5" stroke="#22c55e" strokeWidth="2"/>
                  <path d="M-7 1 L-2 7 L8 -5" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <text x="120" y="278" textAnchor="middle" fontSize="11" fontWeight="600" fill="#16a34a">Approved</text>

                <rect x="42" y="302" width="156" height="90" rx="20" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1"/>
                <text x="56" y="332" fontSize="13" fill="#64748b" textAnchor="start">Monthly EMI</text>
                <text x="184" y="332" fontSize="15" fontWeight="700" fill="#1d4ed8" textAnchor="end">{'\u20B9'}8,500</text>
                <text x="56" y="354" fontSize="13" fill="#64748b" textAnchor="start">Interest Rate</text>
                <text x="184" y="354" fontSize="15" fontWeight="700" fill="#1d4ed8" textAnchor="end">8.5%</text>
                <text x="56" y="376" fontSize="13" fill="#64748b" textAnchor="start">Tenure</text>
                <text x="184" y="376" fontSize="15" fontWeight="700" fill="#1d4ed8" textAnchor="end">36 mo</text>

                <rect x="42" y="404" width="156" height="46" rx="23" fill="#2563eb"/>
                <text x="120" y="434" textAnchor="middle" fontSize="15" fontWeight="700" fill="white">Apply Now</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Preview Section */}
      <section className="section">
        <div className="container">
          <h2>Loan Tools for EMI Calculation and Eligibility Check</h2>
          <div className="tools-grid">
            <div className="card">
              <h3>Personal Loan EMI Calculator</h3>
              <p>Calculate monthly EMI, total interest, and repayment outgo before you apply for a personal loan online.</p>
              <Link href="/tools#emi" className="btn btn-primary" style={{ display: 'block', textAlign: 'center', width: '100%', marginTop: 'auto' }}>Calculate Now</Link>
            </div>
            <div className="card">
              <h3>Loan Eligibility Checker</h3>
              <p>Check loan eligibility online using income and EMI details to estimate approval comfort before applying.</p>
              <Link href="/tools#eligibility" className="btn btn-primary" style={{ display: 'block', textAlign: 'center', width: '100%', marginTop: 'auto' }}>Check Now</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section section-dark">
        <div className="container">
          <h2>Why Choose LeadBrokers for Personal Loan Comparison in India?</h2>
          <div className="benefits-list">
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

      {/* How It Works */}
      <section className="section">
        <div className="container">
          <h2>How to Check Eligibility and Compare Loan Offers</h2>
          <div className="how-it-works">
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

      {/* Testimonials */}
      <section className="section section-dark">
        <div className="container">
          <h2>What Borrowers Say About Our Loan Tools</h2>
          <div className="testimonial-grid">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="testimonial">
                <div className="testimonial-rating">{testimonial.rating}</div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <p className="testimonial-author">{testimonial.name}</p>
                <p className="testimonial-role">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2>Frequently Asked Questions About Instant Personal Loans</h2>
          <div style={{ display: 'grid', gap: '18px' }}>
            {homepageFaqs.map((faq) => (
              <div key={faq.q} className="card" style={{ padding: '24px' }}>
                <h3 style={{ marginBottom: '10px', fontSize: '1.1rem' }}>{faq.q}</h3>
                <p style={{ marginBottom: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" style={{ background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)', color: 'white', padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>Ready to Check Your Loan Eligibility?</h2>
          <p style={{ color: '#e0f2fe', fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>Use LeadBrokers to compare personal loan offers, calculate EMI, and move toward fast approval with more confidence.</p>
          <Link href="/contact" className="btn" style={{ background: 'white', color: '#2563eb', fontWeight: '600', padding: '14px 40px', fontSize: '1.05rem' }}>Get Loan Offers Now</Link>
        </div>
      </section>
    </main>
  )
}
