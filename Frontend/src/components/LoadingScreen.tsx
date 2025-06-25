"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [showText, setShowText] = useState(false)
  const [showSubtext, setShowSubtext] = useState(false)
  const [showLine, setShowLine] = useState(false)
  const [startEclipse, setStartEclipse] = useState(false)
  const [startWipe, setStartWipe] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Cinematic timing sequence
    const textTimer = setTimeout(() => setShowText(true), 400)
    const subtextTimer = setTimeout(() => setShowSubtext(true), 1200)
    const lineTimer = setTimeout(() => setShowLine(true), 2000)
    const eclipseTimer = setTimeout(() => setStartEclipse(true), 3200)
    const wipeTimer = setTimeout(() => setStartWipe(true), 4000)
    const completeTimer = setTimeout(() => onComplete(), 5500)

    // Smooth progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 2
      })
    }, 45)

    return () => {
      clearTimeout(textTimer)
      clearTimeout(subtextTimer)
      clearTimeout(lineTimer)
      clearTimeout(eclipseTimer)
      clearTimeout(wipeTimer)
      clearTimeout(completeTimer)
      clearInterval(progressInterval)
    }
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-50 overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Cinematic Background */}
      <div className="absolute inset-0">
        {/* Premium Gradient Base */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black" />

        {/* Subtle Film Grain */}
        <div
          className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Cinematic Vignette */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/60" />

        {/* Floating Light Particles */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: "blur(0.5px)",
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
              y: [0, -50],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          />
        ))}

        {/* Ambient Light Rays */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-pink-400/50 via-transparent to-transparent origin-top"
              style={{
                transform: `rotate(${i * 45}deg)`,
              }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
                scaleY: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative h-full flex flex-col items-center justify-center px-8">
        {/* Studio Brand */}
        <AnimatePresence>
          {showText && (
            <motion.div
              className="text-center relative"
              initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{
                duration: 1.8,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              {/* Main Logo */}
              <div className="relative mb-4">
                <motion.h1
                  className="text-8xl md:text-9xl lg:text-[10rem] font-thin tracking-[-0.02em] leading-none"
                  style={{
                    background:
                      "linear-gradient(135deg, #ffffff 0%, #fdf2f8 25%, #fce7f3 50%, #f3e8ff 75%, #ffffff 100%)",
                    backgroundSize: "200% 200%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textShadow: "0 0 40px rgba(236, 72, 153, 0.3)",
                  }}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  Meenakshi
                </motion.h1>

                {/* Elegant Underline */}
                <motion.div
                  className="absolute -bottom-2 left-1/2 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent"
                  initial={{ width: 0, x: "-50%" }}
                  animate={{ width: "80%", x: "-50%" }}
                  transition={{
                    duration: 2,
                    delay: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                />
              </div>

              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-extralight text-gray-300 tracking-[0.2em] uppercase"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.5,
                  delay: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                Studio
              </motion.h2>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-12 -left-12 w-24 h-24 border border-pink-400/20 rounded-full"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  duration: 2,
                  delay: 1.2,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              />
              <motion.div
                className="absolute -bottom-8 -right-8 w-16 h-16 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-full blur-sm"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 1.5,
                  delay: 1.5,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tagline */}
        <AnimatePresence>
          {showSubtext && (
            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 1.5,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <motion.p
                className="text-xl md:text-2xl text-gray-400 font-light tracking-wide leading-relaxed"
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                Where moments become timeless
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Progress Indicator */}
        <motion.div
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
        >
          <div className="w-64 h-px bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-pink-500 via-rose-400 to-pink-500 rounded-full relative"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{
                duration: 0.1,
                ease: "easeOut",
              }}
            >
              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Cinematic Sweep Line */}
      <AnimatePresence>
        {showLine && (
          <motion.div
            className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 z-30"
            initial={{ scaleX: 0, opacity: 1 }}
            animate={{
              scaleX: 1,
              opacity: [1, 1, 0.8, 0],
            }}
            transition={{
              scaleX: {
                duration: 2,
                ease: [0.25, 0.46, 0.45, 0.94],
              },
              opacity: {
                duration: 2,
                times: [0, 0.7, 0.9, 1],
                ease: "easeOut",
              },
            }}
            style={{ transformOrigin: "left" }}
          >
            <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent" />
            <div className="h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent mt-px blur-sm" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Eclipse Effect */}
      <AnimatePresence>
        {startEclipse && (
          <motion.div
            className="absolute inset-0 z-40 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Eclipse Shadow */}
            <motion.div
              className="absolute w-96 h-96 rounded-full"
              style={{
                background: "radial-gradient(circle, transparent 30%, rgba(0,0,0,0.9) 70%)",
                filter: "blur(20px)",
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 8 }}
              transition={{
                duration: 1.5,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            />

            {/* Eclipse Ring */}
            <motion.div
              className="absolute w-32 h-32 rounded-full border-2 border-pink-400/50"
              initial={{ scale: 0, rotate: 0 }}
              animate={{
                scale: [0, 1.2, 1],
                rotate: 360,
                borderColor: ["rgba(236, 72, 153, 0.5)", "rgba(255, 255, 255, 0.8)", "rgba(236, 72, 153, 0.5)"],
              }}
              transition={{
                duration: 1.5,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            />

            {/* Corona Effect */}
            <motion.div
              className="absolute w-40 h-40 rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent, rgba(236, 72, 153, 0.3), transparent, rgba(244, 63, 94, 0.3), transparent)",
                filter: "blur(10px)",
              }}
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Vertical Wipe Animation */}
      <AnimatePresence>
        {startWipe && (
          <>
            {/* Top Half Wipe */}
            <motion.div
              className="absolute inset-x-0 top-0 bg-black z-[60]"
              initial={{ height: 0 }}
              animate={{ height: "50vh" }}
              transition={{
                duration: 1.5,
                ease: [0.76, 0, 0.24, 1],
              }}
            />

            {/* Bottom Half Wipe */}
            <motion.div
              className="absolute inset-x-0 bottom-0 bg-black z-[60]"
              initial={{ height: 0 }}
              animate={{ height: "50vh" }}
              transition={{
                duration: 1.5,
                ease: [0.76, 0, 0.24, 1],
                delay: 0.1,
              }}
            />

            {/* Final Flash */}
            <motion.div
              className="absolute inset-0 bg-white z-[70]"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.4, 0] }}
              transition={{
                duration: 0.3,
                delay: 1.2,
                ease: "easeInOut",
              }}
            />
          </>
        )}
      </AnimatePresence>

      {/* Corner Cinematic Borders */}
      <div className="absolute top-8 left-8 z-20">
        <motion.div
          className="w-16 h-16 border-l-2 border-t-2 border-white/20"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        />
      </div>
      <div className="absolute top-8 right-8 z-20">
        <motion.div
          className="w-16 h-16 border-r-2 border-t-2 border-white/20"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2.6 }}
        />
      </div>
      <div className="absolute bottom-8 left-8 z-20">
        <motion.div
          className="w-16 h-16 border-l-2 border-b-2 border-white/20"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2.7 }}
        />
      </div>
      <div className="absolute bottom-8 right-8 z-20">
        <motion.div
          className="w-16 h-16 border-r-2 border-b-2 border-white/20"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2.8 }}
        />
      </div>
    </motion.div>
  )
}
