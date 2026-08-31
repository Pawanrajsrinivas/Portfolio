import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function AboutSectionCinematic() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-blue-500 mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 space-y-6"
        >
          <p className="text-gray-300 text-lg leading-relaxed">
            I’m a 1st-year MA Communication and Journalism student at REVA University, passionate about filmmaking, writing, and visual media. I enjoy turning ideas into stories and exploring different aspects of the filmmaking process from developing concepts and writing to working behind the camera and in the editing room.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            I have hands-on experience across film production, editing, cinematography, directing, and content creation. I directed the short film “Ripple Effect” and the documentary “Mahasati.” I also worked as the Editor and Director of Photography (DOP) for the short film “Run,” giving me the opportunity to work extensively with both visual storytelling and post-production.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            Beyond filmmaking, I’ve gained practical experience in event management and media operations, including working as an Event Manager for Sideways 6 and volunteering at major film festivals. These experiences have strengthened my ability to collaborate, manage responsibilities, work under pressure, and adapt to fast-paced environments.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            I’m always looking to learn, experiment, and take on projects that challenge me creatively - whether I’m behind the camera, shaping a story in the edit, writing, or managing things on the ground.
          </p>
        </motion.div>
      </div>
    </section>
  );
}