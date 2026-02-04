'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, Search, ShoppingCart, User } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const [wishlistCount, setWishlistCount] = useState(0)
  const [cartItems, setCartItems] = useState<any[]>([])

  useEffect(() => {
    setIsClient(true)
    
    const updateCounts = () => {
      const savedWishlist = localStorage.getItem('wishlist')
      const savedCart = localStorage.getItem('cart')
      
      if (savedWishlist) {
        setWishlistCount(JSON.parse(savedWishlist).length)
      }
      if (savedCart) {
        setCartItems(JSON.parse(savedCart))
      }
    }
    
    updateCounts()
    window.addEventListener('storage', updateCounts)
    
    return () => window.removeEventListener('storage', updateCounts)
  }, [])

  const navLinks = [
    { label: 'Shop', href: '/shop' },
    { label: 'Men', href: '/men' },
    { label: 'Women', href: '/women' },
    { label: 'Kids', href: '/kids' },
    { label: 'Accessories', href: '/accessories' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="text-2xl font-bold text-primary">StyleHub</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-accent transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-muted rounded-lg transition-colors">
              <Search size={20} className="text-foreground" />
            </button>
            <Link href="/wishlist" className="p-2 hover:bg-muted rounded-lg transition-colors relative">
              <span className="sr-only">Wishlist</span>
              <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              {isClient && wishlistCount > 0 && (
                <span className="absolute top-1 right-1 bg-accent text-accent-foreground text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <Link href="/cart" className="p-2 hover:bg-muted rounded-lg transition-colors relative">
              <ShoppingCart size={20} className="text-foreground" />
              {isClient && cartItems.length > 0 && (
                <span className="absolute top-1 right-1 bg-accent text-accent-foreground text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </Link>
            <Link href="/login" className="p-2 hover:bg-muted rounded-lg transition-colors hidden sm:block">
              <User size={20} className="text-foreground" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X size={20} className="text-foreground" />
              ) : (
                <Menu size={20} className="text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2 animate-in fade-in slide-in-from-top-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-foreground hover:bg-muted rounded-lg transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/login"
              className="block px-3 py-2 text-foreground hover:bg-muted rounded-lg transition-colors text-sm font-medium"
            >
              Login
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
