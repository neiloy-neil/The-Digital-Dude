import Card from './Card';
import { ArrowRight, Calendar, Tag } from 'lucide-react';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  coverImage: string;
  tags: string[];
  category: string;
}

interface BlogPostCardProps {
  post: BlogPost;
}

// FIX: Removed React.FC for better type compatibility.
const BlogPostCard = ({ post }: BlogPostCardProps) => {
  return (
    <Card className="hover-glow-rgb card-gradient-hover h-full flex flex-col">
      <Card.Image src={post.coverImage} alt={post.title} className="h-48 object-cover" />
      <Card.Header className="flex-grow">
        <div className="flex items-center gap-2 flex-wrap mb-2">
            {post.tags.map(tag => (
                 <span key={tag} className="bg-primary/20 text-accent text-xs font-semibold px-2.5 py-1 rounded-full capitalize flex items-center gap-1">
                    <Tag size={12}/> {tag}
                 </span>
            ))}
        </div>
        <h3 className="text-xl font-bold text-white mt-3 leading-snug heading-gradient">{post.title}</h3>
      </Card.Header>
      <Card.Content className="!pt-0 flex-grow">
        <p className="text-sm text-text-secondary">{post.description}</p>
      </Card.Content>
      <Card.Footer className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-2 text-sm text-text-secondary">
              <Calendar size={16} />
              <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
          <div className="text-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-sm font-semibold">Read More</span>
              <ArrowRight size={16} />
          </div>
      </Card.Footer>
    </Card>
  );
};

export default BlogPostCard;