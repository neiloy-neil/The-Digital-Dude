import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import type { CaseStudy } from '../../../types';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ImageWithFallback from '../ImageWithFallback';

interface CarouselProps {
  featuredStudies: CaseStudy[];
  onSelectCaseStudy: (id: string) => void;
}

// FIX: Removed React.FC for better type compatibility.
const FeaturedCaseStudyCarousel = ({ featuredStudies, onSelectCaseStudy }: CarouselProps) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      className="pb-14"
    >
      {featuredStudies.map((study) => (
        <SwiperSlide key={`featured-${study.id}`} onClick={() => onSelectCaseStudy(study.id)} className="cursor-pointer group outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg">
          <div className="relative rounded-lg overflow-hidden">
            <ImageWithFallback src={study.image} alt={study.title} loading="lazy" className="w-full h-64 md:h-96 object-cover" />
            <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-8">
              <h3 className="text-2xl md:text-4xl font-bold text-white">{study.title}</h3>
              <p className="text-slate-300 mt-2 max-w-2xl">{study.result}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FeaturedCaseStudyCarousel;