import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  MessagesSquare,
  Zap,
  TrendingUp,
  Users,
  Shield,
  BarChart3,
  MessageSquare,
  Sparkles,
  Workflow,
  Search,
  Globe,
  CheckCircle,
  ArrowRight
} from "lucide-react";

export default function Features() {
  const coreFeatures = [
    {
      icon: Brain,
      title: "Advanced AI Engine",
      description: "Proprietary AI technology that learns from your data to optimize outreach performance",
      benefits: ["Machine learning optimization", "Predictive analytics", "Behavioral pattern recognition"]
    },
    {
      icon: MessagesSquare,
      title: "Conversational AI",
      description: "Agentic AI Assistants so natural your prospect will think they are speaking to a human",
      benefits: ["Two-Way Conversations", "Voice Cloning", "Multilingual"]
    },
    {
      icon: MessageSquare,
      title: "Personalized Messaging",
      description: "Generate highly personalized messages that resonate with each prospect",
      benefits: ["Dynamic content generation", "Tone adaptation", "Cultural customization"]
    },
    {
      icon: Workflow,
      title: "Automated Workflows",
      description: "Set up sophisticated multi-channel outreach sequences",
      benefits: ["Multi-touch campaigns", "Smart scheduling", "Response handling"]
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Track performance and optimize campaigns with detailed insights",
      benefits: ["Live performance metrics", "A/B testing", "ROI tracking"]
    },
    {
      icon: Shield,
      title: "Compliance & Security",
      description: "Enterprise-grade security with full compliance management",
      benefits: ["GDPR compliance", "CAN-SPAM adherence", "Data encryption"]
    }
  ];

  const additionalFeatures = [
    "Multi-channel outreach (Email, LinkedIn, SMS)",
    "CRM integrations with popular platforms",
    "Lead scoring and qualification",
    "Response sentiment analysis",
    "Team collaboration tools",
    "White-label options available",
    "API access for custom integrations",
    "24/7 customer support",
    "Custom reporting dashboards",
    "Automated follow-up sequences"
  ];

  return (
    <div className="min-h-screen bg-[#02012d] text-white">
      {/* Hero Section */}
      <section className="section-padding bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#DB07b5]/10 to-[#E501E4]/10 border border-[#DB07b5]/20 mb-8">
              <Sparkles className="w-4 h-4 text-[#DB07b5] mr-2" />
              <span className="text-sm font-medium text-white">Cutting-Edge AI Features</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Powerful Features for
              <span className="block" style={{ color: '#DB07b5' }}>
                Maximum <span className="relative inline-block">
                  Impact
                  <svg
                    className="absolute -bottom-1 sm:-bottom-2 left-0 w-full"
                    viewBox="0 0 150 8"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 5C30 2 90 1 148 4"
                      stroke="#00839C"
                      strokeWidth="2.5"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <path
                      d="M2 6C30 3 90 2 148 5"
                      stroke="#00839C"
                      strokeWidth="2"
                      strokeOpacity="0.6"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Discover the comprehensive suite of AI-powered tools designed to revolutionize
              your lead generation and outreach efforts.
            </p>
          </div>

          {/* Core Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {coreFeatures.map((feature, index) => (
              <Card key={index} className="dark-card gradient-hover h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#DB07b5] to-[#E501E4] rounded-2xl flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>

                  <div className="space-y-3">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-[#00839C] mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="section-padding bg-[#02012d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Everything You Need to <span className="relative inline-block gradient-text">
                Succeed
                <svg
                  className="absolute -bottom-1 sm:-bottom-2 left-0 w-full"
                  viewBox="0 0 150 8"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 5C30 2 90 1 148 4"
                    stroke="#00839C"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M2 6C30 3 90 2 148 5"
                    stroke="#00839C"
                    strokeWidth="2"
                    strokeOpacity="0.6"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A complete platform with all the tools and features you need to scale your outreach efforts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="flex items-center p-4 bg-white/5 rounded-lg border border-white/10">
                <CheckCircle className="w-6 h-6 text-[#00839C] mr-4 flex-shrink-0" />
                <span className="text-gray-300 font-medium">{feature}</span>
              </div>
            ))}
          </div>

          {/* Feature Highlight */}
          <Card className="dark-card gradient-hover">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-[#DB07b5] to-[#E501E4] rounded-3xl flex items-center justify-center mx-auto mb-8">
                <Globe className="w-10 h-10 text-white" />
              </div>

              <h3 className="text-3xl font-bold text-white mb-6">
                Global Scale, Personal Touch
              </h3>

              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Reach prospects across 150+ countries with AI-powered localization that adapts
                your messaging to local cultures, languages, and business practices.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge className="px-4 py-2 bg-[#DB07b5]/20 text-[#DB07b5] border-[#DB07b5]/30">
                  50+ Languages
                </Badge>
                <Badge className="px-4 py-2 bg-[#00839C]/20 text-[#00839C] border-[#00839C]/30">
                  150+ Countries
                </Badge>
                <Badge className="px-4 py-2 bg-[#E501E4]/20 text-[#E501E4] border-[#E501E4]/30">
                  Cultural AI
                </Badge>
              </div>

              <Button data-form-trigger="true" className="gradient-bg text-white px-8 py-3 rounded-full font-medium gradient-hover">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white/5 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Get started today and see how MERGE AI can transform your lead generation process.
          </p>
          <Button data-form-trigger="true" className="gradient-bg text-white px-12 py-4 rounded-full text-lg font-medium gradient-hover">
            Book a Demo
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}