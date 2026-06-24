import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useMemo } from 'react';
import Section from '../../components/ui/Section';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { ArrowRight, MessageCircle, Eye, Lightbulb, CheckCircle, TrendingUp, Zap, BarChart2 } from 'lucide-react';
import Seo from '../../components/Seo';
import ImageWithFallback from '../../components/ui/ImageWithFallback';
import { caseStudies } from '../../data/staticData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
  exit: { y: 20, opacity: 0, transition: { duration: 0.2 } },
};

// FIX: Casting motion component to 'any' to bypass type checking issues
// that are likely due to a project configuration or dependency version mismatch.
const MotionDiv: any = motion.div;

// FIX: Removed explicit JSX.Element return type to fix type resolution issues with framer-motion.
const CaseStudiesPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  // Ensure we're working with a clean copy of the data
  const allCaseStudies = [...caseStudies];

  const tags = useMemo(() => {
    const allTags = allCaseStudies.flatMap(cs => cs.tags);
    return ['All', ...Array.from(new Set(allTags))];
  }, []);

  const filteredStudies = useMemo(() => {
    if (activeFilter === 'All') return allCaseStudies;
    return allCaseStudies.filter(cs => cs.tags.includes(activeFilter));
  }, [activeFilter]);

  return (
    <>
      <Seo 
        title="Software Development Case Studies | Real Results & Success Stories"
        description="See how we've helped businesses increase efficiency by 60%, reduce costs by 30% & scale operations with custom software solutions."
        type="website"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Our Work - The Digital Dude",
          "description": "See how we've helped businesses increase efficiency by 60%, reduce costs by 30% & scale operations with custom software solutions.",
          "url": "https://www.digitaldude.online/work",
          "mainEntity": {
            "@type": "ItemList",
            "itemListElement": caseStudies.map((study, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "CreativeWork",
                "name": study.title,
                "description": study.result,
                "url": `https://www.digitaldude.online/work/${study.id}`
              }
            }))
          }
        }}
      />
      <div className="pt-24">
        <Section title="Our Work" subtitle="Explore our success stories and see how we've delivered tangible results.">
          {/* Enhanced Filter Controls */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {tags.map(tag => (
              <Button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                variant={activeFilter === tag ? 'primary' : 'secondary'}
                size="sm"
                className="capitalize rounded-full px-4 py-2 transition-all duration-300"
              >
                {tag}
              </Button>
            ))}
          </div>
          
          {/* Enhanced Grid */}
          <MotionDiv
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={containerVariants}
          >
            <AnimatePresence>
              {filteredStudies.map((study) => (
                 <MotionDiv
                    key={study.id} 
                    layout 
                    variants={itemVariants} 
                    initial="hidden" 
                    animate="visible" 
                    exit="exit"
                    className="flex flex-col h-full"
                 >
                    <Link to={`/work/${study.id}`} className="h-full flex flex-col">
                      <Card className="group hover-glow-rgb card-gradient-hover h-full flex flex-col">
                        <div className="relative rounded-lg overflow-hidden">
                          <ImageWithFallback src={study.image} alt={study.title} loading="lazy" className="w-full h-64 md:h-80 object-cover" />
                        </div>
                        <Card.Header>
                          <h3 className="text-xl font-bold text-text-primary heading-gradient">{study.title}</h3>
                        </Card.Header>
                        <Card.Content className="flex-grow">
                           <p className="text-sm text-text-secondary group-hover:text-text-primary/90 transition-colors duration-300 mb-4 line-clamp-4">{study.result}</p>
                           
                           {/* Enhanced Metrics Display */}
                           <div className="grid grid-cols-3 gap-2 mb-4">
                             {study.metrics.slice(0, 3).map((metric, index) => (
                               <div key={index} className="bg-surface/50 backdrop-blur-lg p-2 rounded text-center">
                                 <p className="text-xs font-bold text-primary">{metric.value}</p>
                                 <p className="text-xs text-text-secondary truncate">{metric.label}</p>
                                 </div>
                             ))}
                           </div>
                        </Card.Content>
                        <Card.Footer className="flex items-center justify-between mt-auto">
                          <div className="flex flex-wrap gap-1">
                            {study.tags.slice(0, 2).map((tag) => (
                              <span key={tag} className="bg-primary/20 text-accent text-xs font-semibold px-2 py-1 rounded-full capitalize">
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="text-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-sm font-semibold">View Full Study</span>
                            <ArrowRight size={16} />
                          </div>
                        </Card.Footer>
                      </Card>
                    </Link>
                 </MotionDiv>
              ))}
            </AnimatePresence>
          </MotionDiv>
        </Section>
        
        {/* Why Our Case Studies Matter */}
        <Section title="Why Our Case Studies Matter" subtitle="Real results from real projects">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
            <Card className="p-6 text-center hover-glow-rgb">
              <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">Proven Results</h3>
              <p className="text-text-secondary">
                Our case studies showcase real-world results with measurable metrics, demonstrating the tangible value we deliver to our clients.
              </p>
            </Card>
            
            <Card className="p-6 text-center hover-glow-rgb">
              <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">Actionable Insights</h3>
              <p className="text-text-secondary">
                Learn from our experiences and discover how our solutions can be adapted to address similar challenges in your business.
              </p>
            </Card>
            
            <Card className="p-6 text-center hover-glow-rgb">
              <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BarChart2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">Data-Driven Approach</h3>
              <p className="text-text-secondary">
                Every solution we implement is backed by data and analytics, ensuring optimal performance and continuous improvement.
              </p>
            </Card>
          </div>
        </Section>
        

        <Section title="" subtitle="">
          {/* CTA Section */}
          <MotionDiv
            className="mt-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="p-12 bg-gradient-to-br from-accent/10 via-accent/5 to-primary/10 border-accent/20 max-w-4xl mx-auto text-center card-gradient-hover group">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Lightbulb className="w-16 h-16 text-accent mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                  Ready to Create Your <span className="gradient-rgb">Success Story</span>?
                </h2>
                <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8 leading-relaxed">
                  Join our growing list of successful clients who have transformed their businesses 
                  with our custom software solutions. Let's discuss your project today.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                    <Link to="/contact">
                      <Button size="lg" className="group relative overflow-hidden">
                        <span className="relative z-10 flex items-center gap-2">
                          <MessageCircle className="w-5 h-5" />
                          Discuss Your Project
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-accent"
                          animate={{
                            x: ['-100%', '100%']
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        />
                      </Button>
                    </Link>
                  
                  <Link to="/services">
                    <Button variant="outline" size="lg" className="group">
                      <span className="flex items-center gap-2">
                        <Eye className="w-5 h-5" />
                        Explore Our Services
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                  </Link>
                </div>
                
                <div className="flex flex-wrap justify-center gap-6 text-sm text-text-secondary">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span>Proven Results</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span>Expert Team</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span>End-to-End Support</span>
                  </div>
                </div>
              </motion.div>
            </Card>
          </MotionDiv>
        </Section>
      </div>
    </>
  );
};

export default CaseStudiesPage;