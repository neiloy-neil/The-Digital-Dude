import { motion } from 'framer-motion';
import { Star, Shield, Users, Clock, Award, CheckCircle } from 'lucide-react';

interface TrustMetric {
  icon: React.ElementType;
  value: string;
  label: string;
  description?: string;
}

const trustMetrics: TrustMetric[] = [
  {
    icon: Users,
    value: "50+",
    label: "Happy Clients",
    description: "Businesses transformed worldwide"
  },
  {
    icon: Award,
    value: "5+",
    label: "Years Experience",
    description: "Delivering enterprise solutions"
  },
  {
    icon: CheckCircle,
    value: "100%",
    label: "Project Success Rate",
    description: "On-time, on-budget delivery"
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Support Available",
    description: "Always here when you need us"
  },
  {
    icon: Shield,
    value: "Bank-Level",
    label: "Security",
    description: "Enterprise-grade protection"
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "Client Rating",
    description: "Consistently excellent feedback"
  }
];

interface TrustIndicatorsProps {
  variant?: 'compact' | 'detailed';
  className?: string;
}

const TrustIndicators = ({ variant = 'compact', className = '' }: TrustIndicatorsProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  if (variant === 'compact') {
    return (
      <motion.div
        className={`flex items-center justify-center gap-8 text-sm text-text-secondary ${className}`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {trustMetrics.slice(0, 3).map((metric, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-2 hover:text-primary transition-colors"
            variants={itemVariants}
          >
            <metric.icon className="w-4 h-4" />
            <span>{metric.value} {metric.label}</span>
          </motion.div>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {trustMetrics.map((metric, index) => (
        <motion.div
          key={index}
          className="text-center group cursor-pointer"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <div className="bg-surface/50 backdrop-blur-md border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
            <metric.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <div className="text-2xl font-bold text-text-primary mb-1">{metric.value}</div>
            <div className="text-sm font-medium text-text-secondary mb-2">{metric.label}</div>
            {metric.description && (
              <div className="text-xs text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                {metric.description}
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default TrustIndicators;