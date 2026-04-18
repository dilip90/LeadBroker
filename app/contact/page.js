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
}

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
          newErrors.loanAmount = 'Minimum loan amount is \u20B910,000'
        } else if (parseInt(value, 10) > 10000000) {
          newErrors.loanAmount = 'Maximum loan amount is \u20B91,00,00,000'
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
    const { name, value } = e.target
    setSubmitError('')
    setFormData((current) => ({ ...current, [name]: value }))
    validateField(name, value)
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
    else if (parseInt(formData.loanAmount, 10) < 10000) newErrors.loanAmount = 'Minimum loan amount is \u20B910,000'
    else if (parseInt(formData.loanAmount, 10) > 10000000) newErrors.loanAmount = 'Maximum loan amount is \u20B91,00,00,000'

    if (!formData.employmentType) newErrors.employmentType = 'Please select employment type'

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
        <section className="section" style={{ textAlign: 'center', paddingTop: '100px', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ maxWidth: '600px' }}>
            <h1 style={{ color: '#00d084', marginBottom: '20px' }}>&#10003; Request Submitted!</h1>
            <h2>Your lead has been saved successfully.</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '30px' }}>
              We have stored your request successfully for instant follow-up.
            </p>

            <p style={{ marginBottom: '30px', color: '#64748b' }}>
              Our financial partners will reach out to you within 24 hours with personalized loan offers.
            </p>

            <Link href="/" className="btn btn-primary">Back to Home</Link>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main>
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Loan Assistance Request</h1>
            <p style={{ textAlign: 'center', marginBottom: '40px', color: '#64748b' }}>
              Fill in your details to get personalized loan offers from our trusted financial partners.
            </p>

            <div className="card" style={{ padding: '40px' }}>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div>
                    <div className="form-group">
                      <label htmlFor="fullName">Full Name *</label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        style={{ borderColor: errors.fullName ? '#ef4444' : 'inherit' }}
                      />
                      {errors.fullName && (
                        <p style={{ color: '#ef4444', marginTop: '4px', fontSize: '0.875rem' }}>&#10005; {errors.fullName}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="form-group">
                      <label htmlFor="phoneNumber">Phone Number *</label>
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="9876543210"
                        style={{ borderColor: errors.phoneNumber ? '#ef4444' : 'inherit' }}
                      />
                      {errors.phoneNumber && (
                        <p style={{ color: '#ef4444', marginTop: '4px', fontSize: '0.875rem' }}>&#10005; {errors.phoneNumber}</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div>
                    <div className="form-group">
                      <label htmlFor="city">City *</label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Mumbai"
                        style={{ borderColor: errors.city ? '#ef4444' : 'inherit' }}
                      />
                      {errors.city && (
                        <p style={{ color: '#ef4444', marginTop: '4px', fontSize: '0.875rem' }}>&#10005; {errors.city}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="form-group">
                      <label htmlFor="loanType">Loan Type *</label>
                      <select
                        id="loanType"
                        name="loanType"
                        value={formData.loanType}
                        onChange={handleChange}
                        style={{ borderColor: errors.loanType ? '#ef4444' : 'inherit' }}
                      >
                        <option value="personal">Personal Loan</option>
                        <option value="home">Home Loan</option>
                        <option value="business">Business Loan</option>
                      </select>
                      {errors.loanType && (
                        <p style={{ color: '#ef4444', marginTop: '4px', fontSize: '0.875rem' }}>&#10005; {errors.loanType}</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div>
                    <div className="form-group">
                      <label htmlFor="loanAmount">Loan Amount (&#8377;) *</label>
                      <input
                        type="number"
                        id="loanAmount"
                        name="loanAmount"
                        value={formData.loanAmount}
                        onChange={handleChange}
                        placeholder="500000"
                        style={{ borderColor: errors.loanAmount ? '#ef4444' : 'inherit' }}
                      />
                      {errors.loanAmount && (
                        <p style={{ color: '#ef4444', marginTop: '4px', fontSize: '0.875rem' }}>&#10005; {errors.loanAmount}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="form-group">
                      <label htmlFor="employmentType">Employment Type *</label>
                      <select
                        id="employmentType"
                        name="employmentType"
                        value={formData.employmentType}
                        onChange={handleChange}
                        style={{ borderColor: errors.employmentType ? '#ef4444' : 'inherit' }}
                      >
                        <option value="salaried">Salaried</option>
                        <option value="self-employed">Self-Employed</option>
                      </select>
                      {errors.employmentType && (
                        <p style={{ color: '#ef4444', marginTop: '4px', fontSize: '0.875rem' }}>&#10005; {errors.employmentType}</p>
                      )}
                    </div>
                  </div>
                </div>

                {submitError && (
                  <p style={{ color: '#ef4444', marginTop: '10px', marginBottom: 0, fontSize: '0.95rem', textAlign: 'center' }}>
                    {submitError}
                  </p>
                )}

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', marginTop: '30px', padding: '15px' }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                </button>
              </form>

              <p style={{ textAlign: 'center', marginTop: '20px', color: '#64748b', fontSize: '0.9rem' }}>
                By submitting this form, you consent to receive calls or SMS from our financial partners regarding your loan application.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
