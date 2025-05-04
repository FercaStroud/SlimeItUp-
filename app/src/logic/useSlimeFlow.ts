import { useEffect, useRef, useState } from 'react';

export const useSlimeFlow = (
  speed: number,
  onTick: () => void,
  onEnd: () => void
) => {
  const interval = useRef<NodeJS.Timeout | null>(null);
  const [running, setRunning] = useState(false);
  const [elapsed, setElapsed] = useState(0);

  const start = () => {
    setRunning(true);
    interval.current = setInterval(() => {
      setElapsed(prev => {
        const next = prev + 1;
        onTick();
        return next;
      });
    }, speed);
  };

  const stop = () => {
    setRunning(false);
    if (interval.current) {
      clearInterval(interval.current);
      interval.current = null;
    }
  };

  useEffect(() => {
    if (elapsed > 30) {
      stop();
      onEnd();
    }
  }, [elapsed]);

  useEffect(() => {
    return () => {
      if (interval.current) clearInterval(interval.current);
    };
  }, []);

  return {
    start,
    stop,
    running,
    elapsed,
  };
};
