
import React, { useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Download, TrendingUp, Wrench, Shield, AlertCircle } from 'lucide-react';

export default function PlumbingWhitePaper() {
  useEffect(() => {
    const scriptId = 'ghl-plumbing-form-embed-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://link.mergemedia.ai/js/form_embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const bookCoverUrl = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68856cb8a9268423a353c4f4/6124dd3e7_image_1a149303-b8f2-4347-8c55-cd88d72a0844.png";

  return (
    <div className="min-h-screen bg-[#02012d] text-white">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-[#00839C]/10 via-white/5 to-[#DB07b5]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#DB07b5]/10 to-[#E501E4]/10 border border-[#DB07b5]/20 mb-6">
              <Download className="w-4 h-4 text-[#DB07b5] mr-2" />
              <span className="text-sm font-medium text-white">FREE Industry Report</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              BREAKTHROUGH: AI Prevents Pipe Failures
              <span className="gradient-text block">Before They Happen</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Download the FREE Industry Report: How Smart Plumbing Technology is Eliminating Emergency Calls and Maximizing Revenue
            </p>
          </div>

          {/* Book Cover and Form Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Book Cover */}
            <div className="flex justify-center">
              <img 
                src={bookCoverUrl} 
                alt="From Wrench to AI - Plumbing White Paper"
                className="w-full max-w-md rounded-2xl shadow-2xl"
              />
            </div>

            {/* Form */}
            <Card className="dark-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  Get Your FREE White Paper
                </h3>
                <div className="w-full h-[498px]">
                  <iframe
                    src="https://link.mergemedia.ai/widget/form/ndkulxQ3LSvz6Scpc2sn"
                    style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
                    id="inline-ndkulxQ3LSvz6Scpc2sn"
                    title="Plumbing Whitepaper"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The $50 Billion Problem */}
      <section className="section-padding bg-[#02012d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The $50 Billion Problem
              <span className="gradient-text block">Plumbers Face</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="dark-card">
              <CardContent className="p-8">
                <AlertCircle className="w-12 h-12 text-red-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">The Crisis</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-300"><span className="font-bold text-white">85% of pipe failures happen without warning</span>, creating costly emergency situations</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-300"><span className="font-bold text-white">Emergency calls cost 300% more</span> than planned maintenance visits</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-300"><span className="font-bold text-white">72% of customers call multiple plumbers</span> - the first responder wins</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-300"><span className="font-bold text-white">Water damage claims exceed $13 billion annually</span> from preventable failures</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="dark-card border-[#00839C]/50">
              <CardContent className="p-8">
                <CheckCircle className="w-12 h-12 text-[#00839C] mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">The Solution</h3>
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  While traditional plumbers operate reactively, AI-enabled businesses are predicting failures, automating diagnostics, and capturing revenue that competitors lose.
                </p>
                <div className="bg-gradient-to-r from-[#00839C]/20 to-[#DB07b5]/20 rounded-lg p-6 border border-[#00839C]/30">
                  <p className="text-white font-bold text-lg">
                    Download this report to discover how leading plumbing businesses are transforming their operations with AI technology.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Revolutionary Technology */}
      <section className="section-padding bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary Technology
              <span className="gradient-text block">Delivering Proven Results</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="dark-card gradient-hover">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#00839C]/20 rounded-2xl flex items-center justify-center mb-6 border border-[#00839C]/30">
                  <Wrench className="w-8 h-8 text-[#00839C]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Smart Pipe Monitoring</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#00839C] mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">IoT sensors detect degradation months before visible symptoms</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#00839C] mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">AI pattern recognition identifies failure indicators with 95% accuracy</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#00839C] mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">Automated customer alerts schedule maintenance before emergencies</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="dark-card gradient-hover">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#DB07b5]/20 rounded-2xl flex items-center justify-center mb-6 border border-[#DB07b5]/30">
                  <TrendingUp className="w-8 h-8 text-[#DB07b5]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Automated Diagnostics</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#DB07b5] mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">Computer vision analyzes pipe conditions faster than human inspection</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#DB07b5] mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">AI troubleshooting guides technicians to solutions in real-time</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#DB07b5] mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">Digital documentation eliminates guesswork and improves fix rates</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="dark-card gradient-hover">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#E501E4]/20 rounded-2xl flex items-center justify-center mb-6 border border-[#E501E4]/30">
                  <Shield className="w-8 h-8 text-[#E501E4]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">24/7 Customer Service</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#E501E4] mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">AI agents handle emergency calls with instant intelligent response</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#E501E4] mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">Automated triage distinguishes emergencies from routine needs</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#E501E4] mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">Personalized service recommendations based on system history</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What This Report Reveals */}
      <section className="section-padding bg-[#02012d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What This FREE Report
              <span className="gradient-text block">Reveals</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="dark-card gradient-hover">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-[#00839C] mb-3">Real-World Case Studies</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>• 78% reduction in emergency calls</p>
                  <p>• $150,000 annual savings in water damage prevention</p>
                  <p>• 65% increase in planned maintenance revenue</p>
                  <p>• 40% improvement in technician productivity</p>
                </div>
              </CardContent>
            </Card>

            <Card className="dark-card gradient-hover">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-[#DB07b5] mb-3">Implementation Strategies</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>• Smart sensor deployment for different pipe systems</p>
                  <p>• AI diagnostic platform integration requirements</p>
                  <p>• Predictive maintenance business model development</p>
                  <p>• ROI calculations and financial planning tools</p>
                </div>
              </CardContent>
            </Card>

            <Card className="dark-card gradient-hover">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-[#E501E4] mb-3">Competitive Intelligence</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>• Why early AI adopters are establishing unbeatable market positions</p>
                  <p>• How to transition from reactive to predictive service models</p>
                  <p>• Which technologies provide best ROI for different business types</p>
                </div>
              </CardContent>
            </Card>

            <Card className="dark-card gradient-hover">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-[#00839C] mb-3">Critical Insights</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>• How predictive maintenance eliminates emergency stress</p>
                  <p>• Which IoT sensors work best for different pipe materials</p>
                  <p>• Marketing strategies for predictive maintenance services</p>
                  <p>• Premium pricing justification</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Competitive Reality */}
      <section className="section-padding bg-gradient-to-br from-[#00839C]/5 via-white/5 to-[#DB07b5]/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Competitive
              <span className="gradient-text block">Reality</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="dark-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Traditional Plumbers Struggle With:</h3>
                <div className="space-y-4">
                  <div className="flex items-start p-4 bg-red-400/10 rounded-lg border border-red-400/20">
                    <div className="text-2xl mr-3">❌</div>
                    <p className="text-gray-300">Unpredictable emergency volume overwhelming staff</p>
                  </div>
                  <div className="flex items-start p-4 bg-red-400/10 rounded-lg border border-red-400/20">
                    <div className="text-2xl mr-3">❌</div>
                    <p className="text-gray-300">Diagnostic guesswork leading to callbacks</p>
                  </div>
                  <div className="flex items-start p-4 bg-red-400/10 rounded-lg border border-red-400/20">
                    <div className="text-2xl mr-3">❌</div>
                    <p className="text-gray-300">Missing recurring revenue opportunities</p>
                  </div>
                  <div className="flex items-start p-4 bg-red-400/10 rounded-lg border border-red-400/20">
                    <div className="text-2xl mr-3">❌</div>
                    <p className="text-gray-300">Limited after-hours coverage losing business</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="dark-card border-[#00839C]/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">AI-Enabled Plumbers Achieve:</h3>
                <div className="space-y-4">
                  <div className="flex items-start p-4 bg-[#00839C]/10 rounded-lg border border-[#00839C]/30">
                    <div className="text-2xl mr-3">✅</div>
                    <p className="text-gray-300">Predictable service schedules through proactive maintenance</p>
                  </div>
                  <div className="flex items-start p-4 bg-[#00839C]/10 rounded-lg border border-[#00839C]/30">
                    <div className="text-2xl mr-3">✅</div>
                    <p className="text-gray-300">Diagnostic confidence with AI-assisted troubleshooting</p>
                  </div>
                  <div className="flex items-start p-4 bg-[#00839C]/10 rounded-lg border border-[#00839C]/30">
                    <div className="text-2xl mr-3">✅</div>
                    <p className="text-gray-300">Recurring revenue from monitored systems</p>
                  </div>
                  <div className="flex items-start p-4 bg-[#00839C]/10 rounded-lg border border-[#00839C]/30">
                    <div className="text-2xl mr-3">✅</div>
                    <p className="text-gray-300">24/7 market presence through automation</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Businesses Can't Afford to Wait */}
      <section className="section-padding bg-[#02012d]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Plumbing Businesses
              <span className="gradient-text block">Can't Afford to Wait</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Customer expectations have fundamentally shifted. Modern consumers expect:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              "Immediate response to emergencies",
              "Proactive maintenance preventing failures",
              "Transparent digital communication",
              "Predictable pricing and scheduling"
            ].map((expectation, index) => (
              <div key={index} className="flex items-center p-4 bg-white/5 rounded-lg border border-white/10">
                <CheckCircle className="w-6 h-6 text-[#00839C] mr-4 flex-shrink-0" />
                <span className="text-gray-300 font-medium">{expectation}</span>
              </div>
            ))}
          </div>

          <Card className="dark-card mb-12">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Early AI Adopters Are Establishing Market Positions That Become Impossible to Challenge
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <TrendingUp className="w-6 h-6 text-[#DB07b5] mr-4 flex-shrink-0 mt-1" />
                  <p className="text-gray-300"><span className="font-bold text-white">Technology leadership</span> attracts premium-paying customers</p>
                </div>
                <div className="flex items-start">
                  <TrendingUp className="w-6 h-6 text-[#DB07b5] mr-4 flex-shrink-0 mt-1" />
                  <p className="text-gray-300"><span className="font-bold text-white">Operational efficiency</span> enables competitive pricing with better margins</p>
                </div>
                <div className="flex items-start">
                  <TrendingUp className="w-6 h-6 text-[#DB07b5] mr-4 flex-shrink-0 mt-1" />
                  <p className="text-gray-300"><span className="font-bold text-white">Service quality consistency</span> generates referral networks</p>
                </div>
                <div className="flex items-start">
                  <TrendingUp className="w-6 h-6 text-[#DB07b5] mr-4 flex-shrink-0 mt-1" />
                  <p className="text-gray-300"><span className="font-bold text-white">Market share growth</span> compounds advantages over time</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center p-8 bg-gradient-to-r from-[#DB07b5]/20 to-[#E501E4]/20 rounded-2xl border border-[#DB07b5]/30">
            <p className="text-2xl font-bold text-white mb-2">
              The plumbing industry stands at a technological inflection point.
            </p>
            <p className="text-xl text-gray-300">
              Businesses that act now will define the future while those that delay risk obsolescence.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-br from-[#00839C]/10 via-white/5 to-[#DB07b5]/10">
        <div className="max-w-4xl mx-auto px-6">
          <Card className="dark-card">
            <CardContent className="p-12">
              <div className="text-center mb-8">
                <Download className="w-16 h-16 text-[#DB07b5] mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Download Your FREE Industry Analysis
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Get instant access to comprehensive insights that could transform your plumbing business
                </p>
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-[#00839C] mr-2" />
                    <span>Free access</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-[#00839C] mr-2" />
                    <span>Instant download</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-[#00839C] mr-2" />
                    <span>Industry-leading insights</span>
                  </div>
                </div>
              </div>

              <div className="w-full h-[498px]">
                <iframe
                  src="https://link.mergemedia.ai/widget/form/ndkulxQ3LSvz6Scpc2sn"
                  style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
                  id="inline-ndkulxQ3LSvz6Scpc2sn-bottom"
                  title="Plumbing Whitepaper"
                ></iframe>
              </div>

              <p className="text-center text-gray-400 text-sm mt-8">
                Comprehensive analysis of AI technology applications in plumbing services, focusing on predictive maintenance systems, automated diagnostics, and customer service optimization with real-world case studies and financial impact analysis.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
