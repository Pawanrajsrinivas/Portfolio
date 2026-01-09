import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const experiences = [
    {
      event: 'Bengaluru International Film Festival 2025',
      role: 'Volunteer',
      date: '2025',
      location: 'Bengaluru',
      responsibilities: [
        'Crowd management and lobby coordination',
        'Guest escort and hospitality services',
        'Travel coordination and logistics support',
      ],
      icon: '🎬',
    },
    {
      event: '7th Innovative International Film Festival',
      role: 'Volunteer',
      date: '2024',
      location: 'Bengaluru',
      responsibilities: [
        'Venue management and setup',
        'Crowd control and audience guidance',
        'Supporting festival operations',
      ],
      icon: '🎥',
    },
    {
      event: 'Li and Le (Department Film Festival)',
      role: 'Volunteer',
      date: '2024',
      location: 'Reva University',
      responsibilities: [
        'Event decoration and ambiance creation',
        'Technical support for screenings',
        'Audience coordination and engagement',
      ],
      icon: '🎞️',
    },
  ];

  return (
    <section
      id="experience"
      ref={ref}
      className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-amber-500 rounded-full filter blur-[120px]" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 text-amber-500">
            <Users size={20} />
            <span className="text-sm tracking-wider uppercase">Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Experience & Volunteering
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-blue-500 mx-auto" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500 via-blue-500 to-purple-500" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.event}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className="flex-1 w-full">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-amber-500/30 transition-all duration-300">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-4xl">{exp.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-xl text-white mb-1">{exp.event}</h3>
                        <p className="text-amber-500 text-sm mb-2">{exp.role}</p>
                        <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <Calendar size={12} />
                            {exp.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={12} />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp) => (
                        <li
                          key={resp}
                          className="text-gray-400 text-sm flex items-start gap-2"
                        >
                          <span className="text-amber-500 mt-1">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex w-4 h-4 rounded-full bg-amber-500 border-4 border-black shadow-lg shadow-amber-500/50" />

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
