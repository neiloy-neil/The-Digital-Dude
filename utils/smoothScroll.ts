/**
 * Smooth scroll to element with offset for fixed headers
 * @param elementId - The ID of the element to scroll to
 * @param offset - Offset in pixels (default: 80px for header height)
 */
export const smoothScrollTo = (elementId: string, offset: number = 80): void => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.offsetTop - offset;
    
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
    
    // Set focus on the element for accessibility
    element.tabIndex = -1;
    element.focus();
  }
};

/**
 * Smooth scroll to top of page
 */
export const smoothScrollToTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

/**
 * Check if smooth scrolling is supported by the browser
 */
export const isSmoothScrollingSupported = (): boolean => {
  return 'scrollBehavior' in document.documentElement.style;
};

/**
 * Fallback smooth scroll implementation for browsers that don't support scroll-behavior
 * @param targetY - Target Y position to scroll to
 * @param duration - Duration of scroll animation in milliseconds
 */
export const fallbackSmoothScroll = (targetY: number, duration: number = 500): void => {
  const startingY = window.pageYOffset;
  const diff = targetY - startingY;
  let start: number | null = null;

  const step = (timestamp: number) => {
    if (!start) start = timestamp;
    const time = timestamp - start;
    const percent = Math.min(time / duration, 1);

    // Ease-out function
    const easeOutCubic = 1 - Math.pow(1 - percent, 3);
    
    window.scrollTo(0, startingY + diff * easeOutCubic);

    if (time < duration) {
      window.requestAnimationFrame(step);
    }
  };

  window.requestAnimationFrame(step);
};

/**
 * Smooth scroll with fallback for older browsers
 * @param elementId - The ID of the element to scroll to
 * @param offset - Offset in pixels (default: 80px for header height)
 */
export const smoothScrollWithFallback = (elementId: string, offset: number = 80): void => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.offsetTop - offset;
    
    if (isSmoothScrollingSupported()) {
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    } else {
      fallbackSmoothScroll(elementPosition);
    }
    
    // Set focus on the element for accessibility
    element.tabIndex = -1;
    element.focus();
  }
};

export default {
  smoothScrollTo,
  smoothScrollToTop,
  isSmoothScrollingSupported,
  fallbackSmoothScroll,
  smoothScrollWithFallback
};