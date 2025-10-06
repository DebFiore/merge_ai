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
  HeartHandshake,
  MessageSquare,
  Users
} from 'lucide-react';

export default function CustomerSupportPlaybookPage() {
  const playbookCoverUrl = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68856cb8a9268423a353c4f4/840a9c55c_image_6599f9a8-6802-4d52-8c14-139eb3e29c72.png";

  useEffect(() => {
    const scriptId = 'ghl-customer-support-playbook-form-embed-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://link.mergemedia.ai/js/form_embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const painPoints = [
    "73% of customers expect immediate response, but your average reply time is 12+ hours",
    "Support agents spend 60% of their time on repetitive, low-value tickets",
    "Customer satisfaction scores drop 40% when response times exceed 2 hours",
    "You're paying $75,000+ annually per support agent while competitors reduce costs by 50%",
    "After-hours inquiries go unanswered while AI-enabled competitors provide 24/7 service"
  ];

  const competitorAdvantages = [
    "Resolving 80% of tickets instantly with automated intelligent responses",
    "Achieving 95% customer satisfaction with consistent, accurate support",
    "Operating with 50-70% lower support costs through AI automation",
    "Providing 24/7 coverage without additional staffing costs",
    "Generating 300-500% ROI within their first year of AI implementation"
  ];

  const phases = [
    {
      phase: "Phase 1: Intelligent Ticket Management",
      days: "Days 1-30",
      icon: Bot,
      features: [
        "24/7 AI agents that triage and resolve common customer inquiries instantly",
        "Automated ticket routing based on issue complexity and agent expertise",
        "Intelligent response suggestions that help agents resolve issues faster",
        "Real-time sentiment analysis that prioritizes frustrated customers"
      ]
    },
    {
      phase: "Phase 2: Agent Workflow Integration",
      days: "Days 31-60",
      icon: Users,
      features: [
        "AI-powered knowledge base search that surfaces relevant solutions instantly",
        "Automated ticket summarization and context gathering for agent efficiency",
        "Intelligent escalation triggers that identify when human intervention is needed",
        "Performance analytics that optimize response quality and resolution time"
      ]
    },
    {
      phase: "Phase 3: Proactive Support Deployment",
      days: "Days 61-90",
      icon: TrendingUp,
      features: [
        "Predictive issue identification that prevents problems before they occur",
        "Automated customer outreach for proactive support and onboarding",
        "AI-driven customer health scoring and intervention strategies",
        "Comprehensive reporting systems that measure and optimize customer experience"
      ]
    }
  ];

  const roiScenarios = [
    {
      title: "Conservative Scenario",
      roi: "250-350% ROI",
      color: "text-[#00839C]",
      benefits: [
        "Agent productivity improvements: $200,000-$350,000 annually",
        "Operational cost reduction: $100,000-$150,000 annually",
        "Net first-year benefit: $200,000-$400,000"
      ]
    },
    {
      title: "Realistic Scenario",
      roi: "350-450% ROI",
      color: "text-[#DB07b5]",
      benefits: [
        "All conservative benefits PLUS",
        "Customer retention improvements: $150,000-$300,000 annually",
        "Reduced escalation costs: $50,000-$100,000 annually",
        "Net first-year benefit: $400,000-$800,000"
      ]
    },
    {
      title: "Optimistic Scenario",
      roi: "500%+ ROI",
      color: "text-[#E501E4]",
      benefits: [
        "All realistic benefits PLUS",
        "Revenue growth from superior customer experience: $200,000-$400,000 annually",
        "Net first-year benefit: $600,000-$1,200,000"
      ]
    }
  ];

  const whatYoullDiscover = [
    {
      icon: DollarSign,
      title: "Real-World ROI Calculations",
      description: "Demonstrating how support teams recover $300,000-$800,000 annually from improved efficiency and customer retention."
    },
    {
      icon: Zap,
      title: "The 'Instant Resolution Revolution'",
      description: "That solves customer issues in seconds while competitors struggle with manual processes."
    },
    {
      icon: FileText,
      title: "Agent Workflow Enhancement Guide",
      description: "For seamlessly integrating AI assistance into existing support processes."
    },
    {
      icon: HeartHandshake,
      title: "AI Customer Success Systems",
      description: "That predict and prevent issues before customers experience problems."
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
              <span className="text-red-300 font-bold">WARNING: Your Customer Support Competitors Are Already Using AI to Resolve Tickets 5x Faster</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Download This FREE Implementation Playbook Before You Lose Another
              <span className="text-red-400 block">$500,000 in Revenue</span>
              <span className="text-gray-300 block text-2xl md:text-3xl mt-4">
                to AI-Powered Support Operations
              </span>
            </h1>
            
            <div className="bg-white/10 rounded-2xl p-6 mb-8 max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-[#00839C] mb-4">
                "Customer Experience AI Playbook: Practical Guide for Integrating Agentic AI into Support Operations and Agent Workflows"
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mt-16 text-left">
            {/* Left Column: Playbook Image */}
            <div className="flex items-center justify-center">
              <img 
                src={playbookCoverUrl}
                alt="Customer Experience AI Playbook"
                className="w-full max-w-md rounded-lg shadow-2xl"
              />
            </div>

            {/* Right Column: Form */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-4 sm:p-8">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Get Your FREE Implementation Playbook</h3>
              <p className="text-gray-300 text-center mb-6">Download now before your competitors gain an insurmountable advantage</p>
              <div className="h-[502px]">
                <iframe
                  src="https://link.mergemedia.ai/widget/form/hEbXPZJij97iCzjaocR3"
                  style={{width:'100%', height:'100%', border:'none', borderRadius:'3px'}}
                  id="inline-hEbXPZJij97iCzjaocR3" 
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Customer Support Playbook "
                  data-height="502"
                  data-layout-iframe-id="inline-hEbXPZJij97iCzjaocR3"
                  data-form-id="hEbXPZJij97iCzjaocR3"
                  title="Customer Support Playbook "
                ></iframe>
              </div>
              <p className="text-xs text-gray-400 text-center mt-4">No spam. Instant download. Complete customer support AI transformation roadmap.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Are You Losing Customers Every Day While Competitors Pull Ahead?
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Your Problems */}
            <Card className="bg-red-900/20 border-red-500/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-red-300 mb-6 flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-3" />
                  Right now, your customer support operation is bleeding revenue:
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
              Revolutionary Customer Support Technology Made Simple
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
            What Customer Support Leaders Are Saying:
          </h2>
          
          <div className="space-y-8">
            <Card className="dark-card">
              <CardContent className="p-8">
                <p className="text-xl text-gray-300 italic mb-4 leading-relaxed">
                  "AI implementation has transformed our support operation from a cost center to a competitive advantage. Our resolution times dropped by 80% while our customer satisfaction scores reached all-time highs."
                </p>
              </CardContent>
            </Card>

            <Card className="dark-card">
              <CardContent className="p-8">
                <p className="text-xl text-gray-300 italic mb-4 leading-relaxed">
                  "The customer support industry's repetitive nature makes it perfect for AI automation. Teams that master AI-enhanced workflows will dominate customer experience in the next decade."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
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
                <MessageSquare className="w-12 h-12 text-[#00839C] mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4 text-center">Advanced Ticket Resolution Systems</h3>
                <div className="space-y-3">
                  {[
                    "AI-powered issue classification that routes tickets to optimal resolution paths",
                    "Intelligent response generation that maintains brand voice and accuracy",
                    "Automated follow-up sequences that ensure customer satisfaction",
                    "Dynamic knowledge base that learns and improves from every interaction"
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
                <h3 className="text-2xl font-bold text-white mb-4 text-center">Agent Empowerment Strategies</h3>
                <div className="space-y-3">
                  {[
                    "Real-time AI assistance that suggests optimal responses during customer conversations",
                    "Automated case research that provides agents with complete customer context instantly",
                    "Performance optimization tools that identify training opportunities and skill gaps",
                    "Workflow automation that eliminates repetitive tasks and focuses agents on complex issues"
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
                <HeartHandshake className="w-12 h-12 text-[#E501E4] mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4 text-center">Customer Experience Excellence</h3>
                <div className="space-y-3">
                  {[
                    "Predictive analytics that identify at-risk customers before they churn",
                    "Proactive outreach campaigns that provide value and prevent issues",
                    "Sentiment analysis that ensures emotional customer concerns receive appropriate attention",
                    "Omnichannel consistency that provides seamless support across all communication channels"
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
                  "Competitors provide faster, more consistent support that wins customer loyalty",
                  "Your operational costs remain 50-70% higher than AI-enabled support teams",
                  "Manual processes create response delays that frustrate customers and damage relationships",
                  "Agent burnout increases as repetitive work overwhelms your team"
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
                  Early adopters are creating customer experience advantages that traditional support operations may never overcome.
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
            Don't Let AI-Enabled Support Teams Leave You Behind
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            The customer support organizations implementing AI today are creating response time and service quality advantages that traditional teams cannot match.
          </p>
          <p className="text-lg text-gray-300 mb-12">
            This proven playbook has already helped hundreds of support teams achieve technology-enabled competitive positions. Your customer experience leadership depends on the decisions you make today.
          </p>
          
          <div className="bg-white/10 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Why This Playbook Is Essential Right Now:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Proven Support Implementation Strategy - Based on successful AI deployments across 300+ customer support operations",
                "Industry-Specific Solutions - Designed specifically for support workflows, agent assistance, and customer experience optimization",
                "90-Day Timeline - Complete transformation roadmap with measurable milestones and performance indicators",
                "Financial Guarantees - ROI projections based on documented results from customer support implementations"
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
            Transform your customer support from reactive ticket processing to proactive customer success leadership.
          </p>
        </div>
      </section>
    </div>
  );
}