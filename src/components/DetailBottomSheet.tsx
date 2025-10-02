import { motion, AnimatePresence } from 'framer-motion';
import { MenuItem } from '@/data/menuData';
import { X, Plus, Star, Clock, ChefHat } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface DetailBottomSheetProps {
  item: MenuItem | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToOrder: (item: MenuItem) => void;
}

const DetailBottomSheet = ({ item, isOpen, onClose, onAddToOrder }: DetailBottomSheetProps) => {
  if (!item) return null;

  const handleAddToOrder = () => {
    onAddToOrder(item);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Bottom sheet */}
          <motion.div
            className="fixed inset-x-0 bottom-0 z-50 bg-background rounded-t-3xl shadow-2xl max-h-[85vh] overflow-hidden"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30,
            }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (info.offset.y > 100) {
                onClose();
              }
            }}
          >
            {/* Drag handle */}
            <div className="flex justify-center pt-3 pb-2">
              <div className="w-12 h-1.5 bg-border rounded-full" />
            </div>

            <div className="overflow-y-auto max-h-[calc(85vh-60px)] scrollbar-hide">
              {/* Parallax header image */}
              <motion.div
                className="relative h-64 overflow-hidden"
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

                <motion.button
                  className="absolute top-4 right-4 touch-target p-2 glass rounded-full"
                  onClick={onClose}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Close details"
                >
                  <X className="w-5 h-5 text-foreground" />
                </motion.button>

                <div className="absolute bottom-4 left-4 flex gap-2">
                  <Badge className="glass bg-white/90 text-foreground border-0 px-2 py-1 gap-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-semibold">{item.rating}</span>
                  </Badge>
                  {item.spiceLevel > 0 && (
                    <Badge className="gradient-primary text-white border-0 px-2 py-1">
                      {'🌶️'.repeat(item.spiceLevel)}
                    </Badge>
                  )}
                </div>
              </motion.div>

              <div className="px-6 pb-6">
                {/* Title and price */}
                <motion.div
                  className="flex items-start justify-between gap-4 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <h2 className="font-serif text-3xl font-bold text-foreground">
                    {item.name}
                  </h2>
                  <span className="font-bold text-2xl gradient-text whitespace-nowrap">
                    ₹{item.price}
                  </span>
                </motion.div>

                {/* Meta info */}
                <motion.div
                  className="flex items-center gap-4 mb-4 text-sm text-muted-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    <span>{item.prepTime}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ChefHat className="w-4 h-4" />
                    <span>{item.category}</span>
                  </div>
                </motion.div>

                {/* Description */}
                <motion.p
                  className="text-muted-foreground mb-6 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {item.description}
                </motion.p>

                {/* Ingredients */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="font-semibold text-foreground mb-3">Ingredients</h3>
                  <motion.div
                    className="flex flex-wrap gap-2"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.05,
                        },
                      },
                    }}
                    initial="hidden"
                    animate="visible"
                  >
                    {item.ingredients.map((ingredient, index) => (
                      <motion.div
                        key={index}
                        variants={{
                          hidden: { opacity: 0, scale: 0.8 },
                          visible: { opacity: 1, scale: 1 },
                        }}
                      >
                        <Badge variant="secondary" className="px-3 py-1.5">
                          {ingredient}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Fixed add button */}
            <motion.div
              className="sticky bottom-0 p-6 bg-background border-t border-border"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                onClick={handleAddToOrder}
                className="w-full touch-target gradient-primary text-white text-lg font-semibold rounded-2xl shadow-elegant hover:shadow-glow transition-all"
                size="lg"
              >
                <Plus className="w-5 h-5 mr-2" />
                Add to Order
              </Button>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default DetailBottomSheet;
