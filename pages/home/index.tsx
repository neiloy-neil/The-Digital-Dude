import { motion } from 'framer-motion';
import { Users, Award, CheckCircle, Clock, Shield, Star, Zap, Rocket, Target } from 'lucide-react';
import Hero from '../../components/sections/Hero';
import CaseStudies from '../../components/sections/CaseStudies';
import ContactCTA from '../../components/sections/ContactCTA';
import SEO from '../../components/seo/SEO';
import Section from '../../components/ui/Section';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { Link } from 'react-router-dom';

// FIX: Casting motion component to 'any' to bypass type checking issues
const MotionDiv: any = motion.div;

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.1, 0.25, 1]
    } 
  },
};

// FIX: Removed React.FC for better type compatibility.
const HomePage = () => {
  return (
    <>
      <SEO 
        title="Custom Software Development & AI Solutions | The Digital Dude" 
        description="Transform your business with custom software, AI solutions & SaaS platforms. Expert developers delivering measurable ROI & scalable digital products."
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "The Digital Dude",
          "url": "https://www.digitaldude.online",
          "description": "Transform your business with custom software, AI solutions & SaaS platforms. Expert developers delivering measurable ROI & scalable digital products.",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.digitaldude.online/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          },
          "publisher": {
            "@type": "Organization",
            "name": "The Digital Dude",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.digitaldude.online/logo.svg",
              "width": 600,
              "height": 60
            }
          }
        }}
      />
      <Hero />
      
      {/* Enhanced Trust Indicators with Value Propositions */}
      <Section title="" subtitle="" className="py-8 sm:py-12">
        {/* Trust Indicators with enhanced animation - perfectly aligned and consistent */}
        <MotionDiv 
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16 max-w-7xl mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            },
            hidden: { opacity: 0 }
          }}
        >
          <MotionDiv 
            className="flex flex-col items-center justify-center bg-surface/20 backdrop-blur-sm p-4 rounded-2xl border border-border/30 h-24 w-full hover:bg-surface/30 transition-all duration-300 hover-glow-rgb card-gradient-hover"
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Users className="w-6 h-6 text-primary flex-shrink-0 mb-2" />
            <span className="font-bold text-lg text-text-primary mb-1">7</span>
            <span className="font-medium text-xs text-text-secondary text-center leading-tight">Live Products Shipped</span>
          </MotionDiv>
          <MotionDiv 
            className="flex flex-col items-center justify-center bg-surface/20 backdrop-blur-sm p-4 rounded-2xl border border-border/30 h-24 w-full hover:bg-surface/30 transition-all duration-300 hover-glow-rgb card-gradient-hover"
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Award className="w-6 h-6 text-accent flex-shrink-0 mb-2" />
            <span className="font-bold text-lg text-text-primary mb-1">5</span>
            <span className="font-medium text-xs text-text-secondary text-center leading-tight">Industries Served</span>
          </MotionDiv>
          <MotionDiv 
            className="flex flex-col items-center justify-center bg-surface/20 backdrop-blur-sm p-4 rounded-2xl border border-border/30 h-24 w-full hover:bg-surface/30 transition-all duration-300 hover-glow-rgb card-gradient-hover"
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mb-2" />
            <span className="font-bold text-lg text-text-primary mb-1">4,000+</span>
            <span className="font-medium text-xs text-text-secondary text-center leading-tight">Rentals Managed</span>
          </MotionDiv>
          <MotionDiv 
            className="flex flex-col items-center justify-center bg-surface/20 backdrop-blur-sm p-4 rounded-2xl border border-border/30 h-24 w-full hover:bg-surface/30 transition-all duration-300 hover-glow-rgb card-gradient-hover"
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Clock className="w-6 h-6 text-accent flex-shrink-0 mb-2" />
            <span className="font-bold text-lg text-text-primary mb-1">30+</span>
            <span className="font-medium text-xs text-text-secondary text-center leading-tight">Agencies on our CRM</span>
          </MotionDiv>
          <MotionDiv 
            className="flex flex-col items-center justify-center bg-surface/20 backdrop-blur-sm p-4 rounded-2xl border border-border/30 h-24 w-full hover:bg-surface/30 transition-all duration-300 hover-glow-rgb card-gradient-hover"
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Shield className="w-6 h-6 text-primary flex-shrink-0 mb-2" />
            <span className="font-bold text-lg text-text-primary mb-1">2020</span>
            <span className="font-medium text-xs text-text-secondary text-center leading-tight">Founded</span>
          </MotionDiv>
          <MotionDiv 
            className="flex flex-col items-center justify-center bg-surface/20 backdrop-blur-sm p-4 rounded-2xl border border-border/30 h-24 w-full hover:bg-surface/30 transition-all duration-300 hover-glow-rgb card-gradient-hover"
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Star className="w-6 h-6 text-accent flex-shrink-0 mb-2" />
            <span className="font-bold text-lg text-text-primary mb-1">UK</span>
            <span className="font-medium text-xs text-text-secondary text-center leading-tight">Registered</span>
          </MotionDiv>
        </MotionDiv>
        
        {/* Enhanced Value Proposition Section */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto mb-20"
        >
          <Card className="p-8 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 border-primary/20 hover-glow-rgb card-gradient-hover">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center md:text-left">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 rounded-full mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-2">We scope before we build</h3>
                <p className="text-text-secondary">
                  Every project starts with a one-page brief. No code until scope is agreed.
                </p>
              </div>
              <div className="text-center md:text-left">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/20 rounded-full mb-4">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-2">50% upfront, milestones after</h3>
                <p className="text-text-secondary">
                  Clear payment terms, no surprises.
                </p>
              </div>
              <div className="text-center md:text-left">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 rounded-full mb-4">
                  <Rocket className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-2">You own everything</h3>
                <p className="text-text-secondary">
                  Source code, hosting accounts, domain. Always.
                </p>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-border/30 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/services">
                <Button size="lg">
                  Explore Our Services
                </Button>
              </Link>
              <Link to="/case-studies">
                <Button variant="outline" size="lg">
                  See Success Stories
                </Button>
              </Link>
            </div>
          </Card>
        </MotionDiv>
      </Section>
      
      <CaseStudies />
      
      <Section className="py-20 bg-surface/20">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-text-primary">Ready to build something real?</h2>
          <p className="text-lg text-text-secondary mb-8">
            See our transparent, 5-step process for delivering custom software on time and on budget.
          </p>
          <Link to="/how-we-work">
            <Button size="lg" className="group">
              <span className="flex items-center gap-2">
                See How We Work
              </span>
            </Button>
          </Link>
        </div>
      </Section>
      
      <ContactCTA />
    </>
  );
};

export default HomePage;