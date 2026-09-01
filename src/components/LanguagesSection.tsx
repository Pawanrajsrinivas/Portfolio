import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Languages } from 'lucide-react';

export function LanguagesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const languages = [
    { name: 'Kannada', proficiency: 95 },
    { name: 'English', proficiency: 90 },
    { name: 'Hindi', proficiency: 85 },
    { name: 'Telugu', proficiency: 75 },
    { name: 'Tamil', proficiency: 70 },
    { name: 'Malayalam', proficiency: 65 },
  ];

  return (
    <section
      id="languages"
      ref={ref}
      className="py-12 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500 rounded-full filter blur-[150px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 text-amber-500">
            <Languages size={20} />
            <span className="text-sm tracking-wider uppercase">Communication</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-white mb-4">Languages</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-blue-500 mx-auto" />
          <p className="text-gray-400 mt-4">
            Mulitlingual communicator with proficiency across indian languages.
          </p>
        </motion.div>

        {/* Languages Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {languages.map((language, index) => (
            <motion.div
              key={language.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -3, scale: 1.02 }}
              className="bg-zinc-900/90 backdrop-blur-sm border border-white/20 hover:border-amber-500/60 hover:bg-gradient-to-r hover:from-amber-500/15 hover:to-blue-500/15 rounded-2xl p-6 text-center transition-all duration-300 group cursor-default shadow-md hover:shadow-[0_0_20px_rgba(245,158,11,0.2)]"
            >
              <div className="flex items-center justify-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-amber-500 to-blue-500 group-hover:scale-125 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-white tracking-wide group-hover:text-amber-300 transition-colors">
                  {language.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
