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
      className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden"
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
            Multilingual storyteller with proficiency in multiple Indian languages
          </p>
        </motion.div>

        {/* Languages Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {languages.map((language, index) => {
            const r = 56;
            const circumference = 2 * Math.PI * r;
            const gradientId = `gradient-${index}`;

            return (
              
            <motion.div
              key={language.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Circular Progress */}
              <div className="relative w-32 h-32 mx-auto mb-4">
                {/* Background circle */}
                <svg className="w-full h-full transform -rotate-90 block" viewBox="0 0 128 128" preserveAspectRatio="xMidYMid meet">
                  <circle
                    cx={64}
                    cy={64}
                    r={r}
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="8"
                    fill="none"
                  />
                  {/* Progress circle */}
                  <motion.circle
                    cx={64}
                    cy={64}
                    r={r}
                    stroke={`url(#${gradientId})`}
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    initial={{ strokeDashoffset: circumference }}
                    animate={
                      isInView
                        ? {
                            strokeDashoffset: circumference * (1 - language.proficiency / 100),
                          }
                        : {}
                    }
                    transition={{ duration: 1.5, delay: index * 0.1 + 0.5 }}
                  />
                  <defs>
                    <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Center text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl text-white">
                    {language.proficiency}%
                  </span>
                </div>
              </div>

              {/* Language Name */}
              <h3 className="text-center text-white">{language.name}</h3>
            </motion.div>
          );
          })}
        </div>
      </div>
    </section>
  );
}
