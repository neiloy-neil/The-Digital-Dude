import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay, EffectCoverflow } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star, ArrowRight, Play, Pause } from 'lucide-react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import ImageWithFallback from '../ui/ImageWithFallback';
import { testimonials } from '../../data/staticData';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// FIX: Casting motion component to 'any' to bypass type checking issues
// that are likely due to a project configuration or dependency version mismatch.
const MotionDiv: any = motion.div;

// FIX: Removed explicit JSX.Element return type to fix type resolution issues with framer-motion.
const Testimonials = () => {
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  if (testimonials.length === 0) return null;

  const toggleAutoplay = () => {
    if (swiperInstance) {
      if (isAutoplay) {
        swiperInstance.autoplay.stop();
      } else {
        swiperInstance.autoplay.start();
      }
      setIsAutoplay(!isAutoplay);
    }
  };

  const goToNext = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  const goToPrevious = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  return (
    <Section title="What Our Clients Say" subtitle="Building strong partnerships is at the heart of what we do.">
      
      {/* Controls - centered above testimonials */}
      <div className="flex justify-center mb-8">
        <motion.button
          onClick={toggleAutoplay}
          className="flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded-lg hover:bg-surface/80 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isAutoplay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          {isAutoplay ? 'Pause' : 'Play'} Slideshow
        </motion.button>
      </div>
      
      {/* Testimonials with side navigation */}
      <div className="relative max-w-6xl mx-auto">
        {/* Previous Button - positioned on the left side */}
        <motion.button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-12 h-12 bg-surface/80 backdrop-blur-sm border border-border rounded-full hover:bg-surface hover:border-primary/30 transition-all duration-300 group shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronLeft className="w-6 h-6 text-text-secondary group-hover:text-primary transition-colors" />
        </motion.button>

        {/* Next Button - positioned on the right side */}
        <motion.button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-12 h-12 bg-surface/80 backdrop-blur-sm border border-border rounded-full hover:bg-surface hover:border-primary/30 transition-all duration-300 group shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronRight className="w-6 h-6 text-text-secondary group-hover:text-primary transition-colors" />
        </motion.button>
        
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <Swiper
          modules={[Pagination, A11y, Autoplay, EffectCoverflow]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            768: {
              slidesPerView: 1.2,
              centeredSlides: true,
            },
            1024: {
              slidesPerView: 1.5,
              centeredSlides: true,
            }
          }}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true,
          }}
          pagination={{ 
            clickable: true,
            bulletActiveClass: 'swiper-pagination-bullet-active',
            bulletClass: 'swiper-pagination-bullet'
          }}
          autoplay={{ 
            delay: 6000, 
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          onSwiper={setSwiperInstance}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="pb-14 px-16"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-surface/50 backdrop-blur-lg p-8 rounded-xl border border-border max-w-3xl mx-auto text-center relative overflow-hidden group hover-lift cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                onClick={() => {
                  if (isAutoplay) {
                    swiperInstance?.autoplay.stop();
                    setIsAutoplay(false);
                  }
                }}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating quote decorations */}
                <div className="absolute top-4 left-4 opacity-10">
                  <Quote className="w-16 h-16 text-primary transform -rotate-12" />
                </div>
                <div className="absolute bottom-4 right-4 opacity-10">
                  <Quote className="w-12 h-12 text-accent transform rotate-12 scale-x-[-1]" />
                </div>
                
                <div className="relative z-10">
                  {/* Company logo with hover effect */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 2 }}
                  >
                    <ImageWithFallback 
                      src={testimonial.logo} 
                      alt={`${testimonial.company} logo`} 
                      className="h-12 mx-auto mb-6 dark:invert-[0.8] brightness-50 dark:brightness-100 filter transition-all duration-300 group-hover:brightness-75 dark:group-hover:brightness-125"
                      loading="lazy"
                    />
                  </motion.div>
                  
                  {/* Star rating */}
                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(5)].map((_, starIndex) => (
                      <motion.div
                        key={starIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: starIndex * 0.1 + 0.5 }}
                      >
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Quote icon with animation */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <Quote className="w-8 h-8 text-primary/50 mx-auto mb-4 transform -scale-x-100" />
                  </motion.div>
                  
                  {/* Testimonial text with enhanced typography */}
                  <motion.p 
                    className="text-lg md:text-xl text-text-primary italic mb-6 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    "{testimonial.quote}"
                  </motion.p>
                  
                  {/* Author info with enhanced styling */}
                  <motion.div 
                    className="flex items-center justify-center gap-4 mb-6"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                    >
                      <ImageWithFallback 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="w-16 h-16 rounded-full border-2 border-primary/20 group-hover:border-primary/40 transition-colors"
                        loading="lazy"
                      />
                    </motion.div>
                    <div className="text-left">
                      <p className="font-bold text-text-primary group-hover:text-primary transition-colors">
                        {testimonial.name}
                      </p>
                      <p className="text-text-secondary text-sm">
                        {testimonial.role}
                      </p>
                      <p className="text-accent font-medium text-sm">
                        {testimonial.company}
                      </p>
                    </div>
                  </motion.div>
                  
                  {/* CTA with enhanced styling */}
                  {testimonial.caseStudyId && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.5 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Link to={`/case-studies/${testimonial.caseStudyId}`}>
                        <Button variant="outline" size="sm" className="group/btn">
                          <span className="flex items-center gap-2">
                            View The Project
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                          </span>
                        </Button>
                      </Link>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
          </Swiper>
          
          {/* Custom indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => swiperInstance?.slideTo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-primary scale-125' : 'bg-border hover:bg-border-hover'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </MotionDiv>
      </div>
    </Section>
  );
};

export default Testimonials;