import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';

const portfolioImages = [
  {
    url: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Portrait Elegance',
    category: 'Portrait'
  },
  {
    url: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Wedding Bliss',
    category: 'Wedding'
  },
  {
    url: 'https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Fashion Forward',
    category: 'Fashion'
  },
  {
    url: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Intimate Moments',
    category: 'Lifestyle'
  },
  {
    url: 'https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Natural Beauty',
    category: 'Portrait'
  },
  {
    url: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Artistic Vision',
    category: 'Art'
  },
  {
    url: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Bridal Grace',
    category: 'Wedding'
  },
  {
    url: 'https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Corporate Style',
    category: 'Corporate'
  },
  {
    url: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Childhood Joy',
    category: 'Family'
  },
  {
    url: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Timeless Elegance',
    category: 'Portrait'
  }
];

export default function Portfolio() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 bg-white animate-on-scroll"
      id="portfolio"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-black mb-6 tracking-tight">
            Portfolio
            <span className="block text-pink-600 text-3xl md:text-4xl font-normal mt-4">
              Where stories come alive
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Each photograph tells a unique story, captured through our lens with passion, 
            precision, and an eye for the extraordinary.
          </p>
        </motion.div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {portfolioImages.map((image, index) => (
            <motion.div
              key={index}
              className={`stagger-item group relative overflow-hidden rounded-3xl cursor-pointer ${
                index === 0 || index === 4 || index === 7
                  ? 'md:col-span-2 md:row-span-2'
                  : index === 2 || index === 5
                  ? 'col-span-2'
                  : ''
              }`}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            >
              <div className="relative aspect-square md:aspect-auto md:h-full bg-gray-100 overflow-hidden rounded-3xl">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <span className="inline-block px-4 py-2 bg-pink-600 text-white text-sm font-semibold rounded-full mb-3">
                    {image.category}
                  </span>
                  <h3 className="text-xl font-bold">{image.title}</h3>
                </div>

                {/* Hover effect border */}
                <div className="absolute inset-0 border-2 border-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="group px-10 py-5 bg-gradient-to-r from-black to-gray-800 text-white rounded-full text-lg font-semibold hover:from-pink-600 hover:to-rose-600 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/25"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-3">
              View Full Portfolio
              <motion.span
                className="inline-block"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}