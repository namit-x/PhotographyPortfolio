import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Hero from './components/Hero';
import CustomCursor from './components/CustomCursor'
import PhotoGrid from './components/PhotoGrid'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative bg-black min-h-screen">
      <CustomCursor/>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" onComplete={handleLoadingComplete} />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Hero />
            <PhotoGrid/>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;