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
  Heart,
  Stethoscope,
  Users,
  Clock
} from 'lucide-react';

export default function MedSpaPlaybookPage() {
  const playbookCoverUrl = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68856cb8a9268423a353c4f4/475d5fa4b_image_73902514-9aac-414c-a8ee-a5427aa4ae24.png";

  useEffect(() => {
    const scriptId = 'ghl-med-spa-playbook-form-embed-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://link.mergemedia.ai/js/form_embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const painPoints = [
    "Manual skin analysis creates 30-40% variability between practitioner assessments",
    "Consultation documentation consumes 20+ hours weekly of clinical staff time",
    "Appointment scheduling inefficiencies cause 25% patient dissatisfaction",
    "Treatment planning requires 45+ minutes per consultation using traditional methods",
    "Patient education demands extensive one-on-one time for complex treatment explanations"
  ];

  const competitorAdvantages = [
    "Achieving 85% more consistent diagnostic assessments",
    "Reducing documentation time by 60% while improving accuracy",
    "Optimizing scheduling to maximize both patient satisfaction and provider efficiency",
    "Streamlining consultations while maintaining thoroughness"
  ];

  const phases = [
    {
      phase: "Phase 1: Clinical Assessment Enhancement",
      days: "Days 1-30",
      icon: Stethoscope,
      features: [
        "AI-powered skin analysis tools for consistent diagnostic documentation",
        "Automated patient intake and medical history recording",
        "Intelligent appointment scheduling optimized for clinical workflow"
      ]
    },
    {
      phase: "Phase 2: Treatment Planning Optimization",
      days: "Days 31-60",
      icon: Settings,
      features: [
        "Evidence-based treatment protocol recommendations",
        "Automated follow-up scheduling for proper treatment intervals",
        "Enhanced patient education systems with visual treatment planning"
      ]
    },
    {
      phase: "Phase 3: Practice Management Integration",
      days: "Days 61-90",
      icon: TrendingUp,
      features: [
        "Comprehensive compliance documentation automation",
        "Performance analytics for clinical outcomes and patient satisfaction",
        "Streamlined communication systems for improved patient engagement"
      ]
    }
  ];

  const implementationResults = [
    {
      title: "Conservative Implementation Results",
      color: "text-[#00839C]",
      benefits: [
        "Clinical documentation efficiency: 60% time reduction",
        "Patient scheduling optimization: 40% improvement in satisfaction",
        "Operational benefit: Enhanced care delivery with reduced administrative burden"
      ]
    },
    {
      title: "Advanced Implementation Results",
      color: "text-[#DB07b5]",
      benefits: [
        "All basic benefits PLUS",
        "Diagnostic consistency: 85% improvement across practitioners",
        "Patient education effectiveness: 75% enhancement",
        "Clinical benefit: Superior patient outcomes with streamlined operations"
      ]
    }
  ];

  const whatYoullDiscover = [
    {
      icon: Heart,
      title: "The Proven 90-Day Med Spa AI Integration Framework",
      description: "That enhances clinical consistency and operational efficiency."
    },
    {
      icon: Zap,
      title: "The 'Precision Care Revolution'",
      description: "That supports clinical decision-making while optimizing practice operations."
    },
    {
      icon: FileText,
      title: "Clinical Safety and Compliance Integration",
      description: "For maintaining the highest standards of patient care."
    },
    {
      icon: Users,
      title: "Complete Patient Care Enhancement System",
      description: "Showing exactly how to deploy AI diagnostic support, automated scheduling, and intelligent documentation."
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
              <span className="text-red-300 font-bold">WARNING: Your Med Spa Competitors Are Already Using AI to Improve Patient Care and Operational Efficiency</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Download This FREE Implementation Playbook Before You Fall Behind in
              <span className="text-[#DB07b5] block">Clinical Excellence</span>
              <span className="text-gray-300 block text-2xl md:text-3xl mt-4">
                and Patient Satisfaction
              </span>
            </h1>
            
            <div className="bg-white/10 rounded-2xl p-6 mb-8 max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-[#00839C] mb-4">
                "The Aesthetic Intelligence Playbook: Strategic Implementation of Agentic AI for Med Spa Operations, Patient Care, and Business Growth"
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mt-16 text-left">
            {/* Left Column: Playbook Image */}
            <div className="flex items-center justify-center">
              <img 
                src={playbookCoverUrl}
                alt="The Aesthetic Intelligence Playbook"
                className="w-full max-w-md rounded-lg shadow-2xl"
              />
            </div>

            {/* Right Column: Form */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-4 sm:p-8">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Get Your FREE Implementation Playbook</h3>
              <p className="text-gray-300 text-center mb-6">Download now before you fall behind in clinical excellence</p>
              <div className="h-[502px]">
                <iframe
                  src="https://link.mergemedia.ai/widget/form/3eC70XA6rqAWRNT88OnE"
                  style={{width:'100%', height:'100%', border:'none', borderRadius:'3px'}}
                  id="inline-3eC70XA6rqAWRNT88OnE" 
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Med Spa Playbook "
                  data-height="502"
                  data-layout-iframe-id="inline-3eC70XA6rqAWRNT88OnE"
                  data-form-id="3eC70XA6rqAWRNT88OnE"
                  title="Med Spa Playbook "
                ></iframe>
              </div>
              <p className="text-xs text-gray-400 text-center mt-4">No spam. Instant download. Complete med spa AI implementation roadmap.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Are You Missing Opportunities for Better Patient Care?
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Your Problems */}
            <Card className="bg-red-900/20 border-red-500/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-red-300 mb-6 flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-3" />
                  Right now, your med spa practice may be operating with limitations:
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
                  Meanwhile, AI-enhanced med spa practices are:
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
              Revolutionary Med Spa Technology Made Simple
            </h2>
            <p className="text-xl text-gray-300">90-Day transformation roadmap with measurable clinical and operational milestones</p>
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

      {/* Clinical and Operational Impact */}
      <section className="py-20 bg-[#02012d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Clinical and Operational Impact
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {implementationResults.map((result, index) => (
              <Card key={index} className="dark-card">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-6">{result.title}</h3>
                  <div className="space-y-3">
                    {result.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start text-left">
                        <CheckCircle className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${result.color}`} />
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="dark-card">
              <CardContent className="p-8">
                <Heart className="w-12 h-12 text-[#DB07b5] mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4 text-center">Clinical Enhancement Strategies</h3>
                <div className="space-y-3">
                  {[
                    "AI integration that supports rather than replaces clinical expertise",
                    "Evidence-based treatment planning with automated documentation",
                    "Patient communication systems that improve informed consent processes"
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
                <Settings className="w-12 h-12 text-[#00839C] mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4 text-center">Operational Excellence Framework</h3>
                <div className="space-y-3">
                  {[
                    "Scheduling optimization that balances patient convenience with clinical requirements",
                    "Documentation automation that maintains compliance while reducing burden",
                    "Performance monitoring that measures both clinical outcomes and efficiency"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-[#00839C] mr-3 mt-1 flex-shrink-0" />
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
              The Practice Management Reality
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-red-300 mb-6">Every month practices delay implementation:</h3>
              <div className="space-y-4">
                {[
                  "Clinical documentation continues consuming valuable patient care time",
                  "Scheduling inefficiencies create patient dissatisfaction and lost revenue opportunities",
                  "Manual processes limit practice growth potential",
                  "Competitors gain advantages through enhanced operational efficiency"
                ].map((point, index) => (
                  <div key={index} className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="bg-[#DB07b5]/20 border-[#DB07b5]/30">
              <CardContent className="p-8 text-center">
                <Heart className="w-16 h-16 text-[#DB07b5] mx-auto mb-6" />
                <h4 className="text-2xl font-bold text-white mb-4">
                  Med spa practices implementing AI are creating operational efficiencies that support superior patient care while traditional practices struggle with manual processes.
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
            Don't Let Technology-Enhanced Practices Pull Ahead
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Med spa practices implementing AI are creating operational efficiencies that support superior patient care while traditional practices struggle with manual processes.
          </p>
          <p className="text-lg text-gray-300 mb-12">
            Transform your med spa practice with technology that enhances clinical excellence and operational efficiency.
          </p>
          
          <div className="bg-white/10 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Why This Playbook Is Essential:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Evidence-Based Implementation Strategy - Based on successful deployments across 100+ med spa practices",
                "Clinical Standards Focus - Designed to enhance patient care while maintaining safety protocols",
                "90-Day Timeline - Complete transformation roadmap with measurable clinical and operational milestones",
                "Compliance Integration - Ensures all AI implementations support regulatory requirements and best practices"
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
            Transform your med spa practice with technology that enhances clinical excellence and operational efficiency.
          </p>
        </div>
      </section>
    </div>
  );
}