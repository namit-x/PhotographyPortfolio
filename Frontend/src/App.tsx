import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import LoadingScreen from "./components/LoadingScreen"
import Hero from "./components/Hero"
import CustomCursor from "./components/CustomCursor"
import PhotoGrid from "./components/PhotoGrid"
import VideoSection from "./components/VideoSection"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import GooeyNav from "./components/Navbar"
import Studio from "./components/Studio"

type CurrentPage = "home" | "portfolio" | "studio" | "contact"

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState<CurrentPage>("home")

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  const navItems = [
    {
      label: "Home",
      href: "#home",
      onClick: () => setCurrentPage("home"),
    },
    {
      label: "Portfolio",
      href: "#portfolio",
      onClick: () => setCurrentPage("portfolio"),
    },
    {
      label: "Studio",
      href: "#studio",
      onClick: () => setCurrentPage("studio"),
    },
    {
      label: "Contact",
      href: "#contact",
      onClick: () => setCurrentPage("contact"),
    },
  ]

  const handleNavClick = (index: number, item: any) => {
    // Execute the onClick function for navigation
    if (item.onClick) {
      item.onClick()
    }
  }

  const getActiveIndex = () => {
    switch (currentPage) {
      case "home":
        return 0
      case "portfolio":
        return 1
      case "studio":
        return 2
      case "contact":
        return 3
      default:
        return 0
    }
  }

  return (
    <div className="relative bg-black min-h-screen">
      {/* <CustomCursor /> */}

      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" onComplete={handleLoadingComplete} />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Gooey Navigation - Fixed positioning */}
            <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40">
              <GooeyNav
                key={currentPage} // Add this line to force re-render when page changes
                items={navItems}
                initialActiveIndex={getActiveIndex()}
                onItemClick={handleNavClick}
                animationTime={500}
                particleCount={12}
                particleDistances={[80, 15]}
                particleR={90}
                timeVariance={250}
                colors={[1, 2, 3, 4]}
              />
            </div>

            {/* Page Content */}
            <AnimatePresence mode="wait">
              {currentPage === "home" ? (
                <motion.div
                  key="home"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <Hero />
                  <PhotoGrid onNavigateToPortfolio={() => setCurrentPage("portfolio")} />
                  <VideoSection />
                </motion.div>
              ) : currentPage === "portfolio" ? (
                <motion.div
                  key="portfolio"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <Portfolio />
                </motion.div>
              ) : currentPage === "studio" ? (
                <motion.div
                  key="studio"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="min-h-screen flex items-center justify-center"
                >
                  <Studio />
                </motion.div>
              ) : currentPage === "contact" ? (
                <motion.div
                  key="contact"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <Contact />
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App