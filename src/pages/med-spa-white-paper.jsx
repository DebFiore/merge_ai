import React, { useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Download, TrendingUp, Heart, ShieldCheck, AlertCircle, DollarSign } from 'lucide-react';

export default function MedSpaWhitePaper() {
  useEffect(() => {
    const scriptId = 'ghl-medspa-form-embed-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://link.mergemedia.ai/js/form_embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const bookCoverUrl = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68856cb8a9268423a353c4f4/2a241a272_image_96d12368-4266-462c-b6b8-ddaf39f87674.png";

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
              BREAKTHROUGH: AI Improves Med Spa Diagnostic Accuracy by 85%
              <span className="gradient-text block">While Enhancing Patient Safety Protocols</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Download the FREE Industry Report: How Agentic AI is Advancing Med Spa Diagnostics, Treatment Planning, and Patient Care Standards
            </p>
          </div>

          {/* Book Cover and Form Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Book Cover */}
            <div className="flex justify-center">
              <img 
                src={bookCoverUrl} 
                alt="Precision Aesthetics - Med Spa White Paper"
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
                    src="https://link.mergemedia.ai/widget/form/kL72KXOWjUlZM4Zq2CMj"
                    style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
                    id="inline-kL72KXOWjUlZM4Zq2CMj"
                    title="Med Spa Whitepaper"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Patient Care and Efficiency Challenge */}
      <section className="section-padding bg-[#02012d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Med Spa Industry's
              <span className="gradient-text block">Patient Care and Efficiency Challenge</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="dark-card">
              <CardContent className="p-8">
                <AlertCircle className="w-12 h-12 text-red-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">The Challenge</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-300"><span className="font-bold text-white">Traditional skin analysis relies on subjective visual assessment</span> with 30-40% variability between practitioners</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-300"><span className="font-bold text-white">Treatment planning takes 45+ minutes per consultation</span> using manual assessment methods</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-300"><span className="font-bold text-white">Patient education requires extensive one-on-one time</span> to explain complex treatment options and realistic outcomes</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-300"><span className="font-bold text-white">Appointment scheduling inefficiencies create 25% patient dissatisfaction</span> due to booking conflicts and wait times</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-300"><span className="font-bold text-white">Medical documentation and compliance tracking consume 20+ hours weekly</span> of clinical staff time</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="dark-card border-[#00839C]/50">
              <CardContent className="p-8">
                <CheckCircle className="w-12 h-12 text-[#00839C] mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">The Solution</h3>
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  While traditional med spa operations rely on manual processes, AI-enhanced practices are achieving superior diagnostic accuracy, streamlined patient care, and improved safety protocols.
                </p>
                <div className="bg-gradient-to-r from-[#00839C]/20 to-[#DB07b5]/20 rounded-lg p-6 border border-[#00839C]/30">
                  <p className="text-white font-bold text-lg">
                    Download this report to discover how leading med spas are transforming patient care and operational efficiency with AI technology.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advanced Medical Technology */}
      <section className="section-padding bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced Medical Technology
              <span className="gradient-text block">Delivering Proven Results</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="dark-card gradient-hover">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#00839C]/20 rounded-2xl flex items-center justify-center mb-6 border border-[#00839C]/30">
                  <TrendingUp className="w-8 h-8 text-[#00839C]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Intelligent Diagnostic Assessment</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#00839C] mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">AI-powered skin analysis provides consistent, objective measurements of skin conditions</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#00839C] mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">Machine learning algorithms identify treatment needs based on comprehensive skin health data</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#00839C] mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">Automated documentation ensures accurate patient records and treatment tracking</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="dark-card gradient-hover">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#DB07b5]/20 rounded-2xl flex items-center justify-center mb-6 border border-[#DB07b5]/30">
                  <Heart className="w-8 h-8 text-[#DB07b5]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Personalized Treatment Planning</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#DB07b5] mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">AI analyzes patient history, skin type, and treatment goals to recommend optimal care protocols</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#DB07b5] mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">Evidence-based treatment sequencing optimizes patient outcomes and safety</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#DB07b5] mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">Automated follow-up scheduling ensures proper treatment intervals and monitoring</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="dark-card gradient-hover">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#E501E4]/20 rounded-2xl flex items-center justify-center mb-6 border border-[#E501E4]/30">
                  <ShieldCheck className="w-8 h-8 text-[#E501E4]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Enhanced Patient Education</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#E501E4] mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">AI systems provide consistent, accurate information about treatment options and expected outcomes</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#E501E4] mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">Automated appointment scheduling optimizes provider availability and patient convenience</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#E501E4] mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">Intelligent reminder systems improve treatment compliance and follow-up attendance</p>
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
                <h3 className="text-lg font-bold text-[#00839C] mb-3">Clinical Improvement Data</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>• 85% improvement in diagnostic consistency through AI-powered skin analysis</p>
                  <p>• 60% reduction in consultation time while maintaining thoroughness</p>
                  <p>• 90% improvement in treatment planning accuracy and patient outcome prediction</p>
                  <p>• 75% increase in patient education effectiveness and informed consent quality</p>
                </div>
              </CardContent>
            </Card>

            <Card className="dark-card gradient-hover">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-[#DB07b5] mb-3">Operational Enhancement Strategies</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>• AI integration with existing practice management systems</p>
                  <p>• Automated patient intake and medical history documentation</p>
                  <p>• Intelligent scheduling optimization for maximum provider efficiency</p>
                  <p>• Evidence-based treatment protocol development and implementation</p>
                </div>
              </CardContent>
            </Card>

            <Card className="dark-card gradient-hover">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-[#E501E4] mb-3">Patient Care Excellence Analysis</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>• How leading med spas are using AI to improve patient safety and outcomes</p>
                  <p>• Treatment planning methodologies that enhance both efficacy and satisfaction</p>
                  <p>• Communication strategies that build patient trust through education</p>
                </div>
              </CardContent>
            </Card>

            <Card className="dark-card gradient-hover">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-[#00839C] mb-3">Real-World Implementation Examples</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>• Multi-location practices achieving 70% improvement in diagnostic consistency</p>
                  <p>• Dermatology-based practices reducing documentation time by 80%</p>
                  <p>• Independent operations improving patient education effectiveness by 75%</p>
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
              Real-World Med Spa
              <span className="gradient-text block">Implementation Examples</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="dark-card gradient-hover">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Multi-Location Med Spa Practices</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <DollarSign className="w-6 h-6 text-[#00839C] mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">70% improvement in diagnostic consistency across all locations</p>
                  </div>
                  <div className="flex items-start">
                    <DollarSign className="w-6 h-6 text-[#00839C] mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">$200,000 annual savings through streamlined operational processes</p>
                  </div>
                  <div className="flex items-start">
                    <DollarSign className="w-6 h-6 text-[#00839C] mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">85% patient satisfaction increase through enhanced education and communication</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="dark-card gradient-hover">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Dermatology-Based Aesthetic Practices</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <DollarSign className="w-6 h-6 text-[#DB07b5] mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">80% reduction in consultation documentation time using AI assistance</p>
                  </div>
                  <div className="flex items-start">
                    <DollarSign className="w-6 h-6 text-[#DB07b5] mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">65% improvement in treatment outcome prediction accuracy</p>
                  </div>
                  <div className="flex items-start">
                    <DollarSign className="w-6 h-6 text-[#DB07b5] mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">95% compliance rate with follow-up appointments through automated scheduling</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="dark-card gradient-hover">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Independent Med Spa Operations</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <DollarSign className="w-6 h-6 text-[#E501E4] mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">75% increase in patient education effectiveness using AI-powered visual aids</p>
                  </div>
                  <div className="flex items-start">
                    <DollarSign className="w-6 h-6 text-[#E501E4] mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">50% reduction in appointment scheduling conflicts through intelligent optimization</p>
                  </div>
                  <div className="flex items-start">
                    <DollarSign className="w-6 h-6 text-[#E501E4] mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">90% improvement in medical record accuracy and compliance documentation</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Clinical and Operational Reality */}
      <section className="section-padding bg-[#02012d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Clinical and
              <span className="gradient-text block">Operational Reality</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="dark-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Traditional Med Spa Operations Face:</h3>
                <div className="space-y-4">
                  <div className="flex items-start p-4 bg-red-400/10 rounded-lg border border-red-400/20">
                    <div className="text-2xl mr-3">❌</div>
                    <p className="text-gray-300">Inconsistent diagnostic assessment leading to suboptimal treatment planning</p>
                  </div>
                  <div className="flex items-start p-4 bg-red-400/10 rounded-lg border border-red-400/20">
                    <div className="text-2xl mr-3">❌</div>
                    <p className="text-gray-300">Time-intensive consultations limiting patient capacity and provider efficiency</p>
                  </div>
                  <div className="flex items-start p-4 bg-red-400/10 rounded-lg border border-red-400/20">
                    <div className="text-2xl mr-3">❌</div>
                    <p className="text-gray-300">Manual scheduling creating patient dissatisfaction and operational inefficiencies</p>
                  </div>
                  <div className="flex items-start p-4 bg-red-400/10 rounded-lg border border-red-400/20">
                    <div className="text-2xl mr-3">❌</div>
                    <p className="text-gray-300">Documentation burden reducing time available for direct patient care</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="dark-card border-[#00839C]/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">AI-Enhanced Med Spa Practices Achieve:</h3>
                <div className="space-y-4">
                  <div className="flex items-start p-4 bg-[#00839C]/10 rounded-lg border border-[#00839C]/30">
                    <div className="text-2xl mr-3">✅</div>
                    <p className="text-gray-300">Consistent, objective diagnostic assessment supporting informed treatment decisions</p>
                  </div>
                  <div className="flex items-start p-4 bg-[#00839C]/10 rounded-lg border border-[#00839C]/30">
                    <div className="text-2xl mr-3">✅</div>
                    <p className="text-gray-300">Streamlined consultations allowing more thorough patient care within efficient timeframes</p>
                  </div>
                  <div className="flex items-start p-4 bg-[#00839C]/10 rounded-lg border border-[#00839C]/30">
                    <div className="text-2xl mr-3">✅</div>
                    <p className="text-gray-300">Optimized scheduling that maximizes both patient satisfaction and provider productivity</p>
                  </div>
                  <div className="flex items-start p-4 bg-[#00839C]/10 rounded-lg border border-[#00839C]/30">
                    <div className="text-2xl mr-3">✅</div>
                    <p className="text-gray-300">Automated documentation ensuring compliance while freeing staff for patient-focused activities</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Practices Need This Intelligence */}
      <section className="section-padding bg-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Med Spa Practices
              <span className="gradient-text block">Need This Intelligence</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              The medical aesthetics industry continues evolving toward evidence-based care and enhanced patient safety standards. AI implementation supports these goals while improving operational efficiency.
            </p>
          </div>

          <Card className="dark-card mb-12">
            <CardContent className="p-8">
              <div className="space-y-4">
                <div className="flex items-start">
                  <TrendingUp className="w-6 h-6 text-[#DB07b5] mr-4 flex-shrink-0 mt-1" />
                  <p className="text-gray-300"><span className="font-bold text-white">Diagnostic Consistency</span> ensures all patients receive thorough, objective assessment regardless of practitioner</p>
                </div>
                <div className="flex items-start">
                  <TrendingUp className="w-6 h-6 text-[#DB07b5] mr-4 flex-shrink-0 mt-1" />
                  <p className="text-gray-300"><span className="font-bold text-white">Treatment Safety</span> is enhanced through evidence-based planning and automated monitoring protocols</p>
                </div>
                <div className="flex items-start">
                  <TrendingUp className="w-6 h-6 text-[#DB07b5] mr-4 flex-shrink-0 mt-1" />
                  <p className="text-gray-300"><span className="font-bold text-white">Patient Education</span> improves informed consent and realistic expectation setting</p>
                </div>
                <div className="flex items-start">
                  <TrendingUp className="w-6 h-6 text-[#DB07b5] mr-4 flex-shrink-0 mt-1" />
                  <p className="text-gray-300"><span className="font-bold text-white">Operational Efficiency</span> allows practices to provide superior care while maintaining profitability</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center p-8 bg-gradient-to-r from-[#DB07b5]/20 to-[#E501E4]/20 rounded-2xl border border-[#DB07b5]/30 mb-12">
            <p className="text-xl text-gray-300">
              Implementation approaches must prioritize patient safety, clinical outcomes, and ethical practice standards.
            </p>
          </div>
        </div>
      </section>

      {/* Critical Clinical Intelligence */}
      <section className="section-padding bg-[#02012d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Critical Clinical Intelligence
              <span className="gradient-text block">This Report Provides</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              "How AI diagnostic tools enhance rather than replace clinical expertise and judgment",
              "Which machine learning applications provide optimal support for skin analysis and treatment planning",
              "Patient communication strategies that improve education and informed consent processes",
              "Scheduling optimization that balances patient convenience with clinical requirements",
              "Documentation automation that maintains compliance while reducing administrative burden",
              "Integration approaches for existing practice management and electronic health record systems",
              "Performance metrics that measure both clinical outcomes and operational efficiency"
            ].map((item, index) => (
              <div key={index} className="flex items-start p-4 bg-white/5 rounded-lg border border-white/10">
                <CheckCircle className="w-6 h-6 text-[#00839C] mr-4 flex-shrink-0 mt-1" />
                <span className="text-gray-300 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="text-center p-8 bg-gradient-to-r from-[#DB07b5]/20 to-[#E501E4]/20 rounded-2xl border border-[#DB07b5]/30">
            <p className="text-2xl font-bold text-white mb-2">
              The medical aesthetics industry benefits from technology that supports clinical excellence
            </p>
            <p className="text-xl text-gray-300">
              while maintaining the highest standards of patient care and safety.
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
                  Get instant access to comprehensive insights that could transform your med spa operations
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
                    <span>Clinical and operational insights</span>
                  </div>
                </div>
              </div>

              <div className="w-full h-[498px]">
                <iframe
                  src="https://link.mergemedia.ai/widget/form/kL72KXOWjUlZM4Zq2CMj"
                  style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
                  id="inline-kL72KXOWjUlZM4Zq2CMj-bottom"
                  title="Med Spa Whitepaper"
                ></iframe>
              </div>

              <p className="text-center text-gray-400 text-sm mt-8">
                Comprehensive analysis of AI applications in medical aesthetics, focusing on diagnostic support, treatment planning optimization, and patient care enhancement while maintaining clinical standards and patient safety protocols.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}