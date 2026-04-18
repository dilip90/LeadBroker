export const services = {
  'personal-loans': {
    title: 'Personal Loans',
    tagline: 'Fast access to funds for medical, travel, education, wedding, or urgent household needs.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Financial paperwork with calculator and pen for personal loan planning',
    summary:
      'Personal loans are unsecured loans designed for planned and unplanned expenses. They are usually processed quickly, require limited paperwork, and can be tailored to your monthly repayment capacity.',
    idealFor: [
      'Medical emergencies and family health expenses',
      'Wedding, travel, or education-related costs',
      'Debt consolidation and high-interest balance cleanup',
      'Home improvement or major appliance purchases',
    ],
    highlights: [
      'Loan amounts typically suited for short to medium-term needs',
      'No collateral requirement for most standard personal loan products',
      'Flexible repayment tenures that can be matched to income stability',
      'Useful when you need quick approval and clear EMI planning',
    ],
    documents: [
      'PAN and Aadhaar or other government ID proof',
      'Address proof and recent passport-size photograph',
      'Salary slips or income proof for the last 3 months',
      'Bank statements for the last 6 months',
    ],
    process: [
      'Check your approximate EMI and affordability before applying',
      'Submit income, identity, and employment documents',
      'Compare lender offers by rate, fees, and prepayment terms',
      'Choose a tenure that keeps your EMI comfortable each month',
    ],
    sourceName: 'Unsplash: Desk with calculator, charts, and pencil',
    sourceUrl: 'https://unsplash.com/photos/desk-with-calculator-charts-and-pencil-dspKrJYp644',
  },
  'home-loans': {
    title: 'Home Loans',
    tagline: 'Financing support for buying a flat, constructing a home, or refinancing an existing property loan.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Keys and house model symbolizing home loan approval',
    summary:
      'Home loans are long-tenure secured loans designed for property purchase, construction, and balance transfer. They usually offer lower rates than unsecured loans, but require stronger documentation and property verification.',
    idealFor: [
      'Buying ready-to-move or under-construction homes',
      'Constructing a house on owned land',
      'Transferring an existing home loan for a better rate',
      'Funding renovation or extension with property-backed options',
    ],
    highlights: [
      'Long repayment tenures help spread out EMI burden',
      'Rates are often lower than personal loan products',
      'Lender review includes both borrower profile and property checks',
      'Best suited for planned purchases with complete documentation',
    ],
    documents: [
      'Identity, address, and income proof of all applicants',
      'Employment or business continuity documents',
      'Property papers, agreement copy, and title documents',
      'Bank statements and tax returns as applicable',
    ],
    process: [
      'Estimate budget, down payment, and EMI before property selection',
      'Complete borrower profile review and property documentation',
      'Get sanction, legal verification, and technical valuation done',
      'Move to disbursal after agreement completion and lender approval',
    ],
    sourceName: 'Unsplash: Keys representing a new home and many house models',
    sourceUrl: 'https://unsplash.com/photos/keys-representing-a-new-home-and-many-house-models-IKI_Qboskl0',
  },
  'business-loans': {
    title: 'Business Loans',
    tagline: 'Working capital and expansion funding for inventory, equipment, payroll, and growth plans.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Business team discussing documents during funding and growth planning',
    summary:
      'Business loans help owners manage cash flow, fund expansion, and invest in operations without disrupting daily business momentum. Lenders look at turnover, repayment history, business vintage, and banking behavior before offering terms.',
    idealFor: [
      'Working capital support during seasonal demand peaks',
      'Purchasing machinery, equipment, or inventory',
      'Hiring, branch expansion, and technology upgrades',
      'Managing receivable gaps and operating cash flow',
    ],
    highlights: [
      'Can be structured for short-term working capital or larger expansion plans',
      'Assessment usually considers turnover, banking track record, and business age',
      'Useful for MSMEs, professionals, traders, and service-led businesses',
      'Helps preserve internal reserves while growth investments continue',
    ],
    documents: [
      'Business registration and ownership proof',
      'GST, ITR, and audited or management financial statements',
      'Business bank statements for the recent 6 to 12 months',
      'KYC of proprietors, partners, or directors',
    ],
    process: [
      'Define the exact business use and funding amount required',
      'Prepare revenue, banking, and compliance documents',
      'Compare offers by processing fee, collateral need, and tenure',
      'Select a repayment structure aligned to your business cash cycle',
    ],
    sourceName: 'Unsplash: Diverse team collaborating on a project in an office',
    sourceUrl: 'https://unsplash.com/photos/diverse-team-collaborating-on-a-project-in-an-office-PSksbOVDhWk',
  },
  'eligibility-check': {
    title: 'Eligibility Check',
    tagline: 'A quick readiness review to estimate borrowing comfort before you apply to lenders.',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Coins and savings jar used to represent loan eligibility and affordability planning',
    summary:
      'An eligibility check helps you understand how lenders may look at income, existing obligations, credit behaviour, and repayment capacity. Doing this first reduces guesswork and makes loan comparisons far more practical.',
    idealFor: [
      'Borrowers applying for the first time and unsure about readiness',
      'Users who want to compare EMI comfort before choosing tenure',
      'Applicants with existing EMIs who need affordability clarity',
      'People planning to improve approval odds before formal application',
    ],
    highlights: [
      'Helps estimate a practical loan range before lender submission',
      'Makes it easier to choose a safe EMI-to-income ratio',
      'Useful for planning documentation and credit profile improvement',
      'Can reduce multiple unnecessary applications in a short period',
    ],
    documents: [
      'Monthly income details and current EMI obligations',
      'Basic employment or business profile information',
      'Approximate credit history and repayment track record',
      'Expected loan amount and preferred tenure',
    ],
    process: [
      'Start with income, existing EMIs, and employment type',
      'Review the estimated loan comfort range and repayment fit',
      'Use EMI calculations to test multiple tenure options',
      'Apply only after the numbers align with your monthly budget',
    ],
    sourceName: 'Unsplash: A person putting money into a calculator',
    sourceUrl: 'https://unsplash.com/photos/a-person-putting-money-into-a-calculator-hIbCtd-gjqM',
  },
}

export const serviceList = Object.entries(services).map(([slug, data]) => ({
  slug,
  ...data,
}))
