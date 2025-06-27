// import { useState, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"

// interface LoadingScreenProps {
//   onComplete: () => void
// }

// export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
//   const [showText, setShowText] = useState(false)
//   const [showSubtext, setShowSubtext] = useState(false)
//   const [showOrb, setShowOrb] = useState(false)
//   const [startMorphing, setStartMorphing] = useState(false)
//   const [startDissolve, setStartDissolve] = useState(false)
//   const [progress, setProgress] = useState(0)

//   useEffect(() => {
//     // Enhanced cinematic timing sequence
//     const textTimer = setTimeout(() => setShowText(true), 600)
//     const orbTimer = setTimeout(() => setShowOrb(true), 1000)
//     const subtextTimer = setTimeout(() => setShowSubtext(true), 1800)
//     const morphTimer = setTimeout(() => setStartMorphing(true), 3500)
//     const dissolveTimer = setTimeout(() => setStartDissolve(true), 4500)
//     const completeTimer = setTimeout(() => onComplete(), 6000)

//     // Smooth progress animation with easing
//     const progressInterval = setInterval(() => {
//       setProgress((prev) => {
//         if (prev >= 100) {
//           clearInterval(progressInterval)
//           return 100
//         }
//         // Exponential easing for more natural progress
//         const increment = Math.max(0.5, (100 - prev) * 0.02)
//         return Math.min(100, prev + increment)
//       })
//     }, 50)

//     return () => {
//       clearTimeout(textTimer)
//       clearTimeout(orbTimer)
//       clearTimeout(subtextTimer)
//       clearTimeout(morphTimer)
//       clearTimeout(dissolveTimer)
//       clearTimeout(completeTimer)
//       clearInterval(progressInterval)
//     }
//   }, [onComplete])

//   return (
//     <>
//       {/* Enhanced Typography Styles */}
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600&family=Inter:wght@100;200;300;400;500;600;700&family=Crimson+Text:ital,wght@0,400;0,600;1,400;1,600&family=Space+Grotesk:wght@300;400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&display=swap');
        
//         .font-playfair {
//           font-family: 'Playfair Display', serif;
//         }
        
//         .font-inter {
//           font-family: 'Inter', sans-serif;
//         }
        
//         .font-crimson {
//           font-family: 'Crimson Text', serif;
//         }
        
//         .font-space {
//           font-family: 'Space Grotesk', sans-serif;
//         }
        
//         .font-cormorant {
//           font-family: 'Cormorant Garamond', serif;
//         }
        
//         .text-shimmer {
//           background: linear-gradient(
//             120deg,
//             transparent 0%,
//             transparent 40%,
//             rgba(255, 255, 255, 0.8) 50%,
//             transparent 60%,
//             transparent 100%
//           );
//           background-size: 200% 100%;
//           -webkit-background-clip: text;
//           background-clip: text;
//           animation: shimmer 3s infinite;
//         }
        
//         @keyframes shimmer {
//           0% { background-position: -200% 0; }
//           100% { background-position: 200% 0; }
//         }
        
//         .text-glow {
//           text-shadow: 
//             0 0 10px rgba(236, 72, 153, 0.5),
//             0 0 20px rgba(236, 72, 153, 0.3),
//             0 0 40px rgba(236, 72, 153, 0.1);
//         }
        
//         .magical-gradient {
//           background: linear-gradient(
//             135deg,
//             #ffffff 0%,
//             #fdf2f8 15%,
//             #fce7f3 30%,
//             #f3e8ff 45%,
//             #e0e7ff 60%,
//             #ddd6fe 75%,
//             #fce7f3 90%,
//             #ffffff 100%
//           );
//           background-size: 400% 400%;
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//           animation: magicalFlow 8s ease-in-out infinite;
//         }
        
//         @keyframes magicalFlow {
//           0%, 100% { background-position: 0% 50%; }
//           25% { background-position: 100% 50%; }
//           50% { background-position: 100% 100%; }
//           75% { background-position: 0% 100%; }
//         }
        
