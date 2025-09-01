
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[700px] flex items-center justify-center text-center overflow-hidden px-6">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] bg-gradient-to-tr from-[#DB07b5]/30 via-[#00839C]/20 to-[#E501E4]/30 rounded-full blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00839C]/30 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E501E4]/20 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#00839C]/25 rounded-full blur-2xl opacity-30"></div>
      
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#00839C]/20 via-[#DB07b5]/20 to-[#E501E4]/20 border border-[#00839C]/30 mb-8 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-[#00839C] mr-2" />
            <span className="text-sm font-medium text-white">Agentic AI Automations</span>
          </div>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tighter"
        >
          Your <span style={{ color: '#DB07b5' }}>AI</span> Agent is Ready.
          <br/>
          <span className="relative inline-block">
            Are You?
            <svg
              className="absolute -bottom-2 sm:-bottom-4 left-0 w-full"
              viewBox="0 0 250 15"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.5 10.5C52.5 5.5 152.5 0.5 247.5 7.5"
                stroke="#DB07b5"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M2.5 12.5C52.5 7.5 152.5 2.5 247.5 9.5"
                stroke="#DB07b5"
                strokeWidth="3"
                strokeOpacity="0.6"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl leading-relaxed"
        >
          MERGE AI delivers an outcome-driven Agentic AI workforce with omni-channel intelligence, powered by proprietary automations that generate unmatched ROI.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <Button 
            data-form-trigger="true"
            className="text-white px-10 py-4 rounded-full text-lg font-semibold shadow-2xl transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: '#00839C' }}
          >
            Get Started
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button 
            data-form-trigger="true"
            className="text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: '#00839C' }}
          >
            Watch a Demo
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
