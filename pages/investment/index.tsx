import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Clock, MessageCircle, Users, Zap, Shield } from 'lucide-react';
import Section from '../../components/ui/Section';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Seo from '../../components/Seo';

// FIX: Casting motion component to 'any' to bypass type checking issues
const MotionDiv: any = motion.div;

const pricingTiers = [
  {
    name: "Discovery",
    price: "£2,500",
    duration: "1-2 weeks",
    description: "Perfect for validating your idea and creating a clear roadmap",
    features: [
      "Comprehensive business analysis",
      "Technical requirements document",
      "User journey mapping",
      "Technology stack recommendations",
      "Project timeline & cost estimate",
      "Wireframes & initial concepts"
    ],
    benefits: [
      "Risk-free project validation",
      "Clear understanding of costs",
      "Professional project roadmap",
      "Technical expertise guidance"
    ],
    popular: false,
    cta: "Start Discovery"
  },
  {
    name: "MVP Development",
    price: "£15,000",
    duration: "6-12 weeks",
    description: "Launch your minimum viable product quickly and efficiently",
    features: [
      "Full-stack web application",
      "Core feature development",
      "Responsive design",
      "Basic user authentication",
      "Database setup & optimization",
      "Cloud deployment & hosting",
      "2 rounds of revisions",
      "Basic analytics integration"
    ],
    benefits: [
      "Fast time to market",
      "Proven development process",
      "Scalable foundation",
      "Post-launch support included"
    ],
    popular: true,
    cta: "Build MVP"
  },
  {
    name: "Full Product",
    price: "£35,000+",
    duration: "12-24 weeks",
    description: "Complete custom solution with advanced features and integrations",
    features: [
      "Advanced web & mobile apps",
      "Custom API development",
      "Third-party integrations",
      "AI/ML capabilities",
      "Advanced security features",
      "Performance optimization",
      "Comprehensive testing",
      "DevOps & CI/CD setup",
      "6 months post-launch support"
    ],
    benefits: [
      "Enterprise-grade solution",
      "Advanced functionality",
      "Full technical support",
      "Ongoing maintenance included"
    ],
    popular: false,
    cta: "Discuss Project"
  }
];

const addOnServices = [
  {
    name: "AI Integration",
    price: "£5,000+",
    description: "Add intelligent features powered by machine learning",
    icon: Zap
  },
  {
    name: "Mobile App",
    price: "£8,000+",
    description: "Native iOS and Android applications",
    icon: Users
  },
  {
    name: "Advanced Security",
    price: "£3,000+",
    description: "Enterprise-level security implementation",
    icon: Shield
  },
  {
    name: "Ongoing Support",
    price: "£1,500/month",
    description: "Continuous updates, monitoring, and support",
    icon: MessageCircle
  }
];

const InvestmentPage = () => {
  return (
    <>
      <Seo
        title="Investment & Pricing - Project Costs at The Digital Dude"
        description="Transparent pricing for custom software development. From discovery to full product launch, understand your investment options."
        type="website"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Investment & Pricing",
          "description": "Transparent pricing for custom software development. From discovery to full product launch, understand your investment options.",
          "url": "https://www.digitaldude.co.uk/investment",
          "mainEntity": {
            "@type": "OfferCatalog",
            "name": "Software Development Services",
            "itemListElement": pricingTiers.map(tier => ({
              "@type": "Offer",
              "name": tier.name,
              "price": tier.price.replace("£", ""),
              "priceCurrency": "GBP",
              "description": tier.description
            }))
          }
        }}
      />
      
      <div className="pt-24 pb-20 min-h-screen bg-gradient-to-br from-background via-background/98 to-surface/5">
        {/* Hero Section */}
        <div className="container mx-auto px-6 text-center mb-20">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Investment <span className="gradient-rgb neon-glow-text">& Pricing</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transparent, value-driven pricing for custom software development. Choose the right approach for your project and budget.
          </motion.p>
        </div>

        {/* Pricing Tiers */}
        <Section title="Development Packages" subtitle="Flexible options to fit your project needs and budget">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <MotionDiv
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={tier.popular ? "md:-mt-4" : ""}
              >
                <Card className={`p-8 h-full relative ${tier.popular ? 'border-primary shadow-lg shadow-primary/20' : ''} hover-lift card-gradient-hover`}>
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-rgb text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-text-primary mb-2 heading-gradient">
                      {tier.name}
                    </h3>
                    <div className="mb-2">
                      <span className="text-4xl font-bold text-primary">{tier.price}</span>
                    </div>
                    <div className="flex items-center justify-center gap-1 text-text-secondary mb-4">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{tier.duration}</span>
                    </div>
                    <p className="text-text-secondary">{tier.description}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-text-primary mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-text-secondary">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-text-primary mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {tier.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-text-secondary">
                          <Star className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <Link to="/contact">
                      <Button 
                        className="w-full group" 
                        variant={tier.popular ? "primary" : "outline"}
                      >
                        <span className="flex items-center justify-center gap-2">
                          {tier.cta}
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </Button>
                    </Link>
                  </div>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </Section>

        {/* Add-on Services */}
        <Section title="Additional Services" subtitle="Enhance your project with specialized capabilities">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {addOnServices.map((service, index) => (
              <MotionDiv
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center h-full hover-lift card-gradient-hover">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <service.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-text-primary mb-2 heading-gradient">
                    {service.name}
                  </h3>
                  <div className="text-xl font-bold text-accent mb-3">
                    {service.price}
                  </div>
                  <p className="text-sm text-text-secondary">
                    {service.description}
                  </p>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </Section>

        {/* Process & Guarantees */}
        <Section title="Our Commitment" subtitle="What you can expect when working with us">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-6 text-center h-full hover-lift card-gradient-hover">
                <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-text-primary mb-3 heading-gradient">
                  Fixed Price Guarantee
                </h3>
                <p className="text-text-secondary">
                  No surprises. Your quoted price is your final price, regardless of development complexities.
                </p>
              </Card>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="p-6 text-center h-full hover-lift card-gradient-hover">
                <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-text-primary mb-3 heading-gradient">
                  On-Time Delivery
                </h3>
                <p className="text-text-secondary">
                  We commit to realistic timelines and deliver on schedule. Your launch date is our priority.
                </p>
              </Card>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-6 text-center h-full hover-lift card-gradient-hover">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-text-primary mb-3 heading-gradient">
                  Quality Assurance
                </h3>
                <p className="text-text-secondary">
                  Comprehensive testing and 30-day bug-fix guarantee. Your product works perfectly from day one.
                </p>
              </Card>
            </MotionDiv>
          </div>
        </Section>

        {/* CTA Section */}
        <Section title="Ready to Get Started?" subtitle="Let's discuss your project and provide a detailed quote">
          <MotionDiv
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 bg-gradient-to-br from-primary/5 via-primary/3 to-accent/5 border-primary/20 card-gradient-hover">
              <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                Every project is unique. Get a personalized quote based on your specific requirements and timeline. 
                Free consultation included with every inquiry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="group">
                    <span className="flex items-center gap-2">
                      Get Free Quote
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </Link>
                <Link to="/case-studies">
                  <Button variant="outline" size="lg" className="group">
                    <span className="flex items-center gap-2">
                      View Our Work
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </Link>
              </div>
            </Card>
          </MotionDiv>
        </Section>
      </div>
    </>
  );
};

export default InvestmentPage;