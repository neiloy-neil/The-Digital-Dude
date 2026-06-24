import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, MapPin, Clock, Heart, Code, Rocket, Coffee } from 'lucide-react';
import Section from '../../components/ui/Section';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Seo from '../../components/Seo';

// FIX: Casting motion component to 'any' to bypass type checking issues
const MotionDiv: any = motion.div;

const jobOpenings = [
  {
    title: "Senior Full-Stack Developer",
    department: "Engineering",
    location: "London, UK / Remote",
    type: "Full-time",
    experience: "5+ years",
    description: "Join our core development team to build cutting-edge SaaS solutions and custom software for clients worldwide.",
    requirements: [
      "5+ years experience with React, Node.js, and TypeScript",
      "Experience with cloud platforms (AWS, GCP, Azure)",
      "Strong understanding of modern development practices",
      "Excellent problem-solving and communication skills"
    ],
    benefits: [
      "Competitive salary £60k-£85k",
      "Flexible remote work",
      "Professional development budget",
      "Health & dental insurance"
    ]
  },
  {
    title: "AI/ML Engineer",
    department: "AI Solutions",
    location: "London, UK / Remote",
    type: "Full-time",
    experience: "3+ years",
    description: "Lead AI implementation projects and develop machine learning solutions for our enterprise clients.",
    requirements: [
      "3+ years experience with Python and ML frameworks",
      "Experience with TensorFlow, PyTorch, or similar",
      "Knowledge of cloud ML services",
      "Strong mathematics and statistics background"
    ],
    benefits: [
      "Competitive salary £55k-£80k",
      "Flexible remote work",
      "Conference attendance budget",
      "Latest hardware and tools"
    ]
  },
  {
    title: "UX/UI Designer",
    department: "Design",
    location: "London, UK / Hybrid",
    type: "Full-time",
    experience: "3+ years",
    description: "Design beautiful, intuitive interfaces for web and mobile applications that delight users and drive business results.",
    requirements: [
      "3+ years experience in UX/UI design",
      "Proficiency in Figma, Adobe Creative Suite",
      "Experience with design systems",
      "Strong portfolio of web and mobile projects"
    ],
    benefits: [
      "Competitive salary £45k-£65k",
      "Flexible working hours",
      "Creative freedom",
      "Top-tier design tools and resources"
    ]
  }
];

const perks = [
  {
    icon: Users,
    title: "Great Team",
    description: "Work with passionate, talented people who love what they do"
  },
  {
    icon: Rocket,
    title: "Growth Opportunities",
    description: "Advance your career with challenging projects and learning opportunities"
  },
  {
    icon: MapPin,
    title: "Flexible Location",
    description: "Remote-first culture with optional office space in London"
  },
  {
    icon: Clock,
    title: "Work-Life Balance",
    description: "Flexible hours and generous time off policy"
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance and wellness programs"
  },
  {
    icon: Coffee,
    title: "Great Culture",
    description: "Regular team events, learning sessions, and fun activities"
  }
];

const CareersPage = () => {
  return (
    <>
      <Seo
        title="Careers - Join Our Team at The Digital Dude"
        description="Join The Digital Dude team and help build the future of custom software development. Explore exciting career opportunities in a growing agency."
        type="website"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "JobPosting",
          "title": "Join Our Team at The Digital Dude",
          "description": "Join The Digital Dude team and help build the future of custom software development. Explore exciting career opportunities in a growing agency.",
          "hiringOrganization": {
            "@type": "Organization",
            "name": "The Digital Dude",
            "sameAs": "https://www.digitaldude.co.uk",
            "logo": "https://www.digitaldude.co.uk/logo.png"
          },
          "jobLocation": {
            "@type": "Place",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "London",
              "addressCountry": "UK"
            }
          },
          "employmentType": "FULL_TIME",
          "industry": "Software Development",
          "datePosted": new Date().toISOString()
        }}
      />
      
      <div className="pt-24 pb-20 min-h-screen bg-gradient-to-br from-background via-background/98 to-surface/5">
        {/* Hero Section */}
        <div className="container mx-auto px-6 text-center mb-20">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Join Our <span className="gradient-rgb neon-glow-text">Team</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We're building the future of custom software development. Join a team of passionate developers, designers, and innovators who are transforming businesses through technology.
          </motion.p>
        </div>

        {/* Why Work With Us */}
        <Section title="Why Work With Us" subtitle="More than just a job - it's a career adventure">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {perks.map((perk, index) => (
              <MotionDiv
                key={perk.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center h-full hover-lift card-gradient-hover">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <perk.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-text-primary mb-3 heading-gradient">
                    {perk.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {perk.description}
                  </p>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </Section>

        {/* Open Positions */}
        <Section title="Open Positions" subtitle="Find your next opportunity with us">
          <div className="max-w-4xl mx-auto space-y-6">
            {jobOpenings.map((job, index) => (
              <MotionDiv
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 hover-lift card-gradient-hover">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-text-primary mb-2 heading-gradient">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.type}
                        </span>
                        <span className="bg-primary/20 text-primary px-2 py-1 rounded-full text-xs font-medium">
                          {job.experience}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 lg:mt-0">
                      <Link to="/contact">
                        <Button className="group">
                          <span className="flex items-center gap-2">
                            Apply Now
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </Button>
                      </Link>
                    </div>
                  </div>
                  
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {job.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-text-primary mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-text-secondary">
                            <Code className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {job.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-text-secondary">
                            <Heart className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </Section>

        {/* CTA Section */}
        <Section title="Don't See Your Role?" subtitle="We're always looking for exceptional talent">
          <MotionDiv
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 bg-gradient-to-br from-primary/5 via-primary/3 to-accent/5 border-primary/20 card-gradient-hover">
              <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                Have unique skills or experience that could benefit our team? We'd love to hear from you! 
                Send us your resume and tell us how you can contribute to our mission.
              </p>
              <Link to="/contact">
                <Button size="lg" className="group">
                  <span className="flex items-center gap-2">
                    Get In Touch
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </Link>
            </Card>
          </MotionDiv>
        </Section>
      </div>
    </>
  );
};

export default CareersPage;