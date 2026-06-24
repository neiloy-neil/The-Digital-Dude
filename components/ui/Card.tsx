import React from 'react';
import { motion, MotionProps } from 'framer-motion';
import ImageWithFallback from './ImageWithFallback';

type CardProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
  ariaExpanded?: boolean;
  role?: string;
} & MotionProps;

const Card = ({ 
  children, 
  className = '', 
  onClick,
  ariaLabel,
  ariaExpanded,
  role = 'region',
  whileHover,
  ...props
}: CardProps) => {
  
  // Handle keyboard events for cards that act as buttons
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (onClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onClick();
    }
  };
  
  const hoverEffect = onClick ? { 
    y: -4, 
    scale: 1.01,
    transition: { type: 'spring', stiffness: 400, damping: 25 }
  } : (whileHover || { 
    scale: 1.02,
    transition: { type: 'spring', stiffness: 400, damping: 25 }
  });
  
  const tapEffect = onClick ? {
    scale: 0.98,
    transition: { type: 'spring', stiffness: 400, damping: 17 }
  } : {};
  
  return (
    <motion.div
      layout
      className={`bg-surface/40 backdrop-blur-lg rounded-xl overflow-hidden h-full flex flex-col border border-border/30 group transition-all duration-300 hover:border-primary/40 hover:bg-gradient-to-br hover:from-surface/70 hover:via-primary/5 hover:to-accent/5 hover:shadow-lg hover:shadow-primary/10 outline-none focus-visible:ring-2 focus-visible:ring-primary relative ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
      whileHover={hoverEffect}
      whileTap={tapEffect}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      tabIndex={onClick ? 0 : -1}
      onKeyDown={handleKeyDown}
      onKeyPress={(e: React.KeyboardEvent<HTMLDivElement>) => {
        if ((e.key === 'Enter' || e.key === ' ') && onClick) {
          onClick();
        }
      }}
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded}
      role={onClick ? 'button' : role}
      // ENHANCEMENT: Add more sophisticated micro-interactions
      whileInView={{ 
        opacity: 1,
        y: 0,
        transition: { 
          duration: 0.4,
          delay: 0.1,
          type: 'spring',
          stiffness: 300,
          damping: 20
        }
      }}
      initial={{ opacity: 0, y: 20 }}
      // ENHANCEMENT: Add subtle continuous animation
      animate={{ 
        y: [0, -2, 0],
        transition: { 
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

const CardImage = ({ src, alt, className }: { src: string; alt: string; className?: string }) => (
  <div className={`overflow-hidden ${className || ''}`}>
    <motion.div
      // ENHANCEMENT: Add subtle continuous animation to images
      animate={{ 
        scale: [1, 1.02, 1],
      }}
      transition={{ 
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    >
      <ImageWithFallback 
        src={src} 
        alt={alt} 
        loading="lazy" 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
      />
    </motion.div>
  </div>
);

const CardHeader = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <motion.div 
    className={`p-6 ${className || ''}`}
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3 }}
    // ENHANCEMENT: Add subtle animation on hover
    whileHover={{ 
      y: -2,
      transition: { 
        duration: 0.2,
        type: 'spring',
        stiffness: 300,
        damping: 20
      }
    }}
  >
    {children}
  </motion.div>
);

const CardContent = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <motion.div 
    className={`p-6 pt-0 flex-grow ${className || ''}`}
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3, delay: 0.1 }}
    // ENHANCEMENT: Add subtle animation on hover
    whileHover={{ 
      y: -1,
      transition: { 
        duration: 0.2,
        type: 'spring',
        stiffness: 300,
        damping: 20
      }
    }}
  >
    {children}
  </motion.div>
);

const CardFooter = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <motion.div 
    className={`p-6 pt-4 border-t border-border mt-auto ${className || ''}`}
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3, delay: 0.2 }}
    // ENHANCEMENT: Add subtle animation on hover
    whileHover={{ 
      y: -1,
      transition: { 
        duration: 0.2,
        type: 'spring',
        stiffness: 300,
        damping: 20
      }
    }}
  >
    {children}
  </motion.div>
);

// Properly attach the sub-components as static properties
Card.Image = CardImage;
Card.Header = CardHeader;
Card.Content = CardContent;
Card.Footer = CardFooter;

export default Card;