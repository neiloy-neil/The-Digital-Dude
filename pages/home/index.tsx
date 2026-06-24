import { Link } from 'react-router-dom';
import SEO from '../../components/seo/SEO';
import Section from '../../components/ui/Section';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const HomePage = () => {
  return (
    <>
      <SEO 
        title="Custom Software Development | The Digital Dude" 
        description="We build CRMs, SaaS platforms, and on-demand marketplaces for businesses in Australia, the UK, and Bangladesh. 7 products shipped. Real systems, running live."
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "The Digital Dude",
          "url": "https://www.digitaldude.online",
          "logo": "https://www.digitaldude.online/logo.svg",
          "foundingDate": "2020",
          "description": "Custom CRM, SaaS, and marketplace development agency. UK registered, serving Australia, the UK, and Bangladesh.",
          "areaServed": ["AU", "GB", "BD"],
          "contactPoint": {
            "@type": "ContactPoint",
            "email": "info@digitaldude.co.uk",
            "contactType": "sales"
          }
        }}
      />

      {/* 1. Hero */}
      <section className="pt-40 pb-24 px-6 max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6 leading-tight">
          We build CRMs, SaaS platforms, and on-demand marketplaces.
        </h1>
        <p className="text-xl md:text-2xl text-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed">
          7 products shipped. 5 industries served. 4,000+ rentals managed. UK registered.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/work"><Button size="lg">See Our Work</Button></Link>
          <Link to="/contact"><Button variant="outline" size="lg">Start a Project</Button></Link>
        </div>
      </section>

      {/* 2. Work preview */}
      <Section title="Our Work" subtitle="Real systems, running live.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <Card className="p-8 border-border/30 bg-surface/20">
            <h3 className="text-xl font-bold text-text-primary mb-3">Property Compliance CRM</h3>
            <p className="text-text-secondary mb-6 flex-grow">Multi-portal CRM for 30+ agencies and 4,000+ rentals.</p>
          </Card>
          <Card className="p-8 border-border/30 bg-surface/20">
            <h3 className="text-xl font-bold text-text-primary mb-3">Airline Ticketing CRM</h3>
            <p className="text-text-secondary mb-6 flex-grow">Internal CRM replacing scattered WhatsApp chats.</p>
          </Card>
          <Card className="p-8 border-border/30 bg-surface/20">
            <h3 className="text-xl font-bold text-text-primary mb-3">Logistics Coordination</h3>
            <p className="text-text-secondary mb-6 flex-grow">Mobile-first breakdown management platform.</p>
          </Card>
        </div>
        <div className="text-center">
          <Link to="/work" className="text-primary hover:text-primary/80 font-bold inline-flex items-center gap-2 text-lg">
            See all work <ArrowRight size={20} />
          </Link>
        </div>
      </Section>

      {/* 3. Services */}
      <Section title="Services" subtitle="What we build" className="bg-surface/10 py-24">
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-6 mb-10 text-xl text-text-secondary">
            <li className="flex items-center gap-4"><CheckCircle className="text-accent w-8 h-8 shrink-0"/> Custom CRM Systems</li>
            <li className="flex items-center gap-4"><CheckCircle className="text-accent w-8 h-8 shrink-0"/> SaaS Platform Development</li>
            <li className="flex items-center gap-4"><CheckCircle className="text-accent w-8 h-8 shrink-0"/> On-Demand Marketplaces</li>
            <li className="flex items-center gap-4"><CheckCircle className="text-accent w-8 h-8 shrink-0"/> ERP & HRM Systems</li>
          </ul>
          <Link to="/services" className="text-primary hover:text-primary/80 font-bold inline-flex items-center gap-2 text-lg">
            Full services <ArrowRight size={20} />
          </Link>
        </div>
      </Section>

      {/* 4. Process */}
      <Section title="How We Work" subtitle="A transparent, 4-step process">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="border border-border/30 p-6 rounded-xl bg-surface/10">
            <div className="text-4xl font-black text-primary/20 mb-4">01</div>
            <h3 className="font-bold text-lg text-text-primary mb-3">The One-Page Brief</h3>
            <p className="text-text-secondary">No 50-page specs. Scope agreed on one page.</p>
          </div>
          <div className="border border-border/30 p-6 rounded-xl bg-surface/10">
            <div className="text-4xl font-black text-primary/20 mb-4">02</div>
            <h3 className="font-bold text-lg text-text-primary mb-3">Weekly Sprints & Demos</h3>
            <p className="text-text-secondary">You see working software every Friday.</p>
          </div>
          <div className="border border-border/30 p-6 rounded-xl bg-surface/10">
            <div className="text-4xl font-black text-primary/20 mb-4">03</div>
            <h3 className="font-bold text-lg text-text-primary mb-3">Handover & Training</h3>
            <p className="text-text-secondary">We train your team and hand over the keys.</p>
          </div>
          <div className="border border-border/30 p-6 rounded-xl bg-surface/10">
            <div className="text-4xl font-black text-primary/20 mb-4">04</div>
            <h3 className="font-bold text-lg text-text-primary mb-3">Ongoing Support</h3>
            <p className="text-text-secondary">Optional retainer for updates and scaling.</p>
          </div>
        </div>
      </Section>

      {/* 5. CTA block */}
      <section className="py-24 text-center bg-primary/10 mt-12 border-t border-primary/20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-8">Got a project in mind? Let's scope it.</h2>
          <Link to="/contact"><Button size="lg" className="px-10 py-4 text-lg">Start a project</Button></Link>
        </div>
      </section>
    </>
  );
};

export default HomePage;