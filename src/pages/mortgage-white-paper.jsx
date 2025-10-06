import React, { useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Download, TrendingUp, FileText, Shield, AlertCircle, DollarSign } from 'lucide-react';

export default function MortgageWhitePaper() {
  useEffect(() => {
    const scriptId = 'ghl-mortgage-form-embed-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://link.mergemedia.ai/js/form_embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const bookCoverUrl = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68856cb8a9268423a353c4f4/a9dc90f39_image_26d62eb9-01d0-4e4d-a33c-75c823a99c3a.png";

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
              BREAKTHROUGH: AI Reduces Mortgage Processing Time by 60%
              <span className="gradient-text block">While Improving Approval Accuracy to 94%</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Download the FREE Industry Report: How Agentic AI is Revolutionizing Mortgage Processing, Risk Analysis, and Customer Experience
            </p>
          </div>

          {/* Book Cover and Form Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Book Cover */}
            <div className="flex justify-center">
              <img 
                src={bookCoverUrl} 
                alt="Digital Lending Evolution - Mortgage White Paper"
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
                    src="https://link.mergemedia.ai/widget/form/ISUWXh9E8pVDjcodEndY"
                    style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
                    id="inline-ISUWXh9E8pVDjcodEndY"
                    title="Mortgage Whitepaper"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The $18 Billion Efficiency Crisis */}
      <section className="section-padding bg-[#02012d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Mortgage Industry's
              <span className="gradient-text block">$18 Billion Efficiency Crisis</span>
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
                    <p className="text-gray-300"><span className="font-bold text-white">Average loan processing takes 45-60 days</span> while AI-enabled competitors close in 21-30 days</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-300"><span className="font-bold text-white">Manual document verification consumes 40% of operational costs</span> and creates processing bottlenecks</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-300"><span className="font-bold text-white">25-30% of qualified applications fall through</span> due to communication gaps and processing delays</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-300"><span className="font-bold text-white">TRID compliance documentation requires 20+ hours per loan</span> using traditional manual methods</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-300"><span className="font-bold text-white">Rate lock expirations kill 15% of deals</span> when processing exceeds 30-day windows</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="dark-card border-[#00839C]/50">
              <CardContent className="p-8">
                <CheckCircle className="w-12 h-12 text-[#00839C] mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">The Solution</h3>
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  While traditional mortgage operations struggle with these limitations, AI-powered lenders are processing loans 60% faster, reducing operational costs by 50%, and achieving 94% approval accuracy.
                </p>
                <div className="bg-gradient-to-r from-[#00839C]/20 to-[#DB07b5]/20 rounded-lg p-6 border border-[#00839C]/30">
                  <p className="text-white font-bold text-lg">
                    Download this report to discover how leading mortgage companies are transforming their operations with AI technology.
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
              Revolutionary Lending Technology
              <span className="gradient-text block">Delivering Proven Results</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="dark-card gradient-hover">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#00839C]/20 rounded-2xl flex items-center justify-center mb-6 border border-[#00839C]/30">
                  <FileText className="w-8 h-8 text-[#00839C]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Intelligent Document Processing</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#00839C] mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">AI extracts and verifies income data from tax returns, pay stubs, and bank statements in minutes</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#00839C] mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">Automated asset verification cross-references multiple financial sources instantly</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#00839C] mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">Machine learning detects document fraud with 97% accuracy</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="dark-card gradient-hover">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#DB07b5]/20 rounded-2xl flex items-center justify-center mb-6 border border-[#DB07b5]/30">
                  <TrendingUp className="w-8 h-8 text-[#DB07b5]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Advanced Risk Assessment Analytics</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#DB07b5] mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">Predictive models analyze 300+ data points beyond traditional credit metrics</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#DB07b5] mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">Real-time property valuation using AI-powered appraisal analysis</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#DB07b5] mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">Dynamic pricing optimization based on comprehensive risk assessment</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="dark-card gradient-hover">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#E501E4]/20 rounded-2xl flex items-center justify-center mb-6 border border-[#E501E4]/30">
                  <Shield className="w-8 h-8 text-[#E501E4]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Customer Experience Automation</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#E501E4] mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">24/7 AI agents provide loan status updates and answer borrower questions</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#E501E4] mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">Automated TRID disclosure generation and delivery with perfect timing compliance</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#E501E4] mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">Intelligent rate lock management that protects deals from market volatility</p>
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
                <h3 className="text-lg font-bold text-[#00839C] mb-3">Industry Transformation Data</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>• 60% reduction in processing time from 45 to 18 days</p>
                  <p>• 50% decrease in operational costs</p>
                  <p>• 94% approval accuracy vs. 78% industry average</p>
                  <p>• 40% improvement in borrower satisfaction</p>
                </div>
              </CardContent>
            </Card>

            <Card className="dark-card gradient-hover">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-[#DB07b5] mb-3">Technology Implementation Case Studies</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>• Regional banks achieving 25-day average closings</p>
                  <p>• Credit unions reducing underwriting time by 75%</p>
                  <p>• Mortgage brokers increasing loan volume 3x</p>
                  <p>• Non-bank lenders capturing market share through speed</p>
                </div>
              </CardContent>
            </Card>

            <Card className="dark-card gradient-hover">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-[#E501E4] mb-3">Competitive Intelligence Analysis</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>• How early AI adopters are dominating purchase money markets</p>
                  <p>• Risk assessment methodologies exceeding traditional underwriting</p>
                  <p>• Customer acquisition strategies leveraging processing speed</p>
                </div>
              </CardContent>
            </Card>

            <Card className="dark-card gradient-hover">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-[#00839C] mb-3">Implementation Strategies</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>• Integration approaches for existing LOS systems</p>
                  <p>• Performance benchmarks from AI-enabled lenders</p>
                  <p>• ROI calculations showing 200-400% returns in year one</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Real-World Performance Benchmarks */}
      <section className="section-padding bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Real-World
              <span className="gradient-text block">Performance Benchmarks</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="dark-card gradient-hover">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Community Banks</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <DollarSign className="w-6 h-6 text-[#00839C] mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">65% reduction in loan processing time using automated income verification</p>
                  </div>
                  <div className="flex items-start">
                    <DollarSign className="w-6 h-6 text-[#00839C] mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">$500,000 annual savings in operational costs via document automation</p>
                  </div>
                  <div className="flex items-start">
                    <DollarSign className="w-6 h-6 text-[#00839C] mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">35% increase in loan volume without additional underwriting staff</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="dark-card gradient-hover">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Credit Unions</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <DollarSign className="w-6 h-6 text-[#DB07b5] mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">80% improvement in member satisfaction through real-time loan status updates</p>
                  </div>
                  <div className="flex items-start">
                    <DollarSign className="w-6 h-6 text-[#DB07b5] mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">45% reduction in rate lock extensions and deal fallout</p>
                  </div>
                  <div className="flex items-start">
                    <DollarSign className="w-6 h-6 text-[#DB07b5] mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">90% accuracy in automated TRID compliance documentation</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="dark-card gradient-hover">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Independent Mortgage Companies</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <DollarSign className="w-6 h-6 text-[#E501E4] mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">4x faster income verification through AI tax return analysis</p>
                  </div>
                  <div className="flex items-start">
                    <DollarSign className="w-6 h-6 text-[#E501E4] mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">50% reduction in manual document review requirements</p>
                  </div>
                  <div className="flex items-start">
                    <DollarSign className="w-6 h-6 text-[#E501E4] mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">70% improvement in loan pipeline predictability and closing forecasts</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Competitive Landscape Reality */}
      <section className="section-padding bg-[#02012d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Competitive Landscape
              <span className="gradient-text block">Reality</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="dark-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Traditional Mortgage Operations Face:</h3>
                <div className="space-y-4">
                  <div className="flex items-start p-4 bg-red-400/10 rounded-lg border border-red-400/20">
                    <div className="text-2xl mr-3">❌</div>
                    <p className="text-gray-300">Slow manual processing losing deals to faster competitors</p>
                  </div>
                  <div className="flex items-start p-4 bg-red-400/10 rounded-lg border border-red-400/20">
                    <div className="text-2xl mr-3">❌</div>
                    <p className="text-gray-300">High operational costs from document-intensive workflows</p>
                  </div>
                  <div className="flex items-start p-4 bg-red-400/10 rounded-lg border border-red-400/20">
                    <div className="text-2xl mr-3">❌</div>
                    <p className="text-gray-300">Borrower frustration with lengthy approval processes</p>
                  </div>
                  <div className="flex items-start p-4 bg-red-400/10 rounded-lg border border-red-400/20">
                    <div className="text-2xl mr-3">❌</div>
                    <p className="text-gray-300">Compliance risks from manual TRID and QM documentation</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="dark-card border-[#00839C]/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">AI-Enabled Mortgage Companies Achieve:</h3>
                <div className="space-y-4">
                  <div className="flex items-start p-4 bg-[#00839C]/10 rounded-lg border border-[#00839C]/30">
                    <div className="text-2xl mr-3">✅</div>
                    <p className="text-gray-300">Sub-30-day processing times capturing time-sensitive purchase deals</p>
                  </div>
                  <div className="flex items-start p-4 bg-[#00839C]/10 rounded-lg border border-[#00839C]/30">
                    <div className="text-2xl mr-3">✅</div>
                    <p className="text-gray-300">Automated compliance reducing regulatory risk and operational costs</p>
                  </div>
                  <div className="flex items-start p-4 bg-[#00839C]/10 rounded-lg border border-[#00839C]/30">
                    <div className="text-2xl mr-3">✅</div>
                    <p className="text-gray-300">Superior borrower experience driving referral partnerships</p>
                  </div>
                  <div className="flex items-start p-4 bg-[#00839C]/10 rounded-lg border border-[#00839C]/30">
                    <div className="text-2xl mr-3">✅</div>
                    <p className="text-gray-300">Scalable operations handling volume growth without proportional staff increases</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Companies Can't Afford to Wait */}
      <section className="section-padding bg-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Mortgage Companies
              <span className="gradient-text block">Can't Afford to Wait</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              The mortgage industry is experiencing a fundamental shift in borrower expectations and competitive dynamics. Purchase money markets demand speed, while regulatory complexity continues increasing.
            </p>
          </div>

          <Card className="dark-card mb-12">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Early AI Adopters Are Establishing Processing Advantages That Traditional Lenders Cannot Match
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <TrendingUp className="w-6 h-6 text-[#DB07b5] mr-4 flex-shrink-0 mt-1" />
                  <p className="text-gray-300"><span className="font-bold text-white">Processing Speed Leadership</span> captures purchase deals in competitive markets</p>
                </div>
                <div className="flex items-start">
                  <TrendingUp className="w-6 h-6 text-[#DB07b5] mr-4 flex-shrink-0 mt-1" />
                  <p className="text-gray-300"><span className="font-bold text-white">Operational Efficiency</span> enables competitive pricing while maintaining margins</p>
                </div>
                <div className="flex items-start">
                  <TrendingUp className="w-6 h-6 text-[#DB07b5] mr-4 flex-shrink-0 mt-1" />
                  <p className="text-gray-300"><span className="font-bold text-white">Compliance Excellence</span> reduces regulatory risk in an increasingly complex environment</p>
                </div>
                <div className="flex items-start">
                  <TrendingUp className="w-6 h-6 text-[#DB07b5] mr-4 flex-shrink-0 mt-1" />
                  <p className="text-gray-300"><span className="font-bold text-white">Borrower Experience</span> superiority drives referral partnerships and market expansion</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center p-8 bg-gradient-to-r from-[#DB07b5]/20 to-[#E501E4]/20 rounded-2xl border border-[#DB07b5]/30 mb-12">
            <p className="text-xl text-gray-300 mb-4">
              Implementation costs rise as demand increases across financial services, making early adoption crucial for competitive survival.
            </p>
          </div>
        </div>
      </section>

      {/* Critical Industry Intelligence */}
      <section className="section-padding bg-[#02012d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Critical Industry Intelligence
              <span className="gradient-text block">This Report Provides</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              "How AI document processing reduces verification time from hours to minutes",
              "Which machine learning models provide optimal fraud detection for mortgage applications",
              "Automated TRID compliance strategies that eliminate timing violations",
              "Predictive analytics that identify loan approval probability within 24 hours",
              "Integration approaches for existing loan origination systems",
              "Performance benchmarks from leading AI-enabled mortgage lenders",
              "ROI calculations showing 200-400% returns within first year of implementation"
            ].map((item, index) => (
              <div key={index} className="flex items-start p-4 bg-white/5 rounded-lg border border-white/10">
                <CheckCircle className="w-6 h-6 text-[#00839C] mr-4 flex-shrink-0 mt-1" />
                <span className="text-gray-300 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="text-center p-8 bg-gradient-to-r from-[#DB07b5]/20 to-[#E501E4]/20 rounded-2xl border border-[#DB07b5]/30">
            <p className="text-2xl font-bold text-white mb-2">
              The mortgage industry stands at a digital transformation inflection point.
            </p>
            <p className="text-xl text-gray-300">
              Lenders implementing AI processing today will define the future of home financing while those that delay face inevitable market displacement.
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
                  Get instant access to comprehensive insights that could transform your mortgage operations
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
                  src="https://link.mergemedia.ai/widget/form/ISUWXh9E8pVDjcodEndY"
                  style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
                  id="inline-ISUWXh9E8pVDjcodEndY-bottom"
                  title="Mortgage Whitepaper"
                ></iframe>
              </div>

              <p className="text-center text-gray-400 text-sm mt-8">
                Comprehensive analysis of AI applications in mortgage processing, risk assessment, and customer experience optimization, featuring documented performance improvements, implementation strategies, and competitive positioning insights from leading digital mortgage operations.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}