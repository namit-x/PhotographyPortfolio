// import React, { useState, useRef, useEffect, useCallback, useMemo } from "react"
// import { motion, AnimatePresence, useInView } from "framer-motion"
// import { Play, Pause, Volume2, VolumeX, ChevronLeft, ChevronRight, Monitor, X } from "lucide-react"
// import { Dialog, DialogContent } from "../components/ui/dialog"

// declare global {
//   namespace NodeJS {
//     interface Timeout {}
//   }
// }

interface VideoItem {
  id: number
  title: string
  description: string
  category: string
  src: string
  thumbnail?: string
  fallbackSrc?: string
  duration: string
}

// // // Reels data from public folder
// const reelsData: Omit<VideoItem, "thumbnail">[] = [
//   {
//     id: 1,
//     title: "Wedding Highlights",
//     description: "Beautiful moments captured in a stunning wedding ceremony",
//     category: "Wedding",
//     src: "/Demo2.webm",
//     fallbackSrc: "/Demo2.mp4",
//   },
//   {
//     id: 2,
//     title: "Engagement Story",
//     description: "A romantic engagement session in the golden hour",
//     category: "Engagement",
//     src: "/Demo3.webm",
//     fallbackSrc: "/Demo3.mp4",
//   },
//   {
//     id: 3,
//     title: "Reception Dance",
//     description: "Joyful celebration moments from the reception",
//     category: "Reception",
//     src: "/videos/reel3.webm",
//     fallbackSrc: "/videos/reel3.mp4",
//   },
//   {
//     id: 4,
//     title: "Bridal Prep",
//     description: "Getting ready moments with the bride",
//     category: "Bridal",
//     src: "/videos/reel4.webm",
//     fallbackSrc: "/videos/reel4.mp4",
//   },
// ]

// // Enhanced videos data with more items for mobile
// const videosData: VideoItem[] = [
//   {
//     id: 5,
//     title: "Wedding Highlights",
//     description: "Cinematic wedding stories that capture the essence of love",
//     category: "Weddings",
//     src: "/Homepage/Demo.webm",
//     fallbackSrc: "/Homepage/Demo.mp4",
//     thumbnail: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800",
//   },
//   {
//     id: 6,
//     title: "Behind the Lens",
//     description: "Creative process and artistic vision in motion",
//     category: "Behind Scenes",
//     src: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
//     thumbnail: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=800",
//   },
//   {
//     id: 7,
//     title: "Engagement Story",
//     description: "Romantic moments captured in golden hour",
//     category: "Engagement",
//     src: "/Homepage/Demo.webm",
//     fallbackSrc: "/Homepage/Demo.mp4",
//     thumbnail: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800",
//   },
//   {
//     id: 8,
//     title: "Corporate Event",
//     description: "Professional event coverage with cinematic quality",
//     category: "Corporate",
//     src: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
//     thumbnail: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=800",
//   },
//   {
//     id: 9,
//     title: "Birthday Celebration",
//     description: "Joyful moments from a special birthday party",
//     category: "Birthday",
//     src: "/Homepage/Demo.webm",
//     fallbackSrc: "/Homepage/Demo.mp4",
//     thumbnail: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800",
//   },
//   {
//     id: 10,
//     title: "Travel Documentary",
//     description: "Capturing the beauty of destination weddings",
//     category: "Travel",
//     src: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
//     thumbnail: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=800",
//   },
// ]

import type React from "react"

import { useState, useRef } from "react"
import { motion, AnimatePresence, type Variants } from "framer-motion"
import { useInView } from "framer-motion"
import { Film, Camera, Play, Pause, ChevronLeft, ChevronRight, VolumeX, Volume2 } from "lucide-react"

// interface VideoItem {
//   id: number
//   title: string
//   description: string
//   src: string
//   thumbnail?: string
//   duration: string
//   category: string
// }

interface ReelItem {
  id: number
  title: string
  src: string
  // thumbnail: string
  category: string
}

