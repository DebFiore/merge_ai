import React from 'react';
import AIAgentDemo from '@/components/home/AIAgentDemo';

export default function TestDemo() {
  return (
    <div className="min-h-screen bg-[#02012d] text-white">
      {/* Page Header */}
      <div className="section-padding bg-white/5 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            AI Agent Demo <span className="gradient-text">Mockup Preview</span>
          </h1>
          <p className="text-xl text-gray-300">
            This is a temporary test page to preview the AI agent demo section.
          </p>
        </div>
      </div>

      {/* AI Agent Demo Component */}
      <AIAgentDemo />
    </div>
  );
}