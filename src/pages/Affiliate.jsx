
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  DollarSign,
  TrendingUp,
  Users,
  Target,
  Globe,
  Clock,
  Zap,
  Star,
  CheckCircle,
  ArrowRight,
  Percent,
  Award
} from "lucide-react";

export default function Affiliate() {
  const benefits = [
    {
      icon: Zap,
      title: "Cutting-Edge AI Technology",
      description: "Partner with the most advanced AI automation platform. Thousands of calls, texts, appointments, and emails managed with zero manual intervention."
    },
    {
      icon: Percent,
      title: "15% Commission",
      description: "Generous and industry-leading commissions. Earn up to $750+ from a single referral's first-month payment."
    },
    {
      icon: Star,
      title: "Best-Converting Product",
      description: "Our AI agents close prospects at industry-leading rates. ROI is tremendous both for customers and your affiliate opportunities."
    },
    {
      icon: TrendingUp,
      title: "Growing Market Demand",
      description: "AI automation is the fastest-growing market in technology today. The opportunity could not be more favorable for you."
    },
    {
      icon: Globe,
      title: "Multiple Industries",
      description: "Real Estate, Insurance, Home Services, Medical, and many more. Every business needs what we offer."
    },
    {
      icon: Clock,
      title: "Done-For-You Resources",
      description: "Complete training courses, marketing support, and dedicated affiliate management."
    }
  ];

  const differentiators = [
    {
      icon: Users,
      title: "Human-Like AI Assistants",
      description: "Our AI agents engage in natural conversations that prospects can't distinguish from real humans."
    },
    {
      icon: Zap,
      title: "Operational Excellence",
      description: "Combining technology with operational excellence, consistently delivering personalized experiences at scale."
    },
    {
      icon: Award,
      title: "Voice Cloning Technology",
      description: "Customers can clone their own voice and have their AI speak just like them to prospects."
    },
    {
      icon: Target,
      title: "24/7 Operation",
      description: "Operations that integrate with existing business systems, never sleep, and scale infinitely."
    }
  ];

  return (
    <div className="min-h-screen bg-[#02012d] text-white">
      {/* Hero Section */}
      <section className="section-padding bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#DB07b5]/10 to-[#E501E4]/10 border border-[#DB07b5]/20 mb-8">
              <DollarSign className="w-4 h-4 text-[#DB07b5] mr-2" />
              <span className="text-sm font-medium text-white">Join the AI Revolution</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Become a MERGE AI
              <span className="gradient-text block relative inline-block">
                Affiliate
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
            </h1>
            
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Join the AI Revolution and Earn Commissions
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button data-form-trigger="true" className="gradient-bg text-white px-12 py-4 rounded-full text-lg font-medium gradient-hover">
                Earn 15% Commission
              </Button>
              <Button data-form-trigger="true" className="bg-[#00839C] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#00839C]/80">
                Join the Program Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="section-padding bg-[#02012d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Partner With <span className="gradient-text">MERGE AI?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Partner with the fastest-growing AI automation platform and earn substantial commissions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="dark-card gradient-hover">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#DB07b5] to-[#E501E4] rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes MERGE AI Different */}
      <section className="section-padding bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Makes MERGE AI the Fastest Growing
              <span className="gradient-text block">AI Automation Agency?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentiators.map((item, index) => (
              <Card key={index} className="dark-card gradient-hover text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-[#00839C]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-[#00839C]/30">
                    <item.icon className="w-8 h-8 text-[#00839C]" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Commission Structure */}
      <section className="section-padding bg-[#02012d]">
        <div className="max-w-4xl mx-auto px-6">
          <Card className="dark-card gradient-hover">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-[#DB07b5] to-[#E501E4] rounded-3xl flex items-center justify-center mx-auto mb-8">
                <Percent className="w-10 h-10 text-white" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                15% Commission Structure
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Earn a substantial one-time commission with our industry-leading rates. 
                With enterprise clients paying $5,000+ in their first month, your potential earnings are unlimited.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#00839C] mb-2">Professional</div>
                  <div className="text-gray-300">$300 commission</div>
                  <div className="text-sm text-gray-400">on first month's payment</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#DB07b5] mb-2">Enterprise</div>
                  <div className="text-gray-300">$525 commission</div>
                  <div className="text-sm text-gray-400">on first month's payment</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#E501E4] mb-2">Strategic Partnership</div>
                  <div className="text-gray-300">$1,275 commission</div>
                  <div className="text-sm text-gray-400">on first month's payment</div>
                </div>
              </div>
              
              <Button data-form-trigger="true" className="gradient-bg text-white px-12 py-4 rounded-full text-lg font-medium gradient-hover">
                Start Earning Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Support & Resources */}
      <section className="section-padding bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Complete <span className="gradient-text">Support & Resources</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We provide everything you need to succeed as a MERGE AI affiliate
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Comprehensive training materials",
              "Marketing assets and templates", 
              "Dedicated affiliate manager",
              "Real-time tracking dashboard",
              "Monthly webinars and updates",
              "Co-marketing opportunities",
              "Priority customer support",
              "Performance bonuses",
              "Early access to new features"
            ].map((resource, index) => (
              <div key={index} className="flex items-center p-4 bg-white/5 rounded-lg border border-white/10">
                <CheckCircle className="w-6 h-6 text-[#00839C] mr-4 flex-shrink-0" />
                <span className="text-gray-300 font-medium">{resource}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#02012d]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Earning?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join hundreds of successful affiliates earning commissions with MERGE AI. 
            Apply today and start building your passive income stream.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button data-form-trigger="true" className="gradient-bg text-white px-12 py-4 rounded-full text-lg font-medium gradient-hover">
              Apply Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-gray-400 text-sm">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-[#00839C]" />
              No startup costs
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-[#00839C]" />
              Fast Payouts
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-[#00839C]" />
              Full support included
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
