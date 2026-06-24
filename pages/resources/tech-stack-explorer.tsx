import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Grid, List, BarChart3, Code, Database, Globe, Smartphone, Zap, Server, Cloud } from 'lucide-react';
import { portfolioProjects } from '../../data/portfolioData';
import Seo from '../../components/seo/SEO';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

const TechStackExplorerPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedIndustry, setSelectedIndustry] = useState('All');

  // Get all unique technologies
  const allTechnologies = useMemo(() => {
    const techs = Array.from(new Set(portfolioProjects.flatMap(p => p.technologies)));
    return techs.sort();
  }, []);

  // Get technology categories
  const techCategories = useMemo(() => {
    const categories: Record<string, string[]> = {
      'Frontend': ['React', 'Next.js', 'Vue.js', 'Angular', 'Svelte'],
      'Backend': ['Node.js', 'Python', 'Django', 'Express', 'FastAPI'],
      'Mobile': ['React Native', 'Flutter', 'Swift', 'Kotlin'],
      'Database': ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Firebase'],
      'AI/ML': ['TensorFlow', 'PyTorch', 'OpenAI API', 'Hugging Face'],
      'Cloud': ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes'],
      'APIs': ['REST', 'GraphQL', 'WebRTC', 'Stripe', 'Social APIs']
    };

    // Add any technologies not in predefined categories to 'Other'
    const categorizedTechs = Object.values(categories).flat();
    const otherTechs = allTechnologies.filter(tech => !categorizedTechs.includes(tech));
    if (otherTechs.length > 0) {
      categories['Other'] = otherTechs;
    }

    return categories;
  }, [allTechnologies]);

  // Get projects by technology
  const projectsByTech = useMemo(() => {
    const techMap: Record<string, any[]> = {};
    
    portfolioProjects.forEach(project => {
      project.technologies.forEach(tech => {
        if (!techMap[tech]) {
          techMap[tech] = [];
        }
        techMap[tech].push(project);
      });
    });
    
    return techMap;
  }, []);

  // Get technology usage statistics
  const techStats = useMemo(() => {
    const stats: Record<string, { count: number; projects: any[] }> = {};
    
    allTechnologies.forEach(tech => {
      const projects = projectsByTech[tech] || [];
      stats[tech] = {
        count: projects.length,
        projects
      };
    });
    
    return stats;
  }, [allTechnologies, projectsByTech]);

  // Filter technologies based on search and filters
  const filteredTechnologies = useMemo(() => {
    return allTechnologies.filter(tech => {
      // Search filter
      if (searchQuery && !tech.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }
      
      // Category filter
      if (selectedCategory !== 'All') {
        const categoryTechs = techCategories[selectedCategory] || [];
        if (!categoryTechs.includes(tech)) {
          return false;
        }
      }
      
      // Industry filter
      if (selectedIndustry !== 'All') {
        const techProjects = projectsByTech[tech] || [];
        if (!techProjects.some(p => p.industry === selectedIndustry)) {
          return false;
        }
      }
      
      return true;
    });
  }, [allTechnologies, searchQuery, selectedCategory, selectedIndustry, techCategories, projectsByTech]);

  // Get unique categories and industries
  const categories = useMemo(() => {
    return ['All', ...Object.keys(techCategories)];
  }, [techCategories]);

  const industries = useMemo(() => {
    const inds = Array.from(new Set(portfolioProjects.map(p => p.industry)));
    return ['All', ...inds];
  }, []);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedIndustry('All');
  };

  // Get icon for technology category
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frontend': return Globe;
      case 'Backend': return Server;
      case 'Mobile': return Smartphone;
      case 'Database': return Database;
      case 'AI/ML': return Zap;
      case 'Cloud': return Cloud;
      case 'APIs': return Code;
      default: return Code;
    }
  };

  return (
    <>
      <Seo
        title="Tech Stack Explorer | Technologies We Use & Master"
        description="Explore the technologies we use across our projects. Discover how different tech stacks are applied in various industries and project types."
        url="https://www.digitaldude.co.uk/resources/tech-stack-explorer"
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
              Tech Stack Explorer
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Explore the technologies we use across our projects and see how different tech stacks are applied in various industries
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
              <div className="text-2xl font-bold text-text-primary">{allTechnologies.length}</div>
              <div className="text-text-secondary text-sm">Technologies</div>
            </Card>
            
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-text-primary">{portfolioProjects.length}</div>
              <div className="text-text-secondary text-sm">Projects</div>
            </Card>
            
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-text-primary">{categories.length - 1}</div>
              <div className="text-text-secondary text-sm">Categories</div>
            </Card>
            
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-text-primary">{industries.length - 1}</div>
              <div className="text-text-secondary text-sm">Industries</div>
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
                  placeholder="Search technologies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-surface/20 border border-border rounded-lg focus:border-primary focus:outline-none"
                />
              </div>

              {/* Filter Controls */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
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
                  <Filter className="w-4 h-4" />
                  Reset Filters
                </Button>
              </div>

              {/* Category and Industry Filters */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
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
              </div>
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
              Showing {filteredTechnologies.length} of {allTechnologies.length} technologies
              {(selectedCategory !== 'All' || selectedIndustry !== 'All' || searchQuery) && (
                <span> • <button onClick={resetFilters} className="text-primary hover:underline">Clear filters</button></span>
              )}
            </p>
          </motion.div>

          {/* Technology Categories View */}
          {selectedCategory === 'All' && !searchQuery && selectedIndustry === 'All' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-text-primary mb-6">Technology Categories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(techCategories).map(([category, techs]) => {
                  const IconComponent = getCategoryIcon(category);
                  return (
                    <Card key={category} className="p-6 hover:bg-surface/30 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold text-text-primary">{category}</h3>
                      </div>
                      <p className="text-text-secondary text-sm mb-4">
                        {techs.length} technologies used in our projects
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {techs.slice(0, 5).map(tech => (
                          <span key={tech} className="px-2 py-1 bg-surface/30 text-text-secondary rounded-full text-xs">
                            {tech}
                          </span>
                        ))}
                        {techs.length > 5 && (
                          <span className="px-2 py-1 bg-surface/30 text-text-secondary rounded-full text-xs">
                            +{techs.length - 5} more
                          </span>
                        )}
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full mt-4"
                        onClick={() => setSelectedCategory(category)}
                      >
                        Explore {category}
                      </Button>
                    </Card>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Technologies Grid/List */}
          <motion.div
            key={`${viewMode}-${selectedCategory}-${selectedIndustry}-${searchQuery}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className={viewMode === 'grid' 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
              : "space-y-4"
            }
          >
            {filteredTechnologies.map((tech) => {
              const stats = techStats[tech];
              const projects = stats?.projects || [];
              
              return (
                <Card key={tech} className={`group overflow-hidden hover:bg-surface/30 transition-all duration-300 ${viewMode === 'list' ? 'flex items-center' : ''}`}>
                  <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold text-text-primary group-hover:text-primary transition-colors duration-300">
                        {tech}
                      </h3>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                          <Code className="w-3 h-3 text-primary" />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs text-text-secondary mb-4">
                      <div className="text-center p-2 bg-surface/20 rounded">
                        <div className="font-medium text-text-primary">{stats?.count || 0}</div>
                        <div>Projects</div>
                      </div>
                      <div className="text-center p-2 bg-surface/20 rounded">
                        <div className="font-medium text-text-primary">
                          {projects.length > 0 
                            ? Array.from(new Set(projects.map(p => p.industry))).length 
                            : 0}
                        </div>
                        <div>Industries</div>
                      </div>
                    </div>

                    {projects.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-text-primary mb-2">Used in Projects:</h4>
                        <div className="space-y-2">
                          {projects.slice(0, viewMode === 'list' ? 2 : 3).map((project) => (
                            <div key={project.id} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                              <span className="text-text-secondary text-sm truncate">{project.title}</span>
                            </div>
                          ))}
                          {projects.length > (viewMode === 'list' ? 2 : 3) && (
                            <div className="text-text-secondary text-sm">
                              +{projects.length - (viewMode === 'list' ? 2 : 3)} more projects
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 mb-4">
                      {Array.from(new Set(projects.map(p => p.industry))).slice(0, 3).map((industry) => (
                        <span key={industry} className="px-2 py-1 bg-surface/30 text-text-secondary rounded-full text-xs">
                          {industry}
                        </span>
                      ))}
                    </div>

                    <Button size="sm" variant="outline" className="w-full">
                      <BarChart3 className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </Card>
              );
            })}
          </motion.div>

          {filteredTechnologies.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="max-w-md mx-auto">
                <div className="w-16 h-16 bg-surface/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">No technologies found</h3>
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

export default TechStackExplorerPage;