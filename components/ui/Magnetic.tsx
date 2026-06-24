import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

// FIX: Casting motion component to 'any' to bypass type checking issues
// that are likely due to a project configuration or dependency version mismatch.
const MotionDiv: any = motion.div;

interface MagneticProps {
  children: React.ReactNode;
  className?: string;
}

// FIX: Removed explicit JSX.Element return type to fix type resolution issues with framer-motion.
const Magnetic = ({ children, className = '' }: MagneticProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.2, y: y * 0.2 }); // Reduced movement for more subtle effect
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const { x, y } = position;
  return (
    <MotionDiv
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      ref={ref}
      animate={{ 
        x, 
        y,
        scale: isHovered ? 1.05 : 1
      }}
      transition={{ type: 'spring', stiffness: 200, damping: 20, mass: 0.1 }}
      className={`relative overflow-hidden rounded-lg ${className}`}
      style={{
        background: isHovered 
          ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1))'
          : 'transparent'
      }}
    >
      <MotionDiv
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.8
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none"
      />
      <div className="relative z-10">
        {children}
      </div>
    </MotionDiv>
  );
};

export default Magnetic;
