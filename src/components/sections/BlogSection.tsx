import { useState, useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useVisitorId } from '@/hooks/useVisitorId';
import { supabase } from '@/integrations/supabase/client';
import { Eye, Heart, MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_image: string | null;
  published_at: string;
}

interface Comment {
  id: string;
  author_name: string;
  content: string;
  created_at: string;
}

// Sample blog data (you'll replace with real data later)
const sampleBlogs: Blog[] = [
  {
    id: '1',
    title: 'Building Scalable Systems with Microservices',
    slug: 'scalable-microservices',
    excerpt: 'Learn how to design and implement microservices architecture that scales.',
    content: `# Building Scalable Systems with Microservices

Microservices architecture has become the go-to approach for building large-scale applications. In this post, we'll explore the key principles and best practices.

## Why Microservices?

Traditional monolithic applications become difficult to maintain as they grow. Microservices offer several advantages:

- **Independent deployment**: Each service can be deployed independently
- **Technology diversity**: Use the best tool for each job
- **Scalability**: Scale individual services based on demand
- **Team autonomy**: Teams can work independently

## Key Principles

1. **Single Responsibility**: Each service should do one thing well
2. **Loose Coupling**: Services should be independent
3. **High Cohesion**: Related functionality should be grouped together

## Getting Started

Start small and gradually decompose your monolith. Don't try to do everything at once!`,
    cover_image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
    published_at: '2024-12-15',
  },
  {
    id: '2',
    title: 'The Future of AI in Software Development',
    slug: 'ai-software-development',
    excerpt: 'Exploring how AI is transforming the way we write and maintain code.',
    content: `# The Future of AI in Software Development

AI is revolutionizing software development. From code completion to automated testing, let's explore the possibilities.

## Current Applications

- **Code Completion**: AI-powered suggestions that understand context
- **Bug Detection**: Finding issues before they reach production
- **Documentation**: Automatic generation of docs from code

## What's Next?

The future holds even more exciting possibilities including fully autonomous debugging and self-healing systems.`,
    cover_image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    published_at: '2024-12-10',
  },
  {
    id: '3',
    title: 'Mastering TypeScript: Advanced Patterns',
    slug: 'typescript-patterns',
    excerpt: 'Deep dive into advanced TypeScript patterns for better code quality.',
    content: `# Mastering TypeScript: Advanced Patterns

TypeScript offers powerful features for building type-safe applications. Let's explore some advanced patterns.

## Discriminated Unions

One of the most powerful patterns in TypeScript for handling different states.

## Conditional Types

Build flexible, reusable types that adapt to different situations.

## Template Literal Types

Create precise string types for better validation.`,
    cover_image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800',
    published_at: '2024-12-05',
  },
];

