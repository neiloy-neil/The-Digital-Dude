import { blogPosts } from '../../data/staticData';
import Card from './Card';
import Button from './Button';

// FIX: Removed React.FC for better type compatibility.
const BlogSidebar = ({
  activeCategory,
  onSelectCategory,
}: {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}) => {
  // Get unique categories from the actual blog posts
  const categories = ['All', ...Array.from(new Set(blogPosts.map(p => p.category)))];

  return (
    <aside className="space-y-6">
      <Card className="p-6">
        <h3 className="text-xl font-bold text-text-primary mb-4">Categories</h3>
        <div className="flex flex-col items-start gap-2">
          {categories.map(category => (
            <Button
              key={category}
              variant="ghost"
              size="sm"
              className={`w-full justify-start capitalize ${activeCategory === category ? 'text-primary font-medium' : 'text-text-secondary'}`}
              onClick={() => onSelectCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </Card>
      
      <Card className="p-6 text-center">
        <h3 className="text-xl font-bold text-text-primary mb-2">Subscribe for Insights</h3>
        <p className="text-text-secondary mb-4 text-sm">Get the latest articles and insights delivered to your inbox.</p>
        <div className="flex flex-col gap-2">
            <input type="email" placeholder="your.email@example.com" className="w-full bg-surface border border-border rounded-md py-2 px-4 text-text-primary outline-none focus:ring-2 focus:ring-primary focus:border-primary" />
            <Button size="md" className="w-full">Subscribe</Button>
        </div>
      </Card>
    </aside>
  );
};

export default BlogSidebar;