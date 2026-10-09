import React, { useEffect, useRef } from 'react';
import { useInView, animate } from 'framer-motion';

interface CountUpProps {
  to: number;
  from?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
}

export const CountUp: React.FC<CountUpProps> = ({ 
  to, 
  from = 0, 
  prefix = '', 
  suffix = '', 
  decimals = 0,
  duration = 2
}) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView && nodeRef.current) {
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = `${prefix}${value.toFixed(decimals)}${suffix}`;
          }
        }
      });
      return () => controls.stop();
    }
  }, [inView, from, to, prefix, suffix, decimals, duration]);

  return <span ref={nodeRef}>{prefix}{from.toFixed(decimals)}{suffix}</span>;
};
