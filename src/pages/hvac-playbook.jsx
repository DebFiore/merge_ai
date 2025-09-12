import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  AlertTriangle, 
  CheckCircle, 
  Download, 
  DollarSign, 
  TrendingUp,
  Clock,
  Users,
  Shield
} from 'lucide-react';

export default function HVACPlaybook() {
  const [formData, setFormData] = useState({
    email: '',
    company: '',
    phone: ''
  });

  useEffect(() => {
    const scriptId = 'ghl-hvac-form-embed-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://link.mergemedia.ai/js/form_embed.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        const existingScript = document.getElementById(scriptId);
        if (existingScript) {
          document.body.removeChild(existingScript);
        }
      };
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would integrate with your form handler
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const painPoints = [
    "20-30% of your calls go unanswered (that's $400,000-$800,000 in lost revenue annually)",
    "Your best dispatcher takes vacation and efficiency plummets",
    "Emergency calls after hours go to voicemail while competitors answer instantly",
    "You're paying 40-60% more in administrative overhead than AI-enabled businesses",
    "Your technicians are only 50-65% utilized while competitors achieve 75-80%"
  ];

  const competitorAdvantages = [
    "Answering 100% of calls 24/7 with perfect consistency",
    "Operating with 40-60% lower administrative costs",
    "Generating 300-500% ROI within their first year",
    "Creating competitive advantages you may never overcome"
  ];

  const playbookContents = [
    "The Proven 3-Phase Framework that transforms HVAC businesses from reactive service providers to proactive market leaders",
    "Exact ROI Calculations showing how HVAC businesses recover $300,000-$800,000 annually from previously missed opportunities",
    "90-Day Implementation Timeline with specific milestones and success metrics that guarantee results",
    "Real-World Case Studies from 200+ HVAC businesses that achieved median returns of 300% in year one",
    "The 'Revenue Recovery Formula' that captures every missed call, optimizes every schedule, and converts every opportunity",
    "Advanced AI Agent Configurations specifically designed for emergency response, intelligent dispatching, and proactive revenue generation",
    "Complete Competitive Analysis showing why businesses that delay AI adoption face inevitable market displacement"
  ];

  const roiScenarios = [
    {
      title: "Conservative Scenario",
      roi: "150-250% ROI",
      benefits: [
        "Administrative cost savings: $60,000-$100,000 annually",
        "Missed call revenue recovery: $200,000-$400,000 annually",
        "Net first-year benefit: $140,000-$320,000"
      ],
      accent: "#00839C"
    },
    {
      title: "Realistic Scenario",
      roi: "300-400% ROI",
      benefits: [
        "All conservative benefits PLUS",
        "Customer retention improvements: $100,000-$200,000 annually",
        "Net first-year benefit: $315,000-$670,000"
      ],
      accent: "#DB07b5"
    },
    {
      title: "Optimistic Scenario", 
      roi: "500%+ ROI",
      benefits: [
        "All realistic benefits PLUS",
        "Competitive market share gains: $150,000-$300,000 annually",
        "Net first-year benefit: $540,000-$1,120,000"
      ],
      accent: "#E501E4"
    }
  ];

  return (
    <div className="min-h-screen bg-[#02012d] text-white">
      {/* Warning Hero Section */}
      <section className="pt-32 pb-20 px-6 text-center bg-gradient-to-b from-[#db07b5]/20 to-[#02012d]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <AlertTriangle className="w-12 h-12 text-[#db07b5] mr-4" />
            <Badge className="bg-[#db07b5]/20 text-[#db07b5] border-[#db07b5]/30 text-2xl px-8 py-4 font-bold">
              WARNING
            </Badge>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Your HVAC Competitors Are Already Using AI to
            <span className="text-[#db07b5] block">Steal Your Customers</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Download This <span className="text-[#DB07b5] font-bold">FREE Strategic Playbook</span> Before You Lose Another $500,000 in Revenue to AI-Powered Competitors
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mt-16 text-left">
            {/* Left Column: Book Image */}
            <div className="flex items-center justify-center md:justify-start">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68856cb8a9268423a353c4f4/72a08f082_image_fd1aa71a-9aac-4455-8ebd-25150d2120a9.png"
                alt="The Intelligent HVAC Business Playbook"
                className="w-full max-w-md rounded-lg shadow-2xl"
              />
            </div>

            {/* Right Column: Form */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-4 sm:p-8">
                <h3 className="text-2xl font-bold text-white mb-4 text-center">Get Your FREE Copy Now</h3>
                <div className="h-[503px]">
                  <iframe
                      src="https://link.mergemedia.ai/widget/form/Jhs8oH20iBZskx0tEKcj"
                      style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
                      id="inline-Jhs8oH20iBZskx0tEKcj" 
                      data-layout="{'id':'INLINE'}"
                      data-trigger-type="alwaysShow"
                      data-trigger-value=""
                      data-activation-type="alwaysActivated"
                      data-activation-value=""
                      data-deactivation-type="neverDeactivate"
                      data-deactivation-value=""
                      data-form-name="HVAC Playbook "
                      data-height="503"
                      data-layout-iframe-id="inline-Jhs8oH20iBZskx0tEKcj"
                      data-form-id="Jhs8oH20iBZskx0tEKcj"
                      title="HVAC Playbook "
                  >
                  </iframe>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Are You Losing Money Every Day While Your Competitors Pull Ahead?
          </h2>
          <p className="text-xl text-gray-300 text-center mb-16">
            Right now, your HVAC business is bleeding revenue:
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-[#db07b5] mb-8">Your Business Right Now:</h3>
              <div className="space-y-4">
                {painPoints.map((point, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-[#db07b5]/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-[#db07b5] rounded-full"></div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#00839C] mb-8">Meanwhile, Early AI Adopters Are:</h3>
              <div className="space-y-4">
                {competitorAdvantages.map((advantage, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-[#00839C] mr-4 flex-shrink-0 mt-1" />
                    <p className="text-gray-300 leading-relaxed">{advantage}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="py-20 px-6 bg-[#02012d]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Inside This <span className="gradient-text">FREE Strategic Playbook</span>, You'll Discover:
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mt-16">
            {playbookContents.map((content, index) => (
              <Card key={index} className="dark-card gradient-hover">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-[#00839C] mr-4 flex-shrink-0 mt-1" />
                    <p className="text-gray-300 leading-relaxed">{content}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Scenarios */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            The Financial Impact Is <span className="gradient-text">Staggering</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {roiScenarios.map((scenario, index) => (
              <Card key={index} className="dark-card gradient-hover h-full">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{scenario.title}</h3>
                    <div 
                      className="text-2xl font-bold px-4 py-2 rounded-lg"
                      style={{ 
                        backgroundColor: `${scenario.accent}20`, 
                        color: scenario.accent 
                      }}
                    >
                      {scenario.roi}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {scenario.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start">
                        <DollarSign className="w-5 h-5 flex-shrink-0 mt-1 mr-3" style={{ color: scenario.accent }} />
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

      {/* Cost of Waiting */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#db07b5]/20 to-[#02012d]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <AlertTriangle className="w-8 h-8 text-[#db07b5] mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              The Cost of Waiting Is <span className="text-[#db07b5]">Devastating</span>
            </h2>
          </div>

          <p className="text-xl text-gray-300 mb-12">
            Every month you delay AI implementation:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              "Competitors gain additional market share through superior service",
              "Revenue opportunities become harder to recover", 
              "The competitive gap widens and becomes insurmountable",
              "Your administrative costs remain 40-60% higher than necessary"
            ].map((cost, index) => (
              <div key={index} className="flex items-start p-4 bg-[#db07b5]/20 rounded-lg">
                <Clock className="w-6 h-6 text-[#db07b5] mr-4 flex-shrink-0 mt-1" />
                <p className="text-gray-300">{cost}</p>
              </div>
            ))}
          </div>

          <p className="text-lg text-[#db07b5] font-semibold">
            Early adopters are creating competitive moats that become deeper and more insurmountable with each passing month.
          </p>
        </div>
      </section>

      {/* Download Form Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#02012d] to-[#00839C]/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="gradient-text">CLAIM YOUR FREE</span> Strategic Playbook
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Instantly download this comprehensive 40+ page strategic playbook:
            </p>
          </div>

          <div className="flex justify-center">
            <Button 
                onClick={() => document.querySelector('iframe').scrollIntoView({ behavior: 'smooth' })}
                className="gradient-bg text-white px-12 py-4 text-xl font-bold rounded-full gradient-hover"
              >
                <Download className="w-6 h-6 mr-3" />
                DOWNLOAD YOUR FREE COPY NOW
            </Button>
          </div>
          

          {/* Why Essential */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Why This Playbook Is Essential Right Now:
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Users,
                  title: "Proven Framework",
                  description: "Based on real implementations across 200+ HVAC businesses"
                },
                {
                  icon: Shield,
                  title: "Industry-Specific Solutions", 
                  description: "Designed specifically for HVAC operational challenges"
                },
                {
                  icon: TrendingUp,
                  title: "Immediate Actionability",
                  description: "Complete 90-day implementation roadmap included"
                },
                {
                  icon: DollarSign,
                  title: "Financial Guarantees",
                  description: "ROI projections based on measurable, documented results"
                },
                {
                  icon: CheckCircle,
                  title: "Competitive Intelligence",
                  description: "Strategic insights to outmaneuver competitors"
                },
                {
                  icon: TrendingUp,
                  title: "Future-Proofing Strategies",
                  description: "Technology roadmap for sustained market leadership"
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start p-4 bg-white/5 rounded-lg">
                  <feature.icon className="w-6 h-6 text-[#00839C] mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#DB07b5]/10 to-[#E501E4]/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Don't Let Your Competitors Leave You Behind
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            The HVAC businesses implementing AI today are creating advantages that late adopters may never overcome.
          </p>
          <p className="text-lg text-white font-semibold mb-8">
            Download your free copy now and begin your transformation to market leadership.
          </p>
          
          <Button 
            onClick={() => document.querySelector('iframe').scrollIntoView({ behavior: 'smooth' })}
            className="gradient-bg text-white px-12 py-4 text-xl font-bold rounded-full gradient-hover"
          >
            <Download className="w-6 h-6 mr-3" />
            DOWNLOAD YOUR FREE COPY NOW
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-[#02012d] border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400">
            Copyright © 2024 MERGE AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}