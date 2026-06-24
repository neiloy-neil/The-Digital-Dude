import { BlogPost, ProcessStep, Testimonial, Differentiator, TeamMember, Milestone } from '../types';
import { services as serviceList, serviceDetails as serviceDetailList } from './servicesData';
import { portfolioProjects as portfolioProjectList } from './portfolioData';
import { caseStudies as caseStudyList } from './caseStudiesData';

// Export the imported data
export const services = serviceList;
export const serviceDetails = serviceDetailList;
export const portfolioProjects = portfolioProjectList;
export const caseStudies = caseStudyList;

// Blog posts data - only include posts that have actual content
export const blogPosts: BlogPost[] = [
  {
    "slug": "getting-started-with-saas-development",
    "title": "Getting Started with SaaS Development",
    "date": "2024-01-15",
    "description": "A comprehensive guide to building your first SaaS application, from idea validation to launch.",
    "coverImage": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
    "tags": ["SaaS", "Development", "Guide"],
    "category": "SaaS Development"
  },
  {
    "slug": "the-roi-of-great-design",
    "title": "The ROI of Great Design",
    "date": "2024-02-20",
    "description": "How investing in great design can significantly improve your product's success and user engagement.",
    "coverImage": "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop",
    "tags": ["Design", "ROI", "UX"],
    "category": "Design"
  }
];

// Process steps data
export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Discovery & Strategy",
    description: "We start by deeply understanding your business goals and technical requirements.",
    icon: "Search",
    details: "This foundational phase is all about alignment. We conduct in-depth stakeholder interviews, analyze your existing systems, and map out user journeys. Our goal is to define clear, measurable objectives and establish a strategic roadmap that ensures the final product solves the right problems and delivers tangible ROI.",
    deliverables: ["Project Brief & Scope Document", "Technical Requirements Specification", "User Personas & Journey Maps", "Project Roadmap & Timeline"],
    testimonial: {
      quote: "The discovery phase was invaluable. They didn't just listen; they understood our business on a deep level, which set the entire project up for success.",
      author: "John Smith, PropSecure"
    }
  },
  {
    step: 2,
    title: "UI/UX Design",
    description: "We design intuitive and engaging interfaces, focusing on user experience.",
    icon: "Palette",
    details: "Here, we translate strategy into a tangible user experience. We create wireframes to structure the application's flow and information architecture, followed by high-fidelity prototypes that define the visual identity and user interface. Every design decision is data-driven and user-centric, aimed at creating a product that is not only beautiful but also intuitive and easy to use.",
    deliverables: ["Low & High-Fidelity Wireframes", "Interactive Prototypes (Figma)", "Complete UI Kit & Design System", "User Flow Diagrams"],
     testimonial: {
      quote: "The design prototypes they delivered were stunning and incredibly well-thought-out. We could see exactly how the app would work before a single line of code was written.",
      author: "Jane Doe, AirTravel Co."
    }
  },
  {
    step: 3,
    title: "Agile Development",
    description: "Our team builds your product in iterative sprints, allowing for flexibility and feedback.",
    icon: "Code",
    details: "Our development process is built on agile principles. We work in two-week sprints, delivering functional pieces of the application for your review at the end of each cycle. This iterative approach allows for continuous feedback, flexibility to adapt to changing requirements, and complete transparency through regular check-ins and a shared project management board.",
    deliverables: ["Functioning Application Builds (Bi-weekly)", "Source Code Repository Access", "Automated Test Suites", "Continuous Integration/Deployment (CI/CD) Pipeline"],
    testimonial: {
      quote: "Their agile process kept us involved and in control. Seeing progress every two weeks gave us immense confidence and allowed us to make adjustments on the fly.",
      author: "John Smith, PropSecure"
    }
  },
  {
    step: 4,
    title: "Launch & Scale",
    description: "We handle deployment to a scalable cloud infrastructure and provide ongoing support.",
    icon: "Rocket",
    details: "Going live is just the beginning. We manage the entire deployment process to a secure and scalable cloud infrastructure (AWS, GCP, Azure). Post-launch, we provide comprehensive support and maintenance retainers, including performance monitoring, security updates, and a roadmap for future feature enhancements to ensure your product evolves with your business.",
    deliverables: ["Full Production Deployment", "Scalable Cloud Infrastructure Setup", "Technical Documentation", "Ongoing Support & Maintenance Plan"],
    testimonial: {
      quote: "The launch was seamless. Their team handled everything, and the post-launch support has been exceptional, giving us peace of mind as we scale our user base.",
      author: "Jane Doe, AirTravel Co."
    }
  }
];

