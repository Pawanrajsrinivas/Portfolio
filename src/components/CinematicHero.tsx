import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import profileImg from '../../assets/profile/profile.png';

export function CinematicHero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Background with film grain effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj4KICA8ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj4KICAgIDxmZVR1cmJ1bGVuY2UgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIiB0eXBlPSJmcmFjdGFsTm9pc2UiLz4KICAgIDxmZUNvbG9yTWF0cml4IHR5cGU9InNhdHVyYXRlIiB2YWx1ZXM9IjAiLz4KICA8L2ZpbHRlcj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9Ii4wNSIvPgo8L3N2Zz4=')] opacity-50" />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 via-transparent to-blue-900/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full"
            >
              <span className="text-amber-500 text-sm tracking-wide">
                Journalism & Mass Communication
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl mb-6 text-white"
            >
              <span className="text-amber-500">P</span>AWAN <span className="text-amber-500">R</span>AJ <span className="text-amber-500">S</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-400 mb-4"
            >
              Editor and Director
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 text-lg mb-8 leading-relaxed max-w-xl"
            >
              Crafting compelling narratives through the lens of storytelling, filmmaking, and visual media.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#media"
                className="group flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-black rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/50"
              >
                <span>View My Work</span>
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>

              <a
                href="#contact"
                className="group flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg transition-all duration-300"
              >
                <span>Contact Me</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 flex items-center gap-4 text-gray-500 text-sm"
            >
              <div className="h-px w-12 bg-gray-700" />
              <span>Scroll to explore</span>
            </motion.div>
          </motion.div>

          {/* Right: Photo Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] max-w-md mx-auto">
              {/* Image placeholder with border */}
              <div className="absolute inset-0 border-2 border-amber-500/30 rounded-2xl z-10 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-blue-500/20 z-10 pointer-events-none" />
              
              <img
                src={profileImg}
                alt="Pawan Raj S - Profile"
                className="w-full h-full object-cover"
              />

              {/* Placeholder indicator removed per request */}
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border border-amber-500/20 rounded-full" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 border border-blue-500/20 rounded-full" />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-amber-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
