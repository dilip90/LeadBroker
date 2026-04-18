import Link from 'next/link'
import Image from 'next/image'
import { serviceList } from './serviceData'

export const metadata = {
  title: 'Loan Services - LeadBrokers',
  description: 'Explore personal loan, home loan, business loan, and eligibility support pages from LeadBrokers.',
}

export default function ServicesPage() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto 48px', textAlign: 'center' }}>
            <h1 style={{ marginBottom: '16px' }}>Loan Services</h1>
            <p style={{ fontSize: '1.1rem' }}>
              Explore our major loan categories and learn what each option is best suited for before you compare offers.
            </p>
          </div>

          <div className="service-grid">
            {serviceList.map((service) => (
              <article key={service.slug} className="service-card">
                <div className="service-card-media">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="service-card-image"
                  />
                </div>
                <div className="service-card-body">
                  <p className="service-eyebrow">LeadBrokers Service</p>
                  <h2 style={{ marginBottom: '12px', textAlign: 'left' }}>{service.title}</h2>
                  <p style={{ marginBottom: '20px' }}>{service.tagline}</p>
                  <ul className="service-mini-list">
                    {service.highlights.slice(0, 3).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <Link href={`/services/${service.slug}`} className="btn btn-primary" style={{ marginTop: '24px' }}>
                    View Service
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
