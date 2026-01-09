import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { GraduationCap, BookOpen } from 'lucide-react';

export function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const education = [
    {
      degree: 'BA Journalism & Mass Communication',
      institution: 'Reva University',
      location: 'Bangalore',
      period: '2023 – Present',
      status: 'Currently Pursuing',
      icon: GraduationCap,
      color: 'amber',
    },
    {
      degree: '12th Grade – Arts (HEPP)',
      institution: 'Reva PU College',
      location: 'Bangalore',
      period: '2022 – 2023',
      status: 'Completed',
      icon: BookOpen,
      color: 'blue',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      amber: {
        icon: 'text-amber-500',
        bg: 'bg-amber-500/10',
        border: 'border-amber-500/30',
        badge: 'bg-amber-500/20 text-amber-400',
      },
      blue: {
        icon: 'text-blue-500',
        bg: 'bg-blue-500/10',
        border: 'border-blue-500/30',
        badge: 'bg-blue-500/20 text-blue-400',
      },
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section
      id="education"
      ref={ref}
      className="py-24 bg-black relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#ffffff0a_1px,transparent_1px),linear-gradient(-45deg,#ffffff0a_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 text-amber-500">
            <GraduationCap size={20} />
            <span className="text-sm tracking-wider uppercase">Academic Background</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-white mb-4">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-blue-500 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => {
            const colors = getColorClasses(edu.color);
            const Icon = edu.icon;

            return (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`p-3 ${colors.bg} border ${colors.border} rounded-lg`}>
                    <Icon className={colors.icon} size={24} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg text-white mb-1">{edu.degree}</h3>
                        <p className="text-gray-400 text-sm">{edu.institution}</p>
                      </div>
                      <span
                        className={`px-3 py-1 text-xs rounded-full ${colors.badge}`}
                      >
                        {edu.status}
                      </span>
                    </div>

                    <div className="space-y-1 text-sm text-gray-500">
                      <p>{edu.location}</p>
                      <p>{edu.period}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
