'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { User, MapPin, Lock, LogOut, ShoppingBag, Heart, Download } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function ProfilePage() {
  const [orders, setOrders] = useState<any[]>([])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const savedOrders = localStorage.getItem('orders')
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders))
    }
  }, [])
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <div className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-white">My Account</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-card border border-border rounded-lg p-6 sticky top-20 h-fit">
              {/* Profile */}
              <div className="mb-6 pb-6 border-b border-border">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-3">
                  <User size={32} className="text-accent" />
                </div>
                <h3 className="font-bold text-foreground">John Doe</h3>
                <p className="text-sm text-muted-foreground">john.doe@email.com</p>
              </div>

              {/* Menu Items */}
              <nav className="space-y-2">
                <a href="#" className="flex items-center gap-3 p-3 rounded-lg bg-accent/10 text-accent font-medium">
                  <User size={20} />
                  Personal Info
                </a>
                <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted text-foreground transition-colors">
                  <MapPin size={20} />
                  Addresses
                </a>
                <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted text-foreground transition-colors">
                  <ShoppingBag size={20} />
                  Orders
                </a>
                <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted text-foreground transition-colors">
                  <Heart size={20} />
                  Wishlist
                </a>
                <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted text-foreground transition-colors">
                  <Lock size={20} />
                  Password
                </a>
                <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted text-red-600 transition-colors">
                  <LogOut size={20} />
                  Logout
                </a>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3 space-y-6">
            {/* Personal Information */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-xl font-bold text-foreground mb-6">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">First Name</label>
                  <input
                    type="text"
                    defaultValue="John"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Last Name</label>
                  <input
                    type="text"
                    defaultValue="Doe"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-foreground mb-2">Email Address</label>
                <input
                  type="email"
                  defaultValue="john.doe@email.com"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Phone Number</label>
                <input
                  type="tel"
                  defaultValue="+91 98765 43210"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                />
              </div>

              <button className="mt-6 bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Save Changes
              </button>
            </div>

            {/* Recent Orders */}
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-foreground">Recent Orders</h2>
                <a href="#" className="text-accent hover:text-accent/80 font-medium text-sm">
                  View All
                </a>
              </div>

              {isClient && orders.length > 0 ? (
                <div className="space-y-3">
                  {orders.slice(0, 3).map((order, index) => (
                    <div key={order.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                      <div>
                        <p className="font-semibold text-foreground">Order #{order.id}</p>
                        <p className="text-sm text-muted-foreground">Placed on {order.date}</p>
                        <p className="text-xs text-muted-foreground">{order.items.length} items</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-foreground">₹{order.total.toLocaleString()}</p>
                        <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">{order.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <ShoppingBag size={48} className="text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">No orders yet</p>
                  <p className="text-sm text-muted-foreground">Start shopping to see your orders here</p>
                </div>
              )}
            </div>

            {/* Saved Addresses */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-xl font-bold text-foreground mb-6">Saved Addresses</h2>

              <div className="space-y-3">
                <div className="p-4 border-2 border-accent rounded-lg bg-accent/5">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-semibold text-foreground">Home</p>
                    <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded">Default</span>
                  </div>
                  <p className="text-sm text-muted-foreground">123 Main Street, New York, NY 10001</p>
                </div>

                <div className="p-4 border-2 border-border rounded-lg">
                  <p className="font-semibold text-foreground mb-2">Office</p>
                  <p className="text-sm text-muted-foreground">456 Business Ave, New York, NY 10002</p>
                </div>

                <button className="w-full border-2 border-border text-foreground py-2 rounded-lg font-medium hover:bg-muted transition-colors">
                  Add New Address
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
