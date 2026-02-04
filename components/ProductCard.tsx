'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Heart, ShoppingCart } from 'lucide-react'
import { Product } from '@/lib/products'
import { useState } from 'react'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <Link href={`/product/${product.id}`}>
      <div className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
        {/* Image Container */}
        <div className="relative overflow-hidden bg-muted aspect-square">
          <img
            src={product.image || "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=600&fit=crop"}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />

          {/* Discount Badge */}
          {discount > 0 && (
            <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold">
              -{discount}%
            </div>
          )}

          {/* Stock Badge */}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="text-white font-bold text-lg">Out of Stock</span>
            </div>
          )}

          {/* Wishlist Button */}
          <button
            onClick={(e) => {
              e.preventDefault()
              setIsWishlisted(!isWishlisted)
            }}
            className="absolute top-3 left-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
          >
            <Heart
              size={18}
              className={isWishlisted ? 'fill-accent text-accent' : 'text-foreground'}
            />
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Category Tag */}
          <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">
            {product.type}
          </p>

          {/* Product Name */}
          <h3 className="text-sm font-semibold text-foreground line-clamp-2 mb-2">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-3" style={{display: 'none'}}>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-xs ${
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
            <span className="text-xs text-muted-foreground">({product.reviews})</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg font-bold text-primary">₹{product.price.toLocaleString()}</span>
            {product.originalPrice && (
              <span className="text-xs text-muted-foreground line-through">
                ₹{product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          {/* Colors Preview */}
          <div className="flex gap-1.5 mb-3" style={{display: 'none'}}>
            {product.colors.slice(0, 3).map((color, idx) => (
              <div
                key={idx}
                title={color}
                className={`w-4 h-4 rounded-full border-2 border-border transition-transform hover:scale-110`}
                style={{
                  backgroundColor: getColorCode(color),
                }}
              />
            ))}
            {product.colors.length > 3 && (
              <div className="w-4 h-4 rounded-full border-2 border-border flex items-center justify-center text-xs text-muted-foreground">
                +{product.colors.length - 3}
              </div>
            )}
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={(e) => {
              e.preventDefault()
              console.log(`Added ${product.name} to cart`)
            }}
            disabled={!product.inStock}
            className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/90 disabled:bg-muted disabled:text-muted-foreground transition-colors font-medium text-sm flex items-center justify-center gap-2"
          >
            <ShoppingCart size={16} />
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  )
}

function getColorCode(color: string): string {
  const colorMap: Record<string, string> = {
    // Neutrals
    White: '#FFFFFF',
    Black: '#000000',
    Navy: '#001F3F',
    Gray: '#808080',
    Cream: '#FFFDD0',
    Tan: '#D2B48C',
    Brown: '#8B4513',
    Beige: '#F5F5DC',
    // Colors
    Red: '#FF4136',
    Blue: '#0074D9',
    Green: '#2ECC40',
    Yellow: '#FFDC00',
    Pink: '#FF69B4',
    Burgundy: '#800020',
    'Dark Blue': '#00008B',
    'Light Blue': '#ADD8E6',
    'Dark Denim': '#1a3a4d',
    'Light Denim': '#6b9dc0',
    'Rose Gold': '#B76E79',
    Gold: '#FFD700',
    Silver: '#C0C0C0',
    'Gold Frame': '#FFD700',
    'Silver Frame': '#C0C0C0',
    'Rose Gold Frame': '#B76E79',
  }
  return colorMap[color] || '#CCCCCC'
}
