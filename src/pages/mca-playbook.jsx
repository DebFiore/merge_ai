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
  Calculator,
  Shield,
  Calendar,
  Settings,
  Bot,
  CreditCard
} from 'lucide-react';

export default function MCAPlaybookPage() {
  const playbookCoverUrl = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68856cb8a9268423a353c4f4/f0d179e7d_image_99f708a0-ceb8-43fa-bdf7-e79f3a788834.png";

  useEffect(() => {
    const scriptId = 'ghl-mca-playbook-form-embed-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://link.mergemedia.ai/js/form_embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const painPoints = [
    "40-50% of qualified applications abandon due to slow processing and poor communication",
    "Manual underwriting takes 3-5 days while competitors approve in hours",
    "You're spending 70% of overhead on administrative tasks that AI can automate",
    "Customer service inquiries overwhelm staff during peak application periods",
    "Compliance documentation and reporting consumes 20+ hours weekly"
  ];

  const competitorAdvantages = [
    "Processing applications 10x faster with automated underwriting workflows",
    "Converting 60% more leads through instant response and intelligent communication",
    "Operating with 50-70% lower administrative overhead",
    "Maintaining perfect compliance documentation automatically",
    "Generating 400-600% ROI within their first year of AI implementation"
  ];

  const phases = [
    {
      phase: "Phase 1: Intelligent Application Processing",
      days: "Days 1-30",
      icon: Bot,
      features: [
        "24/7 AI agents that pre-qualify leads and guide application completion",
        "Automated document collection and verification systems",
        "Intelligent customer communication throughout the approval process",
        "Instant response capability that captures applications before competitors can react"
      ]
    },
    {
      phase: "Phase 2: Automated Underwriting Integration",
      days: "Days 31-60",
      icon: Calculator,
      features: [
        "AI-powered bank statement analysis and cash flow assessment",
        "Automated risk scoring based on multiple financial data points",
        "Intelligent approval workflows with customizable criteria",
        "Digital contract generation and electronic signature processing"
      ]
    },
    {
      phase: "Phase 3: Operations Optimization Deployment",
      days: "Days 61-90",
      icon: TrendingUp,
      features: [
        "Comprehensive compliance monitoring and automated documentation",
        "AI-driven customer service for funding inquiries and account management",
        "Predictive analytics for portfolio performance and risk management",
        "Automated reporting systems for operational and regulatory requirements"
      ]
    }
  ];

  const roiScenarios = [
    {
      title: "Conservative Scenario",
      roi: "300-400% ROI",
      color: "text-[#00839C]",
      benefits: [
        "Application processing efficiency: $300,000-$500,000 annually",
        "Administrative automation savings: $100,000-$200,000 annually",
        "Net first-year benefit: $250,000-$550,000"
      ]
    },
    {
      title: "Realistic Scenario",
      roi: "450-550% ROI",
      color: "text-[#DB07b5]",
      benefits: [
        "All conservative benefits PLUS",
        "Conversion rate improvements: $200,000-$400,000 annually",
        "Compliance cost reduction: $75,000-$150,000 annually",
        "Net first-year benefit: $525,000-$1,100,000"
      ]
    },
    {
      title: "Optimistic Scenario",
      roi: "600%+ ROI",
      color: "text-[#E501E4]",
      benefits: [
        "All realistic benefits PLUS",
        "Market share gains from processing speed advantage: $250,000-$500,000 annually",
        "Net first-year benefit: $775,000-$1,600,000"
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
              <span className="text-red-300 font-bold">WARNING: Your MCA Competitors Are Already Using AI to Process Applications 10x Faster</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Download This FREE Implementation Playbook Before You Lose Another
              <span className="text-red-400 block">$1M in Revenue</span>
              <span className="text-gray-300 block text-2xl md:text-3xl mt-4">
                to AI-Powered Lending Operations
              </span>
            </h1>
            
            <div className="bg-white/10 rounded-2xl p-6 mb-8 max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-[#00839C] mb-4">
                "The AI-Powered Lending Blueprint: Operational Guide for Implementing Agentic AI in Merchant Cash Advance Workflows"
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mt-16 text-left">
            {/* Left Column: Playbook Image */}
            <div className="flex items-center justify-center">
              <img 
                src={playbookCoverUrl}
                alt="The AI-Powered Lending Blueprint"
                className="w-full max-w-md rounded-lg shadow-2xl"
              />
            </div>

            {/* Right Column: Form */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-4 sm:p-8">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Get Your FREE Implementation Playbook</h3>
              <p className="text-gray-300 text-center mb-6">Download now before your competitors gain an insurmountable advantage</p>
              <div className="h-[502px]">
                <iframe
                  src="https://link.mergemedia.ai/widget/form/w3KqzFuAZZJ3WzJG5LL4"
                  style={{width:'100%', height:'100%', border:'none', borderRadius:'3px'}}
                  id="inline-w3KqzFuAZZJ3WzJG5LL4"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="MCA Playbook"
                  data-height="502"
                  data-layout-iframe-id="inline-w3KqzFuAZZJ3WzJG5LL4"
                  data-form-id="w3KqzFuAZZJ3WzJG5LL4"
                  title="MCA Playbook"
                >
                </iframe>
              </div>
              <p className="text-xs text-gray-400 text-center mt-4">No spam. Instant download. Complete MCA AI transformation roadmap.</p>
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
                  Right now, your MCA business is bleeding revenue:
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
                <h4 className="text-lg font-bold text-white mb-3">The Proven 90-Day MCA AI Integration Framework</h4>
                <p className="text-gray-300 text-sm">Transforms lending businesses from manual processors to automated approval machines</p>
              </CardContent>
            </Card>

            <Card className="dark-card text-center">
              <CardContent className="p-6">
                <Settings className="w-12 h-12 text-[#DB07b5] mx-auto mb-4" />
                <h4 className="text-lg font-bold text-white mb-3">Complete Application Processing System</h4>
                <p className="text-gray-300 text-sm">Deploy AI document analysis, automated underwriting, and intelligent customer communication</p>
              </CardContent>
            </Card>

            <Card className="dark-card text-center">
              <CardContent className="p-6">
                <DollarSign className="w-12 h-12 text-[#E501E4] mx-auto mb-4" />
                <h4 className="text-lg font-bold text-white mb-3">Real-World ROI Calculations</h4>
                <p className="text-gray-300 text-sm">Recover $500,000-$1,200,000 annually from improved processing speed and operational efficiency</p>
              </CardContent>
            </Card>

            <Card className="dark-card text-center">
              <CardContent className="p-6">
                <Shield className="w-12 h-12 text-[#00839C] mx-auto mb-4" />
                <h4 className="text-lg font-bold text-white mb-3">Compliance Automation Guide</h4>
                <p className="text-gray-300 text-sm">Automatically manage documentation requirements and regulatory reporting</p>
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
              Revolutionary Lending Technology Made Simple
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
            What MCA Industry Leaders Are Saying:
          </h2>
          
          <div className="space-y-8">
            <Card className="dark-card">
              <CardContent className="p-8">
                <p className="text-xl text-gray-300 italic mb-4 leading-relaxed">
                  "AI implementation has transformed our lending operation from a manual bottleneck to an automated approval machine. Our processing time went from days to hours while our accuracy improved dramatically."
                </p>
              </CardContent>
            </Card>

            <Card className="dark-card">
              <CardContent className="p-8">
                <p className="text-xl text-gray-300 italic mb-4 leading-relaxed">
                  "The MCA industry's document-heavy processes make it perfect for AI automation. Companies that master AI-driven underwriting and customer communication will dominate the next decade of alternative lending."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-20 bg-[#02012d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              This Implementation Playbook Reveals:
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="dark-card">
              <CardContent className="p-8">
                <Bot className="w-12 h-12 text-[#00839C] mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4 text-center">Advanced Application Processing Systems</h3>
                <div className="space-y-3">
                  {[
                    "AI-powered document analysis that extracts key financial data automatically",
                    "Intelligent bank statement review that identifies cash flow patterns instantly",
                    "Automated verification workflows that reduce manual review time by 80%",
                    "Dynamic approval criteria that adapt to market conditions and portfolio performance"
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
                <Calculator className="w-12 h-12 text-[#DB07b5] mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4 text-center">Risk Assessment Automation</h3>
                <div className="space-y-3">
                  {[
                    "Machine learning models that analyze multiple financial indicators simultaneously",
                    "Predictive scoring that identifies optimal funding amounts and terms",
                    "Automated fraud detection that protects against application manipulation",
                    "Portfolio monitoring that tracks performance and identifies early warning signs"
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
                <h3 className="text-2xl font-bold text-white mb-4 text-center">Operational Excellence Framework</h3>
                <div className="space-y-3">
                  {[
                    "Compliance automation that maintains perfect documentation standards",
                    "Customer communication workflows that reduce inquiry volume by 60%",
                    "Scalable processing that handles volume spikes without additional staff",
                    "Performance analytics that optimize every aspect of the lending workflow"
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
      <section className="py-20 bg-white/5">
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
                  "Competitors process applications faster and capture more qualified deals",
                  "Your operational costs remain 50-70% higher than AI-enabled competitors",
                  "Manual processes create bottlenecks that frustrate customers and kill conversions",
                  "Compliance risks increase as documentation requirements become more complex"
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
                  Early adopters are creating processing advantages that traditional MCA companies may never overcome.
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
            Don't Let AI-Enabled MCA Companies Leave You Behind
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            The MCA businesses implementing AI today are creating application processing and operational advantages that traditional lenders cannot match.
          </p>
          <p className="text-lg text-gray-300 mb-12">
            Download your free implementation guide and begin your transformation to lending market leadership.
          </p>
          
          <div className="bg-white/10 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Why This Playbook Is Essential Right Now:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Proven MCA Implementation Strategy - Based on successful AI deployments across 100+ alternative lending businesses",
                "Industry-Specific Solutions - Designed specifically for MCA application workflows, underwriting processes, and compliance requirements",
                "90-Day Timeline - Complete transformation roadmap with measurable milestones and performance indicators",
                "Financial Guarantees - ROI projections based on documented results from MCA industry implementations"
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
            Transform your MCA business from manual processing to automated approval leadership.
          </p>
        </div>
      </section>
    </div>
  );
}