import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import Button from '../../components/ui/Button';
import Seo from '../../components/Seo';
import { services, serviceDetails } from '../../data/staticData';
import { Service } from '../../types';

const listVariants = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
  hidden: { opacity: 0 },
};

const listItemVariants = {
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
  hidden: { opacity: 0, y: 20 },
};

const ServiceDetailPage = () => {
  const { id: serviceId } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const service: Service | undefined = services.find(s => s.id === serviceId);
  const details = serviceId ? serviceDetails[serviceId] : undefined;

  if (!service || !details) {
    return (
      <div className="text-center py-40">
        <p className="text-red-400 mb-4">Error: Could not load service details.</p>
        <Button variant="ghost" onClick={() => navigate('/services')}>Back to services</Button>
      </div>
    );
  }

  return (
    <>
      <Seo 
        title={`${service.title} Development | Custom Solutions for Your Business`}
        description={`Expert ${service.title.toLowerCase()} development services tailored to your business needs. Scalable, secure solutions that drive growth & efficiency.`}
        type="service"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": service.title,
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
              "name": service.title,
              "description": service.description
            }
          }
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-32 pb-20 bg-gradient-to-br from-background via-slate-900/50 to-slate-800/30"
      >
        <div className="container mx-auto px-6">
          <Button variant="ghost" onClick={() => navigate('/services')} leftIcon={<ArrowLeft size={20} />} className="mb-8 text-text-secondary !p-0 hover:text-primary transition-colors">
            Back to Services
          </Button>

          {/* Hero */}
          <div className="text-center mb-16">
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6 gradient-text-hover"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {service.title}
            </motion.h1>
            <motion.p 
              className="text-base md:text-lg text-text-secondary max-w-3xl mx-auto mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {service.description}
            </motion.p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <motion.div 
              className="space-y-12"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-surface/30 backdrop-blur-sm p-6 rounded-xl border border-border/30">
                <h2 className="text-2xl font-bold text-text-primary mb-6 gradient-text-hover">Core Features</h2>
                <motion.ul
                  className="space-y-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={listVariants}
                >
                  {details.features.map((feature: string, index: number) => (
                    <motion.li key={index} variants={listItemVariants} className="flex items-start gap-3">
                      <CheckCircle className="text-accent w-5 h-5 mt-1 flex-shrink-0" />
                      <span className="text-text-secondary">{feature}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
              
              <div className="bg-surface/30 backdrop-blur-sm p-6 rounded-xl border border-border/30">
                <h2 className="text-2xl font-bold text-text-primary mb-6 gradient-text-hover">Potential Modules</h2>
                <motion.ul
                  className="space-y-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={listVariants}
                >
                  {details.modules.map((module: string, index: number) => (
                    <motion.li key={index} variants={listItemVariants} className="flex items-start gap-3">
                      <CheckCircle className="text-accent w-5 h-5 mt-1 flex-shrink-0" />
                      <span className="text-text-secondary">{module}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>

            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="bg-surface/50 backdrop-blur-lg p-6 rounded-xl border border-border self-start sticky top-24 hover-glow-rgb card-gradient-hover">
                <h2 className="text-2xl font-bold text-text-primary mb-6 gradient-text-hover">Example Outcomes</h2>
                <motion.ul
                  className="space-y-4 mb-8"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={listVariants}
                >
                  {details.outcomes.map((outcome: string, index: number) => (
                    <motion.li key={index} variants={listItemVariants} className="flex items-start gap-3">
                      <CheckCircle className="text-primary w-5 h-5 mt-1 flex-shrink-0" />
                      <span className="text-text-secondary">{outcome}</span>
                    </motion.li>
                  ))}
                </motion.ul>
                
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg border border-primary/20">
                  <h3 className="text-xl font-semibold text-text-primary mb-4 gradient-text-hover">Ready to build?</h3>
                  <p className="text-text-secondary mb-6">
                    Let's discuss how a custom <span className="gradient-rgb font-medium">{service.title}</span> solution can transform your business.
                  </p>
                  <Button onClick={() => navigate('/contact')} size="lg" className="w-full group">
                    Book a Consultation
                    <ArrowLeft className="w-4 h-4 ml-2 rotate-180 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ServiceDetailPage;