export const BlogSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const visitorId = useVisitorId();
  const { toast } = useToast();
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [blogs] = useState<Blog[]>(sampleBlogs);
  const [blogStats, setBlogStats] = useState<Record<string, { views: number; likes: number; liked: boolean }>>({});
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState({ name: '', content: '' });

  useEffect(() => {
    // Initialize stats for sample blogs
    const stats: Record<string, { views: number; likes: number; liked: boolean }> = {};
    sampleBlogs.forEach((blog) => {
      stats[blog.id] = { views: Math.floor(Math.random() * 500) + 50, likes: Math.floor(Math.random() * 100) + 10, liked: false };
    });
    setBlogStats(stats);
  }, []);

  const openBlog = async (blog: Blog) => {
    setSelectedBlog(blog);
    // Track view
    if (visitorId) {
      try {
        await supabase.from('blog_views').upsert({ blog_id: blog.id, visitor_id: visitorId }, { onConflict: 'blog_id,visitor_id' });
      } catch (e) {
        // Sample data, ignore errors
      }
    }
  };

  const toggleLike = async () => {
    if (!selectedBlog || !visitorId) return;
    const isLiked = blogStats[selectedBlog.id]?.liked;
    
    setBlogStats((prev) => ({
      ...prev,
      [selectedBlog.id]: {
        ...prev[selectedBlog.id],
        likes: prev[selectedBlog.id].likes + (isLiked ? -1 : 1),
        liked: !isLiked,
      },
    }));

    toast({ title: isLiked ? 'Like removed' : 'Post liked!' });
  };

  const submitComment = () => {
    if (!newComment.name || !newComment.content) return;
    
    const comment: Comment = {
      id: Date.now().toString(),
      author_name: newComment.name,
      content: newComment.content,
      created_at: new Date().toISOString(),
    };
    
    setComments((prev) => [comment, ...prev]);
    setNewComment({ name: '', content: '' });
    toast({ title: 'Comment added!' });
  };

  return (
    <section id="blog" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Blog</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Thoughts on technology, development, and more</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <button
              key={blog.id}
              onClick={() => openBlog(blog)}
              className={`glass-card-hover overflow-hidden text-left transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {blog.cover_image && (
                <img src={blog.cover_image} alt={blog.title} className="w-full h-48 object-cover" />
              )}
              <div className="p-6">
                <h3 className="text-xl font-display font-bold mb-2">{blog.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{blog.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><Eye size={14} /> {blogStats[blog.id]?.views || 0}</span>
                  <span className="flex items-center gap-1"><Heart size={14} /> {blogStats[blog.id]?.likes || 0}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Blog Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm" onClick={() => setSelectedBlog(null)}>
          <div className="glass-card max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 glass-card p-4 flex items-center justify-between border-b border-border/50">
              <h2 className="font-display font-bold">{selectedBlog.title}</h2>
              <button onClick={() => setSelectedBlog(null)} className="p-2 hover:bg-muted rounded-lg"><X size={20} /></button>
            </div>
            
            {selectedBlog.cover_image && <img src={selectedBlog.cover_image} alt={selectedBlog.title} className="w-full h-64 object-cover" />}
            
            <div className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <span className="flex items-center gap-1 text-muted-foreground"><Eye size={16} /> {blogStats[selectedBlog.id]?.views || 0} views</span>
                <button onClick={toggleLike} className={`flex items-center gap-1 transition-colors ${blogStats[selectedBlog.id]?.liked ? 'text-red-500' : 'text-muted-foreground hover:text-red-500'}`}>
                  <Heart size={16} fill={blogStats[selectedBlog.id]?.liked ? 'currentColor' : 'none'} /> {blogStats[selectedBlog.id]?.likes || 0}
                </button>
                <span className="flex items-center gap-1 text-muted-foreground"><MessageCircle size={16} /> {comments.length}</span>
              </div>

              <div className="prose prose-invert max-w-none mb-8">
                {selectedBlog.content.split('\n').map((line, i) => {
                  if (line.startsWith('# ')) return <h1 key={i} className="text-3xl font-display font-bold mt-6 mb-4">{line.slice(2)}</h1>;
                  if (line.startsWith('## ')) return <h2 key={i} className="text-2xl font-display font-bold mt-6 mb-3">{line.slice(3)}</h2>;
                  if (line.startsWith('- ')) return <li key={i} className="text-muted-foreground ml-4">{line.slice(2)}</li>;
                  if (line.trim()) return <p key={i} className="text-muted-foreground mb-4">{line}</p>;
                  return null;
                })}
              </div>

              {/* Comments */}
              <div className="border-t border-border/50 pt-6">
                <h3 className="font-display font-bold mb-4">Comments ({comments.length})</h3>
                <div className="flex gap-3 mb-6">
                  <Input placeholder="Your name" value={newComment.name} onChange={(e) => setNewComment({ ...newComment, name: e.target.value })} className="flex-1 bg-background/50" />
                  <Textarea placeholder="Write a comment..." value={newComment.content} onChange={(e) => setNewComment({ ...newComment, content: e.target.value })} className="flex-[2] bg-background/50" rows={1} />
                  <Button onClick={submitComment} size="icon"><Send size={16} /></Button>
                </div>
                <div className="space-y-4">
                  {comments.map((comment) => (
                    <div key={comment.id} className="glass-card p-4">
                      <p className="font-medium mb-1">{comment.author_name}</p>
                      <p className="text-muted-foreground text-sm">{comment.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
