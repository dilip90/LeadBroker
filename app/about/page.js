import Link from 'next/link'

export const metadata = {
  title: 'About LeadBrokers',
  description: 'Learn how LeadBrokers helps users in India compare loan offers, check eligibility online, and use EMI tools for smarter borrowing decisions.',
  alternates: {
    canonical: '/about',
  },
}

export default function About() {
  const values = [
    {
      icon: '🎯',
      title: 'Transparency',
      desc: 'Complete transparency in all our processes and loan terms'
    },
    {
      icon: '🤝',
      title: 'Trust',
      desc: 'We partner only with verified and trusted financial institutions'
    },
    {
      icon: '⚡',
      title: 'Speed',
      desc: 'Fast eligibility checks and quick loan approvals'
    },
    {
      icon: '✓',
      title: 'Quality',
      desc: 'High-quality service with expert guidance at every step'
    },
  ]

  return (
    <main>
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h1>About LeadBrokers</h1>
            <p style={{ fontSize: '1.1rem', marginBottom: '30px' }}>
              LeadBrokers is a leading loan assistance platform that helps individuals and businesses find the best loan offers from trusted financial partners. Our mission is to make the loan process simple, transparent, and accessible to everyone.
            </p>

            <h2 style={{ marginTop: '50px', marginBottom: '20px' }}>Our Mission</h2>
            <p style={{ marginBottom: '40px' }}>
              To simplify the loan process by providing instant eligibility checks, accurate EMI calculations, and personalized loan offers from the most trusted financial institutions in India. We believe that financial assistance should be accessible to all, and we work to remove the complexities in the lending process.
            </p>

            <h2 style={{ marginTop: '50px', marginBottom: '30px' }}>Our Values</h2>
            <div className="tools-grid">
              {values.map((value, idx) => (
                <div key={idx} className="card" style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '2.5rem', marginBottom: '15px' }}>{value.icon}</p>
                  <h3>{value.title}</h3>
                  <p>{value.desc}</p>
                </div>
              ))}
            </div>

            <h2 style={{ marginTop: '50px', marginBottom: '20px' }}>Why Choose Us?</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '40px' }}>
              <div style={{ padding: '20px', backgroundColor: '#f5f7fa', borderRadius: '8px' }}>
                <h4 style={{ color: '#2563eb', marginBottom: '10px' }}>✓ Instant Eligibility Check</h4>
                <p>Get your loan eligibility instantly with our advanced algorithm</p>
              </div>
              <div style={{ padding: '20px', backgroundColor: '#f5f7fa', borderRadius: '8px' }}>
                <h4 style={{ color: '#2563eb', marginBottom: '10px' }}>✓ Multiple Loan Options</h4>
                <p>Choose from personal, home, and business loans</p>
              </div>
              <div style={{ padding: '20px', backgroundColor: '#f5f7fa', borderRadius: '8px' }}>
                <h4 style={{ color: '#2563eb', marginBottom: '10px' }}>✓ Trusted Partners</h4>
                <p>We work with verified and regulated financial institutions</p>
              </div>
              <div style={{ padding: '20px', backgroundColor: '#f5f7fa', borderRadius: '8px' }}>
                <h4 style={{ color: '#2563eb', marginBottom: '10px' }}>✓ Expert Guidance</h4>
                <p>Get personalized advice from our loan experts</p>
              </div>
            </div>

            <div style={{ textAlign: 'center', padding: '40px', backgroundColor: '#2563eb', color: 'white', borderRadius: '12px', marginTop: '50px' }}>
              <h2 style={{ color: 'white', marginBottom: '20px' }}>Ready to Find Your Perfect Loan?</h2>
              <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '30px' }}>Get started with our instant eligibility check and find the best loan offers for you</p>
              <Link href="/contact" className="btn" style={{ background: 'white', color: '#2563eb', fontWeight: '600' }}>Start Now</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
