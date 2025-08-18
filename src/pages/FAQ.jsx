
import React, { useState, useEffect } from "react";
import { FAQ } from "@/api/entities";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
  Search,
  MessageCircle,
  ArrowRight
} from "lucide-react";
import { Input } from "@/components/ui/input";

export default function FAQPage() {
  const [faqs, setFaqs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedItems, setExpandedItems] = useState(new Set());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadFAQs();
  }, []);

  const loadFAQs = async () => {
    setIsLoading(true);
    const data = await FAQ.list("order");
    setFaqs(data);
    setIsLoading(false);
  };

  const categories = ["All", "General", "Pricing", "Features", "Technical", "Onboarding"];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleExpanded = (id) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <div className="min-h-screen bg-[#02012d] text-white">
      {/* Hero Section */}
      <section className="section-padding bg-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#DB07b5]/10 to-[#E501E4]/10 border border-[#DB07b5]/20 mb-8">
            <HelpCircle className="w-4 h-4 text-[#DB07b5] mr-2" />
            <span className="text-sm font-medium text-white">Help Center</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Frequently Asked
            <span className="gradient-text block">Questions</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Find answers to common questions about MERGE AI, our features, pricing, and more.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-12">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search for answers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 pr-4 py-4 text-lg rounded-full bg-white/10 border-white/20 focus:border-[#DB07b5] focus:ring-[#DB07b5] text-white placeholder-gray-400"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
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

      {/* FAQ Section */}
      <section className="py-20 bg-[#02012d]">
        <div className="max-w-4xl mx-auto px-6">
          {isLoading ? (
            <div className="space-y-4">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="dark-card animate-pulse">
                  <CardContent className="p-8">
                    <div className="h-6 bg-white/10 rounded mb-4"></div>
                    <div className="h-4 bg-white/10 rounded w-3/4"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : filteredFAQs.length === 0 ? (
            <div className="text-center py-16">
              <HelpCircle className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">No FAQs Found</h3>
              <p className="text-gray-400 mb-8">
                {searchTerm || selectedCategory !== "All" 
                  ? "Try adjusting your search or category filter"
                  : "No frequently asked questions are available yet"
                }
              </p>
              {(searchTerm || selectedCategory !== "All") && (
                <Button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                  }}
                  variant="outline"
                  className="border-white/50 text-white hover:bg-white hover:text-[#02012d]"
                >
                  Clear Filters
                </Button>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFAQs.map((faq) => (
                <Card key={faq.id} className="dark-card gradient-hover">
                  <CardContent className="p-0">
                    <button
                      onClick={() => toggleExpanded(faq.id)}
                      className="w-full p-8 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                    >
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <Badge className="mr-3 bg-[#DB07b5]/20 text-[#DB07b5] border-[#DB07b5]/30">
                            {faq.category}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-bold text-white leading-relaxed">
                          {faq.question}
                        </h3>
                      </div>
                      <div className="ml-4">
                        {expandedItems.has(faq.id) ? (
                          <ChevronUp className="w-6 h-6 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-gray-400" />
                        )}
                      </div>
                    </button>
                    
                    {expandedItems.has(faq.id) && (
                      <div className="px-8 pb-8">
                        <div className="pt-4 border-t border-white/10">
                          <p className="text-gray-300 leading-relaxed text-lg">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="section-padding bg-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Card className="dark-card gradient-hover">
            <CardContent className="p-12">
              <div className="w-16 h-16 bg-gradient-to-r from-[#DB07b5] to-[#E501E4] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Still Have Questions?
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Can't find the answer you're looking for? Our support team is here to help 
                you get the most out of MERGE AI.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button data-form-trigger="true" className="gradient-bg text-white px-8 py-3 rounded-full font-medium gradient-hover">
                  Contact Support
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button data-form-trigger="true" variant="outline" className="px-8 py-3 rounded-full font-medium border-white/50 text-white hover:bg-white hover:text-[#02012d]">
                  Schedule Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
