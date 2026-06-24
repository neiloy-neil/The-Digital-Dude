import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Section from '../../components/ui/Section';
import Card from '../../components/ui/Card';
import { Server, LayoutDashboard, Store, ChevronDown, CheckCircle } from 'lucide-react';
import Seo from '../../components/Seo';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);

  const offerings = [
    {
      id: 'crm',
      title: 'CRM Systems',
      description: 'For businesses managing leads, customers, jobs, agents, or any structured workflow that currently lives in WhatsApp groups or spreadsheets.',
      icon: LayoutDashboard,
      features: ['custom pipeline and status tracking', 'role-based dashboards', 'reporting', 'multi-channel lead capture', 'agent performance views'],
      price: 'Starting from: £3,000',
      example: 'See example: Airline ticketing CRM, Property management CRM',
      link: '/work'
    },
    {
      id: 'saas',
      title: 'SaaS Platform Development',
      description: 'For founders and operators who want to turn a workflow or service into a software product that runs itself.',
      icon: Server,
      features: ['multi-tenant architecture', 'subscription billing (Stripe)', 'user portals', 'admin dashboard', 'API development'],
      price: 'Starting from: £8,000',
      example: 'See example: AI tutoring platform, Matrimony SaaS',
      link: '/work'
    },
    {
      id: 'marketplaces',
      title: 'On-Demand Marketplaces',
      description: 'For service businesses that need to connect two sides — customers and providers — in a trackable, scalable system.',
      icon: Store,
      features: ['customer app', 'provider/worker app', 'admin CRM', 'Stripe payments', 'real-time job tracking', 'photo capture', 'commission management'],
      price: 'Starting from: £15,000',
      example: 'See example: Cleaning marketplace, Logistics platform',
      link: '/work'
    },
    {
      id: 'erp',
      title: 'ERP & HRM Systems',
      description: 'For growing companies that need to manage employees, departments, payroll, inventory, or operations in one place.',
      icon: Server,
      features: ['custom modules built around your actual workflow', 'role-based access', 'reporting', 'integration with existing tools'],
      price: 'Starting from: £10,000',
      example: '',
      link: '/work'
    }
  ];

  const faqs = [
    { id: '1', question: "What's your payment structure?", answer: '50% upfront, 50% across delivery milestones.' },
    { id: '2', question: 'How long does a project take?', answer: 'CRMs: 8–14 weeks. SaaS: 12–20 weeks. Marketplaces: 14–24 weeks.' },
    { id: '3', question: 'What tech do you use?', answer: 'React, Next.js, Node.js, MongoDB, PostgreSQL, React Native. We recommend the stack based on what fits the project.' },
    { id: '4', question: 'Do you offer support after launch?', answer: 'Yes. Monthly retainers start at £400. 60 days of bug-fix support included in every project.' },
    { id: '5', question: 'Where is your team based?', answer: 'Dhaka, Bangladesh. UK registered (digitaldude.online). We work with clients in Australia, the UK, and Bangladesh.' }
  ];

  return (
    <>
      <Seo 
        title="Services | The Digital Dude" 
        description="We build custom digital systems for businesses that have outgrown spreadsheets and generic software."
      />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-6 text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-text-primary mb-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          >
            We build custom digital systems for businesses that have outgrown <span className="gradient-rgb heading-gradient">spreadsheets</span> and generic software.
          </motion.h1>
        </div>

        <Section title="Core Offerings" subtitle="We focus on what we do best.">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offerings.map(offer => (
              <Card key={offer.id} className="p-8 h-full border-border/30 bg-surface/20 hover:bg-surface/30 transition-all card-gradient-hover flex flex-col">
                <offer.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-3 text-text-primary">{offer.title}</h3>
                <p className="text-text-secondary mb-6 text-lg">{offer.description}</p>
                <div className="mb-6 flex-grow">
                  <h4 className="font-semibold text-text-primary mb-3">What's included:</h4>
                  <ul className="space-y-2">
                    {offer.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-text-secondary">
                        <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" /> 
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto pt-6 border-t border-border/50">
                  <p className="font-bold text-lg text-text-primary mb-2">{offer.price}</p>
                  {offer.example && (
                    <Link to={offer.link} className="text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1 font-medium">
                      → {offer.example}
                    </Link>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section title="FAQ" subtitle="Common questions about working with us.">
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map(faq => (
              <Card key={faq.id} className="overflow-hidden">
                <button 
                  onClick={() => setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-surface/30 transition-colors"
                >
                  <span className="font-semibold text-lg text-text-primary pr-8">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-text-secondary shrink-0 transition-transform duration-300 ${expandedFAQ === faq.id ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence initial={false}>
                  {expandedFAQ === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-text-secondary text-lg leading-relaxed border-t border-border/30 pt-4 mt-2">
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
