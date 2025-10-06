
import React, { useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, AlertTriangle, TrendingUp, Clock, Zap, Target } from 'lucide-react';

export default function MissedOpportunityEpidemicPlaybook() {
  useEffect(() => {
    const scriptId = 'ghl-playbook-form-embed-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://link.mergemedia.ai/js/form_embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const playbookImage = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68856cb8a9268423a353c4f4/8e92659b2_MissedOpportunityPlaybookcoverpage.png";

  const problems = [
    "73% of your leads are lost due to slow response times—you're literally paying for leads that competitors close",
    "Your average response time of 47 hours means leads have already bought from someone else before you even call",
    "44% of your leads arrive after hours when you're not available, going straight to competitors with 24/7 automation",
    "You're spending 60-80 hours per week chasing leads manually while AI-powered businesses respond instantly",
    "78% of customers buy from the first responder—and it's never you"
  ];

  const competitorAdvantages = [
    "Converting 100-200% more leads from the same marketing spend with instant response",
    "Responding in under 60 seconds via voice, SMS, and email while you're still checking your inbox",
    "Operating with 24/7 coverage that captures after-hours leads you're abandoning",
    "Reducing cost-per-acquisition by 40-50% through intelligent automation and persistent follow-up",
    "Generating 300-500% ROI within their first year of AI implementation"
  ];

  const insidePlaybook = [
    {
      title: "The Proven 4-Week Speed-to-Lead Transformation",
      description: "Takes businesses from 47-hour response times to sub-1-minute contact across all channels"
    },
    {
      title: "Complete Agentic AI Deployment System",
      description: "Showing exactly how to implement voice, SMS, and email automation that responds instantly and qualifies leads 24/7"
    },
    {
      title: "Real-World ROI Calculations",
      description: "Demonstrating how businesses recover $150,000-$478,000+ annually from improved conversion rates and captured after-hours leads"
    },
    {
      title: "The First Responder Advantage",
      description: "That wins 78% of customers and creates market dominance competitors cannot overcome"
    },
    {
      title: "Intelligent Lead Management Architecture",
      description: "For automatic routing, scoring, and nurturing that eliminates manual bottlenecks"
    },
    {
      title: "Multi-Touch Follow-Up Framework",
      description: "That implements the proven cadence where 80% of sales happen after the 5th contact"
    }
  ];

  const roiScenarios = [
    {
      title: "Conservative Scenario",
      roi: "150-250% ROI",
      benefits: [
        "Lead conversion improvement: $100,000-$200,000 annually",
        "After-hours lead capture: $75,000-$150,000 annually",
        "Administrative automation savings: $25,000-$50,000 annually",
        "Net first-year benefit: $150,000-$350,000"
      ],
      color: "#00839C"
    },
    {
      title: "Realistic Scenario",
      roi: "250-400% ROI",
      benefits: [
        "All conservative benefits PLUS",
        "Improved contact rate revenue: $100,000-$200,000 annually",
        "Higher average transaction values: $50,000-$100,000 annually",
        "Net first-year benefit: $325,000-$650,000"
      ],
      color: "#DB07b5"
    },
    {
      title: "Optimistic Scenario",
      roi: "500%+ ROI",
      benefits: [
        "All realistic benefits PLUS",
        "Market share gains from technology leadership: $150,000-$300,000 annually",
        "Referral velocity improvement: $50,000-$100,000 annually",
        "Net first-year benefit: $475,000-$1,000,000+"
      ],
      color: "#E501E4"
    }
  ];

  return (
    <div className="min-h-screen bg-[#02012d] text-white">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-[#02012d] via-[#DB07b5]/10 to-[#02012d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#DB07b5]/20 to-[#E501E4]/20 border border-[#DB07b5]/30 mb-4">
              <AlertTriangle className="w-4 h-4 text-[#DB07b5] mr-2" />
              <span className="text-sm font-medium text-white">FREE Implementation Playbook</span>
            </div>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight max-w-5xl mx-auto">
              WARNING: Your Competitors Are Already Using AI to Respond to Leads in Under 60 Seconds
              <span className="gradient-text block mt-2">While You're Losing 73% of Yours</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-3 leading-relaxed max-w-4xl mx-auto">
              Download This FREE Implementation Playbook Before You Lose Another $250,000+ in Revenue to AI-Powered Competitors
            </p>
            
            <h2 className="text-xl md:text-2xl font-bold text-white mb-8 max-w-4xl mx-auto">
              "The Missed Opportunity Epidemic: Your Complete Playbook for Achieving Instant Speed-to-Lead and Dominating Your Market"
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            {/* Left - Playbook Image with white background */}
            <div className="flex justify-center">
              <div className="bg-white p-8 rounded-2xl shadow-2xl">
                <img 
                  src={playbookImage} 
                  alt="The Missed Opportunity Epidemic Playbook" 
                  className="w-full rounded-xl"
                  style={{ maxWidth: '435px' }}
                />
              </div>
            </div>

            {/* Right - Form */}
            <div>
              <Card className="dark-card">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-6 text-center">Get Your FREE Playbook Now</h3>
                  <div className="h-[520px]">
                    <iframe
                      src="https://link.mergemedia.ai/widget/form/EtaNVdAPyntxMazjLSEf"
                      style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
                      id="inline-EtaNVdAPyntxMazjLSEf"
                      data-layout="{'id':'INLINE'}"
                      data-trigger-type="alwaysShow"
                      data-trigger-value=""
                      data-activation-type="alwaysActivated"
                      data-activation-value=""
                      data-deactivation-type="neverDeactivate"
                      data-deactivation-value=""
                      data-form-name="Missed Opportunity Epidemic Playbook"
                      data-height="502"
                      data-layout-iframe-id="inline-EtaNVdAPyntxMazjLSEf"
                      data-form-id="EtaNVdAPyntxMazjLSEf"
                      title="Missed Opportunity Epidemic Playbook"
                    ></iframe>
                  </div>
                  <p className="text-center text-sm text-gray-400 mt-4">
                    No spam. Instant download. Complete speed-to-lead transformation roadmap.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Are You Bleeding Revenue Section */}
      <section className="section-padding bg-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Are You Bleeding Revenue Every Day While
              <span className="gradient-text block">Faster Competitors Capture Your Leads?</span>
            </h2>
            <p className="text-xl text-gray-300">Right now, your business is hemorrhaging money:</p>
          </div>

          <div className="space-y-4 mb-12">
            {problems.map((problem, index) => (
              <div key={index} className="flex items-start p-4 bg-white/5 rounded-lg border border-red-500/20">
                <AlertTriangle className="w-6 h-6 text-red-400 mr-4 flex-shrink-0 mt-1" />
                <p className="text-gray-300 text-lg leading-relaxed">{problem}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-[#DB07b5]/10 to-[#E501E4]/10 border border-[#DB07b5]/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Meanwhile, Early AI Adopters in Your Market Are:</h3>
            <div className="space-y-3">
              {competitorAdvantages.map((advantage, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#00839C] mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-300 leading-relaxed">{advantage}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Inside the Playbook Section */}
      <section className="section-padding bg-[#02012d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Inside This FREE
              <span className="gradient-text block">Implementation Playbook</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              You'll discover the complete roadmap to transform your lead response from 47 hours to under 1 minute
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insidePlaybook.map((item, index) => (
              <Card key={index} className="dark-card gradient-hover">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#DB07b5] to-[#E501E4] rounded-xl flex items-center justify-center mb-6">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Scenarios Section */}
      <section className="section-padding bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Financial Impact Is
              <span className="gradient-text block">Staggering</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {roiScenarios.map((scenario, index) => (
              <Card key={index} className="dark-card gradient-hover">
                <CardContent className="p-8">
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6 border"
                    style={{ backgroundColor: `${scenario.color}20`, borderColor: `${scenario.color}30` }}
                  >
                    <TrendingUp className="w-7 h-7" style={{ color: scenario.color }} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white text-center mb-2">{scenario.title}</h3>
                  <div className="text-center mb-6">
                    <span className="text-xl font-bold" style={{ color: scenario.color }}>{scenario.roi}</span>
                  </div>
                  
                  <div className="space-y-3">
                    {scenario.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5 mr-3" style={{ color: scenario.color }} />
                        <span className="text-gray-300 text-sm leading-relaxed">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-[#02012d]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Business Leaders Are
              <span className="gradient-text block">Saying</span>
            </h2>
          </div>

          <div className="space-y-6">
            <Card className="dark-card">
              <CardContent className="p-8">
                <p className="text-xl text-gray-300 italic mb-4 leading-relaxed">
                  "We went from responding to leads in 8 hours to 45 seconds. Our conversion rate doubled in the first month and we're now closing deals we would have lost to faster competitors. The ROI exceeded $400,000 in year one."
                </p>
              </CardContent>
            </Card>

            <Card className="dark-card">
              <CardContent className="p-8">
                <p className="text-xl text-gray-300 italic mb-4 leading-relaxed">
                  "The 44% of our leads that came in after hours were basically going straight to competitors. Now every single one gets instant response and qualification. We added $200,000 in revenue without spending another dollar on marketing."
                </p>
              </CardContent>
            </Card>

            <Card className="dark-card">
              <CardContent className="p-8">
                <p className="text-xl text-gray-300 italic mb-4 leading-relaxed">
                  "Speed-to-lead isn't just about technology—it's about survival. Businesses that can't respond in under 5 minutes are simply being eliminated from consideration. AI automation is the only way to compete."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cost of Waiting Section */}
      <section className="section-padding bg-gradient-to-br from-[#DB07b5]/5 via-white/5 to-[#E501E4]/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Cost of Waiting Is
              <span className="gradient-text block">Devastating</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="dark-card">
              <CardContent className="p-8 text-center">
                <Clock className="w-12 h-12 text-[#DB07b5] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Every Month</h3>
                <p className="text-gray-300 leading-relaxed">
                  You lose $20,000-$40,000+ in revenue from the 44% of leads arriving outside business hours
                </p>
              </CardContent>
            </Card>

            <Card className="dark-card">
              <CardContent className="p-8 text-center">
                <Clock className="w-12 h-12 text-[#E501E4] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">After 6 Months</h3>
                <p className="text-gray-300 leading-relaxed">
                  You've lost $120,000-$240,000+ in recoverable revenue to faster competitors
                </p>
              </CardContent>
            </Card>

            <Card className="dark-card">
              <CardContent className="p-8 text-center">
                <Clock className="w-12 h-12 text-[#00839C] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">After 12 Months</h3>
                <p className="text-gray-300 leading-relaxed">
                  You've forfeited $250,000-$500,000+ in revenue that could have funded growth
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-2xl font-bold text-white mb-8">
              78% of customers buy from the first responder.
              <br />
              <span className="gradient-text">Your competitors are responding in under 60 seconds.</span>
              <br />
              How long are YOU taking?
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-[#02012d]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Don't Let AI-Enabled Competitors
            <span className="gradient-text block">Leave You Behind</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            The businesses implementing instant speed-to-lead today are creating customer acquisition advantages that traditional operators cannot match.
          </p>

          <Card className="dark-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <Target className="w-16 h-16 text-[#DB07b5] mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-6">
                Download Your FREE Implementation Guide Now
              </h3>
              <p className="text-lg text-gray-300 mb-6">
                Transform your business from losing 73% of leads to capturing 85%+ through instant, intelligent response across all channels.
              </p>
              <div className="h-[520px]">
                <iframe
                  src="https://link.mergemedia.ai/widget/form/EtaNVdAPyntxMazjLSEf"
                  style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
                  id="inline-final-EtaNVdAPyntxMazjLSEf"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Missed Opportunity Epidemic Playbook"
                  data-height="502"
                  data-layout-iframe-id="inline-final-EtaNVdAPyntxMazjLSEf"
                  data-form-id="EtaNVdAPyntxMazjLSEf"
                  title="Missed Opportunity Epidemic Playbook"
                ></iframe>
              </div>
            </CardContent>
          </Card>

          <p className="text-gray-400 text-sm mt-8">
            The Speed-to-Lead Crisis Is Solved. The Only Question Is Whether You'll Implement The Solution Before Your Competitors Do.
          </p>
        </div>
      </section>
    </div>
  );
}
