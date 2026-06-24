import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ArrowRight, ArrowLeft, User, Building, Calendar, Target, Lightbulb, FileText, Code, Phone } from 'lucide-react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import SEO from '../../components/seo/SEO';

// Lazy load large components to reduce initial bundle size
const MotionDiv = motion.div;

interface FormData {
  // Step 1: Contact Info
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  role: string;
  companySize: string;
  industry: string;
  
  // Step 2: Project Details
  projectType: string;
  timeline: string;
  budget: string;
  description: string;
  existingSolution: string;
  competitors: string;
  
  // Step 3: Technical Requirements
  features: string[];
  integrations: string[];
  platforms: string[];
  techPreferences: string;
  hosting: string;
  security: string[];
  
  // Step 4: Business Goals
  primaryGoal: string;
  successMetrics: string[];
  targetUsers: string;
  monetization: string;
  constraints: string;
  additionalInfo: string;
}

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  role: '',
  companySize: '',
  industry: '',
  projectType: '',
  timeline: '',
  budget: '',
  description: '',
  existingSolution: '',
  competitors: '',
  features: [],
  integrations: [],
  platforms: [],
  techPreferences: '',
  hosting: '',
  security: [],
  primaryGoal: '',
  successMetrics: [],
  targetUsers: '',
  monetization: '',
  constraints: '',
  additionalInfo: ''
};

const projectTypes = [
  'Custom SaaS Platform',
  'Mobile Application',
  'Web Application',
  'AI/ML Solution',
  'E-commerce Platform',
  'Marketplace',
  'API Development',
  'Legacy System Modernization',
  'Other'
];

const timelines = [
  '1-3 months',
  '3-6 months',
  '6-12 months',
  '12+ months',
  'Flexible'
];

const budgets = [
  '£10k - £25k',
  '£25k - £50k',
  '£50k - £100k',
  '£100k - £250k',
  '£250k+',
  'To be discussed'
];

const features = [
  'User Authentication',
  'Payment Processing',
  'Real-time Chat',
  'File Upload/Storage',
  'Analytics Dashboard',
  'API Development',
  'Mobile App',
  'Admin Panel',
  'Multi-tenancy',
  'Third-party Integrations'
];

const platforms = [
  'Web (Desktop)',
  'Mobile (iOS)',
  'Mobile (Android)',
  'Progressive Web App',
  'Desktop Application'
];

const companySizes = [
  '1-10 employees',
  '11-50 employees',
  '51-200 employees',
  '201-500 employees',
  '501-1000 employees',
  '1000+ employees'
];

const industries = [
  'Technology',
  'Healthcare',
  'Finance',
  'E-commerce',
  'Education',
  'Manufacturing',
  'Real Estate',
  'Transportation',
  'Media & Entertainment',
  'Other'
];

const integrations = [
  'Payment Gateways (Stripe, PayPal)',
  'CRM Systems (Salesforce, HubSpot)',
  'Marketing Tools (Mailchimp, Google Analytics)',
  'Accounting Software (QuickBooks, Xero)',
  'Social Media APIs',
  'ERP Systems',
  'Third-party APIs'
];

const techPreferences = [
  'React/Next.js',
  'Vue.js/Nuxt.js',
  'Angular',
  'Node.js',
  'Python/Django',
  'Java/Spring',
  'PHP/Laravel',
  'Ruby on Rails',
  'No preference'
];

const hostingOptions = [
  'AWS',
  'Google Cloud',
  'Microsoft Azure',
  'Self-hosted',
  'Not sure yet',
  'No preference'
];

const securityRequirements = [
  'GDPR Compliance',
  'HIPAA Compliance',
  'PCI DSS Compliance',
  'SOC 2 Compliance',
  'Data Encryption',
  'Multi-factor Authentication',
  'Regular Security Audits'
];

const successMetricsOptions = [
  'User Engagement',
  'Revenue Growth',
  'Cost Reduction',
  'Customer Satisfaction',
  'Market Share',
  'Operational Efficiency'
];

const monetizationModels = [
  'Subscription (SaaS)',
  'One-time Purchase',
  'Freemium Model',
  'Advertising',
  'Marketplace Fees',
  'Commission-based',
  'Not sure yet'
];

const OnboardingPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = 4;

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleArrayField = (field: keyof FormData, value: string) => {
    const currentArray = formData[field] as string[];
    const newArray = currentArray.includes(value)
      ? currentArray.filter(item => item !== value)
      : [...currentArray, value];
    updateFormData(field, newArray);
  };

  const nextStep = () => {
    // Add validation for required fields
    switch (currentStep) {
      case 1:
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.company) {
          alert('Please fill in all required fields.');
          return;
        }
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
          alert('Please enter a valid email address.');
          return;
        }
        break;
      case 2:
        if (!formData.projectType || !formData.timeline || !formData.budget || !formData.description) {
          alert('Please fill in all required fields.');
          return;
        }
        break;
      default:
        break;
    }
    
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const stepVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-text-primary mb-2">Contact Information</h2>
              <p className="text-text-secondary">Let's start with your basic information</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">First Name *</label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => updateFormData('firstName', e.target.value)}
                  className="w-full bg-surface border border-border rounded-md py-3 px-4 text-text-primary outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                  placeholder="Enter your first name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">Last Name *</label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => updateFormData('lastName', e.target.value)}
                  className="w-full bg-surface border border-border rounded-md py-3 px-4 text-text-primary outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                  placeholder="Enter your last name"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Email Address *</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => updateFormData('email', e.target.value)}
                className="w-full bg-surface border border-border rounded-md py-3 px-4 text-text-primary outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                placeholder="Enter your email address"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateFormData('phone', e.target.value)}
                  className="w-full bg-surface border border-border rounded-md py-3 px-4 text-text-primary outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">Job Title</label>
                <input
                  type="text"
                  value={formData.role}
                  onChange={(e) => updateFormData('role', e.target.value)}
                  className="w-full bg-surface border border-border rounded-md py-3 px-4 text-text-primary outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                  placeholder="e.g., CEO, CTO, Product Manager"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Company Name *</label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => updateFormData('company', e.target.value)}
                className="w-full bg-surface border border-border rounded-md py-3 px-4 text-text-primary outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                placeholder="Enter your company name"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">Company Size</label>
                <select
                  value={formData.companySize}
                  onChange={(e) => updateFormData('companySize', e.target.value)}
                  className="w-full bg-surface border border-border rounded-md py-3 px-4 text-text-primary outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                >
                  <option value="">Select company size</option>
                  {companySizes.map(size => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">Industry</label>
                <select
                  value={formData.industry}
                  onChange={(e) => updateFormData('industry', e.target.value)}
                  className="w-full bg-surface border border-border rounded-md py-3 px-4 text-text-primary outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                >
                  <option value="">Select industry</option>
                  {industries.map(industry => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-text-primary mb-2">Project Overview</h2>
              <p className="text-text-secondary">Tell us about your project vision</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-3">Project Type *</label>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {projectTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => updateFormData('projectType', type)}
                    className={`p-3 rounded-lg border text-left transition-all duration-200 ${
                      formData.projectType === type
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-border bg-surface/20 text-text-secondary hover:border-primary/50'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">Timeline *</label>
                <select
                  value={formData.timeline}
                  onChange={(e) => updateFormData('timeline', e.target.value)}
                  className="w-full bg-surface border border-border rounded-md py-3 px-4 text-text-primary outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                  required
                >
                  <option value="">Select timeline</option>
                  {timelines.map(timeline => (
                    <option key={timeline} value={timeline}>{timeline}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">Budget Range *</label>
                <select
                  value={formData.budget}
                  onChange={(e) => updateFormData('budget', e.target.value)}
                  className="w-full bg-surface border border-border rounded-md py-3 px-4 text-text-primary outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                  required
                >
                  <option value="">Select budget range</option>
                  {budgets.map(budget => (
                    <option key={budget} value={budget}>{budget}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Project Description *</label>
              <textarea
                value={formData.description}
                onChange={(e) => updateFormData('description', e.target.value)}
                rows={4}
                className="w-full bg-surface border border-border rounded-md py-3 px-4 text-text-primary outline-none focus:ring-2 focus:ring-primary transition-all duration-300 resize-none"
                placeholder="Describe your project, its goals, and any specific requirements..."
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Existing Solution</label>
              <textarea
                value={formData.existingSolution}
                onChange={(e) => updateFormData('existingSolution', e.target.value)}
                rows={3}
                className="w-full bg-surface border border-border rounded-md py-3 px-4 text-text-primary outline-none focus:ring-2 focus:ring-primary transition-all duration-300 resize-none"
                placeholder="Are you replacing an existing solution? If so, what are its limitations?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Competitors/Inspiration</label>
              <textarea
                value={formData.competitors}
                onChange={(e) => updateFormData('competitors', e.target.value)}
                rows={3}
                className="w-full bg-surface border border-border rounded-md py-3 px-4 text-text-primary outline-none focus:ring-2 focus:ring-primary transition-all duration-300 resize-none"
                placeholder="Are there any competitors or existing solutions that inspire your project?"
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-text-primary mb-2">Technical Requirements</h2>
              <p className="text-text-secondary">Select the features and platforms you need</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-3">Key Features (Select all that apply)</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {features.map((feature) => (
                  <label key={feature} className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg hover:bg-surface/20 transition-colors">
                    <input
                      type="checkbox"
                      checked={formData.features.includes(feature)}
                      onChange={() => toggleArrayField('features', feature)}
                      className="text-primary focus:ring-primary rounded h-5 w-5"
                    />
                    <span className="text-text-secondary">{feature}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-3">Third-party Integrations (Select all that apply)</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {integrations.map((integration) => (
                  <label key={integration} className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg hover:bg-surface/20 transition-colors">
                    <input
                      type="checkbox"
                      checked={formData.integrations.includes(integration)}
                      onChange={() => toggleArrayField('integrations', integration)}
                      className="text-primary focus:ring-primary rounded h-5 w-5"
                    />
                    <span className="text-text-secondary">{integration}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-3">Target Platforms (Select all that apply)</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {platforms.map((platform) => (
                  <label key={platform} className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg hover:bg-surface/20 transition-colors">
                    <input
                      type="checkbox"
                      checked={formData.platforms.includes(platform)}
                      onChange={() => toggleArrayField('platforms', platform)}
                      className="text-primary focus:ring-primary rounded h-5 w-5"
                    />
                    <span className="text-text-secondary">{platform}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">Technology Preferences</label>
                <select
                  value={formData.techPreferences}
                  onChange={(e) => updateFormData('techPreferences', e.target.value)}
                  className="w-full bg-surface border border-border rounded-md py-3 px-4 text-text-primary outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                >
                  <option value="">No preference</option>
                  {techPreferences.map(tech => (
                    <option key={tech} value={tech}>{tech}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">Hosting Preference</label>
                <select
                  value={formData.hosting}
                  onChange={(e) => updateFormData('hosting', e.target.value)}
                  className="w-full bg-surface border border-border rounded-md py-3 px-4 text-text-primary outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                >
                  <option value="">No preference</option>
                  {hostingOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-3">Security Requirements (Select all that apply)</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {securityRequirements.map((requirement) => (
                  <label key={requirement} className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg hover:bg-surface/20 transition-colors">
                    <input
                      type="checkbox"
                      checked={formData.security.includes(requirement)}
                      onChange={() => toggleArrayField('security', requirement)}
                      className="text-primary focus:ring-primary rounded h-5 w-5"
                    />
                    <span className="text-text-secondary">{requirement}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-text-primary mb-2">Project Goals</h2>
              <p className="text-text-secondary">Help us understand what success looks like</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Primary Business Goal *</label>
              <textarea
                value={formData.primaryGoal}
                onChange={(e) => updateFormData('primaryGoal', e.target.value)}
                rows={3}
                className="w-full bg-surface border border-border rounded-md py-3 px-4 text-text-primary outline-none focus:ring-2 focus:ring-primary transition-all duration-300 resize-none"
                placeholder="What is the main business problem you're trying to solve?"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-3">Success Metrics (Select all that apply)</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {successMetricsOptions.map((metric) => (
                  <label key={metric} className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg hover:bg-surface/20 transition-colors">
                    <input
                      type="checkbox"
                      checked={formData.successMetrics.includes(metric)}
                      onChange={() => toggleArrayField('successMetrics', metric)}
                      className="text-primary focus:ring-primary rounded h-5 w-5"
                    />
                    <span className="text-text-secondary">{metric}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">Target Users</label>
                <input
                  type="text"
                  value={formData.targetUsers}
                  onChange={(e) => updateFormData('targetUsers', e.target.value)}
                  className="w-full bg-surface border border-border rounded-md py-3 px-4 text-text-primary outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                  placeholder="Who will use this product? (e.g., internal team, customers, partners)"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">Monetization Model</label>
                <select
                  value={formData.monetization}
                  onChange={(e) => updateFormData('monetization', e.target.value)}
                  className="w-full bg-surface border border-border rounded-md py-3 px-4 text-text-primary outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                >
                  <option value="">Select model</option>
                  {monetizationModels.map(model => (
                    <option key={model} value={model}>{model}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Project Constraints</label>
              <textarea
                value={formData.constraints}
                onChange={(e) => updateFormData('constraints', e.target.value)}
                rows={3}
                className="w-full bg-surface border border-border rounded-md py-3 px-4 text-text-primary outline-none focus:ring-2 focus:ring-primary transition-all duration-300 resize-none"
                placeholder="Any deadlines, budget constraints, or other limitations we should be aware of?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Additional Information</label>
              <textarea
                value={formData.additionalInfo}
                onChange={(e) => updateFormData('additionalInfo', e.target.value)}
                rows={4}
                className="w-full bg-surface border border-border rounded-md py-3 px-4 text-text-primary outline-none focus:ring-2 focus:ring-primary transition-all duration-300 resize-none"
                placeholder="Any additional information or requirements you'd like us to know about?"
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-slate-900/50 to-slate-800/30 flex items-center justify-center">
        <SEO 
          title="Thank You - Project Onboarding Submitted"
          description="Thank you for submitting your project details. Our team will review your requirements and get back to you within 24 hours."
          url="https://www.digitaldude.co.uk/onboarding/success"
        />
        <MotionDiv
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto px-6"
        >
          <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-500" />
          </div>
          <h1 className="text-4xl font-bold text-text-primary mb-4">Thank You!</h1>
          <p className="text-xl text-text-secondary mb-8">
            We've received your project details and our team will review your requirements. 
            You can expect to hear from us within 24 hours with next steps.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-text-primary mb-2">Discovery Call</h3>
              <p className="text-text-secondary text-sm">
                We'll schedule a 30-minute call to discuss your project in detail and answer any questions.
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-text-primary mb-2">Project Analysis</h3>
              <p className="text-text-secondary text-sm">
                Our team will analyze your requirements and prepare a detailed project proposal.
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-text-primary mb-2">Next Steps</h3>
              <p className="text-text-secondary text-sm">
                We'll present our approach, timeline, and investment required to bring your vision to life.
              </p>
            </Card>
          </div>
          
          <div className="space-y-4">
            <p className="text-text-secondary">
              In the meantime, here are some resources to help you prepare:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button variant="outline" onClick={() => window.open('/resources/saas-mvp-guide.pdf', '_blank')}>
                <FileText className="w-4 h-4 mr-2" />
                SaaS MVP Guide
              </Button>
              <Button variant="outline" onClick={() => window.open('/resources/tech-stack-framework.pdf', '_blank')}>
                <Code className="w-4 h-4 mr-2" />
                Tech Stack Framework
              </Button>
            </div>
            
            <div className="pt-6 border-t border-border">
              <p className="text-text-secondary mb-4">
                Have questions? Reach out to us directly:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={() => window.location.href = '/portfolio'}>View Our Work</Button>
                <Button variant="outline" onClick={() => window.location.href = '/contact'}>
                  <Phone className="w-4 h-4 mr-2" />
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </MotionDiv>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-slate-900/50 to-slate-800/30">
      <SEO
        title="Client Onboarding - Project Intake Form"
        description="Start your custom software development project with our streamlined onboarding process. Share your requirements and let's build something amazing together."
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Client Onboarding",
          "description": "Start your custom software development project with our streamlined onboarding process. Share your requirements and let's build something amazing together.",
          "url": "https://www.digitaldude.co.uk/onboarding"
        }}
      />
      
      <div className="container mx-auto px-6 py-32">
        {/* Progress Bar */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center justify-between mb-4">
            {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                  step <= currentStep ? 'bg-primary text-white' : 'bg-surface/20 text-text-secondary'
                }`}>
                  {step < currentStep ? <CheckCircle className="w-5 h-5" /> : step}
                </div>
                {step < totalSteps && (
                  <div className={`h-1 w-16 md:w-32 mx-2 transition-all duration-300 ${
                    step < currentStep ? 'bg-primary' : 'bg-surface/20'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-text-secondary">Step {currentStep} of {totalSteps}</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="p-8">
            <AnimatePresence mode="wait" custom={currentStep}>
              <MotionDiv
                key={currentStep}
                custom={currentStep}
                variants={stepVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
              >
                {renderStep()}
              </MotionDiv>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-12 pt-8 border-t border-border">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Previous
              </Button>

              {currentStep < totalSteps ? (
                <Button onClick={nextStep} className="flex items-center gap-2">
                  Next
                  <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button onClick={handleSubmit} className="flex items-center gap-2 relative overflow-hidden group">
                  <span className="relative z-10">Submit Project</span>
                  <CheckCircle className="w-4 h-4 relative z-10" />
                  <MotionDiv
                    className="absolute inset-0 bg-gradient-rgb"
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
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OnboardingPage;