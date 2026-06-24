// Logo component with brand consistency - optimized for dark theme website
import ImageWithFallback from './ImageWithFallback';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'auto';
}

const Logo = ({ className, variant = 'light' }: LogoProps) => {
  // Since the website uses a dark theme, we default to the light version
  // This ensures optimal contrast and brand visibility
  const getLogoSrc = () => {
    switch (variant) {
      case 'light':
        return '/THE DIGITAL DUDE-02.png'; // Light version for dark backgrounds (default)
      case 'dark': 
        return '/THE DIGITAL DUDE-01.png'; // Dark version for light backgrounds (if needed)
      case 'auto':
      default:
        return '/THE DIGITAL DUDE-02.png'; // Default to light version for dark theme
    }
  };

  return (
    <ImageWithFallback
      src={getLogoSrc()}
      alt="The Digital Dude Logo"
      className={`object-contain ${className || 'h-12 w-auto'}`}
      loading="lazy"
    />
  );
};

export default Logo;