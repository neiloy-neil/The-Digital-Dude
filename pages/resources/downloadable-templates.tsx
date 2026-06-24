import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Code, BookOpen, Star, Users, Check } from 'lucide-react';
import Seo from '../../components/seo/SEO';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

interface Template {
  id: string;
  title: string;
  description: string;
  category: string;
  type: 'whitepaper' | 'guide' | 'template';
  image: string;
  downloadUrl: string;
  fileSize: string;
  pages: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  tags: string[];
  featured: boolean;
  downloads: number;
  rating: number;
  publishDate: string;
  includes: string[];
}

const templates: Template[] = [
  {
    id: 'business-requirements-template',
    title: 'Business Requirements Template',
    description: 'Comprehensive template for documenting software project requirements with sections for functional specifications, user stories, and acceptance criteria.',
    category: 'Project Planning',
    type: 'template',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
    downloadUrl: '/downloads/business-requirements-template.docx',
    fileSize: '0.8 MB',
    pages: 24,
    difficulty: 'Beginner',
    tags: ['Requirements', 'Documentation', 'Planning'],
    featured: true,
    downloads: 0,
    rating: 5.0,
    publishDate: '2024-04-15',
    includes: [
      'Project Overview Template',
      'Stakeholder Analysis Worksheet',
      'Functional Requirements Sections',
      'Non-functional Requirements Guide',
      'User Story Templates',
      'Acceptance Criteria Framework',
      'Technical Specifications Template'
    ]
  },
  {
    id: 'project-planning-toolkit',
    title: 'Software Project Planning Toolkit',
    description: 'Complete set of templates and tools for planning software development projects with timeline estimation, resource allocation, and risk assessment.',
    category: 'Project Management',
    type: 'template',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop',
    downloadUrl: '/downloads/project-planning-toolkit.xlsx',
    fileSize: '1.2 MB',
    pages: 15,
    difficulty: 'Intermediate',
    tags: ['Project Planning', 'Timeline', 'Resource Management'],
    featured: true,
    downloads: 0,
    rating: 5.0,
    publishDate: '2024-04-15',
    includes: [
      'Project Charter Template',
      'Work Breakdown Structure',
      'Timeline Estimation Calculator',
      'Resource Allocation Matrix',
      'Risk Assessment Framework',
      'Budget Planning Template',
      'Communication Plan Template'
    ]
  },
  {
    id: 'vendor-selection-checklist',
    title: 'Software Vendor Selection Checklist',
    description: 'Comprehensive checklist for evaluating and selecting software development vendors with scoring criteria and comparison matrix.',
    category: 'Vendor Evaluation',
    type: 'template',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop',
    downloadUrl: '/downloads/vendor-selection-checklist.pdf',
    fileSize: '0.5 MB',
    pages: 18,
    difficulty: 'Beginner',
    tags: ['Vendor Selection', 'Evaluation', 'Comparison'],
    featured: true,
    downloads: 0,
    rating: 5.0,
    publishDate: '2024-04-15',
    includes: [
      'Vendor Evaluation Criteria',
      'Scoring Matrix Template',
      'Comparison Worksheet',
      'Due Diligence Checklist',
      'Contract Review Guidelines',
      'Reference Check Template',
      'Decision Matrix Framework'
    ]
  },
  {
    id: 'technical-specifications-template',
    title: 'Technical Specifications Template',
    description: 'Detailed template for documenting technical requirements, system architecture, and integration specifications for software projects.',
    category: 'Technical Documentation',
    type: 'template',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop',
    downloadUrl: '/downloads/technical-specifications-template.docx',
    fileSize: '0.9 MB',
    pages: 32,
    difficulty: 'Advanced',
    tags: ['Technical Specs', 'Architecture', 'Documentation'],
    featured: false,
    downloads: 0,
    rating: 5.0,
    publishDate: '2024-04-15',
    includes: [
      'System Architecture Template',
      'Database Design Specifications',
      'API Documentation Framework',
      'Security Requirements Template',
      'Performance Criteria',
      'Integration Specifications',
      'Deployment Guidelines'
    ]
  },
  {
    id: 'agile-project-template',
    title: 'Agile Project Management Template',
    description: 'Complete set of templates for implementing agile methodologies with sprint planning, backlog management, and progress tracking.',
    category: 'Project Management',
    type: 'template',
    image: 'https://images.unsplash.com/photo-1558346490-a72e53ae6b91?w=400&h=250&fit=crop',
    downloadUrl: '/downloads/agile-project-template.xlsx',
    fileSize: '1.1 MB',
    pages: 20,
    difficulty: 'Intermediate',
    tags: ['Agile', 'Scrum', 'Project Management'],
    featured: false,
    downloads: 0,
    rating: 5.0,
    publishDate: '2024-04-15',
    includes: [
      'Sprint Planning Template',
      'Product Backlog Template',
      'User Story Mapping',
      'Burndown Chart Template',
      'Retrospective Worksheet',
      'Daily Standup Guide',
      'Release Planning Framework'
    ]
  },
  {
    id: 'ux-design-brief',
    title: 'UX Design Brief Template',
    description: 'Professional template for creating comprehensive UX design briefs with user research, wireframing, and prototyping guidelines.',
    category: 'Design',
    type: 'template',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=250&fit=crop',
    downloadUrl: '/downloads/ux-design-brief.docx',
    fileSize: '0.7 MB',
    pages: 16,
    difficulty: 'Beginner',
    tags: ['UX Design', 'UI Design', 'User Research'],
    featured: false,
    downloads: 0,
    rating: 5.0,
    publishDate: '2024-04-15',
    includes: [
      'Project Goals Template',
      'User Research Framework',
      'Personas Template',
      'User Journey Mapping',
      'Wireframing Guidelines',
      'Prototyping Checklist',
      'Design Review Process'
    ]
  }
];

