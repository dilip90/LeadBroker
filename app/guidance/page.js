'use client'

import { useState } from 'react'

const ChevronIcon = () => (
  <svg className="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
)

export default function Guidance() {
  const [openGuides, setOpenGuides] = useState(new Set())
  const [expandedFaq, setExpandedFaq] = useState(null)

  const toggleGuide = (idx) => {
    setOpenGuides(prev => {
      const next = new Set(prev)
      if (next.has(idx)) next.delete(idx)
      else next.add(idx)
      return next
    })
  }

  const toggleFaq = (idx) => {
    setExpandedFaq(prev => prev === idx ? null : idx)
  }

  const guides = [
    {
      title: 'Personal Loan Guide',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
          <line x1="1" y1="10" x2="23" y2="10"/>
        </svg>
      ),
      summary: 'Learn everything about personal loans, their benefits, eligibility criteria, and how to choose the right loan for your needs.',
      details: [
        'Advantages of personal loans - flexible usage, quick approval, no collateral required',
        'Eligibility criteria vary by lender but typically require 21-65 years age, stable income',
        'Required documents: PAN, Aadhar, Salary slips (last 3 months), Bank statements (6-12 months), IT returns',
        'Interest rate factors: Credit score, income, employment type, loan amount, tenure',
        'Repayment strategies: Choose tenure wisely, pay extra whenever possible, use balance transfer for better rates',
        'Tax benefits: Some personal loans used for higher education may qualify for deductions'
      ]
    },
    {
      title: 'Home Loan Guide',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      ),
      summary: 'Comprehensive guide to home loans, down payments, loan tenure options, and tips for getting the best rates.',
      details: [
        'Home loans vs. other options: Lowest interest rates, longest repayment period, significant tax benefits',
        'Down payment & LTV: Usually 20-30% down payment required, higher down payment gets better rates',
        'Fixed vs. Floating rates: Fixed rates provide certainty, floating rates may be cheaper initially but carry risk',
        'Eligibility: Based on income, credit score (650+), age, employment stability',
        'Documentation: Property documents, income proof, identity/address proof, bank statements, NOC from employer',
        'EMI calculation: Use our EMI calculator - typical home loan tenure is 15-30 years',
        'Tax benefits: 80C (principal repayment up to ₹1.5L), 24(b) (interest up to ₹2L per year)'
      ]
    },
    {
      title: 'Business Loan Guide',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
        </svg>
      ),
      summary: 'Guide for business and startup loans, eligibility criteria, required documents, and growth strategies.',
      details: [
        'Types of business loans: Working capital loans, term loans, overdraft facilities, equipment financing',
        'Eligibility: Business registration (min 2 years old), annual turnover ₹25L+, credit score 650+',
        'Documentation required: Business registration, PAN, GST certificate, last 2 years ITR, profit/loss statements',
        'Loan approval timeline: 5-10 business days for traditional banks, 2-3 days for digital lenders',
        'Interest rates: Typically 12-18% for business loans, lower than personal loans',
        'Using business loans: Expansion, equipment purchase, working capital, technology upgrades',
        'Managing repayment: Track cash flow, maintain buffer fund, consider seasonal business patterns'
      ]
    },
    {
      title: 'EMI Management & Planning',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"/>
          <line x1="12" y1="20" x2="12" y2="4"/>
          <line x1="6" y1="20" x2="6" y2="14"/>
        </svg>
      ),
      summary: 'Master your EMI payments with smart strategies to reduce interest burden and manage multiple loans.',
      details: [
        'How EMI is calculated: Principal + Interest component decreases and increases respectively over time',
        'Reducing interest burden: Larger down payment, shorter tenure, higher monthly payments when possible',
        'Managing multiple EMIs: Calculate total EMI to income ratio (should not exceed 40-50% of net income)',
        'Early repayment strategies: Pay lump sum during bonus season, refinance at lower rates',
        'EMI to income ratio: Healthy ratio is 30-40% - this ensures financial stability',
        'Refinancing options: Balance transfer, loan restructuring, debt consolidation at lower rates',
        'Emergency preparedness: Maintain emergency fund = 6 months of EMI + living expenses'
      ]
    }
  ]

  const faqs = [
    {
      q: 'What is the minimum loan amount I can apply for?',
      a: 'Personal loans typically start from ₹10,000, home loans from ₹3,00,000, and business loans from ₹1,00,000. The maximum ranges from ₹50,00,000 depending on your income, credit profile, and the lender\'s policies.'
    },
    {
      q: 'How long does the loan approval process take?',
      a: 'Traditional banks: 5-7 business days. Digital lenders: 24-48 hours for loans up to ₹10,00,000. Some digital lenders approve within 2-3 hours. The timeline depends on document completeness and verification.'
    },
    {
      q: 'What documents are required for a loan application?',
      a: 'Standard documents: Government ID (PAN, Aadhar), Address Proof (utility bills, rental agreement), Income Proof (salary slips for last 3 months, IT returns for last 2 years), Bank Statements (last 6-12 months). Self-employed applicants need: Business registration, profit/loss statements, GST certificate.'
    },
    {
      q: 'Can I prepay my loan without penalties?',
      a: 'Yes, most lenders allow prepayment. Prepayment charges typically range from 1-3% of outstanding amount during initial years. Digital lenders often have zero prepayment charges. Always verify with your specific lender before signing the agreement.'
    },
    {
      q: 'What is the minimum credit score required?',
      a: 'Banks typically require 700+, NBFC lenders 650+, and digital lenders may accept 600+. A credit score of 750+ gets you the best interest rates and highest loan amounts. You can check your credit score for free on CIBIL, Experian, and other credit bureaus.'
    },
    {
      q: 'How is EMI calculated?',
      a: 'EMI = [P × r × (1+r)^n] / [(1+r)^n - 1], where P = Principal, r = Monthly interest rate, n = Number of months. Our EMI calculator provides instant calculations for any loan amount, rate, and tenure. It also shows total interest payable.'
    },
    {
      q: 'Can I change my loan tenure after approval?',
      a: 'Through balance transfer or refinancing, you can change your loan tenure. Shorter tenure increases EMI but reduces total interest. Longer tenure reduces EMI but increases total interest. We can help you find the best refinancing options available.'
    },
    {
      q: 'Which loan type should I choose?',
      a: 'Personal Loan: Quick approval, flexible usage, higher interest rates (12-24%). Home Loan: Lowest interest rates (6-9%), tax benefits, long tenure. Business Loan: For business growth, competitive rates (12-18%), requires business documentation.'
    }
  ]

  const tips = [
    {
      title: 'Improve Your Credit Score',
      content: 'Pay bills on time, maintain low credit utilization (below 30%), avoid multiple loan applications, check for errors in credit report'
    },
    {
      title: 'Negotiate Better Rates',
      content: 'Compare offers from multiple lenders, check for special schemes, negotiate with relationship managers, leverage your credit score'
    },
    {
      title: 'Plan Your EMI Burden',
      content: 'Keep total EMI at 40-50% of net income, maintain emergency fund, review loan agreement before signing'
    },
    {
      title: 'Documentation Ready',
      content: 'Keep digital copies of all docs, organize by category, use document scanner apps, maintain original documents safely'
    }
  ]

  return (
    <main>
      <section className="section">
        <div className="container">
          {/* Page header */}
          <div className="section-header">
            <div className="section-eyebrow">Learning Center</div>
            <h1 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: '0.75rem' }}>Loan Guidance</h1>
            <p>Expert advice and guides to help you make informed decisions about your loans</p>
          </div>

          {/* Guides */}
          <div style={{ marginBottom: '4rem' }}>
            <div className="section-eyebrow" style={{ marginBottom: 20 }}>Comprehensive Guides</div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 20,
              alignItems: 'start',
            }}>
              {guides.map((guide, idx) => (
                <div key={idx} className="card card-elevated" style={{ padding: 24 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                    <div className="feature-icon" style={{ margin: 0, width: 40, height: 40 }}>
                      {guide.icon}
                    </div>
                    <h3 style={{ margin: 0, fontSize: '1.05rem', color: 'var(--text)' }}>{guide.title}</h3>
                  </div>

                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: 16, lineHeight: 1.65 }}>
                    {guide.summary}
                  </p>

                  {openGuides.has(idx) && (
                    <div style={{
                      marginBottom: 16,
                      paddingTop: 14,
                      borderTop: '1px solid var(--border)',
                      animation: 'slideDown 0.2s ease both',
                    }}>
                      <p style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                        Key Topics
                      </p>
                      <ul style={{ paddingLeft: 16, margin: 0 }}>
                        {guide.details.map((detail, didx) => (
                          <li key={didx} style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: 6 }}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <button
                    className={`btn ${openGuides.has(idx) ? 'btn-secondary' : 'btn-primary'}`}
                    onClick={() => toggleGuide(idx)}
                    style={{ width: '100%', justifyContent: 'center', marginTop: 'auto' }}
                  >
                    {openGuides.has(idx) ? 'Show Less' : 'Read More'}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Expert Tips */}
          <div style={{ marginBottom: '4rem' }}>
            <div className="section-eyebrow" style={{ marginBottom: 20 }}>Expert Tips</div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 16,
            }}>
              {tips.map((tip, idx) => (
                <div key={idx} className="benefit-item" style={{ flexDirection: 'column', gap: 10, padding: '22px 20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div className="benefit-icon" style={{ width: 36, height: 36, minWidth: 36 }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="12" y1="8" x2="12" y2="12"/>
                        <line x1="12" y1="16" x2="12.01" y2="16"/>
                      </svg>
                    </div>
                    <h4 style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text)' }}>{tip.title}</h4>
                  </div>
                  <p style={{ margin: 0, fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{tip.content}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs */}
          <div style={{ maxWidth: 800, margin: '0 auto 3.5rem' }}>
            <div className="section-eyebrow" style={{ marginBottom: 20 }}>FAQs</div>
            {faqs.map((faq, idx) => (
              <div key={idx} className={`faq-item${expandedFaq === idx ? ' open' : ''}`}>
                <button
                  className="faq-btn"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={expandedFaq === idx}
                >
                  <span>{faq.q}</span>
                  <ChevronIcon />
                </button>
                {expandedFaq === idx && (
                  <div className="faq-answer">{faq.a}</div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{
            padding: '40px 36px',
            background: 'var(--primary-subtle)',
            border: '1px solid var(--primary-muted)',
            borderRadius: 'var(--r-xl)',
            textAlign: 'center',
          }}>
            <h3 style={{ color: 'var(--primary)', marginBottom: 10, fontSize: '1.35rem' }}>Ready to explore loan options?</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 24, fontSize: '0.95rem' }}>
              Use our tools to calculate EMI and check your eligibility with trusted lenders
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/tools" className="btn btn-primary">
                Go to Tools
              </a>
              <a href="/contact" className="btn btn-secondary">
                Get Loan Offers
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
