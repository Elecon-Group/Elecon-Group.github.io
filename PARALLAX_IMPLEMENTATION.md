# Parallax Scrolling Implementation

This project now includes a comprehensive parallax scrolling system built with React Spring, providing smooth and performant parallax effects throughout the application.

## Features

### 🎯 Core Components

1. **ParallaxImage** - Enhanced image component with parallax effects
2. **ParallaxContainer** - Container component for content parallax
3. **SmoothScroll** - Smooth scrolling utility for the entire app
4. **useResponsiveParallax** - Hook for responsive behavior

### ✨ Key Features

- **Smooth Animations**: Powered by React Spring for buttery-smooth transitions
- **Responsive Design**: Automatically disables on mobile devices (< 768px)
- **Multiple Directions**: Support for up, down, left, right parallax movements
- **Customizable Speed**: Adjustable parallax speed for different effects
- **Scale & Opacity Effects**: Additional visual enhancements
- **Performance Optimized**: Uses Intersection Observer and passive event listeners
- **Accessibility**: Respects `prefers-reduced-motion` user preference

## Usage

### Basic ParallaxImage

```jsx
import { ParallaxImage } from './components/animations';

<ParallaxImage
  src="/path/to/image.jpg"
  alt="Description"
  speed={0.5}
  scale={1.05}
  direction="up"
  className="w-full h-64 rounded-lg"
/>
```

### Basic ParallaxContainer

```jsx
import { ParallaxContainer } from './components/animations';

<ParallaxContainer speed={0.3} direction="up" className="text-center">
  <h2>Your Content</h2>
  <p>This content will move with parallax effect</p>
</ParallaxContainer>
```

### Props Reference

#### ParallaxImage Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | string | - | Image source URL |
| `alt` | string | - | Image alt text |
| `speed` | number | 0.5 | Parallax movement speed |
| `scale` | number | 1.1 | Scale effect multiplier |
| `opacity` | number | 1 | Opacity value |
| `direction` | string | 'up' | Movement direction ('up', 'down', 'left', 'right') |
| `threshold` | number | 0.1 | Intersection observer threshold |
| `disabled` | boolean | false | Disable parallax effects |
| `className` | string | '' | Additional CSS classes |

#### ParallaxContainer Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | ReactNode | - | Content to animate |
| `speed` | number | 0.5 | Parallax movement speed |
| `direction` | string | 'up' | Movement direction |
| `threshold` | number | 0.1 | Intersection observer threshold |
| `disabled` | boolean | false | Disable parallax effects |
| `className` | string | '' | Additional CSS classes |
| `style` | object | {} | Additional inline styles |

## Implementation Examples

### WhatWeDo Component
- Factory image with subtle parallax (speed: 0.4, scale: 1.05)
- Content container with gentle upward movement (speed: 0.3)

### Products Component
- Header content with slow parallax (speed: 0.2)
- Product cards with staggered speeds (0.3 + index * 0.1)
- Product images with scale effects (scale: 1.02)

### IndustryApplication Component
- Industry image with moderate parallax (speed: 0.4, scale: 1.05)
- Content sections with progressive speeds
- Sector list items with micro-animations

### ComingSoon Component
- Multiple images with different directions and speeds
- Firefly logo: up direction, speed 0.5
- Drone image: down direction, speed 0.6
- Features diagram: down direction, speed 0.7

## Performance Optimizations

1. **Intersection Observer**: Only animates when elements are visible
2. **Passive Event Listeners**: Optimized scroll event handling
3. **Mobile Detection**: Disables effects on small screens
4. **Reduced Motion Support**: Respects user accessibility preferences
5. **Hardware Acceleration**: Uses `transform` and `will-change` properties

## CSS Enhancements

Added to `src/index.css`:
- Smooth scrolling behavior
- Performance optimizations for parallax elements
- Custom scrollbar styling
- Reduced motion media query support

## Responsive Behavior

- **Desktop/Tablet**: Full parallax effects enabled
- **Mobile (< 768px)**: Parallax effects automatically disabled
- **Reduced Motion**: Respects `prefers-reduced-motion` setting

## Browser Support

- Modern browsers with Intersection Observer support
- Graceful degradation for older browsers
- Mobile Safari and Chrome optimized

## Customization

### Adding New Parallax Effects

1. Import the components:
```jsx
import { ParallaxImage, ParallaxContainer } from './components/animations';
```

2. Wrap your content:
```jsx
<ParallaxContainer speed={0.4} direction="up">
  <ParallaxImage src="..." speed={0.6} scale={1.05} />
</ParallaxContainer>
```

### Adjusting Speeds

- **Subtle**: 0.1 - 0.3
- **Moderate**: 0.4 - 0.6
- **Strong**: 0.7 - 1.0

### Direction Options

- `up`: Content moves upward on scroll
- `down`: Content moves downward on scroll
- `left`: Content moves leftward on scroll
- `right`: Content moves rightward on scroll

## Testing

The implementation includes:
- Smooth scrolling throughout the app
- Responsive behavior testing
- Performance monitoring
- Accessibility compliance

Run the development server to see the effects in action:
```bash
npm run dev
```

## Future Enhancements

- 3D parallax effects
- Mouse-based parallax
- Scroll-triggered animations
- Advanced easing functions
- Parallax video support 