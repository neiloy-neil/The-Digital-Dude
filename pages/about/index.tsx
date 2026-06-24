import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Target, Lightbulb, Users, ArrowRight, Award, MapPin, Calendar } from 'lucide-react';
import Button from '../../components/ui/Button';
import Seo from '../../components/Seo';
import Section from '../../components/ui/Section';
import Card from '../../components/ui/Card';
import ImageWithFallback from '../../components/ui/ImageWithFallback';
import { aboutData } from '../../data/staticData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

// FIX: Casting motion components to 'any' to bypass type checking issues
// that are likely due to a project configuration or dependency version mismatch.
const MotionH1: any = motion.h1;
const MotionP: any = motion.p;
const MotionDiv: any = motion.div;

// FIX: Removed explicit JSX.Element return type to fix type resolution issues with framer-motion.
const teamBios: Record<string, string> = {
    'Farhad Hossain': "Leading strategy, client relationships, and delivery across all projects. Our team — 3 to 5 people depending on project scope, including frontend and backend developers, a digital marketer, and specialist contractors brought in per project. Based in Dhaka, Bangladesh."
}

const AboutPage = () => {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('mission');

  const tabContent = {
    mission: {
      icon: Target,
      title: 'Our Mission',
      content: aboutData.mission
    },
    vision: {
      icon: Lightbulb,
      title: 'Our Vision',
      content: 'To become the leading technology partner for ambitious businesses worldwide, known for transforming complex challenges into elegant, scalable solutions that drive exponential growth. We envision a future where every business, regardless of size, has access to enterprise-grade technology that was previously only available to tech giants. By 2030, we aim to have helped over 500 companies transform their operations through intelligent software solutions.'
    },
    values: {
      icon: Award,
      title: 'Our Values',
      content: 'Innovation, Excellence, Collaboration, and Integrity guide every project we undertake. We believe in building long-term partnerships based on trust and delivering results that exceed expectations. Our commitment to continuous learning and improvement ensures we stay at the forefront of technological advancement while maintaining the highest standards of quality and ethical conduct.'
    },
    approach: {
      icon: Users,
      title: 'Our Approach',
      content: 'We combine technical excellence with deep business understanding to deliver solutions that not only meet today\'s needs but anticipate tomorrow\'s challenges. Our collaborative approach involves working closely with your team throughout the development process, ensuring transparency and alignment at every stage. We employ agile methodologies, rapid prototyping, and continuous feedback loops to ensure the final product exceeds expectations.'
    }
  };
  return (
    <>
      <Seo
        title="About The Digital Dude | Custom Software Development Agency"
        description="Meet our team of expert developers & designers. We build transformative software solutions for ambitious businesses worldwide."
        type="website"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About The Digital Dude",
          "description": "Meet our team of expert developers & designers. We build transformative software solutions for ambitious businesses worldwide.",
          "url": "https://www.digitaldude.online/about",
          "mainEntity": {
            "@type": "Organization",
            "name": "The Digital Dude",
            "description": "Transform your business with custom software, AI solutions & SaaS platforms. Expert developers delivering measurable ROI & scalable digital products.",
            "foundingDate": "2019",
            "founders": [
              {
                "@type": "Person",
                "name": "Farhad Hossain",
                "jobTitle": "CEO & Co-Founder"
              }
            ],
            "employee": [
              {
                "@type": "Person",
                "name": "Farhad Hossain",
                "jobTitle": "CEO & Co-Founder"
              }
            ],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "London",
              "addressCountry": "UK"
            },
            "sameAs": [
              "https://github.com/the-digital-dude",
              "https://linkedin.com/company/the-digital-dude",
              "https://twitter.com/thedigitaldude"
            ]
          }
        }}
      />
      <div className="pt-24 pb-20 min-h-screen bg-gradient-to-br from-background via-background/98 to-surface/5">
        {/* Hero */}
        <div className="container mx-auto px-6 text-center mb-20">
          <MotionH1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Your Technology Partner for 
            <span className="gradient-rgb neon-glow-text">Growth</span>
          </MotionH1>
          <MotionP
            className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We're a dedicated team of passionate architects, engineers, and designers. Our collective mission is to build exceptional <span className="gradient-text">digital products</span> that solve real-world problems and drive tangible <span className="gradient-text">business success</span>.
          </MotionP>
          
          {/* Quick stats */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {[
              { icon: Users, label: '50+ Projects', value: 'Delivered' },
              { icon: MapPin, label: '5+ Countries', value: 'Served' },
              { icon: Calendar, label: '5+ Years', value: 'Experience' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-text-primary">{stat.label}</div>
                <div className="text-sm text-text-secondary">{stat.value}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mission & Philosophy */}
        <Section title="About Digital Dude" subtitle="The core principles that guide our every decision.">
          <div className="max-w-4xl mx-auto">
            {/* Interactive Tabs */}
            <div className="flex justify-center mb-8">
              <div className="flex bg-surface/50 rounded-lg p-1 border border-border">
                {Object.entries(tabContent).map(([key, tab]) => {
                  const IconComponent = tab.icon;
                  return (
                    <motion.button
                      key={key}
                      onClick={() => setActiveTab(key)}
                      className={`flex items-center gap-2 px-6 py-3 rounded-md text-sm font-medium transition-all ${
                        activeTab === key
                          ? 'bg-primary text-white shadow-lg'
                          : 'text-text-secondary hover:text-text-primary'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <IconComponent className="w-4 h-4" />
                      {tab.title}
                    </motion.button>
                  );
                })}
              </div>
            </div>
            
            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 text-center bg-surface/20 relative overflow-hidden group hover:bg-surface/30 transition-all duration-700 border border-border/20 hover:border-primary/40 hover-lift card-gradient-hover">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-accent/3 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative z-10">
                  {(() => {
                    const IconComponent = tabContent[activeTab as keyof typeof tabContent].icon;
                    return <IconComponent className="w-12 h-12 text-primary mx-auto mb-4" />;
                  })()}
                  <h3 className="text-2xl font-bold text-text-primary mb-4 heading-gradient">
                    {tabContent[activeTab as keyof typeof tabContent].title}
                  </h3>
                  <p className="text-lg text-text-secondary leading-relaxed whitespace-pre-line">
                    {tabContent[activeTab as keyof typeof tabContent].content}
                  </p>
                </div>
              </Card>
            </motion.div>
            
            {/* Philosophy Cards */}
            <MotionDiv
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {aboutData.philosophy.map((item) => (
                <MotionDiv key={item.title} variants={itemVariants}>
                  <Card className="p-8 text-center h-full group hover-lift bg-surface/20 hover:bg-surface/30 transition-all duration-700 border border-border/20 hover:border-primary/40">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Lightbulb className="w-10 h-10 text-accent mx-auto mb-4"/>
                    </motion.div>
                    <h3 className="text-lg font-bold text-text-primary mb-3 group-hover:text-accent transition-colors">{item.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed group-hover:text-text-primary/80 transition-colors">{item.description}</p>
                  </Card>
                </MotionDiv>
              ))}
            </MotionDiv>
          </div>
        </Section>

        {/* Milestones / Timeline */}
        <Section title="Our Journey" subtitle="Key milestones in our history of innovation and growth.">
            <div className="relative max-w-2xl mx-auto">
                <div className="absolute left-1/2 w-0.5 h-full bg-border -translate-x-1/2"></div>
                {aboutData.milestones.map((item, index) => (
                    <MotionDiv
                        key={item.year} 
                        className="relative mb-8 flex items-center justify-center"
                        initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'order-2 pl-8 text-left'}`}>
                            <p className="font-bold text-primary text-xl">{item.year}</p>
                            <p className="text-text-secondary">{item.description}</p>
                        </div>
                        <div className="order-1 w-1/2">
                            <div className="mx-auto w-4 h-4 bg-primary rounded-full border-4 border-surface"></div>
                        </div>
                    </MotionDiv>
                ))}
            </div>
        </Section>

        {/* Team */}
        <Section title="Meet the Core Team" subtitle="The experts behind your next project.">
            <MotionDiv
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {aboutData.team.map((member) => (
                    <MotionDiv 
                      key={member.name} 
                      variants={itemVariants}
                      onHoverStart={() => setHoveredMember(member.name)}
                      onHoverEnd={() => setHoveredMember(null)}
                    >
                        <Card className="p-8 text-center h-full group hover-lift relative overflow-hidden bg-surface/30 hover:bg-surface/40 transition-all duration-500 border border-border/30 hover:border-primary/30 card-gradient-hover">
                            {/* Background gradient on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            <div className="relative z-10">
                              <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                              >
                                <ImageWithFallback 
                                  src={member.avatar} 
                                  alt={member.name} 
                                  className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-primary/50 group-hover:border-primary transition-colors" 
                                />
                              </motion.div>
                              <h3 className="font-bold text-text-primary text-lg group-hover:text-primary transition-colors heading-gradient">{member.name}</h3>
                              <p className="text-sm text-accent mb-3 font-medium">{member.role}</p>
                              <motion.p 
                                className="text-text-secondary text-sm leading-relaxed group-hover:text-text-primary/80 transition-colors"
                                animate={hoveredMember === member.name ? { scale: 1.02 } : { scale: 1 }}
                                transition={{ duration: 0.2 }}
                              >
                                {teamBios[member.name]}
                              </motion.p>
                            </div>
                        </Card>
                    </MotionDiv>
                ))}
            </MotionDiv>
        </Section>
        

        {/* CTA Banner */}
        <div className="container mx-auto px-6 mt-20">
            <motion.div 
              className="bg-gradient-to-br from-primary/5 via-primary/3 to-accent/5 border border-primary/20 rounded-xl p-12 text-center relative overflow-hidden group hover:from-primary/8 hover:to-accent/8 transition-all duration-500"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
                {/* Background animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Users className="w-16 h-16 text-primary mx-auto mb-6" />
                  </motion.div>
                  <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 group-hover:text-primary transition-colors heading-gradient">
                    Join Forces With Us
                  </h2>
                  <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8 leading-relaxed">
                    Let our team of dedicated experts help you architect, build, and launch something extraordinary.
                  </p>
                  <Link to="/contact">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button size="lg" className="relative overflow-hidden group/btn">
                        <span className="relative z-10 flex items-center gap-2">
                          Let's Get Started
                          <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                        </span>
                      </Button>
                    </motion.div>
                  </Link>
                </div>
            </motion.div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
