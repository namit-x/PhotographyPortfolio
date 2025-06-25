import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BlurText from './BlurText';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [showSubtext, setShowSubtext] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleMainTextComplete = () => {
    setShowSubtext(true);
  };

  const handleSubtextComplete = () => {
    setTimeout(() => {
      setIsComplete(true);
      setTimeout(onComplete, 800);
    }, 1000);
  };

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-white via-pink-50 to-rose-50"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.1,
            filter: 'blur(10px)'
          }}
          transition={{ 
            duration: 0.8, 
            ease: [0.76, 0, 0.24, 1] 
          }}
        >
          {/* Background particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-pink-400/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <div className="text-center relative z-10">
            <div className="mb-8">
              <BlurText
                text="Meenakshi"
                className="text-6xl md:text-8xl font-bold text-pink-600 mb-2 tracking-tight"
                delay={150}
                animateBy="letters"
                stepDuration={0.4}
                animationFrom={{
                  filter: 'blur(20px)',
                  opacity: 0,
                  y: 50,
                  scale: 0.8,
                }}
                animationTo={[
                  {
                    filter: 'blur(10px)',
                    opacity: 0.3,
                    y: 20,
                    scale: 0.9,
                  },
                  {
                    filter: 'blur(0px)',
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  },
                ]}
              />
              <BlurText
                text="Studio"
                className="text-6xl md:text-8xl font-bold text-black tracking-tight"
                delay={150}
                animateBy="letters"
                stepDuration={0.4}
                onAnimationComplete={handleMainTextComplete}
                animationFrom={{
                  filter: 'blur(20px)',
                  opacity: 0,
                  y: 50,
                  scale: 0.8,
                }}
                animationTo={[
                  {
                    filter: 'blur(10px)',
                    opacity: 0.3,
                    y: 20,
                    scale: 0.9,
                  },
                  {
                    filter: 'blur(0px)',
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  },
                ]}
              />
            </div>

            <AnimatePresence>
              {showSubtext && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <BlurText
                    text="Where moments become timeless"
                    className="text-xl md:text-2xl text-gray-600 font-light tracking-wide"
                    delay={100}
                    animateBy="words"
                    stepDuration={0.3}
                    onAnimationComplete={handleSubtextComplete}
                    animationFrom={{
                      filter: 'blur(10px)',
                      opacity: 0,
                      y: 20,
                    }}
                    animationTo={[
                      {
                        filter: 'blur(0px)',
                        opacity: 1,
                        y: 0,
                      },
                    ]}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Loading indicator */}
            <motion.div
              className="mt-12 flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              <div className="w-32 h-0.5 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-pink-500 to-rose-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 3, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}