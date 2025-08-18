import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const slides = [
  {
    title: "Transformative AI Agents for Lead Generation Agencies",
    subtitle: "OMNI-CHANNEL AGENTIC PLATFORM",
    content: "Purpose-built AI agents that automatically qualify and nurture every prospect across voice, text, and email — operating at scale 24/7/365."
  },
  {
    title: "The Challenge: Traditional Call Centers in Lead Generation",
    bullets: [
      "Manual Batch Processing: Time-consuming and inefficient lead verification processes limiting agency throughput",
      "High Operational Costs: Staffing, training, and management overhead significantly reduce profit margins at scale"
    ]
  },
  {
    title: "Ready to Transform Your Lead Generation Agency?",
    subtitle: "Let the AI verify the leads. You close the deals."
  }
];

export default function AgencyDeck({ onClose }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[currentSlide];

  return (
    <div className="fixed inset-0 bg-[#02012d] z-[100] flex flex-col items-center justify-center text-white">
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={onClose} 
        className="absolute top-4 right-4 z-50 bg-white/10 hover:bg-white/20 rounded-full"
      >
        <X className="w-6 h-6" />
      </Button>
      
      <div className="w-full h-full flex flex-col justify-center items-center text-center p-8 md:p-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-5xl">
          {slide.title}
        </h1>
        
        {slide.subtitle && (
          <p className="text-2xl md:text-3xl text-[#DB07b5] mb-8">
            {slide.subtitle}
          </p>
        )}
        
        {slide.content && (
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl">
            {slide.content}
          </p>
        )}
        
        {slide.bullets && (
          <ul className="space-y-6 text-left max-w-4xl text-lg md:text-xl text-gray-300">
            {slide.bullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-[#DB07b5] mr-4 mt-1">◆</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}
        
        {currentSlide === slides.length - 1 && (
          <div className="mt-12">
            <Button className="bg-[#DB07b5] text-white px-12 py-6 rounded-full text-2xl font-semibold">
              Schedule a Demo
            </Button>
          </div>
        )}
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-center z-10">
        <div className="flex items-center gap-4 bg-black/50 backdrop-blur-sm p-2 rounded-full border border-white/10">
          <Button variant="ghost" size="icon" onClick={prevSlide} className="rounded-full hover:bg-white/20">
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <span className="font-medium text-sm w-16 text-center">
            {currentSlide + 1} / {slides.length}
          </span>
          <Button variant="ghost" size="icon" onClick={nextSlide} className="rounded-full hover:bg-white/20">
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </div>
  );
}