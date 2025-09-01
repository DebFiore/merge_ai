
import React, { useState } from "react";
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

export default function Pricing() {
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
      {/* Hero Section */}
      <section className="section-padding bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#DB07b5]/10 to-[#E501E4]/10 border border-[#DB07b5]/20 mb-8">
              <Crown className="w-4 h-4 text-[#DB07b5] mr-2" />
              <span className="text-sm font-medium text-white">Simple, Transparent Pricing</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              AI <span className="gradient-text relative inline-block">
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
              </span> Aligned for Growth
            </h1>

            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Choose the AI automation solution that matches your business scale and growth objectives. 
              Each tier is designed to deliver measurable ROI from day one.
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

                  <div className="mt-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-3xl font-bold text-white">
                        {plan.priceLabel || `$${plan.price.toLocaleString()}`}
                      </span>
                      {!plan.priceLabel && <span className="text-gray-400 ml-2">/month</span>}
                    </div>
                  </div>

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
                    data-form-trigger="true"
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

      {/* Value Proposition Section */}
      <section className="section-padding bg-[#02012d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              How MERGE AI <span className="gradient-text">Delivers ROI</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every tier is designed around measurable business outcomes, not just features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="dark-card text-center">
              <CardContent className="p-8">
                <Phone className="w-12 h-12 text-[#00839C] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Never Miss Revenue</h3>
                <p className="text-gray-300">Every inbound call, text, and email becomes a qualified opportunity</p>
              </CardContent>
            </Card>

            <Card className="dark-card text-center">
              <CardContent className="p-8">
                <MessageSquare className="w-12 h-12 text-[#DB07b5] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Context That Converts</h3>
                <p className="text-gray-300">AI agents remember every detail and build relationships that close deals</p>
              </CardContent>
            </Card>

            <Card className="dark-card text-center">
              <CardContent className="p-8">
                <TrendingUp className="w-12 h-12 text-[#E501E4] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Measurable Growth</h3>
                <p className="text-gray-300">Track ROI with detailed analytics and conversion metrics</p>
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
          <Button data-form-trigger="true" className="gradient-bg text-white px-12 py-4 rounded-full text-lg font-medium gradient-hover">
            Book a Demo
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}
