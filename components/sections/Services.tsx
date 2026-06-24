import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Icon, { IconName } from '../ui/Icon';
import { services } from '../../data/staticData';
import { ArrowRight, Sparkles } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0, scale: 0.95 },
  visible: { 
    y: 0, 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: [0.23, 1, 0.32, 1],
      type: "spring",
      stiffness: 100
    } 
  },
};

const cardHoverVariants = {
  rest: { scale: 1, y: 0 },
  hover: { 
    scale: 1.03, 
    y: -8,
    transition: { 
      duration: 0.3, 
      ease: "easeOut" 
    }
  }
};

// FIX: Casting motion component to 'any' to bypass type checking issues
// that are likely due to a project configuration or dependency version mismatch.
const MotionDiv: any = motion.div;

// FIX: Removed explicit JSX.Element return type to fix type resolution issues with framer-motion.
const Services = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  // Select first 6 services to feature on the homepage
  const featuredServices = services.slice(0, 6);

  const getServicePath = (serviceId: string) => {
    if (serviceId === 'ai-ml') {
      return '/ai-solutions';
    }
    return `/services/${serviceId}`;
  };

  return (
    <Section title="Our Featured Services" subtitle="Bespoke solutions designed to meet your every need.">
      <MotionDiv
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {featuredServices.map((service, index) => (
          <MotionDiv 
            key={service.id} 
            variants={itemVariants}
            initial="rest"
            whileHover="hover"
            onHoverStart={() => setHoveredCard(service.id)}
            onHoverEnd={() => setHoveredCard(null)}
          >
            <Link to={getServicePath(service.id)} className="block h-full">
              <MotionDiv
                variants={cardHoverVariants}
                className="h-full"
              >
                <Card className="p-8 text-left items-start h-full group relative overflow-hidden hover-lift bg-surface/50 hover:bg-surface/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover-glow-rgb card-gradient-hover">
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Floating particles effect */}
                  {hoveredCard === service.id && (
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-primary/30 rounded-full"
                          initial={{ 
                            x: Math.random() * 100 + '%', 
                            y: Math.random() * 100 + '%',
                            opacity: 0
                          }}
                          animate={{
                            y: [null, '-100%'],
                            opacity: [0, 1, 0]
                          }}
                          transition={{
                            duration: 2,
                            delay: i * 0.2,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        />
                      ))}
                    </div>
                  )}
                  
                  {/* Service icon with pulse effect */}
                  <motion.div
                    className="relative mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon name={service.icon as IconName} className="w-12 h-12 text-primary relative z-10" />
                    <motion.div
                      className="absolute inset-0 bg-primary/20 rounded-full blur-xl"
                      animate={hoveredCard === service.id ? {
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.6, 0.3]
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                  
                  {/* Service title with gradient effect */}
                  <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors duration-300 heading-gradient">
                    {service.title}
                  </h3>
                  
                  {/* Service description */}
                  <p className="text-text-secondary flex-grow mb-6 group-hover:text-text-primary/80 transition-colors duration-300">
                    {service.description.substring(0, 120)}...
                  </p>
                  
                  {/* Service features/benefits */}
                  <div className="space-y-2 mb-6">
                    {['Fast delivery', 'Quality assured', 'Expert team'].slice(0, 2).map((feature: string, idx: number) => (
                      <motion.div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-text-secondary"
                        initial={{ opacity: 0, x: -10 }}
                        animate={hoveredCard === service.id ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <Sparkles className="w-4 h-4 text-accent" />
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* CTA with enhanced animation */}
                  <motion.div 
                    className="mt-auto text-primary font-semibold flex items-center justify-between group/cta"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-center gap-2">
                      <span>{service.ctaText || 'Learn More'}</span>
                      <motion.div
                        animate={hoveredCard === service.id ? { x: [0, 5, 0] } : {}}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <ArrowRight size={18} className="group-hover/cta:translate-x-1 transition-transform" />
                      </motion.div>
                    </div>
                    
                    {/* Service index indicator */}
                    <motion.div
                      className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary"
                      whileHover={{ scale: 1.2, backgroundColor: 'rgba(124, 58, 237, 0.2)' }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </motion.div>
                  </motion.div>
                </Card>
              </MotionDiv>
            </Link>
          </MotionDiv>
        ))}
      </MotionDiv>
    </Section>
  );
};

export default Services;
