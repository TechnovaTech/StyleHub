'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Trash2, Plus, Minus } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function CartPage() {
  const [cartItems, setCartItems] = useState<any[]>([])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const saved = localStorage.getItem('cart')
    if (saved) {
      setCartItems(JSON.parse(saved))
    }
  }, [])

  const removeItem = (id: string) => {
    const updated = cartItems.filter(item => item.id !== id)
    setCartItems(updated)
    localStorage.setItem('cart', JSON.stringify(updated))
    window.dispatchEvent(new Event('storage'))
  }

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id)
      return
    }
    const updated = cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    )
    setCartItems(updated)
    localStorage.setItem('cart', JSON.stringify(updated))
    window.dispatchEvent(new Event('storage'))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 500 ? 0 : 99
  const tax = Math.round(subtotal * 0.18)
  const total = subtotal + shipping + tax

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <div className="bg-black text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Shopping Cart</h1>
          <p className="text-lg text-white/80">{cartItems.length} items in your cart</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg mb-4">Your cart is empty</p>
                <Link
                  href="/"
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Start Shopping
                </Link>
              </div>
            ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-card border border-border rounded-lg p-4 flex gap-4 hover:shadow-md transition-shadow">
                  {/* Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg bg-muted"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground line-clamp-2">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      Size: <span className="text-foreground">{item.size}</span>
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mt-3">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-muted rounded transition-colors"
                      >
                        <Minus size={16} className="text-muted-foreground" />
                      </button>
                      <span className="text-sm font-medium text-foreground w-6 text-center">
                        {item.quantity}
                      </span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-muted rounded transition-colors"
                      >
                        <Plus size={16} className="text-muted-foreground" />
                      </button>
                    </div>
                  </div>

                  {/* Price & Remove */}
                  <div className="flex flex-col items-end justify-between">
                    <div>
                      <p className="font-bold text-primary">₹{(item.price * item.quantity).toLocaleString()}</p>
                      {item.originalPrice && (
                        <p className="text-xs text-muted-foreground line-through">
                          ₹{(item.originalPrice * item.quantity).toLocaleString()}
                        </p>
                      )}
                    </div>
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="p-2 hover:bg-red-50 rounded transition-colors text-red-600"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            )}

            {/* Continue Shopping */}
            <div className="mt-6">
              <Link
                href="/shop"
                className="text-accent hover:text-accent/80 font-medium transition-colors inline-flex items-center gap-1"
              >
                ← Continue Shopping
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-lg p-6 sticky top-20 h-fit">
              <h2 className="text-xl font-bold text-foreground mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6 pb-6 border-b border-border">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Tax (18%)</span>
                  <span>₹{tax.toLocaleString()}</span>
                </div>
              </div>

              <div className="flex justify-between font-bold text-lg text-foreground mb-6">
                <span>Total</span>
                <span>₹{total.toLocaleString()}</span>
              </div>

              <Link
                href="/checkout"
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors text-center block mb-3"
              >
                Process to Checkout
              </Link>

              <Link
                href="/"
                className="w-full border border-border text-foreground py-3 rounded-lg font-semibold hover:bg-muted transition-colors text-center block"
              >
                Continue Shopping
              </Link>

              {/* Promo Code */}
              <div className="mt-6 pt-6 border-t border-border">
                <input
                  type="text"
                  placeholder="Enter promo code"
                  className="w-full px-4 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent mb-2"
                />
                <button className="w-full px-4 py-2 bg-accent/10 text-accent rounded-lg font-medium hover:bg-accent/20 transition-colors text-sm">
                  Apply Code
                </button>
              </div>

              {/* Benefits */}
              <div className="mt-6 pt-6 border-t border-border space-y-3 text-sm">
                <div className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-muted-foreground">Free delivery on orders above ₹500</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-muted-foreground">Easy 30-day returns</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-muted-foreground">Secure payment options</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
