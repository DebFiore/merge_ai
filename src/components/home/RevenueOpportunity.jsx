
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
            The Revenue Opportunity
            <span className="gradient-text block leading-tight">You're Missing</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Most AI agents crumble once conversations go beyond one or two steps. They lose track, force repetition, and miss conversion opportunities. Every incomplete conversation is uncaptured revenue.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-3xl font-bold text-white text-center mb-8 leading-tight">
            Why Context-Aware AI <span style={{ color: '#00839C' }}>Drives Results</span>
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
                <h4 className="text-2xl font-bold text-white text-center mb-8">Older, Traditional Business Systems</h4>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <X className="w-5 h-5 text-red-400 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-300 text-lg">Missed calls become missed opportunities and lost revenue.</span>
                  </div>
                  <div className="flex items-start">
                    <X className="w-5 h-5 text-red-400 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-300 text-lg">Prospects abandon incomplete processes and move on to your competitor.</span>
                  </div>
                  <div className="flex items-start">
                    <X className="w-5 h-5 text-red-400 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-300 text-lg">Reps spend 10-20 hours per week on admin work that AI should handle.</span>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-[#DB07b5] rounded-lg border border-[#DB07b5] text-center">
                  <div className="text-white font-bold text-xl">
                    Significant revenue potential sitting uncaptured
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
                <h4 className="text-2xl font-bold text-white text-center mb-8">MERGE AI Delivers Results</h4>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-300 text-lg">Every inbound call becomes a booked appointment.</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-300 text-lg">Real-time qualification that converts 40-60% higher than call centers.</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-300 text-lg">Seamless handoffs that preserve context and close deals.</span>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-[#DB07b5] rounded-lg border border-[#DB07b5] text-center">
                  <div className="text-white font-bold text-xl">
                    Measurable revenue growth you can see on your balance sheet
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
