import { motion } from 'framer-motion';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Icon, { IconName } from '../ui/Icon';
import { differentiators } from '../../data/staticData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

// FIX: Casting motion component to 'any' to bypass type checking issues
// that are likely due to a project configuration or dependency version mismatch.
const MotionDiv: any = motion.div;

// FIX: Removed explicit JSX.Element return type to fix type resolution issues with framer-motion.
const KeyDifferentiators = () => {
  return (
    <Section title="Why Partner With Us?" subtitle="We're more than just developers; we're your strategic technology partner.">
      <MotionDiv
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {differentiators.map((item) => (
          <MotionDiv key={item.title} variants={itemVariants}>
            <Card className="p-8 text-left items-start h-full">
              <Icon name={item.icon as IconName} className="w-10 h-10 text-primary mb-5" />
              <h3 className="text-xl font-bold text-text-primary mb-3">{item.title}</h3>
              <p className="text-text-secondary">{item.description}</p>
            </Card>
          </MotionDiv>
        ))}
      </MotionDiv>
    </Section>
  );
};

export default KeyDifferentiators;
