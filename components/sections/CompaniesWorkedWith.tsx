import { motion } from 'framer-motion';
import Section from '../ui/Section';
import ImageWithFallback from '../ui/ImageWithFallback';
import { companies } from '../../data/staticData';

// FIX: Casting motion component to 'any' to bypass type checking issues
const MotionDiv: any = motion.div;

const CompaniesWorkedWith = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <Section 
      title="Trusted by Leading Companies" 
      subtitle="We've had the privilege of working with some of the world's most innovative companies across various industries."
    >
      <MotionDiv
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Companies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 items-center justify-items-center">
          {companies.map((company) => (
            <MotionDiv
              key={company.name}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.1, 
                y: -5,
                transition: { duration: 0.2 } 
              }}
              className="group relative"
            >
              <div className="bg-surface/30 hover:bg-surface/50 backdrop-blur-sm p-6 rounded-2xl border border-border/30 hover:border-primary/30 transition-all duration-300 w-24 h-24 flex items-center justify-center hover-glow-rgb card-gradient-hover">
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                
                <ImageWithFallback
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="max-w-full max-h-full w-auto h-auto object-contain filter brightness-75 dark:brightness-100 group-hover:brightness-100 dark:group-hover:brightness-125 transition-all duration-300 relative z-10"
                  loading="lazy"
                />
              </div>
              
              {/* Tooltip on hover */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-surface border border-border rounded-lg px-3 py-2 text-sm text-text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20 whitespace-nowrap">
                <div className="font-medium">{company.name}</div>
                <div className="text-text-secondary text-xs">{company.industry}</div>
                {/* Arrow */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-border"></div>
              </div>
            </MotionDiv>
          ))}
        </div>

        {/* Bottom text */}
        <MotionDiv
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
            From startups to Fortune 500 companies, we've delivered exceptional results across diverse industries. 
            <span className="text-primary font-medium"> Join the companies that trust us</span> to drive their digital transformation.
          </p>
        </MotionDiv>
      </MotionDiv>
    </Section>
  );
};

export default CompaniesWorkedWith;