//         .aurora-bg {
//           background: linear-gradient(
//             45deg,
//             rgba(236, 72, 153, 0.1) 0%,
//             rgba(244, 63, 94, 0.1) 25%,
//             rgba(139, 69, 19, 0.05) 50%,
//             rgba(168, 85, 247, 0.1) 75%,
//             rgba(236, 72, 153, 0.1) 100%
//           );
//           background-size: 400% 400%;
//           animation: aurora 12s ease-in-out infinite;
//         }
        
//         @keyframes aurora {
//           0%, 100% { background-position: 0% 50%; }
//           33% { background-position: 100% 0%; }
//           66% { background-position: 0% 100%; }
//         }
//       `}</style>

//       <motion.div
//         className="fixed inset-0 z-50 overflow-hidden"
//         initial={{ opacity: 1 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//       >
//         {/* Enhanced Cinematic Background */}
//         <div className="absolute inset-0">
//           {/* Deep Space Gradient */}
//           <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black" />

//           {/* Aurora Background */}
//           <div className="absolute inset-0 aurora-bg opacity-30" />

//           {/* Sophisticated Film Grain */}
//           <div
//             className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
//             style={{
//               backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
//             }}
//           />

//           {/* Cinematic Vignette */}
//           <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/80" />

//           {/* Floating Magical Particles */}
//           {[...Array(40)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute rounded-full"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//                 width: `${Math.random() * 4 + 1}px`,
//                 height: `${Math.random() * 4 + 1}px`,
//                 background: `hsl(${Math.random() * 60 + 300}, 70%, 80%)`,
//                 filter: "blur(0.5px)",
//               }}
//               animate={{
//                 opacity: [0, 1, 0],
//                 scale: [0, 1.5, 0],
//                 y: [0, -100 - Math.random() * 50],
//                 x: [0, (Math.random() - 0.5) * 100],
//               }}
//               transition={{
//                 duration: Math.random() * 6 + 4,
//                 repeat: Number.POSITIVE_INFINITY,
//                 delay: Math.random() * 4,
//                 ease: [0.25, 0.46, 0.45, 0.94],
//               }}
//             />
//           ))}

//           {/* Mystical Energy Rings */}
//           {[...Array(5)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute top-1/2 left-1/2 border border-pink-400/10 rounded-full"
//               style={{
//                 width: `${(i + 1) * 200}px`,
//                 height: `${(i + 1) * 200}px`,
//                 marginLeft: `${-(i + 1) * 100}px`,
//                 marginTop: `${-(i + 1) * 100}px`,
//               }}
//               animate={{
//                 rotate: [0, 360],
//                 opacity: [0.1, 0.3, 0.1],
//                 scale: [0.8, 1.2, 0.8],
//               }}
//               transition={{
//                 duration: 15 + i * 3,
//                 repeat: Number.POSITIVE_INFINITY,
//                 delay: i * 2,
//                 ease: "linear",
//               }}
//             />
//           ))}
//         </div>

//         {/* Main Content Container */}
//         <div className="relative h-full flex flex-col items-center justify-center px-8">
//           {/* Magical Orb */}
//           <AnimatePresence>
//             {showOrb && (
//               <motion.div
//                 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
//                 initial={{ scale: 0, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 transition={{
//                   duration: 2,
//                   ease: [0.25, 0.46, 0.45, 0.94],
//                 }}
//               >
//                 {/* Core Orb */}
//                 <motion.div
//                   className="w-32 h-32 rounded-full relative"
//                   style={{
//                     background:
//                       "radial-gradient(circle, rgba(236, 72, 153, 0.8) 0%, rgba(244, 63, 94, 0.6) 40%, transparent 70%)",
//                     filter: "blur(20px)",
//                   }}
//                   animate={{
//                     scale: [1, 1.3, 1],
//                     opacity: [0.6, 1, 0.6],
//                   }}
//                   transition={{
//                     duration: 4,
//                     repeat: Number.POSITIVE_INFINITY,
//                     ease: "easeInOut",
//                   }}
//                 />

//                 {/* Inner Glow */}
//                 <motion.div
//                   className="absolute inset-0 w-16 h-16 m-auto rounded-full"
//                   style={{
//                     background:
//                       "radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(236, 72, 153, 0.5) 50%, transparent 70%)",
//                     filter: "blur(5px)",
//                   }}
//                   animate={{
//                     rotate: [0, 360],
//                     scale: [0.8, 1.2, 0.8],
//                   }}
//                   transition={{
//                     rotate: {
//                       duration: 8,
//                       repeat: Number.POSITIVE_INFINITY,
//                       ease: "linear",
//                     },
//                     scale: {
//                       duration: 3,
//                       repeat: Number.POSITIVE_INFINITY,
//                       ease: "easeInOut",
//                     },
//                   }}
//                 />

