import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface NavbarProps {
  orderCount: number;
  onOrderClick: () => void;
}

const Navbar = ({ orderCount, onOrderClick }: NavbarProps) => {
  return (
    <motion.nav
      className="sticky top-0 z-40 glass border-b border-border/50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <motion.div
            className="gradient-primary p-2 rounded-xl"
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
           <img 
          src="public/images/yours-cafe-logo.png" 
          alt="Yours Café Logo" 
          className="w-6 h-6 object-contain"
          />
          </motion.div>
          <div>
            <h1 className="font-serif text-xl font-bold gradient-text">
              Yours Café
            </h1>
            <motion.div
              className="flex items-center gap-1.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs text-muted-foreground">Open now</span>
            </motion.div>
          </div>
        </div>

        <motion.button
          onClick={onOrderClick}
          className="relative touch-target p-2 rounded-xl hover:bg-secondary/50 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={`View order. ${orderCount} items in order`}
        >
          <ShoppingBag className="w-6 h-6 text-foreground" strokeWidth={2} />
          {orderCount > 0 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1"
            >
              <Badge className="h-5 min-w-5 px-1.5 text-xs font-bold gradient-primary text-white border-0">
                {orderCount}
              </Badge>
            </motion.div>
          )}
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
