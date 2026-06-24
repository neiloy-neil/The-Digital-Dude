import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, DollarSign, Clock, Users, Zap, BarChart3, PieChart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import Card from './Card';

interface PricingData {
  projectType: string;
  complexity: string;
  teamSize: number;
  timeline: string;
  features: string[];
  integrations: number;
  designComplexity: string;
  supportLevel: string;
}

const projectTypes = [
  { id: 'web-app', name: 'Web Application', baseCost: 15000 },
  { id: 'mobile-app', name: 'Mobile App', baseCost: 20000 },
  { id: 'saas', name: 'SaaS Platform', baseCost: 25000 },
  { id: 'ecommerce', name: 'E-commerce', baseCost: 18000 },
  { id: 'ai-ml', name: 'AI/ML Solution', baseCost: 30000 },
  { id: 'enterprise', name: 'Enterprise System', baseCost: 40000 }
];

const complexities = [
  { id: 'basic', name: 'Basic', multiplier: 1.0 },
  { id: 'standard', name: 'Standard', multiplier: 1.5 },
  { id: 'complex', name: 'Complex', multiplier: 2.0 }
];

const timelines = [
  { id: 'normal', name: 'Normal (8-12 weeks)', multiplier: 1.0 },
  { id: 'expedited', name: 'Expedited (4-6 weeks)', multiplier: 1.8 },
  { id: 'flexible', name: 'Flexible (12+ weeks)', multiplier: 0.8 }
];

const designOptions = [
  { id: 'basic', name: 'Basic UI', multiplier: 1.0 },
  { id: 'custom', name: 'Custom Design', multiplier: 1.5 },
  { id: 'premium', name: 'Premium Design', multiplier: 2.0 }
];

const supportLevels = [
  { id: 'basic', name: 'Basic Support', multiplier: 1.0 },
  { id: 'standard', name: 'Standard Support', multiplier: 1.3 },
  { id: 'premium', name: 'Premium Support', multiplier: 1.8 }
];

const features = [
  'User Authentication',
  'Payment Processing',
  'Real-time Chat',
  'File Upload/Storage',
  'Analytics Dashboard',
  'API Development',
  'Admin Panel',
  'Multi-tenancy',
  'Third-party Integrations',
  'Push Notifications'
];

