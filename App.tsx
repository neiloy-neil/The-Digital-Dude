import { lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Lazy-load pages for better performance
const HomePage = lazy(() => import('./pages/home'));
const ServicesPage = lazy(() => import('./pages/services/index'));
const ServiceDetailPage = lazy(() => import('./pages/services/ServiceDetailPage'));
const AiMlPage = lazy(() => import('./pages/services/details/AiMlPage'));
const AiSolutionsPage = lazy(() => import('./pages/ai-solutions/index'));
const AboutPage = lazy(() => import('./pages/about/index'));
const CaseStudiesPage = lazy(() => import('./pages/case-studies/index'));
const CaseStudyDetailPage = lazy(() => import('./pages/case-studies/[id]'));
const ContactPage = lazy(() => import('./pages/contact'));
const BlogPage = lazy(() => import('./pages/blog/index'));
const BlogPostPage = lazy(() => import('./pages/blog/[slug]'));
const FAQPage = lazy(() => import('./pages/faq/index'));
const CareersPage = lazy(() => import('./pages/careers/index'));
const PortfolioPage = lazy(() => import('./pages/portfolio/index'));
const ResourcesPage = lazy(() => import('./pages/resources/index'));
const ROICalculatorPage = lazy(() => import('./pages/resources/roi-calculator'));
const PricingCalculatorPage = lazy(() => import('./pages/resources/pricing-calculator'));
const DownloadableTemplatesPage = lazy(() => import('./pages/resources/downloadable-templates'));
const ProjectIdeaSubmissionPage = lazy(() => import('./pages/resources/project-idea-submission'));
const InteractivePortfolioGalleryPage = lazy(() => import('./pages/resources/interactive-portfolio'));
const TechStackExplorerPage = lazy(() => import('./pages/resources/tech-stack-explorer'));
const ServiceComparisonPage = lazy(() => import('./pages/resources/service-comparison'));
const OnboardingPage = lazy(() => import('./pages/onboarding/index'));
const InvestmentPage = lazy(() => import('./pages/investment/index'));
const PrivacyPage = lazy(() => import('./pages/privacy/index'));
const TermsPage = lazy(() => import('./pages/terms/index'));

// FIX: Remove 'any' type workarounds for better type safety
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: 'tween' as const,
  ease: [0.4, 0, 0.2, 1] as const,
  duration: 0.5,
};

const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// FIX: Use proper motion.div instead of any type workaround
const App = () => {
  const location = useLocation();

  const renderRoutes = () => (
    <Routes location={location}>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/services/:id" element={<ServiceDetailPage />} />
      <Route path="/services/ai-ml" element={<AiMlPage />} />
      <Route path="/ai-solutions" element={<AiSolutionsPage />} />
      <Route path="/case-studies" element={<CaseStudiesPage />} />
      <Route path="/case-studies/:id" element={<CaseStudyDetailPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:slug" element={<BlogPostPage />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/resources" element={<ResourcesPage />} />
      <Route path="/resources/roi-calculator" element={<ROICalculatorPage />} />
      <Route path="/resources/pricing-calculator" element={<PricingCalculatorPage />} />
      <Route path="/resources/downloadable-templates" element={<DownloadableTemplatesPage />} />
      <Route path="/resources/project-idea-submission" element={<ProjectIdeaSubmissionPage />} />
      <Route path="/resources/interactive-portfolio" element={<InteractivePortfolioGalleryPage />} />
      <Route path="/resources/tech-stack-explorer" element={<TechStackExplorerPage />} />
      <Route path="/resources/service-comparison" element={<ServiceComparisonPage />} />
      <Route path="/onboarding" element={<OnboardingPage />} />
      <Route path="/careers" element={<CareersPage />} />
      <Route path="/investment" element={<InvestmentPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/terms" element={<TermsPage />} />
    </Routes>
  );

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          <Suspense fallback={<PageLoader />}>
            {renderRoutes()}
          </Suspense>
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
};

export default App;