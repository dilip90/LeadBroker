'use client'

import Link from 'next/link'
import { useState } from 'react'

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

    // Validate all fields before calculation
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

    // Validate all fields before checking
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
          <h1>Loan Tools</h1>
          <p style={{ textAlign: 'center', fontSize: '1.1rem', marginBottom: '3rem' }}>Use our advanced calculators and checkers to plan your loan better</p>

          {/* EMI Calculator */}
          <div id="emi" style={{ marginBottom: '4rem' }}>
            <div className="card" style={{ maxWidth: '600px', margin: '0 auto', padding: '40px' }}>
              <h2 style={{ marginBottom: '30px', color: '#2563eb' }}>💰 EMI Calculator</h2>
              <p>Calculate your monthly EMI payments and view the total interest and payment amount</p>

              <form onSubmit={calculateEMI} style={{ marginTop: '30px' }}>
                <div className="form-group">
                  <label htmlFor="loan-amount">Loan Amount (₹)</label>
                  <input
                    type="number"
                    id="loan-amount"
                    value={emiData.amount}
                    onChange={handleEmiChange}
                    placeholder="e.g., 500000"
                    style={{ borderColor: emiErrors.amount ? '#ef4444' : 'inherit' }}
                  />
                  {emiErrors.amount && (
                    <p style={{ color: '#ef4444', marginTop: '4px', fontSize: '0.875rem' }}>✕ {emiErrors.amount}</p>
                  )}
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
                    style={{ borderColor: emiErrors.rate ? '#ef4444' : 'inherit' }}
                  />
                  {emiErrors.rate && (
                    <p style={{ color: '#ef4444', marginTop: '4px', fontSize: '0.875rem' }}>✕ {emiErrors.rate}</p>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="tenure-months">Tenure (months)</label>
                  <input
                    type="number"
                    id="tenure-months"
                    value={emiData.tenure}
                    onChange={handleEmiChange}
                    placeholder="e.g., 60"
                    style={{ borderColor: emiErrors.tenure ? '#ef4444' : 'inherit' }}
                  />
                  {emiErrors.tenure && (
                    <p style={{ color: '#ef4444', marginTop: '4px', fontSize: '0.875rem' }}>✕ {emiErrors.tenure}</p>
                  )}
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '20px' }}>Calculate EMI</button>
              </form>

              {emiData.result && (
                <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#f5f7fa', borderRadius: '8px', borderLeft: '4px solid #00d084' }}>
                  <h3 style={{ color: '#2563eb', marginBottom: '20px' }}>Your EMI Results</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div>
                      <p style={{ color: '#64748b', marginBottom: '5px' }}>Monthly EMI</p>
                      <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2563eb' }}>₹{emiData.result.emi}</p>
                    </div>
                    <div>
                      <p style={{ color: '#64748b', marginBottom: '5px' }}>Total Interest</p>
                      <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#00d084' }}>₹{emiData.result.totalInterest}</p>
                    </div>
                  </div>
                  <div style={{ marginTop: '15px', paddingTop: '15px', borderTop: '1px solid #e0e4e8' }}>
                    <p style={{ color: '#64748b', marginBottom: '5px' }}>Total Amount to be Paid</p>
                    <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0f172a' }}>₹{emiData.result.totalPayment}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Eligibility Checker */}
          <div id="eligibility">
            <div className="card" style={{ maxWidth: '600px', margin: '0 auto', padding: '40px' }}>
              <h2 style={{ marginBottom: '30px', color: '#2563eb' }}>✓ Eligibility Checker</h2>
              <p>Check your loan eligibility and get your approval score instantly</p>

              <form onSubmit={checkEligibility} style={{ marginTop: '30px' }}>
                <div className="form-group">
                  <label htmlFor="monthly-income">Monthly Income (₹)</label>
                  <input
                    type="number"
                    id="monthly-income"
                    value={eligibilityData.income}
                    onChange={handleEligibilityChange}
                    placeholder="e.g., 50000"
                    style={{ borderColor: eligibilityErrors.income ? '#ef4444' : 'inherit' }}
                  />
                  {eligibilityErrors.income && (
                    <p style={{ color: '#ef4444', marginTop: '4px', fontSize: '0.875rem' }}>✕ {eligibilityErrors.income}</p>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="existing-emis">Existing EMIs (₹)</label>
                  <input
                    type="number"
                    id="existing-emis"
                    value={eligibilityData.emis}
                    onChange={handleEligibilityChange}
                    placeholder="e.g., 10000"
                    style={{ borderColor: eligibilityErrors.emis ? '#ef4444' : 'inherit' }}
                  />
                  {eligibilityErrors.emis && (
                    <p style={{ color: '#ef4444', marginTop: '4px', fontSize: '0.875rem' }}>✕ {eligibilityErrors.emis}</p>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="employment-type">Employment Type</label>
                  <select
                    id="employment-type"
                    value={eligibilityData.type}
                    onChange={handleEligibilityChange}
                    style={{ borderColor: eligibilityErrors.type ? '#ef4444' : 'inherit' }}
                  >
                    <option value="salaried">Salaried</option>
                    <option value="self-employed">Self-Employed</option>
                  </select>
                  {eligibilityErrors.type && (
                    <p style={{ color: '#ef4444', marginTop: '4px', fontSize: '0.875rem' }}>✕ {eligibilityErrors.type}</p>
                  )}
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '20px' }}>Check Eligibility</button>
              </form>

              {eligibilityData.result && (
                <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#f5f7fa', borderRadius: '8px', borderLeft: `4px solid ${eligibilityData.result.eligible === false ? '#ef4444' : '#00d084'}` }}>
                  <h3 style={{ color: '#2563eb', marginBottom: '20px' }}>Your Eligibility Results</h3>
                  {eligibilityData.result.eligible === false ? (
                    <div>
                      <p style={{ color: '#ef4444', marginBottom: '5px', fontSize: '1.2rem', fontWeight: 'bold' }}>❌ {eligibilityData.result.message}</p>
                    </div>
                  ) : (
                    <>
                      <div>
                        <p style={{ color: '#64748b', marginBottom: '5px' }}>Eligible Loan Amount Range</p>
                        <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2563eb', marginBottom: '20px' }}>{eligibilityData.result.range}</p>
                      </div>
                      <div style={{ paddingTop: '15px', borderTop: '1px solid #e0e4e8', marginTop: '15px' }}>
                        <p style={{ color: '#64748b', marginBottom: '5px' }}>Approval Score</p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#00d084' }}>{eligibilityData.result.score}%</p>
                          <div style={{ flex: 1, backgroundColor: '#e0e4e8', height: '8px', borderRadius: '4px', overflow: 'hidden' }}>
                            <div style={{ width: `${eligibilityData.result.score}%`, backgroundColor: '#00d084', height: '100%' }}></div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
