import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { ShoppingCart, Star } from 'lucide-react';

const products = [
  {
    id: 'p1',
    name: 'Premium Dhoop Sticks',
    price: 299,
    image: '/placeholder.svg',
    category: 'Dhoop & Incense',
    rating: 4.8,
    description: 'Natural fragrance, long-lasting',
  },
  {
    id: 'p2',
    name: 'Pure Desi Ghee (500ml)',
    price: 599,
    image: '/placeholder.svg',
    category: 'Puja Essentials',
    rating: 4.9,
    description: 'Made from pure cow milk',
  },
  {
    id: 'p3',
    name: 'Samidha Wood Bundle',
    price: 199,
    image: '/placeholder.svg',
    category: 'Hawan Items',
    rating: 4.7,
    description: 'For hawan and fire rituals',
  },
  {
    id: 'p4',
    name: 'Complete Puja Thali Set',
    price: 1299,
    image: '/placeholder.svg',
    category: 'Puja Kits',
    rating: 4.9,
    description: 'Brass thali with all accessories',
  },
  {
    id: 'p5',
    name: 'Kumkum & Chandan Set',
    price: 149,
    image: '/placeholder.svg',
    category: 'Tilak Items',
    rating: 4.6,
    description: 'Pure and natural ingredients',
  },
  {
    id: 'p6',
    name: 'Cotton Wicks (Pack of 500)',
    price: 99,
    image: '/placeholder.svg',
    category: 'Diya & Wicks',
    rating: 4.5,
    description: 'Ready-to-use wicks for lamps',
  },
  {
    id: 'p7',
    name: 'Camphor Tablets (100g)',
    price: 179,
    image: '/placeholder.svg',
    category: 'Aarti Items',
    rating: 4.8,
    description: 'Pure kapoor for aarti',
  },
  {
    id: 'p8',
    name: 'Ganga Jal (500ml)',
    price: 249,
    image: '/placeholder.svg',
    category: 'Holy Water',
    rating: 4.9,
    description: 'Authentic from Haridwar',
  },
];

export default function PujaEssentials() {
  const { addItem } = useCart();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-16 bg-gradient-to-br from-saffron/90 to-gold/80 text-primary-foreground">
        <div className="absolute inset-0 divine-pattern opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Puja Essentials
            </h1>
            <p className="text-lg opacity-90">
              Premium quality items for your daily worship and special ceremonies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card rounded-xl overflow-hidden shadow-lg border border-border hover:shadow-xl transition-all group"
              >
                <div className="aspect-square bg-sandalwood-light relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <span className="absolute top-2 left-2 px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full">
                    {product.category}
                  </span>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-1 text-sm text-gold mb-1">
                    <Star className="w-4 h-4 fill-current" />
                    <span>{product.rating}</span>
                  </div>
                  <h3 className="font-semibold mb-1 line-clamp-1">{product.name}</h3>
                  <p className="text-xs text-muted-foreground mb-3">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">₹{product.price}</span>
                    <Button
                      variant="divine"
                      size="sm"
                      onClick={() => addItem({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image,
                        category: product.category,
                      })}
                    >
                      <ShoppingCart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
