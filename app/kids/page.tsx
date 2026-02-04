import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import { getProductsByCategory } from '@/lib/products'

export default function KidsPage() {
  const products = getProductsByCategory('kids')

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Banner */}
      <section className="bg-black text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Kids' Collection</h1>
          <p className="text-lg text-white/80">Fun and trendy clothing for children</p>
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
                    <input type="checkbox" className="rounded" /> Under ₹500
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer hover:text-foreground">
                    <input type="checkbox" className="rounded" /> ₹500 - ₹1500
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer hover:text-foreground">
                    <input type="checkbox" className="rounded" /> ₹1500 - ₹3000
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer hover:text-foreground">
                    <input type="checkbox" className="rounded" /> Above ₹3000
                  </label>
                </div>
              </div>

              {/* Age Filter */}
              <div className="mb-6 pb-6 border-b border-border">
                <h4 className="font-semibold text-foreground mb-3">Age</h4>
                <div className="grid grid-cols-2 gap-2">
                  {['2Y', '4Y', '6Y', '8Y', '10Y', '12Y'].map((age) => (
                    <button
                      key={age}
                      className="border border-border rounded px-3 py-1 text-sm hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors"
                    >
                      {age}
                    </button>
                  ))}
                </div>
              </div>

              {/* Gender Filter */}
              <div className="mb-6 pb-6 border-b border-border">
                <h4 className="font-semibold text-foreground mb-3">Gender</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <label className="flex items-center gap-2 cursor-pointer hover:text-foreground">
                    <input type="checkbox" className="rounded" /> Boys
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer hover:text-foreground">
                    <input type="checkbox" className="rounded" /> Girls
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer hover:text-foreground">
                    <input type="checkbox" className="rounded" /> Unisex
                  </label>
                </div>
              </div>

              {/* Rating Filter */}
              <div>
                <h4 className="font-semibold text-foreground mb-3">Rating</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <label className="flex items-center gap-2 cursor-pointer hover:text-foreground">
                    <input type="checkbox" className="rounded" /> 4★ & above
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer hover:text-foreground">
                    <input type="checkbox" className="rounded" /> 3★ & above
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
