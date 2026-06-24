import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Card from '../../components/ui/Card';
import Icon, { IconName } from '../../components/ui/Icon';
import Section from '../../components/ui/Section';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle, Zap } from 'lucide-react';
import Button from '../../components/ui/Button';

import Seo from '../../components/Seo';
import { services } from '../../data/servicesData';

// FIX: Use proper motion components with better type safety
const ServicesPage = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all');

  const getServicePath = (id: string) => {
    if (id === 'ai-ml') {
      return '/ai-solutions';
    }
    return `/services/${id}`;
  };

  const categories = [
    { id: 'all', label: 'All Services', icon: Sparkles },
    { id: 'development', label: 'Development', icon: CheckCircle },
    { id: 'ai', label: 'AI Solutions', icon: Zap },
    { id: 'consulting', label: 'Consulting', icon: ArrowRight }
  ];

    // Simple filter logic based on service titles (you can enhance this based on actual categories)
  const filteredServices = services;

  return (
    <>
      <Seo 
        title="Software Development Services | Custom Solutions for Your Business" 
        description="From custom SaaS platforms to AI integration & mobile apps. We build scalable software solutions that drive growth & solve complex business challenges."
        type="website"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Software Development Services",
          "provider": {
            "@type": "Organization",
            "name": "The Digital Dude",
            "url": "https://www.digitaldude.co.uk"
          },
          "areaServed": "UK",
          "offers": {
            "@type": "Offer",
            "category": "Business",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom Software Development",
              "description": "From custom SaaS platforms to AI integration & mobile apps. We build scalable software solutions that drive growth & solve complex business challenges."
            }
          }
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-24 pb-20"
      >
        {/* Hero Section */}
        <div className="container mx-auto px-6 text-center mb-8">
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our <span className="gradient-rgb heading-gradient">Expertise</span>
            <br className="hidden sm:block" />
            Tailored to Your <span className="gradient-rgb heading-gradient">Business</span>
          </motion.h1>
          <motion.p
            className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto mb-6 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We architect innovative solutions that solve your unique operational challenges, from <span className="gradient-rgb">custom software</span> and <span className="gradient-rgb">AI</span> to <span className="gradient-rgb">e-commerce</span> and cloud infrastructure.
          </motion.p>
          
          {/* Filter Tabs */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex bg-surface/30 rounded-lg p-1 border border-border/30 flex-wrap">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <motion.button
                    key={category.id}
                    onClick={() => setFilter(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                      filter === category.id
                        ? 'bg-primary text-white shadow-lg'
                        : 'text-text-secondary hover:text-text-primary'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <IconComponent className="w-4 h-4" />
                    {category.label}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </div>
        
        <Section title="Our Software Development Services" subtitle="We architect innovative solutions that solve your unique operational challenges, from custom software and AI to e-commerce and cloud infrastructure.">
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredServices.map((service) => {
              const IconComponent = service.icon as IconName;
              return (
                <motion.div 
                  key={service.id} 
                  className="h-full"
                  id={service.id}  // Added ID for navigation
                >
                  <Card 
                    className="group h-full hover-lift card-gradient-hover"
                    onClick={() => navigate(getServicePath(service.id))}
                  >
                    <Card.Header>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <Icon name={IconComponent} className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors heading-gradient">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-text-secondary leading-relaxed">
                        {service.description}
                      </p>
                    </Card.Header>
                    <Card.Footer className="pt-4">
                      <Button 
                        variant="ghost" 
                        className="group/btn p-0 text-primary hover:text-accent transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(getServicePath(service.id));
                        }}
                      >
                        <span className="flex items-center gap-2">
                          {service.ctaText || 'Learn More'}
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </span>
                      </Button>
                    </Card.Footer>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </Section>
      </motion.div>
    </>
  );
};

export default ServicesPage;
