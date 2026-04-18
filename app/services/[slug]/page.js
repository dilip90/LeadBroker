import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { services, serviceList } from '../serviceData'

export function generateStaticParams() {
  return serviceList.map((service) => ({ slug: service.slug }))
}

export function generateMetadata({ params }) {
  const service = services[params.slug]

  if (!service) {
    return {
      title: 'Service Not Found - LeadBrokers',
    }
  }

  return {
    title: `${service.title} - LeadBrokers`,
    description: service.tagline,
  }
}

export default function ServiceDetailPage({ params }) {
  const service = services[params.slug]

  if (!service) {
    notFound()
  }

  return (
    <main>
      <section className="section">
        <div className="container">
          <div className="service-hero">
            <div className="service-hero-copy">
              <p className="service-eyebrow">LeadBrokers Service</p>
              <h1 style={{ marginBottom: '20px' }}>{service.title}</h1>
              <p style={{ fontSize: '1.1rem', marginBottom: '18px' }}>{service.tagline}</p>
              <p style={{ marginBottom: '28px' }}>{service.summary}</p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn btn-primary">Talk to an Advisor</Link>
                <Link href="/tools" className="btn btn-outline">Check EMI First</Link>
              </div>
            </div>

            <div className="service-hero-media">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                priority
                sizes="(max-width: 900px) 100vw, 50vw"
                className="service-hero-image"
              />
            </div>
          </div>

          <div className="service-detail-grid">
            <section className="card">
              <h2 style={{ textAlign: 'left', marginBottom: '18px' }}>Best For</h2>
              <ul className="service-detail-list">
                {service.idealFor.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="card">
              <h2 style={{ textAlign: 'left', marginBottom: '18px' }}>What to Expect</h2>
              <ul className="service-detail-list">
                {service.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </div>

          <div className="service-detail-grid">
            <section className="card">
              <h2 style={{ textAlign: 'left', marginBottom: '18px' }}>Typical Documents</h2>
              <ul className="service-detail-list">
                {service.documents.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="card">
              <h2 style={{ textAlign: 'left', marginBottom: '18px' }}>Suggested Flow</h2>
              <ol className="service-detail-list service-detail-ordered">
                {service.process.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </section>
          </div>

          {/* <section className="service-source card">
            <h2 style={{ textAlign: 'left', marginBottom: '14px' }}>Image Source</h2>
            <p style={{ marginBottom: '8px' }}>
              This page uses a finance-related stock image selected to match the service context.
            </p>
            <p style={{ marginBottom: 0 }}>
              Source: <a href={service.sourceUrl} target="_blank" rel="noreferrer">{service.sourceName}</a>
            </p>
          </section> */}
        </div>
      </section>
    </main>
  )
}
