import React from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

const AuroraBackground: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ clientX, clientY, currentTarget }: React.MouseEvent<HTMLDivElement>) => {
    // Only update mouse position on larger screens to improve mobile performance
    if (window.innerWidth < 768) return;
    
    if (!currentTarget) return;
    const { left, top } = currentTarget.getBoundingClientRect();
    animate(mouseX, clientX - left);
    animate(mouseY, clientY - top);
  };

  return (
    <div
      className="absolute inset-0 -z-10 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 bg-background" />
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-lg opacity-20 dark:opacity-50"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `
              radial-gradient(
                600px circle at ${x}px ${y}px,
                rgba(95, 56, 238, 0.4),
                transparent 80%
              )
            `
          ),
        }}
      />
    </div>
  );
};

export default AuroraBackground;