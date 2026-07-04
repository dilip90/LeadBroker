'use client'

import Link from 'next/link'
import { useState } from 'react'
import { notifyLeadOnWhatsApp, saveLead } from '../../lib/leads'

const initialFormData = {
  fullName: '',
  phoneNumber: '',
  city: '',
  loanType: 'personal',
  loanAmount: '',
  employmentType: 'salaried',
  consentChecked: false,
}

const ShieldIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
)

const CheckCircleIcon = () => (
  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
)

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

export default function Contact() {
  const [formData, setFormData] = useState(initialFormData)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const validateField = (name, value) => {
    const newErrors = { ...errors }

    switch (name) {
      case 'fullName':
        if (!value) {
          newErrors.fullName = 'Full name is required'
        } else if (value.length < 3) {
          newErrors.fullName = 'Name must be at least 3 characters'
        } else if (!/^[a-zA-Z\s]+$/.test(value)) {
          newErrors.fullName = 'Name should contain only letters and spaces'
        } else {
          delete newErrors.fullName
        }
        break

      case 'phoneNumber':
        if (!value) {
          newErrors.phoneNumber = 'Phone number is required'
        } else if (!/^\d{10}$/.test(value.replace(/\D/g, ''))) {
          newErrors.phoneNumber = 'Enter a valid 10-digit Indian phone number'
        } else {
          delete newErrors.phoneNumber
        }
        break

      case 'city':
        if (!value) {
          newErrors.city = 'City name is required'
        } else if (value.length < 2) {
          newErrors.city = 'City name must be at least 2 characters'
        } else {
          delete newErrors.city
        }
        break

      case 'loanType':
        if (!value) {
          newErrors.loanType = 'Please select a loan type'
        } else {
          delete newErrors.loanType
        }
        break

      case 'loanAmount':
        if (!value) {
          newErrors.loanAmount = 'Loan amount is required'
        } else if (parseInt(value, 10) < 10000) {
          newErrors.loanAmount = 'Minimum loan amount is ₹10,000'
        } else if (parseInt(value, 10) > 10000000) {
          newErrors.loanAmount = 'Maximum loan amount is ₹1,00,00,000'
        } else {
          delete newErrors.loanAmount
        }
        break

      case 'employmentType':
        if (!value) {
          newErrors.employmentType = 'Please select employment type'
        } else {
          delete newErrors.employmentType
        }
        break

      default:
        break
    }

    setErrors(newErrors)
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setSubmitError('')
    const newValue = type === 'checkbox' ? checked : value
    setFormData((current) => ({ ...current, [name]: newValue }))
    if (type !== 'checkbox') validateField(name, newValue)
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.fullName) newErrors.fullName = 'Full name is required'
    else if (formData.fullName.length < 3) newErrors.fullName = 'Name must be at least 3 characters'
    else if (!/^[a-zA-Z\s]+$/.test(formData.fullName)) newErrors.fullName = 'Name should contain only letters and spaces'

    if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone number is required'
    else if (!/^\d{10}$/.test(formData.phoneNumber.replace(/\D/g, ''))) newErrors.phoneNumber = 'Enter a valid 10-digit Indian phone number'

    if (!formData.city) newErrors.city = 'City name is required'
    else if (formData.city.length < 2) newErrors.city = 'City name must be at least 2 characters'

    if (!formData.loanType) newErrors.loanType = 'Please select a loan type'

    if (!formData.loanAmount) newErrors.loanAmount = 'Loan amount is required'
    else if (parseInt(formData.loanAmount, 10) < 10000) newErrors.loanAmount = 'Minimum loan amount is ₹10,000'
    else if (parseInt(formData.loanAmount, 10) > 10000000) newErrors.loanAmount = 'Maximum loan amount is ₹1,00,00,000'

    if (!formData.employmentType) newErrors.employmentType = 'Please select employment type'

    if (!formData.consentChecked) newErrors.consentChecked = 'You must agree to be contacted before submitting'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitError('')

    try {
      const payload = { ...formData }
      await saveLead(payload)
      setSubmitted(true)
      setFormData(initialFormData)
      setTimeout(() => setSubmitted(false), 5000)

      try {
        await notifyLeadOnWhatsApp(payload)
      } catch (webhookError) {
        console.error('Twilio webhook failed after Firestore save:', webhookError)
      }
    } catch (error) {
      setSubmitError(error.message || 'Something went wrong while submitting your request.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <main>
        <section className="section" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
          <div className="container">
            <div style={{
              maxWidth: 520,
              margin: '0 auto',
              textAlign: 'center',
              padding: '48px 32px',
              background: 'var(--surface)',
              borderRadius: 'var(--r-2xl)',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-lg)',
              animation: 'fadeUp 0.4s ease both',
            }}>
              <div style={{ color: 'var(--accent)', marginBottom: 20, display: 'flex', justifyContent: 'center' }}>
                <CheckCircleIcon />
              </div>
              <h1 style={{ color: 'var(--text)', fontSize: '1.75rem', marginBottom: 12 }}>Request Submitted!</h1>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: 8 }}>
                Your request has been saved successfully.
              </p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: 32 }}>
                Our financial partners will reach out within 24 hours with personalised loan offers.
              </p>
              <Link href="/" className="btn btn-primary">Back to Home</Link>
            </div>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main>
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 680, margin: '0 auto' }}>
            {/* Page header */}
            <div style={{ textAlign: 'center', marginBottom: 40 }}>
              <div className="section-eyebrow" style={{ marginBottom: 14 }}>Free · No Credit Impact</div>
              <h1 style={{ marginBottom: 12 }}>Loan Assistance Request</h1>
              <p style={{ maxWidth: 440, margin: '0 auto' }}>
                Fill in your details to get personalised loan offers from our trusted financial partners.
              </p>
            </div>

            {/* Form card */}
            <div className="card card-elevated" style={{ padding: '36px 40px' }}>
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name *</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={errors.fullName ? 'error' : ''}
                      autoComplete="name"
                    />
                    <FieldError msg={errors.fullName} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number *</label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="9876543210"
                      className={errors.phoneNumber ? 'error' : ''}
                      autoComplete="tel"
                      maxLength={10}
                    />
                    <FieldError msg={errors.phoneNumber} />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="city">City *</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Mumbai"
                      className={errors.city ? 'error' : ''}
                      autoComplete="address-level2"
                    />
                    <FieldError msg={errors.city} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="loanType">Loan Type *</label>
                    <select
                      id="loanType"
                      name="loanType"
                      value={formData.loanType}
                      onChange={handleChange}
                      className={errors.loanType ? 'error' : ''}
                    >
                      <option value="personal">Personal Loan</option>
                      <option value="home">Home Loan</option>
                      <option value="business">Business Loan</option>
                    </select>
                    <FieldError msg={errors.loanType} />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="loanAmount">Loan Amount (&#8377;) *</label>
                    <input
                      type="number"
                      id="loanAmount"
                      name="loanAmount"
                      value={formData.loanAmount}
                      onChange={handleChange}
                      placeholder="500000"
                      className={errors.loanAmount ? 'error' : ''}
                    />
                    <FieldError msg={errors.loanAmount} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="employmentType">Employment Type *</label>
                    <select
                      id="employmentType"
                      name="employmentType"
                      value={formData.employmentType}
                      onChange={handleChange}
                      className={errors.employmentType ? 'error' : ''}
                    >
                      <option value="salaried">Salaried</option>
                      <option value="self-employed">Self-Employed</option>
                    </select>
                    <FieldError msg={errors.employmentType} />
                  </div>
                </div>

                {/* Consent */}
                <div style={{ marginTop: 8, marginBottom: 24 }}>
                  <label className="checkbox-wrapper">
                    <input
                      type="checkbox"
                      name="consentChecked"
                      checked={formData.consentChecked}
                      onChange={handleChange}
                    />
                    <span className="checkbox-label">
                      I agree to be contacted by LeadBrokers and its lending partners regarding my loan inquiry via call, SMS, or WhatsApp. *
                    </span>
                  </label>
                  <FieldError msg={errors.consentChecked} />
                </div>

                {submitError && (
                  <div style={{
                    padding: '12px 16px',
                    background: 'var(--error-bg)',
                    border: '1px solid var(--error)',
                    borderRadius: 'var(--r-md)',
                    color: 'var(--error)',
                    fontSize: '0.875rem',
                    marginBottom: 16,
                  }}>
                    {submitError}
                  </div>
                )}

                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  style={{ width: '100%', justifyContent: 'center' }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'spin 1s linear infinite' }}>
                        <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                      </svg>
                      Submitting…
                    </>
                  ) : 'Submit Request'}
                </button>
              </form>

              {/* Trust indicators */}
              <div style={{
                marginTop: 20,
                paddingTop: 20,
                borderTop: '1px solid var(--border)',
                display: 'flex',
                justifyContent: 'center',
                gap: 24,
                flexWrap: 'wrap',
              }}>
                {[
                  'No spam calls',
                  'Data encrypted',
                  'No credit impact',
                ].map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    <ShieldIcon />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </main>
  )
}
