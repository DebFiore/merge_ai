import { useEffect, useRef, useState } from 'react';
import Vapi from '@vapi-ai/web';

export const useVapi = () => {
  const vapiRef = useRef<Vapi | null>(null);
  const [isCallActive, setIsCallActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const audioObserverRef = useRef<MutationObserver | null>(null);

  useEffect(() => {
    vapiRef.current = new Vapi('c72e9704-efd0-4da5-b797-9289962c0977');

    const vapi = vapiRef.current;

    vapi.on('call-start', () => {
      console.log('VAPI: Call started');
      setIsCallActive(true);
      setIsLoading(false);

      // ============ FIREFOX AUDIO ELEMENT FIX ============
      const isFirefox = navigator.userAgent.toLowerCase().includes('firefox');
      
      if (isFirefox) {
        console.log('Firefox: Setting up audio element monitor');
        
        // Watch for audio elements being added to the DOM
        audioObserverRef.current = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
              if (node.nodeName === 'AUDIO') {
                const audioElement = node as HTMLAudioElement;
                console.log('Firefox: New audio element detected');
                
                // Ensure audio is not muted and volume is max
                audioElement.muted = false;
                audioElement.volume = 1.0;
                audioElement.autoplay = true;
                
                // Force play when src is set
                const originalSrcSetter = Object.getOwnPropertyDescriptor(
                  HTMLMediaElement.prototype,
                  'src'
                )!.set;
                
                Object.defineProperty(audioElement, 'src', {
                  set: function(value) {
                    originalSrcSetter!.call(this, value);
                    if (value) {
                      console.log('Firefox: Audio src set, forcing play');
                      setTimeout(() => {
                        this.play().catch((e: any) => {
                          console.warn('Firefox: Auto-play failed:', e);
                        });
                      }, 50);
                    }
                  }
                });
                
                // Also listen for canplay event
                audioElement.addEventListener('canplay', () => {
                  console.log('Firefox: Audio canplay event');
                  if (audioElement.paused) {
                    audioElement.play().catch((e) => {
                      console.warn('Firefox: Play on canplay failed:', e);
                    });
                  }
                });
                
                // Listen for loadeddata
                audioElement.addEventListener('loadeddata', () => {
                  console.log('Firefox: Audio loadeddata event');
                  if (audioElement.paused) {
                    audioElement.play().catch((e) => {
                      console.warn('Firefox: Play on loadeddata failed:', e);
                    });
                  }
                });
              }
            });
          });
        });
        
        // Start observing the entire document
        audioObserverRef.current.observe(document.body, {
          childList: true,
          subtree: true
        });
        
        // Also check existing audio elements
        setTimeout(() => {
          const existingAudio = document.querySelectorAll('audio');
          console.log(`Firefox: Found ${existingAudio.length} existing audio elements`);
          existingAudio.forEach((audio) => {
            audio.muted = false;
            audio.volume = 1.0;
            if (audio.paused && audio.src) {
              console.log('Firefox: Playing existing audio element');
              audio.play().catch((e) => {
                console.warn('Firefox: Play existing audio failed:', e);
              });
            }
          });
        }, 100);
      }
      // ============ FIREFOX AUDIO ELEMENT FIX END ============
    });

    vapi.on('call-end', () => {
      console.log('VAPI: Call ended');
      setIsCallActive(false);
      setIsLoading(false);
      
      // Clean up observer
      if (audioObserverRef.current) {
        audioObserverRef.current.disconnect();
        audioObserverRef.current = null;
      }
    });

    vapi.on('speech-start', () => {
      console.log('VAPI: Speech started');
      
      // Additional Firefox fix when speech starts
      const isFirefox = navigator.userAgent.toLowerCase().includes('firefox');
      if (isFirefox) {
        setTimeout(() => {
          const audioElements = document.querySelectorAll('audio');
          console.log(`Firefox: Speech started, checking ${audioElements.length} audio elements`);
          audioElements.forEach((audio, index) => {
            console.log(`Firefox: Audio ${index} - paused: ${audio.paused}, readyState: ${audio.readyState}, src: ${audio.src ? 'yes' : 'no'}`);
            if (audio.paused && audio.src && audio.readyState >= 2) {
              console.log(`Firefox: Force playing audio ${index}`);
              audio.play().catch((e) => {
                console.warn(`Firefox: Force play failed for audio ${index}:`, e);
              });
            }
          });
        }, 100);
      }
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
      if (audioObserverRef.current) {
        audioObserverRef.current.disconnect();
      }
    };
  }, []);

  const startCall = async () => {
    if (!vapiRef.current) return;
    
    console.log('Starting VAPI call...');
    setIsLoading(true);

    try {
      // ============ FIREFOX PRE-START FIX ============
      const isFirefox = navigator.userAgent.toLowerCase().includes('firefox');
      
      if (isFirefox) {
        console.log('Firefox: Preparing audio environment');
        
        // Create AudioContext and resume it
        const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
        if (AudioContext) {
          const ctx = new AudioContext();
          if (ctx.state === 'suspended') {
            await ctx.resume();
            console.log('Firefox: AudioContext resumed');
          }
        }
        
        // Create a user-interaction triggered audio to unlock autoplay
        const unlockAudio = document.createElement('audio');
        unlockAudio.src = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA';
        unlockAudio.volume = 0.01;
        document.body.appendChild(unlockAudio);
        
        try {
          await unlockAudio.play();
          console.log('Firefox: Autoplay unlocked');
        } catch (e) {
          console.log('Firefox: Autoplay unlock failed (expected)');
        }
        
        setTimeout(() => {
          unlockAudio.pause();
          document.body.removeChild(unlockAudio);
        }, 100);
      }
      // ============ FIREFOX PRE-START FIX END ============

      await vapiRef.current.start('0834080e-d1d3-44ca-9fcc-b8bd5abe3460');
      console.log('VAPI start method completed');
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
    
    if (audioObserverRef.current) {
      audioObserverRef.current.disconnect();
      audioObserverRef.current = null;
    }
  };

  return { startCall, stopCall, isCallActive, isLoading };
};
