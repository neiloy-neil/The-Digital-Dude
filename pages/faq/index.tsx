import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, MessageCircle, Clock } from 'lucide-react';
import Section from '../../components/ui/Section';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Seo from '../../components/Seo';
import { Link } from 'react-router-dom';

const MotionDiv: any = motion.div;

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  // General
  {
    id: 'what-does-digital-dude-do',
    category: 'General',
    question: 'What does The Digital Dude do?',
    answer: 'We build bespoke digital solutions – from custom software and AI systems to SaaS platforms, marketplaces, and e-commerce solutions. Our expertise spans the entire digital product lifecycle, from initial concept and design through to development, deployment, and ongoing support.'
  },
  {
    id: 'ideal-clients',
    category: 'General',
    question: 'Who are your ideal clients?',
    answer: 'We work with businesses of all sizes looking for tailored software, AI integration, or digital transformation support. This includes startups seeking to build their first product, growing companies needing to scale their technology, and established enterprises requiring custom solutions. We serve clients across various industries including fintech, healthcare, e-commerce, SaaS, and more.'
  },
  {
    id: 'international-clients',
    category: 'General',
    question: 'Do you work with international clients?',
    answer: 'Yes, we serve clients globally, with ongoing projects in the UK, Australia, Europe, North America, and Asia. We work seamlessly with distributed teams using modern collaboration tools and can accommodate various time zones. All our contracts and communications are in English, and we handle international payment processing with ease.'
  },
  {
    id: 'company-size',
    category: 'General',
    question: 'What size companies do you typically work with?',
    answer: 'We work with companies of all sizes, from early-stage startups to large enterprises. Our flexible approach allows us to tailor our services to fit the specific needs and budgets of each client. For startups, we focus on rapid MVP development and lean processes. For enterprises, we provide enterprise-grade solutions with robust security and scalability.'
  },

  // Process & Development
  {
    id: 'start-new-project',
    category: 'Process & Development',
    question: 'How do you start a new project?',
    answer: 'We begin with discovery workshops to define requirements, followed by design, development, testing, and deployment phases. Our process includes: 1) Initial consultation to understand your goals, 2) Discovery phase with detailed requirements gathering, 3) Technical architecture planning, 4) Design and prototyping, 5) Agile development in 2-week sprints, 6) Continuous testing and feedback, 7) Deployment and launch, 8) Post-launch support and maintenance.'
  },
  {
    id: 'source-code-ownership',
    category: 'Process & Development',
    question: 'Will I own the source code?',
    answer: 'Yes, 100% ownership of code and intellectual property remains with the client. We believe in transparent partnerships where our clients retain complete control over their digital assets. All code, designs, and documentation created during the project are transferred to you upon completion. We only retain copies for our internal reference and documentation purposes.'
  },
  {
    id: 'project-timeline',
    category: 'Process & Development',
    question: 'How long does a typical project take?',
    answer: 'Timelines vary based on project complexity, but most MVPs are delivered within 8–12 weeks. Simple web applications might take 6-8 weeks, while complex enterprise solutions can take 4-6 months or more. We break projects into phases with clear milestones and deliverables, allowing for regular check-ins and adjustments to scope or timeline as needed.'
  },
  {
    id: 'development-methodology',
    category: 'Process & Development',
    question: 'What development methodology do you use?',
    answer: 'We use an agile development approach with two-week sprints, allowing for flexibility and regular feedback. Our process includes daily standups, weekly progress reviews, and sprint retrospectives. We provide access to our project management tools so you can track progress in real-time. This iterative approach ensures we can adapt to changing requirements and deliver value early and often.'
  },
  {
    id: 'project-management',
    category: 'Process & Development',
    question: 'How do you manage projects and communication?',
    answer: 'We use a combination of project management tools including Jira, Notion, and Slack to keep everything organized and transparent. You\'ll have access to project boards, sprint planning documents, and regular status updates. We provide weekly progress reports and hold bi-weekly stakeholder meetings. For urgent matters, we\'re available via Slack during business hours.'
  },

  // AI & Data Solutions
  {
    id: 'ai-services',
    category: 'AI & Data Solutions',
    question: 'What AI services do you offer?',
    answer: 'We build custom AI models, predictive analytics, generative AI applications, chatbots, computer vision systems, and natural language processing solutions. Our services include AI strategy consulting, model development and training, integration with existing systems, and ongoing optimization. We work with technologies like TensorFlow, PyTorch, OpenAI APIs, and cloud-based ML platforms.'
  },
  {
    id: 'ai-integration',
    category: 'AI & Data Solutions',
    question: 'Do you integrate AI into existing systems?',
    answer: 'Yes, we specialize in embedding AI capabilities into legacy or third-party platforms. Whether you need to add chatbots to your customer service system, implement predictive analytics in your CRM, or integrate computer vision into your quality control process, we can seamlessly integrate AI solutions without disrupting your existing workflows.'
  },
  {
    id: 'data-requirements-ai',
    category: 'AI & Data Solutions',
    question: 'What data do I need for AI implementation?',
    answer: 'The data requirements depend on your specific AI goals. For machine learning models, we typically need historical data relevant to the problem you\'re solving. For chatbots, we need conversation examples and knowledge base content. For computer vision, we need image datasets. We can work with structured data (databases, spreadsheets) or unstructured data (documents, images, audio). We help assess your data readiness and can assist with data collection and preparation.'
  },
  {
    id: 'ai-roi',
    category: 'AI & Data Solutions',
    question: 'How can AI provide ROI for my business?',
    answer: 'AI can provide ROI through automation of repetitive tasks, improved decision-making with predictive analytics, enhanced customer experiences with chatbots, and operational efficiencies. Typical ROI areas include reduced labor costs, faster processing times, improved accuracy, better customer retention, and increased sales through personalization. We work with you to identify specific use cases that align with your business objectives.'
  },

  // Support & Maintenance
  {
    id: 'post-launch-support',
    category: 'Support & Maintenance',
    question: 'Do you provide post-launch support?',
    answer: 'Yes, we offer tiered maintenance and support retainers for performance, security, and ongoing improvements. Our support packages include: 1) Basic support with monthly check-ins and security updates, 2) Standard support with bi-weekly maintenance and feature enhancements, 3) Premium support with dedicated support hours and priority response times. We also offer on-demand support for specific issues or updates.'
  },
  {
    id: 'new-features',
    category: 'Support & Maintenance',
    question: 'What happens if I need new features after launch?',
    answer: 'We provide flexible feature upgrade packages and long-term partnership support. New features can be added through additional development sprints, which we estimate and price transparently. We maintain detailed documentation of your system to ensure smooth feature additions. Our team can quickly ramp up on existing projects to implement new functionality without disrupting current operations.'
  },
  {
    id: 'security-maintenance',
    category: 'Support & Maintenance',
    question: 'How do you handle security updates and maintenance?',
    answer: 'We provide proactive security monitoring and regular updates as part of our support packages. This includes monitoring for vulnerabilities, applying security patches, conducting regular security audits, and staying current with the latest security best practices. We also provide incident response services and can help with compliance requirements like GDPR, HIPAA, or PCI-DSS.'
  },
  {
    id: 'scaling-support',
    category: 'Support & Maintenance',
    question: 'Do you help with scaling and performance optimization?',
    answer: 'Absolutely. We design systems with scalability in mind and provide ongoing performance optimization services. This includes database optimization, server scaling, caching strategies, load balancing, and CDN implementation. We monitor system performance and can proactively identify and address bottlenecks before they impact users.'
  },

  // Pricing & Budget
  {
    id: 'pricing-model',
    category: 'Pricing & Budget',
    question: 'What is your pricing model?',
    answer: 'We offer flexible pricing models including fixed-price projects for well-defined scopes, time-and-materials for ongoing development, and dedicated team arrangements. Our pricing is based on project complexity, timeline, and required expertise. We provide detailed estimates with breakdowns of costs and can work within various budget constraints. Payment terms are typically 50% upfront and 50% upon completion, with milestone-based payments for larger projects.'
  },
  {
    id: 'budget-flexibility',
    category: 'Pricing & Budget',
    question: 'Can you work within my budget constraints?',
    answer: 'Yes, we\'re experienced in working with various budget levels and can adjust scope and approach accordingly. For tighter budgets, we can focus on MVP development or phase the project. For larger budgets, we can include additional features, enhanced design, or extended support. We provide transparent pricing with no hidden fees and can offer payment plans for qualifying projects.'
  },
  {
    id: 'cost-reduction',
    category: 'Pricing & Budget',
    question: 'How can I reduce development costs?',
    answer: 'We recommend starting with a minimum viable product (MVP) to validate your concept before investing in full features. Using existing tools and frameworks rather than building everything from scratch can save time and money. Clear requirements and regular communication help avoid costly revisions. Phased development allows you to spread costs over time. We can also suggest alternative approaches that achieve similar results at lower costs.'
  },

  // Technology & Expertise
  {
    id: 'tech-stack',
    category: 'Technology & Expertise',
    question: 'What technologies do you specialize in?',
    answer: 'Our expertise spans modern web and mobile technologies including React, Next.js, Node.js, Python, TypeScript, PostgreSQL, MongoDB, AWS, Docker, Kubernetes, and more. For mobile, we work with React Native and Flutter. For AI/ML, we use TensorFlow, PyTorch, and cloud AI services. We stay current with emerging technologies and choose the best stack for each project based on requirements, scalability needs, and long-term maintainability.'
  },
  {
    id: 'cloud-services',
    category: 'Technology & Expertise',
    question: 'Do you work with cloud platforms?',
    answer: 'Yes, we have extensive experience with major cloud platforms including AWS, Google Cloud, and Microsoft Azure. We help clients choose the right cloud strategy, whether that\'s single-cloud, multi-cloud, or hybrid approaches. Our services include cloud migration, infrastructure setup, serverless architecture, containerization with Docker and Kubernetes, and cloud cost optimization.'
  },
  {
    id: 'legacy-systems',
    category: 'Technology & Expertise',
    question: 'Can you work with legacy systems?',
    answer: 'Yes, we specialize in modernizing legacy systems while preserving business continuity. We can integrate new solutions with existing systems through APIs, database connections, or middleware. Our approach includes assessing legacy code, identifying improvement opportunities, and creating migration plans that minimize disruption. We can also help with gradual system replacement or enhancement of existing functionality.'
  }
];

