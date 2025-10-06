import React, { useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Download, TrendingUp, Sun, Zap, AlertCircle, DollarSign } from 'lucide-react';

export default function SolarWhitePaper() {
  useEffect(() => {
    const scriptId = 'ghl-solar-form-embed-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://link.mergemedia.ai/js/form_embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const bookCoverUrl = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68856cb8a9268423a353c4f4/09fb59a3d_image_ab23063c-5aeb-4e6b-a874-68c06d4515f0.png";

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
              BREAKTHROUGH: AI Increases Solar Energy Production by 35%
              <span className="gradient-text block">While Reducing Grid Management Costs</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Download the FREE Industry Report: How Agentic AI is Revolutionizing Solar Energy Optimization and Grid Integration
            </p>
          </div>

          {/* Book Cover and Form Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Book Cover */}
            <div className="flex justify-center">
              <img 
                src={bookCoverUrl} 
                alt="Harvesting Intelligence - Solar White Paper"
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
                    src="https://link.mergemedia.ai/widget/form/UiMQncZrVHHigem9wPNQ"
                    style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
                    id="inline-UiMQncZrVHHigem9wPNQ"
                    title="Solar Whitepaper"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The $25 Billion Efficiency Problem */}
      <section className="section-padding bg-[#02012d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Solar Industry's
              <span className="gradient-text block">$25 Billion Efficiency Problem</span>
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
                    <p className="text-gray-300"><span className="font-bold text-white">Traditional solar systems operate at only 65-75% potential efficiency</span> due to manual monitoring and reactive maintenance</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-300"><span className="font-bold text-white">Grid integration challenges cost utilities $8 billion annually</span> in stability and optimization issues</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-300"><span className="font-bold text-white">Solar installers lose 40-50% of leads</span> due to complex education requirements and financing confusion</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-300"><span className="font-bold text-white">System downtime averages 15-20 days annually</span> from delayed fault detection and maintenance scheduling</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="dark-card border-[#00839C]/50">
              <CardContent className="p-8">
                <CheckCircle className="w-12 h-12 text-[#00839C] mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">The Solution</h3>
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  While traditional solar operations struggle with these limitations, AI-enabled companies are optimizing energy production, automating grid management, and capturing revenue that competitors lose.
                </p>
                <div className="bg-gradient-to-r from-[#00839C]/20 to-[#DB07b5]/20 rounded-lg p-6 border border-[#00839C]/30">
                  <p className="text-white font-bold text-lg">
                    Download this report to discover how leading solar companies are transforming their operations with AI technology.
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
                  <Sun className="w-8 h-8 text-[#00839C]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Intelligent Energy Production Optimization</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#00839C] mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">AI algorithms predict weather patterns and adjust panel positioning automatically</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#00839C] mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">Real-time performance monitoring identifies efficiency losses within minutes</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#00839C] mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">Machine learning optimizes energy storage and grid distribution continuously</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="dark-card gradient-hover">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#DB07b5]/20 rounded-2xl flex items-center justify-center mb-6 border border-[#DB07b5]/30">
                  <Zap className="w-8 h-8 text-[#DB07b5]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Advanced Grid Management Integration</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#DB07b5] mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">Predictive load balancing that maintains grid stability during peak demand</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#DB07b5] mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">Automated demand response that maximizes revenue during high-value periods</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#DB07b5] mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">Smart inverter coordination that prevents grid overload and equipment damage</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="dark-card gradient-hover">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#E501E4]/20 rounded-2xl flex items-center justify-center mb-6 border border-[#E501E4]/30">
                  <TrendingUp className="w-8 h-8 text-[#E501E4]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Customer Acquisition and Education Automation</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#E501E4] mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">AI agents explain complex solar concepts and financing options instantly</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#E501E4] mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">Automated ROI calculations based on specific location and usage patterns</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#E501E4] mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">Intelligent system design that optimizes for customer needs and local regulations</p>
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
                <h3 className="text-lg font-bold text-[#00839C] mb-3">Real-World Performance Data</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>• 35% increase in energy production through AI-optimized panel positioning</p>
                  <p>• 60% reduction in system downtime via predictive maintenance</p>
                  <p>• 45% improvement in grid stability through intelligent load management</p>
                  <p>• 3x higher customer conversion rates with AI-powered education systems</p>
                </div>
              </CardContent>
            </Card>

            <Card className="dark-card gradient-hover">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-[#DB07b5] mb-3">Technology Implementation Strategies</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>• IoT sensor deployment for comprehensive system monitoring</p>
                  <p>• Machine learning algorithms for weather prediction and energy forecasting</p>
                  <p>• Grid integration protocols for seamless utility coordination</p>
                  <p>• Customer communication automation for complex solar sales cycles</p>
                </div>
              </CardContent>
            </Card>

            <Card className="dark-card gradient-hover">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-[#E501E4] mb-3">Financial Impact Analysis</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>• ROI improvements ranging from 200-400% within first year of implementation</p>
                  <p>• Cost reduction opportunities in maintenance, grid management, and customer acquisition</p>
                  <p>• Revenue optimization through peak demand trading and grid services</p>
                </div>
              </CardContent>
            </Card>

            <Card className="dark-card gradient-hover">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-[#00839C] mb-3">Industry Transformation Case Studies</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>• Commercial solar operations achieving 45% maintenance cost reduction</p>
                  <p>• Residential providers improving conversion rates by 3x</p>
                  <p>• Utility grid management saving $500,000 annually</p>
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
              Industry Transformation
              <span className="gradient-text block">Case Studies</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="dark-card gradient-hover">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Commercial Solar Operations</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <DollarSign className="w-6 h-6 text-[#00839C] mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">45% reduction in maintenance costs through predictive analytics</p>
                  </div>
                  <div className="flex items-start">
                    <DollarSign className="w-6 h-6 text-[#00839C] mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">$200,000 annual savings from automated grid optimization</p>
                  </div>
                  <div className="flex items-start">
                    <DollarSign className="w-6 h-6 text-[#00839C] mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">80% improvement in system uptime and energy reliability</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="dark-card gradient-hover">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Residential Solar Providers</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <DollarSign className="w-6 h-6 text-[#DB07b5] mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">3x lead conversion improvement through AI customer education</p>
                  </div>
                  <div className="flex items-start">
                    <DollarSign className="w-6 h-6 text-[#DB07b5] mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">50% reduction in site assessment time using satellite analysis</p>
                  </div>
                  <div className="flex items-start">
                    <DollarSign className="w-6 h-6 text-[#DB07b5] mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">90% customer satisfaction with automated system monitoring</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="dark-card gradient-hover">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Utility Grid Management</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <DollarSign className="w-6 h-6 text-[#E501E4] mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">60% improvement in renewable energy integration efficiency</p>
                  </div>
                  <div className="flex items-start">
                    <DollarSign className="w-6 h-6 text-[#E501E4] mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">$500,000 annual savings in grid stability management</p>
                  </div>
                  <div className="flex items-start">
                    <DollarSign className="w-6 h-6 text-[#E501E4] mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">40% reduction in peak demand stress through predictive load balancing</p>
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
              <span className="gradient-text block">Reality</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="dark-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Traditional Solar Operations Struggle With:</h3>
                <div className="space-y-4">
                  <div className="flex items-start p-4 bg-red-400/10 rounded-lg border border-red-400/20">
                    <div className="text-2xl mr-3">❌</div>
                    <p className="text-gray-300">Manual system monitoring that misses efficiency opportunities</p>
                  </div>
                  <div className="flex items-start p-4 bg-red-400/10 rounded-lg border border-red-400/20">
                    <div className="text-2xl mr-3">❌</div>
                    <p className="text-gray-300">Reactive maintenance causing extended downtime periods</p>
                  </div>
                  <div className="flex items-start p-4 bg-red-400/10 rounded-lg border border-red-400/20">
                    <div className="text-2xl mr-3">❌</div>
                    <p className="text-gray-300">Complex customer education creating high abandonment rates</p>
                  </div>
                  <div className="flex items-start p-4 bg-red-400/10 rounded-lg border border-red-400/20">
                    <div className="text-2xl mr-3">❌</div>
                    <p className="text-gray-300">Grid integration challenges limiting revenue potential</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="dark-card border-[#00839C]/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">AI-Enabled Solar Companies Achieve:</h3>
                <div className="space-y-4">
                  <div className="flex items-start p-4 bg-[#00839C]/10 rounded-lg border border-[#00839C]/30">
                    <div className="text-2xl mr-3">✅</div>
                    <p className="text-gray-300">Continuous system optimization maximizing energy production</p>
                  </div>
                  <div className="flex items-start p-4 bg-[#00839C]/10 rounded-lg border border-[#00839C]/30">
                    <div className="text-2xl mr-3">✅</div>
                    <p className="text-gray-300">Predictive maintenance preventing costly failures</p>
                  </div>
                  <div className="flex items-start p-4 bg-[#00839C]/10 rounded-lg border border-[#00839C]/30">
                    <div className="text-2xl mr-3">✅</div>
                    <p className="text-gray-300">Automated customer education improving conversion rates</p>
                  </div>
                  <div className="flex items-start p-4 bg-[#00839C]/10 rounded-lg border border-[#00839C]/30">
                    <div className="text-2xl mr-3">✅</div>
                    <p className="text-gray-300">Smart grid integration capturing premium revenue opportunities</p>
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
              Why Solar Companies
              <span className="gradient-text block">Can't Afford to Wait</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              The solar industry is experiencing unprecedented growth, but efficiency and grid integration challenges threaten profitability. Early AI adopters are establishing competitive advantages that become more difficult to challenge over time.
            </p>
          </div>

          <Card className="dark-card mb-12">
            <CardContent className="p-8">
              <div className="space-y-4">
                <div className="flex items-start">
                  <TrendingUp className="w-6 h-6 text-[#DB07b5] mr-4 flex-shrink-0 mt-1" />
                  <p className="text-gray-300"><span className="font-bold text-white">Technology Leadership</span> attracts customers seeking maximum energy production</p>
                </div>
                <div className="flex items-start">
                  <TrendingUp className="w-6 h-6 text-[#DB07b5] mr-4 flex-shrink-0 mt-1" />
                  <p className="text-gray-300"><span className="font-bold text-white">Grid Integration Excellence</span> unlocks premium revenue streams from utilities</p>
                </div>
                <div className="flex items-start">
                  <TrendingUp className="w-6 h-6 text-[#DB07b5] mr-4 flex-shrink-0 mt-1" />
                  <p className="text-gray-300"><span className="font-bold text-white">Operational Efficiency</span> enables competitive pricing while maintaining margins</p>
                </div>
                <div className="flex items-start">
                  <TrendingUp className="w-6 h-6 text-[#DB07b5] mr-4 flex-shrink-0 mt-1" />
                  <p className="text-gray-300"><span className="font-bold text-white">Customer Experience</span> differentiation drives referral networks and market expansion</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center p-8 bg-gradient-to-r from-[#DB07b5]/20 to-[#E501E4]/20 rounded-2xl border border-[#DB07b5]/30 mb-12">
            <p className="text-xl text-gray-300 mb-4">
              Implementation costs rise as demand increases across the renewable energy sector, making early adoption crucial for competitive positioning.
            </p>
          </div>
        </div>
      </section>

      {/* Critical Intelligence */}
      <section className="section-padding bg-[#02012d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Critical Intelligence
              <span className="gradient-text block">This Report Provides</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              "How AI optimization increases solar energy production beyond traditional limits",
              "Which machine learning algorithms work best for weather prediction and load forecasting",
              "Grid integration strategies that unlock new revenue opportunities",
              "Customer education automation that converts complex solar sales",
              "Predictive maintenance systems that prevent costly downtime",
              "Performance analytics that optimize everything from panel placement to energy storage"
            ].map((item, index) => (
              <div key={index} className="flex items-start p-4 bg-white/5 rounded-lg border border-white/10">
                <CheckCircle className="w-6 h-6 text-[#00839C] mr-4 flex-shrink-0 mt-1" />
                <span className="text-gray-300 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="text-center p-8 bg-gradient-to-r from-[#DB07b5]/20 to-[#E501E4]/20 rounded-2xl border border-[#DB07b5]/30">
            <p className="text-2xl font-bold text-white mb-2">
              The solar industry stands at a technological inflection point.
            </p>
            <p className="text-xl text-gray-300">
              Companies that implement AI today will lead the renewable energy revolution while those that delay risk technological obsolescence.
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
                  Get instant access to comprehensive insights that could transform your solar operations
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
                  src="https://link.mergemedia.ai/widget/form/UiMQncZrVHHigem9wPNQ"
                  style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
                  id="inline-UiMQncZrVHHigem9wPNQ-bottom"
                  title="Solar Whitepaper"
                ></iframe>
              </div>

              <p className="text-center text-gray-400 text-sm mt-8">
                Comprehensive analysis of AI applications in solar energy production, grid management, and customer operations, featuring real-world implementations, performance data, and strategic recommendations for maximizing renewable energy efficiency and profitability.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}