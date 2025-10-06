import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  FileText,
  TrendingUp,
  DollarSign,
  Zap,
  Clock,
  CheckCircle,
  AlertTriangle,
  Wrench,
  Phone,
  Shield,
  Calendar
} from 'lucide-react';

export default function PlumbingPlaybookPage() {
  const playbookCoverUrl = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68856cb8a9268423a353c4f4/6237d3eac_plumbingplaybookbookcover.png";

  useEffect(() => {
    const scriptId = 'ghl-plumbing-playbook-form-embed-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://link.mergemedia.ai/js/form_embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const painPoints = [
    "25-35% of your emergency calls go unanswered (that's $200,000-$500,000 in lost revenue annually)",
    "Emergency calls happen at the worst times while competitors respond instantly 24/7",
    "You're spending 50-70% more on labor costs than AI-enabled businesses",
    "Your diagnostic accuracy depends on which technician shows up",
    "Water damage liability claims cost you thousands in preventable situations"
  ];

  const competitorAdvantages = [
    "Predicting pipe failures before they happen",
    "Answering 100% of calls instantly with perfect consistency",
    "Operating with 40-60% lower administrative overhead",
    "Generating 250-400% ROI within their first year"
  ];

  const phases = [
    {
      phase: "Phase 1: Intelligent Customer Communication",
      days: "Days 1-30",
      icon: Phone,
      features: [
        "24/7 AI phone agents that handle emergency calls and routine inquiries",
        "Intelligent triage that identifies true emergencies from simple fixes",
        "Automated scheduling that fills your calendar with optimal routing",
        "Instant response capability that wins 78% of competitive situations"
      ]
    },
    {
      phase: "Phase 2: Smart Diagnostics Integration",
      days: "Days 31-60",
      icon: Zap,
      features: [
        "AI-powered troubleshooting guides for complex plumbing systems",
        "Computer vision pipe inspection that identifies problems 3x faster",
        "Predictive parts ordering that improves first-time fix rates",
        "Digital documentation that eliminates guesswork and callbacks"
      ]
    },
    {
      phase: "Phase 3: Predictive Maintenance Deployment",
      days: "Days 61-90",
      icon: Shield,
      features: [
        "IoT sensor installation for continuous pipe monitoring",
        "AI pattern recognition that predicts failures months in advance",
        "Automated customer alerts for proactive maintenance scheduling",
        "Recurring revenue generation through predictive service contracts"
      ]
    }
  ];

  const roiScenarios = [
    {
      title: "Conservative Scenario",
      roi: "200-300% ROI",
      color: "text-[#00839C]",
      benefits: [
        "Missed call revenue recovery: $150,000-$300,000 annually",
        "Administrative cost savings: $40,000-$70,000 annually",
        "Net first-year benefit: $100,000-$250,000"
      ]
    },
    {
      title: "Realistic Scenario",
      roi: "300-400% ROI",
      color: "text-[#DB07b5]",
      benefits: [
        "All conservative benefits PLUS",
        "Predictive maintenance revenue: $80,000-$150,000 annually",
        "Emergency prevention savings: $50,000-$100,000 annually",
        "Net first-year benefit: $230,000-$500,000"
      ]
    },
    {
      title: "Optimistic Scenario",
      roi: "400%+ ROI",
      color: "text-[#E501E4]",
      benefits: [
        "All realistic benefits PLUS",
        "Market share gains from technology leadership: $100,000-$200,000 annually",
        "Net first-year benefit: $330,000-$700,000"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#02012d] text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-[#00839C]/20 to-[#02012d]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-red-600/20 border border-red-500/30 mb-8">
              <AlertTriangle className="w-5 h-5 text-red-400 mr-2" />
              <span className="text-red-300 font-bold">WARNING: Your Plumbing Competitors Are Already Using AI to Steal Your Customers</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Download This FREE Implementation Playbook Before You Lose Another
              <span className="text-red-400 block">$300,000 in Revenue</span>
              <span className="text-gray-300 block text-2xl md:text-3xl mt-4">
                to AI-Powered Competitors
              </span>
            </h1>
            
            <div className="bg-white/10 rounded-2xl p-6 mb-8 max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-[#00839C] mb-4">
                "From Wrench to AI: A Comprehensive Implementation Guide for Integrating Agentic AI into Plumbing Business Operations"
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mt-16 text-left">
            {/* Left Column: Playbook Image */}
            <div className="flex items-center justify-center">
              <img 
                src={playbookCoverUrl}
                alt="From Wrench to AI Playbook"
                className="w-full max-w-md rounded-lg shadow-2xl"
              />
            </div>

            {/* Right Column: Form */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-4 sm:p-8">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Get Your FREE Implementation Playbook</h3>
              <p className="text-gray-300 text-center mb-6">Download now before your competitors gain an insurmountable advantage</p>
              <div className="h-[502px]">
                <iframe
                  src="https://link.mergemedia.ai/widget/form/ZjRzdT33i8gD0PVoPgwR"
                  style={{width:'100%', height:'100%', border:'none', borderRadius:'3px'}}
                  id="inline-ZjRzdT33i8gD0PVoPgwR" 
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Plumbing Playbook "
                  data-height="502"
                  data-layout-iframe-id="inline-ZjRzdT33i8gD0PVoPgwR"
                  data-form-id="ZjRzdT33i8gD0PVoPgwR"
                  title="Plumbing Playbook "
                ></iframe>
              </div>
              <p className="text-xs text-gray-400 text-center mt-4">No spam. Instant download. Complete implementation roadmap.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Are You Losing Money Every Day While Competitors Pull Ahead?
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Your Problems */}
            <Card className="bg-red-900/20 border-red-500/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-red-300 mb-6 flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-3" />
                  Right now, your plumbing business is bleeding revenue:
                </h3>
                <div className="space-y-4">
                  {painPoints.map((point, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-red-400 mr-3">•</span>
                      <span className="text-gray-300">{point}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Competitor Advantages */}
            <Card className="bg-green-900/20 border-green-500/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-green-300 mb-6 flex items-center">
                  <TrendingUp className="w-6 h-6 mr-3" />
                  Meanwhile, early AI adopters in your market are:
                </h3>
                <div className="space-y-4">
                  {competitorAdvantages.map((advantage, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{advantage}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What You'll Discover Section */}
      <section className="py-20 bg-[#02012d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Inside This FREE Implementation Playbook, You'll Discover:
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="dark-card text-center">
              <CardContent className="p-6">
                <Calendar className="w-12 h-12 text-[#00839C] mx-auto mb-4" />
                <h4 className="text-lg font-bold text-white mb-3">The Proven 90-Day AI Integration Framework</h4>
                <p className="text-gray-300 text-sm">Transforms plumbing businesses from reactive service providers to predictive maintenance leaders</p>
              </CardContent>
            </Card>

            <Card className="dark-card text-center">
              <CardContent className="p-6">
                <Wrench className="w-12 h-12 text-[#DB07b5] mx-auto mb-4" />
                <h4 className="text-lg font-bold text-white mb-3">Step-by-Step Implementation Roadmap</h4>
                <p className="text-gray-300 text-sm">Shows exactly how to deploy AI customer service, predictive diagnostics, and smart pipe monitoring</p>
              </CardContent>
            </Card>

            <Card className="dark-card text-center">
              <CardContent className="p-6">
                <DollarSign className="w-12 h-12 text-[#E501E4] mx-auto mb-4" />
                <h4 className="text-lg font-bold text-white mb-3">Real-World ROI Calculations</h4>
                <p className="text-gray-300 text-sm">Demonstrating how plumbing businesses recover $200,000-$600,000 annually from previously missed opportunities</p>
              </CardContent>
            </Card>

            <Card className="dark-card text-center">
              <CardContent className="p-6">
                <Zap className="w-12 h-12 text-[#00839C] mx-auto mb-4" />
                <h4 className="text-lg font-bold text-white mb-3">Revolutionary Technology Made Simple</h4>
                <p className="text-gray-300 text-sm">Complete technology integration guide for seamlessly connecting AI systems with your existing dispatch and billing software</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 90-Day Implementation Phases */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary Plumbing Technology Made Simple
            </h2>
            <p className="text-xl text-gray-300">90-Day transformation roadmap with measurable milestones</p>
          </div>

          <div className="space-y-12">
            {phases.map((phase, index) => (
              <Card key={index} className="dark-card">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#DB07b5] to-[#E501E4] rounded-2xl flex items-center justify-center mb-4">
                        <phase.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <h3 className="text-2xl font-bold text-white">{phase.phase}</h3>
                        <Badge className="gradient-bg text-white px-4 py-1 w-fit">{phase.days}</Badge>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {phase.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-[#00839C] mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Scenarios */}
      <section className="py-20 bg-[#02012d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Financial Impact Is Staggering
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roiScenarios.map((scenario, index) => (
              <Card key={index} className="dark-card">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">{scenario.title}</h3>
                  <div className={`text-3xl font-bold mb-6 ${scenario.color}`}>{scenario.roi}</div>
                  <div className="space-y-3">
                    {scenario.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start text-left">
                        <CheckCircle className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${scenario.color}`} />
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Testimonials */}
      <section className="py-20 bg-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
            What Plumbing Industry Leaders Are Saying:
          </h2>
          
          <div className="space-y-8">
            <Card className="dark-card">
              <CardContent className="p-8">
                <p className="text-xl text-gray-300 italic mb-4 leading-relaxed">
                  "The transition from reactive to predictive plumbing isn't just operational improvement—it's a fundamental business transformation that creates sustainable competitive advantages."
                </p>
              </CardContent>
            </Card>

            <Card className="dark-card">
              <CardContent className="p-8">
                <p className="text-xl text-gray-300 italic mb-4 leading-relaxed">
                  "AI-powered plumbing businesses report dramatic improvements in customer satisfaction, operational efficiency, and financial performance while traditional competitors struggle with unpredictable emergency volume."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cost of Waiting */}
      <section className="py-20 bg-[#02012d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Cost of Waiting Is Devastating
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-red-300 mb-6">Every month you delay AI implementation:</h3>
              <div className="space-y-4">
                {[
                  "Competitors capture more emergency calls through instant response",
                  "Your administrative costs remain 50-70% higher than necessary",
                  "Revenue opportunities become harder to recover as AI adoption spreads",
                  "The competitive technology gap widens and becomes insurmountable"
                ].map((point, index) => (
                  <div key={index} className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="bg-red-900/20 border-red-500/30">
              <CardContent className="p-8 text-center">
                <AlertTriangle className="w-16 h-16 text-red-400 mx-auto mb-6" />
                <h4 className="text-2xl font-bold text-red-300 mb-4">
                  Early adopters are creating service advantages that traditional plumbers may never overcome.
                </h4>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-b from-[#00839C]/20 to-[#02012d]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Don't Let Technology-Enabled Competitors Leave You Behind
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            The plumbing businesses implementing AI today are creating operational advantages that reactive competitors cannot match.
          </p>
          <p className="text-lg text-gray-300 mb-12">
            This proven playbook has already helped hundreds of plumbing businesses achieve technology-enabled market positions. Your competitive advantage depends on the decisions you make today.
          </p>
          
          <div className="bg-white/10 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Why This Playbook Is Essential Right Now:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Proven Implementation Strategy - Based on successful AI deployments across 150+ plumbing businesses",
                "Plumbing-Specific Solutions - Designed specifically for pipe systems, emergency response, and diagnostic challenges",
                "90-Day Timeline - Complete transformation roadmap with measurable milestones",
                "Financial Guarantees - ROI projections based on documented, verifiable results"
              ].map((feature, index) => (
                <div key={index} className="flex items-start text-left">
                  <CheckCircle className="w-5 h-5 text-[#00839C] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <Button 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            className="gradient-bg text-white px-12 py-4 rounded-full text-lg font-medium gradient-hover"
          >
            GET YOUR FREE COPY NOW
          </Button>
          
          <p className="text-lg font-bold text-[#00839C] mt-6">
            Transform your plumbing business from reactive service to predictive maintenance leadership.
          </p>
        </div>
      </section>
    </div>
  );
}