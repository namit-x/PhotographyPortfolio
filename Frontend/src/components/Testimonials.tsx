import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Quote, ChevronLeft, ChevronRight, Camera, Sparkles } from "lucide-react"

interface Testimonial {
  id: number
  name: string
  role: string
  text: string
  event: string
  location: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya & Arjun Sharma",
    role: "Wedding Couple",
    text: "Chirag Studio captured our wedding day with such artistry and emotion. Every photograph tells our love story perfectly. The team was professional, creative, and made us feel so comfortable throughout the entire process.",
    event: "Traditional Indian Wedding",
    location: "Udaipur, Rajasthan",
  },
  {
    id: 2,
    name: "Meera Patel",
    role: "Bride",
    text: "The portrait session was absolutely magical! Chirag has an incredible eye for capturing the perfect moments. The lighting, composition, and overall aesthetic exceeded all my expectations. Highly recommend!",
    event: "Bridal Portrait Session",
    location: "Mumbai, Maharashtra",
  },
  {
    id: 3,
    name: "Rajesh & Kavya",
    role: "Anniversary Couple",
    text: "For our 10th anniversary, we wanted something special. Chirag Studio delivered beyond our dreams. The creative vision and attention to detail in every shot was remarkable. We treasure these memories forever.",
    event: "Anniversary Photoshoot",
    location: "Goa",
  },
  {
    id: 4,
    name: "Anita Gupta",
    role: "Mother",
    text: "The baby shower photography was absolutely stunning! Every precious moment was captured with such care and creativity. The team made everyone feel comfortable and the results were breathtaking.",
    event: "Baby Shower Celebration",
    location: "Delhi",
  },
  {
    id: 5,
    name: "Vikram Singh",
    role: "Groom",
    text: "Professional, creative, and incredibly talented! The engagement photos turned out better than we ever imagined. Chirag's artistic vision and technical expertise created memories we'll cherish forever.",
    event: "Engagement Ceremony",
    location: "Jaipur, Rajasthan",
  },
  {
    id: 6,
    name: "Deepika & Rohit",
    role: "Wedding Couple",
    text: "From our pre-wedding shoot to the reception, every moment was captured with perfection. The team's creativity and professionalism made our special day even more memorable. Absolutely recommend Chirag Studio!",
    event: "Destination Wedding",
    location: "Kerala",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [direction, setDirection] = useState(0)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToNext = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToPrevious = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className="relative py-16 bg-black overflow-hidden" style={{ minHeight: "80vh" }}>
      {/* Background gradient effects matching your theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-900/20 via-black to-purple-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(236,72,153,0.1),transparent_50%)]" />

      <div ref={sectionRef} className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Simple Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-pink-200 to-white bg-clip-text text-transparent mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Testimonials
          </motion.h2>

          <motion.p
            className="text-gray-300 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            What our clients say about their experience with us
          </motion.p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative h-[400px] perspective-1000">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.4 },
                }}
                className="absolute inset-0"
              >
                <div className="bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 backdrop-blur-xl border border-pink-500/20 rounded-3xl p-8 md:p-12 h-full flex flex-col justify-center relative overflow-hidden shadow-2xl shadow-pink-500/10">
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 via-transparent to-purple-500/5 rounded-3xl" />

                  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
                    {/* Client Info */}
                    <motion.div
                      className="text-center lg:text-left"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{currentTestimonial.name}</h3>
                      <p className="text-pink-300 text-sm uppercase tracking-wider mb-6">{currentTestimonial.role}</p>

                      <div className="space-y-3 text-gray-300 text-sm">
                        <div className="flex items-center justify-center lg:justify-start gap-2">
                          <Camera className="w-4 h-4 text-pink-400" />
                          <span>{currentTestimonial.event}</span>
                        </div>
                        <div className="flex items-center justify-center lg:justify-start gap-2">
                          <Sparkles className="w-4 h-4 text-pink-400" />
                          <span>{currentTestimonial.location}</span>
                        </div>
                      </div>
                    </motion.div>

                    {/* Testimonial Content */}
                    <motion.div
                      className="relative"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <Quote className="w-12 h-12 text-pink-400/40 mb-4" />

                      <blockquote className="text-xl md:text-2xl text-gray-100 leading-relaxed italic mb-6">
                        "{currentTestimonial.text}"
                      </blockquote>

                      <motion.div
                        className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="absolute inset-y-0 -left-16 flex items-center">
            <motion.button
              onClick={goToPrevious}
              className="p-4 rounded-full bg-gray-900/60 backdrop-blur-sm border border-pink-500/20 hover:bg-gray-800/80 hover:border-pink-400/40 transition-all duration-300 group"
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:text-pink-300 transition-colors" />
            </motion.button>
          </div>

          <div className="absolute inset-y-0 -right-16 flex items-center">
            <motion.button
              onClick={goToNext}
              className="p-4 rounded-full bg-gray-900/60 backdrop-blur-sm border border-pink-500/20 hover:bg-gray-800/80 hover:border-pink-400/40 transition-all duration-300 group"
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:text-pink-300 transition-colors" />
            </motion.button>
          </div>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative overflow-hidden transition-all duration-300 ${
                index === currentIndex
                  ? "w-12 h-3 bg-gradient-to-r from-pink-500 to-purple-500"
                  : "w-3 h-3 bg-gray-600 hover:bg-gray-500"
              } rounded-full`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {index === currentIndex && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400"
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{ duration: 5, ease: "linear" }}
                  key={`progress-${currentIndex}`}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Auto-play Control */}
        <div className="text-center mt-8">
          <motion.button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-gray-400 hover:text-pink-300 transition-colors text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isAutoPlaying ? "Pause Auto-play" : "Resume Auto-play"}
          </motion.button>
        </div>
      </div>
    </div>
  )
}