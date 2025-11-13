
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  ArrowRight,
  Zap,
  Crown,
  Building,
  Star,
  TrendingUp,
  Phone,
  MessageSquare,
  Workflow,
  Users
} from "lucide-react";
import AgentMarketplaceModal from "@/components/shared/AgentMarketplaceModal";

export default function Pricing() {
  const [isAgentModalOpen, setIsAgentModalOpen] = useState(false);

  useEffect(() => {
    const scriptId = 'ghl-agent-form-embed-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://link.mergemedia.ai/js/form_embed.js';
      script.async = true;
      document.body.appendChild(script);
    }

    // Scroll to Agent Marketplace section if hash is present
    if (window.location.hash === '#agent-marketplace') {
      setTimeout(() => {
        const element = document.getElementById('agent-marketplace');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  const plans = [
    {
      name: "Professional",
      icon: Zap,
      price: 1997,
      description: "Ideal for growing businesses ready to automate lead qualification",
      popular: false,
      roiPromise: "3-4x return within 90 days through eliminated missed leads",
      features: [
        "AI Conversational Voice Agent for 24/7/365 lead qualification and appointment setting",
        "Standard omnichannel support (SMS/email templates)",
        "CRM integration (Salesforce, HubSpot, Zoho)",
        "Dedicated implementation specialist",
        "500 minutes of talk time"
      ],
      accent: "#00839C"
    },
    {
      name: "Enterprise",
      icon: Star,
      price: 3997,
      description: "Ideal for businesses requiring custom workflows and deep integrations",
      popular: true,
      roiPromise: "5-6x return through conversion optimization and operational efficiency",
      features: [
        "Everything in Professional PLUS:",
        "Custom multi-step workflow development",
        "Bespoke omnichannel campaigns triggered by conversation cues",
        "Advanced API integrations to any business system",
        "Monthly optimization and performance reporting",
        "1,500 minutes of talk time"
      ],
      accent: "#DB07b5"
    },
    {
      name: "Strategic Partnership",
      icon: Crown,
      price: 8500,
      priceLabel: "$8,500+ monthly",
      description: "For large organizations, franchises, and enterprise accounts",
      popular: false,
      roiPromise: "7-10x return through scalable automation and competitive advantage",
      features: [
        "Everything in Enterprise PLUS:",
        "White-label platform access",
        "Multi-agent deployment across departments",
        "Custom AI training on proprietary data",
        "24/7 priority support with dedicated account management",
        "5,000 minutes of talk time",
        "Quarterly strategic business reviews"
      ],
      accent: "#E501E4"
    }
  ];

  return (
    <div className="min-h-screen bg-[#02012d] text-white">
      <AgentMarketplaceModal isOpen={isAgentModalOpen} onClose={() => setIsAgentModalOpen(false)} />

      {/* Hero Section */}
      <section className="section-padding bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#DB07b5]/10 to-[#E501E4]/10 border border-[#DB07b5]/20 mb-8">
              <Crown className="w-4 h-4 text-[#DB07b5] mr-2" />
              <span className="text-sm font-medium text-white">Simple, Transparent Pricing</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Agentic Voice AI
              <span className="block">
                <span className="gradient-text relative inline-block">
                  Solutions
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
                {" "}Pricing
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Select the omnichannel lead generation, outreach, and nurturing solution that matches your business scale. Each tier delivers measurable ROI from day one.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 items-start">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`dark-card gradient-hover flex flex-col h-full ${
                  plan.popular
                    ? 'ring-2 ring-[#DB07b5] scale-105'
                    : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="gradient-bg text-white px-4 py-1 font-medium">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center`}
                       style={{ backgroundColor: `${plan.accent}20`, border: `1px solid ${plan.accent}30` }}>
                    <plan.icon className="w-8 h-8" style={{ color: plan.accent }} />
                  </div>

                  <CardTitle className="text-2xl font-bold text-white">{plan.name}</CardTitle>
                  <p className="text-gray-300 mt-2 text-sm leading-relaxed">{plan.description}</p>

                  {/* ROI Promise */}
                  <div className="mt-6 p-4 rounded-lg border border-white/20" style={{ backgroundColor: `${plan.accent}10` }}>
                    <div className="text-sm font-semibold text-gray-300 mb-2">ROI Promise:</div>
                    <div className="text-white font-bold text-sm leading-relaxed">{plan.roiPromise}</div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0 flex flex-col flex-grow">
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5 mr-3" style={{ color: plan.accent }} />
                        <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    onClick={() => setIsAgentModalOpen(true)}
                    className="w-full py-3 rounded-full font-medium mt-auto text-white gradient-hover"
                    style={{ backgroundColor: plan.accent }}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Agent Marketplace Section */}
      <section id="agent-marketplace" className="section-padding bg-[#02012d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Agent Marketplace: <span className="gradient-text">Purpose-Built AI Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              One-time investment with flexible deployment options—secure cloud or on-premises integration.
              Select specialized agents for your business challenges. We build it, install it into your operations,
              and it's yours. No monthly retainers, just optional support at agency rates when needed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* A-Team by MERGE AI */}
            <Card className="dark-card gradient-hover">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">A-Team by MERGE AI</h3>
                <h4 className="text-lg font-semibold text-white mb-3">Your Complete Digital Office Team, Working in Perfect Sync</h4>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Four specialized AI agents coordinate in real-time to handle every aspect of customer engagement from first contact to booking. While competitors deploy single agents that struggle with complex conversations, your A-Team operates like a trained office staff—each agent excelling in their role while seamlessly handing off context to teammates. With sub-600ms response times and enterprise-grade coordination, your customers experience the efficiency of AI with the sophistication of human team dynamics.
                </p>
                <div className="p-4 rounded-lg bg-[#00839C]/10 border border-[#00839C]/20 mb-6">
                  <div className="text-sm font-semibold text-[#00839C] mb-2">ROI Delivered:</div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Convert 40% more leads by responding within seconds 24/7 with contextually aware conversations that never drop the ball. Reduce labor costs by 60-75% while improving response quality and consistency. Eliminate scheduling friction, reduce no-shows by 35%, and free your human team to focus on delivering exceptional service instead of playing phone tag. Scale your customer engagement without scaling headcount.
                  </p>
                </div>
                <Button
                  onClick={() => setIsAgentModalOpen(true)}
                  className="w-full bg-[#00839C] hover:bg-[#00839C]/80 text-white py-3 rounded-full font-medium"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
            {/* RAG Agent */}
            <Card className="dark-card gradient-hover">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">RAG Agent</h3>

                <h4 className="text-lg font-semibold text-white mb-3">Instant Access to Your Business Intelligence</h4>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Stop wasting hours searching through documents, emails, and databases. Your RAG Agent instantly
                  retrieves and synthesizes information from your entire knowledge base, delivering precise answers in seconds.
                </p>

                <div className="p-4 rounded-lg bg-[#00839C]/10 border border-[#00839C]/20 mb-6">
                  <div className="text-sm font-semibold text-[#00839C] mb-2">ROI Delivered:</div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Reduce research time by 80%, accelerate decision-making, and eliminate knowledge silos that slow down
                    projects. Teams get instant access to critical information, boosting productivity and reducing costly delays.
                  </p>
                </div>

                <Button
                  onClick={() => setIsAgentModalOpen(true)}
                  className="w-full bg-[#00839C] hover:bg-[#00839C]/80 text-white py-3 rounded-full font-medium"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Lead Generation Agent */}
            <Card className="dark-card gradient-hover">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Lead Generation Agent</h3>

                <h4 className="text-lg font-semibold text-white mb-3">Fill Your Pipeline While You Sleep</h4>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Your Lead Gen Agent identifies, qualifies, and nurtures prospects automatically across multiple channels.
                  It finds decision-makers, scores leads, and delivers sales-ready contacts directly to your CRM.
                </p>

                <div className="p-4 rounded-lg bg-[#DB07b5]/10 border border-[#DB07b5]/20 mb-6">
                  <div className="text-sm font-semibold text-[#DB07b5] mb-2">ROI Delivered:</div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Generate 3-5x more qualified leads with zero manual effort. Reduce cost-per-lead by 60% while improving
                    lead quality. Sales teams focus on closing, not prospecting.
                  </p>
                </div>

                <Button
                  onClick={() => setIsAgentModalOpen(true)}
                  className="w-full bg-[#DB07b5] hover:bg-[#DB07b5]/80 text-white py-3 rounded-full font-medium"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Sales Agent */}
            <Card className="dark-card gradient-hover">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Sales Agent</h3>

                <h4 className="text-lg font-semibold text-white mb-3">Close More Deals Without Expanding Your Sales Team</h4>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Your AI Sales Agent handles personalized outreach, follows up automatically, qualifies leads through
                  intelligent conversations, and books meetings into your calendar. Never miss a follow-up or let hot leads go cold.
                </p>

                <div className="p-4 rounded-lg bg-[#E501E4]/10 border border-[#E501E4]/20 mb-6">
                  <div className="text-sm font-semibold text-[#E501E4] mb-2">ROI Delivered:</div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Increase conversion rates by 35%, book 3x more qualified meetings, and accelerate sales cycles by 50%.
                    Sales reps focus only on closing deals. Scale revenue without scaling headcount.
                  </p>
                </div>

                <Button
                  onClick={() => setIsAgentModalOpen(true)}
                  className="w-full bg-[#E501E4] hover:bg-[#E501E4]/80 text-white py-3 rounded-full font-medium"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Customer Support Agent */}
            <Card className="dark-card gradient-hover">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Customer Support Agent</h3>

                <h4 className="text-lg font-semibold text-white mb-3">24/7 Support Without the Overhead</h4>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Handle 80% of customer inquiries instantly with intelligent responses that feel human. Your Support Agent
                  resolves common issues, escalates complex problems, and maintains consistent service quality around the clock.
                </p>

                <div className="p-4 rounded-lg bg-[#00839C]/10 border border-[#00839C]/20 mb-6">
                  <div className="text-sm font-semibold text-[#00839C] mb-2">ROI Delivered:</div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Cut support costs by 70%, improve response times to under 30 seconds, and boost customer satisfaction scores.
                    Scale support without scaling headcount.
                  </p>
                </div>

                <Button
                  onClick={() => setIsAgentModalOpen(true)}
                  className="w-full bg-[#00839C] hover:bg-[#00839C]/80 text-white py-3 rounded-full font-medium"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Content Posting Agent */}
            <Card className="dark-card gradient-hover">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Content Posting Agent</h3>

                <h4 className="text-lg font-semibold text-white mb-3">Maximize Content Reach Across Every Channel</h4>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Automatically distributes your content across blogs, social platforms, email lists, and partner networks.
                  Optimizes timing, formatting, and messaging for each channel while tracking performance.
                </p>

                <div className="p-4 rounded-lg bg-[#DB07b5]/10 border border-[#DB07b5]/20 mb-6">
                  <div className="text-sm font-semibold text-[#DB07b5] mb-2">ROI Delivered:</div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Increase content reach by 400%, improve engagement rates, and eliminate manual posting tasks. Transform
                    single content pieces into multi-channel campaigns that drive measurable results.
                  </p>
                </div>

                <Button
                  onClick={() => setIsAgentModalOpen(true)}
                  className="w-full bg-[#DB07b5] hover:bg-[#DB07b5]/80 text-white py-3 rounded-full font-medium"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Deep Research Agent */}
            <Card className="dark-card gradient-hover">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Deep Research Agent</h3>

                <h4 className="text-lg font-semibold text-white mb-3">Competitive Intelligence in Minutes, Not Weeks</h4>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Your Research Agent compiles comprehensive market analysis, competitor insights, and industry trends from
                  hundreds of sources. Delivers structured reports with actionable recommendations.
                </p>

                <div className="p-4 rounded-lg bg-[#E501E4]/10 border border-[#E501E4]/20 mb-6">
                  <div className="text-sm font-semibold text-[#E501E4] mb-2">ROI Delivered:</div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Complete research projects 90% faster, uncover opportunities competitors miss, and make data-driven
                    decisions with confidence. Replace expensive consulting fees with intelligent automation.
                  </p>
                </div>

                <Button
                  onClick={() => setIsAgentModalOpen(true)}
                  className="w-full bg-[#E501E4] hover:bg-[#E501E4]/80 text-white py-3 rounded-full font-medium"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Social Media Posting Agent */}
            <Card className="dark-card gradient-hover">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Social Media Posting Agent</h3>

                <h4 className="text-lg font-semibold text-white mb-3">Maximize Your Content's Social Impact Automatically</h4>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Takes your existing content and strategically posts it across all social media platforms with optimal timing,
                  proper formatting, and platform-specific adaptations. Schedules posts, monitors engagement, and adjusts posting
                  frequency based on audience response patterns.
                </p>

                <div className="p-4 rounded-lg bg-[#00839C]/10 border border-[#00839C]/20 mb-6">
                  <div className="text-sm font-semibold text-[#00839C] mb-2">ROI Delivered:</div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Increase social engagement by 200%, ensure consistent brand presence across platforms, and free up 10+ hours
                    weekly. Transform your content library into a powerful lead generation engine through strategic, automated distribution.
                  </p>
                </div>

                <Button
                  onClick={() => setIsAgentModalOpen(true)}
                  className="w-full bg-[#00839C] hover:bg-[#00839C]/80 text-white py-3 rounded-full font-medium"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Custom Newsletter Agent */}
            <Card className="dark-card gradient-hover">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Custom Newsletter Agent</h3>

                <h4 className="text-lg font-semibold text-white mb-3">Nurture Leads Into Customers Automatically</h4>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Creates personalized newsletters based on subscriber behavior, interests, and buying stage. Segments audiences
                  intelligently and optimizes send times for maximum engagement and conversion.
                </p>

                <div className="p-4 rounded-lg bg-[#DB07b5]/10 border border-[#DB07b5]/20 mb-6">
                  <div className="text-sm font-semibold text-[#DB07b5] mb-2">ROI Delivered:</div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Increase email open rates by 150%, boost conversion rates by 200%, and automate lead nurturing that generates
                    consistent sales. Turn email lists into revenue streams.
                  </p>
                </div>

                <Button
                  onClick={() => setIsAgentModalOpen(true)}
                  className="w-full bg-[#DB07b5] hover:bg-[#DB07b5]/80 text-white py-3 rounded-full font-medium"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
                </div>
        </div>
      </section>
         
      {/* FAQ Section */}
      <section className="section-padding bg-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Pricing <span className="gradient-text">Questions?</span>
            </h2>
            <p className="text-xl text-gray-300">
              Common questions about our pricing and plans
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Can I change my plan at any time?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate the billing accordingly."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, including Visa, Mastercard, and American Express. For Enterprise plans, we also support invoicing and bank transfers."
              },
              {
                question: "What happens if I exceed my limits?",
                answer: "If you exceed your plan limits, you'll have the option to upgrade your plan or purchase additional capacity at a discounted rate."
              },
              {
                question: "Do you offer refunds?",
                answer: "We offer a 30-day money-back guarantee for all plans. You can cancel at any time without penalty."
              }
            ].map((faq, index) => (
              <Card key={index} className="dark-card gradient-hover">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-white mb-4">{faq.question}</h3>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#02012d]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join thousands of companies using MERGE AI to transform their revenue operations.
            Start capturing the leads you're missing today.
          </p>
          <Button onClick={() => setIsAgentModalOpen(true)} className="gradient-bg text-white px-12 py-4 rounded-full text-lg font-medium gradient-hover">
            Book a Demo
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}
