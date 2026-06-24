import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Download, Search, FileText, Code, Wrench, BookOpen, 
  Calendar, ChevronRight, ExternalLink, Heart, Archive, Star, Clock 
} from 'lucide-react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import SEO from '../../components/seo/SEO';
import ImageWithFallback from '../../components/ui/ImageWithFallback';

// Lazy load large components to reduce initial bundle size
const MotionDiv: any = motion.div;

interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'whitepaper' | 'guide' | 'template' | 'tool';
  category: string;
  image: string;
  downloadUrl?: string;
  externalUrl?: string;
  fileSize?: string;
  duration?: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  tags: string[];
  featured: boolean;
  downloads: number;
  rating: number;
  publishDate: string;
}

const resources: Resource[] = [
  {
    id: 'saas-mvp-guide',
    title: 'The Complete SaaS MVP Development Guide',
    description: 'A comprehensive 50-page guide covering everything from idea validation to product-market fit for SaaS startups.',
    type: 'whitepaper',
    category: 'SaaS Development',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68e2c6b33d?w=400&h=250&fit=crop',
    downloadUrl: '/resources/saas-mvp-guide.pdf',
    fileSize: '12.5 MB',
    difficulty: 'Intermediate',
    tags: ['SaaS', 'MVP', 'Startups', 'Product Development'],
    featured: true,
    downloads: 2847,
    rating: 4.8,
    publishDate: '2024-01-15'
  },
  {
    id: 'ai-integration-playbook',
    title: 'AI Integration Playbook for Businesses',
    description: 'Step-by-step playbook for integrating AI solutions into existing business processes with real-world case studies.',
    type: 'guide',
    category: 'AI & Machine Learning',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop',
    downloadUrl: '/resources/ai-integration-playbook.pdf',
    fileSize: '8.2 MB',
    difficulty: 'Advanced',
    tags: ['AI', 'Machine Learning', 'Business Strategy', 'Integration'],
    featured: true,
    downloads: 1923,
    rating: 4.9,
    publishDate: '2024-02-20'
  },
  {
    id: 'react-saas-starter',
    title: 'React SaaS Starter Template',
    description: 'Production-ready React/Next.js template with authentication, payments, multi-tenancy, and admin dashboard.',
    type: 'template',
    category: 'Development Templates',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=250&fit=crop',
    externalUrl: 'https://github.com/digital-dude/react-saas-starter',
    difficulty: 'Intermediate',
    tags: ['React', 'Next.js', 'SaaS', 'Template', 'TypeScript'],
    featured: true,
    downloads: 4521,
    rating: 4.7,
    publishDate: '2024-03-10'
  },
  {
    id: 'roi-calculator',
    title: 'Custom Software ROI Calculator',
    description: 'Interactive tool to calculate the return on investment for custom software development projects.',
    type: 'tool',
    category: 'Business Tools',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
    externalUrl: '/tools/roi-calculator',
    duration: '5 minutes',
    difficulty: 'Beginner',
    tags: ['ROI', 'Calculator', 'Business Planning', 'Investment'],
    featured: false,
    downloads: 3204,
    rating: 4.6,
    publishDate: '2024-01-28'
  },
  {
    id: 'tech-stack-decision-framework',
    title: 'Technology Stack Decision Framework',
    description: 'A systematic approach to choosing the right technology stack for your next software project.',
    type: 'whitepaper',
    category: 'Software Architecture',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop',
    downloadUrl: '/resources/tech-stack-framework.pdf',
    fileSize: '6.8 MB',
    difficulty: 'Intermediate',
    tags: ['Architecture', 'Technology', 'Decision Making', 'Development'],
    featured: false,
    downloads: 1567,
    rating: 4.5,
    publishDate: '2024-02-05'
  },
  {
    id: 'api-design-guide',
    title: 'RESTful API Design Best Practices',
    description: 'Complete guide to designing scalable, maintainable APIs with examples and common pitfalls to avoid.',
    type: 'guide',
    category: 'API Development',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop',
    downloadUrl: '/resources/api-design-guide.pdf',
    fileSize: '4.2 MB',
    difficulty: 'Intermediate',
    tags: ['API', 'REST', 'Backend', 'Web Development'],
    featured: false,
    downloads: 2103,
    rating: 4.7,
    publishDate: '2024-01-20'
  },
  {
    id: 'mobile-app-template',
    title: 'React Native Business App Template',
    description: 'Cross-platform mobile app template with navigation, forms, API integration, and offline capabilities.',
    type: 'template',
    category: 'Mobile Development',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop',
    externalUrl: 'https://github.com/digital-dude/rn-business-template',
    difficulty: 'Advanced',
    tags: ['React Native', 'Mobile', 'Template', 'Cross-platform'],
    featured: false,
    downloads: 987,
    rating: 4.4,
    publishDate: '2024-03-01'
  },
  {
    id: 'project-estimation-tool',
    title: 'Software Project Estimation Tool',
    description: 'Comprehensive tool for estimating software development projects with team size, timeline, and cost calculations.',
    type: 'tool',
    category: 'Project Management',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop',
    externalUrl: '/tools/project-estimator',
    duration: '10 minutes',
    difficulty: 'Beginner',
    tags: ['Estimation', 'Project Management', 'Planning', 'Budgeting'],
    featured: false,
    downloads: 1876,
    rating: 4.3,
    publishDate: '2024-02-15'
  },
  {
    id: 'security-checklist',
    title: 'Web Application Security Checklist',
    description: 'Comprehensive security checklist covering OWASP Top 10 and best practices for web application security.',
    type: 'guide',
    category: 'Security',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop',
    downloadUrl: '/resources/security-checklist.pdf',
    fileSize: '3.1 MB',
    difficulty: 'Advanced',
    tags: ['Security', 'Web Development', 'OWASP', 'Best Practices'],
    featured: false,
    downloads: 1432,
    rating: 4.8,
    publishDate: '2024-01-10'
  },
  // Additional resources
  {
    id: 'cloud-migration-strategy',
    title: 'Enterprise Cloud Migration Strategy',
    description: 'Comprehensive framework for migrating enterprise applications to the cloud with minimal downtime and maximum efficiency.',
    type: 'whitepaper',
    category: 'Cloud Infrastructure',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop',
    downloadUrl: '/resources/cloud-migration-strategy.pdf',
    fileSize: '9.7 MB',
    difficulty: 'Advanced',
    tags: ['Cloud', 'Migration', 'AWS', 'Azure', 'DevOps'],
    featured: true,
    downloads: 2156,
    rating: 4.7,
    publishDate: '2024-03-22'
  },
  {
    id: 'devops-playbook',
    title: 'DevOps Implementation Playbook',
    description: 'Step-by-step guide to implementing DevOps practices with CI/CD pipelines, infrastructure as code, and monitoring solutions.',
    type: 'guide',
    category: 'DevOps',
    image: 'https://images.unsplash.com/photo-1558346490-a72e53ae6b91?w=400&h=250&fit=crop',
    downloadUrl: '/resources/devops-playbook.pdf',
    fileSize: '7.3 MB',
    difficulty: 'Intermediate',
    tags: ['DevOps', 'CI/CD', 'Docker', 'Kubernetes', 'Automation'],
    featured: false,
    downloads: 1834,
    rating: 4.6,
    publishDate: '2024-02-28'
  },
  {
    id: 'vue-saas-template',
    title: 'Vue.js SaaS Application Template',
    description: 'Production-ready Vue.js template with authentication, subscription billing, and admin dashboard for SaaS applications.',
    type: 'template',
    category: 'Development Templates',
    image: 'https://images.unsplash.com/photo-1555066932-4a6b8b8b8c8c?w=400&h=250&fit=crop',
    externalUrl: 'https://github.com/digital-dude/vue-saas-template',
    difficulty: 'Intermediate',
    tags: ['Vue.js', 'SaaS', 'Template', 'JavaScript'],
    featured: false,
    downloads: 1247,
    rating: 4.5,
    publishDate: '2024-04-05'
  },
  {
    id: 'cost-optimization-calculator',
    title: 'Cloud Cost Optimization Calculator',
    description: 'Interactive tool to analyze and optimize your cloud infrastructure costs with actionable recommendations.',
    type: 'tool',
    category: 'Business Tools',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=250&fit=crop',
    externalUrl: '/tools/cloud-cost-calculator',
    duration: '7 minutes',
    difficulty: 'Beginner',
    tags: ['Cloud', 'Cost Optimization', 'AWS', 'Azure', 'Calculator'],
    featured: false,
    downloads: 2756,
    rating: 4.8,
    publishDate: '2024-03-15'
  },
  {
    id: 'pricing-calculator',
    title: 'Software Project Pricing Calculator',
    description: 'Interactive tool to estimate the cost and timeline of your custom software project based on your specific requirements.',
    type: 'tool',
    category: 'Business Tools',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=250&fit=crop',
    externalUrl: '/resources/pricing-calculator',
    duration: '5 minutes',
    difficulty: 'Beginner',
    tags: ['Pricing', 'Calculator', 'Project Estimation', 'Cost'],
    featured: true,
    downloads: 0,
    rating: 5.0,
    publishDate: '2024-04-15'
  },
  {
    id: 'microservices-architecture',
    title: 'Microservices Architecture Patterns',
    description: 'In-depth guide to designing and implementing scalable microservices architectures with real-world examples.',
    type: 'whitepaper',
    category: 'Software Architecture',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop',
    downloadUrl: '/resources/microservices-patterns.pdf',
    fileSize: '11.2 MB',
    difficulty: 'Advanced',
    tags: ['Microservices', 'Architecture', 'Scalability', 'Distributed Systems'],
    featured: false,
    downloads: 1678,
    rating: 4.9,
    publishDate: '2024-04-10'
  },
  {
    id: 'agile-project-template',
    title: 'Agile Project Management Template',
    description: 'Complete set of templates and tools for implementing agile methodologies in software development projects.',
    type: 'template',
    category: 'Project Management',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop',
    downloadUrl: '/resources/agile-project-template.zip',
    fileSize: '2.8 MB',
    difficulty: 'Beginner',
    tags: ['Agile', 'Project Management', 'Scrum', 'Templates'],
    featured: false,
    downloads: 3241,
    rating: 4.4,
    publishDate: '2024-01-30'
  },
  {
    id: 'business-requirements-template',
    title: 'Business Requirements Template',
    description: 'Comprehensive template for documenting software project requirements with sections for functional specifications, user stories, and acceptance criteria.',
    type: 'template',
    category: 'Project Planning',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
    externalUrl: '/resources/downloadable-templates',
    difficulty: 'Beginner',
    tags: ['Requirements', 'Documentation', 'Planning'],
    featured: true,
    downloads: 0,
    rating: 5.0,
    publishDate: '2024-04-15'
  },
  {
    id: 'project-planning-toolkit',
    title: 'Software Project Planning Toolkit',
    description: 'Complete set of templates and tools for planning software development projects with timeline estimation, resource allocation, and risk assessment.',
    type: 'template',
    category: 'Project Management',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop',
    externalUrl: '/resources/downloadable-templates',
    difficulty: 'Intermediate',
    tags: ['Project Planning', 'Timeline', 'Resource Management'],
    featured: true,
    downloads: 0,
    rating: 5.0,
    publishDate: '2024-04-15'
  },
  {
    id: 'vendor-selection-checklist',
    title: 'Software Vendor Selection Checklist',
    description: 'Comprehensive checklist for evaluating and selecting software development vendors with scoring criteria and comparison matrix.',
    type: 'template',
    category: 'Vendor Evaluation',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop',
    externalUrl: '/resources/downloadable-templates',
    difficulty: 'Beginner',
    tags: ['Vendor Selection', 'Evaluation', 'Comparison'],
    featured: true,
    downloads: 0,
    rating: 5.0,
    publishDate: '2024-04-15'
  },
  {
    id: 'project-idea-submission',
    title: 'Project Idea Submission Portal',
    description: 'Submit your software project idea for a free consultation and detailed analysis from our expert team.',
    type: 'tool',
    category: 'Project Planning',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop',
    externalUrl: '/resources/project-idea-submission',
    duration: '10 minutes',
    difficulty: 'Beginner',
    tags: ['Project Planning', 'Consultation', 'Idea Submission'],
    featured: true,
    downloads: 0,
    rating: 5.0,
    publishDate: '2024-04-15'
  },
  {
    id: 'interactive-portfolio',
    title: 'Interactive Portfolio Gallery',
    description: 'Explore our portfolio with advanced filtering by technology, industry, and project category. View live demos where available.',
    type: 'tool',
    category: 'Portfolio',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
    externalUrl: '/resources/interactive-portfolio',
    duration: '5 minutes',
    difficulty: 'Beginner',
    tags: ['Portfolio', 'Gallery', 'Filtering', 'Demos'],
    featured: true,
    downloads: 0,
    rating: 5.0,
    publishDate: '2024-04-15'
  },
  {
    id: 'project-estimator',
    title: 'Project Estimator Tool',
    description: 'Estimate the cost and timeline of your custom software project with our interactive project estimator tool.',
    type: 'tool',
    category: 'Project Management',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop',
    externalUrl: '/resources/project-estimator',
    duration: '5 minutes',
    difficulty: 'Beginner',
    tags: ['Estimation', 'Project Management', 'Planning', 'Budgeting'],
    featured: true,
    downloads: 0,
    rating: 5.0,
    publishDate: '2024-04-15'
  },
  {
    id: 'tech-stack-explorer',
    title: 'Tech Stack Explorer',
    description: 'Interactive visualization of technologies and their applications across our projects and industries.',
    type: 'tool',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop',
    externalUrl: '/resources/tech-stack-explorer',
    duration: '5 minutes',
    difficulty: 'Beginner',
    tags: ['Technology', 'Stack', 'Visualization', 'Exploration'],
    featured: true,
    downloads: 0,
    rating: 5.0,
    publishDate: '2024-04-15'
  },
  {
    id: 'service-comparison',
    title: 'Service Comparison Matrix',
    description: 'Compare our software development services side-by-side to find the perfect solution for your business needs.',
    type: 'tool',
    category: 'Business Tools',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop',
    externalUrl: '/resources/service-comparison',
    duration: '5 minutes',
    difficulty: 'Beginner',
    tags: ['Services', 'Comparison', 'Decision Making'],
    featured: true,
    downloads: 0,
    rating: 5.0,
    publishDate: '2024-04-15'
  }
];

