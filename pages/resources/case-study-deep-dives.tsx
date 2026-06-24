import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Play, Eye, Download, Target, TrendingUp, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { caseStudies } from '../../data/caseStudiesData';
import Seo from '../../components/seo/SEO';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

const CaseStudyDeepDivesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [selectedTech, setSelectedTech] = useState('All');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<any>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Get unique industries and technologies
  const industries = ['All', ...Array.from(new Set(caseStudies.map(cs => cs.tags).flat()))];
  const technologies = ['All', ...Array.from(new Set(caseStudies.map(cs => cs.techStack).flat()))];

  // Filter case studies based on criteria
  const filteredCaseStudies = caseStudies.filter(cs => {
    // Search filter
    const matchesSearch = searchQuery === '' ||
      cs.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cs.problem.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cs.solution.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (!matchesSearch) return false;
    
    // Industry filter
    if (selectedIndustry !== 'All' && !cs.tags.includes(selectedIndustry)) return false;
    
    // Technology filter
    if (selectedTech !== 'All' && !cs.techStack.includes(selectedTech)) return false;
    
    return true;
  });

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedIndustry('All');
    setSelectedTech('All');
  };

  const openCaseStudy = (caseStudy: any) => {
    setSelectedCaseStudy(caseStudy);
    setActiveImageIndex(0);
  };

  const closeCaseStudy = () => {
    setSelectedCaseStudy(null);
  };

  const nextImage = () => {
    if (selectedCaseStudy && selectedCaseStudy.gallery) {
      setActiveImageIndex((prev) => 
        prev === selectedCaseStudy.gallery.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedCaseStudy && selectedCaseStudy.gallery) {
      setActiveImageIndex((prev) => 
        prev === 0 ? selectedCaseStudy.gallery.length - 1 : prev - 1
      );
    }
  };

  return (
    <>
      <Seo
        title="Case Study Deep Dives | Interactive Presentations & Success Stories"
        description="Explore our detailed case studies with interactive presentations, embedded demos, and comprehensive success stories from real client projects."
        url="https://www.digitaldude.co.uk/resources/case-study-deep-dives"
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
              Case Study Deep Dives
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Explore our detailed success stories with interactive presentations and embedded demos
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
              <div className="text-2xl font-bold text-text-primary">{caseStudies.length}</div>
              <div className="text-text-secondary text-sm">Case Studies</div>
            </Card>
            
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-text-primary">
                {Array.from(new Set(caseStudies.flatMap(cs => cs.tags))).length}
              </div>
              <div className="text-text-secondary text-sm">Industries</div>
            </Card>
            
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-text-primary">
                {Array.from(new Set(caseStudies.flatMap(cs => cs.techStack))).length}
              </div>
              <div className="text-text-secondary text-sm">Technologies</div>
            </Card>
            
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-text-primary">
                {caseStudies.reduce((sum, cs) => sum + (cs.metrics?.length || 0), 0)}
              </div>
              <div className="text-text-secondary text-sm">Key Metrics</div>
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
                  placeholder="Search case studies by title, problem, or solution..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-surface/20 border border-border rounded-lg focus:border-primary focus:outline-none"
                />
              </div>

              {/* Filter Controls */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
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
              </div>

              {/* Category and Technology Filters */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
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
              Showing {filteredCaseStudies.length} of {caseStudies.length} case studies
              {(selectedIndustry !== 'All' || selectedTech !== 'All' || searchQuery) && (
                <span> • <button onClick={resetFilters} className="text-primary hover:underline">Clear filters</button></span>
              )}
            </p>
          </motion.div>

          {/* Case Studies Grid */}
          <motion.div
            key={`${selectedIndustry}-${selectedTech}-${searchQuery}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredCaseStudies.map((caseStudy) => (
              <Card 
                key={caseStudy.id} 
                className="group overflow-hidden hover:bg-surface/30 transition-all duration-300 cursor-pointer"
                onClick={() => openCaseStudy(caseStudy)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-primary text-white px-2 py-1 rounded-full text-xs font-medium">
                      Case Study
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="flex flex-wrap gap-1">
                      {caseStudy.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-black/50 text-white rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-text-primary group-hover:text-primary transition-colors duration-300 mb-2">
                    {caseStudy.title}
                  </h3>

                  <p className="text-text-secondary text-sm mb-4 line-clamp-3">
                    {caseStudy.problem.substring(0, 100)}...
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {caseStudy.techStack.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-surface/30 text-text-secondary rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                    {caseStudy.techStack.length > 3 && (
                      <span className="px-2 py-1 bg-surface/30 text-text-secondary rounded-full text-xs">
                        +{caseStudy.techStack.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-xs text-text-secondary">
                    {caseStudy.metrics.slice(0, 3).map((metric, index) => (
                      <div key={index} className="text-center p-2 bg-surface/20 rounded">
                        <div className="font-medium text-text-primary">{metric.value}</div>
                        <div className="truncate">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  <Button size="sm" variant="outline" className="w-full mt-4">
                    <Eye className="w-4 h-4 mr-2" />
                    View Deep Dive
                  </Button>
                </div>
              </Card>
            ))}
          </motion.div>

          {filteredCaseStudies.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="max-w-md mx-auto">
                <div className="w-16 h-16 bg-surface/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">No case studies found</h3>
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

      {/* Case Study Modal */}
      {selectedCaseStudy && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={closeCaseStudy}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-surface max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-surface border-b border-border p-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-text-primary">
                {selectedCaseStudy.title}
              </h2>
              <Button variant="ghost" size="sm" onClick={closeCaseStudy}>
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="p-6">
              {/* Image Gallery */}
              {selectedCaseStudy.gallery && selectedCaseStudy.gallery.length > 0 && (
                <div className="relative mb-6">
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <img
                      src={selectedCaseStudy.gallery[activeImageIndex]}
                      alt={`Gallery image ${activeImageIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                    {selectedCaseStudy.gallery.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                          {selectedCaseStudy.gallery.map((_: any, index: number) => (
                            <button
                              key={index}
                              onClick={() => setActiveImageIndex(index)}
                              className={`w-2 h-2 rounded-full ${
                                index === activeImageIndex ? 'bg-white' : 'bg-white/50'
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}

              {/* Problem */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-text-primary mb-2 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  The Challenge
                </h3>
                <p className="text-text-secondary">
                  {selectedCaseStudy.problem}
                </p>
              </div>

              {/* Solution */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-text-primary mb-2 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Our Solution
                </h3>
                <p className="text-text-secondary">
                  {selectedCaseStudy.solution}
                </p>
              </div>

              {/* Key Features */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-text-primary mb-3">
                  Key Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedCaseStudy.keyFeatures.map((feature: string, index: number) => (
                    <div key={index} className="flex items-start gap-2 p-3 bg-surface/20 rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-text-secondary">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-text-primary mb-3">
                  Results & Impact
                </h3>
                <p className="text-text-secondary mb-4">
                  {selectedCaseStudy.result}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {selectedCaseStudy.metrics.map((metric: any, index: number) => (
                    <Card key={index} className="p-4 text-center">
                      <div className="text-2xl font-bold text-primary mb-1">{metric.value}</div>
                      <div className="text-text-secondary text-sm">{metric.label}</div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-text-primary mb-3">
                  Technology Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedCaseStudy.techStack.map((tech: string, index: number) => (
                    <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-text-primary mb-3">
                  Industry Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedCaseStudy.tags.map((tag: string, index: number) => (
                    <span key={index} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-3">
                <Button>
                  <Play className="w-4 h-4 mr-2" />
                  View Live Demo
                </Button>
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Download Full Report
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default CaseStudyDeepDivesPage;