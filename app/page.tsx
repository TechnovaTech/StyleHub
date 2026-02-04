'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import { ShopByCategory } from '@/components/ShopByCategory'
import { products, getFeaturedProducts, getTrendingProducts } from '@/lib/products'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Home() {
  const featuredProducts = getFeaturedProducts()
  const trendingProducts = getTrendingProducts()
  
  const [currentCategory, setCurrentCategory] = useState(0)
  
  const categories = [
    {
      title: "Men's Collection",
      subtitle: "Premium fashion for modern men",
      description: "Discover our exclusive range of men's clothing. From casual wear to formal attire, find your perfect style.",
      image: "/category-men.jpg",
      link: "/men"
    },
    {
      title: "Women's Collection", 
      subtitle: "Elegant and trendy fashion",
      description: "Express your unique style with our curated women's collection. Elegant designs for every occasion.",
      image: "/category-women.jpg",
      link: "/women"
    },
    {
      title: "Kids Collection",
      subtitle: "Fun and comfortable clothing", 
      description: "Quality materials that are safe and durable. Perfect for your little ones' active lifestyle.",
      image: "/category-kids.jpg",
      link: "/kids"
    },
    {
      title: "Accessories",
      subtitle: "Complete your perfect look",
      description: "Premium accessories from watches to bags. Find the perfect finishing touch for any outfit.",
      image: "/category-accessories.jpg",
      link: "/accessories"
    }
  ]
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCategory((prev) => (prev + 1) % categories.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-black">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-0">
          <img
            src="/hero-bg-pattern.jpg"
            alt="Background pattern"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-8 md:py-16">
            {/* Text Content */}
            <div className="flex flex-col justify-center z-10">
              <div className="inline-flex items-center gap-2 mb-4 md:mb-6 bg-accent/10 w-fit px-3 md:px-4 py-1 md:py-2 rounded-full">
                <span className="text-accent text-xs md:text-sm font-semibold">✨ NEW COLLECTION</span>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 text-balance leading-tight">
                {categories[currentCategory].title}
              </h1>
              <h2 className="text-lg md:text-2xl lg:text-3xl text-yellow-400 mb-3 md:mb-4 font-semibold">
                {categories[currentCategory].subtitle}
              </h2>
              <p className="text-sm md:text-lg lg:text-xl text-gray-300 mb-6 md:mb-8 text-pretty leading-relaxed max-w-xl">
                {categories[currentCategory].description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8">
                <Link
                  href={categories[currentCategory].link}
                  className="inline-flex items-center justify-center bg-accent text-accent-foreground px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-accent/90 transition-all hover:shadow-lg active:scale-95 text-sm md:text-base"
                >
                  Shop Now
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </div>

            {/* Image Content */}
            <div className="relative h-64 md:h-96 lg:h-[500px] xl:h-[600px] rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border-2 md:border-4 border-white p-1 md:p-2 bg-white">
              <div className="w-full h-full rounded-lg md:rounded-xl overflow-hidden">
                <img
                  src={categories[currentCategory].image}
                  alt={categories[currentCategory].title}
                  className="w-full h-full object-cover transition-all duration-500"
                  key={currentCategory}
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute top-3 md:top-6 right-3 md:right-6 bg-white text-foreground px-3 md:px-6 py-2 md:py-3 rounded-full font-semibold shadow-lg flex items-center gap-1 md:gap-2 text-xs md:text-base">
                <span className="text-sm md:text-xl">🔥</span>
                <span className="hidden sm:inline">Trending Now</span>
                <span className="sm:hidden">Hot</span>
              </div>

              {/* Discount Badge */}
              <div className="absolute bottom-3 md:bottom-6 left-3 md:left-6 bg-accent text-accent-foreground px-3 md:px-6 py-2 md:py-3 rounded-full font-bold shadow-lg text-sm md:text-lg">
                <span className="hidden sm:inline">Up to 50% OFF</span>
                <span className="sm:hidden">50% OFF</span>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Dots Background */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-transparent rounded-full blur-3xl opacity-0" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-transparent rounded-full blur-3xl opacity-0" />
      </section>

      {/* Shop by Category Section */}
      <ShopByCategory />

      {/* New Arrivals Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2">New Arrivals</h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground">Fresh styles just landed in our collection</p>
        </div>
        <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4 scrollbar-hide" style={{scrollBehavior: 'smooth'}}>
          <div className="flex gap-4 md:gap-6 animate-scroll">
            {[...products.slice(0, 12), ...products.slice(0, 12)].map((product, index) => (
              <div key={`${product.id}-${index}`} className="flex-shrink-0 w-64 md:w-80">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-muted/50">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2">Trending Now</h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground">Most loved products by our customers</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2">Featured Collections</h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground">Handpicked selections for you</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Offers & Promotions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Offer 1 */}
          <div className="bg-gradient-to-r from-accent to-accent/80 text-accent-foreground rounded-lg p-6 md:p-8 text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Summer Sale</h3>
            <p className="text-base md:text-lg opacity-90 mb-4">Up to 50% off on selected items</p>
            <Link
              href="/shop"
              className="inline-block border-2 border-accent-foreground px-4 md:px-6 py-2 rounded-lg font-semibold hover:bg-accent-foreground hover:text-accent transition-colors text-sm md:text-base"
            >
              Shop Sale
            </Link>
          </div>

          {/* Offer 2 */}
          <div className="bg-primary text-primary-foreground rounded-lg p-6 md:p-8 text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Free Shipping</h3>
            <p className="text-base md:text-lg opacity-90 mb-4">On orders above ₹500</p>
            <Link
              href="/shop"
              className="inline-block border-2 border-primary-foreground px-4 md:px-6 py-2 rounded-lg font-semibold hover:bg-primary-foreground hover:text-primary transition-colors text-sm md:text-base"
            >
              Explore Now
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-primary/5 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Stay Updated</h2>
            <p className="text-sm md:text-base text-muted-foreground mb-6">
              Subscribe to get special offers and the latest updates on new collections.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 md:px-4 py-2 md:py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-accent text-sm md:text-base"
              />
              <button className="bg-accent text-accent-foreground px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors text-sm md:text-base">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
