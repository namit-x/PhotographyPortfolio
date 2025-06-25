import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Camera, ChevronDown } from 'lucide-react';
import * as THREE from 'three';

function RotatingCamera() {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * 0.3;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <boxGeometry args={[1, 0.6, 0.8]} />
        <meshStandardMaterial color="#1f2937" roughness={0.3} metalness={0.7} />
        <mesh position={[0.3, 0.2, 0.4]}>
          <cylinderGeometry args={[0.2, 0.2, 0.3]} />
          <meshStandardMaterial color="#374151" roughness={0.2} metalness={0.8} />
        </mesh>
      </mesh>
      <pointLight position={[2, 2, 2]} intensity={0.5} color="#ec4899" />
    </group>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 400 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    
    mouseX.set(x);
    mouseY.set(y);
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div 
      ref={containerRef}
      className="relative h-screen overflow-hidden bg-gradient-to-br from-white via-pink-50 to-rose-100"
      onMouseMove={handleMouseMove}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
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
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-48 h-48 bg-pink-300/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <motion.div
          className="text-center max-w-5xl mx-auto"
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
            className="mb-8"
          >
            <h1 className="text-7xl md:text-9xl font-bold mb-6 tracking-tight leading-none">
              <motion.span
                className="inline-block text-pink-600"
                initial={{ opacity: 0, y: 100, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
              >
                Meenakshi
              </motion.span>
              <br />
              <motion.span
                className="inline-block text-black"
                initial={{ opacity: 0, y: 100, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 1, delay: 0.7, ease: [0.76, 0, 0.24, 1] }}
              >
                Studio
              </motion.span>
            </h1>
          </motion.div>

          <motion.p
            className="text-xl md:text-3xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            Where moments transform into timeless art.
            <br />
            <span className="text-pink-600 font-medium">Capturing the extraordinary in every frame.</span>
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <motion.button
              className="group px-10 py-5 bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-full text-lg font-semibold hover:from-pink-500 hover:to-rose-500 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/25 backdrop-blur-sm"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-3">
                <Camera className="w-6 h-6" />
                View Portfolio
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </motion.button>
            
            <motion.button
              className="group px-10 py-5 border-2 border-gray-800 text-gray-800 rounded-full text-lg font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300 backdrop-blur-sm"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Session
            </motion.button>
          </motion.div>
        </motion.div>

        {/* 3D Camera Element */}
        <motion.div
          className="absolute top-1/2 right-10 w-40 h-40 hidden lg:block"
          initial={{ opacity: 0, scale: 0, rotateY: -180 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.5, delay: 1.3, ease: [0.76, 0, 0.24, 1] }}
          style={{
            rotateX: useTransform(springY, [-0.5, 0.5], [5, -5]),
            rotateY: useTransform(springX, [-0.5, 0.5], [-5, 5]),
          }}
        >
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <ambientLight intensity={0.3} />
            <pointLight position={[10, 10, 10]} intensity={0.5} />
            <RotatingCamera />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
          </Canvas>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-gray-600"
        >
          <span className="text-sm mb-3 font-medium tracking-wide">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-pink-500 rounded-full mt-2"
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}