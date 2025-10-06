
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { X, CheckCircle, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

export default function RevenueOpportunity() {
  return (
    <section className="section-padding bg-[#02012d] pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            The Business Transformation
            <span className="gradient-text block leading-tight">Opportunity You Don't Want to Miss</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Our Agent-to-Agent Architecture: Intelligent systems communicate and collaborate to achieve complex tasks
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-3xl font-bold text-white text-center mb-8 leading-tight">
            Why Integrated Agent Architecture <span style={{ color: '#00839C' }}>Drives Results</span>
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Traditional Systems - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="dark-card h-full">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold text-white text-center mb-8">Fragmented AI Tool Deployments</h4>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <X className="w-5 h-5 text-red-400 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-300 text-lg">Disconnected AI tools create data silos and process bottlenecks</span>
                  </div>
                  <div className="flex items-start">
                    <X className="w-5 h-5 text-red-400 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-300 text-lg">Prospects experience inconsistent interactions across channels and departments</span>
                  </div>
                  <div className="flex items-start">
                    <X className="w-5 h-5 text-red-400 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-300 text-lg">Teams waste 15-25 hours weekly on manual processes that intelligent agents could orchestrate</span>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-[#DB07b5] rounded-lg border border-[#DB07b5] text-center">
                  <div className="text-white font-bold text-xl">
                    Your systems aren't talking—revenue is leaking
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* MERGE AI - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="dark-card border-[#00839C]/50 h-full">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold text-white text-center mb-8">MERGE AI's Integrated Agent Architecture</h4>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-300 text-lg">Every business touchpoint becomes an optimized revenue opportunity</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-300 text-lg">Intelligent agent networks that deliver 3-5x higher conversion than fragmented systems</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-300 text-lg">Seamless cross-departmental workflows that preserve context and accelerate growth</span>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-[#DB07b5] rounded-lg border border-[#DB07b5] text-center">
                  <div className="text-white font-bold text-xl">
                    Measurable business transformation you can track on your P&L
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
