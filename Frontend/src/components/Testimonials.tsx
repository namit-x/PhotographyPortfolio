import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah & Michael Chen',
    role: 'Wedding Clients',
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
    quote: 'Meenakshi Studio captured our wedding day with such artistry and emotion. Every photo tells the story of our love perfectly. The attention to detail and creative vision exceeded all our expectations.',
    rating: 5,
    location: 'San Francisco, CA'
  },
  {
    name: 'Jennifer Martinez',
    role: 'Portrait Client',
    image: 'https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=150',
    quote: 'The portrait session was incredible. They made me feel comfortable and confident, and the results were absolutely stunning. I finally have photos I love of myself!',
    rating: 5,
    location: 'Los Angeles, CA'
  },
  {
    name: 'David Thompson',
    role: 'Corporate Client',
    image: 'https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=150',
    quote: 'Professional, creative, and reliable. Meenakshi Studio delivered exceptional corporate headshots for our entire team. The quality and turnaround time were outstanding.',
    rating: 5,
    location: 'New York, NY'
  },
  {
    name: 'Emily & James Wilson',
    role: 'Family Clients',
    image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150',
    quote: 'From our maternity photos to our newborn session, they captured every precious moment beautifully. The patience and skill in working with our little one was remarkable.',
    rating: 5,
    location: 'Austin, TX'
  },
  {
    name: 'Alexandra Rivera',
    role: 'Fashion Client',
    image: 'https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=150',
    quote: 'The fashion editorial shoot was a dream come true. The creative direction and execution were flawless. These photos launched my modeling career to the next level.',
    rating: 5,
    location: 'Miami, FL'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-white to-pink-50/30 animate-on-scroll" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-black mb-6 tracking-tight">
            Testimonials
            <span className="block text-pink-600 text-3xl md:text-4xl font-normal mt-4">
              What our clients say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our amazing clients have to say 
            about their experience with Meenakshi Studio.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden min-h-[450px] border border-pink-100">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                className="p-10 md:p-16"
              >
                <div className="flex flex-col md:flex-row items-center gap-10">
                  {/* Quote Icon */}
                  <motion.div
                    className="flex-shrink-0"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <Quote className="w-20 h-20 text-pink-600" />
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <motion.blockquote
                      className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 font-medium"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      "{testimonials[currentIndex].quote}"
                    </motion.blockquote>

                    {/* Stars */}
                    <motion.div
                      className="flex justify-center md:justify-start gap-1 mb-6"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                    >
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.5 + (i * 0.1) }}
                        >
                          <Star className="w-6 h-6 fill-pink-500 text-pink-500" />
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Client Info */}
                    <motion.div
                      className="flex items-center justify-center md:justify-start gap-5"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-16 h-16 rounded-full object-cover shadow-lg"
                      />
                      <div>
                        <div className="font-bold text-black text-lg">
                          {testimonials[currentIndex].name}
                        </div>
                        <div className="text-gray-600">
                          {testimonials[currentIndex].role} • {testimonials[currentIndex].location}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-6 mt-10">
            <motion.button
              onClick={prevTestimonial}
              className="p-4 rounded-full bg-white shadow-lg hover:shadow-xl hover:bg-pink-50 transition-all duration-300 border border-pink-100"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-pink-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="p-4 rounded-full bg-white shadow-lg hover:shadow-xl hover:bg-pink-50 transition-all duration-300 border border-pink-100"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </motion.button>
          </div>
        </div>

        {/* Background decorations */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-rose-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  );
}