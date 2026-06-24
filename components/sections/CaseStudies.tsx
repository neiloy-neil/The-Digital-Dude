import { lazy, Suspense, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, Clock } from 'lucide-react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import Card from '../ui/Card';
import CarouselSkeleton from '../ui/skeletons/CarouselSkeleton';
import { caseStudies } from '../../data/staticData';

const HomepageCaseStudyCarousel = lazy(() => import('../ui/carousels/HomepageCaseStudyCarousel'));

// FIX: Casting motion component to 'any' to bypass type checking issues
// that are likely due to a project configuration or dependency version mismatch.
const MotionDiv: any = motion.div;

// Enhanced CaseStudies with interactive showcase
const CaseStudies = () => {
  const [activeTab, setActiveTab] = useState('featured');
  
  // Highlighting the specific projects mentioned in the plan
  const featuredCaseStudies = caseStudies.filter(cs => 
    ['property-compliance-crm', 'logistics-coordination-platform', 'ai-tutoring-platform'].includes(cs.id)
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <Section title="Our Work in Action" subtitle="Transforming businesses through custom solutions that deliver measurable results.">
      {/* Tab Navigation */}
      <div className="flex justify-center mb-12">
        <div className="flex bg-surface/50 rounded-lg p-1 border border-border">
          <button
            onClick={() => setActiveTab('featured')}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
              activeTab === 'featured'
                ? 'bg-primary text-white shadow-lg'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            Featured Projects
          </button>
          <button
            onClick={() => setActiveTab('metrics')}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
              activeTab === 'metrics'
                ? 'bg-primary text-white shadow-lg'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            Success Metrics
          </button>
        </div>
      </div>

      {activeTab === 'featured' ? (
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <Suspense fallback={<CarouselSkeleton />}>
            <HomepageCaseStudyCarousel caseStudies={featuredCaseStudies} />
          </Suspense>
        </MotionDiv>
      ) : (
        /* Success Metrics Grid */
        <MotionDiv
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          key="metrics" // Add key to ensure proper re-rendering
        >
          <MotionDiv variants={itemVariants}>
            <Card className="text-center p-8 hover-lift group">
              <MotionDiv
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
              </MotionDiv>
              <h3 className="text-3xl font-bold text-text-primary mb-2 group-hover:text-primary transition-colors heading-gradient">40-60%</h3>
              <p className="text-text-secondary mb-4 font-medium">Average Efficiency Increase</p>
              <p className="text-sm text-text-secondary group-hover:text-text-primary/80 transition-colors">Our solutions consistently deliver significant operational improvements</p>
            </Card>
          </MotionDiv>
          
          <MotionDiv variants={itemVariants}>
            <Card className="text-center p-8 hover-lift group hover-glow-rgb card-gradient-hover">
              <MotionDiv
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Users className="w-12 h-12 text-accent mx-auto mb-4" />
              </MotionDiv>
              <h3 className="text-3xl font-bold text-text-primary mb-2 group-hover:text-accent transition-colors heading-gradient">7</h3>
              <p className="text-text-secondary mb-4 font-medium">Live Products Shipped</p>
              <p className="text-sm text-text-secondary group-hover:text-text-primary/80 transition-colors">Real systems running live in production</p>
            </Card>
          </MotionDiv>
          
          <MotionDiv variants={itemVariants}>
            <Card className="text-center p-8 hover-lift group hover-glow-rgb card-gradient-hover">
              <MotionDiv
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              </MotionDiv>
              <h3 className="text-3xl font-bold text-text-primary mb-2 group-hover:text-primary transition-colors heading-gradient">6-16</h3>
              <p className="text-text-secondary mb-4 font-medium">Weeks to MVP</p>
              <p className="text-sm text-text-secondary group-hover:text-text-primary/80 transition-colors">Rapid development with agile methodology</p>
            </Card>
          </MotionDiv>
        </MotionDiv>
      )}
      <div className="text-center mt-12">
        <Link to="/work">
          <Button
            variant="outline"
            size="lg"
            rightIcon={<ArrowRight size={20} />}
          >
            View All Work
          </Button>
        </Link>
      </div>
    </Section>
  );
};

export default CaseStudies;
