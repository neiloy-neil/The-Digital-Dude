import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, BrainCircuit, CheckCircle, Eye, Zap, BarChart2, Star, Lightbulb } from 'lucide-react';
import Button from '../../components/ui/Button';
import Seo from '../../components/Seo';
import { services, caseStudies } from '../../data/staticData';
import Card from '../../components/ui/Card';
import Magnetic from '../../components/ui/Magnetic';
import ImageWithFallback from '../../components/ui/ImageWithFallback';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

// FIX: Casting motion component to 'any' to bypass type checking issues
// that are likely due to a project configuration or dependency version mismatch.
const MotionDiv: any = motion.div;

// Enhanced AI subsection content with detailed descriptions
const enhancedSubsections = [
  {
    title: "Generative AI & LLMs",
    description: "We develop custom chatbots, content generation tools, and internal knowledge bases powered by Large Language Models like GPT-4. These solutions can revolutionize customer support, streamline content creation, and provide instant, accurate answers from your company's internal documentation, drastically improving efficiency.",
    useCases: [
      "24/7 Customer Support Chatbots",
      "Automated Content Creation & Copywriting",
      "Intelligent Document Processing & Summarization",
      "Code Generation & Technical Assistance"
    ],
    benefits: [
      "Reduce customer service costs by up to 60%",
      "Accelerate content creation by 5x",
      "Improve employee productivity with instant knowledge access",
      "Enable faster decision-making with AI insights"
    ]
  },
  {
    title: "Predictive Analytics",
    description: "Forecast market trends, predict customer churn, and optimize pricing with custom machine learning models. By analyzing historical data, we build systems that empower you to make proactive, data-driven decisions that increase revenue and reduce risk. This moves your business from being reactive to being predictive.",
    useCases: [
      "Customer Churn Prediction & Retention",
      "Demand Forecasting & Inventory Optimization",
      "Dynamic Pricing Strategies",
      "Risk Assessment & Fraud Detection"
    ],
    benefits: [
      "Increase revenue by identifying new opportunities",
      "Reduce operational costs through better resource allocation",
      "Minimize risk with proactive intervention strategies",
      "Improve customer retention rates by up to 35%"
    ]
  },
  {
    title: "Intelligent Process Automation",
    description: "We use AI to automate repetitive, high-volume tasks that consume valuable employee time. From intelligent document processing and data extraction to automated customer email categorization and response, our solutions free up your team to focus on strategic, high-impact work, directly boosting productivity.",
    useCases: [
      "Automated Document Processing & Data Extraction",
      "Intelligent Email Classification & Response",
      "Invoice Processing & Financial Workflow Automation",
      "Customer Onboarding & KYC Automation"
    ],
    benefits: [
      "Eliminate up to 80% of manual data entry tasks",
      "Reduce processing time from hours to minutes",
      "Minimize human error in critical workflows",
      "Free up employees for high-value strategic work"
    ]
  },
  {
    title: "Computer Vision",
    description: "Implement sophisticated solutions for image recognition, object detection, and video analysis. This technology can be applied to quality control in manufacturing, retail analytics by tracking foot traffic, or even medical imaging analysis. We turn visual data from the real world into actionable business intelligence.",
    useCases: [
      "Quality Control in Manufacturing",
      "Retail Analytics & Customer Behavior Tracking",
      "Medical Imaging Analysis",
      "Security & Surveillance Systems"
    ],
    benefits: [
      "Achieve 99%+ accuracy in quality inspections",
      "Gain real-time insights into customer behavior",
      "Reduce manual review time by 90%",
      "Enable proactive maintenance and safety measures"
    ]
  }
];

