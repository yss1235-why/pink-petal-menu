# Yours Café - Premium Restaurant Menu Web App

A mobile-first, animation-heavy restaurant menu application built with React, Vite, Framer Motion, and Tailwind CSS.

## Features

- **Premium Design**: Pink gradient theme with glassmorphism effects
- **Heavy Animations**: Powered by Framer Motion with spring physics
- **Random Greeting**: 62 unique elegant greetings with typing animation
- **Category Navigation**: Swipeable category tray with 3D tilt effects
- **Menu Items**: Staggered animations with touch zoom and glass blur overlays
- **Detail View**: Bottom sheet modal with spring physics and parallax header
- **Order Management**: Add items with flying thumbnail animation
- **Show to Waiter**: Fullscreen view optimized for presenting to staff
- **Accessibility**: Respects `prefers-reduced-motion`, keyboard navigation, and ARIA labels
- **Performance**: Optimized animations using transforms and opacity only
- **PWA Ready**: Can be installed as a progressive web app

## Design System

### Color Palette
- Primary: Rose/Pink gradient (HSL 330-340)
- Glass effects with backdrop blur
- Soft pink-tinted shadows
- Semantic color tokens in `src/index.css`

### Typography
- **Script**: Dancing Script (greetings)
- **Serif**: Playfair Display (headers)
- **Sans**: Inter (UI elements)

### Animation Tokens
- `--transition-smooth`: All smooth transitions
- `--spring`: Spring curve for physics-based animations
- `--shadow-elegant`, `--shadow-glow`: Premium shadow effects

## Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory
cd yours-cafe

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:8080`

### Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── LoadingScreen.tsx       # Animated loading with logo reveal
│   ├── Navbar.tsx              # Sticky nav with order badge
│   ├── GreetingBanner.tsx      # Random greeting with typing effect
│   ├── CategoryScroller.tsx    # Horizontal swipeable categories
│   ├── MenuItemCard.tsx        # Individual menu item with animations
│   ├── MenuList.tsx            # Grid of menu items
│   ├── DetailBottomSheet.tsx   # Modal detail view
│   ├── OrderPanel.tsx          # Side panel for order management
│   └── ShowToWaiter.tsx        # Fullscreen waiter view
├── data/
│   ├── greetings.ts            # 62 elegant greeting strings
│   └── menuData.ts             # All menu items
├── pages/
│   └── Index.tsx               # Main app orchestration
└── index.css                   # Design system tokens
```

## Customization

### Adding Menu Items

Edit `src/data/menuData.ts`:

```typescript
{
  id: 'unique-id',
  name: 'Item Name',
  category: 'Category',
  price: 100,
  description: 'Item description',
  ingredients: ['Ingredient 1', 'Ingredient 2'],
  prepTime: '5-6 mins',
  spiceLevel: 0, // 0-3
  rating: 4.5,
  image: '/images/menu/item.webp'
}
```

### Customizing Colors

Edit `src/index.css` design tokens:

```css
:root {
  --primary: 330 81% 60%;        /* Main brand color */
  --accent: 340 85% 65%;         /* Accent highlights */
  --gradient-primary: ...;       /* Primary gradient */
}
```

### Tuning Animations

Adjust in `tailwind.config.ts`:

```typescript
animation: {
  'fade-in': 'fadeIn 0.5s ease-out',  // Adjust duration
  'slide-up': 'slideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
}
```

Or disable animations for reduced motion in `src/index.css`.

## Performance Tips

1. **Image Optimization**: All images are WebP format. Keep them under 200KB.
2. **Lazy Loading**: Images use native `loading="lazy"` attribute.
3. **Transform/Opacity**: Animations only use CSS transforms and opacity for 60fps.
4. **Code Splitting**: Components are automatically code-split by Vite.

## Accessibility

- ✅ 44px minimum touch targets
- ✅ Keyboard navigation for all interactive elements
- ✅ ARIA labels on buttons and controls
- ✅ `prefers-reduced-motion` support
- ✅ Semantic HTML structure
- ✅ High contrast ratios

## Technologies

- **React 18** - UI framework
- **Vite** - Build tool
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animation orchestration
- **Lottie React** - Complex micro-animations
- **Lucide React** - Icon library
- **shadcn/ui** - Component primitives

## Browser Support

- Chrome/Edge 90+
- Safari 14+
- Firefox 88+
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT

## Credits

Built with ❤️ using Lovable
