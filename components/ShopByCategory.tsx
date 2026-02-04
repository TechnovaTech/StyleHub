'use client';

import { CategoryCard } from './CategoryCard';

const categories = [
  {
    name: 'Men',
    image: '/category-men.jpg',
    href: '/men',
    productCount: 2500,
    icon: '👔',
  },
  {
    name: 'Women',
    image: '/category-women.jpg',
    href: '/women',
    productCount: 3200,
    icon: '👗',
  },
  {
    name: 'Kids',
    image: '/category-kids.jpg',
    href: '/kids',
    productCount: 1800,
    icon: '👶',
  },
];

export function ShopByCategory() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 bg-accent/10 px-4 py-2 rounded-full">
            <span className="text-accent text-sm font-semibold">SHOP</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse collection across different categories. Find exactly what you're looking for with our curated selections.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="flex gap-8 overflow-x-auto pb-4 scrollbar-hide" style={{scrollBehavior: 'smooth'}}>
          {categories.map((category) => (
            <div key={category.name} className="flex-shrink-0 w-80 md:w-96">
              <CategoryCard {...category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
