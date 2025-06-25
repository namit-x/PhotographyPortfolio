import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import LoadingScreen from './components/LoadingScreen';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import CustomCursor from './components/CustomCursor';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    if (isLoading) return;

    // Initialize Lenis smooth scrolling with faster, more responsive settings
    const lenisInstance = new Lenis({
      duration: 1.0, // Reduced from 1.8 for faster response
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 0.8, // Reduced from 1.2 for less delay
      smoothTouch: false,
      touchMultiplier: 1.5, // Reduced from 2
      infinite: false,
    });

    setLenis(lenisInstance);

    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Update ScrollTrigger when Lenis updates
    lenisInstance.on('scroll', ScrollTrigger.update);

    // Initialize GSAP animations with faster, more responsive settings
    const initAnimations = () => {
      // Refresh ScrollTrigger
      ScrollTrigger.refresh();

      // Fade in animations for sections - faster and more responsive
      gsap.utils.toArray('.animate-on-scroll').forEach((element: any) => {
        gsap.fromTo(
          element,
          {
            opacity: 0,
            y: 40, // Reduced from 60
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8, // Reduced from 1.2
            ease: 'power2.out', // Changed from power3.out for snappier feel
            scrollTrigger: {
              trigger: element,
              start: 'top 90%', // Changed from 85% for earlier trigger
              end: 'bottom 10%', // Changed from 15%
              toggleActions: 'play none none reverse',
              markers: false,
            },
          }
        );
      });

      // Lighter parallax effects
      gsap.utils.toArray('.parallax').forEach((element: any) => {
        gsap.to(element, {
          yPercent: -15, // Reduced from -30 for subtler effect
          ease: 'none',
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.5, // Reduced from 1 for more responsive
            markers: false,
          },
        });
      });

      // Faster stagger animations
      gsap.utils.toArray('.stagger-item').forEach((element: any, index) => {
        gsap.fromTo(
          element,
          {
            opacity: 0,
            y: 30, // Reduced from 40
            scale: 0.98, // Reduced from 0.95
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6, // Reduced from 0.8
            ease: 'power2.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 95%', // Changed from 90%
              toggleActions: 'play none none reverse',
            },
            delay: index * 0.05, // Reduced from 0.1
          }
        );
      });
    };

    // Reduced initialization delay
    setTimeout(initAnimations, 100);

    return () => {
      lenisInstance.destroy();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isLoading]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="relative bg-white">
      <CustomCursor />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Hero />
        <Portfolio />
        <About />
        <Services />
        <Testimonials />
        <CallToAction />
      </motion.div>
    </div>
  );
}

export default App;