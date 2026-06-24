import React from 'react';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
  style?: React.CSSProperties;
}

const Skeleton = ({ 
  className = '', 
  variant = 'text', 
  width, 
  height,
  style 
}: SkeletonProps) => {
  const baseClasses = 'bg-surface/50 animate-pulse rounded';
  
  const variantClasses = {
    text: 'h-4 rounded',
    circular: 'rounded-full',
    rectangular: 'rounded',
  };
  
  const variantStyles = {
    text: { 
      height: '1rem',
      width: '100%',
      maxWidth: '100%',
    },
    circular: { 
      width: width || '2.5rem',
      height: height || '2.5rem',
    },
    rectangular: { 
      width: width || '100%',
      height: height || '100%',
    },
  };
  
  const combinedStyles = {
    ...variantStyles[variant],
    ...style,
    width: width || variantStyles[variant].width,
    height: height || variantStyles[variant].height,
  };

  return (
    <div 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={combinedStyles}
      role="status"
      aria-label="Loading content"
    />
  );
};

export default Skeleton;