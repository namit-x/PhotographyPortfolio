import { useState } from "react"
import { motion } from "framer-motion"
import { Camera, Heart, Users, Sparkles } from "lucide-react"

interface PhotoProject {
  id: number
  title: string
  category: PhotoCategory
  description: string
  image: string
  images: string[]
  location?: string
  year?: string
}

type PhotoCategory = "All" | "Portraits" | "Weddings" | "Events" | "Fashion" | "Commercial"

const categories: PhotoCategory[] = ["All", "Portraits", "Weddings", "Events", "Fashion", "Commercial"]

const projects: PhotoProject[] = [
  {
    id: 1,
    title: "Eternal Elegance",
    category: "Weddings",
    description: "A timeless wedding celebration captured with artistic vision and emotional depth",
    image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    location: "Mumbai",
    year: "2024",
  },
  {
    id: 2,
    title: "Soulful Portraits",
    category: "Portraits",
    description: "Capturing the essence and personality through intimate portrait sessions",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    location: "Delhi",
    year: "2024",
  },
  {
    id: 3,
    title: "Fashion Forward",
    category: "Fashion",
    description: "High-fashion photography that showcases style, creativity, and artistic expression",
    image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    location: "Bangalore",
    year: "2024",
  },
  {
    id: 4,
    title: "Corporate Excellence",
    category: "Commercial",
    description: "Professional commercial photography for brands and businesses",
    image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    location: "Gurgaon",
    year: "2024",
  },
  {
    id: 5,
    title: "Celebration Moments",
    category: "Events",
    description: "Capturing the joy and energy of special celebrations and gatherings",
    image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    location: "Chennai",
    year: "2024",
  },
  {
    id: 6,
    title: "Intimate Moments",
    category: "Portraits",
    description: "Personal and intimate portrait sessions that tell unique stories",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    location: "Pune",
    year: "2024",
  },
  {
    id: 7,
    title: "Golden Hour Bliss",
    category: "Couples",
    description: "Romantic couple photography during magical golden hour",
    image: "https://images.pexels.com/photos/1381679/pexels-photo-1381679.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/1381679/pexels-photo-1381679.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1450082/pexels-photo-1450082.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    location: "Goa",
    year: "2023"
  },
  {
    id: 8,
    title: "Urban Street Style",
    category: "Fashion",
    description: "Edgy fashion photography in urban environments",
    image: "https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    location: "Mumbai",
    year: "2023"
  },
  {
    id: 9,
    title: "Product Perfection",
    category: "Commercial",
    description: "Professional product photography for e-commerce brands",
    image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/3965557/pexels-photo-3965557.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    location: "Bangalore",
    year: "2023"
  },
  {
    id: 10,
    title: "New Beginnings",
    category: "Maternity",
    description: "Tender maternity photography celebrating new life",
    image: "https://images.pexels.com/photos/4666754/pexels-photo-4666754.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/4666754/pexels-photo-4666754.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/4666748/pexels-photo-4666748.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/4666757/pexels-photo-4666757.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    location: "Hyderabad",
    year: "2024"
  },
  {
    id: 11,
    title: "Little Wonders",
    category: "Newborn",
    description: "Adorable newborn photography sessions",
    image: "https://images.pexels.com/photos/1620765/pexels-photo-1620765.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/1620765/pexels-photo-1620765.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/189857/pexels-photo-189857.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/36029/baby-young-family-child.jpg?auto=compress&cs=tinysrgb&w=1200"
    ],
    location: "Pune",
    year: "2024"
  },
  {
    id: 12,
    title: "Wild & Free",
    category: "Adventure",
    description: "Outdoor adventure and travel photography",
    image: "https://images.pexels.com/photos/2386310/pexels-photo-2386310.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/2386310/pexels-photo-2386310.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/238622/pexels-photo-238622.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/210243/pexels-photo-210243.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    location: "Himachal Pradesh",
    year: "2023"
  },
  {
    id: 13,
    title: "Architectural Symmetry",
    category: "Architecture",
    description: "Stunning architectural photography highlighting design",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    location: "Delhi",
    year: "2023"
  },
]

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<PhotoCategory>("All")
  const [selectedProject, setSelectedProject] = useState<PhotoProject | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  const handleProjectClick = (project: PhotoProject) => {
    setSelectedProject(project)
    setIsDialogOpen(true)
  }

  const closeDialog = () => {
    setIsDialogOpen(false)
    setSelectedProject(null)
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  }

  const getCategoryIcon = (category: PhotoCategory) => {
    switch (category) {
      case "Portraits":
        return <Users className="w-4 h-4" />
      case "Weddings":
        return <Heart className="w-4 h-4" />
      case "Fashion":
        return <Sparkles className="w-4 h-4" />
      default:
        return <Camera className="w-4 h-4" />
    }
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=1920)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

        <div className="relative h-full flex items-center justify-center">
          <motion.div
            className="text-center px-4 max-w-4xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <span className="inline-block text-sm uppercase tracking-[0.3em] text-pink-300 font-light mb-4">
                Our Portfolio
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                duration: 1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <span className="bg-gradient-to-r from-white via-pink-200 to-rose-300 bg-clip-text text-transparent">
                Captured
              </span>
              <br />
              <span className="text-white">Memories</span>
            </motion.h1>

            <motion.p
              className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.6,
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              Every photograph tells a story. Explore our collection of moments transformed into timeless art.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.8,
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`
                flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ease-out cursor-hover
                backdrop-blur-sm border
                ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white border-pink-500 shadow-lg shadow-pink-500/25"
                    : "bg-white/10 text-gray-300 border-gray-600 hover:bg-white/20 hover:text-white hover:border-gray-400"
                }
              `}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {getCategoryIcon(category)}
              <span className="font-medium">{category}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              className="relative h-[400px] overflow-hidden group rounded-2xl cursor-pointer cursor-hover bg-gray-900"
              onClick={() => handleProjectClick(project)}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute inset-0 flex flex-col justify-end p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <div className="flex items-center gap-2 mb-2">
                    {getCategoryIcon(project.category)}
                    <span className="text-pink-300 text-sm uppercase tracking-wider">{project.category}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>

                  <p className="text-gray-300 text-sm leading-relaxed mb-3">{project.description}</p>

                  {project.location && (
                    <div className="flex items-center gap-4 text-xs text-gray-400">
                      <span>{project.location}</span>
                      {project.year && <span>•</span>}
                      {project.year && <span>{project.year}</span>}
                    </div>
                  )}
                </div>
              </div>

              {/* Always visible title overlay for mobile */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                <span className="text-pink-300 text-sm uppercase tracking-wider">{project.category}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Philosophy Section */}
        <motion.div
          className="max-w-4xl mx-auto text-center my-20 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="block text-sm uppercase tracking-[0.3em] text-pink-400 mb-6">Our Philosophy</span>

          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-pink-200 to-rose-300 bg-clip-text text-transparent">
              Every moment
            </span>
            <br />
            <span className="text-white">deserves to be eternal</span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
            We believe that photography is more than just capturing images—it's about preserving emotions, telling
            stories, and creating art that transcends time. Each frame we capture is a piece of your story, crafted with
            passion and precision.
          </p>
        </motion.div>
      </div>

      {/* Simple Image Dialog */}
      {selectedProject && isDialogOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeDialog}
        >
          <motion.div
            className="relative max-w-4xl max-h-[90vh] bg-gray-900 rounded-2xl overflow-hidden"
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

            <img
              src={selectedProject.image || "/placeholder.svg"}
              alt={selectedProject.title}
              className="w-full h-auto max-h-[70vh] object-contain"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
              <p className="text-gray-400 mb-4">{selectedProject.description}</p>
              {selectedProject.location && (
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>{selectedProject.location}</span>
                  {selectedProject.year && <span>•</span>}
                  {selectedProject.year && <span>{selectedProject.year}</span>}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
