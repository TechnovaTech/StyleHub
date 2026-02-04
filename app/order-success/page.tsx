'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { CheckCircle, Package, Truck, Calendar } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

export default function OrderSuccessPage() {
  const [orderDetails, setOrderDetails] = useState<any>(null)
  const searchParams = useSearchParams()
  const orderId = searchParams.get('orderId')

  useEffect(() => {
    if (orderId) {
      const orders = JSON.parse(localStorage.getItem('orders') || '[]')
      const order = orders.find((o: any) => o.id === orderId)
      setOrderDetails(order)
    }
  }, [orderId])

  if (!orderDetails) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground">Order not found</h1>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Success Header */}
      <div className="bg-black text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <CheckCircle size={64} className="text-green-400 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-white mb-2">Order Placed Successfully!</h1>
          <p className="text-gray-300">Thank you for your purchase. Your order has been confirmed.</p>
        </div>
      </div>

      {/* Order Details */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Order Summary */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-xl font-bold text-foreground mb-4">Order Summary</h2>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-muted-foreground">Order ID</p>
                  <p className="font-semibold text-foreground">#{orderDetails.id}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Order Date</p>
                  <p className="font-semibold text-foreground">{orderDetails.date}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Total Amount</p>
                  <p className="font-bold text-primary text-lg">₹{orderDetails.total.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Status</p>
                  <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    {orderDetails.status}
                  </span>
                </div>
              </div>
            </div>

            {/* Order Items */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-xl font-bold text-foreground mb-4">Order Items</h2>
              <div className="space-y-4">
                {orderDetails.items.map((item: any, index: number) => (
                  <div key={index} className="flex gap-4 p-4 border border-border rounded-lg">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded bg-muted"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">Size: {item.size}</p>
                      <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-primary">₹{(item.price * item.quantity).toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery Timeline */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-xl font-bold text-foreground mb-4">Delivery Timeline</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-green-600" />
                  <div>
                    <p className="font-medium text-foreground">Order Confirmed</p>
                    <p className="text-sm text-muted-foreground">{orderDetails.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Package size={20} className="text-blue-600" />
                  <div>
                    <p className="font-medium text-foreground">Processing</p>
                    <p className="text-sm text-muted-foreground">1-2 business days</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Truck size={20} className="text-orange-600" />
                  <div>
                    <p className="font-medium text-foreground">Shipped</p>
                    <p className="text-sm text-muted-foreground">3-5 business days</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar size={20} className="text-purple-600" />
                  <div>
                    <p className="font-medium text-foreground">Delivered</p>
                    <p className="text-sm text-muted-foreground">Expected by {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString('en-IN')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Actions Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-lg p-6 sticky top-20 h-fit">
              <h2 className="text-lg font-bold text-foreground mb-4">What's Next?</h2>
              
              <div className="space-y-3 mb-6">
                <Link
                  href="/profile"
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors text-center block"
                >
                  Track Order
                </Link>
                
                <Link
                  href="/"
                  className="w-full border border-border text-foreground py-3 rounded-lg font-semibold hover:bg-muted transition-colors text-center block"
                >
                  Continue Shopping
                </Link>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-muted-foreground">Order confirmation sent to email</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-muted-foreground">SMS updates on delivery</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-muted-foreground">Easy returns within 30 days</span>
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