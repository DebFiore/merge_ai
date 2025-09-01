import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  Shield,
  Wrench,
  MessageSquare,
  Zap,
  Globe,
  Calendar,
  Phone,
  ArrowUpDown,
  Users,
  Workflow,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Cpu
} from "lucide-react";

export default function Technology() {
  const coreFeatures = [
    // Row 1
    {
      icon: Brain,
      title: "Universal Integration Platform",
      description: "Seamlessly connects with your existing business systems",
      benefits: ["Native integration capabilities with CRM systems, calendar platforms, communication tools, and business applications—ensuring your AI agents work within your existing workflow without disruption, data silos, or complicated technical setup."]
    },
    {
      icon: Shield,
      title: "Compliance-First Architecture",
      description: "Built-in protection for regulated industries and peace of mind",
      benefits: ["Enterprise-grade compliance framework with TCPA and HIPAA safeguards, automatic consent capture, DNC suppression, required disclosure scripting, and complete audit trails—protecting your business reputation while enabling aggressive growth."]
    },
    {
      icon: Wrench,
      title: "White Glove Implementation",
      description: "Get up and running without any technical complexity",
      benefits: ["Complete no-code setup and customization managed by our expert implementation team, including system integration, agent training, workflow optimization, and ongoing support—so you can focus entirely on growing your business while we handle all technical details."]
    },
    // Row 2
    {
      icon: MessageSquare,
      title: "Multi-Turn Dialogue Intelligence",
      description: "Conversations that build context, remember details, and close deals",
      benefits: ["Advanced conversation management that maintains context across multiple exchanges, understands customer references like \"that property\" and \"the previous quote,\" handles interruptions and topic changes naturally, and builds comprehensive customer profiles through extended dialogue—delivering natural conversations that convert prospects into customers."]
    },
    {
      icon: Zap,
      title: "Intelligent Real-Time Interaction",
      description: "AI that excels in intelligent engagement and anticipation",
      benefits: ["MERGE AI excels in intelligent engagement, analyzing context and anticipating customer needs with conversations that mirror human insight, ensuring every interaction feels personal and purposeful rather than scripted."]
    },
    {
      icon: Globe,
      title: "Multi-Channel Communication",
      description: "Connect globally with intelligent language capabilities",
      benefits: ["AI agents communicate fluently in 12 languages, including English, Spanish, French, Hindi, and more, breaking down language barriers for seamless customer interactions across diverse markets and enabling your business to serve global customers with localized intelligence."]
    },
    // Row 3
    {
      icon: Calendar,
      title: "Smart Appointment Booking",
      description: "Automated scheduling that eliminates double-bookings and no-shows",
      benefits: ["AI-powered scheduling works seamlessly across all major calendar platforms including Google, Outlook, and Apple Calendar. Intelligent conflict detection, automatic timezone handling, and smart reminder systems ensure every appointment is confirmed and customers show up ready to do business."]
    },
    {
      icon: Phone,
      title: "AI Receptionist",
      description: "Your always-on business representative that never misses a call",
      benefits: ["Automatically routes unanswered calls to intelligent AI instead of voicemail, works with any iOS or Android phone system, books appointments in real-time, answers business questions accurately, transfers calls to the right team members, and sends detailed call transcripts and recordings directly to your phone."]
    },
    {
      icon: ArrowUpDown,
      title: "Seamless Handoff Capability",
      description: "Effortless transition from AI to human expertise",
      benefits: ["Intelligent call transfer technology ensures conversations flow naturally from AI to human team members without losing context or momentum. Round-robin queues provide immediate redirection to available representatives, maintaining customer engagement while scaling your capacity."]
    },
    // Row 4
    {
      icon: TrendingUp,
      title: "High-Volume Lead Processing",
      description: "Scale without limits or missed opportunities",
      benefits: ["Advanced call distribution technology enables simultaneous processing of up to 1,800 calls in 30 seconds, ensuring no lead goes uncontacted and every opportunity is captured at the moment of peak interest, while maintaining conversation quality and personalization."]
    },
    {
      icon: Users,
      title: "Multi-Agent Coordination",
      description: "Teams of specialized AI agents working together seamlessly",
      benefits: ["Deploy coordinated agent teams where each AI is trained for specific business functions while sharing context and outcomes. From lead qualification through appointment setting to follow-up communications—creating comprehensive customer experiences that drive results."]
    },
    {
      icon: Workflow,
      title: "Workflow Automation Engine",
      description: "Complete business processes executed flawlessly from start to finish",
      benefits: ["Intelligent process automation that handles complex multi-step workflows without human intervention. From initial customer contact through qualification, scheduling, confirmation, and follow-up—ensuring consistent execution and eliminating manual tasks that slow down growth."]
    }
  ];

  const additionalFeatures = [
    "Scalable Intelligence That Grows With Your Business",
    "Future-Proof Innovation Platform",
    "Team Collaboration Tools",
    "API Access for Custom Integrations",
    "Advanced Automations for Complex Business Processes",
    "Custom Reporting Dashboards",
    "CRM Integrations with Popular Platforms",
    "Response Sentiment Analysis",
    "Omni-Channel Communications",
    "24/7 Customer Support",
    "In-house Dev Team for Custom Applications",
    "No Code Implementation"
  ];

  return (
    <div className="min-h-screen bg-[#02012d] text-white">
      {/* Hero Section */}
      <section className="section-padding bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#DB07b5]/10 to-[#E501E4]/10 border border-[#DB07b5]/20 mb-8">
              <Cpu className="w-4 h-4 text-[#DB07b5] mr-2" />
              <span className="text-sm font-medium text-white">Advanced AI Technology</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Powerful Technology for
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
              Discover the advanced AI capabilities that make MERGE AI the perfect solution 
              for your business communication needs.
            </p>
          </div>

          {/* Core Technology Grid - 4 Rows of 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
            {coreFeatures.map((feature, index) => (
              <Card key={index} className="dark-card gradient-hover h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#DB07b5] to-[#E501E4] rounded-2xl flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 leading-tight">{feature.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>

                  <div className="space-y-3">
                    {feature.benefits.map((benefit, idx) => (
                      <p key={idx} className="text-gray-300 leading-relaxed text-sm">{benefit}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Everything You Need Section */}
      <section className="section-padding bg-[#02012d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
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
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-4">
              Built for Business Outcomes, Not Just Automation
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Every technology component is designed around measurable business results: more booked appointments, 
              higher conversion rates, reduced operational costs, and increased revenue. We don't just automate processes—we optimize them for growth and profitability.
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
                <Sparkles className="w-10 h-10 text-white" />
              </div>

              <h3 className="text-3xl font-bold text-white mb-6 leading-tight">
                Scalable Intelligence That Grows With Your Business
              </h3>

              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Our technology foundation evolves continuously with emerging AI capabilities and changing business needs, 
                ensuring your investment continues delivering increasing value as technology advances and your business requirements grow.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium bg-[#DB07b5]/20 text-[#DB07b5] border-[#DB07b5]/30">
                  Future-Proof Platform
                </div>
                <div className="inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium bg-[#00839C]/20 text-[#00839C] border-[#00839C]/30">
                  Continuous Innovation
                </div>
                <div className="inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium bg-[#E501E4]/20 text-[#E501E4] border-[#E501E4]/30">
                  Growing ROI
                </div>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to Experience the Power of Outcome-Driven AI Technology?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            See how our advanced technology platform can transform your business communications and drive measurable results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button data-form-trigger="true" className="gradient-bg text-white px-8 py-3 rounded-full font-medium gradient-hover">
              Schedule Technology Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button data-form-trigger="true" variant="outline" className="px-8 py-3 rounded-full font-medium border-white/50 text-white bg-transparent hover:bg-white hover:text-[#02012d] transition-colors">
              Contact Our Team
            </Button>
            <Button data-form-trigger="true" variant="outline" className="px-8 py-3 rounded-full font-medium border-white/50 text-white bg-transparent hover:bg-white hover:text-[#02012d] transition-colors">
              View Integration Options
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}