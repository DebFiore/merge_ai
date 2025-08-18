import React from 'react';
import Hero from '@/components/home/Hero';
import StatsMarquee from '@/components/home/StatsMarquee';
import HowItWorks from '@/components/home/HowItWorks';
import IndustrySolutions from '@/components/home/IndustrySolutions';
import Testimonials from '@/components/home/Testimonials';
import FinalCTA from '@/components/home/FinalCTA';

export default function Home() {
  return (
    <div className="bg-[#02012d] text-white overflow-x-hidden">
      <Hero />
      <StatsMarquee />
      <HowItWorks />
      <IndustrySolutions />
      <Testimonials />
      <FinalCTA />
    </div>
  );
}