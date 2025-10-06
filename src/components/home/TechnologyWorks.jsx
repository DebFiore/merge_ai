
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { 
  Workflow, 
  Users, 
  MessageSquare, 
  Database, 
  Zap, 
  Wrench,
  CheckCircle 
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function TechnologyWorks() {
  const technologies = [
    {
      icon: Workflow,
      text: "Architect autonomous multi-agent workflows that execute sophisticated business strategies with minimal human oversight—from intelligent lead qualification through complex deal orchestration"
    },
    {
      icon: Users,
      text: "Deploy specialized agent ecosystems that collaborate through advanced RAG-powered knowledge sharing, enabling complex decision-making and strategic business process automation"
    },
    {
      icon: MessageSquare,
      text: "Engage in multi-turn conversations that build context and drive meaningful outcomes"
    },
    {
      icon: Database,
      text: "Deep integration with enterprise systems enables agents to access, analyze, and act on your complete business data ecosystem in real-time"
    },
    {
      icon: Zap,
      text: "Automate intelligently from lead capture to appointment booking to customer support"
    }
  ];

  return (
    <section className="section-padding bg-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              The Technology That
              <span className="gradient-text block">Actually Works</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              MERGE AI builds agents that:
            </p>

            <div className="space-y-6 mb-12">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-[#DB07b5] to-[#E501E4] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <tech.icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">{tech.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="dark-card gradient-hover">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#00839C]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-[#00839C]/30">
                  <Wrench className="w-8 h-8 text-[#00839C]" />
                </div>
                
                <h3 className="text-2xl font-bold text-white text-center mb-6">
                  White Glove, No-Code Setup
                </h3>
                
                <p className="text-gray-300 text-lg leading-relaxed text-center mb-8">
                  Get up and running without technical complexity. Our team handles the entire implementation, 
                  customization, and integration process—so you can focus on growing your business while we 
                  build your perfect AI solution.
                </p>

                <div className="space-y-3">
                  {[
                    "Complete implementation handled by our team",
                    "Custom AI training for your business",
                    "Full CRM and tool integrations",
                    "Ongoing optimization and support"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#00839C] mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-8">
                  <button 
                    data-form-trigger="true"
                    className="bg-[#00839C] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#00839C]/80 transition-colors"
                  >
                    Get White Glove Setup
                  </button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
