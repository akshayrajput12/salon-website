import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div>
            <h2 className="mb-4 font-playfair text-2xl font-bold">GLAM</h2>
            <p className="mb-6 text-gray-400">
              Your destination for beauty and relaxation. We provide premium salon services
              with a focus on customer satisfaction.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="rounded-full bg-white/10 p-2 transition-colors hover:bg-pink-500"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-full bg-white/10 p-2 transition-colors hover:bg-pink-500"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-full bg-white/10 p-2 transition-colors hover:bg-pink-500"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-playfair text-lg font-bold">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 transition-colors hover:text-pink-500"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 transition-colors hover:text-pink-500"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 transition-colors hover:text-pink-500"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-gray-400 transition-colors hover:text-pink-500"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 transition-colors hover:text-pink-500"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 font-playfair text-lg font-bold">Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">Hair Styling</li>
              <li className="text-gray-400">Hair Coloring</li>
              <li className="text-gray-400">Makeup</li>
              <li className="text-gray-400">Nail Care</li>
              <li className="text-gray-400">Bridal Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 font-playfair text-lg font-bold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <MapPin className="mr-2 h-5 w-5 text-pink-500" />
                123 Beauty Street, Fashion City
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="mr-2 h-5 w-5 text-pink-500" />
                +1 234 567 8900
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="mr-2 h-5 w-5 text-pink-500" />
                info@glambeauty.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} GLAM. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;