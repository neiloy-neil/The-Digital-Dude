import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  titleLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
}

// Standardized Section component with consistent spacing and proper heading hierarchy
const Section = ({ title, subtitle, children, titleLevel: TitleLevel = 'h2', className = '' }: SectionProps) => {
  return (
    <section className={`py-12 sm:py-16 lg:py-20 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          // ENHANCEMENT: Add subtle continuous animation
          animate={{ 
            y: [0, -3, 0],
            transition: { 
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }
          }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            // ENHANCEMENT: Add subtle entrance animation for title
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <TitleLevel className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-6 lg:mb-8">
              {title}
            </TitleLevel>
          </motion.div>
          <motion.div
            // ENHANCEMENT: Add subtle entrance animation for subtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg sm:text-xl lg:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          className="space-y-8 sm:space-y-12 lg:space-y-16"
          // ENHANCEMENT: Add subtle entrance animation for content
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default Section;