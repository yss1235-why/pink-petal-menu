export interface MenuItem {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  ingredients: string[];
  prepTime: string;
  spiceLevel: number;
  rating: number;
  image: string;
}

export const menuCategories = [
  'Hot Coffee',
  'Iced Coffee',
  'Specialty Drinks',
  'Pastries',
  'Breakfast',
  'Sandwiches'
];

export const menuItems: MenuItem[] = [
  // Hot Coffee
  {
    id: 'yc1',
    name: 'Coffee',
    category: 'Hot Coffee',
    price: 30,
    description: 'Classic black coffee brewed to perfection',
    ingredients: ['Coffee Beans', 'Hot Water'],
    prepTime: '2-3 mins',
    spiceLevel: 0,
    rating: 4.2,
    image: '/images/menu/coffee.webp'
  },
  {
    id: 'yc2',
    name: 'Espresso',
    category: 'Hot Coffee',
    price: 50,
    description: 'Strong and concentrated espresso shot for coffee lovers',
    ingredients: ['Espresso Beans', 'Hot Water'],
    prepTime: '2-3 mins',
    spiceLevel: 0,
    rating: 4.4,
    image: '/images/menu/espresso.webp'
  },
  {
    id: 'yc3',
    name: 'Latte',
    category: 'Hot Coffee',
    price: 90,
    description: 'Smooth espresso with steamed milk and light foam',
    ingredients: ['Espresso', 'Steamed Milk', 'Milk Foam'],
    prepTime: '3-4 mins',
    spiceLevel: 0,
    rating: 4.6,
    image: '/images/menu/latte.webp'
  },
  {
    id: 'yc4',
    name: 'Cappuccino',
    category: 'Hot Coffee',
    price: 95,
    description: 'Rich espresso with equal parts steamed milk and foam',
    ingredients: ['Espresso', 'Steamed Milk', 'Milk Foam'],
    prepTime: '3-4 mins',
    spiceLevel: 0,
    rating: 4.7,
    image: '/images/menu/cappuccino.webp'
  },
  {
    id: 'yc5',
    name: 'Americano',
    category: 'Hot Coffee',
    price: 65,
    description: 'Espresso diluted with hot water for a smooth finish',
    ingredients: ['Espresso', 'Hot Water'],
    prepTime: '2-3 mins',
    spiceLevel: 0,
    rating: 4.3,
    image: '/images/menu/americano.webp'
  },
  {
    id: 'yc6',
    name: 'Mocha',
    category: 'Hot Coffee',
    price: 110,
    description: 'Chocolate-infused latte with whipped cream',
    ingredients: ['Espresso', 'Steamed Milk', 'Chocolate Syrup', 'Whipped Cream'],
    prepTime: '4-5 mins',
    spiceLevel: 0,
    rating: 4.8,
    image: '/images/menu/mocha.webp'
  },
  // Iced Coffee
  {
    id: 'yc7',
    name: 'Iced Latte',
    category: 'Iced Coffee',
    price: 100,
    description: 'Chilled espresso with cold milk over ice',
    ingredients: ['Espresso', 'Cold Milk', 'Ice'],
    prepTime: '3-4 mins',
    spiceLevel: 0,
    rating: 4.6,
    image: '/images/menu/iced-latte.webp'
  },
  {
    id: 'yc8',
    name: 'Iced Americano',
    category: 'Iced Coffee',
    price: 75,
    description: 'Refreshing espresso over ice with cold water',
    ingredients: ['Espresso', 'Cold Water', 'Ice'],
    prepTime: '2-3 mins',
    spiceLevel: 0,
    rating: 4.4,
    image: '/images/menu/iced-americano.webp'
  },
  {
    id: 'yc9',
    name: 'Cold Brew',
    category: 'Iced Coffee',
    price: 95,
    description: 'Smooth cold-steeped coffee, less acidic and naturally sweet',
    ingredients: ['Cold Brew Concentrate', 'Cold Water', 'Ice'],
    prepTime: '1-2 mins',
    spiceLevel: 0,
    rating: 4.7,
    image: '/images/menu/cold-brew.webp'
  },
  {
    id: 'yc10',
    name: 'Iced Mocha',
    category: 'Iced Coffee',
    price: 120,
    description: 'Chocolate and espresso over ice with whipped cream',
    ingredients: ['Espresso', 'Cold Milk', 'Chocolate Syrup', 'Ice', 'Whipped Cream'],
    prepTime: '4-5 mins',
    spiceLevel: 0,
    rating: 4.8,
    image: '/images/menu/iced-mocha.webp'
  },
  {
    id: 'yc11',
    name: 'Iced Caramel Macchiato',
    category: 'Iced Coffee',
    price: 125,
    description: 'Vanilla-flavored milk with espresso and caramel drizzle',
    ingredients: ['Espresso', 'Vanilla Syrup', 'Cold Milk', 'Caramel', 'Ice'],
    prepTime: '4-5 mins',
    spiceLevel: 0,
    rating: 4.9,
    image: '/images/menu/iced-caramel-macchiato.webp'
  },
  // Specialty Drinks
  {
    id: 'yc12',
    name: 'Matcha Latte',
    category: 'Specialty Drinks',
    price: 130,
    description: 'Premium matcha green tea with steamed milk',
    ingredients: ['Matcha Powder', 'Steamed Milk', 'Honey'],
    prepTime: '3-4 mins',
    spiceLevel: 0,
    rating: 4.5,
    image: '/images/menu/matcha-latte.webp'
  },
  {
    id: 'yc13',
    name: 'Chai Latte',
    category: 'Specialty Drinks',
    price: 105,
    description: 'Spiced tea blend with steamed milk',
    ingredients: ['Chai Tea', 'Steamed Milk', 'Cinnamon'],
    prepTime: '3-4 mins',
    spiceLevel: 2,
    rating: 4.6,
    image: '/images/menu/chai-latte.webp'
  },
  {
    id: 'yc14',
    name: 'Hot Chocolate',
    category: 'Specialty Drinks',
    price: 95,
    description: 'Rich chocolate drink topped with marshmallows',
    ingredients: ['Chocolate', 'Steamed Milk', 'Marshmallows'],
    prepTime: '3-4 mins',
    spiceLevel: 0,
    rating: 4.7,
    image: '/images/menu/hot-chocolate.webp'
  },
  {
    id: 'yc15',
    name: 'Golden Milk',
    category: 'Specialty Drinks',
    price: 115,
    description: 'Turmeric-infused milk with warming spices',
    ingredients: ['Turmeric', 'Steamed Milk', 'Honey', 'Cinnamon', 'Ginger'],
    prepTime: '4-5 mins',
    spiceLevel: 1,
    rating: 4.4,
    image: '/images/menu/golden-milk.webp'
  },
  {
    id: 'yc16',
    name: 'Affogato',
    category: 'Specialty Drinks',
    price: 140,
    description: 'Vanilla gelato drowned in hot espresso',
    ingredients: ['Vanilla Gelato', 'Espresso'],
    prepTime: '2-3 mins',
    spiceLevel: 0,
    rating: 4.9,
    image: '/images/menu/affogato.webp'
  },
  // Pastries
  {
    id: 'yc17',
    name: 'Croissant',
    category: 'Pastries',
    price: 80,
    description: 'Buttery, flaky French pastry',
    ingredients: ['Flour', 'Butter', 'Yeast', 'Milk'],
    prepTime: '1-2 mins',
    spiceLevel: 0,
    rating: 4.6,
    image: '/images/menu/croissant.webp'
  },
  {
    id: 'yc18',
    name: 'Chocolate Muffin',
    category: 'Pastries',
    price: 70,
    description: 'Moist chocolate muffin with chocolate chips',
    ingredients: ['Flour', 'Chocolate', 'Eggs', 'Butter'],
    prepTime: '1-2 mins',
    spiceLevel: 0,
    rating: 4.5,
    image: '/images/menu/chocolate-muffin.webp'
  },
  {
    id: 'yc19',
    name: 'Blueberry Scone',
    category: 'Pastries',
    price: 75,
    description: 'Fresh baked scone studded with blueberries',
    ingredients: ['Flour', 'Blueberries', 'Butter', 'Cream'],
    prepTime: '1-2 mins',
    spiceLevel: 0,
    rating: 4.4,
    image: '/images/menu/blueberry-scone.webp'
  },
  {
    id: 'yc20',
    name: 'Cinnamon Roll',
    category: 'Pastries',
    price: 90,
    description: 'Soft roll with cinnamon swirl and cream cheese frosting',
    ingredients: ['Flour', 'Cinnamon', 'Butter', 'Cream Cheese'],
    prepTime: '1-2 mins',
    spiceLevel: 1,
    rating: 4.8,
    image: '/images/menu/cinnamon-roll.webp'
  },
  {
    id: 'yc21',
    name: 'Almond Biscotti',
    category: 'Pastries',
    price: 65,
    description: 'Twice-baked Italian cookie with almonds',
    ingredients: ['Flour', 'Almonds', 'Eggs', 'Sugar'],
    prepTime: '1 min',
    spiceLevel: 0,
    rating: 4.3,
    image: '/images/menu/biscotti.webp'
  },
  // Breakfast
  {
    id: 'yc22',
    name: 'Avocado Toast',
    category: 'Breakfast',
    price: 150,
    description: 'Smashed avocado on sourdough with cherry tomatoes',
    ingredients: ['Avocado', 'Sourdough Bread', 'Cherry Tomatoes', 'Olive Oil'],
    prepTime: '5-6 mins',
    spiceLevel: 0,
    rating: 4.7,
    image: '/images/menu/avocado-toast.webp'
  },
  {
    id: 'yc23',
    name: 'Eggs Benedict',
    category: 'Breakfast',
    price: 180,
    description: 'Poached eggs and ham on English muffin with hollandaise',
    ingredients: ['Eggs', 'Ham', 'English Muffin', 'Hollandaise Sauce'],
    prepTime: '8-10 mins',
    spiceLevel: 0,
    rating: 4.8,
    image: '/images/menu/eggs-benedict.webp'
  },
  {
    id: 'yc24',
    name: 'Pancake Stack',
    category: 'Breakfast',
    price: 140,
    description: 'Fluffy pancakes with maple syrup and butter',
    ingredients: ['Flour', 'Eggs', 'Milk', 'Maple Syrup', 'Butter'],
    prepTime: '6-8 mins',
    spiceLevel: 0,
    rating: 4.6,
    image: '/images/menu/pancakes.webp'
  },
  {
    id: 'yc25',
    name: 'Greek Yogurt Bowl',
    category: 'Breakfast',
    price: 130,
    description: 'Greek yogurt with granola, berries, and honey',
    ingredients: ['Greek Yogurt', 'Granola', 'Mixed Berries', 'Honey'],
    prepTime: '3-4 mins',
    spiceLevel: 0,
    rating: 4.5,
    image: '/images/menu/yogurt-bowl.webp'
  },
  {
    id: 'yc26',
    name: 'Breakfast Burrito',
    category: 'Breakfast',
    price: 160,
    description: 'Scrambled eggs, cheese, and salsa in flour tortilla',
    ingredients: ['Eggs', 'Cheese', 'Tortilla', 'Salsa', 'Bell Peppers'],
    prepTime: '7-8 mins',
    spiceLevel: 2,
    rating: 4.7,
    image: '/images/menu/breakfast-burrito.webp'
  },
  // Sandwiches
  {
    id: 'yc27',
    name: 'Club Sandwich',
    category: 'Sandwiches',
    price: 170,
    description: 'Triple-decker with turkey, bacon, lettuce, and tomato',
    ingredients: ['Turkey', 'Bacon', 'Lettuce', 'Tomato', 'Bread', 'Mayo'],
    prepTime: '6-7 mins',
    spiceLevel: 0,
    rating: 4.6,
    image: '/images/menu/club-sandwich.webp'
  },
  {
    id: 'yc28',
    name: 'Grilled Cheese',
    category: 'Sandwiches',
    price: 120,
    description: 'Classic grilled cheese with aged cheddar',
    ingredients: ['Bread', 'Cheddar Cheese', 'Butter'],
    prepTime: '5-6 mins',
    spiceLevel: 0,
    rating: 4.4,
    image: '/images/menu/grilled-cheese.webp'
  },
  {
    id: 'yc29',
    name: 'Caprese Panini',
    category: 'Sandwiches',
    price: 155,
    description: 'Fresh mozzarella, tomato, and basil on ciabatta',
    ingredients: ['Mozzarella', 'Tomato', 'Basil', 'Ciabatta', 'Balsamic'],
    prepTime: '6-7 mins',
    spiceLevel: 0,
    rating: 4.7,
    image: '/images/menu/caprese-panini.webp'
  },
  {
    id: 'yc30',
    name: 'BLT',
    category: 'Sandwiches',
    price: 145,
    description: 'Crispy bacon, lettuce, and tomato on toasted bread',
    ingredients: ['Bacon', 'Lettuce', 'Tomato', 'Bread', 'Mayo'],
    prepTime: '5-6 mins',
    spiceLevel: 0,
    rating: 4.5,
    image: '/images/menu/blt.webp'
  }
];
