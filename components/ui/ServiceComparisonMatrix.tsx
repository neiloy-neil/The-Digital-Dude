import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Info, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Card from './Card';
import Button from './Button';
// import { services, serviceDetails } from '../../data/servicesData'; // Unused import

interface ServiceFeature {
  name: string;
  included: boolean | string;
  description?: string;
}

interface ComparisonData {
  id: string;
  title: string;
  description: string;
  features: ServiceFeature[];
  priceRange: string;
  bestFor: string[];
}

const ServiceComparisonMatrix = () => {
  const navigate = useNavigate();
  const [selectedServices, setSelectedServices] = useState<string[]>(['custom-software', 'ai-ml', 'saas']);
  const [viewMode, setViewMode] = useState<'table' | 'cards'>('table');

  // Define service categories for comparison
  const serviceCategories: ComparisonData[] = [
    {
      id: 'custom-software',
      title: 'Custom Software Development',
      description: 'Bespoke solutions tailored to your exact business processes',
      priceRange: '£50k-£500k+',
      bestFor: ['Unique business processes', 'Complex integrations', 'Proprietary systems'],
      features: [
        { name: 'Workflow Automation', included: true, description: 'Bespoke workflow automation tailored to your exact business processes' },
        { name: 'Third-party Integrations', included: true, description: 'Seamless integration with accounting, marketing, operations APIs' },
        { name: 'Scalable Architecture', included: true, description: 'Architecture designed to handle growth without performance degradation' },
        { name: 'User-centric Design', included: true, description: 'Interface design that minimizes training time and maximizes adoption' },
        { name: 'Access Control', included: true, description: 'Role-based access control for data security' },
        { name: 'Analytics Dashboards', included: true, description: 'Comprehensive reporting and analytics dashboards' },
        { name: 'Admin Panels', included: true, description: 'Centralized internal admin panels for operational control' },
        { name: 'Customer Portals', included: true, description: 'Secure customer-facing portals for self-service' },
        { name: 'Real-time Processing', included: true, description: 'Real-time data processing engines for instant updates' },
        { name: 'Custom Billing', included: true, description: 'Custom billing and invoicing systems' }
      ]
    },
    {
      id: 'ai-ml',
      title: 'AI & Data Solutions',
      description: 'Turn your data into your most valuable asset with AI',
      priceRange: '£30k-£200k+',
      bestFor: ['Data-driven insights', 'Process automation', 'Predictive analytics'],
      features: [
        { name: 'Custom AI Models', included: true, description: 'AI models trained on your specific business data' },
        { name: 'System Integration', included: true, description: 'Integration with existing systems and workflows' },
        { name: 'Real-time Analytics', included: true, description: 'Real-time analytics and predictive insights' },
        { name: 'Automated Decisions', included: true, description: 'Automated decision-making capabilities' },
        { name: 'NLP Processing', included: true, description: 'Natural language processing for chatbots and document analysis' },
        { name: 'Computer Vision', included: true, description: 'Computer vision for image and video analysis' },
        { name: 'Data Pipelines', included: true, description: 'Data pipeline and preprocessing systems' },
        { name: 'Model Training', included: true, description: 'Model training and evaluation frameworks' },
        { name: 'API Endpoints', included: true, description: 'API endpoints for real-time inference' },
        { name: 'Performance Monitoring', included: true, description: 'Monitoring and alerting for model performance' }
      ]
    },
    {
      id: 'saas',
      title: 'B2B SaaS Platforms',
      description: 'Launch your own software product with our end-to-end SaaS development',
      priceRange: '£75k-£300k+',
      bestFor: ['Software products', 'Recurring revenue', 'Multi-tenant solutions'],
      features: [
        { name: 'Multi-tenancy', included: true, description: 'Secure multi-tenancy architecture to isolate customer data' },
        { name: 'Subscription Billing', included: true, description: 'Flexible subscription billing and payment gateway integration' },
        { name: 'User Management', included: true, description: 'Advanced user role and permission management' },
        { name: 'Cloud Infrastructure', included: true, description: 'Robust and scalable cloud infrastructure' },
        { name: 'White-labeling', included: true, description: 'Customizable branding and white-labeling capabilities' },
        { name: 'API Documentation', included: true, description: 'Full API documentation for third-party integrations' },
        { name: 'Admin Dashboard', included: true, description: 'Super Admin dashboard for user and subscription management' },
        { name: 'Analytics Suite', included: true, description: 'Comprehensive analytics and reporting suite' },
        { name: 'User Onboarding', included: true, description: 'Automated user onboarding and email notification system' },
        { name: 'Feature Flagging', included: true, description: 'Feature flagging and A/B testing frameworks' }
      ]
    },
    {
      id: 'web-mobile',
      title: 'Web & Mobile Ecosystems',
      description: 'Unified digital ecosystems for web and mobile platforms',
      priceRange: '£40k-£250k+',
      bestFor: ['Cross-platform apps', 'Mobile workforce', 'User engagement'],
      features: [
        { name: 'Cross-platform Apps', included: true, description: 'Cross-platform mobile applications for iOS & Android' },
        { name: 'Progressive Web Apps', included: true, description: 'High-performance Progressive Web Apps (PWAs)' },
        { name: 'Data Synchronization', included: true, description: 'Real-time, bidirectional data synchronization' },
        { name: 'Offline Functionality', included: true, description: 'Robust offline functionality' },
        { name: 'Biometric Auth', included: true, description: 'Secure biometric authentication (Face ID, Touch ID)' },
        { name: 'Device Integration', included: true, description: 'Native device feature integration (camera, GPS)' },
        { name: 'Push Notifications', included: true, description: 'Push notification systems for user engagement' },
        { name: 'Geolocation Services', included: true, description: 'Geolocation services including live tracking' },
        { name: 'In-app Chat', included: true, description: 'In-app chat and communication tools' },
        { name: 'Admin Console', included: true, description: 'Centralized web-based admin console' }
      ]
    },
    {
      id: 'marketplaces',
      title: 'Two-Sided Marketplaces',
      description: 'Feature-rich marketplace platforms connecting buyers and sellers',
      priceRange: '£60k-£400k+',
      bestFor: ['Marketplace platforms', 'Peer-to-peer services', 'Commission models'],
      features: [
        { name: 'Dual Onboarding', included: true, description: 'Distinct onboarding flows for buyers and sellers' },
        { name: 'Secure Payments', included: true, description: 'Secure payment processing with escrow' },
        { name: 'Advanced Search', included: true, description: 'Advanced search and filtering capabilities' },
        { name: 'Messaging System', included: true, description: 'Integrated messaging system with dispute resolution' },
        { name: 'Rating System', included: true, description: 'Robust review and rating system' },
        { name: 'Commission Engine', included: true, description: 'Dynamic commission and fee management engine' },
        { name: 'Admin Dashboard', included: true, description: 'Admin dashboard with moderation tools' },
        { name: 'Promotional Codes', included: true, description: 'Promotional code and discount system' },
        { name: 'Featured Listings', included: true, description: 'Featured listings and advertising options' },
        { name: 'Analytics', included: true, description: 'Analytics on transaction volume and user growth' }
      ]
    }
  ];

  const toggleService = (serviceId: string) => {
    if (selectedServices.includes(serviceId)) {
      setSelectedServices(selectedServices.filter(id => id !== serviceId));
    } else {
      setSelectedServices([...selectedServices, serviceId]);
    }
  };

  const getServiceById = (id: string) => {
    return serviceCategories.find(service => service.id === id);
  };

  const allFeatures = Array.from(
    new Set(
      serviceCategories.flatMap(service => 
        service.features.map(feature => feature.name)
      )
    )
  );

  const getFeatureStatus = (serviceName: string, featureName: string) => {
    const service = serviceCategories.find(s => s.id === serviceName);
    if (!service) return { included: false, description: '' };
    
    const feature = service.features.find(f => f.name === featureName);
    return feature || { included: false, description: '' };
  };

  return (
    <Card className="p-6 max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-3">
          Service Comparison Matrix
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Compare our services side-by-side to find the perfect solution for your business needs
        </p>
      </div>

      {/* View Toggle */}
      <div className="flex justify-center mb-6">
        <div className="flex bg-surface/30 rounded-lg p-1 border border-border/30">
          <button
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              viewMode === 'table'
                ? 'bg-primary text-white shadow-lg'
                : 'text-text-secondary hover:text-text-primary'
            }`}
            onClick={() => setViewMode('table')}
          >
            Table View
          </button>
          <button
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              viewMode === 'cards'
                ? 'bg-primary text-white shadow-lg'
                : 'text-text-secondary hover:text-text-primary'
            }`}
            onClick={() => setViewMode('cards')}
          >
            Card View
          </button>
        </div>
      </div>

      {viewMode === 'table' ? (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border-b border-border p-4 text-left text-text-primary font-semibold">
                  Features
                </th>
                {selectedServices.map(serviceId => {
                  const service = getServiceById(serviceId);
                  if (!service) return null;
                  return (
                    <th key={serviceId} className="border-b border-border p-4 text-center min-w-[200px]">
                      <div className="flex flex-col items-center">
                        <div className="font-semibold text-text-primary mb-2">{service.title}</div>
                        <div className="text-sm text-text-secondary mb-3">{service.description}</div>
                        <div className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                          {service.priceRange}
                        </div>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="mt-3"
                          onClick={() => navigate(`/services/${serviceId}`)}
                        >
                          Learn More
                        </Button>
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {allFeatures.map((feature, index) => (
                <tr key={feature} className={index % 2 === 0 ? 'bg-surface/30' : ''}>
                  <td className="border-b border-border p-4 font-medium text-text-primary">
                    <div className="flex items-center gap-2">
                      {feature}
                      <Info className="w-4 h-4 text-text-secondary" />
                    </div>
                  </td>
                  {selectedServices.map(serviceId => {
                    const featureStatus = getFeatureStatus(serviceId, feature);
                    return (
                      <td key={`${serviceId}-${feature}`} className="border-b border-border p-4 text-center">
                        {featureStatus.included ? (
                          <div className="flex flex-col items-center">
                            <Check className="w-5 h-5 text-green-500 mx-auto mb-1" />
                            <span className="text-xs text-text-secondary">
                              {typeof featureStatus.included === 'string' ? featureStatus.included : 'Included'}
                            </span>
                          </div>
                        ) : (
                          <X className="w-5 h-5 text-red-500 mx-auto" />
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedServices.map(serviceId => {
            const service = getServiceById(serviceId);
            if (!service) return null;
            
            return (
              <motion.div
                key={serviceId}
                className="h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full flex flex-col">
                  <div className="p-5 border-b border-border">
                    <h3 className="text-xl font-bold text-text-primary mb-2">{service.title}</h3>
                    <p className="text-text-secondary text-sm mb-3">{service.description}</p>
                    <div className="text-xs bg-primary/10 text-primary px-2 py-1 rounded inline-block">
                      {service.priceRange}
                    </div>
                  </div>
                  
                  <div className="p-5 flex-grow">
                    <h4 className="font-semibold text-text-primary mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 6).map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-text-secondary">{feature.name}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-4">
                      <h4 className="font-semibold text-text-primary mb-2">Best For</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.bestFor.map((item, index) => (
                          <span 
                            key={index} 
                            className="text-xs bg-accent/10 text-accent px-2 py-1 rounded"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-5 pt-0">
                    <Button 
                      className="w-full" 
                      onClick={() => navigate(`/services/${serviceId}`)}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Service Selector */}
      <div className="mt-8 pt-6 border-t border-border">
        <h3 className="text-lg font-semibold text-text-primary mb-4 text-center">
          Select Services to Compare
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {serviceCategories.map(service => (
            <button
              key={service.id}
              onClick={() => toggleService(service.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedServices.includes(service.id)
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-surface border border-border text-text-secondary hover:bg-surface/80'
              }`}
            >
              {service.title}
              {selectedServices.includes(service.id) && (
                <Check className="w-4 h-4" />
              )}
            </button>
          ))}
        </div>
        <p className="text-xs text-text-secondary text-center mt-3">
          Select 2-4 services to compare. Currently comparing: {selectedServices.length} services
        </p>
      </div>
    </Card>
  );
};

export default ServiceComparisonMatrix;