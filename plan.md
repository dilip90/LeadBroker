site:
  name: "LeadBrokers"
  domain: "leadbrokers.in"
  version: "2.0-fintech"
  description: "Loan assistance platform helping users find best loan offers from trusted financial institutions"

brand:
  tone: "professional_fintech"
  positioning: "loan_assistance_platform"
  primary_color: "#2563eb"
  secondary_color: "#0f172a"

navigation:
  - Home
  - Loan Tools
  - Loan Guidance
  - Contact
  - About

positioning_rules:
  forbidden_terms:
    - agent
    - broker
    - dsa
    - lead selling
    - marketplace

  allowed_terms:
    - loan assistance
    - loan offers
    - eligibility check
    - financial partners
    - loan comparison

services:
  - personal_loan
  - home_loan
  - business_loan

conversion:
  primary_cta: "Check Eligibility"
  secondary_cta: "Get Loan Offers"

tools:
  emi_calculator:
    enabled: true
    inputs:
      loan_amount: number
      interest_rate: number
      tenure_months: number
    outputs:
      emi: number
      total_interest: number
      total_payment: number

  eligibility_checker:
    enabled: true
    inputs:
      monthly_income: number
      existing_emis: number
      employment_type: string
    outputs:
      eligible_amount_range: string
      approval_score: number

pages:
  home:
    sections:
      - hero
      - tools_preview
      - benefits
      - how_it_works
      - testimonials
      - cta

  tools:
    enabled: true

  guidance:
    enabled: true
    sections:
      - overview_section
      - detailed_guides_with_content
      - featured_articles_grid
      - expanded_faqs
      - expert_tips_section
    
    loan_guides:
      - title: "Personal Loan Guide"
        description: "Complete guide to personal loans"
        content: |
          - Advantages of personal loans
          - Eligibility criteria for different lenders
          - Required documents (PAN, Aadhar, Salary slips, Bank statements)
          - Interest rate factors and comparison
          - Repayment strategies
          - Tax benefits and considerations
        icon: "💳"
        read_more_enabled: true
      
      - title: "Home Loan Guide"
        description: "Comprehensive guide to home loans"
        content: |
          - Home loan vs. other financing options
          - Down payment and loan-to-value ratio
          - Fixed vs. floating interest rates
          - Eligibility based on income and credit score
          - Home loan documentation checklist
          - EMI calculation for home loans
          - Tax benefits under Section 80C and 24
        icon: "🏠"
        read_more_enabled: true
      
      - title: "Business Loan Guide"
        description: "Guide for business and startup loans"
        content: |
          - Types of business loans (Working capital, term loan, overdraft)
          - Eligibility criteria for businesses
          - Business registration and tax documents needed
          - Loan approval timeline for businesses
          - Using business loans for expansion
          - Managing repayment with business cash flow
        icon: "💼"
        read_more_enabled: true
      
      - title: "EMI Management & Planning"
        description: "Master your EMI payments"
        content: |
          - How EMI is calculated
          - Reducing overall interest burden
          - Managing multiple EMIs effectively
          - Early repayment strategies
          - EMI to income ratio guidelines
          - Refinancing options
        icon: "📊"
        read_more_enabled: true
    
    expanded_faqs:
      - q: "What is the minimum loan amount I can apply for?"
        a: "Loan amounts vary by lender and your eligibility profile. Personal loans typically range from ₹10,000 to ₹50,00,000. Personal loans start from ₹10,000, home loans from ₹3,00,000, and business loans from ₹1,00,000 depending on your income and creditworthiness."
      
      - q: "How long does the loan approval process take?"
        a: "Most traditional lenders approve loans within 5-7 business days. Digital lenders can provide approval within 24-48 hours for loans up to ₹10,00,000 if your application is complete and verified."
      
      - q: "What documents are required for a loan application?"
        a: "Standard documents: Government ID (PAN, Aadhar), Address Proof (utility bills, rental agreement), Income Proof (salary slips for last 3 months, IT returns for last 2 years), Bank Statements (last 6-12 months). For self-employed: Business registration, profit and loss statements."
      
      - q: "Can I prepay my loan without penalties?"
        a: "Yes, most lenders allow prepayment. Some may charge prepayment penalty (typically 1-3% of outstanding amount) during initial years. Digital lenders often have zero prepayment charges. Always check with your specific lender."
      
      - q: "What is the minimum credit score required for a loan?"
        a: "Most lenders require a credit score of 650 and above. Banks typically require 700+, while digital lenders may accept 600+. A higher score gets you better interest rates and higher loan amounts."
      
      - q: "How is EMI calculated?"
        a: "EMI = [Loan Amount × Interest Rate × (1 + Interest Rate)^Tenure] / [(1 + Interest Rate)^Tenure - 1]. You can use our EMI calculator to get instant calculations for any loan amount, rate, and tenure."
      
      - q: "Can I change my loan tenure after approval?"
        a: "Most lenders allow tenure changes through balance transfer or refinancing. Changing tenure affects your EMI and total interest. Our team can help you find the best options."
      
      - q: "Which loan should I choose - Personal, Home, or Business?"
        a: "Personal Loan: Quick approval, flexible usage, higher interest rates. Home Loan: Lower interest, tax benefits, long tenure. Business Loan: For business expansion, typically lower rates than personal loans but stricter documentation."

  contact:
    enabled: true

