
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowRight,
  Sparkles,
  Voicemail,
  MessageSquare,
  Workflow,
  Database,
  Code,
  Zap,
  Mic,
  ShieldCheck,
  Rocket
} from 'lucide-react';

export default function Onboarding() {
  const whatWeBuild = [
    {
      icon: Voicemail,
      title: 'AI Voice agents that sound like your best sales rep',
    },
    {
      icon: MessageSquare,
      title: 'Automated SMS and email sequences that convert',
    },
    {
      icon: Workflow,
      title: 'Omni-channel workflows that nurture every prospect',
    },
    {
      icon: Database,
      title: 'Full CRM integration (or we\'ll set one up for you)',
    },
  ];

  const expertTeam = [
    {
      icon: Code,
      title: 'Developers connect everything to your existing CRM',
    },
    {
      icon: Zap,
      title: 'Workflow automation experts design your sales sequences',
    },
    {
      icon: Mic,
      title: 'AI voice specialists craft your perfect agent personality',
    },
    {
      icon: ShieldCheck,
      title: 'A2P registration and compliance handled automatically',
    },
  ];

  const processSteps = [
    { day: '1-2', title: 'Brand voice analysis and AI agent design', description: 'We dive deep into your brand to create an AI personality that perfectly represents you.' },
    { day: '3-5', title: 'CRM integration and workflow automation setup', description: 'Our developers seamlessly connect MERGE AI with your existing tools and build out powerful automation sequences.' },
    { day: '6-8', title: 'AI voice training and omni-channel testing', description: 'We train the AI voice on your scripts and run extensive tests across all channels to ensure flawless performance.' },
    { day: '9-10', title: 'Go-live support and team training', description: 'We launch your system and provide comprehensive training to your team to ensure a smooth transition.' },
  ];

  return (
    <div className="min-h-screen bg-[#02012d] text-white">
      {/* SECTION 1: HERO */}
      <section className="section-padding bg-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#DB07b5]/10 to-[#E501E4]/10 border border-[#DB07b5]/20 mb-8">
            <Sparkles className="w-4 h-4 text-[#DB07b5] mr-2" />
            <span className="text-sm font-medium text-white">White Glove Service</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
            White Glove AI Setup.
            <span className="gradient-text block">Zero Tech Skills Required.</span>
          </h1>
          <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
            Our expert team builds, integrates, and launches your complete AI sales system in 7-10 days.
          </p>
          <p className="text-lg text-gray-400 mb-12">
            You focus on your business. We handle everything else.
          </p>
          <Button data-form-trigger="true" className="gradient-bg text-white px-12 py-4 rounded-full text-lg font-medium gradient-hover">
            Get Your AI Sales Team Built
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* SECTION 2: WHAT WE BUILD FOR YOU */}
      <section className="section-padding bg-[#02012d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Complete AI Sales System
              <span className="block">Built For Your Business</span>
            </h2>
            <p className="text-xl text-gray-300">
              Custom AI agents designed to match your brand voice and sales process.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whatWeBuild.map((item, index) => (
              <Card key={index} className="dark-card gradient-hover text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#DB07b5] to-[#E501E4] rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg font-medium text-gray-200">{item.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: YOUR DEDICATED TEAM */}
      <section className="section-padding bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Your Dedicated AI
                <span className="gradient-text block">Implementation Team</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Developers, automation experts, and AI voice specialists work together to launch your system.
              </p>
              <div className="space-y-4">
                {expertTeam.map((item, index) => (
                  <div key={index} className="flex items-start p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="w-10 h-10 bg-[#00839C]/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                       <item.icon className="w-6 h-6 text-[#00839C]" />
                    </div>
                    <p className="text-gray-300 font-medium text-lg leading-relaxed">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-96 lg:h-auto lg:aspect-square flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00839C]/20 via-[#DB07b5]/10 to-[#E501E4]/20 rounded-3xl blur-2xl opacity-60"></div>
                <Rocket className="w-48 h-48 text-white relative z-10 opacity-80 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: 7-10 DAY PROCESS */}
      <section className="section-padding bg-[#02012d]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              From Setup To Sales In Just
              <span className="gradient-text block">7-10 Days</span>
            </h2>
            <p className="text-xl text-gray-300">
              Our proven process gets you up and running fast with zero learning curve.
            </p>
          </div>
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-6 top-0 h-full w-0.5 bg-white/10 hidden sm:block"></div>
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <div key={index} className="relative pl-16">
                  <div className="absolute left-0 top-1.5 w-12 h-12 rounded-full bg-gradient-to-r from-[#DB07b5] to-[#E501E4] flex items-center justify-center text-white font-bold text-sm z-10 border-4 border-[#02012d]">
                    {step.day}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-center text-xl text-gray-300 mt-20">
            Ready to automate your outreach and book more appointments?
          </p>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="section-padding bg-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready To Scale Without The Setup Hassle?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join hundreds of businesses already using AI to automate outreach and nurture prospects.
          </p>
          <Button data-form-trigger="true" className="gradient-bg text-white px-12 py-4 rounded-full text-lg font-medium gradient-hover">
            Get Your AI Sales Team Built
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}
