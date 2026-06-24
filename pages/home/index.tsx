import { motion } from 'framer-motion';
import { Users, Award, CheckCircle, Clock, Shield, Star, Zap, Rocket, Target } from 'lucide-react';
import Hero from '../../components/sections/Hero';
import KeyDifferentiators from '../../components/sections/KeyDifferentiators';
import Services from '../../components/sections/Services';
import CaseStudies from '../../components/sections/CaseStudies';
import Process from '../../components/sections/Process';

import ContactCTA from '../../components/sections/ContactCTA';
import CompaniesWorkedWith from '../../components/sections/CompaniesWorkedWith';
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
            <span className="font-bold text-lg text-text-primary mb-1">50+</span>
            <span className="font-medium text-xs text-text-secondary text-center leading-tight">Happy Clients</span>
          </MotionDiv>
          <MotionDiv 
            className="flex flex-col items-center justify-center bg-surface/20 backdrop-blur-sm p-4 rounded-2xl border border-border/30 h-24 w-full hover:bg-surface/30 transition-all duration-300 hover-glow-rgb card-gradient-hover"
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Award className="w-6 h-6 text-accent flex-shrink-0 mb-2" />
            <span className="font-bold text-lg text-text-primary mb-1">5+</span>
            <span className="font-medium text-xs text-text-secondary text-center leading-tight">Years Experience</span>
          </MotionDiv>
          <MotionDiv 
            className="flex flex-col items-center justify-center bg-surface/20 backdrop-blur-sm p-4 rounded-2xl border border-border/30 h-24 w-full hover:bg-surface/30 transition-all duration-300 hover-glow-rgb card-gradient-hover"
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mb-2" />
            <span className="font-bold text-lg text-text-primary mb-1">100%</span>
            <span className="font-medium text-xs text-text-secondary text-center leading-tight">Project Success Rate</span>
          </MotionDiv>
          <MotionDiv 
            className="flex flex-col items-center justify-center bg-surface/20 backdrop-blur-sm p-4 rounded-2xl border border-border/30 h-24 w-full hover:bg-surface/30 transition-all duration-300 hover-glow-rgb card-gradient-hover"
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Clock className="w-6 h-6 text-accent flex-shrink-0 mb-2" />
            <span className="font-bold text-lg text-text-primary mb-1">24/7</span>
            <span className="font-medium text-xs text-text-secondary text-center leading-tight">Support Available</span>
          </MotionDiv>
          <MotionDiv 
            className="flex flex-col items-center justify-center bg-surface/20 backdrop-blur-sm p-4 rounded-2xl border border-border/30 h-24 w-full hover:bg-surface/30 transition-all duration-300 hover-glow-rgb card-gradient-hover"
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Shield className="w-6 h-6 text-primary flex-shrink-0 mb-2" />
            <span className="font-bold text-lg text-text-primary mb-1">Bank-Level</span>
            <span className="font-medium text-xs text-text-secondary text-center leading-tight">Security</span>
          </MotionDiv>
          <MotionDiv 
            className="flex flex-col items-center justify-center bg-surface/20 backdrop-blur-sm p-4 rounded-2xl border border-border/30 h-24 w-full hover:bg-surface/30 transition-all duration-300 hover-glow-rgb card-gradient-hover"
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Star className="w-6 h-6 text-accent flex-shrink-0 mb-2" />
            <span className="font-bold text-lg text-text-primary mb-1">4.9/5</span>
            <span className="font-medium text-xs text-text-secondary text-center leading-tight">Client Rating</span>
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
                <h3 className="text-xl font-bold text-text-primary mb-2">Targeted Results</h3>
                <p className="text-text-secondary">
                  We don't just build software - we deliver measurable business outcomes that align with your strategic goals.
                </p>
              </div>
              <div className="text-center md:text-left">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/20 rounded-full mb-4">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-2">Rapid Delivery</h3>
                <p className="text-text-secondary">
                  Our agile approach means you'll see working software in weeks, not months, with continuous improvements.
                </p>
              </div>
              <div className="text-center md:text-left">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 rounded-full mb-4">
                  <Rocket className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-2">Future-Proof</h3>
                <p className="text-text-secondary">
                  Built with scalability in mind, our solutions grow with your business and adapt to changing needs.
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
      
      <KeyDifferentiators />
      
      <div id="services">
        <Services />
      </div>
      
      <CaseStudies />
      
      <Process />
      

      
      <CompaniesWorkedWith />
      
      <ContactCTA />
    </>
  );
};

export default HomePage;