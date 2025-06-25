import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Heart, Briefcase, Baby, Crown, Palette } from 'lucide-react';

const services = [
  {
    icon: Heart,
    title: 'Wedding Photography',
    description: 'Capturing your special day with elegance and artistry, preserving every precious moment of your love story.',
    features: ['Full day coverage', 'Engagement sessions', 'Bridal portraits', 'Album design'],
    color: 'from-pink-500 to-rose-500',
    bgColor: 'bg-pink-50 hover:bg-pink-100',
  },
  {
    icon: Camera,
    title: 'Portrait Sessions',
    description: 'Professional portraits that capture your unique personality and essence with stunning clarity.',
    features: ['Individual portraits', 'Couple sessions', 'Professional headshots', 'Creative concepts'],
    color: 'from-gray-600 to-black',
    bgColor: 'bg-gray-50 hover:bg-gray-100',
  },
  {
    icon: Briefcase,
    title: 'Corporate Photography',
    description: 'Professional corporate imagery that elevates your brand and showcases your business excellence.',
    features: ['Executive portraits', 'Team photography', 'Event coverage', 'Brand imagery'],
    color: 'from-slate-600 to-slate-800',
    bgColor: 'bg-slate-50 hover:bg-slate-100',
  },
  {
    icon: Baby,
    title: 'Family & Maternity',
    description: 'Tender moments and growing families captured with warmth, love, and beautiful natural light.',
    features: ['Maternity sessions', 'Newborn photography', 'Family portraits', 'Milestone captures'],
    color: 'from-rose-400 to-pink-500',
    bgColor: 'bg-rose-50 hover:bg-rose-100',
  },
  {
    icon: Crown,
    title: 'Fashion & Editorial',
    description: 'High-fashion photography that brings concepts to life with dramatic lighting and creative vision.',
    features: ['Fashion editorials', 'Lookbook creation', 'Model portfolios', 'Creative direction'],
    color: 'from-pink-600 to-rose-600',
    bgColor: 'bg-pink-50 hover:bg-pink-100',
  },
  {
    icon: Palette,
    title: 'Commercial Projects',
    description: 'Creative commercial photography that tells your brand story and connects with your audience.',
    features: ['Product photography', 'Advertising campaigns', 'Lifestyle shoots', 'Brand storytelling'],
    color: 'from-gray-700 to-black',
    bgColor: 'bg-gray-50 hover:bg-gray-100',
  },
];

export default function Services() {
  return (
    <section className="py-24 md:py-32 bg-white animate-on-scroll" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-black mb-6 tracking-tight">
            Services
            <span className="block text-pink-600 text-3xl md:text-4xl font-normal mt-4">
              What we offer
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From intimate portraits to grand celebrations, we offer a comprehensive range of 
            photography services tailored to capture your unique story.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`stagger-item relative group p-10 rounded-3xl transition-all duration-500 cursor-pointer ${service.bgColor} border border-gray-100`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                scale: 1.02, 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />
              
              {/* Icon */}
              <motion.div
                className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${service.color} text-white mb-8 shadow-lg`}
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                <service.icon className="w-8 h-8" />
              </motion.div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-gray-800 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    className="flex items-center text-sm text-gray-700"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.05) }}
                    viewport={{ once: true }}
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-4 flex-shrink-0`} />
                    {feature}
                  </motion.li>
                ))}
              </ul>

              {/* Hover effect - Learn More */}
              <motion.div
                className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg`}>
                  <span className="text-sm font-bold">→</span>
                </div>
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute top-6 right-6 w-24 h-24 bg-white/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
              Get Custom Quote
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