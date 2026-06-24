import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
// FIX: Removed unused icons as CaseStudy type does not have URLs for them.
// import { ExternalLink, Github } from 'lucide-react';
// FIX: Changed type from Project to CaseStudy to match available data.
import type { CaseStudy } from '../../types';
import Section from '../ui/Section';
import ImageWithFallback from '../ui/ImageWithFallback';
// FIX: Imported 'caseStudies' as 'projects' export does not exist in staticData.
import { caseStudies } from '../../data/staticData';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// FIX: Casting motion component to 'any' to bypass type checking issues
// that are likely due to a project configuration or dependency version mismatch.
const MotionDiv: any = motion.div;

// FIX: Removed explicit JSX.Element return type to fix type resolution issues with framer-motion.
const ProjectCard = ({ project }: { project: CaseStudy }) => {
  return (
    <div className="bg-surface rounded-lg overflow-hidden h-full flex flex-col border border-border">
      {/* FIX: Use 'image' property from CaseStudy */}
      <ImageWithFallback src={project.image} alt={project.title} className="w-full h-48 object-cover" loading="lazy" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        {/* FIX: Use 'result' property from CaseStudy as the description */}
        <p className="text-text-secondary mb-4 flex-grow">{project.result}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-primary/20 text-accent text-xs font-semibold px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        {/* FIX: Removed links section as CaseStudy type does not include liveUrl or codeUrl */}
      </div>
    </div>
  );
};

// FIX: Removed explicit JSX.Element return type to fix type resolution issues with framer-motion.
const Projects = () => {
  return (
    <Section title="Recent Projects" subtitle="A selection of my work">
      <MotionDiv
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-14"
        >
          {/* FIX: Mapped over 'caseStudies' as 'projects' is not available. */
}
          {caseStudies.map((project) => (
            <SwiperSlide key={project.id} className="h-full">
                <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </MotionDiv>
    </Section>
  );
};

export default Projects;