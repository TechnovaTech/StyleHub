'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

export default function CheckoutPage() {
  const router = useRouter()
  
  const handlePlaceOrder = () => {
    // Get cart items
    const cartItems = JSON.parse(localStorage.getItem('cart') || '[]')
    
    let orderId = Date.now().toString()
    
    if (cartItems.length > 0) {
      // Create order object
      const order = {
        id: orderId,
        date: new Date().toLocaleDateString('en-IN'),
        items: cartItems,
        total: cartItems.reduce((sum: number, item: any) => sum + (item.price * item.quantity), 0),
        status: 'Confirmed'
      }
      
      // Save order to localStorage
      const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]')
      existingOrders.unshift(order)
      localStorage.setItem('orders', JSON.stringify(existingOrders))
    }
    
    // Clear cart
    localStorage.removeItem('cart')
    window.dispatchEvent(new Event('storage'))
    
    // Show success message
    toast.success("Order placed successfully! Thank you for your purchase.")
    
    // Redirect to order success page with order ID
    setTimeout(() => {
      router.push(`/order-success?orderId=${orderId}`)
    }, 2000)
  }
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <div className="bg-black text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Checkout</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            {/* Shipping Address */}
            <div className="bg-card border border-border rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent text-accent-foreground font-bold">
                  1
                </span>
                Shipping Address
              </h2>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />

                <input
                  type="text"
                  placeholder="Street Address"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="City"
                    className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                  <input
                    type="text"
                    placeholder="State"
                    className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Postal Code"
                    className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                  <input
                    type="text"
                    placeholder="Country"
                    className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" className="rounded" defaultChecked />
                  <span className="text-foreground">Set as default address</span>
                </label>
              </div>
            </div>

            {/* Shipping Method */}
            <div className="bg-card border border-border rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent text-accent-foreground font-bold">
                  2
                </span>
                Shipping Method
              </h2>

              <div className="space-y-3">
                <label className="flex items-center gap-3 p-3 border-2 border-accent rounded-lg cursor-pointer bg-accent/5">
                  <input type="radio" name="shipping" defaultChecked className="w-4 h-4" />
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">Standard Delivery - FREE</p>
                    <p className="text-sm text-muted-foreground">Delivery in 5-7 business days</p>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3 border-2 border-border rounded-lg cursor-pointer hover:border-accent transition-colors">
                  <input type="radio" name="shipping" className="w-4 h-4" />
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">Express Delivery - ₹149</p>
                    <p className="text-sm text-muted-foreground">Delivery in 2-3 business days</p>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3 border-2 border-border rounded-lg cursor-pointer hover:border-accent transition-colors">
                  <input type="radio" name="shipping" className="w-4 h-4" />
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">Overnight Delivery - ₹349</p>
                    <p className="text-sm text-muted-foreground">Delivery by next business day</p>
                  </div>
                </label>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-card border border-border rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent text-accent-foreground font-bold">
                  3
                </span>
                Payment Method
              </h2>

              <div className="space-y-3">
                <label className="flex items-center gap-3 p-3 border-2 border-accent rounded-lg cursor-pointer bg-accent/5">
                  <input type="radio" name="payment" defaultChecked className="w-4 h-4" />
                  <div>
                    <p className="font-semibold text-foreground">Credit/Debit Card</p>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3 border-2 border-border rounded-lg cursor-pointer hover:border-accent transition-colors">
                  <input type="radio" name="payment" className="w-4 h-4" />
                  <div>
                    <p className="font-semibold text-foreground">Net Banking</p>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3 border-2 border-border rounded-lg cursor-pointer hover:border-accent transition-colors">
                  <input type="radio" name="payment" className="w-4 h-4" />
                  <div>
                    <p className="font-semibold text-foreground">UPI</p>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3 border-2 border-border rounded-lg cursor-pointer hover:border-accent transition-colors">
                  <input type="radio" name="payment" className="w-4 h-4" />
                  <div>
                    <p className="font-semibold text-foreground">Cash on Delivery</p>
                  </div>
                </label>
              </div>

              {/* Card Form */}
              <div className="mt-6 pt-6 border-t border-border space-y-4">
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
              </div>
            </div>

            {/* Place Order Button */}
            <button 
              onClick={handlePlaceOrder}
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors text-lg"
            >
              Place Order
            </button>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-lg p-6 sticky top-20 h-fit">
              <h2 className="text-xl font-bold text-foreground mb-6">Order Summary</h2>

              {/* Items */}
              <div className="space-y-3 mb-6 pb-6 border-b border-border">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Premium Cotton Polo Shirt × 1</span>
                  <span className="font-medium text-foreground">₹4,999</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Designer Crossbody Bag × 1</span>
                  <span className="font-medium text-foreground">₹5,999</span>
                </div>
              </div>

              {/* Totals */}
              <div className="space-y-3 mb-6 pb-6 border-b border-border">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>₹10,998</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping</span>
                  <span>FREE</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Tax (18%)</span>
                  <span>₹1,980</span>
                </div>
              </div>

              <div className="flex justify-between font-bold text-lg text-foreground mb-6">
                <span>Total Amount</span>
                <span>₹12,978</span>
              </div>

              {/* Benefits */}
              <div className="space-y-2 text-sm">
                <div className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-muted-foreground">Secure payment</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-muted-foreground">SSL encrypted</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-muted-foreground">Easy returns</span>
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
