'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface CategoryCardProps {
  name: string;
  image: string;
  href: string;
  productCount: number;
  icon?: string;
}

export function CategoryCard({
  name,
  image,
  href,
  productCount,
  icon,
}: CategoryCardProps) {
  return (
    <Link href={href}>
      <div className="group relative h-80 rounded-xl overflow-hidden cursor-pointer flex-shrink-0 w-72 sm:w-80 shadow-lg transition-all duration-500 hover:shadow-2xl">
        {/* Background Image */}
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-500" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
          <div className="transform transition-transform duration-500 group-hover:translate-y-0 translate-y-2">
            <div className="flex items-center gap-2 mb-3">
              {icon && <span className="text-3xl">{icon}</span>}
              <h3 className="text-2xl md:text-3xl font-bold">{name}</h3>
            </div>

            <p className="text-sm text-white/80 mb-4">
              {productCount.toLocaleString()} products available
            </p>

            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-x-1">
              <span className="text-sm font-semibold">Shop Now</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Corner Badge */}
        <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-100 scale-75">
          Trending
        </div>
      </div>
    </Link>
  );
}
