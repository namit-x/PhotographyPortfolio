import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle, MapPin, Clock, Camera } from 'lucide-react';

export default function CallToAction() {
  const contactInfo = [
    {
      icon: Phone,
      label: 'Call Us',
      value: '+1 (555) 123-4567',
      action: 'tel:+15551234567'
    },
    {
      icon: Mail,
      label: 'Email Us',
      value: 'hello@meenakshistudio.com',
      action: 'mailto:hello@meenakshistudio.com'
    },
    {
      icon: MapPin,
      label: 'Visit Studio',
      value: '123 Art District, Creative City',
      action: '#'
    },
    {
      icon: Clock,
      label: 'Studio Hours',
      value: 'Mon-Sat: 9AM-7PM',
      action: '#'
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            Let's Create
            <span className="block text-pink-400 text-3xl md:text-4xl font-normal mt-4">
              Something Beautiful Together
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to capture your story? Let's discuss your vision and create stunning 
            photographs that you'll treasure for a lifetime. Your journey starts with a conversation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left side - Main CTA */}
          <motion.div
            className="space-y-10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="space-y-6">
              <motion.button
                className="group w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-full text-lg font-bold hover:from-pink-500 hover:to-rose-500 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/25"
                whileHover={{ 
                  scale: 1.05, 
                  y: -3,
                  boxShadow: "0 20px 40px rgba(236, 72, 153, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center justify-center gap-3">
                  <Camera className="w-6 h-6" />
                  Book Your Session Now
                  <motion.span
                    className="inline-block"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.button>

              <motion.button
                className="group w-full sm:w-auto px-10 py-5 border-2 border-white/30 text-white rounded-full text-lg font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 ml-0 sm:ml-4"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center justify-center gap-3">
                  <MessageCircle className="w-5 h-5" />
                  Free Consultation
                </span>
              </motion.button>
            </div>

            <motion.div
              className="p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10"
              whileHover={{ 
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                scale: 1.02 
              }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-6 text-pink-300">What to Expect</h3>
              <ul className="space-y-4 text-gray-300">
                <motion.li
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-2 h-2 rounded-full bg-pink-500 mt-2 flex-shrink-0" />
                  <span>Free consultation to discuss your vision and requirements</span>
                </motion.li>
                <motion.li
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="w-2 h-2 rounded-full bg-pink-500 mt-2 flex-shrink-0" />
                  <span>Custom photography package tailored to your needs</span>
                </motion.li>
                <motion.li
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="w-2 h-2 rounded-full bg-pink-500 mt-2 flex-shrink-0" />
                  <span>Professional editing and high-resolution delivery</span>
                </motion.li>
                <motion.li
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="w-2 h-2 rounded-full bg-pink-500 mt-2 flex-shrink-0" />
                  <span>Lifetime access to your online gallery</span>
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Right side - Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-bold mb-10 text-center lg:text-left">Get In Touch</h3>
            
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.action}
                className="group flex items-center gap-5 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-pink-500/30 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  x: 10,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div
                  className="flex-shrink-0 p-4 bg-gradient-to-br from-pink-600 to-rose-600 rounded-xl text-white"
                  whileHover={{ 
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  <info.icon className="w-6 h-6" />
                </motion.div>
                <div>
                  <div className="font-semibold text-white group-hover:text-pink-300 transition-colors duration-300">
                    {info.label}
                  </div>
                  <div className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {info.value}
                  </div>
                </div>
                <motion.div
                  className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <span className="text-pink-400 font-bold">→</span>
                </motion.div>
              </motion.a>
            ))}

            {/* Social proof */}
            <motion.div
              className="text-center lg:text-left pt-8 border-t border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-pink-300 text-sm mb-3">Join 500+ happy clients</p>
              <div className="flex justify-center lg:justify-start items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 + (i * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <div className="w-4 h-4 bg-pink-400 rounded-full" />
                  </motion.div>
                ))}
                <span className="ml-3 text-pink-400 font-semibold">5.0 Rating</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          className="text-center mt-24 pt-12 border-t border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-lg">
            © 2024 Meenakshi Studio. Crafting visual stories with passion and precision.
          </p>
        </motion.div>
      </div>
    </section>
  );
}