
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
  Settings, 
  BarChart3, 
  Users, 
  DollarSign,
  ArrowRight,
  ShoppingCart
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function AgentMarketplace() {
  const categories = [
    {
      icon: Settings,
      title: "Operations & Efficiency",
      accent: "#00839C",
      agents: [
        {
          name: "Process Optimization Agent",
          description: "Analyzes and automates complex business workflows"
        },
        {
          name: "Resource Management Agent",
          description: "Optimizes staffing, inventory, and resource allocation"
        },
        {
          name: "Quality Assurance Agent",
          description: "Automated quality control and compliance monitoring"
        }
      ]
    },
    {
      icon: BarChart3,
      title: "Data & Analytics",
      accent: "#DB07b5",
      agents: [
        {
          name: "Business Intelligence Agent",
          description: "Automated reporting and predictive analytics"
        },
        {
          name: "Performance Monitoring Agent",
          description: "Real-time KPI tracking and optimization recommendations"
        },
        {
          name: "Competitive Analysis Agent",
          description: "Market research and competitive intelligence gathering"
        }
      ]
    },
    {
      icon: Users,
      title: "Customer Success",
      accent: "#E501E4",
      agents: [
        {
          name: "Onboarding Automation Agent",
          description: "Streamlined customer implementation workflows"
        },
        {
          name: "Retention Optimization Agent",
          description: "Proactive churn prevention and expansion identification"
        },
        {
          name: "Support Triage Agent",
          description: "Intelligent ticket routing and resolution"
        }
      ]
    },
    {
      icon: DollarSign,
      title: "Revenue Operations",
      accent: "#00839C",
      agents: [
        {
          name: "Sales Pipeline Agent",
          description: "Automated opportunity scoring and forecasting"
        },
        {
          name: "Contract Management Agent",
          description: "Renewal tracking and negotiation support"
        },
        {
          name: "Revenue Recognition Agent",
          description: "Automated financial process management"
        }
      ]
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-[#02012d] via-[#DB07b5]/5 to-[#02012d]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#DB07b5]/10 to-[#E501E4]/10 border border-[#DB07b5]/20 mb-8">
            <ShoppingCart className="w-4 h-4 text-[#DB07b5] mr-2" />
            <span className="text-sm font-medium text-white">Agent Marketplace</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Targeted AI Solutions for
            <span className="gradient-text block">Every Business Challenge</span>
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed">
            While our flagship Agentic AI Voice Agents handle omnichannel lead generation and nurturing, MERGE AI's Agent Marketplace extends intelligent automation across your entire business. Each specialized agent tackles specific operational challenges and delivers measurable ROI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="dark-card gradient-hover h-full">
                <CardContent className="p-6">
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-white/20"
                    style={{ backgroundColor: `${category.accent}20` }}
                  >
                    <category.icon className="w-7 h-7" style={{ color: category.accent }} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-6">{category.title}</h3>
                  
                  <div className="space-y-4">
                    {category.agents.map((agent, idx) => (
                      <div key={idx}>
                        <div className="font-semibold text-white text-sm mb-1">{agent.name}</div>
                        <div className="text-gray-400 text-xs leading-relaxed">{agent.description}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-lg text-gray-300 mb-8">
            Each marketplace agent integrates seamlessly with your existing systems and delivers measurable ROI within 30 days of deployment.
          </p>
          <Link to={createPageUrl("Pricing") + "#agent-marketplace"}>
            <Button 
              className="gradient-bg text-white px-10 py-3 rounded-full font-semibold gradient-hover"
            >
              Explore Agent Marketplace
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
