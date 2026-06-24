import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, BarChart2, Zap, Quote, Star } from 'lucide-react';
import Button from '../../components/ui/Button';
import Seo from '../../components/Seo';
import { caseStudies } from '../../data/staticData';
import { CaseStudy } from '../../types';
import Card from '../../components/ui/Card';
import ImageWithFallback from '../../components/ui/ImageWithFallback';

// FIX: Casting motion component to 'any' to bypass type checking issues
// that are likely due to a project configuration or dependency version mismatch.
const MotionDiv: any = motion.div;

// FIX: Removed explicit JSX.Element return type to fix type resolution issues with framer-motion.
const CaseStudyDetailPage = () => {
  const { id: caseStudyId } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const caseStudy: CaseStudy | undefined = caseStudies.find(s => s.id === caseStudyId);

  if (!caseStudy) {
    return (
      <div className="text-center py-40">
        <p className="text-red-400 mb-4">Could not load case study.</p>
        <Button variant="ghost" onClick={() => navigate('/work')}>Back to Work</Button>
      </div>
    );
  }

  return (
    <>
      <Seo
        title={`${caseStudy.title} Case Study | Real Results with Custom Software`}
        description={`${caseStudy.problem.substring(0, 160)}... See how our custom software solution helped achieve significant results for this client.`}
        image={`${window.location.origin}${caseStudy.image}`}
        type="article"
        datePublished={new Date().toISOString()}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "CaseStudy",
          "name": caseStudy.title,
          "description": caseStudy.problem.substring(0, 160),
          "image": `${window.location.origin}${caseStudy.image}`,
          "about": {
            "@type": "Product",
            "name": caseStudy.title
          },
          "publisher": {
            "@type": "Organization",
            "name": "The Digital Dude"
          }
        }}
      />
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pt-24 pb-20"
      >
        <div className="container mx-auto px-6">
          <Button variant="ghost" onClick={() => navigate('/work')} leftIcon={<ArrowLeft size={20} />} className="mb-8 text-text-secondary !p-0">
            Back to Work
          </Button>

          {/* Hero */}
          <header className="mb-16 text-center">
             {caseStudy.clientLogo && <ImageWithFallback src={caseStudy.clientLogo} alt="Client Logo" className="h-12 mx-auto mb-6 dark:invert-[0.8] brightness-50 dark:brightness-100" loading="lazy" />}
            <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-4">{caseStudy.title}</h1>
            <ImageWithFallback src={caseStudy.image} alt={caseStudy.title} loading="lazy" className="w-full max-w-4xl mx-auto rounded-lg shadow-2xl mt-8" />
          </header>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
            {caseStudy.metrics.map((metric, index) => (
              <div key={index} className="bg-surface/50 backdrop-blur-lg p-6 rounded-lg border border-border text-center">
                <p className="text-3xl font-bold text-primary mb-2">{metric.value}</p>
                <p className="text-text-secondary">{metric.label}</p>
              </div>
            ))}
          </div>
          
          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-bold text-text-primary mb-4 flex items-center gap-3"><Zap className="text-accent"/>The Challenge</h2>
                <p className="text-text-secondary text-lg leading-relaxed whitespace-pre-line">{caseStudy.problem}</p>
              </section>
              <section>
                <h2 className="text-3xl font-bold text-text-primary mb-4 flex items-center gap-3"><CheckCircle className="text-accent"/>Our Strategic Solution</h2>
                <p className="text-text-secondary text-lg leading-relaxed whitespace-pre-line">{caseStudy.solution}</p>
              </section>

              {caseStudy.keyFeatures && (
                <section>
                    <h2 className="text-3xl font-bold text-text-primary mb-4 flex items-center gap-3"><Star className="text-accent"/>Key Features</h2>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                        {caseStudy.keyFeatures.map((feature, index) => (
                            <li key={index} className="flex items-start gap-3 text-text-secondary text-lg">
                                <CheckCircle className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </section>
              )}

              <section>
                <h2 className="text-3xl font-bold text-text-primary mb-4 flex items-center gap-3"><BarChart2 className="text-accent"/>Tangible Business Impact</h2>
                <p className="text-text-secondary text-lg leading-relaxed whitespace-pre-line">{caseStudy.result}</p>
              </section>

               {/* Screenshots */}
              <section>
                <h2 className="text-3xl font-bold text-text-primary mb-6">In Action</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {caseStudy.gallery.map((img, index) => (
                     <MotionDiv key={index} whileHover={{scale: 1.05}} transition={{type: 'spring', stiffness: 300}}>
                        <ImageWithFallback src={img} alt={`Screenshot ${index + 1}`} className="rounded-lg shadow-lg w-full h-auto object-cover" loading="lazy"/>
                     </MotionDiv>
                  ))}
                </div>
              </section>


            </div>

            {/* Sidebar */}
            <aside className="space-y-8 self-start sticky top-24">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-text-primary mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.techStack.map(tech => (
                    <span key={tech} className="bg-primary/20 text-accent text-sm font-semibold px-3 py-1.5 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
              <Card className="p-6 text-center bg-primary/10 border-primary/50">
                <h3 className="text-xl font-semibold text-text-primary mb-4">Build Something Similar?</h3>
                <Button onClick={() => navigate('/contact')} size="lg" className="w-full">
                  Contact Us
                </Button>
              </Card>
            </aside>
          </div>
        </div>
      </MotionDiv>
    </>
  );
};

export default CaseStudyDetailPage;