const categories = ['All', 'SaaS Development', 'AI & Machine Learning', 'Development Templates', 'Business Tools', 'Software Architecture', 'API Development', 'Mobile Development', 'Project Management', 'Security', 'Cloud Infrastructure', 'DevOps', 'Project Planning', 'Vendor Evaluation', 'Portfolio', 'Technology'];

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'whitepaper': return FileText;
    case 'guide': return BookOpen;
    case 'template': return Code;
    case 'tool': return Wrench;
    default: return FileText;
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case 'whitepaper': return 'text-blue-400 bg-blue-400/20';
    case 'guide': return 'text-green-400 bg-green-400/20';
    case 'template': return 'text-purple-400 bg-purple-400/20';
    case 'tool': return 'text-orange-400 bg-orange-400/20';
    default: return 'text-gray-400 bg-gray-400/20';
  }
};

const ResourceCenter = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const allTags = useMemo(() => {
    const tags = resources.flatMap(r => r.tags);
    return ['All', ...Array.from(new Set(tags))];
  }, []);

  const allCategories = useMemo(() => {
    const categories = resources.map(r => r.category);
    return ['All', ...Array.from(new Set(categories))];
  }, []);

  const allTypes = useMemo(() => {
    const types = resources.map(r => r.type);
    return ['All', ...Array.from(new Set(types))];
  }, []);

  const allDifficulties = useMemo(() => {
    const difficulties = resources.map(r => r.difficulty);
    return ['All', ...Array.from(new Set(difficulties))];
  }, []);

  const filteredResources = useMemo(() => {
    if (activeFilter === 'All' && searchQuery === '') {
      return resources;
    }
    
    return resources.filter((resource: Resource) => {
      const matchesSearch = searchQuery === '' ||
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      if (searchQuery !== '' && !matchesSearch) {
        return false;
      }
      
      if (activeFilter === 'All') {
        return true;
      }
      
      // Check if filter matches category, type, difficulty, or tag
      return resource.category === activeFilter || 
             resource.type === activeFilter || 
             resource.difficulty === activeFilter ||
             resource.tags.includes(activeFilter);
    });
  }, [activeFilter, searchQuery]);

  const featuredResources = resources.filter(r => r.featured);
  const newResources = resources
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const resetFilters = () => {
    setActiveFilter('All');
    setSearchQuery('');
  };

  return (
    <>
      <SEO
        title="Free Software Development Resources | Guides & Tools"
        description="Download free guides, templates & tools for software project planning, requirements gathering & vendor selection. Make informed tech decisions."
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Resources - Whitepapers, Guides & Tools",
          "description": "Download free guides, templates & tools for software project planning, requirements gathering & vendor selection. Make informed tech decisions.",
          "url": "https://www.digitaldude.co.uk/resources",
          "mainEntity": {
            "@type": "ItemList",
            "itemListElement": resources.map((resource, index) => ({
              "@type": "CreativeWork",
              "position": index + 1,
              "name": resource.title,
              "description": resource.description,
              "url": resource.downloadUrl || resource.externalUrl
            }))
          }
        }}
      />
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text-hover">
              Resource Center
            </h1>
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              Access our comprehensive library of whitepapers, guides, templates, and tools. 
              Everything you need to accelerate your software development journey.
            </p>
            <div className="flex flex-wrap gap-6 justify-center text-sm text-text-secondary">
              <span className="flex items-center gap-2">
                <Archive className="w-4 h-4 text-primary" />
                {resources.length} Resources Available
              </span>
              <span className="flex items-center gap-2">
                <Download className="w-4 h-4 text-primary" />
                {resources.reduce((sum, r) => sum + r.downloads, 0).toLocaleString()}+ Downloads
              </span>
              <span className="flex items-center gap-2">
                <Star className="w-4 h-4 text-primary" />
                4.6 Average Rating
              </span>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-text-primary mb-4">Featured Resources</h2>
            <p className="text-text-secondary">Our most popular and highly-rated resources to get you started.</p>
          </MotionDiv>

          <MotionDiv
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {featuredResources.map((resource) => {
              const IconComponent = getTypeIcon(resource.type);
              return (
                <MotionDiv key={resource.id} variants={itemVariants}>
                  <Card className="group cursor-pointer overflow-hidden hover:bg-surface/30 transition-all duration-300 h-full">
                    <div className="relative overflow-hidden rounded-lg mb-4">
                      <ImageWithFallback
                        src={resource.image}
                        alt={resource.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(resource.type)}`}>
                          <IconComponent className="w-3 h-3" />
                          {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="bg-primary text-white px-2 py-1 rounded-full text-xs font-medium">
                          Featured
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="space-y-3 flex-1 flex flex-col">
                      <div className="flex items-start justify-between">
                        <span className="text-xs text-text-secondary">{resource.category}</span>
                        <div className="flex items-center gap-1 text-xs text-text-secondary">
                          <Star className="w-3 h-3 fill-current text-yellow-400" />
                          <span>{resource.rating}</span>
                          <span className="text-text-secondary/50">•</span>
                          <Download className="w-3 h-3" />
                          <span>{Math.min(99, Math.floor(resource.downloads / 100))}K</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold text-text-primary group-hover:text-primary transition-colors duration-300">
                        {resource.title}
                      </h3>

                      <p className="text-text-secondary text-sm leading-relaxed flex-1">
                        {resource.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {resource.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="px-2 py-1 bg-surface/30 text-text-secondary rounded-full text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-xs text-text-secondary pt-2">
                        <div className="flex items-center gap-3">
                          <span className={`px-2 py-1 rounded text-xs ${
                            resource.difficulty === 'Beginner' ? 'bg-green-400/20 text-green-400' :
                            resource.difficulty === 'Intermediate' ? 'bg-yellow-400/20 text-yellow-400' :
                            'bg-red-400/20 text-red-400'
                          }`}>
                            {resource.difficulty}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          {resource.fileSize && (
                            <span>{resource.fileSize}</span>
                          )}
                          {resource.duration && (
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {resource.duration}
                            </span>
                          )}
                          {resource.publishDate && (
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {new Date(resource.publishDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-border">
                        <Button size="sm" className="w-full group/btn">
                          {resource.downloadUrl ? (
                            <>
                              <Download className="w-4 h-4 mr-2" />
                              Download {resource.fileSize ? `(${resource.fileSize})` : ''}
                            </>
                          ) : (
                            <>
                              <ExternalLink className="w-4 h-4 mr-2" />
                              {resource.type === 'tool' ? 'Use Tool' : 'View Resource'}
                            </>
                          )}
                          <ChevronRight className="w-4 h-4 ml-auto group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                </MotionDiv>
              );
            })}
          </MotionDiv>
        </div>
      </section>

      {/* New Resources Section */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-text-primary mb-2">Newly Added Resources</h2>
                <p className="text-text-secondary">Our latest additions to help you stay ahead</p>
              </div>
              <Button 
                variant="ghost" 
                onClick={() => {
                  // Sort by publish date descending
                  setSearchQuery('');
                  setActiveFilter('All');
                }}
              >
                View All
              </Button>
            </div>
          </MotionDiv>

          <MotionDiv
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {newResources.map((resource) => {
              const IconComponent = getTypeIcon(resource.type);
              return (
                <MotionDiv key={resource.id} variants={itemVariants}>
                  <Card className="group cursor-pointer overflow-hidden hover:bg-surface/30 transition-all duration-300">
                    <div className="relative overflow-hidden rounded-lg mb-4">
                      <ImageWithFallback
                        src={resource.image}
                        alt={resource.title}
                        className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3">
                        <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(resource.type)}`}>
                          <IconComponent className="w-3 h-3" />
                          {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3">
                        <span className="bg-accent text-white px-2 py-1 rounded-full text-xs font-medium">
                          New
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-start justify-between">
                        <span className="text-xs text-text-secondary">{resource.category}</span>
                        <div className="flex items-center gap-1 text-xs text-text-secondary">
                          <Star className="w-3 h-3 fill-current text-yellow-400" />
                          <span>{resource.rating}</span>
                        </div>
                      </div>

                      <h3 className="font-semibold text-text-primary group-hover:text-primary transition-colors duration-300 line-clamp-2">
                        {resource.title}
                      </h3>

                      <p className="text-text-secondary text-sm leading-relaxed line-clamp-2">
                        {resource.description}
                      </p>

                      <div className="flex items-center justify-between text-xs text-text-secondary">
                        <span className={`px-2 py-1 rounded text-xs ${
                          resource.difficulty === 'Beginner' ? 'bg-green-400/20 text-green-400' :
                          resource.difficulty === 'Intermediate' ? 'bg-yellow-400/20 text-yellow-400' :
                          'bg-red-400/20 text-red-400'
                        }`}>
                          {resource.difficulty}
                        </span>
                        {resource.fileSize && (
                          <span>{resource.fileSize}</span>
                        )}
                        {resource.duration && (
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {resource.duration}
                          </span>
                        )}
                      </div>
                    </div>
                  </Card>
                </MotionDiv>
              );
            })}
          </MotionDiv>
        </div>
      </section>

      {/* Resource Categories Section */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 text-center"
          >
            <h2 className="text-3xl font-bold text-text-primary mb-4">Browse by Category</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Find exactly what you need with our organized resource categories
            </p>
          </MotionDiv>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.filter(cat => cat !== 'All').map((category, index) => (
              <MotionDiv
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card 
                  className="p-6 text-center cursor-pointer hover:bg-surface/30 transition-all duration-300 group"
                  onClick={() => {
                    setActiveFilter(category);
                    const element = document.getElementById('all-resources');
                    if (element) {
                      window.scrollTo({ top: (element as HTMLElement).offsetTop - 100, behavior: 'smooth' });
                    }
                  }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                    <Archive className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-text-primary mb-1">{category}</h3>
                  <p className="text-xs text-text-secondary">
                    {resources.filter(r => r.category === category).length} resources
                  </p>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Search Section - Simplified */}
      <section className="pb-8">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-text-secondary" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-surface/20 border border-border rounded-lg focus:border-primary focus:outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section - Updated to match case studies design */}
      <section className="pb-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {allCategories.map((category: string) => (
              category !== 'All' && (
                <Button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  variant={activeFilter === category ? 'primary' : 'secondary'}
                  size="sm"
                  className="capitalize rounded-full px-4 py-2 transition-all duration-300"
                >
                  {category}
                </Button>
              )
            ))}
            
            {allTypes.map((type: string) => (
              type !== 'All' && (
                <Button
                  key={type}
                  onClick={() => setActiveFilter(type)}
                  variant={activeFilter === type ? 'primary' : 'secondary'}
                  size="sm"
                  className="capitalize rounded-full px-4 py-2 transition-all duration-300"
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}s
                </Button>
              )
            ))}
            
            {allDifficulties.filter((diff: string) => diff !== 'All').map((difficulty: string) => (
              <Button
                key={difficulty}
                onClick={() => setActiveFilter(difficulty)}
                variant={activeFilter === difficulty ? 'primary' : 'secondary'}
                size="sm"
                className="capitalize rounded-full px-4 py-2 transition-all duration-300"
              >
                {difficulty}
              </Button>
            ))}
            
            {allTags.filter((tag: string) => tag !== 'All').map((tagItem: string) => (
              <Button
                key={tagItem}
                onClick={() => setActiveFilter(tagItem)}
                variant={activeFilter === tagItem ? 'primary' : 'secondary'}
                size="sm"
                className="capitalize rounded-full px-4 py-2 transition-all duration-300"
              >
                {tagItem}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* All Resources Grid - Updated to match case studies design */}
      <section id="all-resources" className="pb-16">
        <div className="container mx-auto px-6">
          <MotionDiv
            key={activeFilter + searchQuery}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredResources.map((resource) => {
              const IconComponent = getTypeIcon(resource.type);
              return (
                <MotionDiv key={resource.id} variants={itemVariants}>
                  <Card className="group cursor-pointer overflow-hidden hover:bg-surface/30 transition-all duration-300 h-full">
                    <div className="relative overflow-hidden rounded-lg mb-4">
                      <ImageWithFallback
                        src={resource.image}
                        alt={resource.title}
                        className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3">
                        <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(resource.type)}`}>
                          <IconComponent className="w-3 h-3" />
                          {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                        </span>
                      </div>
                      {resource.featured && (
                        <div className="absolute top-3 right-3">
                          <Heart className="w-4 h-4 fill-current text-primary" />
                        </div>
                      )}
                    </div>

                    <div className="space-y-3 p-6 flex-1 flex flex-col">
                      <div className="flex items-start justify-between">
                        <span className="text-xs text-text-secondary">{resource.category}</span>
                        <div className="flex items-center gap-1 text-xs text-text-secondary">
                          <Star className="w-3 h-3 fill-current text-yellow-400" />
                          <span>{resource.rating}</span>
                        </div>
                      </div>

                      <h3 className="font-semibold text-text-primary group-hover:text-primary transition-colors duration-300 line-clamp-2">
                        {resource.title}
                      </h3>

                      <p className="text-text-secondary text-sm leading-relaxed flex-1 line-clamp-3">
                        {resource.description}
                      </p>

                      <div className="flex flex-wrap gap-1">
                        {resource.tags.slice(0, 2).map((tag: string) => (
                          <span key={tag} className="px-2 py-1 bg-surface/30 text-text-secondary rounded-full text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-xs text-text-secondary pt-2">
                        <span className={`px-2 py-1 rounded text-xs ${
                          resource.difficulty === 'Beginner' ? 'bg-green-400/20 text-green-400' :
                          resource.difficulty === 'Intermediate' ? 'bg-yellow-400/20 text-yellow-400' :
                          'bg-red-400/20 text-red-400'
                        }`}>
                          {resource.difficulty}
                        </span>
                        <div className="flex items-center gap-3">
                          {resource.fileSize && (
                            <span>{resource.fileSize}</span>
                          )}
                          {resource.duration && (
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {resource.duration}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="pt-3 border-t border-border">
                        <Button size="sm" variant="outline" className="w-full group/btn">
                          {resource.downloadUrl ? (
                            <>
                              <Download className="w-4 h-4 mr-2" />
                              Download
                            </>
                          ) : (
                            <>
                              <ExternalLink className="w-4 h-4 mr-2" />
                              {resource.type === 'tool' ? 'Use Tool' : 'Access'}
                            </>
                          )}
                          <ChevronRight className="w-4 h-4 ml-auto group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                </MotionDiv>
              );
            })}
          </MotionDiv>

          {filteredResources.length === 0 && (
            <MotionDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="max-w-md mx-auto">
                <div className="w-16 h-16 bg-surface/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">No resources found</h3>
                <p className="text-text-secondary mb-4">
                  Try adjusting your search or filter criteria to find what you're looking for.
                </p>
                <Button onClick={resetFilters}>
                  Clear All Filters
                </Button>
              </div>
            </MotionDiv>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm">
        <div className="container mx-auto px-6 text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Stay Updated with New Resources
            </h2>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Get notified when we publish new whitepapers, guides, and tools. 
              Join 5,000+ developers and business leaders who trust our insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-surface/20 border border-border rounded-lg focus:border-primary focus:outline-none"
              />
              <Button size="lg" className="relative overflow-hidden group">
                <span className="relative z-10">Subscribe</span>
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
            </div>
            <p className="text-sm text-text-secondary mt-4">
              No spam. Unsubscribe at any time.
            </p>
          </MotionDiv>
        </div>
      </section>
    </>
  );
};

export default ResourceCenter;