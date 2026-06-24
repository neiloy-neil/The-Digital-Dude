import { CaseStudy } from '../types';

export const caseStudies: CaseStudy[] = [
  {
    id: "property-compliance-crm",
    title: "Property Compliance CRM",
    industry: "Real estate and property management",
    country: "Australia",
    problem: "A property management company had no unified system connecting agencies, property managers, and technicians. Jobs were tracked in spreadsheets. Invoices were handled by email. Management had no visibility across their portfolio.",
    solution: "A multi-portal CRM with 5 role-based dashboards — Admin, Team Member, Agency, Property Manager, and Technician. Each login type has a tailored interface. Jobs move through a full lifecycle: new, scheduled, overdue, completed, paid. The system includes a QMS portal for quotations, invoice management, and technician payments.",
    result: "30+ agencies now running operations through the platform, 4,000+ rental properties managed in the system, 4x faster operations compared to the previous spreadsheet-based process.",
    techStack: ["React", "TypeScript", "Vite", "Node.js", "PostgreSQL", "Prisma"],
    status: "Live — crm.rentalease.com.au",
    metrics: [
      { value: "30+", label: "Agencies Onboarded" },
      { value: "4,000+", label: "Rentals Managed" },
      { value: "4x", label: "Faster Operations" }
    ],
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"],
    tags: ["CRM", "Real Estate"]
  },
  {
    id: "airline-ticketing-crm",
    title: "Airline Ticketing CRM",
    industry: "Travel and tourism",
    country: "Australia",
    problem: "A travel agency was managing leads from WhatsApp, Facebook, phone calls, and walk-ins with no single system. Agents had no visibility into each other's leads. Management had no way to track conversion rates or agent performance.",
    solution: "A web-based CRM tailored to airline ticketing workflows. KPI dashboard with total leads, follow-ups, conversions, lost sales, in-progress leads, and target progress. Multi-channel lead capture for WhatsApp, Facebook, and manual entry. Agent performance tracking with conversion rates per user. Lead pipeline statuses: In Progress, Itinerary Sent, Payment Made.",
    result: "Single source of truth replacing scattered WhatsApp chats and spreadsheets. Management can track monthly performance and target achievement in real time. Agent accountability through personalised lead and follow-up views.",
    techStack: ["React", "TypeScript", "Vite", "REST APIs", "Vercel"],
    status: "Live — internal CRM in active daily use",
    metrics: [
      { value: "100%", label: "Lead Visibility" },
      { value: "Real-time", label: "Performance Tracking" },
      { value: "Multi", label: "Channel Capture" }
    ],
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1542296332-2e4473faf563?w=800&h=600&fit=crop"],
    tags: ["CRM", "Travel"]
  },
  {
    id: "ai-tutoring-platform",
    title: "AI-powered Tutoring Platform",
    industry: "Education and e-learning",
    country: "",
    problem: "A tutoring centre needed to move beyond manual test delivery and paper-based grading. Students and parents had no visibility into performance. Teachers were spending hours creating and marking assessments.",
    solution: "A three-portal platform — student/parent portal, admin portal, and a GPT-4o-powered quiz engine. The quiz engine generates subject-specific assessments on weekly, fortnightly, or monthly schedules, grades them automatically, and produces adaptive feedback reports. Stripe handles subscription billing. The admin portal tracks attendance, quiz completion, and at-risk students.",
    result: "Automated grading replaces hours of teacher marking per week. Students receive instant feedback after every quiz. Admin has full visibility of class performance, occupancy, and waitlists.",
    techStack: ["React.js", "Next.js", "Node.js", "MongoDB", "OpenAI GPT-4o", "Stripe", "SendGrid"],
    status: "Delivered",
    metrics: [
      { value: "0", label: "Manual Marking" },
      { value: "Instant", label: "Feedback" },
      { value: "100%", label: "Visibility" }
    ],
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"],
    tags: ["AI", "EdTech"]
  },
  {
    id: "recruitment-deployment-crm",
    title: "Recruitment & Deployment CRM",
    industry: "Staffing and recruitment",
    country: "",
    problem: "A recruitment agency managing international manpower deployment had no system to track candidates from application through to post-deployment. Document management was manual. Agents had no real-time candidate status visibility.",
    solution: "A candidate-facing website with real-time application status tracking, document upload, and interview scheduling. An admin and agent CRM with role-based access, resume filtering, document verification workflows (BMET, police clearance, visa, guarantor agreements), and post-deployment tracking covering salary, holidays, and employment status. AI-assisted WhatsApp and email messaging via Twilio and GPT.",
    result: "Full recruitment lifecycle managed in one system. Candidates track their own application status without calling agents. Post-deployment tracking replaces manual spreadsheet updates.",
    techStack: ["Next.js", "Node.js", "MongoDB", "JWT", "Twilio", "OpenAI API"],
    status: "Delivered",
    metrics: [
      { value: "100%", label: "Lifecycle Management" },
      { value: "Real-time", label: "Status Tracking" },
      { value: "AI", label: "Messaging" }
    ],
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&h=600&fit=crop"],
    tags: ["CRM", "Recruitment"]
  },
  {
    id: "cleaning-marketplace",
    title: "On-demand Cleaning Marketplace",
    industry: "Home services",
    country: "",
    problem: "A cleaning business had no way to manage bookings, assign cleaners, track job completion, or handle payments in one place. Customers had no visibility into their job status. Cleaners were receiving assignments by phone call.",
    solution: "A 3-app ecosystem. Customer booking app: service selection, upfront Stripe payment, real-time job tracking. Cleaner mobile app: job list, accept/decline, before and after photo upload, job completion. Admin CRM: full job management, cleaner approval, commission tracking, revenue reporting, and payout management.",
    result: "Customers book and pay upfront without speaking to anyone. Cleaners receive and manage jobs entirely through the app. Admin has complete visibility of every job, payment, and cleaner.",
    techStack: ["React Native", "Node.js", "Stripe", "JWT", "Cloud Storage"],
    status: "Delivered",
    metrics: [
      { value: "3", label: "App Ecosystem" },
      { value: "100%", label: "Upfront Payments" },
      { value: "Real-time", label: "Job Tracking" }
    ],
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop"],
    tags: ["Marketplace", "Mobile App"]
  },
  {
    id: "logistics-coordination-platform",
    title: "Logistics Coordination Platform",
    industry: "Transport and logistics",
    country: "",
    problem: "When trucks broke down, drivers had no reliable way to find qualified nearby repair services quickly. Dispatch coordination was slow, manual, and expensive. Downtime was costing logistics companies significantly per incident.",
    solution: "A mobile-first breakdown management platform connecting drivers and admins. Drivers report breakdowns and coordinate response through the app. Admins assign and track assistance in real time. The workflow reduced the number of phone calls and manual coordination steps required per incident.",
    result: "40% improvement in response coordination time. Faster breakdown resolution reduces fleet downtime costs. Full audit trail of every breakdown and response.",
    techStack: ["React Native", "Node.js", "GPS Integration", "Real-time Notifications"],
    status: "Live",
    metrics: [
      { value: "40%", label: "Faster Response" },
      { value: "Reduced", label: "Downtime Costs" },
      { value: "100%", label: "Audit Trail" }
    ],
    image: "https://images.unsplash.com/photo-1586528116311-ad8ed7c50a2c?w=800&h=600&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&h=600&fit=crop"],
    tags: ["Logistics", "Mobile App"]
  },
  {
    id: "premium-matrimony-saas",
    title: "Premium Matrimony SaaS",
    industry: "Community and social marketplace",
    country: "Australia",
    problem: "A community matrimony platform needed a credible, secure way to verify member identities and manage matchmaking at scale. Generic dating app infrastructure didn't fit the cultural requirements or the trust standards expected by families.",
    solution: "A full SaaS platform with an AI matchmaking engine, 5-tier identity and police check verification system, subscription billing, internal messaging, and community rooms. The verification system was a core differentiator — ensuring every member profile meets defined identity and background standards before being shown to others.",
    result: "5-tier verification system built and operational. AI matchmaking engine running on active user profiles. Subscription billing and community features live.",
    techStack: ["Next.js", "Node.js", "MongoDB", "Stripe", "AI Matching Engine"],
    status: "Live",
    metrics: [
      { value: "5-Tier", label: "Verification" },
      { value: "AI", label: "Matchmaking" },
      { value: "Active", label: "Subscriptions" }
    ],
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=600&fit=crop"],
    tags: ["SaaS", "Marketplace"]
  }
];