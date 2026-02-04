import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary/5 border-b border-border py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-foreground mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: December 2025</p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-neutral max-w-none space-y-8 text-foreground">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              StyleHub ("we", "our", or "us") operates the StyleHub website and mobile application. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our service and the choices you have associated with that data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Information Collection and Use</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Personal Information:</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We collect information you provide directly, such as when you create an account, make a purchase, or contact us. This includes name, email address, phone number, shipping address, and payment information.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Usage Data:</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We automatically collect certain information about your device and how you interact with our service, including IP address, browser type, pages visited, and time spent on pages.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Cookies:</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies and similar technologies to enhance your experience. You can control cookies through your browser settings.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Use of Data</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">StyleHub uses the collected data for various purposes:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>To provide, maintain, and improve our services</li>
              <li>To process transactions and send related information</li>
              <li>To send promotional emails and marketing communications</li>
              <li>To respond to your inquiries and provide customer support</li>
              <li>To monitor and analyze trends, usage, and activities</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Security of Data</h2>
            <p className="text-muted-foreground leading-relaxed">
              The security of your data is important to us, but remember that no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Your Privacy Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Depending on your location, you may have the following rights:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>The right to access your personal data</li>
              <li>The right to correct inaccurate data</li>
              <li>The right to request deletion of your data</li>
              <li>The right to restrict processing of your data</li>
              <li>The right to data portability</li>
              <li>The right to object to processing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Third-Party Links</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our service may contain links to other websites that are not operated by us. This Privacy Policy does not apply to third-party websites, and we are not responsible for their privacy practices. We encourage you to review the privacy policies of any third-party websites before providing your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-4 text-muted-foreground">
              <p>StyleHub Privacy Team</p>
              <p>Email: privacy@stylehub.com</p>
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
