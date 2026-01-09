import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Instagram,
  Twitter,
  Github,
} from 'lucide-react';

export function ContactSectionCinematic() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const to = 'pawanrajsrinivas@gmail.com';
    const subject = encodeURIComponent(`Portfolio message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${to}?subject=${subject}&body=${body}`;

    // Try to open the user's mail client by creating and clicking an anchor
    try {
      const a = document.createElement('a');
      a.href = mailtoUrl;
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (err) {
      // Fallback: attempt navigation
      try {
        window.location.href = mailtoUrl;
      } catch (err) {
        // Final fallback: open in new tab (may just open blank if no mail client configured)
        window.open(mailtoUrl, '_blank');
      }
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'pawanrajsrinivas@gmail.com',
      href: 'mailto:pawanrajsrinivas@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-9606337682',
      href: 'tel:+919606337682',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Yelahanka, Bengaluru',
      href: null,
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/pawan-raj-srinivas-940511292?trk=contact-info', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/pawanrajsrinivas', label: 'Instagram' },
    { icon: Twitter, href: 'https://x.com/prs_018?s=21', label: 'X' },
    { icon: Github, href: 'https://github.com/Pawanrajsrinivas', label: 'GitHub' },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 bg-black relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-500 via-transparent to-blue-500" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 text-amber-500 text-sm tracking-wider uppercase">
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl text-white mb-4">Let's Connect</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-blue-500 mx-auto" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl text-white mb-6">Contact Information</h3>
            <p className="text-gray-400 mb-8">
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, I'll try my best to get
              back to you!
            </p>

            {/* Contact Items */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg">
                      <Icon className="text-amber-500" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm mb-1">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-white hover:text-amber-500 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white">{item.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-gray-400 text-sm mb-4">Follow me on social media</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/5 border border-white/10 rounded-lg hover:border-amber-500/50 hover:bg-amber-500/10 transition-all duration-300 group"
                        aria-label={social.label}
                      >
                        <Icon
                          className="text-gray-400 group-hover:text-amber-500 transition-colors"
                          size={20}
                        />
                      </a>
                    );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
            >
              <div className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-gray-300 text-sm mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 transition-colors"
                    placeholder="John Doe"
                    required
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-gray-300 text-sm mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 transition-colors"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-gray-300 text-sm mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-black rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/50 group"
                >
                  <span>Send Message</span>
                  <Send
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
