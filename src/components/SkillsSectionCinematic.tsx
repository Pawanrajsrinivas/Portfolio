import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Briefcase, Code, Lightbulb } from 'lucide-react';

export function SkillsSectionCinematic() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skillCategories = [
    {
      icon: Lightbulb,
      title: 'Creative Skills',
      color: 'amber',
      skills: [
        { name: 'Content Writing', level: 90 },
        { name: 'Short Film Production', level: 85 },
        { name: 'Documentary Production', level: 85 },
      ],
    },
    {
      icon: Code,
      title: 'Technical Tools',
      color: 'blue',
      skills: [
        { name: 'Adobe Premiere Pro', level: 88 },
        { name: 'Adobe Photoshop', level: 82 },
        { name: 'Adobe After Effects', level: 80 },
        { name: 'Adobe Animate', level: 75 },
      ],
    },
    {
      icon: Briefcase,
      title: 'Professional Skills',
      color: 'purple',
      skills: [
        { name: 'Event Management', level: 85 },
        { name: 'Crowd & Venue Coordination', level: 88 },
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      amber: {
        icon: 'text-amber-500',
        bg: 'bg-amber-500/10',
        border: 'border-amber-500/30',
        gradient: 'from-amber-500',
        bar: 'bg-gradient-to-r from-amber-500 to-amber-600',
      },
      blue: {
        icon: 'text-blue-500',
        bg: 'bg-blue-500/10',
        border: 'border-blue-500/30',
        gradient: 'from-blue-500',
        bar: 'bg-gradient-to-r from-blue-500 to-blue-600',
      },
      purple: {
        icon: 'text-purple-500',
        bg: 'bg-purple-500/10',
        border: 'border-purple-500/30',
        gradient: 'from-purple-500',
        bar: 'bg-gradient-to-r from-purple-500 to-purple-600',
      },
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="py-24 bg-black relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 text-amber-500 text-sm tracking-wider uppercase">
            Expertise
          </div>
          <h2 className="text-4xl md:text-5xl text-white mb-4">Skills & Abilities</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-blue-500 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const colors = getColorClasses(category.color);
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`p-3 ${colors.bg} border ${colors.border} rounded-lg`}
                  >
                    <Icon className={colors.icon} size={24} />
                  </div>
                  <h3 className="text-xl text-white">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 text-sm">{skill.name}</span>
                        <span className="text-gray-500 text-xs">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{
                            duration: 1,
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                            ease: 'easeOut',
                          }}
                          className={`h-full ${colors.bar} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-gray-500 mt-12 text-sm"
        >
          Continuously learning and expanding my skillset in filmmaking and visual
          storytelling
        </motion.p>
      </div>
    </section>
  );
}
