import { motion } from 'framer-motion';
import { MenuItem } from '@/data/menuData';
import { Star, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface MenuItemCardProps {
  item: MenuItem;
  index: number;
  onClick: () => void;
}

const MenuItemCard = ({ item, index, onClick }: MenuItemCardProps) => {
  return (
    <motion.button
      className="w-full text-left touch-target group"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            type: 'spring',
            stiffness: 100,
            damping: 12,
          },
        },
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      aria-label={`View details for ${item.name}, ${item.description}`}
    >
      <div className="glass rounded-3xl overflow-hidden transition-all duration-300 group-hover:shadow-elegant">
        <div className="relative overflow-hidden aspect-[4/3]">
          <motion.img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Rating badge */}
          <motion.div
            className="absolute top-3 right-3"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.05 }}
          >
            <Badge className="glass bg-white/90 text-foreground border-0 px-2 py-1 gap-1">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              <span className="text-xs font-semibold">{item.rating}</span>
            </Badge>
          </motion.div>

          {/* Spice level indicator */}
          {item.spiceLevel > 0 && (
            <motion.div
              className="absolute top-3 left-3"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.05 + 0.1 }}
            >
              <Badge className="gradient-primary text-white border-0 px-2 py-1">
                {'🌶️'.repeat(item.spiceLevel)}
              </Badge>
            </motion.div>
          )}
        </div>

        <div className="p-4">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-serif text-lg font-semibold text-foreground group-hover:gradient-text transition-all">
              {item.name}
            </h3>
            <span className="font-bold text-primary text-lg whitespace-nowrap">
              ₹{item.price}
            </span>
          </div>

          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
            {item.description}
          </p>

          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{item.prepTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-muted-foreground" />
              <span>{item.category}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.button>
  );
};

export default MenuItemCard;
