import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [showText, setShowText] = useState(false);
  const [showLine, setShowLine] = useState(false);
  const [startWipe, setStartWipe] = useState(false);

  useEffect(() => {
    // Start text animation immediately
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 300);

    // Start line animation after text is revealed
    const lineTimer = setTimeout(() => {
      setShowLine(true);
    }, 2000);

    // Start wipe animation
    const wipeTimer = setTimeout(() => {
      setStartWipe(true);
    }, 4500);

    // Complete loading after wipe animation
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 5800); // Give enough time for wipe animation to complete

    return () => {
      clearTimeout(textTimer);
      clearTimeout(lineTimer);
      clearTimeout(wipeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Background particles for ambiance */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-pink-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main text container */}
      <div className="relative z-10 text-center mt-[50px]">
        <AnimatePresence>
          {showText && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative"
            >
              {/* Studio name with reveal animation */}
              <div className="relative overflow-hidden">
                <motion.h1
                  className="text-7xl md:text-9xl font-bold text-white tracking-tight"
                  initial={{
                    opacity: 0,
                    filter: 'blur(20px)',
                    y: 100,
                    scale: 0.8
                  }}
                  animate={{
                    opacity: 1,
                    filter: 'blur(0px)',
                    y: 0,
                    scale: 1
                  }}
                  transition={{
                    duration: 1.5,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-pink-500 bg-clip-text text-transparent">
                    Meenakshi
                  </span>
                </motion.h1>

                <motion.h2
                  className="text-6xl md:text-8xl font-bold text-white tracking-tight mt-2"
                  initial={{
                    opacity: 0,
                    filter: 'blur(20px)',
                    y: 80,
                    scale: 0.9
                  }}
                  animate={{
                    opacity: 1,
                    filter: 'blur(0px)',
                    y: 0,
                    scale: 1
                  }}
                  transition={{
                    duration: 1.5,
                    delay: 0.3,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  Studio
                </motion.h2>

                {/* Underline decoration */}
                <motion.div
                  className="h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent mt-6 mx-auto"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: '60%', opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: 1,
                    ease: "easeOut"
                  }}
                />
              </div>

              {/* Tagline */}
              <motion.p
                className="text-xl md:text-2xl text-gray-300 font-light mt-8 tracking-wide"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 1.2,
                  ease: "easeOut"
                }}
              >
                Where moments become timeless
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Sweeping line transition */}
      <AnimatePresence>
        {showLine && (
          <motion.div
            className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 z-30"
            initial={{ scaleX: 0, opacity: 1 }}
            animate={{ scaleX: 1, opacity: [1, 1, 0] }}
            transition={{
              scaleX: { duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] },
              opacity: { duration: 1.5, delay: 1 }
            }}
            style={{ transformOrigin: 'left' }}
          >
            <div className="h-px bg-white" />
            <div className="h-px bg-white mt-px" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-48 h-0.5 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-pink-500 to-rose-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{
              duration: 4.5,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>

      {/* Vertical Wipe Animation */}
      <AnimatePresence>
        {startWipe && (
          <>
            {/* Top half wipe */}
            <motion.div
              className="absolute inset-x-0 top-0 bg-black z-[60]"
              initial={{ height: 0 }}
              animate={{ height: '50vh' }}
              transition={{
                duration: 1.2,
                ease: [0.76, 0, 0.24, 1],
              }}
            />
            {/* Bottom half wipe */}
            <motion.div
              className="absolute inset-x-0 bottom-0 bg-black z-[60]"
              initial={{ height: 0 }}
              animate={{ height: '50vh' }}
              transition={{
                duration: 1.2,
                ease: [0.76, 0, 0.24, 1],
                delay: 0.1,
              }}
            />
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
}