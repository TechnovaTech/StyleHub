import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary/5 border-b border-border py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-foreground mb-2">Terms & Conditions</h1>
          <p className="text-muted-foreground">Last updated: December 2025</p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-8 text-foreground">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using StyleHub website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on StyleHub for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Modifying or copying the materials</li>
              <li>Using the materials for any commercial purpose or for any public display</li>
              <li>Attempting to decompile or reverse engineer any software contained on StyleHub</li>
              <li>Removing any copyright or other proprietary notations from the materials</li>
              <li>Transferring the materials to another person or "mirror" the materials on any other server</li>
              <li>Using automated systems or robots to access the site</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Disclaimer</h2>
            <p className="text-muted-foreground leading-relaxed">
              The materials on StyleHub are provided on an 'as is' basis. StyleHub makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Limitations</h2>
            <p className="text-muted-foreground leading-relaxed">
              In no event shall StyleHub or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on StyleHub, even if StyleHub or a StyleHub authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Accuracy of Materials</h2>
            <p className="text-muted-foreground leading-relaxed">
              The materials appearing on StyleHub could include technical, typographical, or photographic errors. StyleHub does not warrant that any of the materials on StyleHub are accurate, complete, or current. StyleHub may make changes to the materials contained on StyleHub at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Links</h2>
            <p className="text-muted-foreground leading-relaxed">
              StyleHub has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by StyleHub of the site. Use of any such linked website is at the user's own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Modifications</h2>
            <p className="text-muted-foreground leading-relaxed">
              StyleHub may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws of United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Return Policy</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                StyleHub offers a 30-day return policy for all products. Items must be:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Unused and in original condition</li>
                <li>Unwashed or unworn</li>
                <li>With original tags attached</li>
                <li>Returned within 30 days of purchase</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Once your return is approved, a prepaid shipping label will be provided. Upon receipt and inspection of the item, refunds will be processed within 5-7 business days.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">10. Product Warranty</h2>
            <p className="text-muted-foreground leading-relaxed">
              All products sold on StyleHub come with a manufacturer's warranty. For defective items, please contact our support team within 14 days of purchase with proof of purchase and photos of the defect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">11. User Accounts</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When you create an account on StyleHub, you are responsible for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Providing accurate and complete information</li>
              <li>Maintaining the confidentiality of your password</li>
              <li>Accepting responsibility for all activities under your account</li>
              <li>Notifying us immediately of any unauthorized use</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">12. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              For any questions regarding these Terms & Conditions, please contact:
            </p>
            <div className="mt-4 text-muted-foreground">
              <p>StyleHub Legal Team</p>
              <p>Email: legal@stylehub.com</p>
              <p>Phone: +91 98765 43210</p>
              <p>Address: 123 Fashion Street, New York, NY 10001</p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  )
}