const categories = ['All', 'General', 'Process & Development', 'AI & Data Solutions', 'Support & Maintenance', 'Pricing & Budget', 'Technology & Expertise'];

const FAQPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const filteredFAQs = faqData.filter(faq => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleExpanded = (id: string) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <>
      <Seo 
        title="Software Development FAQ | Pricing, Process & Project Questions"
        description="Get answers to common questions about custom software pricing, development process, timelines & what to expect when working with us."
        type="faqpage"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqData.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        }}
      />
      
      <div className="pt-24 min-h-screen bg-gradient-to-br from-background via-slate-900/50 to-slate-800/30">
        <Section title="Frequently Asked Questions" subtitle="Find answers to the most common questions about our services, processes, pricing, and support.">
          
          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-12">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-secondary w-5 h-5" />
                <motion.input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-surface border border-border rounded-lg text-text-primary placeholder-text-secondary focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                  // ENHANCEMENT: Add focus and hover animations
                  whileFocus={{ scale: 1.01 }}
                  whileHover={{ y: -2 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                />
              </div>
            </MotionDiv>

            {/* Category Filters */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-wrap gap-2 justify-center"
            >
              {categories.map(category => (
                <motion.div
                  key={category}
                  // ENHANCEMENT: Add hover and tap animations to category buttons
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <Button
                    onClick={() => setActiveCategory(category)}
                    variant={activeCategory === category ? 'primary' : 'outline'}
                    size="sm"
                    className="transition-all"
                  >
                    {category}
                  </Button>
                </motion.div>
              ))}
            </MotionDiv>
          </div>

          {/* FAQ Items */}
          <div className="max-w-4xl mx-auto space-y-4">
            {filteredFAQs.map((faq, index) => (
              <MotionDiv
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                // ENHANCEMENT: Add hover animation to FAQ cards
                whileHover={{ y: -3 }}
                transition={{ duration: 0.6, delay: index * 0.1, type: 'spring', stiffness: 400, damping: 17 }}
              >
                <Card className="overflow-hidden hover-glow-rgb card-gradient-hover">
                  <motion.button
                    onClick={() => toggleExpanded(faq.id)}
                    className="w-full p-6 text-left flex justify-between items-start gap-4 hover:bg-gradient-to-r hover:from-surface/30 hover:via-primary/5 hover:to-accent/10 transition-all duration-300 group/button"
                    // ENHANCEMENT: Add tap animation
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <motion.span 
                          className="px-2 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full"
                          // ENHANCEMENT: Add subtle entrance animation for category tags
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          {faq.category}
                        </motion.span>
                      </div>
                      <motion.h3 
                        className="font-semibold text-text-primary text-lg group-hover/button:text-primary transition-colors duration-300 heading-gradient"
                        // ENHANCEMENT: Add subtle entrance animation for questions
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                      >
                        {faq.question}
                      </motion.h3>
                    </div>
                    <motion.div
                      animate={{ 
                        rotate: expandedItems.includes(faq.id) ? 180 : 0,
                        scale: expandedItems.includes(faq.id) ? 1.1 : 1
                      }}
                      className="text-text-secondary group-hover/button:text-primary transition-colors duration-300"
                      // ENHANCEMENT: Add hover animation to chevron icon
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.3, type: 'spring', stiffness: 400, damping: 17 }}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </motion.button>
                  
                  <AnimatePresence>
                    {expandedItems.includes(faq.id) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-0">
                          <div className="border-t border-border/30 pt-4">
                            <motion.p 
                              className="text-text-secondary leading-relaxed"
                              // ENHANCEMENT: Add subtle entrance animation for answers
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5 }}
                            >
                              {faq.answer}
                            </motion.p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </MotionDiv>
            ))}
          </div>

          {/* No Results */}
          {filteredFAQs.length === 0 && (
            <MotionDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
              // ENHANCEMENT: Add subtle entrance animation
              whileInView={{ 
                opacity: 1,
                scale: [0.9, 1.05, 1],
              }}
              transition={{ 
                duration: 0.5,
                type: 'spring',
                stiffness: 300,
                damping: 20
              }}
            >
              <p className="text-text-secondary text-lg mb-4">
                No FAQs found matching your search criteria.
              </p>
              <motion.div
                // ENHANCEMENT: Add hover animation to clear filters button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <Button 
                  onClick={() => { setSearchTerm(''); setActiveCategory('All'); }}
                  variant="outline"
                >
                  Clear Filters
                </Button>
              </motion.div>
            </MotionDiv>
          )}

          {/* Contact CTA */}
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mt-16"
            // ENHANCEMENT: Add subtle continuous animation
            animate={{ 
              y: [0, -5, 0],
              transition: { 
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }
            }}
          >
            <Card className="p-8 text-center bg-gradient-to-br from-primary/5 via-transparent to-accent/5 border-primary/20">
              <motion.div
                // ENHANCEMENT: Add subtle pulse animation to icon
                animate={{ 
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              </motion.div>
              <motion.h2 
                className="text-2xl font-bold text-text-primary mb-4"
                // ENHANCEMENT: Add subtle entrance animation
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Didn't find what you're looking for?
              </motion.h2>
              <motion.p 
                className="text-text-secondary mb-6 max-w-2xl mx-auto"
                // ENHANCEMENT: Add subtle entrance animation
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Our team is ready to answer your specific questions and help you get started with your project.
              </motion.p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <motion.div
                    // ENHANCEMENT: Add hover and tap animations to contact button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  >
                    <Button size="lg" className="group">
                      <span className="flex items-center gap-2">
                        <MessageCircle className="w-5 h-5" />
                        Get in Touch
                      </span>
                    </Button>
                  </motion.div>
                </Link>
                <motion.div 
                  className="flex items-center gap-2 text-sm text-text-secondary"
                  // ENHANCEMENT: Add subtle entrance animation
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Clock className="w-4 h-4 text-primary" />
                  <span>We typically respond within 2 hours</span>
                </motion.div>
              </div>
            </Card>
          </MotionDiv>
        </Section>
      </div>
    </>
  );
};

export default FAQPage;