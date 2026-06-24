import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Eye, X, Play, Github, ExternalLink, Grid, List, Sliders } from 'lucide-react';
import { portfolioProjects } from '../../data/portfolioData';
import Seo from '../../components/seo/SEO';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

const InteractivePortfolioGallery = () => {
  // const [activeFilter, setActiveFilter] = useState('All'); // Unused
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [selectedTech, setSelectedTech] = useState('All');

  // Get unique categories, industries, and technologies
  const categories = useMemo(() => {
    const cats = Array.from(new Set(portfolioProjects.map(p => p.category)));
    return ['All', ...cats];
  }, []);

  const industries = useMemo(() => {
    const inds = Array.from(new Set(portfolioProjects.map(p => p.industry)));
    return ['All', ...inds];
  }, []);

  const technologies = useMemo(() => {
    const techs = Array.from(new Set(portfolioProjects.flatMap(p => p.technologies)));
    return ['All', ...techs];
  }, []);

  // Filter projects based on all criteria
  const filteredProjects = useMemo(() => {
    return portfolioProjects.filter(project => {
      // Search query filter
      const matchesSearch = searchQuery === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
      
      if (!matchesSearch) return false;
      
      // Category filter
      if (selectedCategory !== 'All' && project.category !== selectedCategory) return false;
      
      // Industry filter
      if (selectedIndustry !== 'All' && project.industry !== selectedIndustry) return false;
      
      // Technology filter
      if (selectedTech !== 'All' && !project.technologies.includes(selectedTech)) return false;
      
      return true;
    });
  }, [searchQuery, selectedCategory, selectedIndustry, selectedTech]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedIndustry('All');
    setSelectedTech('All');
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

  return (
    <>
      <Seo
        title="Interactive Portfolio Gallery | Filter by Tech, Industry & Category"
        description="Explore our interactive portfolio gallery with advanced filtering by technology, industry, and project category. View live demos where available."
        url="https://www.digitaldude.co.uk/resources/interactive-portfolio"
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
              Interactive Portfolio Gallery
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Explore our projects with advanced filtering and visualization options
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"
          >
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-text-primary">{portfolioProjects.length}</div>
              <div className="text-text-secondary text-sm">Total Projects</div>
            </Card>
            
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-text-primary">{industries.length - 1}</div>
              <div className="text-text-secondary text-sm">Industries</div>
            </Card>
            
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-text-primary">{categories.length - 1}</div>
              <div className="text-text-secondary text-sm">Categories</div>
            </Card>
            
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-text-primary">{technologies.length - 1}</div>
              <div className="text-text-secondary text-sm">Technologies</div>
            </Card>
          </motion.div>

          {/* Search and Filter Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <Card className="p-6">
              {/* Search Bar */}
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-text-secondary" />
                <input
                  type="text"
                  placeholder="Search projects by name, description, or technology..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-surface/20 border border-border rounded-lg focus:border-primary focus:outline-none"
                />
              </div>

              {/* Filter Controls */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowFilters(!showFilters)}
                    className="flex items-center gap-2"
                  >
                    <Sliders className="w-4 h-4" />
                    {showFilters ? 'Hide Filters' : 'Show Filters'}
                  </Button>
                  
                  <div className="flex items-center gap-2">
                    <Button
                      variant={viewMode === 'grid' ? 'primary' : 'outline'}
                      size="sm"
                      onClick={() => setViewMode('grid')}
                      className="p-2"
                    >
                      <Grid className="w-4 h-4" />
                    </Button>
                    <Button
                      variant={viewMode === 'list' ? 'primary' : 'outline'}
                      size="sm"
                      onClick={() => setViewMode('list')}
                      className="p-2"
                    >
                      <List className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={resetFilters}
                  className="flex items-center gap-2"
                >
                  <X className="w-4 h-4" />
                  Reset Filters
                </Button>
              </div>

              {/* Advanced Filters */}
              <AnimatePresence>
                {showFilters && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 pt-4 border-t border-border"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-text-secondary mb-2">
                          Category
                        </label>
                        <select
                          value={selectedCategory}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          className="w-full bg-surface border border-border rounded-md py-2 px-3 text-text-primary focus:ring-2 focus:ring-primary focus:border-primary transition"
                        >
                          {categories.map(category => (
                            <option key={category} value={category}>{category}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-text-secondary mb-2">
                          Industry
                        </label>
                        <select
                          value={selectedIndustry}
                          onChange={(e) => setSelectedIndustry(e.target.value)}
                          className="w-full bg-surface border border-border rounded-md py-2 px-3 text-text-primary focus:ring-2 focus:ring-primary focus:border-primary transition"
                        >
                          {industries.map(industry => (
                            <option key={industry} value={industry}>{industry}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-text-secondary mb-2">
                          Technology
                        </label>
                        <select
                          value={selectedTech}
                          onChange={(e) => setSelectedTech(e.target.value)}
                          className="w-full bg-surface border border-border rounded-md py-2 px-3 text-text-primary focus:ring-2 focus:ring-primary focus:border-primary transition"
                        >
                          {technologies.map(tech => (
                            <option key={tech} value={tech}>{tech}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>

          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-6"
          >
            <p className="text-text-secondary">
              Showing {filteredProjects.length} of {portfolioProjects.length} projects
              {(selectedCategory !== 'All' || selectedIndustry !== 'All' || selectedTech !== 'All' || searchQuery) && (
                <span> • <button onClick={resetFilters} className="text-primary hover:underline">Clear filters</button></span>
              )}
            </p>
          </motion.div>

          {/* Projects Grid/List */}
          <motion.div
            key={`${viewMode}-${selectedCategory}-${selectedIndustry}-${selectedTech}-${searchQuery}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={viewMode === 'grid' 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
              : "space-y-6"
            }
          >
            {filteredProjects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <Card className={`group overflow-hidden hover:bg-surface/30 transition-all duration-300 ${viewMode === 'list' ? 'flex' : ''}`}>
                  <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-1/3 flex-shrink-0' : ''}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${viewMode === 'list' ? 'h-full' : 'h-48'}`}
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-primary text-white px-2 py-1 rounded-full text-xs font-medium">
                        {project.category}
                      </span>
                    </div>
                    {project.liveDemo && (
                      <div className="absolute top-3 right-3">
                        <Button size="sm" className="flex items-center gap-1 bg-green-500 hover:bg-green-600">
                          <Play className="w-3 h-3" />
                          <span className="text-xs">Live Demo</span>
                        </Button>
                      </div>
                    )}
                    <div className="absolute bottom-3 left-3">
                      <span className="bg-black/50 text-white px-2 py-1 rounded-full text-xs">
                        {project.industry}
                      </span>
                    </div>
                  </div>

                  <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold text-text-primary group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        {project.githubUrl && (
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary">
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                        {project.liveDemo && (
                          <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="text-text-secondary text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-surface/30 text-text-secondary rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-surface/30 text-text-secondary rounded-full text-xs">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-xs text-text-secondary mb-4">
                      <div className="text-center p-2 bg-surface/20 rounded">
                        <div className="font-medium text-text-primary">{project.metrics.timeline}</div>
                        <div>Timeline</div>
                      </div>
                      <div className="text-center p-2 bg-surface/20 rounded">
                        <div className="font-medium text-text-primary">{project.metrics.impact}</div>
                        <div>Impact</div>
                      </div>
                      <div className="text-center p-2 bg-surface/20 rounded">
                        <div className="font-medium text-text-primary">{project.metrics.efficiency}</div>
                        <div>Efficiency</div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                      {project.liveDemo && (
                        <Button size="sm" className="flex-1">
                          <Play className="w-4 h-4 mr-2" />
                          Demo
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="max-w-md mx-auto">
                <div className="w-16 h-16 bg-surface/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">No projects found</h3>
                <p className="text-text-secondary mb-4">
                  Try adjusting your search or filter criteria to find what you're looking for.
                </p>
                <Button onClick={resetFilters}>
                  Clear All Filters
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};

export default InteractivePortfolioGallery;