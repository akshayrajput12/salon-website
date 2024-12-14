import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook, Twitter } from 'lucide-react';
import Footer from '../components/Footer'; // Import the Footer component

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: 'general'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-[#1E1E1E] to-[#2A2A2A] px-4 py-20"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-6 font-playfair text-5xl font-bold text-white">Contact Us</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            We'd love to hear from you. Get in touch with us for appointments,
            queries, or just to say hello.
          </p>
        </motion.div>

        <section className="py-20">
          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8 rounded-lg bg-white/5 p-8 backdrop-blur-sm"
            >
              <div>
                <h3 className="mb-6 font-playfair text-2xl font-bold text-white">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full bg-pink-500/10 p-3">
                      <MapPin className="h-6 w-6 text-pink-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Visit Us</h4>
                      <p className="text-gray-300">123 Beauty Street, Fashion District, NY 10001</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full bg-pink-500/10 p-3">
                      <Phone className="h-6 w-6 text-pink-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Call Us</h4>
                      <p className="text-gray-300">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full bg-pink-500/10 p-3">
                      <Mail className="h-6 w-6 text-pink-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Email Us</h4>
                      <p className="text-gray-300">contact@lavanyasalon.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full bg-pink-500/10 p-3">
                      <Clock className="h-6 w-6 text-pink-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Opening Hours</h4>
                      <p className="text-gray-300">Mon - Sat: 9:00 AM - 8:00 PM</p>
                      <p className="text-gray-300">Sun: 10:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-4 font-playfair text-2xl font-bold text-white">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="rounded-full bg-pink-500/10 p-3 transition-colors hover:bg-pink-500/20">
                    <Instagram className="h-6 w-6 text-pink-500" />
                  </a>
                  <a href="#" className="rounded-full bg-pink-500/10 p-3 transition-colors hover:bg-pink-500/20">
                    <Facebook className="h-6 w-6 text-pink-500" />
                  </a>
                  <a href="#" className="rounded-full bg-pink-500/10 p-3 transition-colors hover:bg-pink-500/20">
                    <Twitter className="h-6 w-6 text-pink-500" />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6 rounded-lg bg-white/5 p-8 backdrop-blur-sm">
                <div>
                  <label htmlFor="name" className="mb-2 block text-white">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border-0 bg-white/10 p-3 text-white placeholder-gray-400 backdrop-blur-sm focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-white">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border-0 bg-white/10 p-3 text-white placeholder-gray-400 backdrop-blur-sm focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block text-white">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border-0 bg-white/10 p-3 text-white placeholder-gray-400 backdrop-blur-sm focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="Your Phone"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="mb-2 block text-white">Service</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-lg border-0 bg-white/10 p-3 text-white placeholder-gray-400 backdrop-blur-sm focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="haircut">Haircut & Styling</option>
                    <option value="color">Hair Coloring</option>
                    <option value="treatment">Hair Treatment</option>
                    <option value="bridal">Bridal Services</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-white">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full rounded-lg border-0 bg-white/10 p-3 text-white placeholder-gray-400 backdrop-blur-sm focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center space-x-2 rounded-lg bg-pink-500 p-3 font-semibold text-white transition-colors hover:bg-pink-600"
                >
                  <span>Send Message</span>
                  <Send className="h-5 w-5" />
                </button>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-lg bg-green-500/10 p-3 text-center text-green-500"
                  >
                    Thank you! We'll get back to you soon.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </section>

        {/* Add Footer */}
        <Footer />
      </div>
    </motion.div>
  );
};

export default Contact;