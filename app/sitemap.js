const routes = [
  '',
  '/about',
  '/contact',
  '/guidance',
  '/tools',
  '/services',
  '/services/personal-loans',
  '/services/home-loans',
  '/services/business-loans',
  '/services/eligibility-check',
  '/privacy-policy',
  '/terms-of-service',
]

export default function sitemap() {
  const lastModified = new Date()

  return routes.map((route) => ({
    url: `https://leadbrokers.in${route || '/'}`,
    lastModified,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  }))
}
