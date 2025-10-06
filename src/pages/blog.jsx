import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { BlogPost } from "@/api/entities";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { format } from "date-fns";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadPosts() {
      setIsLoading(true);
      try {
        const publishedPosts = await BlogPost.filter({ published: true }, "-publish_date");
        setPosts(publishedPosts);
      } catch (error) {
        console.error("Failed to load blog posts:", error);
      }
      setIsLoading(false);
    }
    loadPosts();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#02012d] text-white flex items-center justify-center">
        <p>Loading posts...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#02012d] text-white">
      <section className="section-padding bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
              MERGE AI <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Insights on AI Technology, Lead Generation, and Sales Automation
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-white mb-2">No Posts Yet</h3>
              <p className="text-gray-400">Check back soon for insights and updates.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link key={post.id} to={createPageUrl(`blogPost?id=${post.id}`)}>
                  <Card className="dark-card gradient-hover h-full flex flex-col group">
                    {post.featured_image && (
                      <div className="overflow-hidden rounded-t-lg">
                        <img
                          src={post.featured_image}
                          alt={post.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <CardContent className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                        {post.category && (
                          <div className="flex items-center gap-2">
                            <Tag className="w-4 h-4" />
                            <span>{post.category}</span>
                          </div>
                        )}
                        {post.publish_date && (
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{format(new Date(post.publish_date), "MMM d, yyyy")}</span>
                          </div>
                        )}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4 flex-grow">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 mb-6 flex-grow">{post.excerpt}</p>
                      <div className="mt-auto flex items-center text-[#DB07b5] font-semibold group-hover:text-white transition-colors">
                        Read More <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}