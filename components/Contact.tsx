'use client';

import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:bilal.antaki.1@gmail.com?subject=${subject}&body=${body}`;

    // Open default email client
    window.location.href = mailtoLink;

    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    setSubmitStatus('success');
    setIsSubmitting(false);

    // Reset success message after 3 seconds
    setTimeout(() => setSubmitStatus('idle'), 3000);
  };

  const contactMethods = [
    {
      icon: <FaEnvelope size={32} />,
      title: 'Email',
      value: 'bilal.antaki.1@gmail.com',
      href: 'mailto:bilal.antaki.1@gmail.com',
      color: 'text-red-500',
    },
    {
      icon: <FaLinkedin size={32} />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/bilal-antaki',
      href: 'https://www.linkedin.com/in/bilal-antaki/',
      color: 'text-blue-600',
    },
    {
      icon: <FaGithub size={32} />,
      title: 'GitHub',
      value: 'github.com/Bilal-Antaki',
      href: 'https://github.com/Bilal-Antaki',
      color: 'text-neutral-800',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Interested in collaboration or have a project in mind? Feel free to reach out!
          </p>
        </motion.div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-neutral-50 rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="What is this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-medium shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <p className="text-emerald-600 text-sm text-center">Message prepared! Your email client should open.</p>
              )}
            </form>
          </motion.div>
        </div>

        {/* Contact Methods - Horizontal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto mb-12"
        >
          <h3 className="text-2xl font-bold text-neutral-900 mb-8 text-center">Other Ways to Connect</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-8 border border-neutral-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group text-center"
              >
                <div className={`${method.color} mb-4 flex justify-center group-hover:scale-110 transition-transform`}>
                  {method.icon}
                </div>
                <h4 className="text-lg font-bold text-neutral-900 mb-2">
                  {method.title}
                </h4>
                <p className="text-neutral-600 text-sm break-words">
                  {method.value}
                </p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
