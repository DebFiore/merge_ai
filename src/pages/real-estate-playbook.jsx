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
  Home,
  BarChart3,
  Users
} from 'lucide-react';

export default function RealEstatePlaybookPage() {
  const playbookCoverUrl = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68856cb8a9268423a353c4f4/663f26e34_image_eeb22157-65cb-44cc-9109-12e632446434.png";

  useEffect(() => {
    const scriptId = 'ghl-real-estate-playbook-form-embed-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://link.mergemedia.ai/js/form_embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const painPoints = [
    "87% of leads never convert due to poor follow-up and delayed response times",
    "Average agent spends 40+ hours weekly on administrative tasks instead of selling",
    "You're missing 60% of after-hours inquiries while competitors respond instantly",
    "Property valuations and market analysis consume days of research time",
    "Client communication gaps cause 30% of transactions to fall through"
  ];

  const competitorAdvantages = [
    "Converting 3x more leads through automated nurturing and instant response",
    "Reducing administrative overhead by 70% with intelligent automation",
    "Capturing every inquiry 24/7 with AI-powered customer service",
    "Generating property valuations and market reports in minutes, not days",
    "Operating with 50-60% higher close rates through predictive client management"
  ];

  const phases = [
    {
      phase: "Phase 1: Intelligent Lead Management",
      days: "Days 1-30",
      icon: Bot,
      features: [
        "24/7 AI agents that qualify leads and schedule property showings instantly",
        "Automated lead nurturing sequences tailored to buyer and seller personas",
        "Intelligent property recommendation engines based on client preferences",
        "Instant response capability that captures leads within 5 minutes"
      ]
    },
    {
      phase: "Phase 2: Property Intelligence Integration",
      days: "Days 31-60",
      icon: BarChart3,
      features: [
        "AI-powered property valuation and comparative market analysis automation",
        "Automated investment analysis and ROI projections for clients",
        "Intelligent market trend analysis and pricing recommendations",
        "Digital marketing automation for property listings and client outreach"
      ]
    },
    {
      phase: "Phase 3: Transaction Optimization Deployment",
      days: "Days 61-90",
      icon: TrendingUp,
      features: [
        "Comprehensive transaction timeline management and milestone tracking",
        "AI-driven contract review and documentation automation",
        "Predictive closing date estimates and issue identification",
        "Automated client communication throughout the entire sales process"
      ]
    }
  ];

  const roiScenarios = [
    {
      title: "Conservative Scenario",
      roi: "300-400% ROI",
      color: "text-[#00839C]",
      benefits: [
        "Lead conversion improvements: $300,000-$500,000 annually",
        "Administrative time savings: $100,000-$200,000 annually",
        "Net first-year benefit: $250,000-$550,000"
      ]
    },
    {
      title: "Realistic Scenario",
      roi: "400-500% ROI",
      color: "text-[#DB07b5]",
      benefits: [
        "All conservative benefits PLUS",
        "Transaction close rate improvements: $200,000-$400,000 annually",
        "Market analysis efficiency gains: $75,000-$150,000 annually",
        "Net first-year benefit: $525,000-$1,100,000"
      ]
    },
    {
      title: "Optimistic Scenario",
      roi: "600%+ ROI",
      color: "text-[#E501E4]",
      benefits: [
        "All realistic benefits PLUS",
        "Market share gains from technology leadership: $250,000-$500,000 annually",
        "Net first-year benefit: $775,000-$1,600,000"
      ]
    }
  ];

  const whatYoullDiscover = [
    {
      icon: DollarSign,
      title: "Real-World ROI Calculations",
      description: "Demonstrating how real estate businesses recover $500,000-$1,200,000 annually from improved conversion rates and operational efficiency."
    },
    {
      icon: Zap,
      title: "The 'Instant Response Revolution'",
      description: "That captures and qualifies leads while competitors sleep."
    },
    {
      icon: FileText,
      title: "Property Intelligence Automation Guide",
      description: "For instantly generating market analyses, property valuations, and investment projections."
    },
    {
      icon: Users,
      title: "AI Client Relationship Systems",
      description: "That maintain engagement from initial contact through closing and beyond."
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
              <span className="text-red-300 font-bold">WARNING: Your Real Estate Competitors Are Already Using AI to Close 3x More Deals</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Download This FREE Implementation Playbook Before You Lose Another
              <span className="text-red-400 block">$750,000 in Revenue</span>
              <span className="text-gray-300 block text-2xl md:text-3xl mt-4">
                to AI-Powered Real Estate Operations
              </span>
            </h1>
            
            <div className="bg-white/10 rounded-2xl p-6 mb-8 max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-[#00839C] mb-4">
                "Real Estate AI Implementation Handbook: Building Intelligent Systems for Property Management and Sales Optimization"
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mt-16 text-left">
            {/* Left Column: Playbook Image */}
            <div className="flex items-center justify-center">
              <img 
                src={playbookCoverUrl}
                alt="Real Estate AI Implementation Handbook"
                className="w-full max-w-md rounded-lg shadow-2xl"
              />
            </div>

            {/* Right Column: Form */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-4 sm:p-8">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Get Your FREE Implementation Playbook</h3>
              <p className="text-gray-300 text-center mb-6">Download now before your competitors gain an insurmountable advantage</p>
              <div className="h-[502px]">
                <iframe
                  src="https://link.mergemedia.ai/widget/form/qLSC4PbTeuXeYSadeLhT"
                  style={{width:'100%', height:'100%', border:'none', borderRadius:'3px'}}
                  id="inline-qLSC4PbTeuXeYSadeLhT" 
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Real Estate Playbook "
                  data-height="502"
                  data-layout-iframe-id="inline-qLSC4PbTeuXeYSadeLhT"
                  data-form-id="qLSC4PbTeuXeYSadeLhT"
                  title="Real Estate Playbook "
                ></iframe>
              </div>
              <p className="text-xs text-gray-400 text-center mt-4">No spam. Instant download. Complete real estate AI transformation roadmap.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Are You Losing Deals Every Day While Competitors Pull Ahead?
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Your Problems */}
            <Card className="bg-red-900/20 border-red-500/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-red-300 mb-6 flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-3" />
                  Right now, your real estate business is bleeding revenue:
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
              Revolutionary Real Estate Technology Made Simple
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
            What Real Estate Industry Leaders Are Saying:
          </h2>
          
          <div className="space-y-8">
            <Card className="dark-card">
              <CardContent className="p-8">
                <p className="text-xl text-gray-300 italic mb-4 leading-relaxed">
                  "AI implementation has transformed our real estate operation from chasing leads to having qualified buyers and sellers come to us. Our conversion rates tripled while our administrative costs were cut in half."
                </p>
              </CardContent>
            </Card>

            <Card className="dark-card">
              <CardContent className="p-8">
                <p className="text-xl text-gray-300 italic mb-4 leading-relaxed">
                  "The real estate industry's relationship-heavy nature makes it perfect for AI enhancement. Agents that master AI-driven client communication and market analysis will dominate the next decade of property sales."
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
                  "Competitors capture more leads through instant response and superior follow-up",
                  "Your administrative costs remain 50-70% higher than AI-enabled competitors",
                  "Manual market analysis keeps you slower than automated competition",
                  "Client communication gaps cause more transactions to fall through"
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
                  Early adopters are creating conversion advantages that traditional real estate businesses may never overcome.
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
            Don't Let AI-Enabled Real Estate Companies Leave You Behind
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            The real estate businesses implementing AI today are creating lead conversion and client service advantages that traditional agents and brokers cannot match.
          </p>
          <p className="text-lg text-gray-300 mb-12">
            This proven playbook has already helped hundreds of real estate professionals achieve technology-enabled competitive positions. Your market dominance depends on the decisions you make today.
          </p>
          
          <div className="bg-white/10 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Why This Playbook Is Essential Right Now:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Proven Real Estate Implementation Strategy - Based on successful AI deployments across 250+ real estate businesses",
                "Industry-Specific Solutions - Designed specifically for real estate lead cycles, property management, and transaction workflows",
                "90-Day Timeline - Complete transformation roadmap with measurable milestones and performance indicators",
                "Financial Guarantees - ROI projections based on documented results from real estate industry implementations"
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
            Transform your real estate business from reactive lead chasing to proactive deal-closing leadership.
          </p>
        </div>
      </section>
    </div>
  );
}