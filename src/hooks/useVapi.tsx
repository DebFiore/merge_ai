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
      setIsCallActive(true);
      setIsLoading(false);
    });

    vapi.on('call-end', () => {
      setIsCallActive(false);
      setIsLoading(false);
    });

    vapi.on('error', (error) => {
      console.error('VAPI Error:', error);
      setIsLoading(false);
    });

    return () => {
      vapi.stop();
    };
  }, []);

  const startCall = async () => {
    if (!vapiRef.current) return;
    
    setIsLoading(true);
    try {
      await vapiRef.current.start('0834080e-d1d3-44ca-9fcc-b8bd5abe3460');
    } catch (error) {
      console.error('Failed to start call:', error);
      setIsLoading(false);
    }
  };

  const stopCall = () => {
    if (!vapiRef.current) return;
    vapiRef.current.stop();
  };

  return { startCall, stopCall, isCallActive, isLoading };
};
