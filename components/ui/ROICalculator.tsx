import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, DollarSign, Clock, Users, Building, BarChart3, PieChart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import Card from './Card';

interface ROIData {
  currentHours: number;
  hourlyRate: number;
  inefficiencyPercent: number;
  employees: number;
  // Enhanced fields
  industry: string;
  processType: string;
  automationLevel: number;
  currentSoftware: string;
}

const industries = [
  { id: 'technology', name: 'Technology', inefficiencyAvg: 25 },
  { id: 'healthcare', name: 'Healthcare', inefficiencyAvg: 35 },
  { id: 'finance', name: 'Finance', inefficiencyAvg: 30 },
  { id: 'manufacturing', name: 'Manufacturing', inefficiencyAvg: 40 },
  { id: 'retail', name: 'Retail/E-commerce', inefficiencyAvg: 32 },
  { id: 'education', name: 'Education', inefficiencyAvg: 28 },
  { id: 'other', name: 'Other', inefficiencyAvg: 30 }
];

const processTypes = [
  { id: 'data-entry', name: 'Data Entry & Processing', timeSaved: 60 },
  { id: 'reporting', name: 'Reporting & Analytics', timeSaved: 50 },
  { id: 'customer-service', name: 'Customer Service', timeSaved: 45 },
  { id: 'inventory', name: 'Inventory Management', timeSaved: 55 },
  { id: 'hr', name: 'HR & Payroll', timeSaved: 40 },
  { id: 'accounting', name: 'Accounting & Finance', timeSaved: 50 },
  { id: 'marketing', name: 'Marketing Automation', timeSaved: 45 }
];

const currentSoftwareOptions = [
  'Spreadsheets (Excel/Google Sheets)',
  'Basic Software',
  'Custom Software',
  'No Formal System',
  'Other'
];