const DownloadableTemplatesPage = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send this to your backend
    console.log('Subscribed with email:', email);
    setSubscribed(true);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'whitepaper': return FileText;
      case 'guide': return BookOpen;
      case 'template': return Code;
      default: return FileText;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'whitepaper': return 'text-blue-400 bg-blue-400/20';
      case 'guide': return 'text-green-400 bg-green-400/20';
      case 'template': return 'text-purple-400 bg-purple-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const categories = ['All', ...Array.from(new Set(templates.map(t => t.category)))];

  const [activeFilter, setActiveFilter] = useState('All');

  const filteredTemplates = activeFilter === 'All' 
    ? templates 
    : templates.filter(template => template.category === activeFilter);

  return (
    <>
      <Seo
        title="Free Downloadable Templates | Business Requirements & Project Planning"
        description="Download free templates for business requirements, project planning, vendor selection, and technical specifications. Accelerate your software development process."
        url="https://www.digitaldude.co.uk/resources/downloadable-templates"
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
              Downloadable Templates
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Free professional templates to help you plan, document, and execute your software projects with confidence
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-text-primary">{templates.length}</div>
              <div className="text-text-secondary">Professional Templates</div>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-text-primary">
                {templates.reduce((sum, t) => sum + t.pages, 0)}
              </div>
              <div className="text-text-secondary">Total Pages of Content</div>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Download className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-text-primary">
                {templates.reduce((sum, t) => sum + t.downloads, 0)}
              </div>
              <div className="text-text-secondary">Total Downloads</div>
            </Card>
          </motion.div>

          {/* Filter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveFilter(category)}
                variant={activeFilter === category ? 'primary' : 'secondary'}
                size="sm"
                className="capitalize rounded-full px-4 py-2 transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Templates Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {filteredTemplates.map((template) => {
              const IconComponent = getTypeIcon(template.type);
              return (
                <Card key={template.id} className="group overflow-hidden hover:bg-surface/30 transition-all duration-300 h-full">
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img
                      src={template.image}
                      alt={template.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(template.type)}`}>
                        <IconComponent className="w-3 h-3" />
                        {template.type.charAt(0).toUpperCase() + template.type.slice(1)}
                      </span>
                    </div>
                    {template.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-primary text-white px-2 py-1 rounded-full text-xs font-medium">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-3 flex-1 flex flex-col">
                    <div className="flex items-start justify-between">
                      <span className="text-xs text-text-secondary">{template.category}</span>
                      <div className="flex items-center gap-1 text-xs text-text-secondary">
                        <Star className="w-3 h-3 fill-current text-yellow-400" />
                        <span>{template.rating}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-text-primary group-hover:text-primary transition-colors duration-300">
                      {template.title}
                    </h3>

                    <p className="text-text-secondary text-sm leading-relaxed flex-1">
                      {template.description}
                    </p>

                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-1">
                        {template.tags.map(tag => (
                          <span key={tag} className="px-2 py-1 bg-surface/30 text-text-secondary rounded-full text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="text-xs text-text-secondary">
                        <div className="flex items-center justify-between">
                          <span>{template.fileSize}</span>
                          <span>{template.pages} pages</span>
                          <span className={`px-2 py-1 rounded text-xs ${
                            template.difficulty === 'Beginner' ? 'bg-green-400/20 text-green-400' :
                            template.difficulty === 'Intermediate' ? 'bg-yellow-400/20 text-yellow-400' :
                            'bg-red-400/20 text-red-400'
                          }`}>
                            {template.difficulty}
                          </span>
                        </div>
                      </div>

                      <div className="pt-2">
                        <details className="group">
                          <summary className="list-none cursor-pointer text-sm text-text-secondary flex items-center justify-between">
                            <span>What's included</span>
                            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </summary>
                          <ul className="mt-2 space-y-1 text-xs text-text-secondary">
                            {template.includes.map((item, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </details>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <Button 
                        className="w-full group/btn"
                        onClick={() => {
                          // In a real implementation, you would track downloads
                          console.log(`Downloading ${template.title}`);
                        }}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download Template ({template.fileSize})
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                Get New Templates Delivered
              </h2>
              <p className="text-text-secondary mb-6">
                Join our newsletter to receive updates when we release new templates and resources.
              </p>
              
              {subscribed ? (
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <p className="text-green-500 font-medium">Thank you for subscribing!</p>
                  <p className="text-green-500/80 text-sm mt-1">Check your email for confirmation.</p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 bg-surface/20 border border-border rounded-lg focus:border-primary focus:outline-none"
                    required
                  />
                  <Button type="submit" size="lg">
                    Subscribe
                  </Button>
                </form>
              )}
              
              <p className="text-xs text-text-secondary mt-4">
                No spam. Unsubscribe at any time.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default DownloadableTemplatesPage;