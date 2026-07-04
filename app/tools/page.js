'use client'

import Link from 'next/link'
import { useState } from 'react'

const FieldError = ({ msg }) => msg ? (
  <p className="form-error">
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="12" y1="8" x2="12" y2="12"/>
      <line x1="12" y1="16" x2="12.01" y2="16"/>
    </svg>
    {msg}
  </p>
) : null

export default function Tools() {
  const [emiData, setEmiData] = useState({ amount: '', rate: '', tenure: '', result: null })
  const [emiErrors, setEmiErrors] = useState({})
  const [eligibilityData, setEligibilityData] = useState({ income: '', emis: '', type: 'salaried', result: null })
  const [eligibilityErrors, setEligibilityErrors] = useState({})
  const [amountData, setAmountData] = useState({ emi: '', rate: '', tenure: '', result: null })
  const [amountErrors, setAmountErrors] = useState({})

  // EMI Calculator Validation
  const validateEmiField = (name, value) => {
    const newErrors = { ...emiErrors }

    switch (name) {
      case 'amount':
        if (!value) {
          newErrors.amount = 'Loan amount is required'
        } else if (parseInt(value) < 100000) {
          newErrors.amount = 'Minimum loan amount is ₹1,00,000'
        } else if (parseInt(value) > 10000000) {
          newErrors.amount = 'Maximum loan amount is ₹1,00,00,000'
        } else {
          delete newErrors.amount
        }
        break

      case 'rate':
        if (!value) {
          newErrors.rate = 'Interest rate is required'
        } else if (parseFloat(value) < 1) {
          newErrors.rate = 'Interest rate must be at least 1%'
        } else if (parseFloat(value) > 30) {
          newErrors.rate = 'Interest rate cannot exceed 30%'
        } else {
          delete newErrors.rate
        }
        break

      case 'tenure':
        if (!value) {
          newErrors.tenure = 'Loan tenure is required'
        } else if (parseInt(value) < 6) {
          newErrors.tenure = 'Minimum tenure is 6 months'
        } else if (parseInt(value) > 360) {
          newErrors.tenure = 'Maximum tenure is 360 months (30 years)'
        } else {
          delete newErrors.tenure
        }
        break

      default:
        break
    }

    setEmiErrors(newErrors)
  }

  const handleEmiChange = (e) => {
    const { id, value } = e.target
    const fieldName = id.replace('loan-', '').replace('interest-', '').replace('-months', '')
    setEmiData({ ...emiData, [fieldName === 'months' ? 'tenure' : fieldName]: value })
    validateEmiField(fieldName === 'months' ? 'tenure' : fieldName, value)
  }

  const calculateEMI = (e) => {
    e.preventDefault()

    const newErrors = {}
    if (!emiData.amount) newErrors.amount = 'Loan amount is required'
    else if (parseInt(emiData.amount) < 100000) newErrors.amount = 'Minimum loan amount is ₹1,00,000'
    else if (parseInt(emiData.amount) > 10000000) newErrors.amount = 'Maximum loan amount is ₹1,00,00,000'

    if (!emiData.rate) newErrors.rate = 'Interest rate is required'
    else if (parseFloat(emiData.rate) < 1) newErrors.rate = 'Interest rate must be at least 1%'
    else if (parseFloat(emiData.rate) > 30) newErrors.rate = 'Interest rate cannot exceed 30%'

    if (!emiData.tenure) newErrors.tenure = 'Loan tenure is required'
    else if (parseInt(emiData.tenure) < 6) newErrors.tenure = 'Minimum tenure is 6 months'
    else if (parseInt(emiData.tenure) > 360) newErrors.tenure = 'Maximum tenure is 360 months (30 years)'

    if (Object.keys(newErrors).length > 0) {
      setEmiErrors(newErrors)
      return
    }

    const amount = parseFloat(emiData.amount)
    const rate = parseFloat(emiData.rate) / 100 / 12
    const tenure = parseInt(emiData.tenure)
    const emi = (amount * rate * Math.pow(1 + rate, tenure)) / (Math.pow(1 + rate, tenure) - 1)
    const totalPayment = emi * tenure
    const totalInterest = totalPayment - amount
    setEmiData({ ...emiData, result: { emi: emi.toFixed(2), totalInterest: totalInterest.toFixed(2), totalPayment: totalPayment.toFixed(2) } })
  }

  // Eligibility Checker Validation
  const validateEligibilityField = (name, value) => {
    const newErrors = { ...eligibilityErrors }

    switch (name) {
      case 'income':
        if (!value) {
          newErrors.income = 'Monthly income is required'
        } else if (parseInt(value) < 10000) {
          newErrors.income = 'Minimum monthly income should be ₹10,000'
        } else {
          delete newErrors.income
        }
        break

      case 'emis':
        if (!value) {
          newErrors.emis = 'Existing EMIs amount is required'
        } else if (parseInt(value) < 0) {
          newErrors.emis = 'Existing EMIs cannot be negative'
        } else {
          delete newErrors.emis
        }
        break

      case 'type':
        if (!value) {
          newErrors.type = 'Please select employment type'
        } else {
          delete newErrors.type
        }
        break

      default:
        break
    }

    setEligibilityErrors(newErrors)
  }

  const handleEligibilityChange = (e) => {
    const { id, value } = e.target
    const fieldName = id === 'employment-type'
      ? 'type'
      : id.replace('monthly-', '').replace('existing-', '')
    setEligibilityData({ ...eligibilityData, [fieldName]: value })
    validateEligibilityField(fieldName, value)
  }

  const checkEligibility = (e) => {
    e.preventDefault()

    const newErrors = {}
    if (!eligibilityData.income) newErrors.income = 'Monthly income is required'
    else if (parseInt(eligibilityData.income) < 10000) newErrors.income = 'Minimum monthly income should be ₹10,000'

    if (!eligibilityData.emis) newErrors.emis = 'Existing EMIs amount is required'
    else if (parseInt(eligibilityData.emis) < 0) newErrors.emis = 'Existing EMIs cannot be negative'

    if (!eligibilityData.type) newErrors.type = 'Please select employment type'

    if (Object.keys(newErrors).length > 0) {
      setEligibilityErrors(newErrors)
      return
    }

    const income = parseFloat(eligibilityData.income)
    const emis = parseFloat(eligibilityData.emis)
    if (emis > income * 0.5) {
      setEligibilityData({ ...eligibilityData, result: { eligible: false, message: "Not Eligible - Existing EMIs exceed 50% of income" } })
    } else {
      const disposable = income - emis
      const eligible = disposable * 0.5 * 60
      const score = eligibilityData.type === 'salaried' ? 80 : 70
      setEligibilityData({ ...eligibilityData, result: { range: `₹${(eligible * 0.8).toFixed(0)} - ₹${eligible.toFixed(0)}`, score } })
    }
  }

  return (
    <main>
      <section className="section">
        <div className="container">
          {/* Page header */}
          <div className="section-header">
            <div className="section-eyebrow">Free Tools</div>
            <h1 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: '0.75rem' }}>Loan Tools</h1>
            <p>Advanced calculators to help you plan smarter before you apply</p>
          </div>

          {/* ── EMI Calculator ─────────────────────────────── */}
          <div id="emi" style={{ marginBottom: '3.5rem' }}>
            <div className="card card-elevated" style={{ maxWidth: 600, margin: '0 auto', padding: '36px 40px' }}>
              {/* Card header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 8 }}>
                <div className="feature-icon" style={{ margin: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                </div>
                <div>
                  <h2 style={{ margin: 0, fontSize: '1.35rem' }}>EMI Calculator</h2>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)' }}>Monthly installment breakdown</p>
                </div>
              </div>

              <hr className="divider" />

              <form onSubmit={calculateEMI}>
                <div className="form-group">
                  <label htmlFor="loan-amount">Loan Amount (₹)</label>
                  <input
                    type="number"
                    id="loan-amount"
                    value={emiData.amount}
                    onChange={handleEmiChange}
                    placeholder="e.g., 500000"
                    className={emiErrors.amount ? 'error' : ''}
                  />
                  <FieldError msg={emiErrors.amount} />
                </div>

                <div className="form-group">
                  <label htmlFor="interest-rate">Interest Rate (% per annum)</label>
                  <input
                    type="number"
                    id="interest-rate"
                    step="0.01"
                    value={emiData.rate}
                    onChange={handleEmiChange}
                    placeholder="e.g., 9.5"
                    className={emiErrors.rate ? 'error' : ''}
                  />
                  <FieldError msg={emiErrors.rate} />
                </div>

                <div className="form-group">
                  <label htmlFor="tenure-months">Tenure (months)</label>
                  <input
                    type="number"
                    id="tenure-months"
                    value={emiData.tenure}
                    onChange={handleEmiChange}
                    placeholder="e.g., 60"
                    className={emiErrors.tenure ? 'error' : ''}
                  />
                  <FieldError msg={emiErrors.tenure} />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 4 }}>
                  Calculate EMI
                </button>
              </form>

              {emiData.result && (
                <div className="result-box success">
                  <h3 style={{ fontSize: '1rem', marginBottom: 18, color: 'var(--text)' }}>Your EMI Results</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                    <div>
                      <div className="result-label">Monthly EMI</div>
                      <div className="result-value">₹{emiData.result.emi}</div>
                    </div>
                    <div>
                      <div className="result-label">Total Interest</div>
                      <div className="result-value" style={{ color: 'var(--accent)' }}>₹{emiData.result.totalInterest}</div>
                    </div>
                  </div>
                  <hr className="result-divider" />
                  <div>
                    <div className="result-label">Total Amount Payable</div>
                    <div className="result-value" style={{ color: 'var(--text)' }}>₹{emiData.result.totalPayment}</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ── Eligibility Checker ────────────────────────── */}
          <div id="eligibility">
            <div className="card card-elevated" style={{ maxWidth: 600, margin: '0 auto', padding: '36px 40px' }}>
              {/* Card header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 8 }}>
                <div className="feature-icon" style={{ margin: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                  </svg>
                </div>
                <div>
                  <h2 style={{ margin: 0, fontSize: '1.35rem' }}>Eligibility Checker</h2>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)' }}>Instant approval score estimate</p>
                </div>
              </div>

              <hr className="divider" />

              <form onSubmit={checkEligibility}>
                <div className="form-group">
                  <label htmlFor="monthly-income">Monthly Income (₹)</label>
                  <input
                    type="number"
                    id="monthly-income"
                    value={eligibilityData.income}
                    onChange={handleEligibilityChange}
                    placeholder="e.g., 50000"
                    className={eligibilityErrors.income ? 'error' : ''}
                  />
                  <FieldError msg={eligibilityErrors.income} />
                </div>

                <div className="form-group">
                  <label htmlFor="existing-emis">Existing EMIs (₹)</label>
                  <input
                    type="number"
                    id="existing-emis"
                    value={eligibilityData.emis}
                    onChange={handleEligibilityChange}
                    placeholder="e.g., 10000"
                    className={eligibilityErrors.emis ? 'error' : ''}
                  />
                  <FieldError msg={eligibilityErrors.emis} />
                </div>

                <div className="form-group">
                  <label htmlFor="employment-type">Employment Type</label>
                  <select
                    id="employment-type"
                    value={eligibilityData.type}
                    onChange={handleEligibilityChange}
                    className={eligibilityErrors.type ? 'error' : ''}
                  >
                    <option value="salaried">Salaried</option>
                    <option value="self-employed">Self-Employed</option>
                  </select>
                  <FieldError msg={eligibilityErrors.type} />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 4 }}>
                  Check Eligibility
                </button>
              </form>

              {eligibilityData.result && (
                <div className={`result-box ${eligibilityData.result.eligible === false ? 'error' : 'success'}`}>
                  <h3 style={{ fontSize: '1rem', marginBottom: 18, color: 'var(--text)' }}>Your Eligibility Results</h3>
                  {eligibilityData.result.eligible === false ? (
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--error)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="15" y1="9" x2="9" y2="15"/>
                        <line x1="9" y1="9" x2="15" y2="15"/>
                      </svg>
                      <p style={{ color: 'var(--error)', fontWeight: 600, margin: 0, fontSize: '0.95rem' }}>
                        {eligibilityData.result.message}
                      </p>
                    </div>
                  ) : (
                    <>
                      <div>
                        <div className="result-label">Eligible Loan Amount Range</div>
                        <div className="result-value">{eligibilityData.result.range}</div>
                      </div>
                      <hr className="result-divider" />
                      <div>
                        <div className="result-label" style={{ marginBottom: 10 }}>Approval Score</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                          <span style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--accent)', letterSpacing: '-0.02em', minWidth: 56 }}>
                            {eligibilityData.result.score}%
                          </span>
                          <div className="progress-track" style={{ flex: 1 }}>
                            <div className="progress-fill" style={{ width: `${eligibilityData.result.score}%` }} />
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* CTA */}
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <p style={{ marginBottom: 16, color: 'var(--text-muted)' }}>Ready to apply with your estimates?</p>
            <Link href="/contact" className="btn btn-primary btn-lg">
              Get Personalised Loan Offers
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