const videoItems: VideoItem[] = [
  {
    id: 1,
    title: "Wedding Highlights",
    description: "A beautiful celebration of love captured in cinematic detail",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    thumbnail: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=800",
    duration: "3:45",
    category: "Wedding",
  },
  {
    id: 2,
    title: "Corporate Story",
    description: "Professional storytelling that showcases brand values",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
    thumbnail: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800",
    duration: "2:30",
    category: "Corporate",
  },
  {
    id: 3,
    title: "Fashion Film",
    description: "Artistic vision meets contemporary style",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    thumbnail: "/placeholder.svg?height=320&width=568",
    duration: "1:55",
    category: "Fashion",
  },
  {
    id: 4,
    title: "Event Coverage",
    description: "Dynamic coverage of memorable moments",
    src: "/placeholder.svg?height=320&width=568",
    thumbnail: "/placeholder.svg?height=320&width=568",
    duration: "4:20",
    category: "Event",
  },
]

const reelItems: ReelItem[] = [
  {
    id: 1,
    title: "Behind the Scenes",
    src: "/Demo2.webm",
    category: "Event",
  },
  {
    id: 2,
    title: "Quick Cuts",
    src: "/Demo3.webm",
    category: "Montage",
  },
  {
    id: 3,
    title: "Cinematic Moments",
    src: "/Demo.webm",
    category: "Cinematic",
  },
]

