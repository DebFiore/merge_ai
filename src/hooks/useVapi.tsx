import { useEffect, useRef, useState } from 'react';
import Vapi from '@vapi-ai/web';

export const useVapi = () => {
  const vapiRef = useRef<Vapi | null>(null);
  const [isCallActive, setIsCallActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    vapiRef.current = new Vapi('c72e9704-efd0-4da5-b797-9289962c0977');

    const vapi = vapiRef.current;

    vapi.on('call-start', () => {
      console.log('VAPI: Call started');
      setIsCallActive(true);
      setIsLoading(false);
    });

    vapi.on('call-end', () => {
      console.log('VAPI: Call ended');
      setIsCallActive(false);
      setIsLoading(false);
    });

    vapi.on('speech-start', () => {
      console.log('VAPI: Speech started');
    });

    vapi.on('speech-end', () => {
      console.log('VAPI: Speech ended');
    });

    vapi.on('error', (error) => {
      console.error('VAPI Error:', error);
      setIsCallActive(false);
      setIsLoading(false);
    });

    vapi.on('message', (message) => {
      console.log('VAPI Message:', message);
    });

    return () => {
      vapi.stop();
    };
  }, []);

  const startCall = async () => {
    if (!vapiRef.current) return;
    
    console.log('Starting VAPI call...');
    setIsLoading(true);

    try {
      // ============ FIREFOX AUDIO FIX - START ============
      const isFirefox = navigator.userAgent.toLowerCase().includes('firefox');
      
      if (isFirefox) {
        console.log('Firefox detected - applying audio playback fixes');
        
        // Fix 1: Ensure we have an AudioContext
        const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
        if (AudioContext) {
          const ctx = new AudioContext();
          console.log('Created AudioContext, state:', ctx.state);
          
          if (ctx.state === 'suspended') {
            await ctx.resume();
            console.log('AudioContext resumed');
          }
          
          // Store reference for potential use
          (window as any).__vapiAudioContext = ctx;
        }

        // Fix 2: Play silent audio to unlock autoplay restrictions
        console.log('Firefox: Playing silent audio to unlock autoplay');
        const silentAudio = document.createElement('audio');
        silentAudio.src = 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=';
        silentAudio.volume = 0.001;
        silentAudio.autoplay = true;
        silentAudio.style.display = 'none';
        document.body.appendChild(silentAudio);
        
        try {
          await silentAudio.play();
          console.log('Firefox: Silent audio played successfully');
          setTimeout(() => {
            silentAudio.pause();
            document.body.removeChild(silentAudio);
          }, 100);
        } catch (e) {
          console.warn('Firefox: Silent audio play failed:', e);
          try {
            document.body.removeChild(silentAudio);
          } catch {}
        }

        // Fix 3: Check if VAPI has audio context and ensure it's ready
        const vapiInstance = vapiRef.current as any;
        if (vapiInstance.audioContext) {
          console.log('VAPI audio context found, state:', vapiInstance.audioContext.state);
          if (vapiInstance.audioContext.state === 'suspended') {
            await vapiInstance.audioContext.resume();
            console.log('VAPI audio context resumed');
          }
        } else {
          console.log('VAPI audio context not found yet');
        }

        // Fix 4: Small delay to ensure audio pipeline is ready
        await new Promise(resolve => setTimeout(resolve, 150));
        console.log('Firefox: Audio pipeline ready');
      }
      // ============ FIREFOX AUDIO FIX - END ============

      await vapiRef.current.start('0834080e-d1d3-44ca-9fcc-b8bd5abe3460');
      console.log('VAPI start method completed');

      // ============ POST-START FIREFOX FIX ============
      if (isFirefox) {
        // After VAPI starts, check audio context again
        setTimeout(() => {
          const vapiInstance = vapiRef.current as any;
          if (vapiInstance && vapiInstance.audioContext) {
            console.log('Post-start audio context state:', vapiInstance.audioContext.state);
            if (vapiInstance.audioContext.state === 'suspended') {
              vapiInstance.audioContext.resume().then(() => {
                console.log('Post-start: Audio context resumed');
              });
            }
          }
        }, 500);
      }
      // ============ POST-START FIREFOX FIX END ============

    } catch (error) {
      console.error('Failed to start call:', error);
      setIsCallActive(false);
      setIsLoading(false);
    }
  };

  const stopCall = () => {
    if (!vapiRef.current) return;
    console.log('Stopping VAPI call...');
    vapiRef.current.stop();
    setIsCallActive(false);
    setIsLoading(false);
  };

  return { startCall, stopCall, isCallActive, isLoading };
};