//                 {/* Orbiting Particles */}
//                 {[...Array(8)].map((_, i) => (
//                   <motion.div
//                     key={i}
//                     className="absolute w-2 h-2 bg-white rounded-full"
//                     style={{
//                       top: "50%",
//                       left: "50%",
//                       marginTop: "-4px",
//                       marginLeft: "-4px",
//                     }}
//                     animate={{
//                       rotate: [0, 360],
//                       x: [0, Math.cos((i * 45 * Math.PI) / 180) * 60],
//                       y: [0, Math.sin((i * 45 * Math.PI) / 180) * 60],
//                       opacity: [0.3, 1, 0.3],
//                     }}
//                     transition={{
//                       duration: 6,
//                       repeat: Number.POSITIVE_INFINITY,
//                       delay: i * 0.2,
//                       ease: "linear",
//                     }}
//                   />
//                 ))}
//               </motion.div>
//             )}
//           </AnimatePresence>

//           {/* Studio Brand */}
//           <AnimatePresence>
//             {showText && (
//               <motion.div
//                 className="text-center relative z-20"
//                 initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
//                 animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
//                 transition={{
//                   duration: 2.5,
//                   ease: [0.25, 0.46, 0.45, 0.94],
//                 }}
//               >
//                 {/* Main Logo */}
//                 <div className="relative mb-6">
//                   <motion.h1
//                     className="font-playfair text-8xl md:text-9xl lg:text-[12rem] py-8 font-bold tracking-[-0.03em] leading-none magical-gradient text-glow"
//                     initial={{ letterSpacing: "0.5em", opacity: 0 }}
//                     animate={{ letterSpacing: "-0.03em", opacity: 1 }}
//                     transition={{
//                       duration: 3,
//                       ease: [0.25, 0.46, 0.45, 0.94],
//                     }}
//                   >
//                     Chirag
//                   </motion.h1>

//                   {/* Elegant Flourish */}
//                   <motion.div
//                     className="absolute -bottom-4 left-1/2 transform -translate-x-1/2"
//                     initial={{ scaleX: 0, opacity: 0 }}
//                     animate={{ scaleX: 1, opacity: 1 }}
//                     transition={{
//                       duration: 2.5,
//                       delay: 1.5,
//                       ease: [0.25, 0.46, 0.45, 0.94],
//                     }}
//                   >
//                     <div className="flex items-center space-x-4">
//                       <div className="w-16 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent" />
//                       <motion.div
//                         className="w-3 h-3 bg-pink-400 rounded-full"
//                         animate={{
//                           scale: [1, 1.5, 1],
//                           opacity: [0.7, 1, 0.7],
//                         }}
//                         transition={{
//                           duration: 2,
//                           repeat: Number.POSITIVE_INFINITY,
//                           ease: "easeInOut",
//                         }}
//                       />
//                       <div className="w-16 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent" />
//                     </div>
//                   </motion.div>
//                 </div>