function ReelSlider() {
  const [currentReel, setCurrentReel] = useState(0)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const nextReel = () => {
    setCurrentReel((prev) => (prev + 1) % reelItems.length)
  }

  const prevReel = () => {
    setCurrentReel((prev) => (prev - 1 + reelItems.length) % reelItems.length)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
    }
  }

  return (
    <div className="relative w-[80%] aspect-[9/16] bg-gray-900 rounded-2xl overflow-hidden group">
      {/* Current Reel Video */}
      <video
        ref={videoRef}
        key={reelItems[currentReel].id}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted={isMuted}
        playsInline
      >
        <source src={reelItems[currentReel].src} type="video/webm" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

      {/* Category Badge */}
      <div className="absolute top-4 left-4 bg-gradient-to-r from-pink-500/80 to-rose-500/80 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-medium uppercase tracking-wider">
        {reelItems[currentReel].category}
      </div>

      {/* Controls */}
      <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {/* Left Arrow */}
        <motion.button
          onClick={prevReel}
          className="p-3 bg-black/40 backdrop-blur-sm rounded-full hover:bg-black/60 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </motion.button>

        {/* Right Arrow */}
        <motion.button
          onClick={nextReel}
          className="p-3 bg-black/40 backdrop-blur-sm rounded-full hover:bg-black/60 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </motion.button>
      </div>

      {/* Mute Button */}
      <motion.button
        onClick={toggleMute}
        className="absolute bottom-4 right-4 p-3 bg-black/40 backdrop-blur-sm rounded-full hover:bg-black/60 transition-all duration-300 opacity-0 group-hover:opacity-100"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isMuted ? <VolumeX className="w-5 h-5 text-white" /> : <Volume2 className="w-5 h-5 text-white" />}
      </motion.button>

      {/* Title */}
      <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-white font-semibold text-lg">{reelItems[currentReel].title}</h3>
      </div>

      {/* Reel Indicators */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-2">
        {reelItems.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentReel ? "bg-pink-400" : "bg-white/40"
              }`}
          />
        ))}
      </div>
    </div>
  )
}

export default function VideoSection() {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [playingVideos, setPlayingVideos] = useState<Set<number>>(new Set())
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const handleVideoClick = (video: VideoItem, e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest(".video-controls")) {
      return
    }
    setSelectedVideo(video)
    setIsDialogOpen(true)
  }

  const closeDialog = () => {
    setIsDialogOpen(false)
    setSelectedVideo(null)
  }

  const toggleVideoPlay = (videoId: number, e: React.MouseEvent) => {
    e.stopPropagation()
    const video = document.getElementById(`video-${videoId}`) as HTMLVideoElement
    if (video) {
      if (video.paused) {
        video.play()
        setPlayingVideos((prev) => new Set([...prev, videoId]))
      } else {
        video.pause()
        setPlayingVideos((prev) => {
          const newSet = new Set(prev)
          newSet.delete(videoId)
          return newSet
        })
      }
    }
  }

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: "easeInOut",
      },
    }),
  }

  return (
    <div className="relative min-h-screen bg-black py-20 overflow-hidden">
      {/* Cinematic Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        <div
          className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
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
              rotate: [0, 5, -5, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <div className="relative inline-block">
              <Film className="w-16 h-16 text-pink-400 mx-auto" />
              <motion.div
                className="absolute -inset-4 border border-pink-400/30 rounded-full"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
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
            Visual Stories
          </motion.span>
          <motion.h2
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span className="bg-gradient-to-r from-white via-pink-200 to-rose-300 bg-clip-text text-transparent">
              Cinematic
            </span>
            <br />
            <span className="text-white">Masterpieces</span>
          </motion.h2>
          <motion.p
            className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Experience our work in motion. Each video tells a unique story, crafted with cinematic precision and
            artistic vision to preserve your most precious moments.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Reel Slider - Left Side */}
          <motion.div
            className="lg:col-span-2 hidden lg:block"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <ReelSlider />
          </motion.div>

          {/* Video Grid - Right Side */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {videoItems.map((video, i) => (
              <motion.div
                key={video.id}
                className="relative group cursor-pointer"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                onMouseEnter={() => setHoveredId(video.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={(e) => handleVideoClick(video, e)}
              >
                <div className="relative h-[280px] overflow-hidden rounded-2xl bg-gray-900">
                  <video
                    id={`video-${video.id}`}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                    loop
                    playsInline
                    poster={video.thumbnail}
                    onLoadedData={() => {
                      const videoEl = document.getElementById(`video-${video.id}`) as HTMLVideoElement
                      if (videoEl && hoveredId === video.id) {
                        videoEl.currentTime = 0
                      }
                    }}
                  >
                    <source src={video.src} type="video/mp4" />
                    <img
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                  </video>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium">
                    {video.duration}
                  </div>

                  <div className="absolute top-4 left-4 bg-gradient-to-r from-pink-500/80 to-rose-500/80 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-medium uppercase tracking-wider">
                    {video.category}
                  </div>

                  <div className="video-controls absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-4">
                      <motion.button
                        onClick={(e) => toggleVideoPlay(video.id, e)}
                        className="p-4 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {playingVideos.has(video.id) ? (
                          <Pause className="w-8 h-8 text-white" />
                        ) : (
                          <Play className="w-8 h-8 text-white ml-1" />
                        )}
                      </motion.button>
                    </div>
                  </div>

                  <div className="absolute inset-0 flex flex-col justify-end p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      <div className="flex items-center gap-2 mb-3">
                        <Camera className="w-4 h-4 text-pink-300" />
                        <span className="text-pink-300 text-sm uppercase tracking-wider">{video.category}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{video.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{video.description}</p>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent block md:hidden">
                    <h3 className="text-lg font-bold text-white mb-1">{video.title}</h3>
                    <span className="text-pink-300 text-sm uppercase tracking-wider">{video.category}</span>
                  </div>

                  <motion.div
                    className="absolute inset-0 border-2 border-pink-400/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={
                      hoveredId === video.id
                        ? {
                          borderColor: [
                            "rgba(236, 72, 153, 0.3)",
                            "rgba(244, 63, 94, 0.5)",
                            "rgba(236, 72, 153, 0.3)",
                          ],
                        }
                        : {}
                    }
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Dialog */}
      <AnimatePresence>
        {selectedVideo && isDialogOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeDialog}
          >
            <motion.div
              className="relative max-w-5xl max-h-[90vh] bg-gray-900 rounded-2xl overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeDialog}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-colors duration-200 flex items-center justify-center cursor-hover"
              >
                ×
              </button>
              <div className="aspect-video">
                <video className="w-full h-full object-cover rounded-t-2xl" controls autoPlay muted={false} playsInline>
                  <source src={selectedVideo.src} type="video/mp4" />
                  <img
                    src={selectedVideo.thumbnail || "/placeholder.svg"}
                    alt={selectedVideo.title}
                    className="w-full h-full object-cover"
                  />
                </video>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
