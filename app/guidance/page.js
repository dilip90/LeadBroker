'use client'

import { useState } from 'react'

export default function Guidance() {
  const [expandedGuide, setExpandedGuide] = useState(null)
  const [expandedFaq, setExpandedFaq] = useState(null)

  const guides = [
    {
      title: 'Personal Loan Guide',
      icon: '💳',
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
      icon: '🏠',
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
      icon: '💼',
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
      icon: '📊',
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
          <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>📚 Loan Guidance & Learning Center</h1>
          <p style={{ textAlign: 'center', fontSize: '1.1rem', marginBottom: '3rem', color: '#64748b' }}>Expert advice and guides to help you make informed decisions about your loans</p>

          {/* Loan Guides Section */}
          <h2 style={{ marginTop: '4rem', marginBottom: '2rem', color: '#0f172a', fontSize: '1.8rem' }}>💡 Comprehensive Loan Guides</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            marginBottom: '3rem'
          }}>
            {guides.map((guide, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '24px',
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  border: '1px solid #e0e4e8',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  minHeight: '100%'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 16px rgba(37, 99, 235, 0.15)'
                  e.currentTarget.style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <div style={{ flex: '0 0 auto' }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '12px', color: '#2563eb' }}>
                    {guide.icon} {guide.title}
                  </h3>
                  <p style={{ color: '#64748b', marginBottom: '16px', lineHeight: '1.6' }}>
                    {guide.summary}
                  </p>
                </div>

                {expandedGuide === idx && (
                  <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #e0e4e8' }}>
                    <p style={{ color: '#0f172a', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '12px' }}>
                      <strong>Key Topics:</strong>
                    </p>
                    <ul style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: '1.8', paddingLeft: '20px', marginBottom: '16px' }}>
                      {guide.details.map((detail, didx) => (
                        <li key={didx} style={{ marginBottom: '8px' }}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <button
                  onClick={() => setExpandedGuide(expandedGuide === idx ? null : idx)}
                  style={{
                    marginTop: 'auto',
                    padding: '12px 24px',
                    backgroundColor: '#2563eb',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    width: '100%'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#1d4ed8'
                    e.target.style.transform = 'scale(1.02)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#2563eb'
                    e.target.style.transform = 'scale(1)'
                  }}
                >
                  {expandedGuide === idx ? 'Show Less' : 'Read More'}
                </button>
              </div>
            ))}
          </div>

          {/* Expert Tips Section */}
          <h2 style={{ marginTop: '4rem', marginBottom: '2rem', color: '#0f172a', fontSize: '1.8rem' }}>💭 Expert Tips & Best Practices</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px',
            marginBottom: '3rem'
          }}>
            {tips.map((tip, idx) => (
              <div
                key={idx}
                style={{
                  padding: '24px',
                  backgroundColor: '#f0f4ff',
                  borderRadius: '12px',
                  borderLeft: '4px solid #2563eb'
                }}
              >
                <h4 style={{ color: '#2563eb', marginBottom: '12px', fontSize: '1.1rem' }}>{tip.title}</h4>
                <p style={{ color: '#64748b', marginBottom: 0, fontSize: '0.95rem', lineHeight: '1.6' }}>{tip.content}</p>
              </div>
            ))}
          </div>

          {/* Expanded FAQs Section */}
          <h2 style={{ marginTop: '4rem', marginBottom: '2rem', color: '#0f172a', fontSize: '1.8rem' }}>❓ Frequently Asked Questions</h2>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  marginBottom: '16px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  border: '1px solid #e0e4e8',
                  backgroundColor: '#ffffff'
                }}
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  style={{
                    width: '100%',
                    padding: '20px',
                    textAlign: 'left',
                    backgroundColor: expandedFaq === idx ? '#f0f4ff' : '#ffffff',
                    border: 'none',
                    borderBottom: expandedFaq === idx ? '1px solid #e0e4e8' : 'none',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: '#2563eb',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    transition: 'backgroundColor 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#f0f4ff'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = expandedFaq === idx ? '#f0f4ff' : '#ffffff'
                  }}
                >
                  <span>{faq.q}</span>
                  <span style={{ fontSize: '1.2rem', marginLeft: '10px' }}>
                    {expandedFaq === idx ? '−' : '+'}
                  </span>
                </button>

                {expandedFaq === idx && (
                  <div style={{
                    padding: '20px',
                    backgroundColor: '#ffffff',
                    borderLeft: '4px solid #00d084',
                    color: '#64748b',
                    lineHeight: '1.8'
                  }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div style={{
            marginTop: '4rem',
            padding: '40px',
            backgroundColor: '#f0f4ff',
            borderRadius: '12px',
            textAlign: 'center',
            borderLeft: '4px solid #2563eb'
          }}>
            <h3 style={{ color: '#2563eb', marginBottom: '16px', fontSize: '1.5rem' }}>Ready to explore loan options?</h3>
            <p style={{ color: '#64748b', marginBottom: '24px', fontSize: '1.1rem' }}>
              Use our tools to calculate EMI and check your eligibility with trusted lenders
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/tools" className="btn btn-primary" style={{
                padding: '12px 32px',
                backgroundColor: '#2563eb',
                color: '#ffffff',
                textDecoration: 'none',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '600'
              }}>
                Go to Tools
              </a>
              <a href="/contact" className="btn btn-primary" style={{
                padding: '12px 32px',
                backgroundColor: '#00d084',
                color: '#ffffff',
                textDecoration: 'none',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '600'
              }}>
                Get Loan Offers
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}