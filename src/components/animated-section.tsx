"use client";

import { useRef, useEffect, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

type AnimationVariant = 'fade-up' | 'fade-in' | 'slide-in' | 'scale-in';

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: AnimationVariant;
};

const AnimatedSection = ({ children, className, delay = 0, variant = 'fade-up' }: AnimatedSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Use a timeout for the delay
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(ref.current!);
        }
      },
      {
        rootMargin: '0px 0px -100px 0px', // trigger when 100px from the bottom is visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700',
        {
          'animate-fade-up': variant === 'fade-up' && isVisible,
          'animate-fade-in': variant === 'fade-in' && isVisible,
          'animate-slide-in': variant === 'slide-in' && isVisible,
          'animate-scale-in': variant === 'scale-in' && isVisible,
          'opacity-0': !isVisible,
          'translate-y-8': !isVisible && variant === 'fade-up',
          '-translate-x-full': !isVisible && variant === 'slide-in',
          'scale-95': !isVisible && variant === 'scale-in',
        },
        className
      )}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
