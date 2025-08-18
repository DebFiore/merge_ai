import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowRight, CheckCircle } from 'lucide-react';
import AIAgentDemo from './AIAgentDemo';

export default function FinalCTA() {
  return (
    <>
      {/* AI Agent Demo Section - TEMPORARY FOR TESTING */}
      <AIAgentDemo />
      
      {/* Original CTA Section */}
      <section className="section-padding bg-gradient-to-br from-[#00839C]/10 via-white/5 to-[#E501E4]/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Capture Every Opportunity?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join the businesses transforming their lead response with AI. 
            Get started in under 48 hours.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              data-form-trigger="true"
              className="text-white px-12 py-4 rounded-full text-lg font-semibold shadow-2xl transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: '#00839C' }}
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              data-form-trigger="true"
              className="text-white px-10 py-4 rounded-full text-lg font-semibold shadow-2xl transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: '#00839C' }}
            >
              Watch a Demo
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-gray-400 text-sm">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-[#00839C]" />
              No setup fees
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-[#00839C]" />
              48-hour deployment
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-[#00839C]" />
              Cancel anytime
            </div>
          </div>
        </div>
      </section>
    </>
  );
}