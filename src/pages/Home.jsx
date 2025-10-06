import React from 'react';
import Hero from '@/components/home/Hero';
import StatsMarquee from '@/components/home/StatsMarquee';
import HowItWorks from '@/components/home/HowItWorks';
import RevenueOpportunity from '@/components/home/RevenueOpportunity';
import ProvenResults from '@/components/home/ProvenResults';
import FourPillars from '@/components/home/FourPillars';
import TechnologyWorks from '@/components/home/TechnologyWorks';
import AgentMarketplace from '@/components/home/AgentMarketplace';
import WhyChooseMerge from '@/components/home/WhyChooseMerge';
import Testimonials from '@/components/home/Testimonials';
import FinalCTA from '@/components/home/FinalCTA';

export default function Home() {
  return (
    <div className="bg-[#02012d] text-white overflow-x-hidden">
      <Hero />
      <StatsMarquee />
      <HowItWorks />
      <RevenueOpportunity />
      <ProvenResults />
      <FourPillars />
      <TechnologyWorks />
      <AgentMarketplace />
      <WhyChooseMerge />
      <Testimonials />
      <FinalCTA />
    </div>
  );
}