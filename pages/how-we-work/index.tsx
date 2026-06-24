import { motion } from 'framer-motion';
import Section from '../../components/ui/Section';
import Card from '../../components/ui/Card';
import Seo from '../../components/Seo';

const HowWeWorkPage = () => {
  const steps = [
    {
      number: '01',
      title: 'Brief',
      description: "Before any design or code, we produce a one-page project brief together. It covers: what you want built, what's out of scope, the deadline, who owns each part, and the payment schedule. No brief, no start. This protects you and us."
    },
    {
      number: '02',
      title: 'Design',
      description: "We wireframe and design the core flows before writing a line of code. You review and approve. We don't build on top of a design you haven't seen. Deliverable: annotated wireframes or high-fidelity mockups depending on project scope."
    },
    {
      number: '03',
      title: 'Build',
      description: "Development runs in tracked sprints. You have access to the live staging environment throughout. We use ClickUp for task management — you can see exactly what's being built and what's coming next. Weekly check-in: every Monday, 30 minutes, covering last week, this week, and blockers."
    },
    {
      number: '04',
      title: 'Test',
      description: "Before handover, every feature is tested across browsers and devices. You get a full QA window to raise issues. We fix them before going live."
    },
    {
      number: '05',
      title: 'Handover',
      description: "You receive: source code, database access, hosting credentials, documentation, and a walkthrough session. Everything is in your name. You are not dependent on us to keep the lights on. Post-launch bug support: 60 days included. Extended support retainers available from £400/month."
    }
  ];

  return (
    <>
      <Seo 
        title="How We Work | The Digital Dude" 
        description="Here's exactly what working with us looks like — from first conversation to live deployment."
      />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-6 text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-text-primary mb-6"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          >
            How We <span className="gradient-rgb heading-gradient">Work</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-text-secondary max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          >
            Here's exactly what working with us looks like — from first conversation to live deployment.
          </motion.p>
        </div>

        <Section title="" subtitle="">
          <div className="max-w-4xl mx-auto space-y-12">
            {steps.map((step, index) => (
              <motion.div 
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="text-5xl md:text-6xl font-black text-primary/20 select-none mt-2">
                    {step.number}
                  </div>
                  <Card className="flex-1 p-8 border-border/30 bg-surface/20">
                    <h2 className="text-2xl font-bold text-text-primary mb-4">{step.title}</h2>
                    <p className="text-lg text-text-secondary leading-relaxed">
                      {step.description}
                    </p>
                  </Card>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 pt-12 border-t border-border/30"
            >
              <Card className="p-8 border-accent/20 bg-accent/5">
                <h2 className="text-2xl font-bold text-text-primary mb-6 text-center">Payment Terms</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-accent mb-2">50%</div>
                    <div className="text-text-secondary">Upfront before work begins</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent mb-2">25%</div>
                    <div className="text-text-secondary">At design/build midpoint</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent mb-2">25%</div>
                    <div className="text-text-secondary">On final delivery</div>
                  </div>
                </div>
                <p className="text-center text-text-secondary">
                  We accept <span className="font-semibold text-text-primary">Stripe</span> and <span className="font-semibold text-text-primary">Wise</span> for international transfers.
                </p>
              </Card>
            </motion.div>
          </div>
        </Section>
      </div>
    </>
  );
};

export default HowWeWorkPage;
