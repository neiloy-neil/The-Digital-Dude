import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Zap, BarChart, Eye, CheckCircle, Users, Rocket } from 'lucide-react';
import Button from '../../../components/ui/Button';
import Card from '../../../components/ui/Card';
import Seo from '../../../components/Seo';

const AiMlPage = () => {
  const features = [
    {
      icon: Brain,
      title: "Generative AI & LLMs",
      description: "We develop custom chatbots, content generation tools, and internal knowledge bases powered by Large Language Models like GPT-4. These solutions can revolutionize customer support, streamline content creation, and provide instant, accurate answers from your company's internal documentation, drastically improving efficiency."
    },
    {
      icon: BarChart,
      title: "Predictive Analytics",
      description: "Forecast market trends, predict customer churn, and optimize pricing with custom machine learning models. By analyzing historical data, we build systems that empower you to make proactive, data-driven decisions that increase revenue and reduce risk. This moves your business from being reactive to being predictive."
    },
    {
      icon: Zap,
      title: "Intelligent Process Automation",
      description: "We use AI to automate repetitive, high-volume tasks that consume valuable employee time. From intelligent document processing and data extraction to automated customer email categorization and response, our solutions free up your team to focus on strategic, high-impact work, directly boosting productivity."
    },
    {
      icon: Eye,
      title: "Computer Vision",
      description: "Implement sophisticated solutions for image recognition, object detection, and video analysis. This technology can be applied to quality control in manufacturing, retail analytics by tracking foot traffic, or even medical imaging analysis. We turn visual data from the real world into actionable business intelligence."
    }
  ];

  const benefits = [
    "Unlock predictive insights from your data",
    "Automate complex business processes",
    "Create intelligent features that deliver ROI",
    "Gain a significant competitive advantage",
    "Reduce operational costs through automation",
    "Make faster, data-driven decisions"
  ];

  const processSteps = [
    {
      step: 1,
      title: "Data Assessment",
      description: "We analyze your existing data infrastructure and identify opportunities for AI implementation."
    },
    {
      step: 2,
      title: "Model Development",
      description: "Our team builds and trains custom machine learning models tailored to your business needs."
    },
    {
      step: 3,
      title: "Integration",
      description: "We seamlessly integrate AI solutions into your existing systems and workflows."
    },
    {
      step: 4,
      title: "Optimization",
      description: "Continuous monitoring and improvement to maximize the value of your AI investment."
    }
  ];

  return (
    <>
      <Seo 
        title="AI & Machine Learning Solutions | The Digital Dude"
        description="Turn your data into your most valuable asset. We deploy advanced AI and machine learning models to unlock predictive insights, automate complex processes, and create intelligent features that deliver tangible business value and a significant ROI."
        url="https://www.digitaldude.co.uk/services/ai-ml"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "AI & Machine Learning Solutions",
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
              "name": "AI & Machine Learning Solutions",
              "description": "Advanced AI and machine learning models to unlock predictive insights, automate complex processes, and create intelligent features."
            }
          }
        }}
      />
      
      <div className="pt-32 pb-20 bg-gradient-to-br from-background via-slate-900/50 to-slate-800/30">
        <div className="container mx-auto px-6">
          {/* Back button */}
          <Link to="/services" className="inline-flex items-center text-text-secondary hover:text-primary transition-colors mb-8">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to Services
          </Link>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 gradient-text-hover"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              AI & Machine Learning Solutions
            </motion.h1>
            <motion.p 
              className="text-xl text-text-secondary max-w-3xl mx-auto mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Turn your data into your most valuable asset. We deploy advanced AI and machine learning models 
              to unlock predictive insights, automate complex processes, and create intelligent features that 
              deliver tangible business value and a significant ROI.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button size="lg" onClick={() => window.location.href = '/contact'} className="group">
                Book a Free AI Consultation
                <Rocket className="w-5 h-5 ml-2 group-hover:animate-bounce" />
              </Button>
            </motion.div>
          </div>

          {/* Features Section */}
          <div className="mb-20">
            <motion.h2 
              className="text-3xl font-bold text-text-primary mb-12 text-center gradient-text-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Our AI Capabilities
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <Card className="h-full p-6 hover-glow-rgb card-gradient-hover">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-text-primary mb-3">{feature.title}</h3>
                        <p className="text-text-secondary">{feature.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-text-primary mb-6 gradient-text-hover">
                  Transform Your Business with AI
                </h2>
                <p className="text-text-secondary mb-8">
                  Our AI solutions are designed to solve real business problems and deliver measurable results. 
                  From automating repetitive tasks to uncovering hidden insights in your data, we help you 
                  leverage the power of artificial intelligence to drive growth and efficiency.
                </p>
                
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <CheckCircle className="text-accent w-5 h-5 mt-1 flex-shrink-0" />
                      <span className="text-text-secondary">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-surface/30 backdrop-blur-sm p-8 rounded-xl border border-border/30"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary">Our Approach</h3>
                </div>
                
                <p className="text-text-secondary mb-6">
                  We believe in a problem-first approach to AI implementation. Rather than starting with 
                  the technology, we begin by understanding your business challenges and identifying 
                  opportunities where AI can create the most value.
                </p>
                
                <div className="space-y-6">
                  {processSteps.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="bg-primary/20 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold text-sm">{step.step}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-text-primary mb-1">{step.title}</h4>
                        <p className="text-text-secondary text-sm">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* CTA Section */}
          <motion.div 
            className="text-center bg-gradient-to-r from-primary/10 to-accent/10 p-12 rounded-2xl border border-primary/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-text-primary mb-4 gradient-text-hover">
              Ready to Unlock the Power of AI?
            </h2>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Let's discuss how custom AI solutions can transform your business operations and 
              deliver measurable ROI.
            </p>
            <Button size="lg" onClick={() => window.location.href = '/contact'} className="group">
              Start Your AI Journey
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AiMlPage;