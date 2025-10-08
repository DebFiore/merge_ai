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
