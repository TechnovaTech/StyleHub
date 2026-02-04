import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/90 to-primary/70 text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Email */}
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Mail className="text-accent" size={24} />
                </div>
                <h3 className="font-bold text-foreground">Email</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-1">For general inquiries:</p>
              <a href="mailto:info@stylehub.com" className="text-accent hover:text-accent/80 font-medium">
                info@stylehub.com
              </a>
              <p className="text-muted-foreground text-sm mt-3 mb-1">For support:</p>
              <a href="mailto:support@stylehub.com" className="text-accent hover:text-accent/80 font-medium">
                support@stylehub.com
              </a>
            </div>

            {/* Phone */}
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Phone className="text-accent" size={24} />
                </div>
                <h3 className="font-bold text-foreground">Phone</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-2">Call us Monday to Sunday</p>
              <a href="tel:+919876543210" className="text-accent hover:text-accent/80 font-medium block">
                +91 98765 43210
              </a>
              <p className="text-muted-foreground text-xs mt-2">Toll-free available</p>
            </div>

            {/* Address */}
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <MapPin className="text-accent" size={24} />
                </div>
                <h3 className="font-bold text-foreground">Address</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                StyleHub Headquarters<br />
                123 Fashion Street<br />
                New York, NY 10001<br />
                United States
              </p>
            </div>

            {/* Hours */}
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Clock className="text-accent" size={24} />
                </div>
                <h3 className="font-bold text-foreground">Hours</h3>
              </div>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>Monday - Friday: 9 AM - 6 PM</p>
                <p>Saturday: 10 AM - 4 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>

              <form className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Subject</label>
                  <select className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background">
                    <option>General Inquiry</option>
                    <option>Product Question</option>
                    <option>Order Issue</option>
                    <option>Feedback</option>
                    <option>Partnership</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                  <textarea
                    placeholder="Your message here..."
                    rows={5}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background resize-none"
                  />
                </div>

                {/* Checkbox */}
                <label className="flex items-start gap-2">
                  <input type="checkbox" className="rounded mt-1" />
                  <span className="text-sm text-muted-foreground">
                    I agree to receive marketing communications and updates from StyleHub
                  </span>
                </label>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="bg-muted/50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-6">Find Us on Map</h2>
          <div className="bg-muted border border-border rounded-lg overflow-hidden aspect-video">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1053669024886!2d-74.00592!3d40.71282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQzLjAiTiA3NMKwMDAnMTcuMyJX!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
