import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Mic, Phone } from 'lucide-react';
import { useVapi } from "@/hooks/useVapi";

export default function VoiceAgentDemo() {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [audioLevels, setAudioLevels] = useState(Array(48).fill(0));
  const { startCall, stopCall, isCallActive, isLoading } = useVapi();

  // Animate the sound bars continuously
  useEffect(() => {
    const interval = setInterval(() => {
      setAudioLevels(prev =>
        prev.map(() => Math.random() * 0.8 + 0.2)
      );
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleVapiClick = () => {
    setIsActive(true);
    // Check if on mobile device
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // On mobile, direct call for better UX
      window.location.href = 'tel:+16023649155';
    } else {
      // On desktop, use VAPI voice agent
      if (isCallActive) {
        stopCall();
      } else {
        startCall();
      }
    }
  };

  const mergeColors = ['#00839C', '#DB07b5', '#E501E4', '#00839C'];

  return (
    <div className="flex flex-col items-center gap-8">
      {/* Sound Board Visualization */}
      <div className="relative">
        <div className="flex items-end gap-2 h-24 px-4 sm:px-8">
          {audioLevels.map((level, index) => {
            const colorIndex = index % mergeColors.length;
            const height = Math.max(8, level * 80);

            return (
              <div
                key={index}
                className="w-2 sm:w-3 rounded-full transition-all duration-100 ease-out"
                style={{
                  height: `${height}px`,
                  backgroundColor: mergeColors[colorIndex],
                  opacity: 0.8,
                  boxShadow: `0 0 20px ${mergeColors[colorIndex]}40`
                }}
              />
            );
          })}
        </div>

        {/* Pulsing background */}
        <div className="absolute inset-0 -m-8 bg-gradient-to-r from-[#00839C]/10 via-[#DB07b5]/10 to-[#E501E4]/10 rounded-full blur-xl animate-pulse" />
      </div>

      {/* Voice Agent Button */}
      <Button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleVapiClick}
        disabled={isLoading}
        className={`
          relative overflow-hidden px-8 py-4 rounded-full text-lg font-semibold
          transition-all duration-300 transform hover:scale-105
          ${isActive
            ? 'bg-gradient-to-r from-[#DB07b5] to-[#E501E4] text-white'
            : 'bg-[#00839C] hover:bg-gradient-to-r hover:from-[#DB07b5] hover:to-[#E501E4] text-white'
          }
        `}
        style={{
          boxShadow: isActive || isHovered
            ? '0 20px 40px rgba(219, 7, 181, 0.3)'
            : '0 10px 20px rgba(0, 131, 156, 0.2)'
        }}
      >
        <div className="flex items-center gap-3">
          {isActive ? (
            <Phone className="w-6 h-6" />
          ) : (
            <Mic className="w-6 h-6" />
          )}

          <span className="relative">
            <span className={`transition-all duration-300 ${isHovered || isActive ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
              Talk to an Agent
            </span>
            <span className={`absolute inset-0 transition-all duration-300 ${isHovered || isActive ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
              {isActive ? 'Speaking...' : 'Give it a Try'}
            </span>
          </span>
        </div>

        {/* Animated background for active state */}
        {isActive && (
          <div className="absolute inset-0 bg-gradient-to-r from-[#00839C]/50 to-[#E501E4]/50 animate-pulse" />
        )}
      </Button>

      {/* Connection Status */}
      {isActive && (
        <div className="flex items-center gap-2 text-sm text-gray-300">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Connected to MERGE AI Agent
        </div>
      )}
    </div>
  );
}