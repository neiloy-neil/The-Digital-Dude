import { motion } from 'framer-motion';
import Seo from '../../components/seo/SEO';
import PricingCalculator from '../../components/ui/PricingCalculator';

const PricingCalculatorPage = () => {
  return (
    <>
      <Seo
        title="Software Project Pricing Calculator | Estimate Development Costs"
        description="Calculate the cost of your custom software project with our interactive pricing calculator. Get accurate estimates for web apps, mobile apps, SaaS platforms, and more."
        url="https://www.digitaldude.co.uk/resources/pricing-calculator"
      />
      
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Project Pricing Calculator
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Estimate the cost and timeline of your custom software project based on your specific requirements
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <PricingCalculator />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-16 max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              Transparent, Value-Driven Pricing
            </h2>
            <p className="text-text-secondary mb-6">
              Our pricing calculator provides an estimate based on industry standards and our extensive experience. 
              Actual costs may vary depending on your specific project requirements and complexity.
            </p>
            <p className="text-text-secondary">
              Ready to get started? Contact our team for a detailed consultation and customized quote 
              that aligns perfectly with your project goals and budget.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default PricingCalculatorPage;