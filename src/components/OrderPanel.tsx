import { motion, AnimatePresence } from 'framer-motion';
import { MenuItem } from '@/data/menuData';
import { X, Trash2, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface OrderPanelProps {
  isOpen: boolean;
  onClose: () => void;
  items: MenuItem[];
  onRemoveItem: (itemId: string) => void;
  onShowToWaiter: () => void;
}

const OrderPanel = ({ isOpen, onClose, items, onRemoveItem, onShowToWaiter }: OrderPanelProps) => {
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

          {/* Side panel */}
          <motion.div
            className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-background shadow-2xl"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30,
            }}
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground">Your Order</h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    {items.length} {items.length === 1 ? 'item' : 'items'}
                  </p>
                </div>
                <motion.button
                  onClick={onClose}
                  className="touch-target p-2 rounded-xl hover:bg-secondary/50 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Close order panel"
                >
                  <X className="w-5 h-5 text-foreground" />
                </motion.button>
              </div>

              {/* Order items */}
              <div className="flex-1 overflow-y-auto px-6 py-4">
                {items.length === 0 ? (
                  <motion.div
                    className="flex flex-col items-center justify-center h-full text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <div className="w-24 h-24 rounded-full glass flex items-center justify-center mb-4">
                      <span className="text-4xl">🍽️</span>
                    </div>
                    <p className="text-lg font-medium text-foreground mb-2">Your order is empty</p>
                    <p className="text-sm text-muted-foreground">
                      Start adding items from the menu
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    className="space-y-3"
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
                    {items.map((item, index) => (
                      <motion.div
                        key={`${item.id}-${index}`}
                        className="glass rounded-2xl p-4 flex gap-3"
                        variants={{
                          hidden: { opacity: 0, x: 20 },
                          visible: { opacity: 1, x: 0 },
                        }}
                        layout
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-xl flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-foreground truncate">{item.name}</h3>
                          <p className="text-sm text-muted-foreground mt-0.5">{item.category}</p>
                          <Badge className="mt-2 gradient-primary text-white border-0">
                            ₹{item.price}
                          </Badge>
                        </div>
                        <motion.button
                          onClick={() => onRemoveItem(item.id)}
                          className="touch-target p-2 rounded-xl hover:bg-destructive/10 transition-colors self-start"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          aria-label={`Remove ${item.name} from order`}
                        >
                          <Trash2 className="w-4 h-4 text-destructive" />
                        </motion.button>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </div>

              {/* Footer */}
              {items.length > 0 && (
                <motion.div
                  className="p-6 border-t border-border space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Button
                    onClick={onShowToWaiter}
                    className="w-full touch-target gradient-primary text-white text-lg font-semibold rounded-2xl shadow-elegant hover:shadow-glow transition-all"
                    size="lg"
                  >
                    <Eye className="w-5 h-5 mr-2" />
                    Show to Waiter
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    Present this to your server to place your order
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default OrderPanel;
