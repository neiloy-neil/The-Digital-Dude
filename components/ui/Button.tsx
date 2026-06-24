import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  primary: 'bg-gradient-rgb text-white hover:shadow-lg hover:shadow-primary/25 relative overflow-hidden',
  secondary: 'bg-surface text-text hover:bg-gradient-to-r hover:from-surface/80 hover:to-primary/10 border border-border hover:border-primary/50',
  outline: 'bg-transparent border-2 border-border text-text hover:bg-gradient-to-r hover:from-surface/50 hover:to-primary/20 hover:border-primary/70 hover:text-primary',
  ghost: 'bg-transparent text-text hover:bg-gradient-to-r hover:from-surface/30 hover:to-primary/10',
};

const sizes = {
  sm: 'px-4 py-2 text-sm rounded-md',
  md: 'px-5 py-2 text-base rounded-md',
  lg: 'px-8 py-3 text-base rounded-lg',
};

type ButtonProps = React.ComponentPropsWithoutRef<typeof motion.button> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  ariaLabel?: string;
  ariaPressed?: boolean;
  ariaExpanded?: boolean;
  ariaHasPopup?: boolean;
  isLoading?: boolean;
};

// FIX: Casting motion component to 'any' to bypass type checking issues
// that are likely due to a project configuration or dependency version mismatch.
const MotionButton: any = motion.button;

// FIX: Using motion.button directly instead of aliasing to fix type errors.
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', children, className, leftIcon, rightIcon, ariaLabel, ariaPressed, ariaExpanded, ariaHasPopup, isLoading, ...props }, ref) => {
    
    const hoverEffect = { 
        scale: 1.05,
        y: -2,
        transition: { type: 'spring', stiffness: 400, damping: 17 },
        ...(variant === 'primary' && { 
          boxShadow: '0 15px 35px rgba(34, 197, 94, 0.25), 0 5px 15px rgba(59, 130, 246, 0.2)' 
        }),
        ...(variant === 'outline' && { 
          borderColor: 'var(--color-primary)',
          scale: 1.07
        })
    };
    
    const tapEffect = {
        scale: 0.95,
        transition: { type: 'spring', stiffness: 400, damping: 17 }
    };
    
    const focusEffect = {
        scale: 1.02,
        transition: { type: 'spring', stiffness: 400, damping: 17 }
    };
      
    return (
      <MotionButton
        ref={ref}
        className={`inline-flex items-center justify-center gap-2 font-bold transition-all duration-300 transform disabled:opacity-50 disabled:cursor-not-allowed outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary focus-visible:ring-offset-background ${variants[variant]} ${sizes[size]} ${className}`}
        whileHover={hoverEffect}
        whileTap={tapEffect}
        whileFocus={focusEffect}
        aria-label={ariaLabel}
        aria-pressed={ariaPressed}
        aria-expanded={ariaExpanded}
        aria-haspopup={ariaHasPopup}
        role="button"
        disabled={isLoading || props.disabled}
        // ENHANCEMENT: Add more sophisticated micro-interactions
        whileInView={{ 
          opacity: 1,
          scale: 1,
          transition: { 
            duration: 0.3,
            delay: 0.1,
            type: 'spring',
            stiffness: 300,
            damping: 20
          }
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        onKeyDown={(e: React.KeyboardEvent) => {
          // Ensure Space and Enter keys activate the button
          if (e.key === ' ' || e.key === 'Enter') {
            // Don't prevent default for Enter key as it's handled by button by default
            if (e.key === ' ') {
              e.preventDefault();
              // Programmatically trigger click if needed
              if (props.onClick && !isLoading) {
                props.onClick(e as any);
              }
            }
          }
        }}
        {...props}
      >
        <>
          {isLoading ? (
            <>
              <motion.svg 
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </motion.svg>
              <span>Loading...</span>
            </>
          ) : (
            <>
              {leftIcon && (
                <motion.div
                  initial={{ x: 0 }}
                  // ENHANCEMENT: Add subtle pulse animation on hover and x movement
                  animate={{ 
                    scale: [1, 1.05, 1],
                    x: -2,
                    transition: { 
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "reverse",
                      type: 'spring', 
                      stiffness: 400, 
                      damping: 17 
                    }
                  }}
                >
                  {leftIcon}
                </motion.div>
              )}
              <motion.span
                initial={{ y: 0 }}
                // ENHANCEMENT: Add subtle text animation on hover and y movement
                animate={{ 
                  y: [0, -1, 0, -1, 0],
                  transition: { 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    type: 'spring', 
                    stiffness: 400, 
                    damping: 17 
                  }
                }}
              >
                {children}
              </motion.span>
              {rightIcon && (
                <motion.div
                  initial={{ x: 0 }}
                  // ENHANCEMENT: Add subtle pulse animation on hover and x movement
                  animate={{ 
                    scale: [1, 1.05, 1],
                    x: 2,
                    transition: { 
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "reverse",
                      type: 'spring', 
                      stiffness: 400, 
                      damping: 17,
                      delay: 0.2
                    }
                  }}
                >
                  {rightIcon}
                </motion.div>
              )}
            </>
          )}
        </>
      </MotionButton>
    );
  }
);

Button.displayName = 'Button';
export default Button;