const PricingCalculator = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<PricingData>({
    projectType: 'web-app',
    complexity: 'standard',
    teamSize: 3,
    timeline: 'normal',
    features: [],
    integrations: 2,
    designComplexity: 'custom',
    supportLevel: 'standard'
  });

  const [activeTab, setActiveTab] = useState<'calculator' | 'breakdown'>('calculator');

  const calculatePricing = () => {
    // Get base cost
    const projectType = projectTypes.find(p => p.id === formData.projectType) || projectTypes[0];
    let baseCost = projectType.baseCost;
    
    // Apply complexity multiplier
    const complexity = complexities.find(c => c.id === formData.complexity) || complexities[1];
    baseCost *= complexity.multiplier;
    
    // Apply timeline multiplier
    const timeline = timelines.find(t => t.id === formData.timeline) || timelines[0];
    baseCost *= timeline.multiplier;
    
    // Apply design complexity multiplier
    const design = designOptions.find(d => d.id === formData.designComplexity) || designOptions[1];
    baseCost *= design.multiplier;
    
    // Apply support level multiplier
    const support = supportLevels.find(s => s.id === formData.supportLevel) || supportLevels[1];
    baseCost *= support.multiplier;
    
    // Add feature costs
    const featureCost = formData.features.length * 1500;
    
    // Add integration costs
    const integrationCost = formData.integrations * 2000;
    
    // Calculate team costs (additional developers)
    const teamCost = Math.max(0, formData.teamSize - 3) * 8000;
    
    // Total cost
    const totalCost = Math.round(baseCost + featureCost + integrationCost + teamCost);
    
    // Breakdown
    const developmentCost = Math.round(baseCost * 0.6);
    const designCost = Math.round(baseCost * 0.2);
    const testingCost = Math.round(baseCost * 0.1);
    const projectManagementCost = Math.round(baseCost * 0.1);
    
    return {
      totalCost,
      developmentCost,
      designCost,
      testingCost,
      projectManagementCost,
      featureCost,
      integrationCost,
      teamCost,
      timeline: timeline.name,
      complexity: complexity.name,
      design: design.name,
      support: support.name
    };
  };

  const results = calculatePricing();

  const handleInputChange = (field: keyof PricingData, value: string | number | string[]) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const toggleFeature = (feature: string) => {
    const newFeatures = formData.features.includes(feature)
      ? formData.features.filter(f => f !== feature)
      : [...formData.features, feature];
    handleInputChange('features', newFeatures);
  };

  return (
    <Card className="p-8 max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Calculator className="w-8 h-8 text-primary" />
          <h3 className="text-2xl font-bold text-text-primary">Project Pricing Calculator</h3>
        </div>
        <p className="text-text-secondary">
          Estimate the cost of your custom software project based on your specific requirements
        </p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-border mb-6">
        <button
          className={`py-3 px-6 font-medium text-sm rounded-t-lg transition-colors ${
            activeTab === 'calculator'
              ? 'text-primary border-b-2 border-primary bg-primary/5'
              : 'text-text-secondary hover:text-text-primary'
          }`}
          onClick={() => setActiveTab('calculator')}
        >
          <Calculator className="w-4 h-4 inline mr-2" />
          Calculator
        </button>
        <button
          className={`py-3 px-6 font-medium text-sm rounded-t-lg transition-colors ${
            activeTab === 'breakdown'
              ? 'text-primary border-b-2 border-primary bg-primary/5'
              : 'text-text-secondary hover:text-text-primary'
          }`}
          onClick={() => setActiveTab('breakdown')}
        >
          <BarChart3 className="w-4 h-4 inline mr-2" />
          Cost Breakdown
        </button>
      </div>

      {activeTab === 'calculator' ? (
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-text-primary mb-4">Project Details</h4>
            
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">
                Project Type
              </label>
              <select
                value={formData.projectType}
                onChange={(e) => handleInputChange('projectType', e.target.value)}
                className="w-full bg-surface border border-border rounded-md py-3 px-4 text-text-primary focus:ring-2 focus:ring-primary focus:border-primary transition"
              >
                {projectTypes.map(type => (
                  <option key={type.id} value={type.id}>{type.name}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">
                  Project Complexity
                </label>
                <select
                  value={formData.complexity}
                  onChange={(e) => handleInputChange('complexity', e.target.value)}
                  className="w-full bg-surface border border-border rounded-md py-3 px-4 text-text-primary focus:ring-2 focus:ring-primary focus:border-primary transition"
                >
                  {complexities.map(complexity => (
                    <option key={complexity.id} value={complexity.id}>{complexity.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">
                  Design Complexity
                </label>
                <select
                  value={formData.designComplexity}
                  onChange={(e) => handleInputChange('designComplexity', e.target.value)}
                  className="w-full bg-surface border border-border rounded-md py-3 px-4 text-text-primary focus:ring-2 focus:ring-primary focus:border-primary transition"
                >
                  {designOptions.map(design => (
                    <option key={design.id} value={design.id}>{design.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">
                  Development Timeline
                </label>
                <select
                  value={formData.timeline}
                  onChange={(e) => handleInputChange('timeline', e.target.value)}
                  className="w-full bg-surface border border-border rounded-md py-3 px-4 text-text-primary focus:ring-2 focus:ring-primary focus:border-primary transition"
                >
                  {timelines.map(timeline => (
                    <option key={timeline.id} value={timeline.id}>{timeline.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">
                  Support Level
                </label>
                <select
                  value={formData.supportLevel}
                  onChange={(e) => handleInputChange('supportLevel', e.target.value)}
                  className="w-full bg-surface border border-border rounded-md py-3 px-4 text-text-primary focus:ring-2 focus:ring-primary focus:border-primary transition"
                >
                  {supportLevels.map(support => (
                    <option key={support.id} value={support.id}>{support.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">
                Development Team Size
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={formData.teamSize}
                  onChange={(e) => handleInputChange('teamSize', Number(e.target.value))}
                  className="flex-1 h-2 bg-surface rounded-lg appearance-none cursor-pointer"
                />
                <span className="text-text-primary font-medium w-8">{formData.teamSize}</span>
              </div>
              <div className="text-xs text-text-secondary mt-1">
                Base team includes 3 developers. Additional developers add £8,000 each.
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">
                Third-party Integrations
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="0"
                  max="10"
                  value={formData.integrations}
                  onChange={(e) => handleInputChange('integrations', Number(e.target.value))}
                  className="flex-1 h-2 bg-surface rounded-lg appearance-none cursor-pointer"
                />
                <span className="text-text-primary font-medium w-8">{formData.integrations}</span>
              </div>
              <div className="text-xs text-text-secondary mt-1">
                Each integration adds £2,000 to the project cost.
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-secondary mb-3">
                Additional Features (Each adds £1,500)
              </label>
              <div className="grid grid-cols-1 gap-2 max-h-40 overflow-y-auto pr-2">
                {features.map((feature) => (
                  <label key={feature} className="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-surface/20 transition-colors">
                    <input
                      type="checkbox"
                      checked={formData.features.includes(feature)}
                      onChange={() => toggleFeature(feature)}
                      className="text-primary focus:ring-primary rounded h-4 w-4"
                    />
                    <span className="text-text-secondary text-sm">{feature}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-text-primary mb-4">Estimated Project Cost</h4>
            
            <motion.div
              className="grid grid-cols-1 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <DollarSign className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-text-secondary">Total Project Cost</span>
                </div>
                <div className="text-3xl font-bold text-primary">
                  £{results.totalCost.toLocaleString()}
                </div>
              </div>

              <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium text-text-secondary">Estimated Timeline</span>
                </div>
                <div className="text-xl font-bold text-accent">
                  {results.timeline}
                </div>
              </div>

              <div className="bg-surface/20 border border-border rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="w-5 h-5 text-text-secondary" />
                  <span className="text-sm font-medium text-text-secondary">Team Composition</span>
                </div>
                <div className="text-lg font-bold text-text-primary">
                  {formData.teamSize} Developer{formData.teamSize > 1 ? 's' : ''}
                </div>
              </div>
            </motion.div>

            <Card className="p-4 bg-surface/50">
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h5 className="font-medium text-text-primary mb-1">Project Summary</h5>
                  <p className="text-sm text-text-secondary">
                    {projectTypes.find(p => p.id === formData.projectType)?.name} with {results.complexity} complexity, 
                    {formData.features.length > 0 ? ` ${formData.features.length} additional features,` : ''} 
                    and {results.design} package.
                  </p>
                </div>
              </div>
            </Card>

            <div className="pt-4">
              <Button className="w-full" size="lg" onClick={() => navigate('/contact')}>
                Get Detailed Quote
              </Button>
              <p className="text-xs text-text-secondary text-center mt-2">
                *This is an estimate. Actual pricing may vary based on detailed requirements.
              </p>
            </div>
          </div>
        </div>
      ) : (
        // Detailed Breakdown Tab
        <div className="space-y-6">
          <h4 className="text-lg font-semibold text-text-primary mb-4">Detailed Cost Breakdown</h4>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="p-4 text-center">
              <DollarSign className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-text-primary">£{results.totalCost.toLocaleString()}</div>
              <div className="text-sm text-text-secondary">Total Project Cost</div>
            </Card>
            
            <Card className="p-4 text-center">
              <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-text-primary">{formData.teamSize}</div>
              <div className="text-sm text-text-secondary">Developers</div>
            </Card>
            
            <Card className="p-4 text-center">
              <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-text-primary">{formData.features.length}</div>
              <div className="text-sm text-text-secondary">Additional Features</div>
            </Card>
            
            <Card className="p-4 text-center">
              <PieChart className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-text-primary">{formData.integrations}</div>
              <div className="text-sm text-text-secondary">Integrations</div>
            </Card>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <Card className="p-6">
              <h5 className="font-semibold text-text-primary mb-4 flex items-center gap-2">
                <PieChart className="w-5 h-5 text-primary" />
                Cost Breakdown
              </h5>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Development</span>
                  <span className="font-medium">£{results.developmentCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Design</span>
                  <span className="font-medium">£{results.designCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Testing & QA</span>
                  <span className="font-medium">£{results.testingCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Project Management</span>
                  <span className="font-medium">£{results.projectManagementCost.toLocaleString()}</span>
                </div>
                {results.featureCost > 0 && (
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Additional Features</span>
                    <span className="font-medium">£{results.featureCost.toLocaleString()}</span>
                  </div>
                )}
                {results.integrationCost > 0 && (
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Integrations</span>
                    <span className="font-medium">£{results.integrationCost.toLocaleString()}</span>
                  </div>
                )}
                {results.teamCost > 0 && (
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Additional Developers</span>
                    <span className="font-medium">£{results.teamCost.toLocaleString()}</span>
                  </div>
                )}
                <div className="border-t border-border pt-2 mt-2">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>£{results.totalCost.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <h5 className="font-semibold text-text-primary mb-4">Project Details</h5>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-text-secondary mb-1">Project Type</div>
                  <div className="font-medium">{projectTypes.find(p => p.id === formData.projectType)?.name}</div>
                </div>
                <div>
                  <div className="text-sm text-text-secondary mb-1">Complexity</div>
                  <div className="font-medium">{results.complexity}</div>
                </div>
                <div>
                  <div className="text-sm text-text-secondary mb-1">Design</div>
                  <div className="font-medium">{results.design}</div>
                </div>
                <div>
                  <div className="text-sm text-text-secondary mb-1">Support</div>
                  <div className="font-medium">{results.support}</div>
                </div>
                <div>
                  <div className="text-sm text-text-secondary mb-1">Timeline</div>
                  <div className="font-medium">{results.timeline}</div>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <Button size="lg" onClick={() => navigate('/contact')}>
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
};

export default PricingCalculator;