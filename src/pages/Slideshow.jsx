import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const slides = [
  {
    title: "Transformative AI Agents for Lead Generation Agencies",
    subtitle: "OMNI-CHANNEL AGENTIC PLATFORM",
    content: "Purpose-built AI agents that automatically qualify and nurture every prospect across voice, text, and email — operating at scale 24/7/365."
  },
  {
    title: "The Challenge: Traditional Call Centers in Lead Generation",
    bullets: [
      "Manual Batch Processing: Time-consuming and inefficient lead verification processes limiting agency throughput",
      "High Operational Costs: Staffing, training, and management overhead significantly reduce profit margins at scale",
      "Inconsistent Performance: Human agents vary in efficiency, script adherence, and compliance across large lead volumes",
      "Limited Scalability: Cannot easily scale to handle thousands of daily leads without compromising quality",
      "Working Hour Limitations: Most call centers operate 8-10 hours/day, preventing 24/7 lead qualification capacity"
    ]
  },
  {
    title: "Our Solution: MERGE AI's Agentic Omni-Channel Platform",
    bullets: [
      "Intelligent AI Agents: Purpose-built for lead qualification across all communication channels at scale",
      "24/7/365 Operation: Never miss another qualified lead with around-the-clock automated outreach",
      "Omni-Channel Communication: Seamlessly integrates voice calls, SMS texts, and email outreach",
      "Full Compliance: Automated consent collection, TCPA compliance, and call recording",
      "Higher Conversion Rates: More leads verified and qualified at a fraction of traditional costs"
    ]
  },
  {
    title: "How It Works: Effortlessly Upload Your Lead Files",
    bullets: [
      "Simple CSV Upload: Securely transfer your lead data to your custom MERGELeads.ai dashboard",
      "Instant Processing: Leads are immediately prepared for outreach with zero manual configuration",
      "Enterprise Security: GDPR, CCPA, and industry-standard compliant data handling for all verticals",
      "Scheduled Uploads: Set daily, weekly, or custom upload schedules to match your lead generation flow",
      "Immediate Activation: Agentic AI begins qualification calls as soon as leads are uploaded"
    ]
  },
  {
    title: "Step 1: AI Voice Agent Verifies Every Lead",
    bullets: [
      "Automated Outreach: AI Voice Agent calls leads from your CSV file on your predefined schedule",
      "Interest Verification: Confirms product/service interests and specific needs with natural conversation",
      "Explicit 1:1 Consent: Obtains and documents clear consent for follow-up communications",
      "TCPA Compliance: Reads required disclosures consistently with every prospect",
      "Recorded Calls: Every verification is recorded for compliance and quality assurance"
    ]
  },
  {
    title: "Step 2: Seamless Data Handover to Your LMS",
    bullets: [
      "Intelligent Data Formatting: Our AI Data Agent automatically formats verified information into pre-fill URLs or API calls",
      "Direct LMS Integration: Verified lead data posts directly into your existing Lead Management System without manual intervention",
      "Post-Submission Automation: The Data Agent navigates your LMS portal and completes any additional required steps",
      "Client Matching: Intelligent matching pushes verified leads to appropriate businesses based on buyer criteria",
      "Compliance Assurance: Every step is recorded, documented, and TCPA compliant for audit readiness"
    ]
  },
  {
    title: "Step 3: Real-Time Monitoring & Quality Control",
    bullets: [
      "Live Dashboard: Monitor lead verification rates, conversion statistics, and system performance in real-time",
      "Quality Assurance: Every AI interaction is logged, recorded, and available for compliance review",
      "Performance Analytics: Track ROI, lead quality scores, and conversion metrics across all campaigns",
      "Instant Notifications: Get alerts for high-priority leads, system issues, or compliance concerns",
      "Custom Reporting: Generate detailed reports for clients showing lead verification and conversion data"
    ]
  },
  {
    title: "The Results: Transform Your Agency Operations",
    bullets: [
      "10x Faster Processing: AI agents process thousands of leads simultaneously, not sequentially",
      "90% Cost Reduction: Eliminate staffing costs while increasing throughput and consistency",
      "24/7 Operations: Never miss a qualified lead regardless of time zones or business hours",
      "Higher Lead Quality: AI consistency ensures every lead meets your exact qualification criteria",
      "Scalable Growth: Handle 10x more leads without proportional increases in operational costs"
    ]
  },
  {
    title: "Ready to Transform Your Lead Generation Agency?",
    subtitle: "Let the AI verify the leads. You close the deals.",
    content: "Join the agencies already scaling with MERGE AI's agentic platform. Schedule a demo to see how we can transform your lead verification process."
  }
];

export default function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const slide = slides[currentSlide];

  return (
    <div className="fixed inset-0 bg-[#02012d] z-[100] flex flex-col items-center justify-center text-white">
      <Link to={createPageUrl("Home")} className="absolute top-4 right-4 z-50">
        <Button variant="ghost" size="icon" className="bg-white/10 hover:bg-white/20 rounded-full">
          <X className="w-6 h-6" />
        </Button>
      </Link>
      
      <div className="w-full h-full flex flex-col justify-center items-center text-center p-8 md:p-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-5xl leading-tight">
          {slide.title}
        </h1>
        
        {slide.subtitle && (
          <p className="text-2xl md:text-3xl text-[#DB07b5] mb-8">
            {slide.subtitle}
          </p>
        )}
        
        {slide.content && (
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl leading-relaxed">
            {slide.content}
          </p>
        )}
        
        {slide.bullets && (
          <div className="max-w-5xl">
            <ul className="space-y-6 text-left text-lg md:text-xl text-gray-300">
              {slide.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-[#DB07b5] mr-4 mt-1 text-2xl">◆</span>
                  <span className="leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {currentSlide === slides.length - 1 && (
          <div className="mt-12">
            <Button data-form-trigger="true" className="bg-[#DB07b5] text-white px-12 py-6 rounded-full text-2xl font-semibold hover:bg-[#DB07b5]/90 transition-colors">
              Schedule a Demo
            </Button>
          </div>
        )}
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-center z-10">
        <div className="flex items-center gap-4 bg-black/50 backdrop-blur-sm p-2 rounded-full border border-white/10">
          <Button variant="ghost" size="icon" onClick={prevSlide} className="rounded-full hover:bg-white/20">
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <span className="font-medium text-sm w-16 text-center">
            {currentSlide + 1} / {slides.length}
          </span>
          <Button variant="ghost" size="icon" onClick={nextSlide} className="rounded-full hover:bg-white/20">
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </div>
  );
}