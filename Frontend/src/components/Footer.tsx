import { motion, type Variants } from "framer-motion"
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, Camera, Heart, Award } from "lucide-react"

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-pink-400" },
  { icon: Facebook, href: "#", label: "Facebook", color: "hover:text-blue-400" },
  { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-sky-400" },
]

const quickLinks = [
  { name: "Portfolio", href: "#portfolio" },
  { name: "About Studio", href: "#studio" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
]

const services = [
  { name: "Wedding Photography", href: "#" },
  { name: "Portrait Sessions", href: "#" },
  { name: "Event Coverage", href: "#" },
  { name: "Commercial Work", href: "#" },
]

const awards = [
  { year: "2024", title: "Best Wedding Photographer" },
  { year: "2023", title: "Portrait Excellence Award" },
  { year: "2022", title: "Creative Vision Award" },
]

const fadeIn: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number], // Cubic bezier tuple
      delay: 0.2,
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

const staggerChildren = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function Footer() {
  return (
    <>
      {/* Custom styles for footer */}
      <style>{`
        .glass-footer {
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(20px);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .gradient-text-footer {
          background: linear-gradient(135deg, #ec4899, #f43f5e, #e11d48);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .footer-link {
          position: relative;
          transition: all 0.3s ease;
        }
        
        .footer-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 1px;
          bottom: -2px;
          left: 0;
          background: linear-gradient(90deg, #ec4899, #f43f5e);
          transition: width 0.3s ease;
        }
        
        .footer-link:hover::after {
          width: 100%;
        }
        
        .floating-icon {
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>

      <footer className="relative bg-black overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(219,39,119,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(244,63,94,0.08),transparent_50%)]" />
          <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,transparent_0deg,rgba(236,72,153,0.03)_60deg,transparent_120deg)]" />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-pink-400/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        {/* Main Footer Content */}
        <motion.div
          className="relative z-10 glass-footer"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {/* Studio Info */}
              <motion.div className="lg:col-span-1" variants={fadeIn}>
                <div className="mb-8">
                  <h3 className="font-playfair text-3xl font-bold text-white mb-4">
                    <span className="gradient-text-footer">Chirag</span>
                    <br />
                    <span className="font-space text-2xl font-light tracking-wider">STUDIO</span>
                  </h3>
                  <p className="font-inter text-gray-400 leading-relaxed mb-6">
                    Creating timeless memories through the art of photography. Every moment, every emotion, captured
                    with passion and precision.
                  </p>

                  {/* Social Links */}
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        className={`p-3 bg-gray-900/50 rounded-full border border-gray-800 hover:border-pink-500/50 transition-all duration-300 ${social.color} floating-icon`}
                        style={{ animationDelay: `${index * 0.2}s` }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <social.icon className="w-5 h-5" />
                        <span className="sr-only">{social.label}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div variants={fadeIn}>
                <h4 className="font-space text-lg font-semibold text-white mb-6 uppercase tracking-wider">
                  Quick Links
                </h4>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="font-inter text-gray-400 hover:text-pink-300 transition-colors duration-300 footer-link"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Services */}
              <motion.div variants={fadeIn}>
                <h4 className="font-space text-lg font-semibold text-white mb-6 uppercase tracking-wider">Services</h4>
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <li key={index}>
                      <a
                        href={service.href}
                        className="font-inter text-gray-400 hover:text-pink-300 transition-colors duration-300 footer-link"
                      >
                        {service.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Contact & Awards */}
              <motion.div variants={fadeIn}>
                <h4 className="font-space text-lg font-semibold text-white mb-6 uppercase tracking-wider">
                  Get In Touch
                </h4>

                {/* Contact Info */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-4 h-4 text-pink-400 flex-shrink-0" />
                    <span className="font-inter text-gray-400 text-sm">Rohtak, Haryana, India</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-pink-400 flex-shrink-0" />
                    <span className="font-inter text-gray-400 text-sm">+91 98765 43210</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-pink-400 flex-shrink-0" />
                    <span className="font-inter text-gray-400 text-sm">hello@namitstudio.com</span>
                  </div>
                </div>

                {/* Recent Awards */}
                <div>
                  <h5 className="font-space text-sm font-medium text-pink-300 mb-3 uppercase tracking-wider flex items-center">
                    <Award className="w-4 h-4 mr-2" />
                    Recent Awards
                  </h5>
                  <div className="space-y-2">
                    {awards.map((award, index) => (
                      <div key={index} className="text-xs">
                        <span className="font-inter text-gray-500">{award.year}</span>
                        <span className="font-inter text-gray-400 ml-2">{award.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Bar */}
          <motion.div className="border-t border-gray-800/50 py-8" variants={fadeIn}>
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="flex items-center space-x-4">
                  <p className="font-inter text-gray-500 text-sm">© 2024  Studio. All rights reserved.</p>
                  <div className="hidden md:flex items-center space-x-2 text-gray-600">
                    <Camera className="w-4 h-4" />
                    <span className="font-inter text-xs">Crafted with</span>
                    <Heart className="w-4 h-4 text-pink-400" />
                  </div>
                </div>

                <div className="flex items-center space-x-6">
                  <a
                    href="#"
                    className="font-inter text-gray-500 hover:text-pink-300 text-sm transition-colors footer-link"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="#"
                    className="font-inter text-gray-500 hover:text-pink-300 text-sm transition-colors footer-link"
                  >
                    Terms of Service
                  </a>
                  <a
                    href="#"
                    className="font-inter text-gray-500 hover:text-pink-300 text-sm transition-colors footer-link"
                  >
                    Cookie Policy
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Newsletter Signup Section */}
        <motion.div
          className="relative z-10 bg-gradient-to-r from-pink-600/10 via-rose-600/10 to-pink-600/10 backdrop-blur-sm border-t border-pink-500/20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="max-w-4xl mx-auto px-4 py-12 text-center">
            <h3 className="font-playfair text-2xl md:text-3xl font-bold text-white mb-4">
              Stay Updated with Our Latest Work
            </h3>
            <p className="font-inter text-gray-400 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and be the first to see our newest photography projects, behind-the-scenes
              content, and exclusive offers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-pink-500/50 transition-colors font-inter"
              />
              <motion.button
                className="px-8 py-3 bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-full font-space font-medium tracking-wide hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </footer>
    </>
  )
}
