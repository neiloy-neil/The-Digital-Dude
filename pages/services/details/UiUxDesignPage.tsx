import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import Button from '../../../components/ui/Button';
import Seo from '../../../components/Seo';
import { services, serviceDetails } from '../../../data/staticData';
import { Service } from '../../../types';

interface ServicePageProps {
  onBack: () => void;
  onContactClick: () => void;
}

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

const UiUxDesignPage = ({ onBack, onContactClick }: ServicePageProps) => {
  const serviceId = 'ui-ux-design';
  const service: Service | undefined = services.find(s => s.id === serviceId);
  const details = serviceId ? serviceDetails[serviceId] : undefined;

  if (!service || !details) {
    return (
      <div className="text-center py-40">
        <p className="text-red-400 mb-4">Error: Could not load service.</p>
        <Button variant="ghost" onClick={onBack}>Go back to services</Button>
      </div>
    );
  }

  return (
    <>
      <Seo 
        title={service.title}
        description={service.description}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-24 pb-20"
      >
        <div className="container mx-auto px-6">
          <Button variant="ghost" onClick={onBack} leftIcon={<ArrowLeft size={20} />} className="mb-8 text-text-secondary !p-0">
            Back to Services
          </Button>

          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-4">{service.title}</h1>
            <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">{service.description}</p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Service Details */}
            <div>
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-text-primary mb-4">Core Features</h2>
                <motion.ul
                  variants={listVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-3"
                >
                  {details.features.map((feature: string, index: number) => (
                    <motion.li 
                      key={index} 
                      variants={listItemVariants}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-text-secondary">{feature}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-text-primary mb-4">Potential Modules</h2>
                <motion.ul
                  variants={listVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-3"
                >
                  {details.modules.map((module: string, index: number) => (
                    <motion.li 
                      key={index} 
                      variants={listItemVariants}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-text-secondary">{module}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>

            {/* Right Column - Outcomes & CTA */}
            <div>
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-text-primary mb-4">Expected Outcomes</h2>
                <motion.ul
                  variants={listVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-3"
                >
                  {details.outcomes.map((outcome: string, index: number) => (
                    <motion.li 
                      key={index} 
                      variants={listItemVariants}
                      className="flex items-start gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0"></div>
                      <span className="text-text-secondary">{outcome}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-6 rounded-xl border border-primary/20">
                <h3 className="text-xl font-bold text-text-primary mb-3">Ready to Transform Your Business?</h3>
                <p className="text-text-secondary mb-5">
                  Let's discuss how our {service.title} solutions can drive growth and efficiency for your organization.
                </p>
                <Button onClick={onContactClick} className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default UiUxDesignPage;