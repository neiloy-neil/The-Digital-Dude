import { lazy, Suspense, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import Button from '../ui/Button';
import Magnetic from '../ui/Magnetic';
import { useTypewriter } from '../../hooks/useTypewriter';

// Lazy load the AuroraBackground for better performance
const AuroraBackground = lazy(() => import('../ui/AuroraBackground'));

// Enhanced Hero with better animations and visual appeal
const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  
  // Typewriter effect for services
  const typewriterText = useTypewriter({
    words: [
      'Custom Software Development',
      'AI & Machine Learning Solutions',
      'Web & Mobile Applications',
      'E-commerce Platforms',
      'Cloud Infrastructure',
      'Business Automation',
      'Data Analytics Solutions',
      'API Development & Integration'
    ],
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.15, 
        delayChildren: 0.2,
        duration: 0.8
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.1, 0.25, 1] // Custom easing
      } 
    },
  };

  const titleVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 1, 
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.3
      } 
    },
  };

  // Loading fallback for AuroraBackground
  const AuroraFallback = () => (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
    </div>
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-background via-background/95 to-surface/10">
      {/* Aurora Background Effect */}
      <Suspense fallback={<AuroraFallback />}>
        <AuroraBackground />
      </Suspense>
      
      {/* Enhanced Floating Elements - Reduced animation complexity on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main floating orbs */}
        {!isMobile && (
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-xl"
            animate={{ 
              y: [-20, 20, -20], 
              x: [-10, 10, -10],
              rotate: [0, 180, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
        {!isMobile && (
          <motion.div
            className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-r from-accent/15 to-primary/15 rounded-full blur-xl"
            animate={{ 
              y: [20, -20, 20], 
              x: [10, -10, 10],
              rotate: [360, 180, 0],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
        
        {/* Sparkle particles - Reduced number on mobile */}
        {[...Array(isMobile ? 4 : 8)].map((_, i) => (
          !isMobile ? (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/40 rounded-full"
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + (i % 4) * 20}%`
              }}
              animate={{
                y: [-5, 5, -5],
                opacity: [0.2, 1, 0.2],
                scale: [0.5, 1.5, 0.5]
              }}
              transition={{
                duration: 2 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2
              }}
            />
          ) : (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/20 rounded-full"
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + (i % 4) * 20}%`
              }}
            />
          )
        ))}
      </div>

      {/* Fixed height container for mobile to prevent layout shifts */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        <div className="flex items-center justify-center min-h-[70vh] md:min-h-[80vh]">
          <motion.div
            className="w-full text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Enhanced Hero Title */}
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary leading-tight mb-8"
              variants={titleVariants}
            >
              Transform Your Business with
              <br className="hidden sm:block" />
              <span className="gradient-rgb heading-gradient inline-flex items-center gap-3 flex-wrap justify-center">
                <Sparkles className="w-8 h-8 md:w-12 md:h-12 text-primary/70 animate-pulse" />
                {/* Fixed container for typewriter text to prevent layout shifts on mobile */}
                <span className="flex items-center justify-center min-h-[2em] md:min-h-[1.5em]">
                  <span className="gradient-rgb text-center block min-w-[280px] md:min-w-[350px] lg:min-w-[450px] min-h-[1.2em] flex items-center justify-center typewriter-container">
                    {typewriterText}
                  </span>
                  <span className="animate-pulse text-accent">|</span>
                </span>
                <Sparkles className="w-8 h-8 md:w-12 md:h-12 text-accent/70 animate-pulse" />
              </span>
            </motion.h1>
            
            {/* Enhanced Subtitle */}
            <motion.p
              className="text-base md:text-lg lg:text-xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed"
              variants={itemVariants}
            >
              We design, build, and deploy intelligent software ecosystems that streamline operations, 
              <br className="hidden md:block" />
              <span className="text-primary font-semibold gradient-rgb">boost efficiency by 40-60%</span>, and unlock new revenue streams for ambitious businesses.
            </motion.p>

            {/* Enhanced Value Propositions */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-4 mb-16 max-w-4xl mx-auto"
              variants={itemVariants}
            >
              {[
                { icon: CheckCircle, text: "Custom Software Development", color: "text-primary" },
                { icon: CheckCircle, text: "AI & Machine Learning", color: "text-accent" },
                { icon: CheckCircle, text: "End-to-End Support", color: "text-primary" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 bg-surface/40 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50 hover-glow-rgb card-gradient-hover"
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: "rgba(30, 41, 59, 0.6)",
                    borderColor: "rgba(99, 102, 241, 0.5)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <item.icon className={`w-4 h-4 ${item.color}`} />
                  <span className="text-text-secondary font-medium text-sm">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
              variants={itemVariants}
            >
              <Magnetic>
                <Link to="/services">
                  <Button 
                    size="lg" 
                    rightIcon={<ArrowRight size={18} />}
                    className="text-base px-6 py-3 shadow-lg shadow-primary/25"
                  >
                    Explore Our Services
                  </Button>
                </Link>
              </Magnetic>
              <Magnetic>
                <Link to="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-base px-6 py-3 bg-surface/50 backdrop-blur-sm border-2"
                  >
                    Book a Free Consultation
                  </Button>
                </Link>
              </Magnetic>
            </motion.div>
            
            {/* Scroll Indicator */}
            <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-6 h-10 border-2 border-text-secondary/30 rounded-full flex justify-center">
                <motion.div
                  className="w-1 h-3 bg-primary rounded-full mt-2"
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;