'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const faqs = [
    {
      id: '1',
      category: 'Orders',
      question: 'How do I place an order?',
      answer: 'You can place an order by browsing our products, selecting your desired item, choosing size and color, and clicking "Add to Cart". Then proceed to checkout to complete your purchase.',
    },
    {
      id: '2',
      category: 'Orders',
      question: 'Can I modify or cancel my order?',
      answer: 'Orders can be modified or cancelled within 2 hours of placement. After that, the order enters the processing stage and cannot be modified. Contact our support team immediately if you need assistance.',
    },
    {
      id: '3',
      category: 'Shipping',
      question: 'What are the shipping options?',
      answer: 'We offer Standard Delivery (5-7 days, FREE), Express Delivery (2-3 days, ₹149), and Overnight Delivery (next day, ₹349). Shipping is free on orders above ₹500.',
    },
    {
      id: '4',
      category: 'Shipping',
      question: 'How long does delivery take?',
      answer: 'Standard delivery takes 5-7 business days from the date of order confirmation. Express and Overnight options are also available for faster delivery.',
    },
    {
      id: '5',
      category: 'Returns',
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy. Items must be unused, unwashed, and in original condition with tags attached. Simply initiate a return request in your account, and we\'ll provide a prepaid return label.',
    },
    {
      id: '6',
      category: 'Returns',
      question: 'How do I return an item?',
      answer: 'Go to your Orders section, select the item you want to return, and click "Return". Fill in the return reason and submit. Once approved, you can use the prepaid shipping label to send it back to us.',
    },
    {
      id: '7',
      category: 'Payment',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit/debit cards, net banking, UPI, digital wallets, and cash on delivery (COD) for selected locations.',
    },
    {
      id: '8',
      category: 'Payment',
      question: 'Is my payment information secure?',
      answer: 'Yes, all payments are processed through secure, PCI-DSS compliant payment gateways. Your payment information is encrypted and never stored on our servers.',
    },
    {
      id: '9',
      category: 'Account',
      question: 'How do I create an account?',
      answer: 'Click on the "Sign Up" button, enter your email address, create a password, and fill in your personal details. You can also sign up using your Google or Facebook account.',
    },
    {
      id: '10',
      category: 'Account',
      question: 'How do I reset my password?',
      answer: 'Click "Forgot Password" on the login page, enter your email, and you\'ll receive a password reset link. Follow the instructions to create a new password.',
    },
  ]

  const categories = ['All', 'Orders', 'Shipping', 'Returns', 'Payment', 'Account']
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredFaqs = selectedCategory === 'All'
    ? faqs
    : faqs.filter((faq) => faq.category === selectedCategory)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Find answers to common questions about orders, shipping, returns, and more.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-foreground hover:bg-border'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-card border border-border rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors text-left"
              >
                <div>
                  <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">
                    {faq.category}
                  </p>
                  <p className="font-semibold text-foreground">{faq.question}</p>
                </div>
                <ChevronDown
                  size={20}
                  className={`text-accent transition-transform flex-shrink-0 ml-4 ${
                    openItems.includes(faq.id) ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openItems.includes(faq.id) && (
                <div className="px-6 py-4 border-t border-border bg-muted/30">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-primary/5 border-2 border-primary/20 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-2">Didn't find what you're looking for?</h2>
          <p className="text-muted-foreground mb-6">
            Our support team is here to help. Get in touch with us for any other questions.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="/contact"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="mailto:support@stylehub.com"
              className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors"
            >
              Email Support
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
