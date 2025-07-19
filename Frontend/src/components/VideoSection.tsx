import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Play, Pause, Volume2, VolumeX, ChevronLeft, ChevronRight, Monitor, X } from "lucide-react"
import { Dialog, DialogContent } from "../components/ui/dialog"

declare global {
  namespace NodeJS {
    interface Timeout { }
  }
}

interface VideoItem {
  id: number
  title: string
  description: string
  category: string
  src: string
  thumbnail?: string
}

// Reels data from public folder
const reelsData: Omit<VideoItem, 'thumbnail'>[] = [
  {
    id: 1,
    title: "Wedding Highlights",
    description: "Beautiful moments captured in a stunning wedding ceremony",
    category: "Wedding",
    src: "/Homepage/Demo2.mp4"
  },
  {
    id: 2,
    title: "Engagement Story",
    description: "A romantic engagement session in the golden hour",
    category: "Engagement",
    src: "/Homepage/Demo.webm"
  },
  {
    id: 3,
    title: "Reception Dance",
    description: "Joyful celebration moments from the reception",
    category: "Reception",
    src: "/videos/reel3.mp4"
  },
  {
    id: 4,
    title: "Bridal Prep",
    description: "Getting ready moments with the bride",
    category: "Bridal",
    src: "/videos/reel4.mp4"
  }
]

// Videos data from public folder
const videosData: VideoItem[] = [
  {
    id: 5,
    title: "Wedding Highlights",
    description: "Cinematic wedding stories that capture the essence of love",
    category: "Weddings",
    src: "/Homepage/Demo.webm",
    thumbnail: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 6,
    title: "Behind the Lens",
    description: "Creative process and artistic vision in motion",
    category: "Behind Scenes",
    src: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
    thumbnail: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
]

const VideoModal = ({
  isOpen,
  onClose,
  video,
}: {
  isOpen: boolean
  onClose: () => void
  video: VideoItem | null
}) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [showControls, setShowControls] = useState(true)
  const [aspectRatio, setAspectRatio] = useState(16 / 9)
  const videoRef = useRef<HTMLVideoElement>(null)
  const controlsTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (isOpen && video) {
      setIsPlaying(false)
      setShowControls(true)
    }
  }, [isOpen, video])

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isOpen) return

      switch (e.code) {
        case "Space":
          e.preventDefault()
          togglePlay()
          break
        case "KeyM":
          toggleMute()
          break
        case "Escape":
          onClose()
          break
      }
    }

    document.addEventListener("keydown", handleKeyPress)
    return () => document.removeEventListener("keydown", handleKeyPress)
  }, [isOpen, isPlaying, isMuted])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleVideoLoadedMetadata = () => {
    if (videoRef.current) {
      const { videoWidth, videoHeight } = videoRef.current
      setAspectRatio(videoWidth / videoHeight)
    }
  }

  const showControlsTemporarily = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current !== null) {
      window.clearTimeout(controlsTimeoutRef.current);
    }
    if (isPlaying) {
      controlsTimeoutRef.current = window.setTimeout(() => {
        setShowControls(false);
      }, 3000);
    }
  };

  const handleMouseMove = () => {
    showControlsTemporarily()
  }

  const getVideoContainerStyle = () => {
    const maxWidth = Math.min(window.innerWidth * 0.9, 1200)
    const maxHeight = Math.min(window.innerHeight * 0.8, 800)

    let width, height

    if (aspectRatio > maxWidth / maxHeight) {
      // Video is wider relative to container
      width = maxWidth
      height = maxWidth / aspectRatio
    } else {
      // Video is taller relative to container
      height = maxHeight
      width = maxHeight * aspectRatio
    }

    return {
      width: `${width}px`,
      height: `${height}px`,
      maxWidth: "90vw",
      maxHeight: "80vh",
    }
  }

  if (!video) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="max-w-none w-auto h-auto p-0 bg-black border-0 overflow-hidden"
        style={getVideoContainerStyle()}
      >
        <div
          className="relative w-full h-full bg-black group"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => !isPlaying && setShowControls(true)}
        >
          {/* Video */}
          <video
            ref={videoRef}
            className="w-full h-full object-contain"
            poster={video.thumbnail}
            onLoadedMetadata={handleVideoLoadedMetadata}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => {
              setIsPlaying(false)
              setShowControls(true)
            }}
            onClick={togglePlay}
          >
            <source src={video.src} type="video/webm" />
          </video>

          {/* Controls Overlay */}
          <AnimatePresence>
            {showControls && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-200 z-10"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Play/Pause Button (Center) */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button
                    onClick={togglePlay}
                    className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
                  </motion.button>
                </div>

                {/* Bottom Controls */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={togglePlay}
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200"
                      >
                        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                      </button>
                      <button
                        onClick={toggleMute}
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200"
                      >
                        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Video Info */}
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-gradient-to-r from-pink-500/80 to-rose-500/80 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-medium uppercase tracking-wider">
                        {video.category}
                      </div>
                    </div>
                    <h3 className="text-white font-semibold text-xl mb-1">{video.title}</h3>
                    <p className="text-gray-300 text-sm">{video.description}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  )
}

