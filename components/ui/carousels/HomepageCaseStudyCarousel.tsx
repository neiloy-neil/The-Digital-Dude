import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import type { CaseStudy } from '../../../types';
import Card from '../Card';
import { ArrowRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface CarouselProps {
  caseStudies: CaseStudy[];
}

// FIX: Removed React.FC for better type compatibility.
const HomepageCaseStudyCarousel = ({ caseStudies }: CarouselProps) => {
  return (
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
      className="pb-14 h-full"
    >
      {caseStudies.map((caseStudy) => (
        <SwiperSlide key={caseStudy.id} className="h-full flex">
          <Link to={`/case-studies/${caseStudy.id}`} className="w-full h-full flex">
            <Card className="h-full flex flex-col">
              <div className="relative rounded-lg overflow-hidden">
                <Card.Image src={caseStudy.image} alt={caseStudy.title} className="h-48 w-full object-cover" />
              </div>
              <Card.Header>
                <h3 className="text-xl font-bold text-text-primary mb-2">{caseStudy.title}</h3>
              </Card.Header>
              <Card.Content className="flex-grow">
                <p className="text-sm text-text-secondary line-clamp-4">{caseStudy.result}</p>
              </Card.Content>
              <Card.Footer className="flex items-center justify-between mt-auto">
                 <div className="flex flex-wrap gap-2">
                  {caseStudy.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="bg-primary/20 text-accent text-xs font-semibold px-2.5 py-1 rounded-full capitalize">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="text-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-semibold">View Case Study</span>
                  <ArrowRight size={16} />
                </div>
              </Card.Footer>
            </Card>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HomepageCaseStudyCarousel;