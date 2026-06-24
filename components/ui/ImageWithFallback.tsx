import React, { useState } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

const ImageWithFallback = ({ 
  src, 
  alt, 
  fallbackSrc,
  className = '',
  loading,
  ...props 
}: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      
      // If a specific fallback image is provided, use it
      if (fallbackSrc) {
        setImgSrc(fallbackSrc);
        return;
      }
      
      // Simple fallback - show a colored div with text
      setImgSrc('');
    }
  };

  // Handle the case where src is not provided
  if (!src) {
    return (
      <div className={`bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center ${className}`}>
        <span className="text-text-secondary text-sm text-center px-2">
          {alt || 'Image not available'}
        </span>
      </div>
    );
  }

  // If we have an error and no fallback, render a colored div with text
  if (hasError && !imgSrc) {
    return (
      <div className={`bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center ${className}`}>
        <span className="text-text-secondary text-sm text-center px-2">
          {alt || 'Image not available'}
        </span>
      </div>
    );
  }

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
      loading={loading}
      {...props}
    />
  );
};

export default ImageWithFallback;