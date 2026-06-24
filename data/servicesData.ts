import { Service, ServiceDetail } from '../types';

export const services: Service[] = [
  {
    "id": "custom-software",
    "title": "Custom Software Development",
    "description": "When off-the-shelf software imposes limitations, we build the exact solution you need. We engineer robust, scalable, and secure applications that act as a central nervous system for your operations, automating workflows and providing a precise competitive edge.",
    "icon": "Code",
    "ctaText": "Explore Custom Builds"
  },
  {
    "id": "ai-ml",
    "title": "AI & Data Solutions",
    "description": "Turn your data into your most valuable asset. We deploy advanced AI and machine learning models to unlock predictive insights, automate complex processes, and create intelligent features that deliver tangible business value and a significant ROI.",
    "icon": "BrainCircuit",
    "ctaText": "Request AI Demo",
    "subsections": [
      {
        "title": "Generative AI & LLMs",
        "description": "We develop custom chatbots, content generation tools, and internal knowledge bases powered by Large Language Models like GPT-4. These solutions can revolutionize customer support, streamline content creation, and provide instant, accurate answers from your company's internal documentation, drastically improving efficiency."
      },
      {
        "title": "Predictive Analytics",
        "description": "Forecast market trends, predict customer churn, and optimize pricing with custom machine learning models. By analyzing historical data, we build systems that empower you to make proactive, data-driven decisions that increase revenue and reduce risk. This moves your business from being reactive to being predictive."
      },
      {
        "title": "Intelligent Process Automation",
        "description": "We use AI to automate repetitive, high-volume tasks that consume valuable employee time. From intelligent document processing and data extraction to automated customer email categorization and response, our solutions free up your team to focus on strategic, high-impact work, directly boosting productivity."
      },
      {
        "title": "Computer Vision",
        "description": "Implement sophisticated solutions for image recognition, object detection, and video analysis. This technology can be applied to quality control in manufacturing, retail analytics by tracking foot traffic, or even medical imaging analysis. We turn visual data from the real world into actionable business intelligence."
      }
    ]
  },
  {
    "id": "web-mobile",
    "title": "Web & Mobile Ecosystems",
    "description": "We create unified digital ecosystems, consisting of powerful web dashboards and intuitive mobile apps. This ensures seamless data flow and a consistent user experience for your team and customers, whether they are in the office or on the move.",
    "icon": "AppWindow",
    "ctaText": "Explore Ecosystems"
  },
  {
    "id": "saas",
    "title": "B2B SaaS Platforms",
    "description": "Launch your own software product with our end-to-end SaaS development service. We build secure, scalable, multi-tenant applications with integrated billing and analytics, designed for rapid growth and high performance from day one.",
    "icon": "Cloud",
    "ctaText": "Build Your SaaS"
  },
  {
    "id": "marketplaces",
    "title": "Two-Sided Marketplaces",
    "description": "We build complex, feature-rich marketplace platforms that connect buyers and sellers. Our solutions handle dual onboarding, secure escrow payments, transaction management, and robust rating systems to foster trust and facilitate commerce.",
    "icon": "Store",
    "ctaText": "Launch a Marketplace"
  },
  {
    "id": "ecommerce",
    "title": "Custom E-Commerce",
    "description": "Move beyond the limitations of template-based platforms. We deliver high-performance, custom e-commerce solutions with features like headless architecture, advanced product configurators, and subscription models to create unique shopping experiences.",
    "icon": "ShoppingCart",
    "ctaText": "Elevate Your Store"
  },
  {
    "id": "cloud-devops",
    "title": "Cloud & DevOps",
    "description": "We architect and automate your cloud infrastructure for maximum security, scalability, and reliability. Our DevOps practices, including CI/CD pipelines and Infrastructure as Code, ensure you can release new features faster and with greater confidence.",
    "icon": "Server",
    "ctaText": "Optimize Your Cloud"
  },
  {
    "id": "maintenance",
    "title": "Maintenance & Support",
    "description": "Protect your investment with our ongoing support retainers. We provide proactive monitoring, regular security updates, and performance tuning to ensure your digital assets remain secure, fast, and reliable long after launch.",
    "icon": "ShieldCheck",
    "ctaText": "View Support Plans"
  },
  {
    "id": "consulting",
    "title": "Strategic & Technical Consulting",
    "description": "Leverage our deep industry expertise to de-risk your project. We offer services like MVP scoping, technology stack audits, and digital transformation workshops to help you build a winning strategy and a clear roadmap for success.",
    "icon": "Lightbulb",
    "ctaText": "Book a Strategy Session"
  }
];

