import { motion } from 'framer-motion';
import Seo from '../../components/Seo';
import ServiceComparisonMatrix from '../../components/ui/ServiceComparisonMatrix';

const ServiceComparisonPage = () => {
  return (
    <>
      <Seo
        title="Service Comparison Matrix | The Digital Dude"
        description="Compare our software development services side-by-side to find the perfect solution for your business needs. Custom software, AI solutions, SaaS platforms, and more."
        type="website"
      />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-24 pb-20"
      >
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
              Service <span className="gradient-rgb heading-gradient">Comparison</span>
            </h1>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Compare our software development services side-by-side to find the perfect solution for your business needs. 
              Make informed decisions with our comprehensive feature comparison.
            </p>
          </motion.div>
          
          <ServiceComparisonMatrix />
        </div>
      </motion.div>
    </>
  );
};

export default ServiceComparisonPage;