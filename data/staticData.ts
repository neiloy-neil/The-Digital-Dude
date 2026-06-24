import { BlogPost, ProcessStep, Differentiator, TeamMember, Milestone } from '../types';
import { caseStudies as caseStudyList } from './caseStudiesData';

// Export the imported data
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

// Companies data removed
// Testimonials data removed

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
    { year: '2020', description: 'The Digital Dude founded by Farhad Hossain in Dhaka, Bangladesh. UK registered.' },
    { year: '2021', description: 'First CRM delivered for an Australian property management company.' },
    { year: '2022', description: 'Expanded to travel, logistics, and education verticals.' },
    { year: '2023', description: 'RentalEase CRM launched. 30+ agencies and 4,000+ rentals on the platform.' },
    { year: '2024', description: 'Delivered AI tutoring platform, recruitment CRM, and cleaning marketplace.' },
    { year: '2025', description: '7 live products shipped across 5 industries in Australia, UK, and Bangladesh.' }
  ],
  team: [
    { name: 'Farhad Hossain', role: 'CEO & Co-Founder', avatar: '' }
  ]
};