-- Create blogs table
CREATE TABLE public.blogs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  cover_image TEXT,
  published_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create blog_views table for tracking views
CREATE TABLE public.blog_views (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  blog_id UUID NOT NULL REFERENCES public.blogs(id) ON DELETE CASCADE,
  visitor_id TEXT NOT NULL,
  viewed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(blog_id, visitor_id)
);

-- Create blog_likes table
CREATE TABLE public.blog_likes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  blog_id UUID NOT NULL REFERENCES public.blogs(id) ON DELETE CASCADE,
  visitor_id TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(blog_id, visitor_id)
);

-- Create blog_comments table
CREATE TABLE public.blog_comments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  blog_id UUID NOT NULL REFERENCES public.blogs(id) ON DELETE CASCADE,
  author_name TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.blogs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_views ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_likes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_comments ENABLE ROW LEVEL SECURITY;

-- RLS Policies for blogs (public read)
CREATE POLICY "Blogs are publicly readable"
ON public.blogs
FOR SELECT
USING (true);

-- RLS Policies for blog_views (anyone can insert/read)
CREATE POLICY "Anyone can view blog views"
ON public.blog_views
FOR SELECT
USING (true);

CREATE POLICY "Anyone can insert blog views"
ON public.blog_views
FOR INSERT
WITH CHECK (true);

-- RLS Policies for blog_likes (anyone can like/unlike)
CREATE POLICY "Anyone can view blog likes"
ON public.blog_likes
FOR SELECT
USING (true);

CREATE POLICY "Anyone can insert blog likes"
ON public.blog_likes
FOR INSERT
WITH CHECK (true);

CREATE POLICY "Anyone can delete their own likes"
ON public.blog_likes
FOR DELETE
USING (true);

-- RLS Policies for blog_comments (anyone can read/insert)
CREATE POLICY "Anyone can view blog comments"
ON public.blog_comments
FOR SELECT
USING (true);

CREATE POLICY "Anyone can insert blog comments"
ON public.blog_comments
FOR INSERT
WITH CHECK (true);

-- Create indexes for performance
CREATE INDEX idx_blog_views_blog_id ON public.blog_views(blog_id);
CREATE INDEX idx_blog_likes_blog_id ON public.blog_likes(blog_id);
CREATE INDEX idx_blog_comments_blog_id ON public.blog_comments(blog_id);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_blogs_updated_at
BEFORE UPDATE ON public.blogs
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Enable realtime for comments (for live updates)
ALTER PUBLICATION supabase_realtime ADD TABLE public.blog_comments;
ALTER PUBLICATION supabase_realtime ADD TABLE public.blog_likes;