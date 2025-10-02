import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { MenuItem, menuItems } from '@/data/menuData';
import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import GreetingBanner from '@/components/GreetingBanner';
import CategoryScroller from '@/components/CategoryScroller';
import MenuList from '@/components/MenuList';
import DetailBottomSheet from '@/components/DetailBottomSheet';
import OrderPanel from '@/components/OrderPanel';
import ShowToWaiter from '@/components/ShowToWaiter';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isOrderPanelOpen, setIsOrderPanelOpen] = useState(false);
  const [isShowToWaiterOpen, setIsShowToWaiterOpen] = useState(false);
  const [orderItems, setOrderItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    // Simulate loading screen
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Load order from localStorage
    const savedOrder = localStorage.getItem('cafeOrder');
    if (savedOrder) {
      try {
        setOrderItems(JSON.parse(savedOrder));
      } catch (e) {
        console.error('Failed to load order from localStorage', e);
      }
    }
  }, []);

  useEffect(() => {
    // Save order to localStorage
    localStorage.setItem('cafeOrder', JSON.stringify(orderItems));
  }, [orderItems]);

  const filteredItems = selectedCategory
    ? menuItems.filter((item) => item.category === selectedCategory)
    : menuItems;

  const handleItemClick = (item: MenuItem) => {
    setSelectedItem(item);
    setIsDetailOpen(true);
  };

  const handleAddToOrder = (item: MenuItem) => {
    setOrderItems((prev) => [...prev, item]);
  };

  const handleRemoveFromOrder = (itemId: string) => {
    setOrderItems((prev) => {
      const index = prev.findIndex((item) => item.id === itemId);
      if (index === -1) return prev;
      return [...prev.slice(0, index), ...prev.slice(index + 1)];
    });
  };

  const handleShowToWaiter = () => {
    setIsOrderPanelOpen(false);
    setIsShowToWaiterOpen(true);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      {!isLoading && (
        <div className="min-h-screen bg-background">
          <Navbar
            orderCount={orderItems.length}
            onOrderClick={() => setIsOrderPanelOpen(true)}
          />

          <main>
            <GreetingBanner />

            <CategoryScroller
              selectedCategory={selectedCategory}
              onCategorySelect={setSelectedCategory}
            />

            <MenuList items={filteredItems} onItemClick={handleItemClick} />
          </main>

          <DetailBottomSheet
            item={selectedItem}
            isOpen={isDetailOpen}
            onClose={() => {
              setIsDetailOpen(false);
              setSelectedItem(null);
            }}
            onAddToOrder={handleAddToOrder}
          />

          <OrderPanel
            isOpen={isOrderPanelOpen}
            onClose={() => setIsOrderPanelOpen(false)}
            items={orderItems}
            onRemoveItem={handleRemoveFromOrder}
            onShowToWaiter={handleShowToWaiter}
          />

          <ShowToWaiter
            isOpen={isShowToWaiterOpen}
            onClose={() => setIsShowToWaiterOpen(false)}
            items={orderItems}
          />
        </div>
      )}
    </>
  );
};

export default Index;
