import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ChevronDown, Quote, Play, Pause, RotateCcw } from 'lucide-react';
import Section from '../ui/Section';
import Icon, { IconName } from '../ui/Icon';
import { processSteps } from '../../data/staticData';
import Card from '../ui/Card';

const contentVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: [0.23, 1, 0.32, 1] 
    } 
  },
  exit: { 
    opacity: 0, 
    y: -20, 
    scale: 0.95,
    transition: { 
      duration: 0.3, 
      ease: 'easeIn' 
    } 
  },
};

const accordionContentVariants = {
  collapsed: { opacity: 0, height: 0, marginTop: 0 },
  open: { opacity: 1, height: 'auto', marginTop: '1rem' },
};

const progressVariants = {
  initial: { width: 0 },
  animate: { width: '100%' },
};

// FIX: Casting motion component to 'any' to bypass type checking issues
// that are likely due to a project configuration or dependency version mismatch.
const MotionDiv: any = motion.div;

// FIX: Removed explicit JSX.Element return type to fix type resolution issues with framer-motion.
const ProcessContent = ({ step }: { step: typeof processSteps[0] }) => (
  <Card className="p-8 bg-surface/80 h-full relative overflow-hidden group hover-glow-rgb card-gradient-hover">
    {/* Animated background */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    
    <div className="relative z-10">
      <motion.h3 
        className="text-2xl font-bold text-text-primary mb-4 flex items-center gap-3 heading-gradient"
        whileHover={{ scale: 1.02 }}
      >
        <motion.div
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
        >
          <Icon name={step.icon as IconName} />
        </motion.div>
        {step.title}
      </motion.h3>
      
      <p className="text-text-secondary mb-6 leading-relaxed">{step.details}</p>
      
      <h4 className="font-semibold text-text-primary mb-3 flex items-center gap-2">
        <CheckCircle className="w-5 h-5 text-accent" />
        Key Deliverables
      </h4>
      
      <motion.ul className="space-y-3 mb-6">
        {step.deliverables.map((item, idx) => (
          <motion.li 
            key={item} 
            className="flex items-start gap-3 text-text-secondary"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 + 0.3 }}
            whileHover={{ x: 5, transition: { duration: 0.2 } }}
          >
            <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
            <span className="hover:text-text-primary transition-colors">{item}</span>
          </motion.li>
        ))}
      </motion.ul>
      
      {step.testimonial && (
        <motion.div 
          className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary/50 relative overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute top-2 right-2 opacity-20">
            <Quote className="w-8 h-8 text-primary" />
          </div>
          <Quote className="w-6 h-6 text-primary/40 mb-3 transform -scale-x-100" />
          <blockquote className="text-text-secondary italic mb-3 leading-relaxed">
            "{step.testimonial.quote}"
          </blockquote>
          <p className="text-right text-sm text-text-secondary font-semibold">
            — {step.testimonial.author}
          </p>
        </motion.div>
      )}
    </div>
  </Card>
);

// FIX: Removed explicit JSX.Element return type to fix type resolution issues with framer-motion.
const Process = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const activeStepData = processSteps.find(p => p.step === activeStep);

  // Auto-play functionality
  useEffect(() => {
    let interval: number;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setActiveStep((current) => {
              const next = current >= processSteps.length ? 1 : current + 1;
              return next;
            });
            return 0;
          }
          return prev + 2;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleStepChange = (step: number) => {
    setActiveStep(step);
    setProgress(0);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
    if (!isAutoPlaying) {
      setProgress(0);
    }
  };

  const resetProgress = () => {
    setIsAutoPlaying(false);
    setProgress(0);
    setActiveStep(1);
  };

  return (
    <Section title="Our Process" subtitle="A streamlined workflow for predictable, high-quality results.">
      
      {/* Auto-play controls */}
      <div className="flex justify-center mb-8 gap-4">
        <motion.button
          onClick={toggleAutoPlay}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          {isAutoPlaying ? 'Pause Tour' : 'Auto Tour'}
        </motion.button>
        
        <motion.button
          onClick={resetProgress}
          className="flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded-lg hover:bg-surface/80 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <RotateCcw className="w-4 h-4" />
          Reset
        </motion.button>
      </div>
      
      {/* Desktop Layout */}
      <div className="hidden lg:grid grid-cols-12 gap-10 max-w-7xl mx-auto">
        <div className="col-span-4 flex flex-col gap-4">
          {processSteps.map((step, index) => (
            <motion.button
              key={step.step}
              onClick={() => handleStepChange(step.step)}
              className={`text-left p-6 rounded-xl transition-all duration-500 border-2 relative overflow-hidden group hover-glow-rgb card-gradient-hover ${
                activeStep === step.step 
                  ? 'bg-primary/10 border-primary/50 shadow-lg shadow-primary/20' 
                  : 'bg-surface/50 border-transparent hover:bg-surface/80 hover:border-primary/20'
              }`}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Progress bar for active step */}
              {activeStep === step.step && isAutoPlaying && (
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-primary"
                  variants={progressVariants}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              )}
              
              {/* Step connector line */}
              {index < processSteps.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-8 bg-border/30 group-hover:bg-primary/30 transition-colors" />
              )}
              
              <div className="flex items-center gap-4 relative z-10">
                <motion.div 
                  className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    activeStep === step.step 
                      ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                      : 'bg-border/50 text-text-secondary group-hover:bg-primary/20 group-hover:text-primary'
                  }`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <span className="font-bold text-xl">{step.step}</span>
                </motion.div>
                
                <div className="flex-1">
                  <motion.h3 
                    className={`font-bold text-lg transition-colors duration-300 heading-gradient ${
                      activeStep === step.step ? 'text-primary' : 'text-text-primary'
                    }`}
                    whileHover={{ x: 5 }}
                  >
                    {step.title}
                  </motion.h3>
                  <p className="text-sm text-text-secondary group-hover:text-text-primary/80 transition-colors">
                    {step.description}
                  </p>
                </div>
              </div>
              
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          ))}
        </div>
        <div className="col-span-8">
          <AnimatePresence mode="wait">
            {activeStepData && (
              <MotionDiv
                key={activeStepData.step}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="h-full"
              >
                <ProcessContent step={activeStepData} />
              </MotionDiv>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      {/* Mobile Accordion Layout */}
      <div className="block lg:hidden max-w-2xl mx-auto space-y-4">
        {processSteps.map((step, index) => (
          <motion.div 
            key={step.step} 
            className="bg-surface/50 rounded-lg border border-border overflow-hidden hover:border-primary/30 transition-colors hover-glow-rgb card-gradient-hover"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <motion.button
              onClick={() => setActiveStep(activeStep === step.step ? 0 : step.step)}
              className="w-full text-left p-4 flex justify-between items-center group"
              whileHover={{ backgroundColor: 'rgba(124, 58, 237, 0.05)' }}
            >
              <div className="flex items-center gap-4">
                <motion.div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                    activeStep === step.step ? 'bg-primary text-white' : 'bg-primary/20 text-primary'
                  }`}
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="font-bold">{step.step}</span>
                </motion.div>
                <div>
                  <h3 className="font-bold text-text-primary group-hover:text-primary transition-colors heading-gradient">
                    {step.title}
                  </h3>
                </div>
              </div>
              <motion.div
                animate={{ rotate: activeStep === step.step ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5 text-text-secondary" />
              </motion.div>
            </motion.button>
            
            <AnimatePresence>
              {activeStep === step.step && (
                <MotionDiv
                  variants={accordionContentVariants}
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="px-4 pb-4"
                >
                  <ProcessContent step={step} />
                </MotionDiv>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Process;