const ROICalculator = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<ROIData>({
    currentHours: 40,
    hourlyRate: 50,
    inefficiencyPercent: 30,
    employees: 10,
    industry: 'technology',
    processType: 'data-entry',
    automationLevel: 75,
    currentSoftware: 'Spreadsheets (Excel/Google Sheets)'
  });

  const [activeTab, setActiveTab] = useState<'calculator' | 'breakdown'>('calculator');

  const calculateROI = () => {
    // Get industry-specific inefficiency average
    const industryData = industries.find(i => i.id === formData.industry) || industries[0];
    const processTypeData = processTypes.find(p => p.id === formData.processType) || processTypes[0];
    
    // Adjust inefficiency based on industry and process type
    const adjustedInefficiency = Math.min(70, Math.max(5, 
      (industryData.inefficiencyAvg + processTypeData.timeSaved) / 2
    ));
    
    // Apply automation level
    const effectiveInefficiency = adjustedInefficiency * (formData.automationLevel / 100);
    
    const weeklyWastedHours = (formData.currentHours * effectiveInefficiency / 100) * formData.employees;
    const weeklySavings = weeklyWastedHours * formData.hourlyRate;
    const annualSavings = weeklySavings * 52;
    
    // Adjust project cost based on complexity
    const baseProjectCost = 75000;
    const complexityMultiplier = 1 + (formData.automationLevel / 100) * 0.5;
    const projectCost = baseProjectCost * complexityMultiplier;
    
    const paybackMonths = Math.ceil(projectCost / (weeklySavings * 4.33));
    const threeYearROI = ((annualSavings * 3 - projectCost) / projectCost * 100);
    
    // Additional metrics
    const employeeHoursSaved = weeklyWastedHours * 52; // Annual per employee
    const productivityGain = (employeeHoursSaved / (formData.currentHours * 52)) * 100;

    return {
      weeklyWastedHours: Math.round(weeklyWastedHours),
      weeklySavings: Math.round(weeklySavings),
      annualSavings: Math.round(annualSavings),
      paybackMonths,
      threeYearROI: Math.round(threeYearROI),
      projectCost: Math.round(projectCost),
      employeeHoursSaved: Math.round(employeeHoursSaved),
      productivityGain: Math.round(productivityGain)
    };
  };

  const results = calculateROI();

  const handleInputChange = (field: keyof ROIData, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Get industry-specific recommendation
  const getRecommendation = () => {
    const industryData = industries.find(i => i.id === formData.industry);
    const processTypeData = processTypes.find(p => p.id === formData.processType);
    
    if (!industryData || !processTypeData) return '';
    
    return `Based on your ${industryData.name} industry and ${processTypeData.name} processes, 
            you could save approximately ${results.weeklyWastedHours} hours per week. 
            Our ${processTypeData.name} solutions typically achieve ${formData.automationLevel}% 
            automation for businesses like yours.`;
  };

  return (
    <Card className="p-8 max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Calculator className="w-8 h-8 text-primary" />
          <h3 className="text-2xl font-bold text-text-primary">Enhanced ROI Calculator</h3>
        </div>
        <p className="text-text-secondary">
          Calculate your potential savings with custom software automation, tailored to your industry
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
          Detailed Breakdown
        </button>
      </div>

      {activeTab === 'calculator' ? (
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-text-primary mb-4">Your Business Information</h4>
            
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">
                Industry
              </label>
              <select
                value={formData.industry}
                onChange={(e) => handleInputChange('industry', e.target.value)}
                className="w-full bg-surface border border-border rounded-md py-3 px-4 text-text-primary focus:ring-2 focus:ring-primary focus:border-primary transition"
              >
                {industries.map(industry => (
                  <option key={industry.id} value={industry.id}>{industry.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">
                Process Type
              </label>
              <select
                value={formData.processType}
                onChange={(e) => handleInputChange('processType', e.target.value)}
                className="w-full bg-surface border border-border rounded-md py-3 px-4 text-text-primary focus:ring-2 focus:ring-primary focus:border-primary transition"
              >
                {processTypes.map(process => (
                  <option key={process.id} value={process.id}>{process.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">
                Current Software Solution
              </label>
              <select
                value={formData.currentSoftware}
                onChange={(e) => handleInputChange('currentSoftware', e.target.value)}
                className="w-full bg-surface border border-border rounded-md py-3 px-4 text-text-primary focus:ring-2 focus:ring-primary focus:border-primary transition"
              >
                {currentSoftwareOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">
                  Average work hours per employee per week
                </label>
                <input
                  type="number"
                  value={formData.currentHours}
                  onChange={(e) => handleInputChange('currentHours', Number(e.target.value))}
                  className="w-full bg-surface border border-border rounded-md py-3 px-4 text-text-primary focus:ring-2 focus:ring-primary focus:border-primary transition"
                  min="1"
                  max="80"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">
                  Number of employees
                </label>
                <input
                  type="number"
                  value={formData.employees}
                  onChange={(e) => handleInputChange('employees', Number(e.target.value))}
                  className="w-full bg-surface border border-border rounded-md py-3 px-4 text-text-primary focus:ring-2 focus:ring-primary focus:border-primary transition"
                  min="1"
                  max="500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">
                Average hourly rate ($)
              </label>
              <input
                type="number"
                value={formData.hourlyRate}
                onChange={(e) => handleInputChange('hourlyRate', Number(e.target.value))}
                className="w-full bg-surface border border-border rounded-md py-3 px-4 text-text-primary focus:ring-2 focus:ring-primary focus:border-primary transition"
                min="10"
                max="200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">
                Time wasted on manual processes (%)
              </label>
              <input
                type="range"
                value={formData.inefficiencyPercent}
                onChange={(e) => handleInputChange('inefficiencyPercent', Number(e.target.value))}
                className="w-full h-2 bg-surface rounded-lg appearance-none cursor-pointer"
                min="5"
                max="70"
              />
              <div className="text-center text-sm text-text-secondary mt-1">
                {formData.inefficiencyPercent}%
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">
                Desired Automation Level (%)
              </label>
              <input
                type="range"
                value={formData.automationLevel}
                onChange={(e) => handleInputChange('automationLevel', Number(e.target.value))}
                className="w-full h-2 bg-surface rounded-lg appearance-none cursor-pointer"
                min="30"
                max="95"
              />
              <div className="text-center text-sm text-text-secondary mt-1">
                {formData.automationLevel}% - Higher values mean more comprehensive automation
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-text-primary mb-4">Your Potential Savings</h4>
            
            <motion.div
              className="grid grid-cols-1 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-text-secondary">Weekly Hours Saved</span>
                </div>
                <div className="text-2xl font-bold text-primary">
                  {results.weeklyWastedHours} hours
                </div>
              </div>

              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <DollarSign className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-text-secondary">Annual Cost Savings</span>
                </div>
                <div className="text-2xl font-bold text-primary">
                  ${results.annualSavings.toLocaleString()}
                </div>
              </div>

              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-text-secondary">3-Year ROI</span>
                </div>
                <div className="text-2xl font-bold text-primary">
                  {results.threeYearROI}%
                </div>
              </div>

              <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                <div className="text-sm font-medium text-text-secondary mb-2">Payback Period</div>
                <div className="text-xl font-bold text-accent">
                  {results.paybackMonths} months
                </div>
              </div>
            </motion.div>

            <Card className="p-4 bg-surface/50">
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h5 className="font-medium text-text-primary mb-1">Personalized Recommendation</h5>
                  <p className="text-sm text-text-secondary">
                    {getRecommendation()}
                  </p>
                </div>
              </div>
            </Card>

            <div className="pt-4">
              <Button className="w-full" size="lg" onClick={() => navigate('/contact')}>
                Get Your Custom Quote
              </Button>
              <p className="text-xs text-text-secondary text-center mt-2">
                *Calculations are estimates based on industry averages
              </p>
            </div>
          </div>
        </div>
      ) : (
        // Detailed Breakdown Tab
        <div className="space-y-6">
          <h4 className="text-lg font-semibold text-text-primary mb-4">Detailed Financial Breakdown</h4>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="p-4 text-center">
              <DollarSign className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-text-primary">${results.annualSavings.toLocaleString()}</div>
              <div className="text-sm text-text-secondary">Annual Savings</div>
            </Card>
            
            <Card className="p-4 text-center">
              <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-text-primary">{results.employeeHoursSaved}</div>
              <div className="text-sm text-text-secondary">Hours Saved/Employee/Year</div>
            </Card>
            
            <Card className="p-4 text-center">
              <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-text-primary">{results.productivityGain}%</div>
              <div className="text-sm text-text-secondary">Productivity Gain</div>
            </Card>
            
            <Card className="p-4 text-center">
              <Building className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-text-primary">${results.projectCost.toLocaleString()}</div>
              <div className="text-sm text-text-secondary">Estimated Project Cost</div>
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
                  <span className="text-text-secondary">Development Costs</span>
                  <span className="font-medium">${Math.round(results.projectCost * 0.7).toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Design & UX</span>
                  <span className="font-medium">${Math.round(results.projectCost * 0.15).toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Testing & QA</span>
                  <span className="font-medium">${Math.round(results.projectCost * 0.1).toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Project Management</span>
                  <span className="font-medium">${Math.round(results.projectCost * 0.05).toLocaleString()}</span>
                </div>
                <div className="border-t border-border pt-2 mt-2">
                  <div className="flex justify-between font-semibold">
                    <span>Total Investment</span>
                    <span>${results.projectCost.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <h5 className="font-semibold text-text-primary mb-4">Savings Timeline</h5>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Month 1-6</span>
                    <span>${Math.round(results.weeklySavings * 4.33 * 3).toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-surface rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full" 
                      style={{ width: `${Math.min(100, (results.weeklySavings * 4.33 * 3) / (results.projectCost / 6) * 100)}%` }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Year 1</span>
                    <span>${results.annualSavings.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-surface rounded-full h-2">
                    <div 
                      className="bg-accent h-2 rounded-full" 
                      style={{ width: `${Math.min(100, results.annualSavings / (results.projectCost / 12) * 100)}%` }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>3 Years</span>
                    <span>${(results.annualSavings * 3).toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-surface rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full" 
                      style={{ width: `${Math.min(100, (results.annualSavings * 3) / results.projectCost * 100)}%` }}
                    ></div>
                  </div>
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

export default ROICalculator;