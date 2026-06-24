import { lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Lazy-load pages for better performance
const HomePage = lazy(() => import('./pages/home'));
const ServicesPage = lazy(() => import('./pages/services/index'));
const ServiceDetailPage = lazy(() => import('./pages/services/ServiceDetailPage'));
const AiMlPage = lazy(() => import('./pages/services/details/AiMlPage'));
const AboutPage = lazy(() => import('./pages/about/index'));
const CaseStudiesPage = lazy(() => import('./pages/case-studies/index'));
const CaseStudyDetailPage = lazy(() => import('./pages/case-studies/[id]'));
const ContactPage = lazy(() => import('./pages/contact'));
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
      <Route path="/work" element={<CaseStudiesPage />} />
      <Route path="/work/:id" element={<CaseStudyDetailPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
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