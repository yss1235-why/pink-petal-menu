import { motion } from 'framer-motion';
import { MenuItem } from '@/data/menuData';
import MenuItemCard from './MenuItemCard';

interface MenuListProps {
  items: MenuItem[];
  onItemClick: (item: MenuItem) => void;
}

const MenuList = ({ items, onItemClick }: MenuListProps) => {
  return (
    <div className="px-4 pb-20">
      {items.length === 0 ? (
        <motion.div
          className="text-center py-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <p className="text-muted-foreground text-lg">No items found in this category</p>
        </motion.div>
      ) : (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
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
            <MenuItemCard
              key={item.id}
              item={item}
              index={index}
              onClick={() => onItemClick(item)}
            />
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default MenuList;
