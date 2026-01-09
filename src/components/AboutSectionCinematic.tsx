import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Sparkles } from 'lucide-react';

export function AboutSectionCinematic() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const highlights = [
    'Storytelling',
    'Filmmaking',
    'Writing',
    'Documentary',
    'Visual Media',
  ];

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
          <div className="inline-flex items-center gap-2 mb-4 text-amber-500">
            <Sparkles size={20} />
            <span className="text-sm tracking-wider uppercase">Get to Know Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-blue-500 mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12"
        >
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I am a 3rd-year{' '}
            <span className="text-amber-500 font-medium">
              BA Journalism and Mass Communication
            </span>{' '}
            student at Reva University with a strong passion for storytelling through
            writing, editing, and visual media. I specialize in{' '}
            <span className="text-amber-500 font-medium">content writing</span>,{' '}
            <span className="text-amber-500 font-medium">
              short film and documentary production
            </span>
            , and have hands-on experience as a writer and director.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I have directed a short film titled{' '}
            <span className="text-blue-400 font-medium">"Ripple Effect"</span> and a
            documentary on{' '}
            <span className="text-blue-400 font-medium">"Mahasati"</span>. I have
            also volunteered at major film festivals, gaining real-world exposure to
            event management, crowd coordination, and media operations.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            I enjoy blending creativity with technical skills to produce meaningful and
            impactful content that resonates with audiences and tells stories that
            matter.
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-3 justify-center">
            {highlights.map((highlight, index) => (
              <motion.span
                key={highlight}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="px-5 py-2 bg-gradient-to-r from-amber-500/20 to-blue-500/20 border border-amber-500/30 rounded-full text-amber-400 text-sm"
              >
                {highlight}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Stats or quick facts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl text-amber-500 mb-2">3+</div>
            <div className="text-gray-400 text-sm">Film Festivals</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl text-amber-500 mb-2">2</div>
            <div className="text-gray-400 text-sm">Directed Projects</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl text-amber-500 mb-2">3rd Year</div>
            <div className="text-gray-400 text-sm">Current Education</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}