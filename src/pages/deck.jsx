import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const slides = [
  {
    title: "What If You Never Missed Another Qualified Lead Again?",
    subtitle: "MERGE AI - Omni-Channel Agentic AI Platform",
    content: "Purpose-built AI agents that automatically qualify and nurture every prospect across voice, text, and email — 24/7/365.",
    features: [
      "Never miss an opportunity",
      "Never lose a lead", 
      "Always deliver exceptional service"
    ]
  },
  {
    title: "Welcome & Agenda",
    subtitle: "Today we'll explore how MERGE AI transforms your customer interactions, boosts revenue, and delivers ROI within months.",
    bullets: [
      "The Challenge: Missed Opportunities & Inefficiencies - Industry-specific pain points and their business impact",
      "MERGE AI: The Omni-Channel AI Solution - Platform capabilities and how they transform your operations", 
      "Real Results & ROI - Customer success stories and financial impact metrics",
      "Implementation & Next Steps - Simple adoption process and action plan"
    ]
  },
  {
    title: "The Missed Opportunity Epidemic",
    subtitle: "Businesses across industries lose millions in revenue from missed leads, slow responses, and inefficient processes",
    stats: [
      { number: "85%", label: "of customers won't give businesses a second chance after missing their call" },
      { number: "42%", label: "revenue loss from inadequate lead response systems" },
      { number: "5 min", label: "response window before lead conversion rates drop by 80%" }
    ],
    industryImpact: [
      { industry: "Real Estate", percentage: "78%" },
      { industry: "Insurance", percentage: "65%" },
      { industry: "Healthcare", percentage: "72%" },
      { industry: "Home Services", percentage: "83%" }
    ]
  },
  {
    title: "Industry Pain Points",
    subtitle: "Each industry faces unique challenges that impact revenue, efficiency, and customer satisfaction",
    industries: [
      {
        name: "Real Estate",
        issues: ["Lead Response Time - 78% of leads lost due to delayed follow-up", "Manual Qualification - Agents waste 15+ hours weekly screening", "Scheduling Issues - Multiple touchpoints for appointments"]
      },
      {
        name: "Mortgage Brokers", 
        issues: ["Application Follow-up - Complex processes causing delays", "Time-Sensitive Approvals - Missed deadlines costing deals", "Regulatory Compliance - Manual processes increasing risk"]
      },
      {
        name: "Insurance",
        issues: ["High-Volume Service - Wait times increasing churn by 35%", "Claims Processing - Manual workflows causing delays", "Policy Renewals - Missed opportunities for updates"]
      },
      {
        name: "Home Services",
        issues: ["Missed Calls - 85% won't call back after first attempt", "Seasonal Demand - Staffing challenges in peak periods", "Emergency Response - Critical response time issues"]
      },
      {
        name: "Health & Wellness",
        issues: ["Appointment No-Shows - 20-30% rate causing revenue loss", "After-Hours Support - Limited availability frustrating clients", "Client Engagement - Inconsistent follow-up"]
      },
      {
        name: "Medical Offices",
        issues: ["High Call Volumes - Staff overwhelmed by inquiries", "Prescription Refills - Administrative burden delaying care", "Staff Burnout - Repetitive tasks reducing service"]
      }
    ]
  },
  {
    title: "Barriers to AI Adoption",
    subtitle: "Organizations face these common challenges when adopting AI solutions - MERGE AI addresses each one",
    barriers: [
      {
        concern: "Data Accuracy",
        stat: "45% worry about AI accuracy and bias",
        solution: "Quality controls with human oversight"
      },
      {
        concern: "Expertise Gap", 
        stat: "42% lack necessary AI expertise",
        solution: "Full implementation support & training"
      },
      {
        concern: "ROI Concerns",
        stat: "42% struggle to justify AI investments", 
        solution: "Clear ROI with 2-month payback timeline"
      },
      {
        concern: "Privacy Concerns",
        stat: "40% worry about compliance issues",
        solution: "Enterprise security & compliance frameworks"
      },
      {
        concern: "Data Limitations",
        stat: "42% believe they lack sufficient data",
        solution: "Pre-built industry-specific models"
      },
      {
        concern: "Implementation Risk",
        stat: "Teams resist change & fear disruption", 
        solution: "Phased approach with minimal disruption"
      }
    ]
  },
  {
    title: "Why MERGE AI: The New Agentic Standard",
    subtitle: "We've built the most intelligent, responsive, and effective AI communication platform with a proven track record of delivering measurable results across industries.",
    features: [
      {
        title: "Deep AI Expertise",
        description: "Built by AI pioneers with 15+ years of experience in machine learning, NLP, and conversational design. Our platform understands context, handles complex interactions, and continuously self-improves."
      },
      {
        title: "Proven ROI", 
        description: "Our clients see payback within 3-6 months with average conversion increases of 35%, administrative time savings of 20+ hours weekly, and 24/7 coverage without additional staffing costs."
      },
      {
        title: "Enterprise-Grade Security & Compliance",
        description: "SOC 2 Type II certified with HIPAA, GDPR, and CCPA compliance. Bank-level encryption, secure data handling, and transparent AI governance frameworks for peace of mind."
      }
    ]
  },
  {
    title: "MERGE AI Platform – Core Capabilities", 
    subtitle: "Seamless omni-channel communication through purpose-built AI agents that qualify and nurture every prospect",
    capabilities: [
      {
        title: "Omni-Channel Communication",
        features: ["Voice calls with natural conversation", "SMS texting for quick responses", "Email engagement with rich content", "Channel preference discovery"]
      },
      {
        title: "24/7 AI Agents",
        features: ["Never miss a lead or inquiry", "Consistent quality across interactions", "Smart lead qualification", "High-volume concurrent handling"]
      },
      {
        title: "Intelligent Scheduling",
        features: ["Calendar sync with major platforms", "Automated appointment booking", "Smart reminder system", "Rescheduling without friction"]
      },
      {
        title: "Live Transfer", 
        features: ["Seamless handoff to human agents", "Intelligent qualification before transfer", "Complete context provided to staff", "Priority routing for hot leads"]
      },
      {
        title: "Multilingual Support",
        features: ["Communication in 12 languages", "Natural fluency in all major languages", "Cultural nuance understanding", "Automatic language detection"]
      }
    ]
  },
  {
    title: "How It Works: Seamless Prospect Qualification & Nurturing",
    subtitle: "From first contact to booked appointment – MERGE AI handles it all",
    steps: [
      {
        step: "1",
        title: "Lead In",
        description: "Prospect makes initial contact through any channel",
        details: "Call • Text • Email"
      },
      {
        step: "2", 
        title: "AI Qualification",
        description: "AI instantly assesses intent, needs, and priority",
        details: "2-second analysis"
      },
      {
        step: "3",
        title: "Channel Discovery", 
        description: "System identifies preferred communication method",
        details: "Auto-adapts"
      },
      {
        step: "4",
        title: "Personalized Nurturing",
        description: "Tailored follow-up based on prospect's interests", 
        details: "93% engagement"
      },
      {
        step: "5",
        title: "Appointment Booking",
        description: "Smart calendar integration for frictionless scheduling",
        details: "Real-time sync"
      }
    ],
    highlights: [
      "24/7 Response - Never miss another opportunity with always-on AI agents that respond instantly",
      "Intelligent Qualification - AI automatically screens prospects and prioritizes high-value opportunities", 
      "Conversion-Driven - Proven to increase conversion rates by 40-60% through personalized follow-up"
    ]
  },
  {
    title: "ROI You Can See: Cost Savings, Conversions & More",
    subtitle: "Measurable returns across critical business metrics with a typical payback period of just 2 months",
    metrics: [
      { number: "42%", label: "Cost Savings in administrative staffing requirements" },
      { number: "78%", label: "Faster Response to leads and customer inquiries" },
      { number: "38%", label: "Conversion Lift from immediate engagement" },
      { number: "24%", label: "Retention improvement through consistent follow-up" }
    ],
    roiTimeline: [
      { month: "Month 1", investment: "$2,999", monthlyReturn: "$0", cumulativeReturn: "$0", netPosition: "-$2,999", status: "Initial Investment" },
      { month: "Month 2", investment: "$2,999", monthlyReturn: "$6,500", cumulativeReturn: "$6,500", netPosition: "+$501", status: "BREAKEVEN" },
      { month: "Month 3", investment: "$2,999", monthlyReturn: "$9,750", cumulativeReturn: "$16,250", netPosition: "+$7,253", status: "Positive ROI" },
      { month: "Month 4", investment: "$2,999", monthlyReturn: "$10,500", cumulativeReturn: "$26,750", netPosition: "+$14,754", status: "Positive ROI" },
      { month: "Month 6", investment: "$2,999", monthlyReturn: "$13,750", cumulativeReturn: "$53,750", netPosition: "+$35,756", status: "Positive ROI" }
    ],
    industryBenchmarks: [
      { industry: "Real Estate", roi: "4.2×" },
      { industry: "Insurance", roi: "3.7×" },
      { industry: "Healthcare", roi: "3.9×" },
      { industry: "Home Services", roi: "4.5×" }
    ]
  },
  {
    title: "Industry Use Cases & Results",
    subtitle: "Real-world applications delivering measurable outcomes across multiple industries",
    useCases: [
      {
        industry: "Real Estate",
        useCase: "Lead Qualification & Nurturing",
        description: "AI agents qualify every inquiry 24/7 and maintain engagement until buyers are ready to tour properties",
        results: ["+62% Lead Conversion", "5 Min Response", "-40% Admin"]
      },
      {
        industry: "Mortgage Brokers", 
        useCase: "Application Follow-up & Status",
        description: "Automated document collection, application status updates, and deadline reminders for borrowers",
        results: ["-27% Processing", "+31% Close Rate", "+45% Satisfaction"]
      },
      {
        industry: "Insurance",
        useCase: "Claims Processing & Policy Renewal", 
        description: "AI agents guide customers through claims submission and proactively manage policy renewals with coverage options",
        results: ["+25% Renewal", "-35% Claims Time", "+18% Cross-sell"]
      },
      {
        industry: "Home Services",
        useCase: "Emergency Routing & Appointments",
        description: "24/7 response with intelligent scheduling and emergency prioritization based on service urgency", 
        results: ["0% Missed Calls", "+52% Bookings", "3.5x ROI"]
      },
      {
        industry: "Health & Wellness",
        useCase: "Appointment & Follow-ups",
        description: "Smart scheduling with multi-channel reminders and post-treatment check-ins to boost client retention",
        results: ["-68% No-shows", "+22% Rebookings", "+33% Reviews"]
      },
      {
        industry: "Medical Offices",
        useCase: "Patient Intake & Prescriptions", 
        description: "Automated intake forms, prescription refill requests, and multilingual support for diverse patient populations",
        results: ["-45% Admin", "+70% Resolution", "12 Languages"]
      }
    ]
  },
  {
    title: "Customer Success Story: Real Estate",
    subtitle: "Elite Realty Partners",
    quote: "MERGE AI completely transformed how we manage leads. We're now able to respond to every inquiry instantly, qualify prospects automatically, and focus our team's energy where it matters most - closing deals. The system pays for itself many times over.",
    author: "Sarah Thompson",
    role: "Director of Operations, Elite Realty Partners",
    results: [
      { metric: "2x", label: "Lead Conversion Rate", detail: "From 12% to 24% in just 3 months" },
      { metric: "50%", label: "Reduction in Admin Hours", detail: "Saving 22+ hours per agent weekly" },
      { metric: "100%", label: "Lead Response Rate", detail: "No missed calls or lost opportunities" }
    ]
  },
  {
    title: "Customer Success Story: Healthcare",
    subtitle: "Wellness Medical Center", 
    quote: "Our patient scheduling and follow-up processes have been revolutionized by MERGE AI. The platform handles appointment reminders, reschedules, and patient inquiries 24/7, freeing our staff to focus on direct patient care. The reduction in no-shows alone made this investment worthwhile within the first month.",
    author: "Dr. Michael Chen",
    role: "Medical Director, Wellness Medical Center",
    results: [
      { metric: "30%", label: "Reduction in No-Shows", detail: "Saving $12,500+ monthly in lost revenue" },
      { metric: "75%", label: "Improved Response Rate", detail: "Patient inquiries answered in under 30 seconds" },
      { metric: "92%", label: "Patient Satisfaction", detail: "From 71% before MERGE AI implementation" }
    ]
  },
  {
    title: "From Contract to Full Adoption – Simple, Easy and Safe",
    subtitle: "Our proven implementation process ensures a smooth, risk-free transition to AI-powered communications with minimal disruption to your existing operations.",
    steps: [
      {
        step: "1",
        title: "Onboarding (48 Hours)",
        description: "Initial setup and account configuration to establish your AI communications foundation with rapid deployment protocols."
      },
      {
        step: "2",
        title: "Buildout and Governance (Weeks 1 - 2)", 
        description: "Agentic agent buildout trained on your business KPIs, clear governance frameworks and best practices implementation."
      },
      {
        step: "3",
        title: "Testing and Implementation (Weeks 2 - 3)",
        description: "Rigorous testing protocols and phased implementation with comprehensive staff training and CRM/lead management system integration."
      },
      {
        step: "4", 
        title: "Launch (Weeks 3 – 4)",
        description: "Full deployment of your agentic AI agent with voice capabilities and complete workflow automation across all communication touchpoints."
      },
      {
        step: "5",
        title: "Full Integration & Optimization (Ongoing)",
        description: "Regular performance reviews, feature updates, and continuous improvement to maximize ROI."
      }
    ]
  },
  {
    title: "Investment and Payback Timeline",
    subtitle: "Transparent pricing structure with demonstrable ROI and typical 2-month payback period",
    plans: [
      {
        name: "Standard",
        price: "$1,499/mo",
        description: "For small teams with basic needs",
        features: ["AI Voice & Text Agents", "Calendar Integration", "Up to 500 leads/month", "Email & Voice Support"]
      },
      {
        name: "Professional", 
        price: "$2,999/mo",
        description: "For growing businesses",
        features: ["All Standard features", "Multilingual Support (6 languages)", "Up to 2,000 leads/month", "Priority Support"],
        recommended: true
      },
      {
        name: "Enterprise",
        price: "Custom",
        description: "For large organizations", 
        features: ["All Professional features", "All 12 languages supported", "Unlimited leads", "Dedicated Success Manager"]
      }
    ],
    roiSample: {
      investment: "$2,999",
      revenue: "$13,750", 
      timeSavings: "87 hours",
      netBenefit: "$10,751",
      payback: "2 months"
    }
  },
  {
    title: "Ready to Capture Every Opportunity?",
    subtitle: "Join the industry leaders already transforming their businesses with agentic intelligence",
    cta: "Transform your customer experience today",
    options: [
      {
        title: "Book a Demo",
        description: "See a personalized demonstration of our platform",
        action: "Schedule Now",
        recommended: true
      },
      {
        title: "Consultation", 
        description: "Discuss your specific requirements with our experts",
        action: "Talk to Us"
      }
    ]
  }
];

