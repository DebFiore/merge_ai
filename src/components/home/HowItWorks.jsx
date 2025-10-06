
import React from 'react';
import { 
  LogIn,
  Filter,
  CalendarCheck
} from "lucide-react";
import ChatMockup from './ChatMockup';

const steps = [
  {
    icon: LogIn,
    title: "1. Intelligent Lead Orchestration",
    description: "Our flagship agentic AI agents instantly engage every prospect across voice, text, and email channels with contextual, personalized outreach powered by advanced RAG technology and behavioral analysis",
    color: "#00839C"
  },
  {
    icon: Filter,
    title: "2. Autonomous Qualification & Nurturing",
    description: "Multi-agent ecosystems conduct sophisticated discovery conversations, qualify prospects using dynamic criteria, and execute personalized nurturing sequences that adapt based on real-time engagement patterns",
    color: "#DB07b5"
  },
  {
    icon: CalendarCheck,
    title: "3. Seamless Revenue Acceleration",
    description: "Qualified opportunities are automatically routed through optimized booking workflows while our agent networks continue intelligent follow-up sequences, ensuring zero revenue leakage",
    color: "#E501E4"
  }
];

export default function HowItWorks() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-snug">
            Scale Revenue. <span className="bg-gradient-to-r from-[#00839C] via-[#DB07b5] to-[#E501E4] bg-clip-text text-transparent leading-snug">Not Headcount.</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            We build AI teams that automate everything from lead response to customer retention—so you generate more revenue without the headcount.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-6">
                <div 
                  className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center border border-white/20"
                  style={{ backgroundColor: `${step.color}20` }}
                >
                  <step.icon className="w-8 h-8" style={{ color: step.color }} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="relative">
             <div className="absolute -inset-4 bg-gradient-to-br from-[#00839C]/20 via-[#DB07b5]/10 to-[#E501E4]/20 rounded-3xl blur-2xl opacity-60"></div>
             <div className="relative">
                <ChatMockup />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
