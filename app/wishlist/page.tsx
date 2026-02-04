'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import { products } from '@/lib/products'
import Link from 'next/link'
import { Trash2, ShoppingCart } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState<string[]>([])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const saved = localStorage.getItem('wishlist')
    if (saved) {
      setWishlistItems(JSON.parse(saved))
    }
  }, [])

  const removeFromWishlist = (productId: string) => {
    const updated = wishlistItems.filter(id => id !== productId)
    setWishlistItems(updated)
    localStorage.setItem('wishlist', JSON.stringify(updated))
  }

  const wishlistProducts = products.filter(p => wishlistItems.includes(p.id))

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <div className="bg-black text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">My Wishlist</h1>
          <p className="text-lg text-white/80">{wishlistProducts.length} items saved</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {wishlistProducts.length > 0 ? (
          <>
            {/* Wishlist Items Table (Desktop) */}
            <div className="hidden md:block bg-card border border-border rounded-lg overflow-hidden mb-8">
              <table className="w-full">
                <thead className="bg-muted border-b border-border">
                  <tr>
                    <th className="text-left px-6 py-4 font-semibold text-foreground">Product</th>
                    <th className="text-left px-6 py-4 font-semibold text-foreground">Price</th>
                    <th className="text-left px-6 py-4 font-semibold text-foreground">Stock</th>
                    <th className="text-left px-6 py-4 font-semibold text-foreground">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {wishlistProducts.map((product, idx) => (
                    <tr key={product.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4">
                        <Link href={`/product/${product.id}`} className="flex gap-4 items-center">
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            className="w-20 h-20 object-cover rounded bg-muted"
                          />
                          <div>
                            <p className="font-semibold text-foreground hover:text-accent">{product.name}</p>
                            <p className="text-xs text-muted-foreground capitalize">{product.type}</p>
                          </div>
                        </Link>
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-bold text-primary">₹{product.price.toLocaleString()}</p>
                          {product.originalPrice && (
                            <p className="text-xs text-muted-foreground line-through">
                              ₹{product.originalPrice.toLocaleString()}
                            </p>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                          product.inStock
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                        }`}>
                          {product.inStock ? 'In Stock' : 'Out of Stock'}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button className="p-2 hover:bg-muted rounded transition-colors" title="Add to Cart">
                            <ShoppingCart size={18} className="text-accent" />
                          </button>
                          <button 
                            onClick={() => removeFromWishlist(product.id)}
                            className="p-2 hover:bg-red-50 rounded transition-colors text-red-600" 
                            title="Remove"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Wishlist Grid (Mobile) */}
            <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {wishlistProducts.map((product) => (
                <div key={product.id} className="bg-card border border-border rounded-lg p-4">
                  <Link href={`/product/${product.id}`}>
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full aspect-square object-cover rounded-lg mb-3 bg-muted"
                    />
                  </Link>
                  <h3 className="font-semibold text-foreground line-clamp-2 mb-2">{product.name}</h3>
                  <p className="font-bold text-primary mb-3">₹{product.price.toLocaleString()}</p>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-primary text-primary-foreground py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors text-sm">
                      Add to Cart
                    </button>
                    <button 
                      onClick={() => removeFromWishlist(product.id)}
                      className="p-2 hover:bg-red-50 rounded transition-colors text-red-600 border border-border"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-20">
            <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Your Wishlist is Empty</h2>
            <p className="text-muted-foreground mb-6">Add items to your wishlist to save them for later</p>
            <Link
              href="/shop"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
