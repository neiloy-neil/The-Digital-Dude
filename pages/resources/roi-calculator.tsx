import { motion } from 'framer-motion';
import Seo from '../../components/Seo';
import ROICalculator from '../../components/ui/ROICalculator';

const ROICalculatorPage = () => {
  return (
    <>
      <Seo
        title="Software ROI Calculator | Estimate Your Savings"
        description="Calculate potential cost savings & ROI from custom software automation. See how much you could save with the right technology partner."
        url="https://www.digitaldude.co.uk/resources/roi-calculator"
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
              Return on Investment Calculator
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Discover how much time and money your business can save with custom software automation
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <ROICalculator />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-16 max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              Maximize Your Business Efficiency
            </h2>
            <p className="text-text-secondary mb-6">
              Our ROI calculator provides an estimate based on industry averages. 
              Actual savings may vary depending on your specific business needs and processes.
            </p>
            <p className="text-text-secondary">
              Ready to transform your business operations? Contact our team for a personalized consultation 
              and discover how our custom software solutions can drive real value for your organization.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ROICalculatorPage;