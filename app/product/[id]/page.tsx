'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import { products } from '@/lib/products'
import { useState, use } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { Heart, Share2, Shield, Award, ChevronLeft, ChevronRight } from 'lucide-react'

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const router = useRouter()
  const product = products.find((p) => p.id === id)
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '')
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [activeTab, setActiveTab] = useState('description')
  const relatedProducts = products.filter((p) => p.category === product?.category && p.id !== product?.id).slice(0, 4)
  
  // Mock additional images for gallery
  const productImages = [
    product?.image || '/placeholder.svg',
    product?.image || '/placeholder.svg',
    product?.image || '/placeholder.svg',
    product?.image || '/placeholder.svg'
  ]
  
  // Mock reviews data
  const reviews = [
    {
      id: 1,
      name: 'Rahul Sharma',
      rating: 5,
      date: '2024-01-15',
      comment: 'Excellent quality polo shirt! The fabric is soft and comfortable. Perfect fit and great value for money.',
      verified: true
    },
    {
      id: 2,
      name: 'Priya Patel',
      rating: 4,
      date: '2024-01-10',
      comment: 'Good quality shirt. The color is exactly as shown. Delivery was quick. Highly recommended!',
      verified: true
    },
    {
      id: 3,
      name: 'Amit Kumar',
      rating: 5,
      date: '2024-01-08',
      comment: 'Amazing product! The material is premium and the stitching is perfect. Will definitely buy again.',
      verified: true
    }
  ]

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground">Product not found</h1>
        </div>
        <Footer />
      </div>
    )
  }

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <a href="/" className="hover:text-foreground transition-colors">Home</a>
          <span>/</span>
          <a href={`/${product.category}`} className="hover:text-foreground transition-colors capitalize">
            {product.category}
          </a>
          <span>/</span>
          <span className="text-foreground font-medium line-clamp-1">{product.name}</span>
        </div>
      </div>

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Enhanced Image Gallery */}
          <div>
            <div className="relative bg-muted rounded-xl overflow-hidden aspect-square mb-4 group">
              <img
                src={productImages[activeImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {discount > 0 && (
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full font-bold text-sm shadow-lg">
                  {discount}% off
                </div>
              )}
              <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full font-bold text-sm shadow-lg">
                ✓ In Stock
              </div>
              
              {/* Image Navigation */}
              <button 
                onClick={() => setActiveImageIndex(activeImageIndex > 0 ? activeImageIndex - 1 : productImages.length - 1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => setActiveImageIndex(activeImageIndex < productImages.length - 1 ? activeImageIndex + 1 : 0)}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            
            {/* Thumbnail Gallery */}
            <div className="flex gap-3 overflow-x-auto pb-2">
              {productImages.map((img, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveImageIndex(i)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg border-2 overflow-hidden transition-all ${
                    activeImageIndex === i 
                      ? 'border-primary ring-2 ring-primary/20' 
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <img src={img} alt={`View ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-6">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                {product.type}
              </p>
              <h1 className="text-3xl font-bold text-foreground mb-3">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-lg ${
                        i < Math.floor(product.rating)
                          ? 'text-accent'
                          : i < product.rating
                            ? 'text-accent/50'
                            : 'text-muted-foreground'
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
              </div>
            </div>

            {/* Price */}
            <div className="mb-6 pb-6 border-b border-border">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl font-bold text-primary">₹{product.price.toLocaleString()}</span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-foreground mb-3">Size</label>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-lg border-2 transition-all ${
                      selectedSize === size
                        ? 'border-accent bg-accent/10'
                        : 'border-border hover:border-accent'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                <a href="#" className="text-accent hover:underline">Size Guide</a>
              </p>
            </div>

            {/* Add to Cart */}
            <div className="mb-6 pb-6 border-b border-border">
              <button
                onClick={() => {
                  const saved = localStorage.getItem('cart') || '[]'
                  const cart = JSON.parse(saved)
                  
                  const existingItem = cart.find((item: any) => item.id === product.id)
                  if (existingItem) {
                    existingItem.quantity += 1
                  } else {
                    cart.push({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      originalPrice: product.originalPrice,
                      quantity: 1,
                      size: selectedSize,
                      image: product.image
                    })
                  }
                  
                  localStorage.setItem('cart', JSON.stringify(cart))
                  window.dispatchEvent(new Event('storage'))
                  toast.success("Successfully added to cart")
                }}
                className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Add to Cart
              </button>
            </div>

            {/* Wishlist & Share */}
            <div className="flex gap-3 mb-6">
              <button
                onClick={() => {
                  const saved = localStorage.getItem('wishlist') || '[]'
                  const wishlist = JSON.parse(saved)
                  
                  if (isWishlisted) {
                    const updated = wishlist.filter((id: string) => id !== product.id)
                    localStorage.setItem('wishlist', JSON.stringify(updated))
                    setIsWishlisted(false)
                    toast.success("Removed from wishlist")
                  } else {
                    const updated = [...wishlist, product.id]
                    localStorage.setItem('wishlist', JSON.stringify(updated))
                    setIsWishlisted(true)
                    toast.success("Added to wishlist")
                  }
                  
                  window.dispatchEvent(new Event('storage'))
                }}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg border transition-all ${
                  isWishlisted
                    ? 'border-accent bg-accent/10 text-accent'
                    : 'border-gray-300 hover:border-accent text-foreground'
                }`}
              >
                <Heart size={20} fill={isWishlisted ? 'currentColor' : 'none'} />
                {isWishlisted ? 'Wishlisted' : 'Add to Wishlist'}
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-gray-300 hover:border-accent text-foreground transition-all">
                <Share2 size={20} />
                Share
              </button>
            </div>

            {/* Enhanced Features */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg border border-purple-200">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="text-purple-600" size={20} />
                  <span className="font-semibold text-purple-800">Secure Payment</span>
                </div>
                <p className="text-xs text-purple-600">100% secure checkout</p>
              </div>
              
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-lg border border-orange-200">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="text-orange-600" size={20} />
                  <span className="font-semibold text-orange-800">Premium Quality</span>
                </div>
                <p className="text-xs text-orange-600">Certified materials</p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
