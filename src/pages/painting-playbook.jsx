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
  Calendar,
  Settings,
  Bot,
  Palette,
  BarChart3,
  Users,
  Clock
} from 'lucide-react';

export default function PaintingPlaybookPage() {
  const playbookCoverUrl = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68856cb8a9268423a353c4f4/9553580d2_image_null.png";

  useEffect(() => {
    const scriptId = 'ghl-painting-playbook-form-embed-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://link.mergemedia.ai/js/form_embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const painPoints = [
    "65% of painting estimates never convert due to slow response and poor follow-up",
    "Manual project scheduling creates 30% efficiency loss and customer complaints",
    "You're spending 50+ hours weekly on administrative tasks instead of painting",
    "Weather delays and project changes overwhelm manual communication systems",
    "Seasonal fluctuations make workforce planning nearly impossible"
  ];

  const competitorAdvantages = [
    "Converting 3x more estimates through automated follow-up and instant responses",
    "Optimizing crew scheduling automatically for maximum productivity",
    "Operating with 40-50% lower administrative overhead",
    "Providing real-time project updates that generate 5-star reviews"
  ];

  const phases = [
    {
      phase: "Phase 1: Intelligent Lead Management",
      days: "Days 1-30",
      icon: Bot,
      features: [
        "24/7 AI agents that qualify leads and schedule estimate appointments instantly",
        "Automated estimate follow-up sequences that convert more prospects",
        "Intelligent project timeline coordination based on weather and crew availability"
      ]
    },
    {
      phase: "Phase 2: Project Management Integration",
      days: "Days 31-60",
      icon: Settings,
      features: [
        "AI-powered crew scheduling that optimizes productivity and reduces travel time",
        "Automated customer communication with real-time project updates",
        "Smart weather monitoring that adjusts schedules proactively"
      ]
    },
    {
      phase: "Phase 3: Operations Optimization",
      days: "Days 61-90",
      icon: TrendingUp,
      features: [
        "Predictive project planning that accounts for seasonal demand fluctuations",
        "Automated material ordering and inventory management",
        "Performance analytics that optimize pricing and crew efficiency"
      ]
    }
  ];

  const roiScenarios = [
    {
      title: "Conservative Scenario",
      roi: "200-300% ROI",
      color: "text-[#00839C]",
      benefits: [
        "Estimate conversion improvements: $150,000-$300,000 annually",
        "Administrative time savings: $50,000-$100,000 annually",
        "Net first-year benefit: $125,000-$275,000"
      ]
    },
    {
      title: "Realistic Scenario",
      roi: "300-400% ROI",
      color: "text-[#DB07b5]",
      benefits: [
        "All conservative benefits PLUS",
        "Crew efficiency improvements: $100,000-$200,000 annually",
        "Net first-year benefit: $225,000-$475,000"
      ]
    },
    {
      title: "Optimistic Scenario",
      roi: "400%+ ROI",
      color: "text-[#E501E4]",
      benefits: [
        "All realistic benefits PLUS",
        "Market share gains from technology leadership: $150,000-$250,000 annually",
        "Net first-year benefit: $375,000-$725,000"
      ]
    }
  ];

  const whatYoullDiscover = [
    {
      icon: DollarSign,
      title: "Real-World ROI Calculations",
      description: "Demonstrating how painting companies recover $250,000-$600,000 annually from improved conversion rates and operational efficiency."
    },
    {
      icon: Zap,
      title: "The 'Instant Estimate Revolution'",
      description: "That provides quotes in minutes while competitors take days."
    },
    {
      icon: FileText,
      title: "Smart Project Management Integration",
      description: "That automates crew scheduling, weather monitoring, and customer updates."
    },
    {
      icon: Palette,
      title: "The Proven 90-Day Painter AI Integration Framework",
      description: "That transforms painting businesses from reactive estimators to proactive project management leaders."
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
              <span className="text-red-300 font-bold">WARNING: Your Painting Competitors Are Already Using AI to Win 60% More Bids</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Download This FREE Implementation Playbook Before You Lose Another
              <span className="text-red-400 block">$400,000 in Revenue</span>
              <span className="text-gray-300 block text-2xl md:text-3xl mt-4">
                to AI-Powered Painting Operations
              </span>
            </h1>
            
            <div className="bg-white/10 rounded-2xl p-6 mb-8 max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-[#00839C] mb-4">
                "The Painter's AI Toolkit: Implementation Guide for Leveraging Agentic AI in Painting Business Operations and Project Management"
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mt-16 text-left">
            {/* Left Column: Playbook Image */}
            <div className="flex items-center justify-center">
              <img 
                src={playbookCoverUrl}
                alt="The Painter's AI Toolkit"
                className="w-full max-w-md rounded-lg shadow-2xl"
              />
            </div>

            {/* Right Column: Form */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-4 sm:p-8">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Get Your FREE Implementation Playbook</h3>
              <p className="text-gray-300 text-center mb-6">Download now before your competitors gain an insurmountable advantage</p>
              <div className="h-[502px]">
                <iframe
                  src="https://link.mergemedia.ai/widget/form/xBQ7ClEzBlzTFSbnjsRz"
                  style={{width:'100%', height:'100%', border:'none', borderRadius:'3px'}}
                  id="inline-xBQ7ClEzBlzTFSbnjsRz" 
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Painting Playbook "
                  data-height="502"
                  data-layout-iframe-id="inline-xBQ7ClEzBlzTFSbnjsRz"
                  data-form-id="xBQ7ClEzBlzTFSbnjsRz"
                  title="Painting Playbook "
                ></iframe>
              </div>
              <p className="text-xs text-gray-400 text-center mt-4">No spam. Instant download. Complete painting AI transformation roadmap.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Are You Losing Jobs Every Day While Competitors Pull Ahead?
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Your Problems */}
            <Card className="bg-red-900/20 border-red-500/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-red-300 mb-6 flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-3" />
                  Right now, your painting business is bleeding revenue:
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
            {whatYoullDiscover.map((item, index) => (
              <Card key={index} className="dark-card text-center">
                <CardContent className="p-6">
                  <item.icon className="w-12 h-12 text-[#DB07b5] mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-white mb-3">{item.title}</h4>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 90-Day Implementation Phases */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary Painting Technology Made Simple
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
                      <div className="space-y-3">
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

      {/* Advanced Features Section */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              This Implementation Playbook Reveals:
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="dark-card">
              <CardContent className="p-8">
                <BarChart3 className="w-12 h-12 text-[#00839C] mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4 text-center">Advanced Estimating Systems</h3>
                <div className="space-y-3">
                  {[
                    "AI-powered square footage calculation and material estimation",
                    "Automated pricing optimization based on market conditions and competition",
                    "Intelligent bid follow-up that converts prospects while competitors delay"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-[#00839C] mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="dark-card">
              <CardContent className="p-8">
                <Users className="w-12 h-12 text-[#DB07b5] mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4 text-center">Project Management Excellence</h3>
                <div className="space-y-3">
                  {[
                    "Smart crew scheduling that maximizes productivity and minimizes travel",
                    "Weather-aware planning that adjusts timelines automatically",
                    "Real-time customer communication that builds trust and generates referrals"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-[#DB07b5] mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="dark-card">
              <CardContent className="p-8">
                <TrendingUp className="w-12 h-12 text-[#E501E4] mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4 text-center">Operational Optimization</h3>
                <div className="space-y-3">
                  {[
                    "Seasonal demand forecasting that optimizes workforce planning",
                    "Automated material ordering that prevents project delays",
                    "Performance analytics that identify profitable jobs and optimal pricing"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-[#E501E4] mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
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
                  "Competitors win more bids through faster response and superior follow-up",
                  "Your administrative costs remain 40-50% higher than AI-enabled competitors",
                  "Manual scheduling creates inefficiencies that reduce profitability",
                  "Customer communication gaps damage your reputation and referral potential"
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
                  The painting businesses implementing AI today are creating bid conversion and operational advantages that traditional painters cannot match.
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
            Don't Let AI-Enabled Painting Companies Leave You Behind
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            The painting businesses implementing AI today are creating bid conversion and operational advantages that traditional painters cannot match.
          </p>
          <p className="text-lg text-gray-300 mb-12">
            Download your free implementation guide and begin your transformation to painting market leadership.
          </p>
          
          <div className="bg-white/10 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Why This Playbook Is Essential Right Now:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Proven Painting Implementation Strategy - Based on successful AI deployments across 200+ painting businesses",
                "Industry-Specific Solutions - Designed specifically for painting workflows, seasonal challenges, and project management",
                "90-Day Timeline - Complete transformation roadmap with measurable milestones",
                "Financial Guarantees - ROI projections based on documented painting industry results"
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
            Transform your painting business from reactive estimating to proactive project management leadership.
          </p>
        </div>
      </section>
    </div>
  );
}