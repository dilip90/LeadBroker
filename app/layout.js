import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

export const metadata = {
  metadataBase: new URL('https://leadbrokers.in'),
  title: {
    default: 'Instant Personal Loan India | Eligibility & EMI Tools',
    template: '%s | LeadBrokers',
  },
  alternates: {
    canonical: '/',
  },
  description: 'Check instant personal loan eligibility, compare offers, and calculate EMI online in India. Fast approval tools, low-interest options, and quick matching.',
  keywords: [
    'instant personal loan India',
    'check loan eligibility online',
    'personal loan EMI calculator',
    'compare personal loan offers',
    'low interest personal loan India',
    'fast approval personal loan',
    'low CIBIL personal loan India',
    'online loan tools India',
  ],
  openGraph: {
    title: 'Instant Personal Loan India | Eligibility & EMI Tools',
    description: 'Check instant personal loan eligibility, compare offers, and calculate EMI online in India. Fast approval tools and low-interest options.',
    type: 'website',
    url: 'https://leadbrokers.in',
    siteName: 'LeadBrokers',
    images: [
      {
        url: '/og/leadbrokers-home.svg',
        width: 1200,
        height: 630,
        alt: 'LeadBrokers instant personal loan eligibility and EMI tools',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Instant Personal Loan India | Eligibility & EMI Tools',
    description: 'Check eligibility, compare loan offers, and calculate EMI online in India with fast approval-focused tools.',
    images: ['/og/leadbrokers-home.svg'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
