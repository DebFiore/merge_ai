import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { BlogPost } from "@/api/entities";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { format } from "date-fns";

export default function BlogPostPage() {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadPost() {
      const urlParams = new URLSearchParams(window.location.search);
      const postId = urlParams.get("id");
      if (!postId) {
        setIsLoading(false);
        return;
      }
      
      setIsLoading(true);
      try {
        const fetchedPost = await BlogPost.get(postId);
        setPost(fetchedPost);
      } catch (error) {
        console.error("Failed to load blog post:", error);
      }
      setIsLoading(false);
    }
    loadPost();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#02012d] text-white flex items-center justify-center">
        <p>Loading post...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-[#02012d] text-white flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-white mb-4">Post Not Found</h2>
        <Link
          to={createPageUrl("blog")}
          className="flex items-center text-[#DB07b5] font-semibold hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#02012d] text-white">
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <Link
              to={createPageUrl("blog")}
              className="flex items-center text-gray-300 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-6 text-lg text-gray-400">
              {post.category && (
                <div className="flex items-center gap-2">
                  <Tag className="w-5 h-5 text-[#DB07b5]" />
                  <span>{post.category}</span>
                </div>
              )}
              {post.publish_date && (
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#00839C]" />
                  <span>{format(new Date(post.publish_date), "MMMM d, yyyy")}</span>
                </div>
              )}
            </div>
          </div>

          {post.featured_image && (
            <img
              src={post.featured_image}
              alt={post.title}
              className="w-full rounded-2xl mb-12 shadow-2xl"
            />
          )}
          
          <div className="prose prose-invert lg:prose-xl mx-auto text-gray-300">
            <style>{`
              .prose-invert h2, .prose-invert h3 { color: white; }
              .prose-invert a { color: #DB07b5; }
              .prose-invert p, .prose-invert li { color: #d1d5db; line-height: 1.8; }
            `}</style>
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </div>
      </section>
    </div>
  );
}