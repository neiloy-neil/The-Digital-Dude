import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ArrowRight, Sparkles, Zap, MessageCircle, Calendar } from 'lucide-react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import Magnetic from '../ui/Magnetic';

// FIX: Casting motion component to 'any' to bypass type checking issues
// that are likely due to a project configuration or dependency version mismatch.
const MotionDiv: any = motion.div;

// FIX: Removed explicit JSX.Element return type to fix type resolution issues with framer-motion.
const ContactCTA = () => {
  const [hoveredOption, setHoveredOption] = useState<string | null>(null);
  
  const contactOptions = [
    {
      id: 'consultation',
      title: 'Free Consultation',
      description: 'Book a 30-minute discovery call',
      icon: MessageCircle,
      link: '/contact',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      id: 'estimate',
      title: 'Get Estimate',
      description: 'Receive a detailed project quote',
      icon: Calendar,
      link: '/contact?type=estimate',
      gradient: 'from-green-500 to-blue-500'
    },
    {
      id: 'emergency',
      title: 'Urgent Support',
      description: 'Need immediate assistance?',
      icon: Zap,
      link: '/contact?type=urgent',
      gradient: 'from-red-500 to-orange-500'
    }
  ];
  return (
    <Section title="Let's Build Your Custom Solution Together" subtitle="Ready to transform your business? We're here to help.">
        
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            initial={{
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5
            }}
          />
        ))}
      </div>
        
      <MotionDiv
        className="max-w-4xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <motion.p 
          className="text-text-secondary mb-12 text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Whether you have a detailed brief or just the spark of an idea, we're here to help you bring it to life. 
          Choose how you'd like to get started with our <span className="text-primary font-semibold gradient-rgb">bespoke digital solutions</span>.
        </motion.p>
          
        {/* Contact options grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactOptions.map((option, index) => {
            const IconComponent = option.icon;
            return (
              <motion.div
                key={option.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
                onHoverStart={() => setHoveredOption(option.id)}
                onHoverEnd={() => setHoveredOption(null)}
                className="group"
              >
                <Link to={option.link} className="block">
                  <motion.div
                    className="relative p-6 bg-surface/50 backdrop-blur-sm border border-border/50 rounded-xl hover:border-primary/30 transition-all duration-300 overflow-hidden group-hover:shadow-lg group-hover:shadow-primary/10 hover-glow-rgb card-gradient-hover"
                    whileHover={{ scale: 1.02, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Animated background gradient */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${option.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />
                      
                    {/* Icon with glow effect */}
                    <motion.div
                      className="relative mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <IconComponent className="w-8 h-8 text-primary mx-auto" />
                      {hoveredOption === option.id && (
                        <motion.div
                          className="absolute inset-0 bg-primary/30 rounded-full blur-xl"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.3, 0.6, 0.3]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      )}
                    </motion.div>
                      
                    <h3 className="font-bold text-text-primary mb-2 group-hover:text-primary transition-colors heading-gradient">
                      {option.title}
                    </h3>
                    <p className="text-sm text-text-secondary group-hover:text-text-primary/80 transition-colors">
                      {option.description}
                    </p>
                      
                    {/* Arrow indicator */}
                    <motion.div
                      className="flex justify-center mt-4"
                      animate={hoveredOption === option.id ? { x: [0, 5, 0] } : {}}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>
          
        {/* Main CTA with enhanced animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5, type: "spring", stiffness: 100 }}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Magnetic>
              <Link to="/contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" className="relative overflow-hidden group">
                    <span className="relative z-10 flex items-center gap-2">
                      <Sparkles className="w-5 h-5" />
                      Start Your Project
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-rgb"
                      animate={{
                        x: ['-100%', '100%']
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  </Button>
                </motion.div>
              </Link>
            </Magnetic>
              
            <motion.p 
              className="text-sm text-text-secondary"
              whileHover={{ scale: 1.05 }}
            >
              No commitment required • Free consultation
            </motion.p>
          </div>
        </motion.div>
      </MotionDiv>
    </Section>
  );
};

export default ContactCTA;
