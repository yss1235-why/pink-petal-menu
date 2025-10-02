import { motion } from 'framer-motion';
import { menuCategories } from '@/data/menuData';
import { useRef } from 'react';

interface CategoryScrollerProps {
  selectedCategory: string | null;
  onCategorySelect: (category: string | null) => void;
}

const CategoryScroller = ({ selectedCategory, onCategorySelect }: CategoryScrollerProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleCategoryClick = (category: string) => {
    if (selectedCategory === category) {
      onCategorySelect(null);
    } else {
      onCategorySelect(category);
    }
  };

  return (
    <div className="px-4 py-4">
      <motion.div
        ref={scrollContainerRef}
        className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        <motion.button
          onClick={() => onCategorySelect(null)}
          className={`touch-target px-6 py-3 rounded-2xl font-medium text-sm whitespace-nowrap transition-all snap-center flex-shrink-0 ${
            selectedCategory === null
              ? 'gradient-primary text-white shadow-elegant'
              : 'glass text-foreground hover:bg-secondary/70'
          }`}
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0 },
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95, rotateZ: -2 }}
          aria-label="Show all categories"
          aria-pressed={selectedCategory === null}
        >
          All
        </motion.button>

        {menuCategories.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <motion.button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`touch-target px-6 py-3 rounded-2xl font-medium text-sm whitespace-nowrap transition-all snap-center flex-shrink-0 relative overflow-hidden ${
                isActive
                  ? 'text-white shadow-elegant'
                  : 'glass text-foreground hover:bg-secondary/70'
              }`}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ 
                scale: 0.95,
                rotateZ: isActive ? 2 : -2,
              }}
              aria-label={`Filter by ${category}`}
              aria-pressed={isActive}
            >
              {isActive && (
                <motion.div
                  className="absolute inset-0 gradient-primary"
                  layoutId="activeCategory"
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 30,
                  }}
                />
              )}
              <span className="relative z-10">{category}</span>
              
              {isActive && (
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    border: '2px solid transparent',
                    background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, rgba(255,255,255,0.5), rgba(255,255,255,0.1)) border-box',
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          );
        })}
      </motion.div>
    </div>
  );
};

export default CategoryScroller;
