import React from 'react';
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
                  >
                  </iframe>
                  <script src="https://link.mergemedia.ai/js/form_embed.js"></script>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              The Data is Clear: AI Delivers <span className="gradient-text">Staggering Results</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {resultsCards.map((card, index) => (
              <div key={index} className="text-center p-6 bg-white/5 border border-white/10 rounded-2xl gradient-hover">
                <div className={`text-5xl font-bold mb-2 ${card.color}`}>{card.value}</div>
                <p className="text-gray-300">{card.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="py-20 px-6 bg-[#02012d]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Download This Whitepaper to Learn:
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {keyTakeaways.map((item, index) => (
              <Card key={index} className="dark-card gradient-hover">
                <CardContent className="p-8">
                  <div className="flex items-start">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#00839C]/20 to-[#DB07b5]/20 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 border border-white/10">
                      <item.icon className="w-8 h-8 text-[#00839C]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cost of Inaction */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#db07b5]/20 to-[#02012d]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <AlertTriangle className="w-8 h-8 text-[#db07b5] mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              The Widening Competitive Gap
            </h2>
          </div>
          <p className="text-xl text-gray-300 mb-8">
            This isn't about the future. It's about now. Every day you wait, your AI-enabled competitors are capturing market share, operating more efficiently, and building a lead that may soon be insurmountable.
          </p>
          <p className="text-lg text-[#db07b5] font-semibold">
            This whitepaper gives you the intelligence to act decisively.
          </p>
        </div>
      </section>

      {/* Addressing Concerns Section */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Addressing Common Concerns</h2>
          <div className="space-y-4">
            {concerns.map((item, index) => (
              <div key={index} className="p-6 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-2">{item.question}</h3>
                <p className="text-gray-300">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-20 px-6 bg-[#02012d]">
        <div className="max-w-4xl mx-auto text-center">
          <FileText className="w-16 h-16 text-[#00839C] mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Lead the Transformation in Your Market
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            The question isn't whether AI will transform your industry—it's whether you'll lead that transformation or be left behind by it.
          </p>
          
          <Button 
            onClick={() => {
              const form = document.getElementById('inline-FrU8I5nzBbqwT65Y8eGY');
              if (form) form.scrollIntoView({ behavior: 'smooth' });
            }}
            className="gradient-bg text-white px-12 py-4 text-xl font-bold rounded-full gradient-hover"
          >
            <Download className="w-6 h-6 mr-3" />
            Download the FREE Whitepaper
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