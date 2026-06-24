import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import Button from '../../components/ui/Button';
import Seo from '../../components/Seo';
import ImageWithFallback from '../../components/ui/ImageWithFallback';
import { blogPostComponents } from '../../content/blog/index';
import { blogPosts } from '../../data/staticData';

// FIX: Casting motion component to 'any' to bypass type checking issues
// that are likely due to a project configuration or dependency version mismatch.
const MotionDiv: any = motion.div;

// FIX: Removed explicit JSX.Element return type to fix type resolution issues with framer-motion.
const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const PostContent = slug ? blogPostComponents[slug] : null;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post || !PostContent) {
    return (
      <div className="text-center py-40">
        <p className="text-red-400 mb-4">Could not load post.</p>
        <Button variant="ghost" onClick={() => navigate('/blog')}>Back to Blog</Button>
      </div>
    );
  }

  return (
    <>
      <Seo
        title={post.title}
        description={post.description}
        image={`${window.location.origin}${post.coverImage}`}
        type="article"
        datePublished={post.date}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.date,
          "dateModified": post.date,
          "author": {
            "@type": "Person",
            "name": "The Digital Dude Team"
          },
          "image": `${window.location.origin}${post.coverImage}`,
          "publisher": {
            "@type": "Organization",
            "name": "The Digital Dude",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.digitaldude.co.uk/logo.png"
            }
          },
          "articleBody": post.description
        }}
      />
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pt-24 pb-20"
      >
        <div className="container mx-auto px-6 max-w-4xl">
          <Button variant="ghost" onClick={() => navigate('/blog')} leftIcon={<ArrowLeft size={20} />} className="mb-8 text-text-secondary !p-0">
            Back to Blog
          </Button>

          <article>
            <header className="mb-12 text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-4 leading-tight">{post.title}</h1>
              <div className="flex items-center justify-center gap-6 text-text-secondary mt-4">
                  <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                      <Tag size={16} />
                      <span className="capitalize">{post.tags.join(', ')}</span>
                  </div>
              </div>
            </header>

            <ImageWithFallback src={post.coverImage} alt={post.title} loading="lazy" className="w-full rounded-lg shadow-2xl mb-12" />
            
            <div className="prose prose-lg max-w-none">
              <PostContent />
            </div>
          </article>
        </div>
      </MotionDiv>
    </>
  );
};

export default BlogPostPage;
