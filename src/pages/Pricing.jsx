
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  X,
  ArrowRight,
  Zap,
  Crown,
  Building,
  Star,
  Sparkles
} from "lucide-react";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Silver",
      icon: Zap,
      price: 1500,
      description: "Ideal for Small to Mid-Size Businesses with Inbound & Outbound Call Handling",
      popular: false,
      features: [
        "Everything in Bronze PLUS",
        "4 AI Agents Total",
        "4 Phone Numbers Total",
        "50 Concurrent Calls Total",
        "2 Calendar Links Total",
        "Warm Transfer Capability",
        "Advanced Text Messaging",
        "Enhanced Email Integration",
        "Agentic AI SMS Messaging",
        "A2P Registration",
        "Calendar & Appointment Scheduling",
        "Advanced Workflow Automation",
        "White Glove Onboarding",
        "Multi-Campaign Support",
        "24/7 Technical Support"
      ]
    },
    {
      name: "Gold",
      icon: Star,
      price: 3000,
      description: "Great for Mid - Large Size Businesses with Robust Lead Campaigns",
      popular: true,
      features: [
        "Everything in Silver PLUS",
        "8 AI Agents Total",
        "8 Phone Numbers Total",
        "100 Concurrent Calls Total",
        "4 Calendar Links Total",
        "All Receptionists",
        "Advanced Chat Bot",
        "Robust Lead Generation",
        "Multi-Campaign Management",
        "Advanced Analytics",
        "Dedicated Account Support"
      ]
    },
    {
      name: "Platinum",
      icon: Building,
      price: 5000,
      description: "Enterprise Solution for Large Organizations Managing Complex Lead Campaigns",
      popular: false,
      features: [
        "Everything in Gold PLUS",
        "16 AI Agents Total",
        "16 Phone Numbers Total",
        "150 Concurrent Calls Total",
        "8 Calendar Links Total",
        "50 Hours Custom Development",
        "Dedicated Support Manager",
        "Custom API Integrations",
        "White Label Options",
        "Enterprise Analytics & Reporting",
        "Priority Implementation"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#02012d] text-white">
      {/* Hero Section */}
      <section className="section-padding bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#DB07b5]/10 to-[#E501E4]/10 border border-[#DB07b5]/20 mb-8">
              <Crown className="w-4 h-4 text-[#DB07b5] mr-2" />
              <span className="text-sm font-medium text-white">Simple, Transparent Pricing</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Choose Your <span className="gradient-text relative inline-block">
                Perfect
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
              </span> Plan
            </h1>

            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Whether you're a solopreneur or an enterprise powerhouse, MERGE AI offers flexible plans designed to match your needs and budget. Start small or go all-in; our pricing scales with your success, giving you the freedom to grow at your own pace.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-start">
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
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                    plan.popular
                      ? 'bg-gradient-to-r from-[#DB07b5] to-[#E501E4]'
                      : 'bg-white/10'
                  }`}>
                    <plan.icon className={`w-8 h-8 ${plan.popular ? 'text-white' : 'text-gray-300'}`} />
                  </div>

                  <CardTitle className="text-2xl font-bold text-white">{plan.name}</CardTitle>
                  <p className="text-gray-300 mt-2 text-sm leading-relaxed">{plan.description}</p>

                  <div className="mt-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-2xl font-bold text-white">
                        ${plan.price.toLocaleString()}
                      </span>
                      <span className="text-gray-400 ml-2">/month</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0 flex flex-col flex-grow">
                  <Button
                    data-form-trigger="true"
                    className="w-full py-3 rounded-full font-medium mb-8 gradient-bg text-white gradient-hover"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>

                  <div className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#00839C] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-[#02012d]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
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
      <section className="section-padding bg-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join thousands of companies using MERGE AI to transform their outreach efforts.
            Get started today.
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
