import { motion } from 'framer-motion';
import Section from '../../components/ui/Section';
import Card from '../../components/ui/Card';
import Seo from '../../components/Seo';

const HowWeWorkPage = () => {
  const steps = [
    {
      number: '01',
      title: 'Discovery call',
      description: "We figure out if we're a fit. No sales pressure. Just an honest conversation about your operational bottlenecks and whether custom software is the right solution."
    },
    {
      number: '02',
      title: 'One-page brief',
      description: "We define scope, timeline, and fixed cost. We don't believe in 50-page specifications. We give you a clear, single-page brief that outlines exactly what you'll get, when you'll get it, and what it costs."
    },
    {
      number: '03',
      title: 'Design & Architecture',
      description: "Wireframes and database schema. We map out the data structures and user interfaces before writing a single line of code, ensuring everyone is aligned on the final product."
    },
    {
      number: '04',
      title: 'Development sprints',
      description: "Weekly demos of working software. You won't be left in the dark for months. We build iteratively and show you progress every single week so you can provide feedback early."
    },
    {
      number: '05',
      title: 'Handover',
      description: "You get the code, docs, and keys. No vendor lock-in. Once the final payment is made, the IP is yours. We hand over the source code, hosting credentials, and documentation."
    }
  ];

  return (
    <>
      <Seo 
        title="How We Work | The Digital Dude" 
        description="Our transparent, 5-step process for delivering custom software solutions on time and on budget."
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
            className="text-lg text-text-secondary max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          >
            A transparent, predictable process for building custom software. No surprises.
          </motion.p>
        </div>

        <Section title="" subtitle="">
          <div className="max-w-3xl mx-auto space-y-12">
            {steps.map((step, index) => (
              <motion.div 
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="text-4xl md:text-5xl font-black text-primary/30 select-none">
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
          </div>
        </Section>
      </div>
    </>
  );
};

export default HowWeWorkPage;
