export const metadata = {
  title: 'Terms of Service - LeadBrokers',
}

export default function TermsPage() {
  return (
    <main>
      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <h1>Terms of Service</h1>
          <p>
            LeadBrokers provides informational loan assistance, calculators, and connection workflows intended to help users compare and understand borrowing options.
          </p>
          <p>
            The platform does not guarantee approval, final lender terms, or disbursal timelines. Loan outcomes depend on lender policies, borrower profile, documentation, verification, and applicable regulations.
          </p>
          <p>
            Calculator and eligibility outputs are indicative only and should be treated as planning tools rather than final credit decisions.
          </p>
          <p>
            By using the site, you agree to provide accurate information and to review final lender agreements, charges, and repayment obligations independently before accepting any offer.
          </p>
        </div>
      </section>
    </main>
  )
}
