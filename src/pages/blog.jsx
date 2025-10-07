import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { format } from "date-fns";
import blogsData from "@/data/blogs.json";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);

  // Get unique categories from blogs data
  const categories = ["All", ...new Set(blogsData.map((post) => post.category).filter(Boolean))];

  useEffect(() => {
    // Load posts from JSON file
    setIsLoading(true);
    try {
      // Filter published posts and sort by publish_date descending
      const publishedPosts = blogsData
        .filter((post) => post.published === true)
        .sort((a, b) => new Date(b.publish_date) - new Date(a.publish_date));
      setPosts(publishedPosts);
      setFilteredPosts(publishedPosts);
    } catch (error) {
      console.error("Failed to load blog posts:", error);
    }
    setIsLoading(false);
  }, []);

  // Filter posts when category changes
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(posts.filter((post) => post.category === selectedCategory));
    }
  }, [selectedCategory, posts]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

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
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
              MERGE AI <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Insights on AI Technology, Lead Generation, and Sales Automation
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? "gradient-bg text-white shadow-lg"
                    : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Posts Count */}
          <div className="text-center mb-8">
            <p className="text-gray-400">
              Showing <span className="text-white font-semibold">{filteredPosts.length}</span> {filteredPosts.length === 1 ? 'post' : 'posts'}
              {selectedCategory !== "All" && (
                <span> in <span className="text-[#DB07b5] font-semibold">{selectedCategory}</span></span>
              )}
            </p>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-white mb-2">
                {selectedCategory === "All" ? "No Posts Yet" : `No Posts in ${selectedCategory}`}
              </h3>
              <p className="text-gray-400">
                {selectedCategory === "All" 
                  ? "Check back soon for insights and updates." 
                  : "Try selecting a different category to see more posts."}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Link key={post.slug} to={`/blog/${post.slug}`}>
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