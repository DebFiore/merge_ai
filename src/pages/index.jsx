import React from 'react';
import Hero from '@/components/home/Hero';
import StatsMarquee from '@/components/home/StatsMarquee';
import HowItWorks from '@/components/home/HowItWorks';
import IndustrySolutions from '@/components/home/IndustrySolutions';
import Testimonials from '@/components/home/Testimonials';
import FinalCTA from '@/components/home/FinalCTA';

// This page renders the content of the Home page directly at the root URL.
export default function Index() {
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