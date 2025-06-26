import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface MediaItem {
  type: 'image' | 'video';
  src: string;
  alt?: string;
  title?: string;
  description?: string;
}

const mediaItems: MediaItem[] = [
  {
    type: 'image',
    src: 'https://static.vecteezy.com/system/resources/previews/050/494/463/non_2x/indian-weddinggraphy-in-bangalore-free-photo.jpg',
    alt: 'Indian bride in red silk saree with gold jewelry',
    title: 'Traditional Indian Bride',
    description: 'A bride adorned in a stunning red saree and intricate gold jewelry—pure timeless elegance'
  },
  {
    type: 'image',
    src: 'https://images.prismic.io/memoriesdesigner/af264e19-796a-4ff5-bc68-b54c3996a18e_4.png',
    alt: 'Groom during Haldi ceremony, turmeric paste on his face',
    title: 'Haldi Prelude',
    description: 'Joyful pre-wedding Haldi ceremony—vibrant turmeric rituals for laughter and blessings'
  },
  {
    "type": "image",
    "src": "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    "alt": "Conference event with stage lighting",
    "title": "Professional Excellence",
    "description": "Corporate gala with perfect lighting"
  },
  {
    "type": "image",
    "src": "https://images.pexels.com/photos/274131/pexels-photo-274131.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop&fm=webp",
    "alt": "Luxury event venue with crystal chandeliers",
    "title": "Grand Soirée",
    "description": "Elegant reception under sparkling chandeliers"
  }
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [timerReset, setTimerReset] = useState(0);

  const currentMedia = mediaItems[currentIndex];

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, timerReset]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
    setTimerReset((prev) => prev + 1);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
    setTimerReset((prev) => prev + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVideoPlay = () => {
    setIsPlaying(false);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Media Container */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="absolute inset-0"
          >
            {currentMedia.type === 'image' ? (
              <img
                src={currentMedia.src}
                alt={currentMedia.alt}
                className="w-full h-full object-cover"
              />
            ) : (
              <video
                src={currentMedia.src}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted={isMuted}
                playsInline
                onPlay={handleVideoPlay}
              />
            )}
            {/* Simple Transparent Blur Layer */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-xs" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

      {/* Content Overlay */}
      {/* <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-4xl px-8 py-12 backdrop-blur-md bg-black/30 rounded-3xl border border-white/10 shadow-2xl"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-rose-600 bg-clip-text text-transparent">
            Meenakshi Studio
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xl md:text-2xl mb-8 text-pink-100/90 font-light"
          >
            Reflection of your loving moments
          </motion.p>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mb-8 bg-white/5 p-6 rounded-xl"
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-white">
                {currentMedia.title}
              </h2>
              <p className="text-lg text-pink-50/80 max-w-2xl mx-auto">
                {currentMedia.description}
              </p>
            </motion.div>
          </AnimatePresence>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-pink-600 to-rose-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-rose-500/40 transition-all duration-300 border border-white/20"
          >
            Explore Our Work
          </motion.button>
        </motion.div>
      </div> */}

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-4xl px-4"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white">
            Meenakshi Studio
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xl md:text-2xl mb-8 text-pink-100 font-light"
          >
            Reflection of your loving moments
          </motion.p>

          <div className="h-px w-32 bg-pink-400 mx-auto mb-8"></div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-white">
                {currentMedia.title}
              </h2>
              <p className="text-lg text-pink-50 max-w-2xl mx-auto">
                {currentMedia.description}
              </p>
            </motion.div>
          </AnimatePresence>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300 border-2 border-white"
          >
            Explore Our Work
          </motion.button>
        </motion.div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute inset-y-0 left-4 flex items-center z-20">
        <button
          onClick={goToPrevious}
          className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 group"
        >
          <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>
      </div>

      <div className="absolute inset-y-0 right-4 flex items-center z-20">
        <button
          onClick={goToNext}
          className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 group"
        >
          <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Media Controls */}
      <div className="absolute bottom-6 left-6 flex items-center gap-4 z-20">
        <button
          onClick={togglePlayPause}
          className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 text-white" />
          ) : (
            <Play className="w-5 h-5 text-white" />
          )}
        </button>

        {currentMedia.type === 'video' && (
          <button
            onClick={toggleMute}
            className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5 text-white" />
            ) : (
              <Volume2 className="w-5 h-5 text-white" />
            )}
          </button>
        )}
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {mediaItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
              ? 'bg-white scale-125'
              : 'bg-white/50 hover:bg-white/70'
              }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20 z-20">
        <motion.div
          className="h-full bg-gradient-to-r from-pink-500 to-rose-500"
          initial={{ width: 0 }}
          animate={{ width: isPlaying ? '100%' : '0%' }}
          transition={{ duration: 5, ease: "linear" }}
          key={`${currentIndex}-${isPlaying}`}
        />
      </div>
    </div>
  );
}