// FIX: Removed explicit JSX.Element return type to fix type resolution issues with framer-motion.
const AiSolutionsPage = () => {
  const navigate = useNavigate();
  const service = services.find(s => s.id === 'ai-ml');
  
  // Get the AI education case study
  const aiCaseStudy = caseStudies.find(cs => cs.id === 'ai-education-platform');

  if (!service) {
    return (
      <div className="text-center py-40">
        <p className="text-red-400 mb-4">Error: Could not load AI solutions content.</p>
        <Button variant="ghost" onClick={() => navigate('/services')}>Back to Services</Button>
      </div>
    );
  }

  return (
    <>
      <Seo
        title="AI & Machine Learning Solutions | Transform Data Into Insights"
        description="Leverage AI for predictive analytics, automation & intelligent features. Custom ML models that deliver ROI & competitive advantage for your business."
        type="service"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "AI and Machine Learning Solutions",
          "provider": {
            "@type": "Organization",
            "name": "The Digital Dude",
            "url": "https://www.digitaldude.co.uk"
          },
          "areaServed": "UK",
          "offers": {
            "@type": "Offer",
            "category": "Business",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Solutions",
              "description": "Leverage AI for predictive analytics, automation & intelligent features. Custom ML models that deliver ROI & competitive advantage for your business."
            }
          }
        }}
      />
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-24 pb-20"
      >
        <div className="container mx-auto px-6">
          <Button variant="ghost" onClick={() => navigate('/services')} leftIcon={<ArrowLeft size={20} />} className="mb-8 text-text-secondary !p-0">
            Back to Services
          </Button>

          {/* Hero */}
          <div className="text-center mb-16">
            <BrainCircuit className="w-16 h-16 text-primary mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-4">
              Intelligence as a <span className="gradient-rgb">Standard</span>
            </h1>
            <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
                Turn your data into actionable insights and automation. We integrate cutting-edge AI to build smarter, faster, and more efficient digital products that deliver a significant competitive advantage.
            </p>
          </div>

          {/* Enhanced Solutions Grid */}
          <MotionDiv
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {enhancedSubsections.map((subsection) => (
              <MotionDiv key={subsection.title} variants={itemVariants}>
                <Card className="p-8 h-full items-start text-left group hover-glow-rgb card-gradient-hover">
                  <h3 className="text-xl font-bold text-text-primary mb-3 heading-gradient">{subsection.title}</h3>
                  <p className="text-text-secondary group-hover:text-text-primary/90 transition-colors duration-300 mb-6">{subsection.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-text-primary mb-2 flex items-center gap-2">
                        <Zap className="w-4 h-4 text-accent" />
                        Key Use Cases
                      </h4>
                      <ul className="space-y-2">
                        {subsection.useCases.map((useCase, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-text-secondary">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{useCase}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-text-primary mb-2 flex items-center gap-2">
                        <BarChart2 className="w-4 h-4 text-accent" />
                        Business Benefits
                      </h4>
                      <ul className="space-y-2">
                        {subsection.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-text-secondary">
                            <Star className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </MotionDiv>
            ))}
          </MotionDiv>

          {/* AI Case Study Section */}
          {aiCaseStudy && (
            <MotionDiv
              className="max-w-5xl mx-auto mb-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-8 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 border-primary/20">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/3">
                    <ImageWithFallback 
                      src={aiCaseStudy.image} 
                      alt={aiCaseStudy.title} 
                      className="rounded-lg shadow-lg w-full h-auto object-cover"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="bg-primary/20 text-accent text-xs font-semibold px-2.5 py-1 rounded-full">
                        Featured Case Study
                      </span>
                      {aiCaseStudy.tags.map(tag => (
                        <span key={tag} className="bg-accent/20 text-primary text-xs font-semibold px-2.5 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
                      {aiCaseStudy.title}
                    </h2>
                    <p className="text-text-secondary mb-6">
                      {aiCaseStudy.result}
                    </p>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {aiCaseStudy.metrics.slice(0, 3).map((metric, index) => (
                        <div key={index} className="text-center">
                          <p className="text-xl font-bold text-primary">{metric.value}</p>
                          <p className="text-xs text-text-secondary">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                    <Link to={`/case-studies/${aiCaseStudy.id}`}>
                      <Button variant="primary" size="md">
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </MotionDiv>
          )}

          {/* Why Choose Our AI Solutions */}
          <MotionDiv
            className="max-w-5xl mx-auto mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-text-primary mb-12 text-center">
              Why Choose Our <span className="gradient-rgb">AI Solutions</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6 hover-glow-rgb">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Lightbulb className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-2">Cutting-Edge Technology</h3>
                    <p className="text-text-secondary">
                      We leverage the latest advancements in AI, including Large Language Models, 
                      Computer Vision, and Predictive Analytics to deliver solutions that are at the 
                      forefront of technological innovation.
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 hover-glow-rgb">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-2">Business-First Approach</h3>
                    <p className="text-text-secondary">
                      Our AI solutions are designed with your business objectives in mind. We focus on 
                      delivering measurable ROI and tangible business outcomes, not just impressive technology.
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 hover-glow-rgb">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <BarChart2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-2">Scalable & Secure</h3>
                    <p className="text-text-secondary">
                      Our AI solutions are built on scalable cloud infrastructure with enterprise-grade 
                      security. They grow with your business and protect your valuable data.
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 hover-glow-rgb">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Star className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-2">Continuous Improvement</h3>
                    <p className="text-text-secondary">
                      AI models improve over time with more data. We provide ongoing monitoring, 
                      optimization, and updates to ensure your AI solutions continue to deliver value.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </MotionDiv>

          {/* Enhanced CTA Banner */}
          <motion.div
            className="max-w-5xl mx-auto mt-20 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="p-12 bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 border-primary/20 card-gradient-hover group">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                  Request an <span className="gradient-rgb">AI Demo</span>
                </h2>
                <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8 leading-relaxed">
                  See our AI solutions in action. Let us show you how we can unlock the potential of your data 
                  and transform your business operations with intelligent automation.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                  <Magnetic>
                    <Link to="/contact">
                      <Button size="lg" className="group relative overflow-hidden">
                        <span className="relative z-10 flex items-center gap-2">
                          <BrainCircuit className="w-5 h-5" />
                          Book Your Free Demo
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary"
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
                  </Magnetic>
                  
                  <Link to="/case-studies">
                    <Button variant="outline" size="lg" className="group">
                      <span className="flex items-center gap-2">
                        <Eye className="w-5 h-5" />
                        View AI Case Studies
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                  </Link>
                </div>
                
                <div className="flex flex-wrap justify-center gap-6 text-sm text-text-secondary">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Free Demo Session</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Custom AI Solutions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Expert Consultation</span>
                  </div>
                </div>
              </motion.div>
            </Card>
          </motion.div>
        </div>
      </MotionDiv>
    </>
  );
};

export default AiSolutionsPage;