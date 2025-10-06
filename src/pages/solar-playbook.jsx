import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  FileText,
  TrendingUp,
  DollarSign,
  Zap,
  CheckCircle,
  AlertTriangle,
  Sun,
  Shield,
  Calendar,
  Settings,
  Bot
} from 'lucide-react';

export default function SolarPlaybookPage() {
  const playbookCoverUrl = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68856cb8a9268423a353c4f4/f0fc6e491_solarplaybook.png";

  useEffect(() => {
    const scriptId = 'ghl-solar-playbook-form-embed-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://link.mergemedia.ai/js/form_embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const painPoints = [
    "60-70% of solar leads never convert due to poor follow-up and customer education gaps",
    "Average customer acquisition costs have risen 40% while competitors reduce theirs with AI",
    "You're spending 80+ hours per week on manual lead qualification and system design",
    "Complex financing options and incentive programs confuse customers and kill deals",
    "System performance monitoring requires constant manual oversight and customer complaints"
  ];

  const competitorAdvantages = [
    "Converting 3x more leads through automated education and nurturing sequences",
    "Reducing customer acquisition costs by 50% with intelligent lead qualification",
    "Optimizing energy production automatically to exceed customer expectations",
    "Operating with 60% lower administrative overhead through AI automation",
    "Generating 300-500% ROI within their first year of AI implementation"
  ];

  const phases = [
    {
      phase: "Phase 1: Intelligent Lead Management",
      days: "Days 1-30",
      icon: Bot,
      features: [
        "24/7 AI agents that qualify leads and provide instant solar education",
        "Automated consultation scheduling with personalized energy assessments",
        "Intelligent financing guidance that matches customers to optimal incentive programs",
        "Instant response capability that captures leads before competitors can react"
      ]
    },
    {
      phase: "Phase 2: System Design Automation",
      days: "Days 31-60",
      icon: Settings,
      features: [
        "AI-powered system sizing and configuration based on energy usage patterns",
        "Automated proposal generation with accurate ROI projections",
        "Predictive shading analysis and optimal panel placement recommendations",
        "Digital contract processing that reduces sales cycle time by 40%"
      ]
    },
    {
      phase: "Phase 3: Production Optimization Deployment",
      days: "Days 61-90",
      icon: TrendingUp,
      features: [
        "IoT monitoring integration for real-time system performance tracking",
        "AI pattern recognition that identifies efficiency opportunities and maintenance needs",
        "Automated customer alerts for performance updates and optimization recommendations",
        "Predictive maintenance scheduling that prevents costly system failures"
      ]
    }
  ];

  const roiScenarios = [
    {
      title: "Conservative Scenario",
      roi: "250-350% ROI",
      color: "text-[#00839C]",
      benefits: [
        "Lead conversion improvement: $200,000-$400,000 annually",
        "Administrative automation savings: $50,000-$80,000 annually",
        "Net first-year benefit: $150,000-$350,000"
      ]
    },
    {
      title: "Realistic Scenario",
      roi: "350-450% ROI",
      color: "text-[#DB07b5]",
      benefits: [
        "All conservative benefits PLUS",
        "Customer acquisition cost reduction: $100,000-$200,000 annually",
        "System optimization revenue: $75,000-$150,000 annually",
        "Net first-year benefit: $325,000-$700,000"
      ]
    },
    {
      title: "Optimistic Scenario",
      roi: "500%+ ROI",
      color: "text-[#E501E4]",
      benefits: [
        "All realistic benefits PLUS",
        "Market share gains from technology leadership: $150,000-$300,000 annually",
        "Net first-year benefit: $475,000-$1,000,000"
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
              <span className="text-red-300 font-bold">WARNING: Your Solar Competitors Are Already Using AI to Dominate Lead Generation</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Download This FREE Implementation Playbook Before You Lose Another
              <span className="text-red-400 block">$500,000 in Revenue</span>
              <span className="text-gray-300 block text-2xl md:text-3xl mt-4">
                to AI-Powered Solar Companies
              </span>
            </h1>
            
            <div className="bg-white/10 rounded-2xl p-6 mb-8 max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-[#00839C] mb-4">
                "Solar AI Acceleration Playbook: Strategic Implementation of Agentic AI for Enhanced Energy Production and Customer Engagement"
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mt-16 text-left">
            {/* Left Column: Playbook Image */}
            <div className="flex items-center justify-center">
              <img 
                src={playbookCoverUrl}
                alt="Solar AI Acceleration Playbook"
                className="w-full max-w-md rounded-lg shadow-2xl"
              />
            </div>

            {/* Right Column: Form */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-4 sm:p-8">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Get Your FREE Implementation Playbook</h3>
              <p className="text-gray-300 text-center mb-6">Download now before your competitors gain an insurmountable advantage</p>
              <div className="h-[502px]">
                <iframe
                    src="https://link.mergemedia.ai/widget/form/vdD9AavMiUCjG8dVx3WP"
                    style={{width:'100%', height:'100%', border:'none', borderRadius:'3px'}}
                    id="inline-vdD9AavMiUCjG8dVx3WP"
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="Solar Playbook "
                    data-height="502"
                    data-layout-iframe-id="inline-vdD9AavMiUCjG8dVx3WP"
                    data-form-id="vdD9AavMiUCjG8dVx3WP"
                    title="Solar Playbook "
                >
                </iframe>
              </div>
              <p className="text-xs text-gray-400 text-center mt-4">No spam. Instant download. Complete solar AI transformation roadmap.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Are You Losing Solar Deals Every Day While Competitors Pull Ahead?
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Your Problems */}
            <Card className="bg-red-900/20 border-red-500/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-red-300 mb-6 flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-3" />
                  Right now, your solar business is bleeding revenue:
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
                <h4 className="text-lg font-bold text-white mb-3">The Proven 90-Day Solar AI Integration Framework</h4>
                <p className="text-gray-300 text-sm">Transforms solar businesses from reactive installers to proactive energy optimization leaders</p>
              </CardContent>
            </Card>

            <Card className="dark-card text-center">
              <CardContent className="p-6">
                <Bot className="w-12 h-12 text-[#DB07b5] mx-auto mb-4" />
                <h4 className="text-lg font-bold text-white mb-3">Complete Lead Conversion System</h4>
                <p className="text-gray-300 text-sm">Deploy AI customer education, automated consultation, and intelligent financing guidance</p>
              </CardContent>
            </Card>

            <Card className="dark-card text-center">
              <CardContent className="p-6">
                <DollarSign className="w-12 h-12 text-[#E501E4] mx-auto mb-4" />
                <h4 className="text-lg font-bold text-white mb-3">Real-World ROI Calculations</h4>
                <p className="text-gray-300 text-sm">Recover $300,000-$800,000 annually from improved conversion rates and operational efficiency</p>
              </CardContent>
            </Card>

            <Card className="dark-card text-center">
              <CardContent className="p-6">
                <Zap className="w-12 h-12 text-[#00839C] mx-auto mb-4" />
                <h4 className="text-lg font-bold text-white mb-3">System Performance Optimization Guide</h4>
                <p className="text-gray-300 text-sm">Automatically monitor and maximize energy production across your entire customer base</p>
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
              Revolutionary Solar Technology Made Simple
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
            What Solar Industry Leaders Are Saying:
          </h2>
          
          <div className="space-y-8">
            <Card className="dark-card">
              <CardContent className="p-8">
                <p className="text-xl text-gray-300 italic mb-4 leading-relaxed">
                  "AI implementation has transformed our solar business from competing on price to leading on technology and customer experience. Our conversion rates have tripled while our operational costs have been cut in half."
                </p>
              </CardContent>
            </Card>

            <Card className="dark-card">
              <CardContent className="p-8">
                <p className="text-xl text-gray-300 italic mb-4 leading-relaxed">
                  "The solar industry's complexity makes it perfect for AI optimization. Businesses that master AI-driven customer education and system monitoring will dominate the next decade of solar growth."
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
                  "Competitors capture more high-quality leads through superior customer education",
                  "Your customer acquisition costs continue rising while AI-enabled businesses reduce theirs",
                  "Complex solar sales processes remain manual while competitors automate conversion",
                  "System monitoring stays reactive while competitors predict and prevent issues"
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
                  Early adopters are creating technology advantages that traditional solar companies may never overcome.
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
            Don't Let AI-Enabled Solar Companies Leave You Behind
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            The solar businesses implementing AI today are creating customer acquisition and operational advantages that traditional installers cannot match.
          </p>
          <p className="text-lg text-gray-300 mb-12">
            Download your free implementation guide and begin your transformation to solar market leadership.
          </p>
          
          <div className="bg-white/10 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Why This Playbook Is Essential Right Now:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Proven Solar Implementation Strategy - Based on successful AI deployments across 200+ solar businesses",
                "Industry-Specific Solutions - Designed specifically for solar sales cycles, customer education, and system optimization",
                "90-Day Timeline - Complete transformation roadmap with measurable milestones and performance indicators",
                "Financial Guarantees - ROI projections based on documented results from solar industry implementations"
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
            Transform your solar business from reactive installation to proactive energy optimization leadership.
          </p>
        </div>
      </section>
    </div>
  );
}