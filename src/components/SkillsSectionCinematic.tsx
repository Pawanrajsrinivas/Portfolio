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
        { name: 'Directing' },
        { name: 'Editing' },
        { name: 'Content Writing' },
        { name: 'Color Grading' },
        { name: 'Script & Screenplay Writing' },
        { name: 'Short Film & Documentary Production' },
      ],
    },
    {
      icon: Code,
      title: 'Technical Tools',
      color: 'blue',
      skills: [
        { name: 'Adobe Premiere Pro' },
        { name: 'Adobe Photoshop' },
        { name: 'Adobe After Effects' },
        { name: 'Adobe Animate' },
      ],
    },
    {
      icon: Briefcase,
      title: 'Professional Skills',
      color: 'purple',
      skills: [
        { name: 'Event Management' },
        { name: 'Event Operations' },
        { name: 'Team Coordination' },
        { name: 'Guest Coordination' },
        { name: 'Crowd & Venue Coordination' },
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      amber: {
        icon: 'text-amber-500',
        bg: 'bg-amber-500/10',
        border: 'border-amber-500/30',
        tagHover: 'hover:border-amber-500/60 hover:bg-amber-500/15 hover:shadow-[0_0_15px_rgba(245,158,11,0.2)]',
        dot: 'bg-amber-500',
      },
      blue: {
        icon: 'text-blue-500',
        bg: 'bg-blue-500/10',
        border: 'border-blue-500/30',
        tagHover: 'hover:border-blue-500/60 hover:bg-blue-500/15 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]',
        dot: 'bg-blue-500',
      },
      purple: {
        icon: 'text-purple-500',
        bg: 'bg-purple-500/10',
        border: 'border-purple-500/30',
        tagHover: 'hover:border-purple-500/60 hover:bg-purple-500/15 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]',
        dot: 'bg-purple-500',
      },
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="py-12 bg-black relative overflow-hidden"
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

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {skillCategories.map((category, categoryIndex) => {
            const colors = getColorClasses(category.color);
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-all duration-300 flex flex-col justify-start h-full"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                  <div
                    className={`p-3 ${colors.bg} border ${colors.border} rounded-xl`}
                  >
                    <Icon className={colors.icon} size={24} />
                  </div>
                  <h3 className="text-xl text-white font-bold tracking-wide">{category.title}</h3>
                </div>

                {/* Skills Tags List */}
                <div className="flex flex-wrap gap-4 md:gap-5">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: categoryIndex * 0.15 + skillIndex * 0.08,
                      }}
                      whileHover={{ y: -2 }}
                      className={`px-4 py-3 rounded-xl bg-zinc-900/90 border border-white/20 ${colors.tagHover} text-white font-semibold text-sm md:text-base tracking-wide transition-all duration-300 flex items-center gap-3 shadow-md cursor-default`}
                    >
                      <span className={`w-2 h-2 rounded-full ${colors.dot} flex-shrink-0`} />
                      <span className="text-white font-semibold">{skill.name}</span>
                    </motion.div>
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
