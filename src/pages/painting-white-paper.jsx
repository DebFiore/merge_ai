import React, { useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Download, TrendingUp, Paintbrush, Eye, AlertCircle, DollarSign } from 'lucide-react';

export default function PaintingWhitePaper() {
  useEffect(() => {
    const scriptId = 'ghl-painting-form-embed-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://link.mergemedia.ai/js/form_embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const bookCoverUrl = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68856cb8a9268423a353c4f4/1e95283b5_image_16f8dc4e-9d65-47b5-a929-3cf29a8d5efb.png";

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
              BREAKTHROUGH: AI Improves Painting Estimate Accuracy by 90%
              <span className="gradient-text block">While Reducing Project Costs 25%</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Download the FREE Industry Report: How Agentic AI is Transforming Color Matching, Project Estimation, and Quality Control in Professional Painting
            </p>
          </div>

          {/* Book Cover and Form Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Book Cover */}
            <div className="flex justify-center">
              <img 
                src={bookCoverUrl} 
                alt="Brushstrokes and Algorithms - Painting White Paper"
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
                    src="https://link.mergemedia.ai/widget/form/mImgv1DvqJ3CUG4XEydi"
                    style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
                    id="inline-mImgv1DvqJ3CUG4XEydi"
                    title="Painting Whitepaper"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The $8 Billion Accuracy Problem */}
      <section className="section-padding bg-[#02012d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Painting Industry's
              <span className="gradient-text block">$8 Billion Accuracy Problem</span>
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
                    <p className="text-gray-300"><span className="font-bold text-white">Traditional estimates are wrong 40-50% of the time</span>, leading to cost overruns and customer disputes</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-300"><span className="font-bold text-white">Color matching accuracy averages only 75%</span> using conventional methods and human eye assessment</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-300"><span className="font-bold text-white">Quality control relies on subjective visual inspection</span>, missing defects that cause expensive callbacks</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-300"><span className="font-bold text-white">Project scheduling accuracy is less than 60%</span> due to weather, material, and crew variables</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-300"><span className="font-bold text-white">Administrative tasks consume 30+ hours weekly</span> instead of productive painting time</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="dark-card border-[#00839C]/50">
              <CardContent className="p-8">
                <CheckCircle className="w-12 h-12 text-[#00839C] mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">The Solution</h3>
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  While traditional painting operations struggle with these limitations, AI-powered painting contractors are achieving 90% estimate accuracy, perfect color matching, and automated quality control that eliminates callbacks.
                </p>
                <div className="bg-gradient-to-r from-[#00839C]/20 to-[#DB07b5]/20 rounded-lg p-6 border border-[#00839C]/30">
                  <p className="text-white font-bold text-lg">
                    Download this report to discover how leading painting companies are transforming their operations with AI technology.
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
              Revolutionary Painting Technology
              <span className="gradient-text block">Delivering Proven Results</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="dark-card gradient-hover">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#00839C]/20 rounded-2xl flex items-center justify-center mb-6 border border-[#00839C]/30">
                  <TrendingUp className="w-8 h-8 text-[#00839C]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Intelligent Project Estimation</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#00839C] mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">AI analyzes photos, blueprints, and specifications to calculate precise material and labor requirements</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#00839C] mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">Machine learning accounts for surface conditions, prep work, and environmental factors automatically</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#00839C] mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">Predictive models adjust estimates based on historical project performance data</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="dark-card gradient-hover">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#DB07b5]/20 rounded-2xl flex items-center justify-center mb-6 border border-[#DB07b5]/30">
                  <Paintbrush className="w-8 h-8 text-[#DB07b5]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Advanced Color Matching Systems</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#DB07b5] mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">Computer vision technology matches colors with 99.7% accuracy using spectral analysis</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#DB07b5] mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">AI recommends optimal color combinations based on lighting conditions and design trends</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#DB07b5] mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">Automated paint mixing systems ensure consistent color reproduction across projects</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="dark-card gradient-hover">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#E501E4]/20 rounded-2xl flex items-center justify-center mb-6 border border-[#E501E4]/30">
                  <Eye className="w-8 h-8 text-[#E501E4]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Automated Quality Control</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#E501E4] mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">AI-powered visual inspection detects paint defects, coverage gaps, and finish inconsistencies</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#E501E4] mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">Machine learning identifies potential problem areas before they become visible to customers</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#E501E4] mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">Predictive maintenance alerts prevent equipment failures that compromise paint quality</p>
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
                  <p>• 90% improvement in project estimation accuracy reducing cost disputes</p>
                  <p>• 99.7% color matching precision eliminating customer dissatisfaction</p>
                  <p>• 65% reduction in callbacks through AI quality control systems</p>
                  <p>• 25% decrease in material waste via precise calculation algorithms</p>
                </div>
              </CardContent>
            </Card>

            <Card className="dark-card gradient-hover">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-[#DB07b5] mb-3">Technology Implementation Strategies</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>• AI estimation software integration with existing project management systems</p>
                  <p>• Computer vision deployment for automated surface analysis and color matching</p>
                  <p>• Quality control automation using machine learning defect detection</p>
                  <p>• Weather prediction integration for optimal scheduling and project planning</p>
                </div>
              </CardContent>
            </Card>

            <Card className="dark-card gradient-hover">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-[#E501E4] mb-3">Competitive Intelligence Analysis</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>• How leading painting contractors are using AI to dominate local markets</p>
                  <p>• Estimation methodologies that provide superior accuracy and customer satisfaction</p>
                  <p>• Quality control systems that eliminate expensive rework and callbacks</p>
                </div>
              </CardContent>
            </Card>

            <Card className="dark-card gradient-hover">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-[#00839C] mb-3">Real-World Industry Case Studies</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>• Residential contractors achieving 80% improvement in estimate accuracy</p>
                  <p>• Commercial companies reducing project timeline disputes by 70%</p>
                  <p>• Multi-location franchises saving $500,000 annually through standardized AI processes</p>
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
                <h3 className="text-2xl font-bold text-white mb-6">Residential Painting Contractors</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <DollarSign className="w-6 h-6 text-[#00839C] mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">80% improvement in estimate accuracy leading to 35% profit margin increase</p>
                  </div>
                  <div className="flex items-start">
                    <DollarSign className="w-6 h-6 text-[#00839C] mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">$150,000 annual savings through reduced material waste and rework</p>
                  </div>
                  <div className="flex items-start">
                    <DollarSign className="w-6 h-6 text-[#00839C] mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">95% customer satisfaction scores through perfect color matching</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="dark-card gradient-hover">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Commercial Painting Companies</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <DollarSign className="w-6 h-6 text-[#DB07b5] mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">70% reduction in project timeline disputes using AI scheduling optimization</p>
                  </div>
                  <div className="flex items-start">
                    <DollarSign className="w-6 h-6 text-[#DB07b5] mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">50% decrease in quality-related callbacks through automated inspection</p>
                  </div>
                  <div className="flex items-start">
                    <DollarSign className="w-6 h-6 text-[#DB07b5] mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">60% improvement in crew productivity via optimized project sequencing</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="dark-card gradient-hover">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Multi-Location Painting Franchises</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <DollarSign className="w-6 h-6 text-[#E501E4] mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">90% consistency in color matching across all franchise locations</p>
                  </div>
                  <div className="flex items-start">
                    <DollarSign className="w-6 h-6 text-[#E501E4] mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">$500,000 annual cost savings through standardized AI estimation processes</p>
                  </div>
                  <div className="flex items-start">
                    <DollarSign className="w-6 h-6 text-[#E501E4] mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">85% reduction in customer complaints related to project accuracy</p>
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
              The Competitive Reality
              <span className="gradient-text block">Check</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="dark-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Traditional Painting Operations Face:</h3>
                <div className="space-y-4">
                  <div className="flex items-start p-4 bg-red-400/10 rounded-lg border border-red-400/20">
                    <div className="text-2xl mr-3">❌</div>
                    <p className="text-gray-300">Inaccurate estimates causing customer disputes and profit erosion</p>
                  </div>
                  <div className="flex items-start p-4 bg-red-400/10 rounded-lg border border-red-400/20">
                    <div className="text-2xl mr-3">❌</div>
                    <p className="text-gray-300">Color matching inconsistencies damaging reputation and requiring rework</p>
                  </div>
                  <div className="flex items-start p-4 bg-red-400/10 rounded-lg border border-red-400/20">
                    <div className="text-2xl mr-3">❌</div>
                    <p className="text-gray-300">Manual quality control missing defects that create expensive callbacks</p>
                  </div>
                  <div className="flex items-start p-4 bg-red-400/10 rounded-lg border border-red-400/20">
                    <div className="text-2xl mr-3">❌</div>
                    <p className="text-gray-300">Weather delays and scheduling conflicts overwhelming manual planning systems</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="dark-card border-[#00839C]/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">AI-Enhanced Painting Companies Achieve:</h3>
                <div className="space-y-4">
                  <div className="flex items-start p-4 bg-[#00839C]/10 rounded-lg border border-[#00839C]/30">
                    <div className="text-2xl mr-3">✅</div>
                    <p className="text-gray-300">Precise estimates that build customer trust and ensure profitable projects</p>
                  </div>
                  <div className="flex items-start p-4 bg-[#00839C]/10 rounded-lg border border-[#00839C]/30">
                    <div className="text-2xl mr-3">✅</div>
                    <p className="text-gray-300">Perfect color matching that exceeds customer expectations consistently</p>
                  </div>
                  <div className="flex items-start p-4 bg-[#00839C]/10 rounded-lg border border-[#00839C]/30">
                    <div className="text-2xl mr-3">✅</div>
                    <p className="text-gray-300">Automated quality assurance preventing callbacks and protecting reputation</p>
                  </div>
                  <div className="flex items-start p-4 bg-[#00839C]/10 rounded-lg border border-[#00839C]/30">
                    <div className="text-2xl mr-3">✅</div>
                    <p className="text-gray-300">Predictive scheduling that optimizes productivity despite weather variables</p>
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
              Why Painting Companies
              <span className="gradient-text block">Can't Afford to Wait</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              The painting industry faces increasing competition and rising customer expectations for precision and professionalism. Early AI adopters are establishing operational advantages that traditional painters cannot match.
            </p>
          </div>

          <Card className="dark-card mb-12">
            <CardContent className="p-8">
              <div className="space-y-4">
                <div className="flex items-start">
                  <TrendingUp className="w-6 h-6 text-[#DB07b5] mr-4 flex-shrink-0 mt-1" />
                  <p className="text-gray-300"><span className="font-bold text-white">Estimation Accuracy</span> builds customer trust and ensures profitable project completion</p>
                </div>
                <div className="flex items-start">
                  <TrendingUp className="w-6 h-6 text-[#DB07b5] mr-4 flex-shrink-0 mt-1" />
                  <p className="text-gray-300"><span className="font-bold text-white">Color Matching Precision</span> creates superior customer satisfaction and referral generation</p>
                </div>
                <div className="flex items-start">
                  <TrendingUp className="w-6 h-6 text-[#DB07b5] mr-4 flex-shrink-0 mt-1" />
                  <p className="text-gray-300"><span className="font-bold text-white">Quality Control Excellence</span> eliminates callbacks and protects company reputation</p>
                </div>
                <div className="flex items-start">
                  <TrendingUp className="w-6 h-6 text-[#DB07b5] mr-4 flex-shrink-0 mt-1" />
                  <p className="text-gray-300"><span className="font-bold text-white">Operational Efficiency</span> reduces costs while improving project delivery consistency</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center p-8 bg-gradient-to-r from-[#DB07b5]/20 to-[#E501E4]/20 rounded-2xl border border-[#DB07b5]/30 mb-12">
            <p className="text-xl text-gray-300 mb-4">
              Implementation costs increase as demand grows across construction technology, making early adoption essential for competitive positioning.
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
              <span className="gradient-text block">This Report Provides</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              "How AI estimation algorithms account for surface conditions, prep work, and environmental factors",
              "Which computer vision systems provide optimal color matching accuracy for different paint types",
              "Automated quality control methodologies that prevent defects before customer inspection",
              "Predictive scheduling strategies that optimize crew productivity despite weather constraints",
              "Integration approaches for existing project management and estimating software",
              "Performance benchmarks from leading AI-enhanced painting contractors",
              "ROI calculations showing 150-300% returns within first year of implementation"
            ].map((item, index) => (
              <div key={index} className="flex items-start p-4 bg-white/5 rounded-lg border border-white/10">
                <CheckCircle className="w-6 h-6 text-[#00839C] mr-4 flex-shrink-0 mt-1" />
                <span className="text-gray-300 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="text-center p-8 bg-gradient-to-r from-[#DB07b5]/20 to-[#E501E4]/20 rounded-2xl border border-[#DB07b5]/30">
            <p className="text-2xl font-bold text-white mb-2">
              The painting industry stands at a technological transformation point.
            </p>
            <p className="text-xl text-gray-300">
              Contractors implementing AI estimation, color matching, and quality control today will dominate local markets while those that delay face inevitable competitive displacement.
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
                  Get instant access to comprehensive insights that could transform your painting operations
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
                  src="https://link.mergemedia.ai/widget/form/mImgv1DvqJ3CUG4XEydi"
                  style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
                  id="inline-mImgv1DvqJ3CUG4XEydi-bottom"
                  title="Painting Whitepaper"
                ></iframe>
              </div>

              <p className="text-center text-gray-400 text-sm mt-8">
                Comprehensive analysis of AI applications in painting project estimation, color matching technology, and automated quality control, featuring documented performance improvements, implementation strategies, and competitive positioning insights from leading technology-enabled painting contractors.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}