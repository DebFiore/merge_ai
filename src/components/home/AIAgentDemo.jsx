import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Play, 
  Pause, 
  Volume2, 
  Phone, 
  MessageSquare, 
  Mail,
  Home,
  Shield,
  Stethoscope,
  Briefcase
} from 'lucide-react';

export default function AIAgentDemo() {
  const [playingAgent, setPlayingAgent] = useState(null);

  const agents = [
    {
      id: 'real-estate',
      title: 'Real Estate Agent',
      description: 'Professional property inquiries and lead qualification',
      icon: Home,
      duration: '2:15',
      accent: '#00839C',
      sampleScript: 'Hi! Thanks for your interest in the property on Oak Street. I\'d love to help you learn more about it. When would be a good time for you to schedule a viewing?'
    },
    {
      id: 'insurance',
      title: 'Insurance Specialist',
      description: 'Policy questions and coverage consultations',
      icon: Shield,
      duration: '1:45',
      accent: '#DB07b5',
      sampleScript: 'Hello! I understand you\'re looking for insurance coverage. Let me ask you a few quick questions to find the best policy options for your needs.'
    },
    {
      id: 'healthcare',
      title: 'Healthcare Assistant',
      description: 'Appointment scheduling and patient support',
      icon: Stethoscope,
      duration: '2:30',
      accent: '#E501E4',
      sampleScript: 'Good morning! I\'m calling to help you schedule your appointment. What type of service are you looking for, and what days work best for you?'
    },
    {
      id: 'business',
      title: 'Business Consultant',
      description: 'Lead qualification and service inquiries',
      icon: Briefcase,
      duration: '1:58',
      accent: '#00839C',
      sampleScript: 'Hi there! I saw you were interested in our business services. I\'d love to understand your current challenges and see how we can help grow your business.'
    }
  ];

  const handlePlayPause = (agentId) => {
    if (playingAgent === agentId) {
      setPlayingAgent(null);
    } else {
      setPlayingAgent(agentId);
      // In real implementation, this would start audio playback
      setTimeout(() => setPlayingAgent(null), 5000); // Auto-stop after 5 seconds for demo
    }
  };

  return (
    <section className="section-padding bg-gradient-to-br from-[#00839C]/5 via-white/5 to-[#DB07b5]/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#DB07b5]/10 to-[#E501E4]/10 border border-[#DB07b5]/20 mb-8">
            <Volume2 className="w-4 h-4 text-[#DB07b5] mr-2" />
            <span className="text-sm font-medium text-white">Hear the Difference</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Listen to Our
            <span className="relative inline-block gradient-text block">
              AI Agents in Action
              <svg
                className="absolute -bottom-1 sm:-bottom-2 left-0 w-full"
                viewBox="0 0 300 8"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 5C60 2 180 1 298 4"
                  stroke="#00839C"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M2 6C60 3 180 2 298 5"
                  stroke="#00839C"
                  strokeWidth="2"
                  strokeOpacity="0.6"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          <p className="text-xl text-gray-300 leading-relaxed">
            Experience how natural and professional our AI agents sound across different industries.
            Each agent is trained specifically for their role.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {agents.map((agent) => (
            <Card key={agent.id} className="dark-card gradient-hover group">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center border border-white/20"
                    style={{ backgroundColor: `${agent.accent}20` }}
                  >
                    <agent.icon className="w-6 h-6" style={{ color: agent.accent }} />
                  </div>
                  <Badge className="text-xs" style={{ 
                    backgroundColor: `${agent.accent}20`, 
                    color: agent.accent,
                    borderColor: `${agent.accent}30`
                  }}>
                    {agent.duration}
                  </Badge>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{agent.title}</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {agent.description}
                </p>

                <div className="bg-white/5 rounded-lg p-3 mb-4 border border-white/10">
                  <p className="text-gray-300 text-xs italic leading-relaxed">
                    "{agent.sampleScript}"
                  </p>
                </div>

                <Button
                  onClick={() => handlePlayPause(agent.id)}
                  className="w-full flex items-center justify-center gap-2 py-2 rounded-full font-medium transition-all duration-300"
                  style={{ 
                    backgroundColor: playingAgent === agent.id ? `${agent.accent}40` : `${agent.accent}20`,
                    color: agent.accent,
                    border: `1px solid ${agent.accent}30`
                  }}
                >
                  {playingAgent === agent.id ? (
                    <>
                      <Pause className="w-4 h-4" />
                      Playing...
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4" />
                      Listen Now
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Communication Channels */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">
            Available Across All Channels
          </h3>
          <div className="flex justify-center gap-8 flex-wrap">
            {[
              { icon: Phone, label: 'Voice Calls', color: '#00839C' },
              { icon: MessageSquare, label: 'SMS & Text', color: '#DB07b5' },
              { icon: Mail, label: 'Email', color: '#E501E4' }
            ].map((channel) => (
              <div key={channel.label} className="flex items-center gap-3 px-6 py-3 bg-white/5 rounded-full border border-white/10">
                <div 
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${channel.color}20` }}
                >
                  <channel.icon className="w-4 h-4" style={{ color: channel.color }} />
                </div>
                <span className="text-white font-medium">{channel.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button data-form-trigger="true" className="gradient-bg text-white px-12 py-4 rounded-full text-lg font-medium gradient-hover">
            Get Your Custom AI Agent
          </Button>
        </div>
      </div>
    </section>
  );
}