import { motion, AnimatePresence } from 'framer-motion';
import { MenuItem } from '@/data/menuData';
import { X, CheckCircle2 } from 'lucide-react';

interface ShowToWaiterProps {
  isOpen: boolean;
  onClose: () => void;
  items: MenuItem[];
}

const ShowToWaiter = ({ isOpen, onClose, items }: ShowToWaiterProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[60] gradient-primary flex flex-col"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }}
        >
          {/* Close button */}
          <div className="absolute top-4 right-4 z-10">
            <motion.button
              onClick={onClose}
              className="touch-target p-3 bg-white/20 backdrop-blur-sm rounded-full text-white"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Close waiter view"
            >
              <X className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6 md:p-8">
            <div className="max-w-2xl mx-auto">
              {/* Header */}
              <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <motion.div
                  className="inline-block mb-4"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <CheckCircle2 className="w-16 h-16 text-white" strokeWidth={1.5} />
                </motion.div>
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-2">
                  Order Ready
                </h1>
                <p className="text-white/90 text-lg">
                  Please show this to your server
                </p>
              </motion.div>

              {/* Order items - large typography for waiter */}
              <motion.div
                className="space-y-4"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
                initial="hidden"
                animate="visible"
              >
                {items.map((item, index) => (
                  <motion.div
                    key={`${item.id}-${index}`}
                    className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-xl">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-2">
                          {item.name}
                        </h2>
                        <p className="text-white/80 text-lg mb-2">{item.description}</p>
                        <div className="flex items-center gap-4 text-white/70">
                          <span className="text-sm">{item.category}</span>
                          <span className="w-1 h-1 rounded-full bg-white/50" />
                          <span className="text-sm">{item.prepTime}</span>
                          {item.spiceLevel > 0 && (
                            <>
                              <span className="w-1 h-1 rounded-full bg-white/50" />
                              <span className="text-sm">{'🌶️'.repeat(item.spiceLevel)}</span>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="flex-shrink-0 text-right">
                        <div className="text-3xl font-bold text-white">₹{item.price}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Footer info */}
              <motion.div
                className="mt-8 text-center text-white/80 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <p>Total Items: {items.length}</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ShowToWaiter;
