import React, { useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Download, TrendingUp, Shield, DollarSign, AlertCircle } from 'lucide-react';

export default function MCAWhitePaper() {
  useEffect(() => {
    const scriptId = 'ghl-mca-form-embed-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://link.mergemedia.ai/js/form_embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const bookCoverUrl = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68856cb8a9268423a353c4f4/4e36699e8_image_be9eb02a-bfd7-4aef-bf46-5f612869f1e0.png";

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
              BREAKTHROUGH: AI Reduces MCA Default Rates by 45%
              <span className="gradient-text block">While Accelerating Approvals 10x</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Download the FREE Industry Report: How Agentic AI is Transforming Risk Assessment and Decision-Making in Alternative Lending
            </p>
          </div>

          {/* Book Cover and Form Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Book Cover */}
            <div className="flex justify-center">
              <img 
                src={bookCoverUrl} 
                alt="Capital Intelligence Unleashed - MCA White Paper"
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
                    src="https://link.mergemedia.ai/widget/form/vOwv7KueEIvZ8uCXgcyX"
                    style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
                    id="inline-vOwv7KueEIvZ8uCXgcyX"
                    title="MCA Whitepaper"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The $12 Billion Risk Assessment Crisis */}
      <section className="section-padding bg-[#02012d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The MCA Industry's
              <span className="gradient-text block">$12 Billion Risk Assessment Crisis</span>
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
                    <p className="text-gray-300"><span className="font-bold text-white">Traditional underwriting accuracy averages only 70-75%</span>, leading to billions in preventable defaults</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-300"><span className="font-bold text-white">Manual risk assessment takes 3-5 days</span> while competitors approve applications in hours</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-300"><span className="font-bold text-white">Document fraud detection misses 30-40% of falsified applications</span> using conventional review methods</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-300"><span className="font-bold text-white">Regulatory compliance costs consume 25% of operational budgets</span> through manual documentation and reporting</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="dark-card border-[#00839C]/50">
              <CardContent className="p-8">
                <CheckCircle className="w-12 h-12 text-[#00839C] mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">The Solution</h3>
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  While traditional MCA operations struggle with these limitations, AI-powered lenders are achieving superior risk assessment accuracy, processing applications 10x faster, and dramatically reducing default rates.
                </p>
                <div className="bg-gradient-to-r from-[#00839C]/20 to-[#DB07b5]/20 rounded-lg p-6 border border-[#00839C]/30">
                  <p className="text-white font-bold text-lg">
                    Download this report to discover how leading MCA providers are transforming their operations with AI technology.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Revolutionary Risk Intelligence */}
      <section className="section-padding bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary Risk Intelligence
              <span className="gradient-text block">Delivering Proven Results</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="dark-card gradient-hover">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#00839C]/20 rounded-2xl flex items-center justify-center mb-6 border border-[#00839C]/30">
                  <TrendingUp className="w-8 h-8 text-[#00839C]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Advanced Risk Assessment Analytics</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#00839C] mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">Machine learning algorithms analyze 500+ data points beyond traditional financial metrics</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#00839C] mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">Real-time bank statement analysis detects patterns invisible to human underwriters</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#00839C] mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">Predictive models identify default probability with 95% accuracy</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="dark-card gradient-hover">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#DB07b5]/20 rounded-2xl flex items-center justify-center mb-6 border border-[#DB07b5]/30">
                  <DollarSign className="w-8 h-8 text-[#DB07b5]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Automated Decision-Making Systems</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#DB07b5] mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">AI processes applications from submission to approval in under 2 hours</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#DB07b5] mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">Intelligent document verification detects fraud with 98% accuracy</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#DB07b5] mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">Dynamic pricing optimization based on real-time risk assessment</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="dark-card gradient-hover">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#E501E4]/20 rounded-2xl flex items-center justify-center mb-6 border border-[#E501E4]/30">
                  <Shield className="w-8 h-8 text-[#E501E4]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Compliance Intelligence Integration</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#E501E4] mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">Automated regulatory reporting that maintains perfect documentation standards</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#E501E4] mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">Real-time monitoring that ensures all transactions meet compliance requirements</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#E501E4] mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">Predictive compliance risk assessment that prevents regulatory violations</p>
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
                <h3 className="text-lg font-bold text-[#00839C] mb-3">Performance Transformation Data</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>• 45% reduction in default rates through AI-enhanced risk assessment</p>
                  <p>• 10x faster approval processing from days to hours</p>
                  <p>• 60% improvement in fraud detection accuracy</p>
                  <p>• 80% reduction in compliance documentation time</p>
                </div>
              </CardContent>
            </Card>

            <Card className="dark-card gradient-hover">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-[#DB07b5] mb-3">Technology Implementation Strategies</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>• Machine learning model deployment for alternative data analysis</p>
                  <p>• Automated bank statement processing and cash flow assessment</p>
                  <p>• Real-time decision engines for instant approval workflows</p>
                  <p>• Compliance automation systems for regulatory adherence</p>
                </div>
              </CardContent>
            </Card>

            <Card className="dark-card gradient-hover">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-[#E501E4] mb-3">Competitive Intelligence Analysis</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>• How early AI adopters are capturing market share through superior speed and accuracy</p>
                  <p>• Risk assessment methodologies that exceed traditional underwriting performance</p>
                  <p>• Revenue optimization strategies through AI-powered pricing models</p>
                </div>
              </CardContent>
            </Card>

            <Card className="dark-card gradient-hover">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-[#00839C] mb-3">Real-World Industry Case Studies</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>• Mid-market MCA providers achieving 50% approval volume increase</p>
                  <p>• Enterprise lenders reducing charge-offs by 35%</p>
                  <p>• Fintech platforms improving time-to-funding by 8x</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Real-World Industry
              <span className="gradient-text block">Case Studies</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="dark-card gradient-hover">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Mid-Market MCA Providers</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <DollarSign className="w-6 h-6 text-[#00839C] mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">50% increase in approval volume with same staff through AI automation</p>
                  </div>
                  <div className="flex items-start">
                    <DollarSign className="w-6 h-6 text-[#00839C] mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">$2M annual savings in operational costs via automated processing</p>
                  </div>
                  <div className="flex items-start">
                    <DollarSign className="w-6 h-6 text-[#00839C] mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">40% improvement in portfolio performance through better risk selection</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="dark-card gradient-hover">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Enterprise Alternative Lenders</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <DollarSign className="w-6 h-6 text-[#DB07b5] mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">70% reduction in manual underwriting time using AI decision systems</p>
                  </div>
                  <div className="flex items-start">
                    <DollarSign className="w-6 h-6 text-[#DB07b5] mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">35% decrease in charge-offs through predictive risk analytics</p>
                  </div>
                  <div className="flex items-start">
                    <DollarSign className="w-6 h-6 text-[#DB07b5] mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">90% improvement in regulatory compliance documentation accuracy</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="dark-card gradient-hover">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Fintech Lending Platforms</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <DollarSign className="w-6 h-6 text-[#E501E4] mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">8x faster time-to-funding through automated approval workflows</p>
                  </div>
                  <div className="flex items-start">
                    <DollarSign className="w-6 h-6 text-[#E501E4] mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">55% improvement in customer satisfaction with instant decision capability</p>
                  </div>
                  <div className="flex items-start">
                    <DollarSign className="w-6 h-6 text-[#E501E4] mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">25% increase in profit margins through optimized risk-based pricing</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Competitive Reality */}
      <section className="section-padding bg-[#02012d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Competitive
              <span className="gradient-text block">Reality Check</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="dark-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Traditional MCA Operations Face:</h3>
                <div className="space-y-4">
                  <div className="flex items-start p-4 bg-red-400/10 rounded-lg border border-red-400/20">
                    <div className="text-2xl mr-3">❌</div>
                    <p className="text-gray-300">Slow manual underwriting that loses deals to faster competitors</p>
                  </div>
                  <div className="flex items-start p-4 bg-red-400/10 rounded-lg border border-red-400/20">
                    <div className="text-2xl mr-3">❌</div>
                    <p className="text-gray-300">Inconsistent risk assessment leading to higher default rates</p>
                  </div>
                  <div className="flex items-start p-4 bg-red-400/10 rounded-lg border border-red-400/20">
                    <div className="text-2xl mr-3">❌</div>
                    <p className="text-gray-300">Document processing bottlenecks that frustrate customers</p>
                  </div>
                  <div className="flex items-start p-4 bg-red-400/10 rounded-lg border border-red-400/20">
                    <div className="text-2xl mr-3">❌</div>
                    <p className="text-gray-300">Compliance challenges consuming excessive operational resources</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="dark-card border-[#00839C]/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">AI-Enabled MCA Companies Achieve:</h3>
                <div className="space-y-4">
                  <div className="flex items-start p-4 bg-[#00839C]/10 rounded-lg border border-[#00839C]/30">
                    <div className="text-2xl mr-3">✅</div>
                    <p className="text-gray-300">Instant application processing and approval decisions</p>
                  </div>
                  <div className="flex items-start p-4 bg-[#00839C]/10 rounded-lg border border-[#00839C]/30">
                    <div className="text-2xl mr-3">✅</div>
                    <p className="text-gray-300">Superior risk assessment accuracy reducing portfolio losses</p>
                  </div>
                  <div className="flex items-start p-4 bg-[#00839C]/10 rounded-lg border border-[#00839C]/30">
                    <div className="text-2xl mr-3">✅</div>
                    <p className="text-gray-300">Automated fraud detection protecting against sophisticated schemes</p>
                  </div>
                  <div className="flex items-start p-4 bg-[#00839C]/10 rounded-lg border border-[#00839C]/30">
                    <div className="text-2xl mr-3">✅</div>
                    <p className="text-gray-300">Streamlined compliance that reduces regulatory risk and costs</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Companies Can't Wait */}
      <section className="section-padding bg-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why MCA Companies
              <span className="gradient-text block">Can't Afford to Wait</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              The alternative lending market is becoming increasingly competitive, with customer expectations for instant decisions and regulatory requirements growing more complex. Early AI adopters are establishing operational advantages that traditional lenders cannot match.
            </p>
          </div>

          <Card className="dark-card mb-12">
            <CardContent className="p-8">
              <div className="space-y-4">
                <div className="flex items-start">
                  <TrendingUp className="w-6 h-6 text-[#DB07b5] mr-4 flex-shrink-0 mt-1" />
                  <p className="text-gray-300"><span className="font-bold text-white">Risk Assessment Superiority</span> enables better portfolio performance and competitive pricing</p>
                </div>
                <div className="flex items-start">
                  <TrendingUp className="w-6 h-6 text-[#DB07b5] mr-4 flex-shrink-0 mt-1" />
                  <p className="text-gray-300"><span className="font-bold text-white">Processing Speed Leadership</span> captures time-sensitive opportunities that competitors miss</p>
                </div>
                <div className="flex items-start">
                  <TrendingUp className="w-6 h-6 text-[#DB07b5] mr-4 flex-shrink-0 mt-1" />
                  <p className="text-gray-300"><span className="font-bold text-white">Operational Efficiency</span> reduces costs while scaling volume without proportional staff increases</p>
                </div>
                <div className="flex items-start">
                  <TrendingUp className="w-6 h-6 text-[#DB07b5] mr-4 flex-shrink-0 mt-1" />
                  <p className="text-gray-300"><span className="font-bold text-white">Compliance Excellence</span> minimizes regulatory risk in an increasingly scrutinized industry</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center p-8 bg-gradient-to-r from-[#DB07b5]/20 to-[#E501E4]/20 rounded-2xl border border-[#DB07b5]/30 mb-12">
            <p className="text-xl text-gray-300 mb-4">
              Implementation costs increase as demand grows across financial services, making early adoption essential for competitive survival.
            </p>
          </div>
        </div>
      </section>

      {/* Critical Intelligence */}
      <section className="section-padding bg-[#02012d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Critical Industry Intelligence
              <span className="gradient-text block">Revealed</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              "How AI risk assessment models outperform traditional underwriting by analyzing alternative data sources",
              "Which machine learning algorithms provide optimal fraud detection for MCA applications",
              "Automated compliance strategies that reduce regulatory burden while improving accuracy",
              "Predictive analytics that identify profitable customers before competitors can react",
              "Integration approaches that enhance existing underwriting systems without disruption",
              "Performance benchmarks from leading AI-enabled MCA providers"
            ].map((item, index) => (
              <div key={index} className="flex items-start p-4 bg-white/5 rounded-lg border border-white/10">
                <CheckCircle className="w-6 h-6 text-[#00839C] mr-4 flex-shrink-0 mt-1" />
                <span className="text-gray-300 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="text-center p-8 bg-gradient-to-r from-[#DB07b5]/20 to-[#E501E4]/20 rounded-2xl border border-[#DB07b5]/30">
            <p className="text-2xl font-bold text-white mb-2">
              The alternative lending industry stands at a technological crossroads.
            </p>
            <p className="text-xl text-gray-300">
              Companies implementing AI risk assessment today will define the future of merchant financing while those that delay face inevitable competitive displacement.
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
                  Get instant access to comprehensive insights that could transform your MCA operations
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
                    <span>Industry-leading intelligence</span>
                  </div>
                </div>
              </div>

              <div className="w-full h-[498px]">
                <iframe
                  src="https://link.mergemedia.ai/widget/form/vOwv7KueEIvZ8uCXgcyX"
                  style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
                  id="inline-vOwv7KueEIvZ8uCXgcyX-bottom"
                  title="MCA Whitepaper"
                ></iframe>
              </div>

              <p className="text-center text-gray-400 text-sm mt-8">
                Comprehensive analysis of AI applications in merchant cash advance risk assessment, decision-making automation, and compliance management, featuring documented case studies, performance metrics, and implementation strategies from leading alternative lending operations.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}