import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import { getProductsByCategory } from '@/lib/products'
import Link from 'next/link'

export default function MenPage() {
  const products = getProductsByCategory('men')

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Banner */}
      <section className="bg-black text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Men's Collection</h1>
          <p className="text-lg text-white/80">Discover premium fashion for men</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 bg-card rounded-lg p-6 border border-border">
              <h3 className="text-lg font-bold text-foreground mb-6">Filters</h3>

              {/* Price Filter */}
              <div className="mb-6 pb-6 border-b border-border">
                <h4 className="font-semibold text-foreground mb-3">Price</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <label className="flex items-center gap-2 cursor-pointer hover:text-foreground">
                    <input type="checkbox" className="rounded" /> Under ₹1000
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer hover:text-foreground">
                    <input type="checkbox" className="rounded" /> ₹1000 - ₹5000
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer hover:text-foreground">
                    <input type="checkbox" className="rounded" /> ₹5000 - ₹10000
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer hover:text-foreground">
                    <input type="checkbox" className="rounded" /> Above ₹10000
                  </label>
                </div>
              </div>

              {/* Size Filter */}
              <div className="mb-6 pb-6 border-b border-border">
                <h4 className="font-semibold text-foreground mb-3">Size</h4>
                <div className="grid grid-cols-2 gap-2">
                  {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                    <button
                      key={size}
                      className="border border-border rounded px-3 py-1 text-sm hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Filter */}
              <div className="mb-6 pb-6 border-b border-border">
                <h4 className="font-semibold text-foreground mb-3">Color</h4>
                <div className="flex flex-wrap gap-2">
                  {['Navy', 'White', 'Black', 'Grey'].map((color) => (
                    <button
                      key={color}
                      className="w-8 h-8 rounded-full border-2 border-border hover:border-accent transition-colors"
                      title={color}
                    />
                  ))}
                </div>
              </div>

              {/* Brand Filter */}
              <div>
                <h4 className="font-semibold text-foreground mb-3">Rating</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <label className="flex items-center gap-2 cursor-pointer hover:text-foreground">
                    <input type="checkbox" className="rounded" /> 4★ & above
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer hover:text-foreground">
                    <input type="checkbox" className="rounded" /> 3★ & above
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer hover:text-foreground">
                    <input type="checkbox" className="rounded" /> 2★ & above
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-foreground">
                  {products.length} Products
                </h2>
              </div>
              <select className="px-4 py-2 border border-border rounded-lg bg-card text-foreground">
                <option>Sort by: Newest</option>
                <option>Sort by: Price Low to High</option>
                <option>Sort by: Price High to Low</option>
                <option>Sort by: Best Rating</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