//                 <motion.h2
//                   className="font-space text-4xl md:text-5xl lg:text-6xl font-light text-gray-200 tracking-[0.3em] uppercase"
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{
//                     duration: 2,
//                     delay: 1,
//                     ease: [0.25, 0.46, 0.45, 0.94],
//                   }}
//                 >
//                   Photography
//                 </motion.h2>

//                 {/* Decorative Geometric Elements */}
//                 <motion.div
//                   className="absolute -top-16 -left-16 w-32 h-32 border border-pink-400/30 rounded-full"
//                   initial={{ scale: 0, rotate: -180, opacity: 0 }}
//                   animate={{ scale: 1, rotate: 0, opacity: 1 }}
//                   transition={{
//                     duration: 3,
//                     delay: 2,
//                     ease: [0.25, 0.46, 0.45, 0.94],
//                   }}
//                 />
//                 <motion.div
//                   className="absolute -top-8 -right-8 w-4 h-4 bg-gradient-to-br from-pink-500 to-rose-500 transform rotate-45"
//                   initial={{ scale: 0, rotate: 0 }}
//                   animate={{ scale: 1, rotate: 45 }}
//                   transition={{
//                     duration: 1.5,
//                     delay: 2.5,
//                     ease: [0.25, 0.46, 0.45, 0.94],
//                   }}
//                 />
//                 <motion.div
//                   className="absolute -bottom-12 -right-12 w-24 h-24 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-full blur-xl"
//                   initial={{ scale: 0, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   transition={{
//                     duration: 2,
//                     delay: 2.2,
//                     ease: [0.25, 0.46, 0.45, 0.94],
//                   }}
//                 />
//               </motion.div>
//             )}
//           </AnimatePresence>

//           {/* Enhanced Tagline */}
//           <AnimatePresence>
//             {showSubtext && (
//               <motion.div
//                 className="mt-16 text-center z-20"
//                 initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
//                 animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//                 transition={{
//                   duration: 2,
//                   ease: [0.25, 0.46, 0.45, 0.94],
//                 }}
//               >
//                 <motion.p
//                   className="font-cormorant text-2xl md:text-3xl text-gray-300 font-light tracking-wide leading-relaxed italic text-shimmer"
//                   animate={{
//                     opacity: [0.8, 1, 0.8],
//                   }}
//                   transition={{
//                     duration: 4,
//                     repeat: Number.POSITIVE_INFINITY,
//                     ease: "easeInOut",
//                   }}
//                 >
//                   "Capture the Moment for Infinity"
//                 </motion.p>
//               </motion.div>
//             )}
//           </AnimatePresence>

//           {/* Enhanced Progress Indicator */}
//           <motion.div
//             className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 2.5, duration: 1.5 }}
//           >
//             <div className="text-center mb-4">
//               <motion.span
//                 className="font-space text-sm text-gray-400 tracking-wider uppercase"
//                 animate={{
//                   opacity: [0.5, 1, 0.5],
//                 }}
//                 transition={{
//                   duration: 2,
//                   repeat: Number.POSITIVE_INFINITY,
//                   ease: "easeInOut",
//                 }}
//               >
//                 Loading Experience
//               </motion.span>
//             </div>

//             <div className="relative w-80 h-1 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm">
//               <motion.div
//                 className="h-full bg-gradient-to-r from-pink-500 via-rose-400 to-pink-500 rounded-full relative"
//                 initial={{ width: 0 }}
//                 animate={{ width: `${progress}%` }}
//                 transition={{
//                   duration: 0.1,
//                   ease: "easeOut",
//                 }}
//               >
//                 {/* Enhanced Shimmer Effect */}
//                 <motion.div
//                   className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
//                   animate={{
//                     x: ["-100%", "100%"],
//                   }}
//                   transition={{
//                     duration: 2.5,
//                     repeat: Number.POSITIVE_INFINITY,
//                     ease: "easeInOut",
//                   }}
//                 />

//                 {/* Progress Glow */}
//                 <motion.div
//                   className="absolute inset-0 bg-gradient-to-r from-pink-400/50 to-rose-400/50 rounded-full blur-sm"
//                   animate={{
//                     opacity: [0.5, 1, 0.5],
//                   }}
//                   transition={{
//                     duration: 1.5,
//                     repeat: Number.POSITIVE_INFINITY,
//                     ease: "easeInOut",
//                   }}
//                 />
//               </motion.div>
//             </div>

//             <div className="text-center mt-3">
//               <motion.span className="font-inter text-xs text-pink-300 font-medium" key={Math.floor(progress)}>
//                 {Math.floor(progress)}%
//               </motion.span>
//             </div>
//           </motion.div>
//         </div>

//         {/* Morphing Transition */}
//         <AnimatePresence>
//           {startMorphing && (
//             <motion.div
//               className="absolute inset-0 z-40"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               {/* Liquid Morphing Effect */}
//               {[...Array(12)].map((_, i) => (
//                 <motion.div
//                   key={i}
//                   className="absolute rounded-full bg-gradient-to-br from-pink-500/30 to-rose-500/30 blur-xl"
//                   style={{
//                     width: `${Math.random() * 200 + 100}px`,
//                     height: `${Math.random() * 200 + 100}px`,
//                     left: `${Math.random() * 100}%`,
//                     top: `${Math.random() * 100}%`,
//                   }}
//                   initial={{ scale: 0, opacity: 0 }}
//                   animate={{
//                     scale: [0, 1.5, 2],
//                     opacity: [0, 0.6, 0],
//                     x: [(Math.random() - 0.5) * 200, (Math.random() - 0.5) * 400],
//                     y: [(Math.random() - 0.5) * 200, (Math.random() - 0.5) * 400],
//                   }}
//                   transition={{
//                     duration: 2,
//                     delay: i * 0.1,
//                     ease: [0.25, 0.46, 0.45, 0.94],
//                   }}
//                 />
//               ))}
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Dissolve Effect */}
//         <AnimatePresence>
//           {startDissolve && (
//             <>
//               {/* Particle Dissolve */}
//               <motion.div
//                 className="absolute inset-0 z-50"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 {[...Array(100)].map((_, i) => (
//                   <motion.div
//                     key={i}
//                     className="absolute w-1 h-1 bg-white rounded-full"
//                     style={{
//                       left: `${Math.random() * 100}%`,
//                       top: `${Math.random() * 100}%`,
//                     }}
//                     initial={{ scale: 0, opacity: 0 }}
//                     animate={{
//                       scale: [0, 1, 0],
//                       opacity: [0, 1, 0],
//                       y: [0, -100 - Math.random() * 200],
//                       x: [(Math.random() - 0.5) * 100],
//                     }}
//                     transition={{
//                       duration: 1.5,
//                       delay: Math.random() * 0.5,
//                       ease: [0.25, 0.46, 0.45, 0.94],
//                     }}
//                   />
//                 ))}
//               </motion.div>

