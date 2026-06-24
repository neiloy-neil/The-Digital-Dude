import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Section from '../../components/ui/Section';
import { motion, AnimatePresence } from 'framer-motion';
import BlogPostCard from '../../components/ui/BlogPostCard';
import Seo from '../../components/Seo';
import { blogPosts } from '../../data/staticData';
import { BlogPost } from '../../types';
import BlogSidebar from '../../components/ui/BlogSidebar';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
  exit: { opacity: 0, scale: 0.95 },
};

// FIX: Casting motion component to 'any' to bypass type checking issues
// that are likely due to a project configuration or dependency version mismatch.
const MotionDiv: any = motion.div;

// FIX: Removed explicit JSX.Element return type to fix type resolution issues with framer-motion.
const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = useMemo(() => {
    const sorted = [...blogPosts].sort((a: BlogPost, b: BlogPost) => new Date(b.date).getTime() - new Date(a.date).getTime());
    if (activeCategory === 'All') {
      return sorted;
    }
    return sorted.filter(post => post.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <Seo
        title="Software Development Blog | SaaS, AI & Tech Insights"
        description="Learn about cutting-edge web development, SaaS architecture & AI implementation. Expert tips to accelerate your digital transformation."
        type="website"
      />
      <div className="pt-24">
        <Section title="Software Development Blog" subtitle="Insights, tutorials, and thoughts on AI, SaaS, and custom software.">
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl grid lg:grid-cols-4 gap-8">
            {/* Blog Posts Grid */}
            <MotionDiv
              layout
              className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <AnimatePresence>
                {filteredPosts.map((post) => (
                  <MotionDiv
                    key={post.slug} 
                    variants={itemVariants}
                    layout
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="h-full"
                  >
                    <Link to={`/blog/${post.slug}`}>
                      <BlogPostCard post={post} />
                    </Link>
                  </MotionDiv>
                ))}
              </AnimatePresence>
            </MotionDiv>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <BlogSidebar activeCategory={activeCategory} onSelectCategory={setActiveCategory} />
            </div>
          </div>
        </Section>
      </div>
    </>
  );
};

export default BlogPage;