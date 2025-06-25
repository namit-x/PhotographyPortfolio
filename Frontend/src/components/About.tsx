import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Camera, Heart, Users } from 'lucide-react';
import gsap from 'gsap';
import Stack from './Stack';

const stackImages = [
  { id: 1, img: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { id: 2, img: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { id: 3, img: "https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { id: 4, img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=500" }
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView || !textRef.current) return;

    const words = textRef.current.querySelectorAll('.word');
    
    gsap.fromTo(
      words,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.05,
      }
    );
  }, [isInView]);

  const splitTextIntoWords = (text: string) => {
    return text.split(' ').map((word, index) => (
      <span key={index} className="word inline-block mr-2">
        {word}
      </span>
    ));
  };

  const stats = [
    { icon: Camera, label: 'Photos Captured', value: '10,000+' },
    { icon: Heart, label: 'Happy Clients', value: '500+' },
    { icon: Award, label: 'Awards Won', value: '25+' },
    { icon: Users, label: 'Years Experience', value: '8+' },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 bg-gradient-to-br from-white to-pink-50/30 animate-on-scroll"
      id="about"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Text Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div>
              <h2 className="text-5xl md:text-7xl font-bold text-black mb-8 tracking-tight">
                About
                <span className="block text-pink-600 text-3xl md:text-4xl font-normal mt-4">
                  Our Story
                </span>
              </h2>
              
              <div ref={textRef} className="text-xl text-gray-600 leading-relaxed space-y-6">
                <p>
                  {splitTextIntoWords("Founded with a passion for capturing life's most precious moments, Meenakshi Studio has been at the forefront of contemporary photography for over eight years.")}
                </p>
                <p>
                  {splitTextIntoWords("We believe that every photograph should tell a story, evoke emotion, and preserve memories that last a lifetime. Our approach combines technical excellence with artistic vision.")}
                </p>
                <p>
                  {splitTextIntoWords("From intimate portraits to grand celebrations, we bring a unique perspective to every shoot, ensuring that your vision comes to life through our lens.")}
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <stat.icon className="w-10 h-10 text-pink-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-black mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stack Photo Component */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative">
              <Stack
                cardsData={stackImages}
                cardDimensions={{ width: 300, height: 400 }}
                randomRotation={true}
                sensitivity={150}
                sendToBackOnClick={true}
                animationConfig={{ stiffness: 300, damping: 25 }}
              />
              
              {/* Floating elements */}
              <motion.div
                className="absolute -top-10 -left-10 w-24 h-24 bg-pink-500/20 rounded-full blur-xl"
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
                className="absolute -bottom-10 -right-10 w-20 h-20 bg-rose-500/20 rounded-full blur-xl"
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}