export const serviceDetails: Record<string, ServiceDetail> = {
  "custom-software": {
    "features": [
      "Bespoke workflow automation tailored to your exact business processes.", 
      "Seamless integration with third-party APIs (e.g., accounting, marketing, operations).", 
      "Scalable backend architecture designed to handle growth without performance degradation.", 
      "Intuitive, user-centric interface design that minimizes training time and maximizes adoption.",
      "Role-based access control to ensure data security and appropriate user permissions.",
      "Comprehensive reporting and analytics dashboards for data-driven insights."
    ],
    "modules": [
      "Centralized internal admin panels for complete operational control.", 
      "Secure customer-facing portals for self-service and engagement.", 
      "Real-time data processing engines for instant updates and notifications.", 
      "Automated PDF/report generation and email dispatch systems.",
      "Inventory and resource management modules.",
      "Custom billing and invoicing systems."
    ],
    "outcomes": [
      "Drastic increase in operational efficiency and employee productivity.", 
      "Significant reduction in manual errors and the costs associated with them.", 
      "A flexible, future-proof solution that grows and adapts with your business.",
      "Consolidation of multiple disparate tools into one cohesive, manageable system.",
      "Creation of a unique competitive advantage through proprietary technology."
    ]
  },
  "ai-ml": {
    "features": [
      "Custom AI models trained on your specific business data.", 
      "Integration with existing systems and workflows.", 
      "Real-time analytics and predictive insights.", 
      "Automated decision-making capabilities.",
      "Natural language processing for chatbots and document analysis.",
      "Computer vision for image and video analysis."
    ],
    "modules": [
      "Data pipeline and preprocessing systems.", 
      "Model training and evaluation frameworks.", 
      "API endpoints for real-time inference.", 
      "Monitoring and alerting for model performance.",
      "Dashboard for insights visualization.",
      "Feedback loops for continuous improvement."
    ],
    "outcomes": [
      "Actionable insights from your business data.", 
      "Automation of repetitive tasks and processes.", 
      "Improved decision-making with predictive analytics.",
      "Enhanced customer experiences through personalization.",
      "Reduced operational costs through optimization.",
      "Competitive advantage through intelligent automation."
    ]
  },
  "saas": {
    "features": [
      "Secure multi-tenancy architecture to isolate customer data.", 
      "Flexible subscription billing and payment gateway integration (Stripe, Paddle, Braintree).", 
      "Advanced user role and permission management for team collaboration.", 
      "Robust and scalable cloud infrastructure on AWS, GCP, or Azure.",
      "Customizable branding and white-labeling capabilities for your clients.",
      "Full API documentation for third-party integrations."
    ],
    "modules": [
      "Super Admin dashboard for user and subscription management.", 
      "Comprehensive analytics and reporting suite on user engagement and revenue.", 
      "Automated user onboarding and email notification system (e.g., welcome series, trial expiration).", 
      "In-app helpdesk and knowledge base integration.",
      "Feature flagging and A/B testing frameworks for iterative product improvement."
    ],
    "outcomes": [
      "Accelerated time-to-market for your software product idea.", 
      "Creation of a predictable, recurring revenue stream.", 
      "High customer retention and Lifetime Value (LTV) through a sticky product.",
      "Ability to scale to thousands of users without re-architecting.",
      "A valuable, sellable asset in the form of a fully-fledged software company."
    ]
  },
   "web-mobile": {
    "features": [
      "Cross-platform mobile applications for iOS & Android built from a single codebase (React Native).", 
      "High-performance Progressive Web Apps (PWAs) that offer an app-like experience in the browser.", 
      "Real-time, bidirectional data synchronization between web and mobile clients.", 
      "Robust offline functionality, allowing users to work without an internet connection and sync later.",
      "Secure biometric authentication (Face ID, Touch ID).",
      "Native device feature integration (camera, GPS, contacts)."
    ],
    "modules": [
      "Push notification systems for timely user engagement and alerts.", 
      "Geolocation services including live tracking and location-based features.", 
      "In-app chat and communication tools for users or support.", 
      "A centralized web-based admin console to manage all platform activity.",
      "Data visualization dashboards showing usage patterns across platforms."
    ],
    "outcomes": [
      "A unified and consistent brand experience across all user touchpoints.", 
      "Increased user accessibility and engagement by being present on their preferred devices.", 
      "Streamlined field operations with real-time data from mobile users.",
      "Enhanced data accuracy by capturing information at the source.",
      "A competitive advantage by offering superior convenience to your customers."
    ]
  },
  "marketplaces": {
    "features": [
      "Distinct, tailored onboarding flows for each side of the marketplace (e.g., 'Buyers' and 'Sellers').", 
      "Secure payment processing with escrow and automated payment splitting (Stripe Connect, Adyen).", 
      "Advanced search and filtering capabilities with geolocation and custom attributes.", 
      "Integrated messaging system with dispute resolution workflows.",
      "A robust review and rating system to build trust and social proof."
    ],
    "modules": [
      "Dynamic commission and fee management engine.", 
      "Admin dashboard with moderation tools for listings, users, and disputes.", 
      "Promotional code and discount system to drive user acquisition.", 
      "Featured listings and advertising options for monetization.",
      "Analytics on transaction volume, user growth, and platform liquidity."
    ],
    "outcomes": [
      "Facilitation of trust and safety between platform participants.", 
      "Creation of a powerful new, scalable revenue stream for your business.", 
      "Strong network effects, where each new user adds value for all other users.",
      "A defensible business model that is difficult for competitors to replicate.",
      "A vibrant, self-sustaining community built around your platform."
    ]
  },
  "ecommerce": {
    "features": [
      "Headless commerce architecture for ultimate design flexibility and performance.",
      "Advanced 3D product configurators and visualizers for customizable products.", 
      "Subscription and recurring order management systems for predictable revenue.", 
      "AI-powered personalization engines for product recommendations and content.",
      "Multi-language and multi-currency support for international sales.",
      "Blazing-fast page load speeds optimized for Core Web Vitals."
    ],
    "modules": [
      "A powerful, custom-built admin panel for inventory and order management.", 
      "Customer account portals with order history, tracking, and self-service returns.", 
      "Seamless integration with third-party logistics (3PL), shipping, and tax APIs.", 
      "A fully SEO-optimized product catalog and blog for organic growth.",
      "Abandoned cart recovery and automated marketing workflows."
    ],
    "outcomes": [
      "A significant increase in conversion rates and average order value.", 
      "A unique brand identity and superior customer experience that sets you apart from competitors.", 
      "The flexibility to quickly adapt to changing market trends and customer expectations.",
      "Reduced reliance on third-party apps and their associated monthly fees.",
      "A scalable platform ready to handle high-volume traffic and sales."
    ]
  },
  "cloud-devops": {
    "features": [
      "Infrastructure as Code (IaC) for reproducible, version-controlled environments.", 
      "Automated CI/CD pipelines for faster, more reliable deployments.", 
      "Multi-cloud deployment strategies for maximum flexibility and redundancy.", 
      "Container orchestration with Kubernetes for scalable microservices.",
      "Comprehensive monitoring and logging solutions for system observability.",
      "Security-first approach with automated vulnerability scanning and compliance checks."
    ],
    "modules": [
      "Cloud cost optimization and resource management dashboards.", 
      "Disaster recovery and backup automation systems.", 
      "Performance tuning and scalability optimization tools.", 
      "Automated testing frameworks for continuous quality assurance.",
      "Infrastructure monitoring and alerting systems.",
      "DevOps training and knowledge transfer programs for your team."
    ],
    "outcomes": [
      "Dramatically reduced deployment times and increased release frequency.", 
      "Enhanced system reliability and reduced downtime through automation.", 
      "Significant cost savings through optimized resource utilization.",
      "Improved security posture with proactive threat detection and mitigation.",
      "Greater scalability to handle traffic spikes and business growth."
    ]
  },
  "maintenance": {
    "features": [
      "24/7 proactive system monitoring and alerting.", 
      "Automated security patches and updates to protect against vulnerabilities.", 
      "Performance optimization to maintain peak system efficiency.", 
      "Regular database maintenance and optimization.",
      "Comprehensive backup and disaster recovery procedures.",
      "Detailed analytics and reporting on system health and performance."
    ],
    "modules": [
      "Priority support with guaranteed response time SLAs.", 
      "Scheduled maintenance windows with minimal disruption.", 
      "Feature enhancement and iterative improvement planning.", 
      "System scalability planning and implementation.",
      "User access management and security audits.",
      "Documentation updates and knowledge base maintenance."
    ],
    "outcomes": [
      "Maximum uptime and system reliability for uninterrupted business operations.", 
      "Reduced risk of security breaches and data loss.", 
      "Consistently high performance and user experience.",
      "Lower total cost of ownership through proactive maintenance.",
      "Peace of mind with expert support always available."
    ]
  },
  "consulting": {
    "features": [
      "Comprehensive technical audits of existing systems and architecture.", 
      "Custom MVP scoping and development roadmaps.", 
      "Technology stack evaluation and recommendations.", 
      "Digital transformation strategy and implementation planning.",
      "Risk assessment and mitigation strategies.",
      "Vendor selection and technology partnership guidance."
    ],
    "modules": [
      "Workshop facilitation for requirements gathering and solution design.", 
      "Proof of concept development to validate technical approaches.", 
      "Team augmentation with senior technical expertise.", 
      "Project rescue and turnaround strategies for struggling initiatives.",
      "Technology migration planning and execution.",
      "Post-launch optimization and growth planning."
    ],
    "outcomes": [
      "De-risked technology investments with clear roadmaps and success metrics.", 
      "Accelerated time-to-market with proven technical approaches.", 
      "Reduced development costs through optimal technology choices.",
      "Enhanced team capabilities through knowledge transfer.",
      "Future-proofed systems that scale with business growth."
    ]
  }
};