import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Film, ArrowRight } from 'lucide-react';
import rippleImg from '../../assets/thumbnail/ripple-effect.png';
import mahasatiImg from '../../assets/thumbnail/Mahasati.png';

export function WorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      title: 'Ripple Effect',
      role: 'Writer & Director',
      description:
        'A compelling short film exploring the cascading consequences of our choices. From conceptualizing the narrative to scripting and directing the entire production, this project showcases my ability to translate ideas into powerful visual stories.',
      category: 'Short Film',
      image: rippleImg,
      videoHref: 'https://drive.google.com/file/d/1GfsjX4oc3R0dyDQNEy18gZWG6jsDo4RB/view',
      color: 'amber',
    },
    {
      title: 'Documentary  Mahasati',
      role: 'Director',
      description:
        'An in-depth documentary examining the cultural and historical relevance of Sati Stones. This project demonstrates my commitment to preserving important narratives and exploring sensitive topics with respect and authenticity.',
      category: 'Documentary',
      image: mahasatiImg,
      videoHref: 'https://drive.google.com/file/d/1jA57qb0W3rEu_HWipGt9rdCgnNmeOn3l/view',
      color: 'blue',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      amber: {
        badge: 'bg-amber-500/10 text-amber-500 border-amber-500/30',
        button: 'hover:bg-amber-500/10 hover:border-amber-500/50',
        gradient: 'from-amber-500/20',
      },
      blue: {
        badge: 'bg-blue-500/10 text-blue-500 border-blue-500/30',
        button: 'hover:bg-blue-500/10 hover:border-blue-500/50',
        gradient: 'from-blue-500/20',
      },
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section
      id="works"
      ref={ref}
      className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500 rounded-full filter blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 text-amber-500">
            <Film size={20} />
            <span className="text-sm tracking-wider uppercase">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-white mb-4">Featured Works</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-blue-500 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const colors = getColorClasses(project.color);

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} to-transparent opacity-50 z-10`}
                  />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span
                      className={`px-3 py-1 text-xs border rounded-full backdrop-blur-sm ${colors.badge}`}
                    >
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-gray-500 text-sm">{project.role}</span>
                  </div>
                  <h3 className="text-2xl text-white mb-3">{project.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-4">
                    {project.videoHref && (
                      <a
                        href={project.videoHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group flex items-center gap-2 text-sm text-white px-4 py-2 border border-white/10 rounded-lg transition-all duration-300 ${colors.button}`}
                        aria-label={`View video for ${project.title}`}
                      >
                        <span>View Video</span>
                        <ArrowRight
                          size={16}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </a>
                    )}
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
