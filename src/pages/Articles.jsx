import React, { useState, useEffect } from "react";
import { BlogPost } from "@/api/entities";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BookOpen,
  Search
} from "lucide-react";
import { Input } from "@/components/ui/input";
import NewsletterModal from "@/components/shared/NewsletterModal";

export default function Articles() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      const allPosts = await BlogPost.filter({ published: true }, "-publish_date");
      setPosts(allPosts);
      setIsLoading(false);
    };
    fetchPosts();
  }, []);

  const categories = ["All", "AI Technology", "Lead Generation", "Sales Automation", "Industry News", "Case Studies"];

  const filteredPosts = posts.filter(post => {
    const searchMatch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        (post.excerpt && post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()));
    const categoryMatch = selectedCategory === "All" || post.category === selectedCategory;
    return searchMatch && categoryMatch;
  });

  const featuredPost = filteredPosts.length > 0 ? filteredPosts[0] : null;
  const recentPosts = filteredPosts.length > 1 ? filteredPosts.slice(1, 7) : [];

  const renderSkeleton = (count) => (
    [...Array(count)].map((_, i) => (
      <Card key={i} className="dark-card animate-pulse">
        <div className="aspect-video bg-white/10"></div>
        <CardContent className="p-6">
          <div className="h-4 bg-white/10 rounded w-1/4 mb-4"></div>
          <div className="h-6 bg-white/10 rounded mb-2"></div>
          <div className="h-4 bg-white/10 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-white/10 rounded w-1/2"></div>
        </CardContent>
      </Card>
    ))
  );

  return (
    <>
      <NewsletterModal isOpen={isNewsletterModalOpen} onClose={() => setIsNewsletterModalOpen(false)} />
      <div className="min-h-screen bg-[#02012d] text-white">
        {/* Hero Section */}
        <section className="section-padding bg-white/5">
          <div className="max-w-4xl mx-auto px-6 text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#DB07b5]/10 to-[#E501E4]/10 border border-[#DB07b5]/20 mb-8">
                <BookOpen className="w-4 h-4 text-[#DB07b5] mr-2" />
                <span className="text-sm font-medium text-white">Latest AI Insights</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
                The Cognitive Edge
              </h1>

              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Insights on conversational AI and machine learning innovations shaping tomorrow's business landscape.
              </p>

              <div className="relative max-w-2xl mx-auto mb-12">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-4 py-4 text-lg rounded-full bg-white/10 border-white/20 focus:border-[#DB07b5] focus:ring-[#DB07b5] text-white placeholder-gray-400"
                />
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 rounded-full font-medium transition-all ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-[#DB07b5] to-[#E501E4] text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
          </div>
        </section>

        {/* Featured Post */}
        {isLoading ? (
          <div className="py-20 max-w-7xl mx-auto px-6"><div className="h-96 bg-white/10 rounded-lg animate-pulse"></div></div>
        ) : featuredPost && (
          <section className="py-20 bg-[#02012d]">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Featured Article
                </h2>
              </div>
              <Card className="dark-card gradient-hover overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="aspect-video lg:aspect-auto bg-white/5 flex items-center justify-center">
                    <img src={featuredPost.featured_image} alt={featuredPost.title} className="w-full h-full object-cover" />
                  </div>
                  <CardContent className="p-12 flex flex-col justify-center">
                    <Badge className="mr-3 bg-[#DB07b5]/20 text-[#DB07b5] border-[#DB07b5]/30 mb-4 self-start">{featuredPost.category}</Badge>
                    <h3 className="text-3xl font-bold text-white mb-4">{featuredPost.title}</h3>
                    <p className="text-gray-300 mb-8 leading-relaxed">{featuredPost.excerpt}</p>
                    <Button data-form-trigger="true" className="gradient-bg text-white px-6 py-3 rounded-full font-medium gradient-hover self-start">
                      Read Full Article <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </div>
          </section>
        )}

        {/* Recent Posts */}
        <section className="py-20 bg-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Recent Articles
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {isLoading ? renderSkeleton(6) : recentPosts.map((post) => (
                <Card key={post.id} className="dark-card gradient-hover overflow-hidden flex flex-col">
                  <div className="aspect-video bg-white/5">
                    <img src={post.featured_image} alt={post.title} className="w-full h-full object-cover" />
                  </div>
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <Badge className="mr-3 bg-[#DB07b5]/20 text-[#DB07b5] border-[#DB07b5]/30 mb-4 self-start">{post.category}</Badge>
                    <h3 className="text-xl font-bold text-white mb-3 flex-grow">{post.title}</h3>
                    <p className="text-gray-400 mb-4 text-sm">{post.excerpt}</p>
                    <Button data-form-trigger="true" variant="ghost" className="text-[#DB07b5] hover:text-[#DB07b5] hover:bg-transparent p-0 h-auto font-medium self-start">
                      Read More <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            {!isLoading && filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <h3 className="text-2xl font-bold text-white mb-2">No Articles Found</h3>
                <p className="text-gray-400">Try adjusting your search or category filter.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="section-padding bg-[#02012d]">
          <div className="max-w-4xl mx-auto px-6 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Stay on the Cognitive Edge</h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">Subscribe to our newsletter and get the latest insights on AI innovations and business growth strategies delivered to your inbox.</p>
              <Button onClick={() => setIsNewsletterModalOpen(true)} className="gradient-bg text-white px-12 py-4 rounded-full text-lg font-medium gradient-hover">
                Subscribe to Newsletter <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
          </div>
        </section>
      </div>
    </>
  );
}