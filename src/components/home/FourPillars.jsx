import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Globe, ShieldCheck, Users, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FourPillars() {
  const pillars = [
    {
      icon: Globe,
      title: "Omni-Channel Continuity",
      description: "One agent, one conversation, every channel. Customers move seamlessly from voice to SMS to email with shared memory and automatic CRM updates—no disconnected experiences.",
      accent: "#00839C"
    },
    {
      icon: ShieldCheck,
      title: "Compliance-by-Design",
      description: "AI that keeps you safe and audit-ready. TCPA and HIPAA safeguards built from day one—consent capture, DNC suppression, disclosure scripting, and full audit trails that protect your business.",
      accent: "#DB07b5"
    },
    {
      icon: Users,
      title: "Trust & Reassurance",
      description: "Built for seamless warm transfers when human expertise matters most. Your team steps in at the perfect moment, continuing conversations without missing context or losing momentum.",
      accent: "#E501E4"
    },
    {
      icon: TrendingUp,
      title: "Measurable ROI",
      description: "We measure success in booked appointments, captured leads, and new revenue growth—not just \"minutes handled.\" Deliver results you can track on your balance sheet.",
      accent: "#00839C"
    }
  ];

  return (
    <section className="section-padding bg-[#02012d]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The Four Pillars of
            <span className="gradient-text block">Outcome-Driven AI</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Built on the foundation of real business results, not just technical features.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="dark-card gradient-hover h-full">
                <CardContent className="p-8">
                  <div className="flex items-start mb-6">
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 border border-white/20"
                      style={{ backgroundColor: `${pillar.accent}20` }}
                    >
                      <pillar.icon className="w-8 h-8" style={{ color: pillar.accent }} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">{pillar.title}</h3>
                      <p className="text-gray-300 text-lg leading-relaxed">{pillar.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}