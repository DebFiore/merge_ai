
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function FinalCTA() {
  return (
    <section className="section-padding bg-[#02012d]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
          Start Capturing Revenue
          <span className="gradient-text block leading-tight" style={{ lineHeight: '1.3' }}>You're Losing Today</span>
        </h2>
        
        <p className="text-xl text-gray-300 mb-4 max-w-2xl mx-auto">
          The businesses winning today are the ones that stopped treating AI like a cost center and started using it as a revenue driver.
        </p>
        
        <p className="text-lg font-semibold text-white mb-8">
          Every day you wait is revenue walking out the door.
        </p>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-6">See MERGE AI In Action</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="https://calendly.com/mergeai/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00839C] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#00839C]/80 transition-all duration-300 flex items-center justify-center"
            >
              See Agent Networks in Action
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <Link 
              to={createPageUrl("Pricing") + "#agent-marketplace"}
              className="gradient-bg text-white px-8 py-3 rounded-full font-semibold gradient-hover flex items-center justify-center"
            >
              Access Agent Marketplace Solutions
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>

        <Card className="dark-card max-w-2xl mx-auto">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Get Your Revenue Assessment
            </h3>
            <p className="text-gray-300 mb-6">
              Book a 15-minute call to see exactly how much revenue your current system is leaving on the table—and how MERGE AI captures it.
            </p>
            <a 
              href="https://calendly.com/mergeai/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block gradient-bg text-white px-8 py-3 rounded-full font-semibold gradient-hover"
            >
              Book Your Assessment
            </a>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
