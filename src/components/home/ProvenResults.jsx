
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Home, Shield, CreditCard, Building, HeartPulse, Landmark, Car, Heart, Hotel } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProvenResults() {
  const results = [
    {
      icon: Home,
      industry: "HOME SERVICES",
      headline: "Zero Missed Revenue",
      quote: "Every inbound call becomes a booked job. We stopped losing $8K monthly to missed voicemails and now capture 95% of leads instantly.",
      attribution: "Regional HVAC Company",
      accent: "#00839C",
      metrics: ["95% Lead Capture", "$8K Monthly Savings"]
    },
    {
      icon: Shield,
      industry: "INSURANCE",
      headline: "Always-On Lead Capture",
      quote: "Our AI agents qualify prospects 24/7, schedule appointments with licensed agents, and ensure compliance with state regulations. We've increased policy conversions by 35% while reducing cost per acquisition.",
      attribution: "Regional Insurance Brokerage",
      accent: "#DB07b5",
      metrics: ["35% Higher Conversions", "24/7 Qualification"]
    },
    {
      icon: Landmark,
      industry: "FINANCE", // Changed from "BANKING" to "FINANCE"
      headline: "Secure Customer Engagement",
      quote: "Our AI agents handle account inquiries, loan pre-approvals, and appointment scheduling while maintaining strict security protocols. We've reduced call center volume by 45% and increased loan applications by 30%, all while ensuring full regulatory compliance.",
      attribution: "Community Banking Network",
      accent: "#00839C",
      metrics: ["45% Lower Call Volume", "30% More Applications"]
    },
    {
      icon: CreditCard,
      industry: "MORTGAGE",
      headline: "Compliant Conversions",
      quote: "TCPA compliance built-in, borrowers pre-qualified in minutes, and warm leads routed directly to loan officers. Our conversion rate jumped 45%.",
      attribution: "National Lending Platform",
      accent: "#E501E4",
      metrics: ["45% Higher Conversion", "TCPA Compliant"]
    },
    {
      icon: Building,
      industry: "REAL ESTATE",
      headline: "24/7 Revenue Machine",
      quote: "Instant responses to inquiries, showings scheduled automatically, and prospects nurtured around the clock. We've added $22K in monthly commissions.",
      attribution: "Property Management Group",
      accent: "#00839C",
      metrics: ["$22K Monthly Growth", "Instant Response"]
    },
    {
      icon: HeartPulse,
      industry: "BEAUTY & WELLNESS", // Changed from "HEALTH & WELLNESS" to "BEAUTY & WELLNESS"
      headline: "HIPAA-Safe Growth",
      quote: "Patient scheduling, inquiry triage, and compliant engagement—all automated. We cut admin time by 60% while improving patient experience.",
      attribution: "Multi-Location Clinic Network",
      accent: "#DB07b5",
      metrics: ["60% Less Admin", "HIPAA Compliant"]
    },
    {
      icon: Car,
      industry: "AUTOMOTIVE",
      headline: "Test Drive to Purchase Pipeline",
      quote: "Our AI agents handle service appointments, sales inquiries, and follow-ups 24/7. We increased showroom visits by 40% and converted 28% more test drives into purchases through intelligent lead nurturing.",
      attribution: "Multi-Dealership Auto Group",
      accent: "#E501E4",
      metrics: ["40% More Showroom Visits", "28% Better Conversion"]
    },
    {
      icon: Heart,
      industry: "HEALTHCARE",
      headline: "Patient-First Automation",
      quote: "Appointment scheduling, insurance verification, and patient communication fully automated while maintaining HIPAA compliance. We reduced no-shows by 35% and increased patient satisfaction scores by 42%.",
      attribution: "Regional Healthcare Network",
      accent: "#00839C",
      metrics: ["35% Fewer No-Shows", "42% Higher Satisfaction"]
    },
    {
      icon: Hotel,
      industry: "HOSPITALITY",
      headline: "Guest Experience Excellence",
      quote: "Our AI concierge handles reservations, guest requests, and upsells 24/7 in multiple languages. We boosted direct bookings by 50% and increased average guest spend by 32% through intelligent recommendations.",
      attribution: "Boutique Hotel Chain",
      accent: "#DB07b5",
      metrics: ["50% More Direct Bookings", "32% Higher Guest Spend"]
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-[#00839C]/5 via-white/10 to-[#DB07b5]/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Proven Results Across Industries
            <span className="block gradient-text">That Drive Growth</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Real businesses, real revenue impact, real ROI you can measure on your balance sheet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="dark-card gradient-hover h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center mr-4 border border-white/20"
                      style={{ backgroundColor: `${result.accent}20` }}
                    >
                      <result.icon className="w-6 h-6" style={{ color: result.accent }} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white uppercase tracking-wide">
                        {result.industry}
                      </h3>
                      <h4 className="text-sm font-semibold text-gray-400">
                        {result.headline}
                      </h4>
                    </div>
                  </div>

                  <blockquote className="text-gray-300 text-lg mb-6 leading-relaxed italic">
                    "{result.quote}"
                  </blockquote>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {result.metrics.map((metric, idx) => (
                      <Badge 
                        key={idx}
                        className="text-xs font-medium"
                        style={{ 
                          backgroundColor: `${result.accent}20`, 
                          color: result.accent,
                          border: `1px solid ${result.accent}30`
                        }}
                      >
                        {metric}
                      </Badge>
                    ))}
                  </div>

                  <div className="text-sm text-gray-400 font-medium">
                    — {result.attribution}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Card className="dark-card max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <TrendingUp className="w-12 h-12 text-[#00839C] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Join These Success Stories?
              </h3>
              <p className="text-gray-300 mb-6">
                See how much revenue your current system is leaving on the table.
              </p>
              <button 
                data-form-trigger="true"
                className="gradient-bg text-white px-8 py-3 rounded-full font-semibold gradient-hover"
              >
                Get Your Revenue Assessment
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
