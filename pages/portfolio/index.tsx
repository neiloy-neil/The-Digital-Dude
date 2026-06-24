import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ExternalLink, Github, Calendar, Target, TrendingUp, Eye, X } from 'lucide-react';
import { portfolioProjects } from '../../data/portfolioData';
import { caseStudies } from '../../data/caseStudiesData';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import SEO from '../../components/seo/SEO';
import ImageWithFallback from '../../components/ui/ImageWithFallback';

const MotionDiv: any = motion.div;



const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  // Enhanced project details with more comprehensive information
  const enhancedProjects = useMemo(() => {
    return portfolioProjects.map(project => {
      // Find corresponding case study for detailed information
      const caseStudy = caseStudies.find((cs: any) => cs.id === project.id) || caseStudies.find((cs: any) => 
        cs.title === project.title || cs.title.includes(project.title.split(' ')[0])
      );
      
      if (caseStudy) {
        return {
          ...project,
          longDescription: caseStudy.solution || project.description,
          problem: caseStudy.problem,
          results: caseStudy.result,
          client: caseStudy.clientLogo ? "Confidential Client" : "Enterprise Client",
          timelineDetails: caseStudy.metrics || [],
          detailedFeatures: caseStudy.keyFeatures || project.features,
          techStack: caseStudy.techStack || project.technologies
        };
      }
      
      return {
        ...project,
        longDescription: project.description,
        problem: "A complex business challenge required a tailored digital solution to streamline operations and drive growth.",
        results: "The solution delivered significant value, improving efficiency and creating new opportunities for the client.",
        client: "Enterprise Client",
        timelineDetails: [
          { value: project.metrics.timeline, label: "Project Duration" },
          { value: project.metrics.impact, label: "Key Impact" },
          { value: project.metrics.efficiency, label: "Efficiency Gain" }
        ],
        detailedFeatures: project.features,
        techStack: project.technologies
      };
    });
  }, [caseStudies]);

  const categories = useMemo(() => {
    const cats = Array.from(new Set(enhancedProjects.map(p => p.category)));
    return ['All', ...cats];
  }, [enhancedProjects]);

  const industries = useMemo(() => {
    const inds = Array.from(new Set(enhancedProjects.map(p => p.industry)));
    return ['All', ...inds];
  }, [enhancedProjects]);

  const technologies = useMemo(() => {
    const techs = Array.from(new Set(enhancedProjects.flatMap(p => p.techStack)));
    return ['All', ...techs];
  }, [enhancedProjects]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return enhancedProjects;
    }
    
    // Check if filter matches category, industry, or technology
    return enhancedProjects.filter(project => {
      return project.category === activeFilter || 
             project.industry === activeFilter || 
             project.techStack.includes(activeFilter);
    });
  }, [activeFilter, enhancedProjects]);

  const resetFilters = () => {
    setActiveFilter('All');
  };

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

  const portfolioStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Portfolio - Software Development Projects",
    "description": "Explore our diverse portfolio of successful software development projects across industries including SaaS platforms, AI solutions, and mobile applications.",
    "url": "https://www.digitaldude.co.uk/portfolio",
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": portfolioProjects.length,
      "itemListElement": portfolioProjects.map((project, index) => ({
        "@type": "CreativeWork",
        "position": index + 1,
        "name": project.title,
        "description": project.description,
        "image": project.image,
        "category": project.category,
        "industry": project.industry
      }))
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-slate-900/50 to-slate-800/30">
      <SEO 
        title="Software Development Portfolio | SaaS, AI & Mobile Projects"
        description="Discover our portfolio of custom software solutions across industries. From AI platforms to SaaS applications & mobile ecosystems."
        keywords="software development portfolio, SaaS projects, AI solutions, mobile app development, web development, React projects, Node.js, custom software examples"
        url="https://www.digitaldude.co.uk/portfolio"
        type="website"
        structuredData={portfolioStructuredData}
      />
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: 1, 
              y: [0, -3, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 gradient-text-hover"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Work Portfolio
            </motion.h1>
            <motion.p 
              className="text-xl text-text-secondary mb-8 leading-relaxed"
              // ENHANCEMENT: Add subtle entrance animation
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Explore our diverse collection of successful projects across industries. 
              From SaaS platforms to AI solutions, discover how we've helped businesses transform digitally.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4 justify-center text-sm text-text-secondary"
              // ENHANCEMENT: Add subtle entrance animation
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="flex items-center gap-2">
                <Target className="w-4 h-4 text-primary" />
                {portfolioProjects.length}+ Projects Delivered
              </span>
              <span className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                {industries.length - 1} Industries Served
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                3+ Years Experience
              </span>
            </motion.div>
          </MotionDiv>
        </div>
      </section>

      {/* Filters Section - Updated to match case studies design */}
      <section className="pb-8">
        <div className="container mx-auto px-6">
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-8"
            // ENHANCEMENT: Add subtle entrance animation
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
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
                  onClick={() => setActiveFilter(category)}
                  variant={activeFilter === category ? 'primary' : 'secondary'}
                  size="sm"
                  className="capitalize rounded-full px-4 py-2 transition-all duration-300"
                >
                  {category}
                </Button>
              </motion.div>
            ))}
            
            {industries.filter(ind => ind !== 'All').map(industry => (
              <motion.div
                key={industry}
                // ENHANCEMENT: Add hover and tap animations to industry buttons
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <Button
                  onClick={() => setActiveFilter(industry)}
                  variant={activeFilter === industry ? 'primary' : 'secondary'}
                  size="sm"
                  className="capitalize rounded-full px-4 py-2 transition-all duration-300"
                >
                  {industry}
                </Button>
              </motion.div>
            ))}
            
            {technologies.filter(tech => tech !== 'All').map(technology => (
              <motion.div
                key={technology}
                // ENHANCEMENT: Add hover and tap animations to technology buttons
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <Button
                  onClick={() => setActiveFilter(technology)}
                  variant={activeFilter === technology ? 'primary' : 'secondary'}
                  size="sm"
                  className="capitalize rounded-full px-4 py-2 transition-all duration-300"
                >
                  {technology}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid - Updated to match case studies design */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <AnimatePresence mode="wait">
            <MotionDiv
              key={activeFilter}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <MotionDiv key={project.id} variants={itemVariants}>
                  <motion.div
                    // ENHANCEMENT: Add hover animation to project cards
                    whileHover={{ y: -5 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  >
                    <Card className="group cursor-pointer overflow-hidden hover:bg-surface/30 transition-all duration-300 h-full"
                          onClick={() => setSelectedProject(project)}>
                      <div className="relative overflow-hidden rounded-lg mb-4">
                        <ImageWithFallback
                          src={project.image}
                          alt={project.title}
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                          <div className="flex items-center gap-2 text-white text-sm">
                            <Eye className="w-4 h-4" />
                            View Project Details
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3 p-6">
                        <div className="flex items-start justify-between">
                          <motion.span 
                            className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium"
                            // ENHANCEMENT: Add subtle entrance animation for category tags
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                          >
                            {project.category}
                          </motion.span>
                          <motion.span 
                            className="text-xs text-text-secondary"
                            // ENHANCEMENT: Add subtle entrance animation for industry tags
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                          >
                            {project.industry}
                          </motion.span>
                        </div>

                        <motion.h3 
                          className="text-xl font-semibold text-text-primary group-hover:text-primary transition-colors duration-300"
                          // ENHANCEMENT: Add subtle entrance animation for titles
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.05 }}
                        >
                          {project.title}
                        </motion.h3>

                        <motion.p 
                          className="text-text-secondary text-sm leading-relaxed"
                          // ENHANCEMENT: Add subtle entrance animation for descriptions
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          {project.longDescription}
                        </motion.p>

                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <motion.span 
                              key={tech} 
                              className="px-3 py-1 bg-surface/30 text-text-secondary rounded text-xs"
                              // ENHANCEMENT: Add subtle entrance animation for technology tags
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: index * 0.05 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                          {project.technologies.length > 3 && (
                            <motion.span 
                              className="px-2 py-1 bg-surface/30 text-text-secondary rounded text-xs"
                              // ENHANCEMENT: Add subtle entrance animation for additional tech tags
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: index * 0.05 }}
                            >
                              +{project.technologies.length - 3} more
                            </motion.span>
                          )}
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t border-border">
                          <motion.div 
                            className="text-xs text-text-secondary"
                            // ENHANCEMENT: Add subtle entrance animation for metrics
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                          >
                            <span className="font-medium">{project.metrics.timeline}</span> • {project.metrics.impact}
                          </motion.div>
                          <motion.div
                            // ENHANCEMENT: Add hover animation to external link icon
                            whileHover={{ scale: 1.2, x: 2 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                          >
                            <ExternalLink className="w-4 h-4 text-text-secondary group-hover:text-primary transition-colors duration-300" />
                          </motion.div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </MotionDiv>
              ))}
            </MotionDiv>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <MotionDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
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
              <div className="max-w-md mx-auto">
                <div className="w-16 h-16 bg-surface/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">No projects found</h3>
                <p className="text-text-secondary mb-4">
                  Try adjusting your filters to find what you're looking for.
                </p>
                <motion.div
                  // ENHANCEMENT: Add hover animation to clear filters button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <Button onClick={resetFilters}>
                    Clear All Filters
                  </Button>
                </motion.div>
              </div>
            </MotionDiv>
          )}
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.8, 1],
            }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
            transition={{ 
              duration: 0.3
            }}
          >
            <MotionDiv
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ 
                opacity: 1,
                scale: [0.9, 1.05, 1],
                y: 0
              }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-surface rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
              transition={{ 
                duration: 0.5,
                type: 'spring',
                stiffness: 300,
                damping: 20
              }}
            >
              <div className="relative">
                <motion.div
                  // ENHANCEMENT: Add subtle continuous animation
                  animate={{ 
                    scale: [1, 1.02, 1],
                  }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                >
                  <ImageWithFallback
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-t-2xl"
                  />
                </motion.div>
                <motion.button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                  // ENHANCEMENT: Add hover and tap animations to close button
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <X className="w-5 h-5" />
                </motion.button>
                <div className="absolute bottom-4 left-6 right-6">
                  <div className="flex items-center gap-3 mb-2">
                    <motion.span 
                      className="px-3 py-1 bg-primary/90 text-white rounded-full text-sm font-medium"
                      // ENHANCEMENT: Add subtle entrance animation for category tags
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {selectedProject.category}
                    </motion.span>
                    <motion.span 
                      className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white rounded-full text-sm"
                      // ENHANCEMENT: Add subtle entrance animation for industry tags
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      {selectedProject.industry}
                    </motion.span>
                  </div>
                  <motion.h2 
                    className="text-2xl font-bold text-white mb-2"
                    // ENHANCEMENT: Add subtle entrance animation for title
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {selectedProject.title}
                  </motion.h2>
                </div>
              </div>

              <div className="p-6">
                <motion.p 
                  className="text-text-secondary mb-6 leading-relaxed"
                  // ENHANCEMENT: Add subtle entrance animation for description
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {selectedProject.longDescription}
                </motion.p>

                {selectedProject.problem && (
                  <motion.div 
                    className="mb-6 p-4 bg-surface/30 rounded-lg"
                    // ENHANCEMENT: Add subtle entrance animation for problem section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h4 className="font-semibold text-text-primary mb-2">The Challenge</h4>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {selectedProject.problem}
                    </p>
                  </motion.div>
                )}

                {selectedProject.results && (
                  <motion.div 
                    className="mb-6 p-4 bg-surface/30 rounded-lg"
                    // ENHANCEMENT: Add subtle entrance animation for results section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <h4 className="font-semibold text-text-primary mb-2">The Results</h4>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {selectedProject.results}
                    </p>
                  </motion.div>
                )}

                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6"
                  // ENHANCEMENT: Add subtle entrance animation for metrics grid
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {selectedProject.timelineDetails.map((metric: any, index: number) => (
                    <motion.div 
                      key={index} 
                      className="text-center p-4 bg-surface/30 rounded-lg"
                      // ENHANCEMENT: Add hover animation to metric cards
                      whileHover={{ scale: 1.05, y: -3 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    >
                      <div className="font-semibold text-text-primary">{metric.value}</div>
                      <div className="text-sm text-text-secondary">{metric.label}</div>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div 
                  className="space-y-6"
                  // ENHANCEMENT: Add subtle entrance animation for details section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <div>
                    <h4 className="font-semibold text-text-primary mb-3">Key Features & Solutions</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedProject.detailedFeatures.map((feature: string, index: number) => (
                        <motion.div 
                          key={feature} 
                          className="flex items-start gap-2 p-3 bg-primary/5 rounded-lg"
                          // ENHANCEMENT: Add hover animation to feature items
                          whileHover={{ x: 5 }}
                          // ENHANCEMENT: Add subtle entrance animation
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.05, type: 'spring', stiffness: 400, damping: 17 }}
                        >
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-text-secondary text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-text-primary mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech: string, index: number) => (
                        <motion.span 
                          key={tech} 
                          className="px-3 py-1 bg-surface/30 text-text-secondary rounded-full text-sm"
                          // ENHANCEMENT: Add hover animation to tech tags
                          whileHover={{ scale: 1.1, y: -2 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                          // ENHANCEMENT: Add subtle entrance animation
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ 
                            opacity: 1, 
                            scale: 1,
                            transition: { duration: 0.3, delay: index * 0.05, type: 'spring', stiffness: 400, damping: 17 }
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {selectedProject.gallery.length > 1 && (
                    <div>
                      <h4 className="font-semibold text-text-primary mb-3">Project Gallery</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {selectedProject.gallery.slice(1).map((image: string, index: number) => (
                          <motion.div
                            key={index}
                            // ENHANCEMENT: Add hover animation to gallery images
                            whileHover={{ scale: 1.05, y: -3 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                          >
                            <ImageWithFallback
                              src={image}
                              alt={`${selectedProject.title} screenshot ${index + 1}`}
                              className="w-full h-32 object-cover rounded-lg"
                            />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>

                <motion.div 
                  className="flex gap-4 mt-8 pt-6 border-t border-border"
                  // ENHANCEMENT: Add subtle entrance animation for buttons
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <motion.div
                    // ENHANCEMENT: Add hover and tap animations to view case study button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  >
                    <Button className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Case Study
                    </Button>
                  </motion.div>
                  <motion.div
                    // ENHANCEMENT: Add hover and tap animations to view code button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  >
                    <Button variant="outline">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </MotionDiv>
          </MotionDiv>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm">
        <div className="container mx-auto px-6 text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            // ENHANCEMENT: Add subtle continuous animation
            animate={{ 
              y: [0, -3, 0],
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-text-primary mb-4"
              // ENHANCEMENT: Add subtle entrance animation
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Ready to Start Your Project?
            </motion.h2>
            <motion.p 
              className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto"
              // ENHANCEMENT: Add subtle entrance animation
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Let's discuss how we can help you build something amazing. 
              From concept to deployment, we'll be with you every step of the way.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                // ENHANCEMENT: Add hover and tap animations to start project button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <Button size="lg" className="relative overflow-hidden group">
                  <span className="relative z-10">Start Your Project</span>
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
              </motion.div>
              <motion.div
                // ENHANCEMENT: Add hover and tap animations to view case studies button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <Button variant="outline" size="lg">
                  View Case Studies
                </Button>
              </motion.div>
            </div>
          </MotionDiv>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;