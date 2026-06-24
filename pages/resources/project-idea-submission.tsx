import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Lightbulb, FileText, Users, Calendar, Zap, TrendingUp, MessageCircle, CheckCircle } from 'lucide-react';
import Seo from '../../components/seo/SEO';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

const ProjectIdeaSubmissionPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    projectName: '',
    projectDescription: '',
    industry: '',
    targetAudience: '',
    keyFeatures: '',
    technicalRequirements: '',
    budgetRange: '',
    timeline: '',
    teamSize: '',
    additionalInfo: ''
  });

  const industries = [
    'Technology',
    'Healthcare',
    'Finance',
    'E-commerce',
    'Education',
    'Manufacturing',
    'Retail',
    'Media & Entertainment',
    'Transportation',
    'Real Estate',
    'Other'
  ];

  const budgetRanges = [
    'Not sure yet',
    'Under £10K',
    '£10K - £25K',
    '£25K - £50K',
    '£50K - £100K',
    'Over £100K'
  ];

  const timelineOptions = [
    'ASAP',
    '1-3 months',
    '3-6 months',
    '6-12 months',
    '12+ months',
    'Just exploring'
  ];

  const teamSizes = [
    'Just me',
    '2-5 people',
    '5-10 people',
    '10-50 people',
    '50+ people'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send this to your backend
    console.log('Project idea submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        projectName: '',
        projectDescription: '',
        industry: '',
        targetAudience: '',
        keyFeatures: '',
        technicalRequirements: '',
        budgetRange: '',
        timeline: '',
        teamSize: '',
        additionalInfo: ''
      });
    }, 5000);
  };

  const features = [
    {
      icon: Lightbulb,
      title: 'Idea Validation',
      description: 'We help validate your concept and identify potential challenges early.'
    },
    {
      icon: FileText,
      title: 'Detailed Documentation',
      description: 'Receive comprehensive documentation of your project requirements.'
    },
    {
      icon: Users,
      title: 'Team Matching',
      description: 'Get matched with the perfect team for your project needs.'
    },
    {
      icon: Calendar,
      title: 'Timeline Planning',
      description: 'Realistic timeline estimation with milestone planning.'
    },
    {
      icon: Zap,
      title: 'Tech Stack Recommendation',
      description: 'Expert recommendations on the best technologies for your project.'
    },
    {
      icon: TrendingUp,
      title: 'ROI Analysis',
      description: 'Understand the potential return on investment for your project.'
    }
  ];

  return (
    <>
      <Seo
        title="Submit Your Project Idea | Get a Free Consultation"
        description="Share your software project idea with our team. We'll provide a free consultation, detailed analysis, and roadmap to bring your vision to life."
        url="https://www.digitaldude.co.uk/resources/project-idea-submission"
      />
      
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Submit Your Project Idea
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Share your vision with our team and get a free consultation with a detailed project analysis
            </p>
          </motion.div>

          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="p-6 text-center group hover:bg-surface/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">{feature.title}</h3>
                  <p className="text-text-secondary text-sm">{feature.description}</p>
                </Card>
              );
            })}
          </motion.div>

          {/* Submission Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-text-primary mb-4">Thank You for Your Submission!</h2>
                  <p className="text-text-secondary mb-6">
                    We've received your project idea and our team will review it shortly. 
                    We typically respond within 2-4 hours during business hours.
                  </p>
                  <p className="text-text-secondary">
                    In the meantime, feel free to explore our <a href="/resources" className="text-primary hover:underline">resources</a> or 
                    check out our <a href="/portfolio" className="text-primary hover:underline">portfolio</a> for inspiration.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-text-primary mb-6">Tell Us About Your Project</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="projectName" className="block text-sm font-medium text-text-secondary mb-2">
                          Project Name *
                        </label>
                        <input
                          type="text"
                          id="projectName"
                          name="projectName"
                          value={formData.projectName}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-surface border border-border rounded-md py-3 px-4 text-text-primary focus:ring-2 focus:ring-primary focus:border-primary transition"
                          placeholder="e.g., Customer Management System"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="industry" className="block text-sm font-medium text-text-secondary mb-2">
                          Industry *
                        </label>
                        <select
                          id="industry"
                          name="industry"
                          value={formData.industry}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-surface border border-border rounded-md py-3 px-4 text-text-primary focus:ring-2 focus:ring-primary focus:border-primary transition"
                        >
                          <option value="">Select your industry</option>
                          {industries.map((industry) => (
                            <option key={industry} value={industry}>{industry}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="projectDescription" className="block text-sm font-medium text-text-secondary mb-2">
                        Project Description *
                      </label>
                      <textarea
                        id="projectDescription"
                        name="projectDescription"
                        value={formData.projectDescription}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full bg-surface border border-border rounded-md py-3 px-4 text-text-primary focus:ring-2 focus:ring-primary focus:border-primary transition"
                        placeholder="Describe your project in detail. What problem are you trying to solve? What are your main goals?"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="targetAudience" className="block text-sm font-medium text-text-secondary mb-2">
                          Target Audience *
                        </label>
                        <input
                          type="text"
                          id="targetAudience"
                          name="targetAudience"
                          value={formData.targetAudience}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-surface border border-border rounded-md py-3 px-4 text-text-primary focus:ring-2 focus:ring-primary focus:border-primary transition"
                          placeholder="e.g., Small business owners, Healthcare professionals"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="teamSize" className="block text-sm font-medium text-text-secondary mb-2">
                          Team Size *
                        </label>
                        <select
                          id="teamSize"
                          name="teamSize"
                          value={formData.teamSize}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-surface border border-border rounded-md py-3 px-4 text-text-primary focus:ring-2 focus:ring-primary focus:border-primary transition"
                        >
                          <option value="">Select team size</option>
                          {teamSizes.map((size) => (
                            <option key={size} value={size}>{size}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="keyFeatures" className="block text-sm font-medium text-text-secondary mb-2">
                        Key Features *
                      </label>
                      <textarea
                        id="keyFeatures"
                        name="keyFeatures"
                        value={formData.keyFeatures}
                        onChange={handleInputChange}
                        required
                        rows={3}
                        className="w-full bg-surface border border-border rounded-md py-3 px-4 text-text-primary focus:ring-2 focus:ring-primary focus:border-primary transition"
                        placeholder="List the main features and functionality you envision for your project"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="technicalRequirements" className="block text-sm font-medium text-text-secondary mb-2">
                        Technical Requirements
                      </label>
                      <textarea
                        id="technicalRequirements"
                        name="technicalRequirements"
                        value={formData.technicalRequirements}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full bg-surface border border-border rounded-md py-3 px-4 text-text-primary focus:ring-2 focus:ring-primary focus:border-primary transition"
                        placeholder="Any specific technologies, platforms, or integrations you require (optional)"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label htmlFor="budgetRange" className="block text-sm font-medium text-text-secondary mb-2">
                          Budget Range
                        </label>
                        <select
                          id="budgetRange"
                          name="budgetRange"
                          value={formData.budgetRange}
                          onChange={handleInputChange}
                          className="w-full bg-surface border border-border rounded-md py-3 px-4 text-text-primary focus:ring-2 focus:ring-primary focus:border-primary transition"
                        >
                          <option value="">Select budget range</option>
                          {budgetRanges.map((range) => (
                            <option key={range} value={range}>{range}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="timeline" className="block text-sm font-medium text-text-secondary mb-2">
                          Timeline
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full bg-surface border border-border rounded-md py-3 px-4 text-text-primary focus:ring-2 focus:ring-primary focus:border-primary transition"
                        >
                          <option value="">Select timeline</option>
                          {timelineOptions.map((option) => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div className="flex items-end">
                        <Button type="submit" className="w-full">
                          <Send className="w-4 h-4 mr-2" />
                          Submit Project Idea
                        </Button>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="additionalInfo" className="block text-sm font-medium text-text-secondary mb-2">
                        Additional Information
                      </label>
                      <textarea
                        id="additionalInfo"
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleInputChange}
                        rows={2}
                        className="w-full bg-surface border border-border rounded-md py-3 px-4 text-text-primary focus:ring-2 focus:ring-primary focus:border-primary transition"
                        placeholder="Any other details you'd like to share about your project (optional)"
                      />
                    </div>
                  </form>
                </>
              )}
            </Card>
          </motion.div>

          {/* Support Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-4xl mx-auto mt-12"
          >
            <Card className="p-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-text-primary mb-4">Need Help Crafting Your Idea?</h2>
                <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
                  Not sure how to articulate your project idea? Our team is here to help. 
                  Schedule a free consultation to discuss your vision and we'll help you structure your project requirements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" onClick={() => window.location.href = '/contact'}>
                    Schedule Free Consultation
                  </Button>
                  <Button variant="outline" size="lg" onClick={() => window.location.href = '/resources'}>
                    Explore Resources
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ProjectIdeaSubmissionPage;