export default function Deck() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'Escape') {
        window.location.href = '/';
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const slide = slides[currentSlide];

  return (
    <div className="fixed inset-0 bg-[#02012d] z-50 flex flex-col items-center justify-center text-white overflow-hidden">
      {/* Header Controls */}
      <div className="absolute top-4 left-0 right-0 z-10 flex justify-between items-center px-6">
        <Link to={createPageUrl("Home")} className="text-gray-400 hover:text-white transition-colors">
          <X className="w-6 h-6" />
        </Link>
        <div className="text-sm text-gray-400">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full h-full flex flex-col justify-center items-center text-center p-8 md:p-16 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-6xl leading-tight">
          {slide.title}
        </h1>

        {slide.subtitle && (
          <p className="text-xl md:text-2xl lg:text-3xl text-[#DB07b5] mb-8 max-w-4xl">
            {slide.subtitle}
          </p>
        )}

        {slide.content && (
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 max-w-5xl leading-relaxed">
            {slide.content}
          </p>
        )}

        {/* Features */}
        {slide.features && (
          <div className="space-y-4 mb-12 max-w-4xl">
            {slide.features.map((feature, idx) => (
              <div key={idx} className="text-lg md:text-xl text-gray-300 flex items-center justify-center">
                <span className="text-[#DB07b5] mr-4">•</span>
                {feature}
              </div>
            ))}
          </div>
        )}

        {/* Bullets */}
        {slide.bullets && (
          <div className="max-w-6xl">
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

        {/* Stats */}
        {slide.stats && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-6xl">
            {slide.stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-6xl font-bold text-[#DB07b5] mb-4">{stat.number}</div>
                <div className="text-lg md:text-xl text-gray-300 leading-relaxed">{stat.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Industry Impact */}
        {slide.industryImpact && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl">
            {slide.industryImpact.map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#00839C] mb-2">{item.industry}</div>
                <div className="text-3xl md:text-4xl font-bold text-[#DB07b5]">{item.percentage}</div>
              </div>
            ))}
          </div>
        )}

        {/* Industries */}
        {slide.industries && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl text-left">
            {slide.industries.map((industry, idx) => (
              <div key={idx} className="bg-white/5 p-6 rounded-lg border border-white/10">
                <h3 className="text-xl md:text-2xl font-bold text-[#DB07b5] mb-4">{industry.name}</h3>
                <ul className="space-y-3">
                  {industry.issues.map((issue, issueIdx) => (
                    <li key={issueIdx} className="text-gray-300 text-sm md:text-base leading-relaxed">
                      <span className="text-[#00839C] mr-2">•</span>
                      {issue}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Barriers */}
        {slide.barriers && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl">
            {slide.barriers.map((barrier, idx) => (
              <div key={idx} className="bg-white/5 p-6 rounded-lg border border-white/10 text-center">
                <h3 className="text-lg md:text-xl font-bold text-[#DB07b5] mb-3">{barrier.concern}</h3>
                <div className="text-sm text-gray-400 mb-3">{barrier.stat}</div>
                <div className="text-sm md:text-base text-gray-300 leading-relaxed font-medium">
                  MERGE AI Solution: {barrier.solution}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Platform Features */}
        {slide.features && Array.isArray(slide.features) && slide.features[0].title && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl text-left">
            {slide.features.map((feature, idx) => (
              <div key={idx} className="bg-white/5 p-6 rounded-lg border border-white/10">
                <h3 className="text-xl font-bold text-[#DB07b5] mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Core Capabilities */}
        {slide.capabilities && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl text-left">
            {slide.capabilities.map((capability, idx) => (
              <div key={idx} className="bg-white/5 p-6 rounded-lg border border-white/10">
                <h3 className="text-xl font-bold text-[#DB07b5] mb-4">{capability.title}</h3>
                <ul className="space-y-2">
                  {capability.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="text-gray-300 text-sm leading-relaxed">
                      <span className="text-[#00839C] mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Process Steps */}
        {slide.steps && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12 max-w-7xl">
              {slide.steps.map((step, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#DB07b5] to-[#E501E4] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-sm mb-2 leading-relaxed">{step.description}</p>
                  <div className="text-[#00839C] font-semibold text-sm">{step.details}</div>
                </div>
              ))}
            </div>
            {slide.highlights && (
              <div className="space-y-4 max-w-5xl">
                {slide.highlights.map((highlight, idx) => (
                  <div key={idx} className="text-lg md:text-xl text-gray-300 leading-relaxed">
                    <span className="text-[#DB07b5] font-bold mr-2">•</span>
                    {highlight}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Metrics */}
        {slide.metrics && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 max-w-6xl">
              {slide.metrics.map((metric, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-[#DB07b5] mb-4">{metric.number}</div>
                  <div className="text-lg text-gray-300 leading-relaxed">{metric.label}</div>
                </div>
              ))}
            </div>
            
            {slide.industryBenchmarks && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
                {slide.industryBenchmarks.map((benchmark, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-lg font-medium text-gray-300 mb-2">{benchmark.industry}</div>
                    <div className="text-2xl font-bold text-[#00839C]">{benchmark.roi}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Use Cases */}
        {slide.useCases && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl text-left">
            {slide.useCases.map((useCase, idx) => (
              <div key={idx} className="bg-white/5 p-6 rounded-lg border border-white/10">
                <h3 className="text-xl font-bold text-[#DB07b5] mb-2">{useCase.industry}</h3>
                <h4 className="text-lg font-semibold text-white mb-3">{useCase.useCase}</h4>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{useCase.description}</p>
                <div className="flex flex-wrap gap-2">
                  {useCase.results.map((result, resultIdx) => (
                    <div key={resultIdx} className="bg-[#00839C]/20 text-[#00839C] px-3 py-1 rounded-full text-xs font-medium">
                      {result}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Customer Success Story */}
        {slide.quote && (
          <div className="max-w-5xl">
            <div className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-8 leading-relaxed italic">
              "{slide.quote}"
            </div>
            <div className="mb-8">
              <div className="text-xl md:text-2xl font-bold text-white">{slide.author}</div>
              <div className="text-lg text-gray-400">{slide.role}</div>
            </div>
            {slide.results && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {slide.results.map((result, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-[#DB07b5] mb-2">{result.metric}</div>
                    <div className="text-lg font-semibold text-white mb-1">{result.label}</div>
                    <div className="text-sm text-gray-400">{result.detail}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Implementation Steps */}
        {slide.steps && !slide.highlights && (
          <div className="space-y-6 max-w-5xl text-left">
            {slide.steps.map((step, idx) => (
              <div key={idx} className="bg-white/5 p-6 rounded-lg border border-white/10">
                <h3 className="text-xl font-bold text-[#DB07b5] mb-3">
                  {step.step}. {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Pricing Plans */}
        {slide.plans && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-6xl">
              {slide.plans.map((plan, idx) => (
                <div key={idx} className={`bg-white/5 p-8 rounded-lg border text-center relative ${
                  plan.recommended ? 'border-[#DB07b5] scale-105' : 'border-white/10'
                }`}>
                  {plan.recommended && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-[#DB07b5] to-[#E501E4] text-white px-4 py-1 rounded-full text-sm font-medium">
                        Recommended
                      </div>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-[#DB07b5] mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-white mb-2">{plan.price}</div>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  <ul className="space-y-2 text-sm text-gray-300 text-left">
                    {plan.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-start">
                        <span className="text-[#00839C] mr-2 mt-0.5">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            {slide.roiSample && (
              <div className="bg-white/5 p-8 rounded-lg border border-white/10 max-w-3xl">
                <h3 className="text-2xl font-bold text-[#DB07b5] mb-6 text-center">Sample ROI Calculation</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-lg font-semibold text-white">Monthly Investment</div>
                    <div className="text-2xl font-bold text-[#E501E4]">{slide.roiSample.investment}</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-white">New Monthly Revenue</div>
                    <div className="text-2xl font-bold text-[#00839C]">{slide.roiSample.revenue}</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-white">Monthly Staff Time Savings</div>
                    <div className="text-2xl font-bold text-[#DB07b5]">{slide.roiSample.timeSavings}</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-white">Net Monthly Benefit</div>
                    <div className="text-2xl font-bold text-[#00839C]">{slide.roiSample.netBenefit}</div>
                  </div>
                </div>
                <div className="text-center mt-6">
                  <div className="text-xl font-bold text-white">Payback Period: {slide.roiSample.payback}</div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Final CTA */}
        {slide.cta && (
          <div className="max-w-4xl">
            <div className="text-2xl md:text-3xl text-[#DB07b5] mb-12">{slide.cta}</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {slide.options.map((option, idx) => (
                <div key={idx} className={`bg-white/5 p-8 rounded-lg border text-center ${
                  option.recommended ? 'border-[#DB07b5] scale-105' : 'border-white/10'
                }`}>
                  {option.recommended && (
                    <div className="text-[#DB07b5] font-bold text-sm mb-4">RECOMMENDED</div>
                  )}
                  <h3 className="text-xl font-bold text-white mb-3">{option.title}</h3>
                  <p className="text-gray-300 mb-6">{option.description}</p>
                  <Button data-form-trigger="true" className="w-full bg-gradient-to-r from-[#DB07b5] to-[#E501E4] text-white py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                    {option.action}
                  </Button>
                </div>
              ))}
            </div>
            <div className="mt-12 text-gray-400">
              <div>hello@mergemedia.ai | (800) 394-6041</div>
            </div>
          </div>
        )}

        {/* Add CTA for final slide if it doesn't have one */}
        {currentSlide === slides.length - 1 && !slide.cta && (
          <div className="mt-12">
            <Button data-form-trigger="true" className="bg-gradient-to-r from-[#DB07b5] to-[#E501E4] text-white px-12 py-6 rounded-full text-2xl font-semibold hover:scale-105 transition-transform">
              Schedule a Demo
            </Button>
          </div>
        )}
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-4 z-10">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
        
        <div className="flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-colors ${
                idx === currentSlide ? 'bg-[#DB07b5]' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className="bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>

      {/* Instructions */}
      <div className="absolute bottom-16 right-6 text-sm text-gray-500">
        Use ← → keys or click to navigate • ESC to exit
      </div>
    </div>
  );
}