const ReelSlider = ({ onVideoClick }: { onVideoClick: (video: Omit<VideoItem, 'thumbnail'>) => void }) => {
  const [currentReelIndex, setCurrentReelIndex] = useState(0)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)
  const currentReel = reelsData[currentReelIndex]

  const nextReel = () => {
    setCurrentReelIndex((prev) => (prev + 1) % reelsData.length)
  }

  const prevReel = () => {
    setCurrentReelIndex((prev) => (prev - 1 + reelsData.length) % reelsData.length)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
    }
  }

  const handleVideoClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    onVideoClick(currentReel)
  }

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted
      videoRef.current.play().catch(e => console.log("Autoplay prevented:", e))
    }
  }, [currentReelIndex, isMuted])

  return (
    <div className="relative h-full bg-gray-900 rounded-2xl overflow-hidden group w-[340px]">
      {/* Video - Always autoplaying */}
      <video
        ref={videoRef}
        key={currentReel.id}
        className="w-full h-full object-cover cursor-pointer"
        loop
        autoPlay
        muted={isMuted}
        playsInline
        onClick={handleVideoClick}
      >
        <source src={currentReel.src} type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

      {/* Navigation Arrows */}
      <button
        onClick={prevReel}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/60 transition-all duration-200 opacity-0 group-hover:opacity-100 z-10"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={nextReel}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/60 transition-all duration-200 opacity-0 group-hover:opacity-100 z-10"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Mute Control Only (removed play/pause) */}
      <div className="absolute bottom-6 left-6 right-6">
        <div className="flex items-center justify-end mb-4">
          <button
            onClick={toggleMute}
            className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Category Badge */}
      <div className="absolute top-6 left-6 bg-gradient-to-r from-purple-500/80 to-pink-500/80 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-medium uppercase tracking-wider">
        {currentReel.category}
      </div>
    </div>
  )
}


const VideoPlayer = ({
  video,
  index,
  onVideoClick,
}: {
  video: VideoItem
  index: number
  onVideoClick: (video: VideoItem) => void
}) => {
  const handleClick = () => {
    onVideoClick(video)
  }

  return (
    <motion.div
      className="relative bg-gray-900 rounded-2xl overflow-hidden group cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Thumbnail */}
      <div className="relative w-80 h-[40vh] overflow-hidden">
        <img src={video.thumbnail || "/placeholder.svg"} alt={video.title} className="w-full h-full object-cover" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white group-hover:bg-white/30 transition-all duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Play className="w-8 h-8 ml-1" />
          </motion.div>
        </div>

        {/* Video Info */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-center justify-between mb-2">
            <div className="bg-gradient-to-r from-pink-500/80 to-rose-500/80 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-medium uppercase tracking-wider">
              {video.category}
            </div>
          </div>
          <h3 className="text-white font-semibold text-xl mb-1">{video.title}</h3>
          <p className="text-gray-300 text-sm">{video.description}</p>
        </div>

        {/* Click to play hint */}
        <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          Click to play
        </div>
      </div>
    </motion.div>
  )
}

export default function VideoSection() {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const handleVideoClick = (video: VideoItem) => {
    setSelectedVideo(video)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedVideo(null)
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(236,72,153,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]" />
      </div>

      <div ref={sectionRef} className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.div
            className="mb-8"
            animate={{
              rotate: [0, 2, -2, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <div className="relative inline-block">
              <Monitor className="w-16 h-16 text-pink-400 mx-auto" />
              <motion.div
                className="absolute -inset-4 border border-pink-400/20 rounded-2xl"
                animate={{
                  borderColor: ["rgba(236,72,153,0.2)", "rgba(168,85,247,0.3)", "rgba(236,72,153,0.2)"],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
          <motion.span
            className="inline-block text-sm uppercase tracking-[0.3em] text-pink-300 font-light mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Premium Experience
          </motion.span>
          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span className="bg-gradient-to-r from-white via-pink-200 to-purple-300 bg-clip-text text-transparent">
              Digital
            </span>
            <span className="text-white">Showcase</span>
          </motion.h2>
        </motion.div>

        {/* Laptop Interface */}
        <motion.div
          className="relative max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Screen Content */}
          <div className="bg-gray-950 rounded-xl overflow-hidden min-h-[600px] lg:min-h-[700px]">
            {/* Split Layout - Adjusted for fixed ReelSlider width */}
            <div className="grid grid-cols-1 lg:grid-cols-[440px_1fr] h-full">
              {/* Left Section - Reels (fixed width) */}
              <div className="relative p-6 border-r border-gray-800 w-[420px]">
                <div className="mb-4">
                  <h3 className="text-white text-xl font-semibold mb-2">Instagram Reels</h3>
                  <p className="text-gray-400 text-sm">Click to view in fullscreen</p>
                </div>
                <div className="h-[400px] lg:h-[600px] w-full">
                  <ReelSlider onVideoClick={handleVideoClick} />
                </div>
              </div>

              {/* Right Section - Feature Videos (flexible width) */}
              <div className="relative p-6 flex-1">
                <div className="mb-4">
                  <h3 className="text-white text-xl font-semibold mb-2">Feature Films</h3>
                  <p className="text-gray-400 text-sm">Click to play full cinematic experiences</p>
                </div>
                <div className="space-y-6 h-[500px] lg:h-[600px]">
                  {videosData.map((video, index) => (
                    <div key={video.id} className="h-[calc(50%-12px)]">
                      <VideoPlayer video={video} index={index} onVideoClick={handleVideoClick} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Ambient Glow */}
          <div className="absolute -inset-20 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-pink-500/10 blur-3xl -z-10" />
        </motion.div>
      </div>

      {/* Video Modal */}
      <VideoModal isOpen={isModalOpen} onClose={handleCloseModal} video={selectedVideo} />
    </div>
  )
}
