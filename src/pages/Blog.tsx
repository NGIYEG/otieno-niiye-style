import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/hooks/useAuth";
import { Loader2, Plus } from "lucide-react";
import { format } from "date-fns";

interface Blog {
  id: string;
  title: string;
  excerpt: string | null;
  content: string;
  author: string | null;
  image_url: string | null;
  published: boolean;
  created_at: string;
}

const Blog = () => {
  const { isAdmin } = useAuth();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .eq("published", true)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setBlogs(data || []);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen pt-24 px-4 pb-16 flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-24 px-4 pb-16">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl md:text-5xl font-bold">Blog</h1>
          {isAdmin && (
            <Button asChild>
              <Link to="/blog/create">
                <Plus className="h-4 w-4 mr-2" />
                New Post
              </Link>
            </Button>
          )}
        </div>
        <p className="text-lg text-muted-foreground mb-12">
          Thoughts, insights, and tutorials on web development.
        </p>

        {blogs.length === 0 ? (
          <p className="text-muted-foreground">No blog posts yet. Check back soon!</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <Card key={blog.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                {blog.image_url && (
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={blog.image_url}
                      alt={blog.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">
                      {format(new Date(blog.created_at), "MMM dd, yyyy")}
                    </Badge>
                  </div>
                  <CardTitle className="line-clamp-2">{blog.title}</CardTitle>
                  {blog.excerpt && (
                    <CardDescription className="line-clamp-3">
                      {blog.excerpt}
                    </CardDescription>
                  )}
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">By {blog.author}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="link" className="px-0">
                    <Link to={`/blog/${blog.id}`}>Read More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Blog;
