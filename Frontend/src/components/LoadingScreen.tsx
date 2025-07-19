import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

// Pre-generate particle positions to prevent layout shifts
const generateParticles = () => {
  return Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 3 + 1,
    hue: Math.random() * 60 + 300,
    duration: Math.random() * 4 + 6,
    delay: Math.random() * 3,
  }));
};

// Pre-generate morph elements
const generateMorphElements = () => {
  return Array.from({ length: 8 }, (_, i) => ({
    id: i,
    width: Math.random() * 150 + 80,
    height: Math.random() * 150 + 80,
    left: Math.random() * 100,
    top: Math.random() * 100,
  }));
};

// Pre-generate dissolve particles
const generateDissolveParticles = () => {
  return Array.from({ length: 60 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 0.4,
    distance: 100 + Math.random() * 150,
  }));
};

function VerticalWipe({ startWipe }: { startWipe: boolean }) {
  return (
    <AnimatePresence>
      {startWipe && (
        <>
          {/* Top Half Wipe */}
          <motion.div
            className="absolute inset-x-0 top-0 bg-black z-[60]"
            initial={{ transform: "scaleY(0)", transformOrigin: "top" }}
            animate={{ transform: "scaleY(1)" }}
            transition={{
              duration: 1.2,
              ease: [0.76, 0, 0.24, 1],
            }}
            style={{ height: "50vh", willChange: "transform" }}
          />

          {/* Bottom Half Wipe */}
          <motion.div
            className="absolute inset-x-0 bottom-0 bg-black z-[60]"
            initial={{ transform: "scaleY(0)", transformOrigin: "bottom" }}
            animate={{ transform: "scaleY(1)" }}
            transition={{
              duration: 1.2,
              ease: [0.76, 0, 0.24, 1],
              delay: 0.05,
            }}
            style={{ height: "50vh", willChange: "transform" }}
          />

          {/* Final Flash */}
          <motion.div
            className="absolute inset-0 bg-white z-[70]"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.3, 0] }}
            transition={{
              duration: 0.25,
              delay: 1.0,
              ease: "easeInOut",
            }}
            style={{ willChange: "opacity" }}
          />
        </>
      )}
    </AnimatePresence>
  );
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [showText, setShowText] = useState(false);
  const [showSubtext, setShowSubtext] = useState(false);
  const [showOrb, setShowOrb] = useState(false);
  const [startMorphing, setStartMorphing] = useState(false);
  const [startDissolve, setStartDissolve] = useState(false);
  const [startWipeEffect, setStartWipeEffect] = useState(false);
  const [progress, setProgress] = useState(0);

  // Pre-generate all random elements to prevent layout shifts
  const particles = useMemo(() => generateParticles(), []);
  const morphElements = useMemo(() => generateMorphElements(), []);
  const dissolveParticles = useMemo(() => generateDissolveParticles(), []);

  useEffect(() => {
    const textTimer = setTimeout(() => setShowText(true), 600);
    const orbTimer = setTimeout(() => setShowOrb(true), 1000);
    const subtextTimer = setTimeout(() => setShowSubtext(true), 1800);
    const morphTimer = setTimeout(() => setStartMorphing(true), 3500);
    const dissolveTimer = setTimeout(() => setStartDissolve(true), 4500);
    const wipeTimer = setTimeout(() => setStartWipeEffect(true), 5200);
    const completeTimer = setTimeout(() => onComplete(), 6800);

    // Optimized progress animation with requestAnimationFrame
    let animationFrame: number;
    let startTime: number;
    
    const updateProgress = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const duration = 5000; // 5 seconds total
      const newProgress = Math.min(100, (elapsed / duration) * 100);
      
      setProgress(newProgress);
      
      if (newProgress < 100) {
        animationFrame = requestAnimationFrame(updateProgress);
      }
    };
    
    animationFrame = requestAnimationFrame(updateProgress);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(orbTimer);
      clearTimeout(subtextTimer);
      clearTimeout(morphTimer);
      clearTimeout(dissolveTimer);
      clearTimeout(wipeTimer);
      clearTimeout(completeTimer);
      cancelAnimationFrame(animationFrame);
    };
  }, [onComplete]);

  return (
    <>
      <style>{`
        /* Use font-display: swap to prevent layout shifts */
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Inter:wght@100;200;300;400;500;600;700&family=Crimson+Text:ital,wght@0,400;0,600;1,400;1,600&family=Space+Grotesk:wght@300;400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&display=swap');
        
        .font-playfair { font-family: 'Playfair Display', serif; font-display: swap; }
        .font-inter { font-family: 'Inter', sans-serif; font-display: swap; }
        .font-crimson { font-family: 'Crimson Text', serif; font-display: swap; }
        .font-space { font-family: 'Space Grotesk', sans-serif; font-display: swap; }
        .font-cormorant { font-family: 'Cormorant Garamond', serif; font-display: swap; }
        
        .text-glow {
          text-shadow: 
            0 0 10px rgba(236, 72, 153, 0.5),
            0 0 20px rgba(236, 72, 153, 0.3),
            0 0 40px rgba(236, 72, 153, 0.1);
        }
        
        /* Optimize animations with CSS containment */
        .loading-container {
          contain: layout style paint;
          will-change: transform;
        }
        
        .particle-container {
          contain: layout style paint;
          transform: translateZ(0); /* Force GPU acceleration */
        }
      `}</style>

      <motion.div className="fixed inset-0 z-50 overflow-hidden bg-black loading-container">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black" />
          
          {/* Optimized Floating Particles */}
          <div className="particle-container absolute inset-0">
            {particles.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute rounded-full"
                style={{
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  background: `hsl(${particle.hue}, 70%, 80%)`,
                  filter: "blur(0.5px)",
                  willChange: "transform, opacity",
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                  y: [0, -120],
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: particle.delay,
                }}
              />
            ))}
          </div>
        </div>

        {/* Main Content Container with fixed dimensions */}
        <div className="relative h-full flex flex-col items-center justify-center px-8" style={{ minHeight: "100vh" }}>
          {/* Magical Orb - Fixed positioning */}
          <div className="absolute top-1/2 left-1/2 w-32 h-32" style={{ transform: "translate(-50%, -50%)", zIndex: 10 }}>
            <AnimatePresence>
              {showOrb && (
                <motion.div
                  className="w-full h-full"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 2 }}
                  style={{ willChange: "transform, opacity" }}
                >
                  <motion.div
                    className="w-full h-full rounded-full"
                    style={{
                      background: "radial-gradient(circle, rgba(236, 72, 153, 0.8) 0%, rgba(244, 63, 94, 0.6) 40%, transparent 70%)",
                      filter: "blur(20px)",
                      willChange: "transform, opacity",
                    }}
                    animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Main Text Container with reserved space */}
          <div className="text-center relative z-20" style={{ minHeight: "300px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <AnimatePresence>
              {showText && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 2.5 }}
                  style={{ willChange: "transform, opacity" }}
                >
                  <motion.h1
                    className="font-playfair text-8xl md:text-9xl lg:text-[12rem] py-8 font-bold leading-none text-white text-glow"
                    initial={{ letterSpacing: "0.5em", opacity: 0 }}
                    animate={{ letterSpacing: "-0.03em", opacity: 1 }}
                    transition={{ duration: 3 }}
                    style={{ willChange: "opacity", lineHeight: 0.8 }}
                  >
                    Chirag
                  </motion.h1>

                  <motion.h2
                    className="font-space text-4xl md:text-5xl lg:text-6xl font-light text-gray-200 tracking-[0.3em] uppercase"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, delay: 1 }}
                    style={{ willChange: "transform, opacity" }}
                  >
                    Photography
                  </motion.h2>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Tagline with reserved space */}
          <div className="mt-16 text-center z-20" style={{ minHeight: "60px" }}>
            <AnimatePresence>
              {showSubtext && (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 2 }}
                  style={{ willChange: "transform, opacity" }}
                >
                  <motion.p className="font-cormorant text-2xl md:text-3xl text-gray-300 font-light tracking-wide leading-relaxed italic">
                    "Capture moments for Infinity"
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Progress Bar with fixed position */}
          <div className="absolute bottom-16 left-1/2" style={{ transform: "translateX(-50%)", zIndex: 20, width: "320px" }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 1.5 }}
              style={{ willChange: "opacity" }}
            >
              <div className="relative w-80 h-1 bg-gray-800/50 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-pink-500 via-rose-400 to-pink-500 rounded-full"
                  style={{ 
                    width: `${progress}%`,
                    willChange: "width",
                  }}
                />
              </div>
              <div className="text-center mt-3">
                <span className="font-inter text-xs text-pink-300 font-medium">
                  {Math.floor(progress)}%
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Morphing Effect */}
        <AnimatePresence>
          {startMorphing && (
            <motion.div className="absolute inset-0 z-40" style={{ contain: "layout style paint" }}>
              {morphElements.map((element) => (
                <motion.div
                  key={element.id}
                  className="absolute rounded-full bg-gradient-to-br from-pink-500/30 to-rose-500/30 blur-xl"
                  style={{
                    width: `${element.width}px`,
                    height: `${element.height}px`,
                    left: `${element.left}%`,
                    top: `${element.top}%`,
                    willChange: "transform, opacity",
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: [0, 1.5, 2],
                    opacity: [0, 0.6, 0],
                  }}
                  transition={{
                    duration: 2,
                    delay: element.id * 0.1,
                  }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dissolve Effect */}
        <AnimatePresence>
          {startDissolve && (
            <motion.div className="absolute inset-0 z-50" style={{ contain: "layout style paint" }}>
              {dissolveParticles.map((particle) => (
                <motion.div
                  key={particle.id}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{
                    left: `${particle.left}%`,
                    top: `${particle.top}%`,
                    willChange: "transform, opacity",
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                    y: [0, -particle.distance],
                  }}
                  transition={{
                    duration: 1.5,
                    delay: particle.delay,
                  }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Vertical Wipe - Final Animation */}
        <VerticalWipe startWipe={startWipeEffect} />
      </motion.div>
    </>
  );
}