//               {/* Final Fade */}
//               <motion.div
//                 className="absolute inset-0 bg-black z-[60]"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{
//                   duration: 1,
//                   delay: 1,
//                   ease: [0.76, 0, 0.24, 1],
//                 }}
//               />

//               {/* Ethereal Flash */}
//               <motion.div
//                 className="absolute inset-0 bg-gradient-to-br from-pink-200/20 via-white/10 to-rose-200/20 z-[70]"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: [0, 1, 0] }}
//                 transition={{
//                   duration: 0.8,
//                   delay: 1.5,
//                   ease: "easeInOut",
//                 }}
//               />
//             </>
//           )}
//         </AnimatePresence>

//         {/* Enhanced Corner Cinematic Borders */}
//         {[
//           { position: "top-8 left-8", borders: "border-l-2 border-t-2" },
//           { position: "top-8 right-8", borders: "border-r-2 border-t-2" },
//           { position: "bottom-8 left-8", borders: "border-l-2 border-b-2" },
//           { position: "bottom-8 right-8", borders: "border-r-2 border-b-2" },
//         ].map((corner, i) => (
//           <div key={i} className={`absolute ${corner.position} z-20`}>
//             <motion.div
//               className={`w-20 h-20 ${corner.borders} border-white/30`}
//               initial={{ opacity: 0, scale: 0 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 1.5, delay: 3 + i * 0.1 }}
//             />
//           </div>
//         ))}
//       </motion.div>
//     </>
//   )
// }


import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface LoadingScreenProps {
  onComplete: () => void
}

