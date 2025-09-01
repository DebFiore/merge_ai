
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { 
  Clock, 
  MessageCircle, 
  Workflow, 
  TrendingUp, 
  Users, // Users icon is still needed for the separate 'Trust' section
  DollarSign // DollarSign is no longer used if the general CTA is removed
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhyChooseMerge() {
  const benefits = [
    {
      icon: Clock,
      title: "24/7 Revenue Capture",
      description: "Every missed call becomes a booked appointment.",
      metric: "Average new monthly revenue: $15K–$25K from captured leads alone.",
      accent: "#00839C"
    },
    {
      icon: MessageCircle,
      title: "Real Conversations That Convert",
      description: "Natural flow and context awareness drive results.",
      metric: "40-60% higher booking rates compared to traditional call centers or forms.",
      accent: "#DB07b5"
    },
    {
      icon: Workflow,
      title: "Integrated Workflow Automation",
      description: "Agents update your CRM, send reminders, and route calls automatically.",
      metric: "Save 10-20 hours per week of admin time per rep.",
      accent: "#E501E4"
    },
    {
      icon: TrendingUp,
      title: "Scalable Growth Without Hiring",
      description: "Scale from one agent to hundreds without adding payroll.",
      metric: "Most clients reduce labor costs by 20-30% while improving customer experience.",
      accent: "#00839C"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-[#00839C]/5 via-white/5 to-[#DB07b5]/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Smart Businesses
            <span className="gradient-text block">Choose MERGE AI</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Revenue-focused results that transform your bottom line, not just your process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"> {/* mb-16 for spacing after the grid */}
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="dark-card gradient-hover h-full">
                <CardContent className="p-8">
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-white/20"
                    style={{ backgroundColor: `${benefit.accent}20` }}
                  >
                    <benefit.icon className="w-7 h-7" style={{ color: benefit.accent }} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{benefit.description}</p>
                  
                  <div className="text-sm font-semibold" style={{ color: benefit.accent }}>
                    {benefit.metric}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust When It Matters - Centered Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="dark-card gradient-hover max-w-4xl mx-auto mb-12"> {/* mb-12 for spacing below this card */}
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-[#DB07b5] to-[#E501E4] rounded-3xl flex items-center justify-center mx-auto mb-8">
                <Users className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-6">Trust When It Matters</h3>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Built for seamless warm transfers when human expertise is needed. Your team steps in at the perfect moment—continuing the conversation without missing context or losing momentum.
              </p>
              
              <div className="flex items-center justify-center text-2xl mb-8">
                <span className="mr-3">🤝</span>
                <span className="text-white font-semibold">Customers leave confident they were heard, not just handled.</span>
              </div>
              
              <button 
                data-form-trigger="true"
                className="gradient-bg text-white px-12 py-4 rounded-full text-lg font-semibold gradient-hover"
              >
                Experience the Difference
              </button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