// Testimonials data
export const testimonials: Testimonial[] = [
  {
    "quote": "Working with them was a game-changer. The platform they built saved us countless hours and significantly reduced our legal risks. It's not just software; it's a core part of our operational strategy now.",
    "name": "John Smith",
    "role": "Operations Manager",
    "company": "PropSecure",
    "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    "logo": "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop",
    "caseStudyId": "property-compliance-management"
  },
  {
    "quote": "The Digital Dude delivered beyond our expectations. Their technical expertise and commitment to our project's success were evident from day one. We now have a platform that's scalable and loved by our users.",
    "name": "Jane Doe",
    "role": "CEO",
    "company": "AirTravel Co.",
    "avatar": "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    "logo": "/images/avatar.svg"
  },
  {
    "quote": "The AI-powered inventory system they built has transformed our operations. We've reduced waste by 35% and improved efficiency across all locations. The ROI was evident within the first quarter.",
    "name": "Michael Rodriguez",
    "role": "Supply Chain Director",
    "company": "FreshMart Retail",
    "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    "logo": "/images/avatar.svg"
  },
  {
    "quote": "Their team understood our complex healthcare requirements perfectly. The patient management system they delivered is intuitive, secure, and has significantly improved our workflow efficiency.",
    "name": "Dr. Emily Chen",
    "role": "Chief Medical Officer",
    "company": "HealthFirst Clinic",
    "avatar": "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
    "logo": "/images/avatar.svg"
  },
  {
    "quote": "From concept to deployment, The Digital Dude exceeded every milestone. Our e-commerce platform now handles 10x the traffic with zero downtime. Exceptional work!",
    "name": "David Park",
    "role": "Founder",
    "company": "TechGear Online",
    "avatar": "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=400&h=400&fit=crop&crop=face",
    "logo": "/images/avatar.svg"
  },
  {
    "quote": "The custom ERP solution has streamlined our entire manufacturing process. Real-time analytics and automated workflows have saved us over $200K annually in operational costs.",
    "name": "Lisa Thompson",
    "role": "COO",
    "company": "PrecisionTech Manufacturing",
    "avatar": "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    "logo": "/images/avatar.svg"
  },
  {
    "quote": "Their expertise in fintech is remarkable. The payment processing system they built is lightning-fast, secure, and has helped us scale to process millions in transactions monthly.",
    "name": "Robert Kumar",
    "role": "CTO",
    "company": "PayFlow Solutions",
    "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
    "logo": "/images/avatar.svg"
  },
  {
    "quote": "The learning management system transformed our educational delivery. Student engagement increased by 60% and our administrative workload decreased significantly. Outstanding results!",
    "name": "Professor Maria Santos",
    "role": "Dean of Digital Learning",
    "company": "Innovate University",
    "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    "logo": "/images/avatar.svg"
  },
  {
    "quote": "Working with The Digital Dude felt like having an extended team rather than external contractors. Their agile approach and constant communication made the entire process seamless.",
    "name": "Alex Johnson",
    "role": "Head of Product",
    "company": "StartupLab Inc.",
    "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    "logo": "/images/avatar.svg"
  },
  {
    "quote": "The logistics optimization platform they delivered has revolutionized our delivery operations. We've reduced delivery times by 40% while cutting costs by 25%. Incredible value!",
    "name": "Sarah Williams",
    "role": "VP of Operations",
    "company": "QuickShip Logistics",
    "avatar": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    "logo": "/images/avatar.svg"
  },
  {
    "quote": "The Digital Dude's attention to detail and commitment to quality is unmatched. Our CRM system now drives 50% more qualified leads and our sales team couldn't be happier.",
    "name": "Jennifer Lee",
    "role": "VP of Sales",
    "company": "GrowthCorp Marketing",
    "avatar": "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
    "logo": "/images/avatar.svg"
  },
  {
    "quote": "They turned our complex legal workflows into an elegant, automated system. Document processing time reduced from hours to minutes. This is the future of legal tech.",
    "name": "Thomas Anderson",
    "role": "Senior Partner",
    "company": "Anderson & Associates Law",
    "avatar": "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    "logo": "/images/avatar.svg"
  }
];

// Companies data
export const companies = [
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    industry: "Technology"
  },
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    industry: "Technology"
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    industry: "E-commerce"
  },
  {
    name: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    industry: "Entertainment"
  },
  {
    name: "Spotify",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
    industry: "Music"
  },
  {
    name: "Airbnb",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg",
    industry: "Travel"
  },
  {
    name: "Uber",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png",
    industry: "Transportation"
  },
  {
    name: "Slack",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
    industry: "Communication"
  },
  {
    name: "Dropbox",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Dropbox_logo_2017.svg",
    industry: "Cloud Storage"
  },
  {
    name: "Shopify",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg",
    industry: "E-commerce"
  },
  {
    name: "Stripe",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg",
    industry: "Fintech"
  },
  {
    name: "Adobe",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.svg",
    industry: "Software"
  },
  {
    name: "Tesla",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg",
    industry: "Automotive"
  },
  {
    name: "PayPal",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
    industry: "Fintech"
  },
  {
    name: "Zoom",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Zoom_Communications_Logo.svg",
    industry: "Communication"
  },
  {
    name: "LinkedIn",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
    industry: "Professional Network"
  },
  {
    name: "Twitter",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg",
    industry: "Social Media"
  },
  {
    name: "Instagram",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
    industry: "Social Media"
  },
  {
    name: "WhatsApp",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
    industry: "Communication"
  },
  {
    name: "Square",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/60/Square%2C_Inc._logo.svg",
    industry: "Fintech"
  }
];

