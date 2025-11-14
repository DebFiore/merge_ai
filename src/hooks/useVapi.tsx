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

      // ============ FIREFOX MEDIASTREAM AUDIO FIX ============
      const isFirefox = navigator.userAgent.toLowerCase().includes('firefox');
      
      if (isFirefox) {
        console.log('Firefox: Monitoring for MediaStream audio');
        
        // Check for audio elements repeatedly
        const checkAudioInterval = setInterval(() => {
          const audioElements = document.querySelectorAll('audio');
          
          audioElements.forEach((audio, index) => {
            // Check if this audio element has a MediaStream (srcObject)
            if ((audio as any).srcObject && (audio as any).srcObject instanceof MediaStream) {
              const stream = (audio as any).srcObject as MediaStream;
              const audioTracks = stream.getAudioTracks();
              
              console.log(`Firefox: Found MediaStream audio element ${index}`);
              console.log(`Firefox: Audio tracks: ${audioTracks.length}`);
              
              audioTracks.forEach((track, trackIndex) => {
                console.log(`Firefox: Track ${trackIndex} - enabled: ${track.enabled}, muted: ${track.muted}, readyState: ${track.readyState}`);
                
                // Ensure track is enabled
                if (!track.enabled) {
                  track.enabled = true;
                  console.log(`Firefox: Enabled track ${trackIndex}`);
                }
              });
              
              // Ensure audio element settings
              audio.muted = false;
              audio.volume = 1.0;
              
              console.log(`Firefox: Audio element ${index} - muted: ${audio.muted}, volume: ${audio.volume}, paused: ${audio.paused}`);
              
              // If paused, try to play
              if (audio.paused) {
                console.log(`Firefox: Audio element ${index} is paused, attempting to play`);
                audio.play().then(() => {
                  console.log(`Firefox: Successfully played audio element ${index}`);
                }).catch(e => {
                  console.error(`Firefox: Failed to play audio element ${index}:`, e);
                });
              }
              
              // Firefox-specific: Recreate audio context and connect MediaStream
              try {
                const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
                const audioCtx = new AudioContext();
                
                if (audioCtx.state === 'suspended') {
                  audioCtx.resume().then(() => {
                    console.log('Firefox: AudioContext resumed for MediaStream');
                  });
                }
                
                // Create MediaStreamSource and connect to destination
                const source = audioCtx.createMediaStreamSource(stream);
                const gainNode = audioCtx.createGain();
                gainNode.gain.value = 1.0;
                
                source.connect(gainNode);
                gainNode.connect(audioCtx.destination);
                
                console.log('Firefox: Created Web Audio pipeline for MediaStream');
                
                // Store reference to prevent garbage collection
                (audio as any).__firefoxAudioContext = audioCtx;
                (audio as any).__firefoxSource = source;
                (audio as any).__firefoxGain = gainNode;
                
              } catch (e) {
                console.error('Firefox: Failed to create Web Audio pipeline:', e);
              }
            } else if (!audio.src && !(audio as any).srcObject) {
              console.log(`Firefox: Audio element ${index} has no source yet`);
            }
          });
        }, 200); // Check every 200ms
        
        // Store interval reference
        (vapi as any).__firefoxAudioInterval = checkAudioInterval;
        
        // Clear after 10 seconds (audio should be set up by then)
        setTimeout(() => {
          clearInterval(checkAudioInterval);
          console.log('Firefox: Stopped monitoring for audio elements');
        }, 10000);
      }
      // ============ FIREFOX MEDIASTREAM AUDIO FIX END ============
    });

    vapi.on('call-end', () => {
      console.log('VAPI: Call ended');
      setIsCallActive(false);
      setIsLoading(false);
      
      // Clean up Firefox interval
      if ((vapi as any).__firefoxAudioInterval) {
        clearInterval((vapi as any).__firefoxAudioInterval);
      }
    });

    vapi.on('speech-start', () => {
      console.log('VAPI: Speech started');
      
      // Additional check when speech starts
      const isFirefox = navigator.userAgent.toLowerCase().includes('firefox');
      if (isFirefox) {
        setTimeout(() => {
          const audioElements = document.querySelectorAll('audio');
          console.log(`Firefox: Speech started check - ${audioElements.length} audio elements`);
          
          audioElements.forEach((audio, index) => {
            const stream = (audio as any).srcObject;
            if (stream instanceof MediaStream) {
              console.log(`Firefox: MediaStream audio ${index} during speech`);
              console.log(`Firefox: Audio paused: ${audio.paused}, muted: ${audio.muted}, volume: ${audio.volume}`);
              
              // Force unmute and max volume
              audio.muted = false;
              audio.volume = 1.0;
              
              // Check tracks
              const audioTracks = stream.getAudioTracks();
              audioTracks.forEach((track, trackIndex) => {
                if (!track.enabled) {
                  track.enabled = true;
                  console.log(`Firefox: Re-enabled track ${trackIndex} during speech`);
                }
              });
              
              // Try playing if paused
              if (audio.paused) {
                audio.play().catch(e => console.error('Firefox: Play during speech failed:', e));
              }
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
      
      // Clean up Firefox interval
      if ((vapi as any).__firefoxAudioInterval) {
        clearInterval((vapi as any).__firefoxAudioInterval);
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
        console.log('Firefox: Preparing for MediaStream audio');
        
        // Create and resume AudioContext
        const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
        const audioCtx = new AudioContext();
        
        console.log(`Firefox: AudioContext state: ${audioCtx.state}`);
        
        if (audioCtx.state === 'suspended') {
          await audioCtx.resume();
          console.log('Firefox: AudioContext resumed');
        }
        
        // Store for later use
        (window as any).__firefoxGlobalAudioContext = audioCtx;
        
        // Play a silent audio to unlock autoplay
        const unlockAudio = document.createElement('audio');
        unlockAudio.src = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA';
        unlockAudio.volume = 0.01;
        document.body.appendChild(unlockAudio);
        
        try {
          await unlockAudio.play();
          console.log('Firefox: Autoplay unlocked');
        } catch (e) {
          console.log('Firefox: Autoplay unlock attempt made');
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
  };

  return { startCall, stopCall, isCallActive, isLoading };
};

