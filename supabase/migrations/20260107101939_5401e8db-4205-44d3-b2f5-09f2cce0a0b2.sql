-- Drop the blog-related tables (they're not being used)
DROP TABLE IF EXISTS public.blog_comments CASCADE;
DROP TABLE IF EXISTS public.blog_likes CASCADE;
DROP TABLE IF EXISTS public.blog_views CASCADE;
DROP TABLE IF EXISTS public.blogs CASCADE;