// Differentiators data
export const differentiators: Differentiator[] = [
  {
    "title": "Absolute Flexibility",
    "description": "Every workflow is customizable. We don't force your business into a box; we build the box around your business.",
    "icon": "GitMerge"
  },
  {
    "title": "Full-Stack Mastery",
    "description": "From database architecture to pixel-perfect UIs, we deliver seamless, end-to-end solutions under one roof.",
    "icon": "Layers"
  },
  {
    "title": "AI as Standard",
    "description": "Intelligence isn't an afterthought; it's integrated from the ground up to automate processes and deliver insights.",
    "icon": "BrainCircuit"
  },
  {
    "title": "Long-Term Partnership",
    "description": "We're invested in your success. We build for the future and provide growth-focused collaboration long after launch.",
    "icon": "Users"
  }
];

// About data
interface AboutData {
  mission: string;
  philosophy: {
    title: string;
    description: string;
  }[];
  milestones: Milestone[];
  team: TeamMember[];
}

export const aboutData: AboutData = {
  mission: "Our mission is to empower ambitious businesses with technology that is not just functional, but truly transformational. We believe in a problem-first approach, meticulously architecting intelligent software ecosystems that solve core operational challenges and unlock new avenues for growth. We don't just build software; we build strategic assets that become the backbone of our clients' success, driving efficiency, innovation, and a sustainable competitive advantage in a fast-evolving digital landscape.\n\nFounded in 2020, we've grown from a small team of passionate developers to a full-service digital innovation agency with expertise spanning custom software development, artificial intelligence, cloud infrastructure, and user experience design. Our approach combines technical excellence with deep business understanding to deliver solutions that not only meet today's needs but anticipate tomorrow's challenges.",
  philosophy: [
    {
      title: "Problem-First Architecture",
      description: "We start every project with 'why'. By deeply understanding the underlying business challenge, we architect solutions that deliver real, measurable value, ensuring that technology serves the business, not the other way around. This approach allows us to create systems that are not just technically sound but strategically aligned with our clients' objectives."
    },
    {
      title: "Radical Ownership",
      description: "Your success is our success. We take full ownership of the development process, from initial concept to final deployment and beyond. We are proactive, transparent, and accountable partners in your journey. Our commitment extends beyond project delivery to ensuring long-term success through ongoing support and strategic guidance."
    },
    {
      title: "Intelligence Integrated",
      description: "We believe modern software should be smart. We leverage AI and data science not as an add-on, but as a core component to create more efficient, insightful, and automated systems that provide a tangible competitive edge. Every solution we build incorporates intelligent features that learn, adapt, and improve over time."
    },
    {
      title: "Continuous Innovation",
      description: "Technology evolves rapidly, and so do we. We invest heavily in staying at the forefront of emerging technologies and methodologies, ensuring our clients benefit from the latest advancements. Our team regularly participates in industry conferences, contributes to open-source projects, and maintains certifications in cutting-edge technologies."
    }
  ],
  milestones: [
    { year: '2020', description: 'The Digital Dude is founded by John Carter with a mission to build better, business-focused software. Started as a two-person operation in a London co-working space with a vision to revolutionize how businesses approach custom software development.' },
    { year: '2021', description: 'Launched our first major B2B SaaS platform for the property tech industry. The platform automated compliance management for over 500 properties, reducing administrative overhead by 50% and achieving a 99.8% compliance rate across the entire portfolio.' },
    { year: '2022', description: 'Expanded our services to include dedicated AI & Machine Learning solutions. Successfully delivered our first AI-powered educational platform that increased student engagement by 35% and reduced teacher workload by 60% through automated grading systems.' },
    { year: '2023', description: 'Successfully delivered over 20 custom software projects for clients worldwide, spanning industries from fintech to healthcare. Achieved 100% client retention rate and expanded to serve clients in 5+ countries across Europe, North America, and Asia-Pacific.' },
    { year: '2024', description: 'Opened a new office in London to accommodate our growing team of expert architects and engineers. Launched our proprietary development framework that reduces time-to-market by 30% while maintaining the highest quality standards. Recognized as a Top 10 Emerging Tech Agency by Tech Innovators Magazine.' },
    { year: '2025', description: 'Expanded our AI capabilities to include generative AI and large language models. Partnered with leading cloud providers to offer enterprise-grade infrastructure solutions. Reached 50+ successful project deliveries with an average client satisfaction rating of 4.9/5.' }
  ],
  team: [
    { name: 'John Carter', role: 'Founder & Lead Architect', avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face' },
    { name: 'Sarah Dane', role: 'Head of AI & Data Science', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face' },
    { name: 'Mike Ross', role: 'Principal Frontend Engineer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face' },
    { name: 'Rachel Zane', role: 'Senior UX/UI Designer', avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face' },
    { name: 'Harvey Specter', role: 'Head of Business Development', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face' },
    { name: 'Donna Paulsen', role: 'Operations Director', avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face' }
  ]
};