function VerticalWipe({ startWipe }: { startWipe: boolean }) {
  return (
    <AnimatePresence>
      {startWipe && (
        <>
          {/* Top Half Wipe - Much smoother */}
          <motion.div
            className="absolute inset-x-0 top-0 bg-black z-[60]"
            initial={{ height: 0 }}
            animate={{ height: "50vh" }}
            transition={{
              duration: 1.2,
              ease: [0.76, 0, 0.24, 1], // Custom cubic-bezier for ultra smooth motion
            }}
          />

          {/* Bottom Half Wipe - Perfectly synchronized */}
          <motion.div
            className="absolute inset-x-0 bottom-0 bg-black z-[60]"
            initial={{ height: 0 }}
            animate={{ height: "50vh" }}
            transition={{
              duration: 1.2,
              ease: [0.76, 0, 0.24, 1], // Same easing for perfect sync
              delay: 0.05, // Tiny delay for cinematic effect
            }}
          />

          {/* Final Flash - Smoother timing */}
          <motion.div
            className="absolute inset-0 bg-white z-[70]"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.3, 0] }}
            transition={{
              duration: 0.25,
              delay: 1.0,
              ease: "easeInOut",
            }}
          />
        </>
      )}
    </AnimatePresence>
  )
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [showText, setShowText] = useState(false)
  const [showSubtext, setShowSubtext] = useState(false)
  const [showOrb, setShowOrb] = useState(false)
  const [startMorphing, setStartMorphing] = useState(false)
  const [startDissolve, setStartDissolve] = useState(false)
  const [startWipeEffect, setStartWipeEffect] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Enhanced cinematic timing sequence
    const textTimer = setTimeout(() => setShowText(true), 600)
    const orbTimer = setTimeout(() => setShowOrb(true), 1000)
    const subtextTimer = setTimeout(() => setShowSubtext(true), 1800)
    const morphTimer = setTimeout(() => setStartMorphing(true), 3500)
    const dissolveTimer = setTimeout(() => setStartDissolve(true), 4500)
    const wipeTimer = setTimeout(() => setStartWipeEffect(true), 5200)
    const completeTimer = setTimeout(() => onComplete(), 6800)

    // Smooth progress animation with easing
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        // Exponential easing for more natural progress
        const increment = Math.max(0.5, (100 - prev) * 0.02)
        return Math.min(100, prev + increment)
      })
    }, 50)

    return () => {
      clearTimeout(textTimer)
      clearTimeout(orbTimer)
      clearTimeout(subtextTimer)
      clearTimeout(morphTimer)
      clearTimeout(dissolveTimer)
      clearTimeout(wipeTimer)
      clearTimeout(completeTimer)
      clearInterval(progressInterval)
    }
  }, [onComplete])

  return (
    <>
      {/* Enhanced Typography Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600&family=Inter:wght@100;200;300;400;500;600;700&family=Crimson+Text:ital,wght@0,400;0,600;1,400;1,600&family=Space+Grotesk:wght@300;400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&display=swap');
        
        .font-playfair {
          font-family: 'Playfair Display', serif;
        }
        
        .font-inter {
          font-family: 'Inter', sans-serif;
        }
        
        .font-crimson {
          font-family: 'Crimson Text', serif;
        }
        
        .font-space {
          font-family: 'Space Grotesk', sans-serif;
        }
        
        .font-cormorant {
          font-family: 'Cormorant Garamond', serif;
        }
        
        .text-shimmer {
          background: linear-gradient(
            120deg,
            transparent 0%,
            transparent 40%,
            rgba(255, 255, 255, 0.8) 50%,
            transparent 60%,
            transparent 100%
          );
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          animation: shimmer 3s infinite;
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        .text-glow {
          text-shadow: 
            0 0 10px rgba(236, 72, 153, 0.5),
            0 0 20px rgba(236, 72, 153, 0.3),
            0 0 40px rgba(236, 72, 153, 0.1);
        }
        
        .magical-gradient {
          background: linear-gradient(
            135deg,
            #ffffff 0%,
            #fdf2f8 15%,
            #fce7f3 30%,
            #f3e8ff 45%,
            #e0e7ff 60%,
            #ddd6fe 75%,
            #fce7f3 90%,
            #ffffff 100%
          );
          background-size: 400% 400%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: magicalFlow 8s ease-in-out infinite;
        }
        
        @keyframes magicalFlow {
          0%, 100% { background-position: 0% 50%; }
          25% { background-position: 100% 50%; }
          50% { background-position: 100% 100%; }
          75% { background-position: 0% 100%; }
        }
        
        .aurora-bg {
          background: linear-gradient(
            45deg,
            rgba(236, 72, 153, 0.1) 0%,
            rgba(244, 63, 94, 0.1) 25%,
            rgba(139, 69, 19, 0.05) 50%,
            rgba(168, 85, 247, 0.1) 75%,
            rgba(236, 72, 153, 0.1) 100%
          );
          background-size: 400% 400%;
          animation: aurora 12s ease-in-out infinite;
        }
        
        @keyframes aurora {
          0%, 100% { background-position: 0% 50%; }
          33% { background-position: 100% 0%; }
          66% { background-position: 0% 100%; }
        }
      `}</style>

      <motion.div
        className="fixed inset-0 z-50 overflow-hidden"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Enhanced Cinematic Background */}
        <div className="absolute inset-0">
          {/* Deep Space Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black" />

          {/* Aurora Background */}
          <div className="absolute inset-0 aurora-bg opacity-30" />

          {/* Sophisticated Film Grain */}
          <div
            className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Cinematic Vignette */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/80" />

          {/* Floating Magical Particles */}
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                background: `hsl(${Math.random() * 60 + 300}, 70%, 80%)`,
                filter: "blur(0.5px)",
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
                y: [0, -100 - Math.random() * 50],
                x: [0, (Math.random() - 0.5) * 100],
              }}
              transition={{
                duration: Math.random() * 6 + 4,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 4,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            />
          ))}

          {/* Mystical Energy Rings */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 border border-pink-400/10 rounded-full"
              style={{
                width: `${(i + 1) * 200}px`,
                height: `${(i + 1) * 200}px`,
                marginLeft: `${-(i + 1) * 100}px`,
                marginTop: `${-(i + 1) * 100}px`,
              }}
              animate={{
                rotate: [0, 360],
                opacity: [0.1, 0.3, 0.1],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 15 + i * 3,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 2,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* Main Content Container */}
        <div className="relative h-full flex flex-col items-center justify-center px-8">
          {/* Magical Orb */}
          <AnimatePresence>
            {showOrb && (
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 2,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                {/* Core Orb */}
                <motion.div
                  className="w-32 h-32 rounded-full relative"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(236, 72, 153, 0.8) 0%, rgba(244, 63, 94, 0.6) 40%, transparent 70%)",
                    filter: "blur(20px)",
                  }}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />

                {/* Inner Glow */}
                <motion.div
                  className="absolute inset-0 w-16 h-16 m-auto rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(236, 72, 153, 0.5) 50%, transparent 70%)",
                    filter: "blur(5px)",
                  }}
                  animate={{
                    rotate: [0, 360],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    rotate: {
                      duration: 8,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    },
                    scale: {
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    },
                  }}
                />

                {/* Orbiting Particles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white rounded-full"
                    style={{
                      top: "50%",
                      left: "50%",
                      marginTop: "-4px",
                      marginLeft: "-4px",
                    }}
                    animate={{
                      rotate: [0, 360],
                      x: [0, Math.cos((i * 45 * Math.PI) / 180) * 60],
                      y: [0, Math.sin((i * 45 * Math.PI) / 180) * 60],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.2,
                      ease: "linear",
                    }}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Studio Brand */}
          <AnimatePresence>
            {showText && (
              <motion.div
                className="text-center relative z-20"
                initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{
                  duration: 2.5,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                {/* Main Logo */}
                <div className="relative mb-6">
                  <motion.h1
                    className="font-playfair text-8xl md:text-9xl lg:text-[12rem] py-8 font-bold tracking-[-0.03em] leading-none magical-gradient text-glow"
                    initial={{ letterSpacing: "0.5em", opacity: 0 }}
                    animate={{ letterSpacing: "-0.03em", opacity: 1 }}
                    transition={{
                      duration: 3,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  >
                    Chirag
                  </motion.h1>

                  {/* Elegant Flourish */}
                  <motion.div
                    className="absolute -bottom-4 left-1/2 transform -translate-x-1/2"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{
                      duration: 2.5,
                      delay: 1.5,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent" />
                      <motion.div
                        className="w-3 h-3 bg-pink-400 rounded-full"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.7, 1, 0.7],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                      />
                      <div className="w-16 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent" />
                    </div>
                  </motion.div>
                </div>

                <motion.h2
                  className="font-space text-4xl md:text-5xl lg:text-6xl font-light text-gray-200 tracking-[0.3em] uppercase"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 2,
                    delay: 1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  Photography
                </motion.h2>

                {/* Decorative Geometric Elements */}
                <motion.div
                  className="absolute -top-16 -left-16 w-32 h-32 border border-pink-400/30 rounded-full"
                  initial={{ scale: 0, rotate: -180, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  transition={{
                    duration: 3,
                    delay: 2,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                />
                <motion.div
                  className="absolute -top-8 -right-8 w-4 h-4 bg-gradient-to-br from-pink-500 to-rose-500 transform rotate-45"
                  initial={{ scale: 0, rotate: 0 }}
                  animate={{ scale: 1, rotate: 45 }}
                  transition={{
                    duration: 1.5,
                    delay: 2.5,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                />
                <motion.div
                  className="absolute -bottom-12 -right-12 w-24 h-24 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-full blur-xl"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 2,
                    delay: 2.2,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Enhanced Tagline */}
          <AnimatePresence>
            {showSubtext && (
              <motion.div
                className="mt-16 text-center z-20"
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 2,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <motion.p
                  className="font-cormorant text-2xl md:text-3xl text-gray-300 font-light tracking-wide leading-relaxed italic text-shimmer"
                  animate={{
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  "Capture the Moment for Infinity"
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Enhanced Progress Indicator */}
          <motion.div
            className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1.5 }}
          >
            <div className="text-center mb-4">
              <motion.span
                className="font-space text-sm text-gray-400 tracking-wider uppercase"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                Loading Experience
              </motion.span>
            </div>

            <div className="relative w-80 h-1 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm">
              <motion.div
                className="h-full bg-gradient-to-r from-pink-500 via-rose-400 to-pink-500 rounded-full relative"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{
                  duration: 0.1,
                  ease: "easeOut",
                }}
              >
                {/* Enhanced Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />

                {/* Progress Glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-400/50 to-rose-400/50 rounded-full blur-sm"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </div>

            <div className="text-center mt-3">
              <motion.span className="font-inter text-xs text-pink-300 font-medium" key={Math.floor(progress)}>
                {Math.floor(progress)}%
              </motion.span>
            </div>
          </motion.div>
        </div>

        {/* Morphing Transition */}
        <AnimatePresence>
          {startMorphing && (
            <motion.div
              className="absolute inset-0 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Liquid Morphing Effect */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-gradient-to-br from-pink-500/30 to-rose-500/30 blur-xl"
                  style={{
                    width: `${Math.random() * 200 + 100}px`,
                    height: `${Math.random() * 200 + 100}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: [0, 1.5, 2],
                    opacity: [0, 0.6, 0],
                    x: [(Math.random() - 0.5) * 200, (Math.random() - 0.5) * 400],
                    y: [(Math.random() - 0.5) * 200, (Math.random() - 0.5) * 400],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dissolve Effect */}
        <AnimatePresence>
          {startDissolve && (
            <>
              {/* Particle Dissolve */}
              <motion.div
                className="absolute inset-0 z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {[...Array(100)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                      y: [0, -100 - Math.random() * 200],
                      x: [(Math.random() - 0.5) * 100],
                    }}
                    transition={{
                      duration: 1.5,
                      delay: Math.random() * 0.5,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  />
                ))}
              </motion.div>

              {/* Final Fade */}
              <motion.div
                className="absolute inset-0 bg-black z-[60]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: 1,
                  ease: [0.76, 0, 0.24, 1],
                }}
              />

              {/* Ethereal Flash */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-pink-200/20 via-white/10 to-rose-200/20 z-[70]"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 0.8,
                  delay: 1.5,
                  ease: "easeInOut",
                }}
              />
            </>
          )}
        </AnimatePresence>

        {/* Vertical Wipe Effect - NEW */}
        <VerticalWipe startWipe={startWipeEffect} />

        {/* Enhanced Corner Cinematic Borders */}
        {[
          { position: "top-8 left-8", borders: "border-l-2 border-t-2" },
          { position: "top-8 right-8", borders: "border-r-2 border-t-2" },
          { position: "bottom-8 left-8", borders: "border-l-2 border-b-2" },
          { position: "bottom-8 right-8", borders: "border-r-2 border-b-2" },
        ].map((corner, i) => (
          <div key={i} className={`absolute ${corner.position} z-20`}>
            <motion.div
              className={`w-20 h-20 ${corner.borders} border-white/30`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 3 + i * 0.1 }}
            />
          </div>
        ))}
      </motion.div>
    </>
  )
}