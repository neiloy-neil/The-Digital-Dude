import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Clock, CheckCircle, MessageCircle, Calendar, Users, Building, Globe, Zap, TrendingUp, Shield } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Seo from '../components/Seo';

type FormValues = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  projectType: string;
  budget: string;
  timeline: string;
  projectDescription: string;
};

// FIX: Casting motion component to 'any' to bypass type checking issues
// that are likely due to a project configuration or dependency version mismatch.
const MotionDiv: any = motion.div;

// FIX: Removed explicit JSX.Element return type to fix type resolution issues with framer-motion.
const ContactPage = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormValues>();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [hoveredField, setHoveredField] = useState<string | null>(null);

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us a detailed message',
      action: 'info@digitaldude.online',
      href: 'mailto:info@digitaldude.online',
      color: 'text-primary'
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our team',
      action: '+44 (0) 123 456 789',
      href: 'tel:+440123456789',
      color: 'text-accent'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Quick questions & support',
      action: 'Start Chat',
      href: '#',
      color: 'text-primary'
    },
    {
      icon: Calendar,
      title: 'Schedule a Call',
      description: 'Book a free consultation',
      action: 'Book Now',
      href: '/onboarding',
      color: 'text-accent'
    }
  ];

  const projectTypes = [
    "Custom Software Development",
    "AI & Machine Learning Solutions",
    "Web & Mobile Applications",
    "SaaS Platform Development",
    "Marketplace Development",
    "E-commerce Solutions",
    "Cloud & DevOps Services",
    "Other"
  ];

  const budgetOptions = [
    "Not sure yet",
    "Under £10K",
    "£10K - £25K",
    "£25K - £50K",
    "£50K - £100K",
    "Over £100K"
  ];

  const timelineOptions = [
    "ASAP",
    "1-3 months",
    "3-6 months",
    "6-12 months",
    "12+ months",
    "Just exploring"
  ];

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsSuccess(false);
    setIsError(false);
    
    try {
      const subject = encodeURIComponent(`New Project Inquiry from ${data.name}`);
      const body = encodeURIComponent(`Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || 'N/A'}
Company: ${data.company || 'N/A'}

Project Details:
Type: ${data.projectType || 'N/A'}
Budget: ${data.budget || 'N/A'}
Timeline: ${data.timeline || 'N/A'}

Description:
${data.projectDescription}
`);
      
      window.location.href = `mailto:info@digitaldude.online?subject=${subject}&body=${body}`;
      
      setIsSuccess(true);
      reset();
    } catch (error) {
      setIsError(true);
    }
  };
  
  const inputStyles = "w-full bg-surface border border-border rounded-md py-3 px-4 text-text-primary outline-none focus:ring-2 focus:ring-primary transition-all duration-300";

  return (
    <>
      <Seo
        title="Contact Us | Free Software Consultation & Quote"
        description="Get a free consultation for your custom software project. Discuss your ideas with our expert team & receive a detailed project roadmap."
        type="website"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact The Digital Dude",
          "description": "Get a free consultation for your custom software project. Discuss your ideas with our expert team & receive a detailed project roadmap.",
          "url": "https://www.digitaldude.co.uk/contact",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+44-123-456-789",
            "contactType": "Sales",
            "email": "info@digitaldude.online",
            "availableLanguage": "en"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "London",
            "addressCountry": "UK"
          }
        }}
      />
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-24 pb-32 min-h-screen bg-gradient-to-br from-background via-background/98 to-surface/5"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Let's Build Your <span className="gradient-rgb">Dream Project</span> Together
            </motion.h1>
            <motion.p 
              className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ready to transform your vision into reality? Share your project details below and let's start an amazing journey of <span className="gradient-rgb">innovation</span> and <span className="gradient-rgb">growth</span> together.
            </motion.p>
            
            {/* Response time indicator */}
            <motion.div
              className="flex items-center justify-center gap-2 mt-6 text-sm text-text-secondary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Clock className="w-4 h-4 text-accent" />
              <span>We typically respond within 2-4 hours</span>
            </motion.div>
          </div>

          {/* Enhanced Contact methods */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <motion.a
                  key={index}
                  href={method.href}
                  className="block"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card className="p-6 bg-surface/10 backdrop-blur-sm border border-border/10 hover:border-primary/20 transition-all duration-300 group h-full">
                    <div className="relative">
                      <IconComponent className={`w-8 h-8 ${method.color} mx-auto mb-3 group-hover:scale-110 transition-transform`} />
                      <h3 className="font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors">{method.title}</h3>
                      <p className="text-sm text-text-secondary mb-3 group-hover:text-text-primary/80 transition-colors">{method.description}</p>
                      <p className="text-sm font-medium text-primary">{method.action}</p>
                    </div>
                  </Card>
                </motion.a>
              );
            })}
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <MotionDiv
                className="lg:col-span-2"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <Card className="p-8 bg-surface/10 backdrop-blur-sm border border-border/10 hover:border-primary/20 transition-all duration-300 card-gradient-hover group">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          onHoverStart={() => setHoveredField('name')}
                          onHoverEnd={() => setHoveredField(null)}
                        >
                          <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">Name *</label>
                          <input 
                            id="name" 
                            type="text" 
                            {...register('name', { required: 'Name is required' })} 
                            className={`${inputStyles} ${hoveredField === 'name' ? 'ring-2 ring-primary/50' : ''} transition-all duration-300`}
                            aria-invalid={errors.name ? "true" : "false"} 
                          />
                          {errors.name && <p className="text-red-400 mt-1 text-sm" role="alert">{errors.name.message}</p>}
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          onHoverStart={() => setHoveredField('email')}
                          onHoverEnd={() => setHoveredField(null)}
                        >
                          <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">Email *</label>
                          <input 
                            id="email" 
                            type="email" 
                            {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' }})} 
                            className={`${inputStyles} ${hoveredField === 'email' ? 'ring-2 ring-primary/50' : ''} transition-all duration-300`}
                            aria-invalid={errors.email ? "true" : "false"} 
                          />
                          {errors.email && <p className="text-red-400 mt-1 text-sm" role="alert">{errors.email.message}</p>}
                        </motion.div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          onHoverStart={() => setHoveredField('phone')}
                          onHoverEnd={() => setHoveredField(null)}
                        >
                          <label htmlFor="phone" className="block text-sm font-medium text-text-secondary mb-2">Phone (Optional)</label>
                          <input 
                            id="phone" 
                            type="tel" 
                            {...register('phone')} 
                            className={`${inputStyles} ${hoveredField === 'phone' ? 'ring-2 ring-primary/50' : ''} transition-all duration-300`}
                          />
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          onHoverStart={() => setHoveredField('company')}
                          onHoverEnd={() => setHoveredField(null)}
                        >
                          <label htmlFor="company" className="block text-sm font-medium text-text-secondary mb-2">Company (Optional)</label>
                          <input 
                            id="company" 
                            type="text" 
                            {...register('company')} 
                            className={`${inputStyles} ${hoveredField === 'company' ? 'ring-2 ring-primary/50' : ''} transition-all duration-300`}
                          />
                        </motion.div>
                    </div>
                    
                    {/* Project Details Section */}
                    <div className="border-t border-border/30 pt-6">
                      <h3 className="text-lg font-semibold text-text-primary mb-4">Project Details</h3>
                      <div className="grid sm:grid-cols-2 gap-6">
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          onHoverStart={() => setHoveredField('projectType')}
                          onHoverEnd={() => setHoveredField(null)}
                        >
                          <label htmlFor="projectType" className="block text-sm font-medium text-text-secondary mb-2">Project Type</label>
                          <select 
                            id="projectType" 
                            {...register('projectType')} 
                            className={`${inputStyles} ${hoveredField === 'projectType' ? 'ring-2 ring-primary/50' : ''} transition-all duration-300`}
                          >
                            <option value="">Select a project type</option>
                            {projectTypes.map((type, index) => (
                              <option key={index} value={type}>{type}</option>
                            ))}
                          </select>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          onHoverStart={() => setHoveredField('budget')}
                          onHoverEnd={() => setHoveredField(null)}
                        >
                          <label htmlFor="budget" className="block text-sm font-medium text-text-secondary mb-2">Estimated Budget</label>
                          <select 
                            id="budget" 
                            {...register('budget')} 
                            className={`${inputStyles} ${hoveredField === 'budget' ? 'ring-2 ring-primary/50' : ''} transition-all duration-300`}
                          >
                            <option value="">Select a budget range</option>
                            {budgetOptions.map((budget, index) => (
                              <option key={index} value={budget}>{budget}</option>
                            ))}
                          </select>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          onHoverStart={() => setHoveredField('timeline')}
                          onHoverEnd={() => setHoveredField(null)}
                        >
                          <label htmlFor="timeline" className="block text-sm font-medium text-text-secondary mb-2">Timeline</label>
                          <select 
                            id="timeline" 
                            {...register('timeline')} 
                            className={`${inputStyles} ${hoveredField === 'timeline' ? 'ring-2 ring-primary/50' : ''} transition-all duration-300`}
                          >
                            <option value="">Select a timeline</option>
                            {timelineOptions.map((timeline, index) => (
                              <option key={index} value={timeline}>{timeline}</option>
                            ))}
                          </select>
                        </motion.div>
                      </div>
                    </div>
                    
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      onHoverStart={() => setHoveredField('project')}
                      onHoverEnd={() => setHoveredField(null)}
                    >
                        <label htmlFor="projectDescription" className="block text-sm font-medium text-text-secondary mb-2">Project Description *</label>
                        <textarea 
                          id="projectDescription" 
                          rows={6} 
                          {...register('projectDescription', { required: 'Please describe your project.' })} 
                          className={`${inputStyles} ${hoveredField === 'project' ? 'ring-2 ring-primary/50' : ''} transition-all duration-300 resize-none`}
                          aria-invalid={errors.projectDescription ? "true" : "false"} 
                          placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                        />
                        {errors.projectDescription && <p className="text-red-400 mt-1 text-sm" role="alert">{errors.projectDescription.message}</p>}
                    </motion.div>
                    <motion.div 
                      className="text-left"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                        <Button 
                          type="submit" 
                          disabled={isSubmitting} 
                          size="lg" 
                          leftIcon={!isSubmitting && <Send size={18} />}
                          className="relative overflow-hidden group w-full md:w-auto"
                        >
                          <span className="relative z-10">
                            {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                          </span>
                          {!isSubmitting && (
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary"
                              animate={{
                                x: ['-100%', '100%']
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "linear"
                              }}
                            />
                          )}
                        </Button>
                    </motion.div>
                  </form>
                  
                  {/* Success/Error Messages */}
                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-6 p-4 bg-green-900/50 border border-green-500/50 rounded-lg flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <p className="text-green-400">Message sent! We'll be in touch soon.</p>
                    </motion.div>
                  )}
                  {isError && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-6 p-4 bg-red-900/50 border border-red-500/50 rounded-lg"
                    >
                      <p className="text-red-400">An error occurred. Please try again.</p>
                    </motion.div>
                  )}
                </Card>
            </MotionDiv>

            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
                <Card className="p-6 bg-surface/10 backdrop-blur-sm border border-border/10 hover:border-primary/20 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-text-primary mb-6 flex items-center gap-2">
                    <Building className="w-5 h-5 text-primary" />
                    Contact Information
                  </h3>
                  <div className="space-y-4 text-text-secondary">
                      <motion.div 
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-surface/20 transition-all duration-300 cursor-pointer"
                        whileHover={{ scale: 1.01, x: 2 }}
                      >
                          <Mail className="w-5 h-5 mt-1 text-primary" />
                          <div>
                              <p className="font-semibold text-text-primary">Email</p>
                              <a href="mailto:info@digitaldude.co.uk" className="hover:text-primary transition-colors">info@digitaldude.co.uk</a>
                          </div>
                      </motion.div>
                      <motion.div 
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-surface/20 transition-all duration-300 cursor-pointer"
                        whileHover={{ scale: 1.01, x: 2 }}
                      >
                          <Phone className="w-5 h-5 mt-1 text-accent" />
                          <div>
                              <p className="font-semibold text-text-primary">Phone</p>
                              <a href="tel:+440123456789" className="hover:text-primary transition-colors">+44 (0) 123 456 789</a>
                          </div>
                      </motion.div>
                      <motion.div 
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-surface/20 transition-all duration-300"
                        whileHover={{ scale: 1.01, x: 2 }}
                      >
                          <MapPin className="w-5 h-5 mt-1 text-primary" />
                          <div>
                              <p className="font-semibold text-text-primary">Address</p>
                              <p>123 Tech Avenue, London, UK</p>
                          </div>
                      </motion.div>
                      <motion.div 
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-surface/20 transition-all duration-300"
                        whileHover={{ scale: 1.01, x: 2 }}
                      >
                          <Globe className="w-5 h-5 mt-1 text-accent" />
                          <div>
                              <p className="font-semibold text-text-primary">Timezone</p>
                              <p>GMT (London Time)</p>
                          </div>
                      </motion.div>
                      <motion.div 
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-surface/20 transition-all duration-300"
                        whileHover={{ scale: 1.01, x: 2 }}
                      >
                          <Clock className="w-5 h-5 mt-1 text-primary" />
                          <div>
                              <p className="font-semibold text-text-primary">Business Hours</p>
                              <p>Mon - Fri: 9:00 AM - 6:00 PM GMT</p>
                          </div>
                      </motion.div>
                  </div>
                </Card>
            </motion.div>
          </div>

          {/* Why Choose Us Section - moved outside the grid to prevent overlapping */}
          <motion.div 
            className="max-w-6xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 bg-surface/10 backdrop-blur-sm border border-border/10 hover:border-accent/20 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center gap-3">
                <Shield className="w-6 h-6 text-accent" />
                Why Choose Us?
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-primary/5 border border-primary/10">
                  <Zap className="w-6 h-6 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-text-primary">Rapid Development</p>
                    <p className="text-sm text-text-secondary mt-1">6-16 week MVP delivery with our agile methodology</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-primary/5 border border-primary/10">
                  <TrendingUp className="w-6 h-6 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-text-primary">Proven Results</p>
                    <p className="text-sm text-text-secondary mt-1">40-60% efficiency gains for our clients</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-primary/5 border border-primary/10">
                  <Users className="w-6 h-6 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-text-primary">Expert Team</p>
                    <p className="text-sm text-text-secondary mt-1">5+ years average experience in cutting-edge tech</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* What happens next section - moved to bottom for better layout */}
          <motion.div
            className="max-w-4xl mx-auto mb-32"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-gradient-to-br from-primary/5 via-primary/2 to-accent/5 border border-primary/10 hover:border-primary/20 transition-all duration-300">
                <h4 className="font-semibold text-text-primary mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  What happens next?
                </h4>
                <div className="space-y-3 text-sm text-text-secondary">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary mt-0.5">1</div>
                    <span>We'll review your inquiry within 2-4 hours</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary mt-0.5">2</div>
                    <span>Schedule a free consultation call</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary mt-0.5">3</div>
                    <span>Provide detailed project proposal</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary mt-0.5">4</div>
                    <span>Begin development with transparent progress updates</span>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 bg-gradient-to-br from-accent/5 via-accent/2 to-primary/5 border border-accent/10 hover:border-accent/20 transition-all duration-300">
                <h4 className="font-semibold text-text-primary mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  Our Process
                </h4>
                <div className="space-y-3 text-sm text-text-secondary">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-xs font-bold text-accent mt-0.5">1</div>
                    <span>Discovery & Strategy Session</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-xs font-bold text-accent mt-0.5">2</div>
                    <span>UI/UX Design & Prototyping</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-xs font-bold text-accent mt-0.5">3</div>
                    <span>Agile Development Sprints</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-xs font-bold text-accent mt-0.5">4</div>
                    <span>Launch & Ongoing Support</span>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </MotionDiv>
    </>
  );
};

export default ContactPage;