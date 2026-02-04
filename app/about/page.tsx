import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Award, Users, Globe, TrendingUp } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">About StyleHub</h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
            Your destination for premium fashion and accessories that define your unique style.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              StyleHub was founded with a mission to make premium fashion accessible to everyone. We believe that style is not about following trends, but about expressing your unique personality and preferences.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Since our inception, we've been curating the finest collection of clothing and accessories from both established and emerging designers. Our team is passionate about quality, sustainability, and customer satisfaction.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, StyleHub serves thousands of happy customers across the country, offering an unparalleled shopping experience combined with exceptional service.
            </p>
          </div>
          <div className="bg-accent/10 rounded-lg aspect-square flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1552062407-c551eeda4921?w=600&h=600&fit=crop"
              alt="StyleHub Store"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-muted/50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: Award, title: 'Quality', desc: 'Premium products that last' },
              { icon: Users, title: 'Community', desc: 'Building lasting relationships' },
              { icon: Globe, title: 'Sustainability', desc: 'Eco-friendly practices' },
              { icon: TrendingUp, title: 'Innovation', desc: 'Always evolving with trends' },
            ].map((value, idx) => (
              <div key={idx} className="bg-card border border-border rounded-lg p-6 text-center">
                <value.icon size={40} className="text-accent mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { number: '50K+', label: 'Happy Customers' },
            { number: '10K+', label: 'Products' },
            { number: '500+', label: 'Brands' },
            { number: '24/7', label: 'Support' },
          ].map((stat, idx) => (
            <div key={idx} className="bg-card border border-border rounded-lg p-6 text-center">
              <p className="text-4xl font-bold text-accent mb-2">{stat.number}</p>
              <p className="text-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-muted/50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((member) => (
              <div key={member} className="bg-card border border-border rounded-lg overflow-hidden text-center">
                <div className="w-full h-48 bg-accent/10 flex items-center justify-center">
                  <img
                    src={`https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&q=${member * 20}`}
                    alt="Team Member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-foreground text-lg">Team Member {member}</h3>
                  <p className="text-sm text-accent font-medium">Position Title</p>
                  <p className="text-sm text-muted-foreground mt-2">Expert in fashion and customer experience</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">Join Our Fashion Community</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter and stay updated with the latest collections, exclusive offers, and fashion tips.
        </p>
        <div className="flex gap-2 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            Subscribe
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