forms:
  loan_assistance_form:
    title: "Loan Assistance Request"
    fields:
      - name
      - phone
      - city
      - loan_type
      - loan_amount
      - employment_type

validation:
  style:
    color: "#ef4444"  # Red color for error messages
    font_size: "0.875rem"  # 14px
    position: "below_input"  # Error text appears below each input field
    icon: "✕"  # Error icon
    margin_top: "4px"
  
  rules:
    name:
      required: true
      min_length: 3
      pattern: "alphabets_and_spaces"
      error_messages:
        required: "Full name is required"
        min_length: "Name must be at least 3 characters"
        pattern: "Name should contain only letters and spaces"
    
    phone:
      required: true
      pattern: "indian_phone"
      min_length: 10
      max_length: 10
      error_messages:
        required: "Phone number is required"
        pattern: "Enter a valid 10-digit Indian phone number"
        min_length: "Phone number must be 10 digits"
        max_length: "Phone number must be 10 digits"
    
    city:
      required: true
      min_length: 2
      error_messages:
        required: "City name is required"
        min_length: "City name must be at least 2 characters"
    
    loan_type:
      required: true
      error_messages:
        required: "Please select a loan type"
    
    loan_amount:
      required: true
      min_value: 10000
      max_value: 5000000
      error_messages:
        required: "Loan amount is required"
        min_value: "Minimum loan amount is ₹10,000"
        max_value: "Maximum loan amount is ₹50,00,000"
    
    employment_type:
      required: true
      error_messages:
        required: "Please select employment type"
  
  emi_calculator:
    loan_amount:
      required: true
      min_value: 100000
      max_value: 10000000
      error_messages:
        required: "Loan amount is required"
        min_value: "Minimum loan amount is ₹1,00,000"
        max_value: "Maximum loan amount is ₹1,00,00,000"
    
    interest_rate:
      required: true
      min_value: 1
      max_value: 30
      error_messages:
        required: "Interest rate is required"
        min_value: "Interest rate must be at least 1%"
        max_value: "Interest rate cannot exceed 30%"
    
    tenure_months:
      required: true
      min_value: 6
      max_value: 360
      error_messages:
        required: "Loan tenure is required"
        min_value: "Minimum tenure is 6 months"
        max_value: "Maximum tenure is 360 months (30 years)"
  
  eligibility_checker:
    monthly_income:
      required: true
      min_value: 10000
      error_messages:
        required: "Monthly income is required"
        min_value: "Minimum monthly income should be ₹10,000"
    
    existing_emis:
      required: true
      min_value: 0
      error_messages:
        required: "Existing EMIs amount is required"
        min_value: "Existing EMIs cannot be negative"
    
    employment_type:
      required: true
      error_messages:
        required: "Please select employment type"

design:
  logo: "Modern fintech logo with shield and upward arrow symbolizing trust and growth in lending"
  logo_style: "SVG-based, professional, scalable, minimalist design"
  typography:
    primary_font: "Inter or Poppins"
    heading_size: "large, bold, professional"
    body_size: "clear, readable, 16px"
  layout:
    navbar: "sticky, professional header with logo, navigation links, and CTA button"
    spacing: "consistent padding and margins throughout (20px, 40px, 60px)"
    sections: "full-width sections with containers, proper alignment"
    cards: "modern cards with subtle shadows and hover effects"
    buttons: "rounded corners, proper padding, hover animations, accessible"
    hero: "full-screen or large banner with hero image/background gradient"
  components:
    header: "professional sticky navigation with logo on left, menu center, signup/CTA right"
    footer: "comprehensive footer with links, contact info, social media, copyright"
    forms: "clean, minimal forms with proper labels, placeholders, validation"
    testimonials: "cards with user image, name, designation, testimonial text"
    cta_buttons: "prominent, contrasting, clear call-to-action placement"
  colors:
    accent: "#00d084"
    light_bg: "#f5f7fa"
    border: "#e0e4e8"
    text_dark: "#0f172a"
    text_light: "#64748b"
  responsive:
    mobile: "hamburger menu, stacked layout, touch-friendly"
    tablet: "2-column grids, optimized spacing"
    desktop: "full layout, proper alignment, hover states"

seo:
  keywords:
    - instant loan assistance
    - loan eligibility check
    - EMI calculator India
    - best loan offers
    - loan comparison tool

integrations:
  whatsapp: true
  google_analytics: true
  crm_ready: true

compliance:
  disclaimer_required: true
  data_usage: "loan_matching_only"
  transparency_mode: true