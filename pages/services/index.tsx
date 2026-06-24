import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Section from '../../components/ui/Section';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { Server, LayoutDashboard, Store, ChevronDown, CheckCircle } from 'lucide-react';
import Seo from '../../components/Seo';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);

  const offerings = [
    {
      id: 'crm',
      title: 'Custom CRM & Operations Software',
      description: 'Centralize your data, automate manual tasks, and build operational workflows tailored exactly to how your team works.',
      icon: LayoutDashboard,
      features: ['Role-based Dashboards', 'Workflow Automation', 'Custom Reporting', 'Third-party Integrations']
    },
    {
      id: 'saas',
      title: 'SaaS Platform Development',
      description: 'Turn your industry expertise into a scalable, multi-tenant software product with robust billing and subscription management.',
      icon: Server,
      features: ['Multi-tenant Architecture', 'Stripe Billing Integration', 'User Management', 'Admin Portals']
    },
    {
      id: 'marketplaces',
      title: 'On-Demand Marketplaces',
      description: 'Connect buyers and sellers, drivers and riders, or service providers and clients with a custom 2-sided marketplace ecosystem.',
      icon: Store,
      features: ['Multi-sided Platforms', 'Commission Engines', 'Real-time Chat', 'Geolocation']
    }
  ];

  const techStack = [
    { name: 'React', type: 'Frontend' },
    { name: 'Node.js', type: 'Backend' },
    { name: 'Next.js', type: 'Full Stack' },
    { name: 'PostgreSQL', type: 'Database' },
    { name: 'AWS', type: 'Infrastructure' }
  ];

  const faqs = [
    { id: '1', question: 'Do you build from scratch or use templates?', answer: 'We build custom software tailored exactly to your requirements, not shoehorned into a template.' },
    { id: '2', question: 'How long does a typical project take?', answer: 'Most MVPs take 8-12 weeks to go live, followed by ongoing iterative improvements.' },
    { id: '3', question: 'Who owns the code?', answer: 'You do. Always. We transfer all intellectual property and source code upon final payment.' },
    { id: '4', question: 'Do you handle maintenance?', answer: 'Yes, we offer ongoing maintenance retainers to keep your software secure and updated.' }
  ];

  return (
    <>
      <Seo 
        title="Services | The Digital Dude" 
        description="Software built for business, not for show. Custom CRMs, SaaS Platforms, and On-Demand Marketplaces."
      />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-6 text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-text-primary mb-6"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          >
            Software built for <span className="gradient-rgb heading-gradient">business</span>,<br/>not for show.
          </motion.h1>
        </div>

        <Section title="Core Offerings" subtitle="We focus on what we do best.">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offerings.map(offer => (
              <Card key={offer.id} className="p-6 h-full border-border/30 bg-surface/20 hover:bg-surface/30 transition-all card-gradient-hover">
                <offer.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2 text-text-primary">{offer.title}</h3>
                <p className="text-text-secondary mb-4">{offer.description}</p>
                <ul className="space-y-2">
                  {offer.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-text-secondary">
                      <CheckCircle className="w-4 h-4 text-accent" /> {f}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Section>

        <Section title="Tech Stack" subtitle="Modern, scalable, and battle-tested." className="bg-surface/10 py-16">
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {techStack.map(tech => (
              <div key={tech.name} className="px-6 py-4 bg-background border border-border/50 rounded-xl shadow-sm text-center min-w-[120px]">
                <span className="block font-bold text-lg text-text-primary">{tech.name}</span>
                <span className="text-xs text-text-secondary uppercase tracking-wider">{tech.type}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section title="How We Price" subtitle="No hidden fees. No surprises.">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 border-primary/20">
              <h3 className="text-2xl font-bold mb-2 text-text-primary">Fixed Price for MVP</h3>
              <p className="text-text-secondary mb-6">Clear scope. Fixed budget. We agree on the deliverables upfront.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-text-secondary"><CheckCircle className="w-5 h-5 text-primary" /> One-page brief</li>
                <li className="flex items-center gap-2 text-text-secondary"><CheckCircle className="w-5 h-5 text-primary" /> 50% upfront, 50% on milestones</li>
                <li className="flex items-center gap-2 text-text-secondary"><CheckCircle className="w-5 h-5 text-primary" /> Guaranteed delivery</li>
              </ul>
              <Link to="/contact"><Button className="w-full">Get a Quote</Button></Link>
            </Card>
            <Card className="p-8 border-accent/20">
              <h3 className="text-2xl font-bold mb-2 text-text-primary">Retainer for Ongoing</h3>
              <p className="text-text-secondary mb-6">Dedicated engineering hours each month for continuous improvement.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-text-secondary"><CheckCircle className="w-5 h-5 text-accent" /> Predictable monthly cost</li>
                <li className="flex items-center gap-2 text-text-secondary"><CheckCircle className="w-5 h-5 text-accent" /> Priority support</li>
                <li className="flex items-center gap-2 text-text-secondary"><CheckCircle className="w-5 h-5 text-accent" /> Cancel anytime</li>
              </ul>
              <Link to="/contact"><Button variant="outline" className="w-full">Learn More</Button></Link>
            </Card>
          </div>
        </Section>

        <Section title="FAQ" subtitle="Common questions about working with us.">
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map(faq => (
              <Card key={faq.id} className="overflow-hidden">
                <button 
                  onClick={() => setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-lg text-text-primary">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${expandedFAQ === faq.id ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {expandedFAQ === faq.id && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-text-secondary">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            ))}
          </div>
        </Section>
      </div>
    </>
  );
};

export default ServicesPage;
