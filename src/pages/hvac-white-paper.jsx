import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  FileText,
  TrendingUp,
  DollarSign,
  Zap,
  Clock,
  CheckCircle,
  Download,
  AlertTriangle
} from 'lucide-react';

export default function HVACWhitePaperPage() {
  const whitepaperCoverUrl = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68856cb8a9268423a353c4f4/75b459750_image_17568c36-72de-484f-9aa0-4b847458fc19.png";

  useEffect(() => {
    const scriptId = 'ghl-hvac-whitepaper-form-embed-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://link.mergemedia.ai/js/form_embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const keyTakeaways = [
    {
      icon: TrendingUp,
      title: "Market Reality: Speed Wins",
      description: "Discover why the first response wins the job and how AI ensures you're always first."
    },
    {
      icon: DollarSign,
      title: "Quantifiable ROI",
      description: "See the exact formulas and metrics to calculate the revenue you're losing and the profits you can gain."
    },
    {
      icon: Zap,
      title: "Real-World Case Studies",
      description: "In-depth analysis of HVAC companies generating up to 6,000%+ ROI with AI automation."
    },
    {
      icon: Clock,
      title: "A Practical Roadmap",
      description: "A step-by-step implementation guide to integrate AI without disrupting your operations."
    }
  ];

  const resultsCards = [
    {
      value: "11-30%",
      label: "Monthly Revenue Gains",
      color: "text-[#00839C]"
    },
    {
      value: "6,000%+",
      label: "Return on Investment",
      color: "text-[#DB07b5]"
    },
    {
      value: "26%",
      label: "Missed Calls Converted",
      color: "text-[#E501E4]"
    },
    {
      value: "3x",
      label: "Increase in Appointments",
      color: "text-white"
    }
  ];

  const concerns = [
    {
      question: "Cost & ROI Uncertainty",
      answer: "This whitepaper provides a clear financial model to project your ROI, with case studies showing returns exceeding 6,000%."
    },
    {
      question: "Implementation Disruption",
      answer: "Learn about our phased, 'white glove' approach that integrates with your existing systems seamlessly, requiring zero technical lift from your team."
    },
    {
      question: "Technology Isn't Mature Enough",
      answer: "The data from hundreds of successful implementations proves the technology is not just mature, but a significant competitive advantage."
    },
    {
      question: "Will it sound like a robot?",
      answer: "Advanced voice AI captures the nuance of human conversation, ensuring your customers have a natural and positive experience."
    }
  ];

  return (
    <div className="min-h-screen bg-[#02012d] text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-[#00839C]/20 to-[#02012d]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              The AI Revolution Transforming
              <span className="text-[#00839C] block">HVAC Businesses</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              A comprehensive guide with real-world benefits, ROI calculations, and implementation success stories for HVAC contractors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mt-16 text-left">
            {/* Left Column: Whitepaper Image */}
            <div className="flex items-center justify-center">
              <img 
                src={whitepaperCoverUrl}
                alt="The AI Revolution Transforming HVAC Businesses Whitepaper"
                className="w-full max-w-md rounded-lg shadow-2xl"
              />
            </div>

            {/* Right Column: Form */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-4 sm:p-8">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Download Your FREE Whitepaper</h3>
              <div className="h-[503px]">
                <iframe
                  src="https://link.mergemedia.ai/widget/form/FrU8I5nzBbqwT65Y8eGY"
                  style={{width:'100%', height:'100%', border:'none', borderRadius:'3px'}}
                  id="inline-FrU8I5nzBbqwT65Y8eGY" 
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="HVAC Whitepaper"
                  data-height="503"
                  data-layout-iframe-id="inline-FrU8I5nzBbqwT65Y8eGY"
                  data-form-id="FrU8I5nzBbqwT65Y8eGY"
                  title="HVAC Whitepaper"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Proven Results from Real HVAC Companies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See the measurable impact AI is having on HVAC businesses nationwide
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {resultsCards.map((result, index) => (
              <Card key={index} className="dark-card text-center">
                <CardContent className="p-8">
                  <div className={`text-4xl md:text-5xl font-bold mb-4 ${result.color}`}>
                    {result.value}
                  </div>
                  <p className="text-gray-300 text-lg">{result.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Takeaways Section */}
      <section className="py-20 bg-[#02012d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What You'll Learn Inside
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Essential insights and actionable strategies for HVAC business transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {keyTakeaways.map((takeaway, index) => (
              <Card key={index} className="dark-card gradient-hover">
                <CardContent className="p-8">
                  <div className="flex items-start mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#00839C] to-[#DB07b5] rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                      <takeaway.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">{takeaway.title}</h3>
                      <p className="text-gray-300 text-lg leading-relaxed">{takeaway.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Concerns Section */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Addressing Your Concerns
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The whitepaper tackles the most common hesitations about AI adoption
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {concerns.map((concern, index) => (
              <Card key={index} className="dark-card gradient-hover">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <AlertTriangle className="w-6 h-6 text-[#DB07b5] mr-3" />
                    {concern.question}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{concern.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-[#02012d]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-[#00839C] to-[#DB07b5] rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Download className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your HVAC Business?
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Download the whitepaper now and discover how AI can revolutionize your customer service, boost your revenue, and give you a competitive edge.
          </p>
          
          <Button data-form-trigger="true" className="gradient-bg text-white px-12 py-4 rounded-full text-lg font-medium gradient-hover">
            Get Your FREE Whitepaper Now
          </Button>
        </div>
      </section>
    </div>
  );
}