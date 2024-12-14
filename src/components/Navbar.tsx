import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' }
  ];

  const menuVariants = {
    closed: {
      scale: 0,
      opacity: 0,
      transition: {
        duration: 0.2
      }
    },
    open: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  const linkVariants = {
    closed: {
      opacity: 0,
      y: 50,
      transition: {
        duration: 0.2
      }
    },
    open: i => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: i * 0.1
      }
    })
  };

  const Path = props => (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke={isOpen ? "white" : "currentColor"}
      strokeLinecap="round"
      {...props}
    />
  );

  const MenuButton = () => (
    <motion.button
      className="relative z-50 h-12 w-12 rounded-full bg-transparent p-2"
      onClick={() => setIsOpen(!isOpen)}
      animate={isOpen ? "open" : "closed"}
    >
      <svg width="32" height="32" viewBox="0 0 32 32">
        {/* Scissors - top line */}
        <motion.g
          variants={{
            closed: { rotate: 0, x: 0 },
            open: { rotate: 45, x: 2 }
          }}
        >
          <Path
            variants={{
              closed: { d: "M 6 8 C 8 8, 10 8, 14 8" },
              open: { d: "M 6 8 L 14 16" }
            }}
            strokeWidth="2"
          />
          <motion.circle
            cx="15"
            cy="8"
            r="1.5"
            fill="currentColor"
            variants={{
              closed: { scale: 1 },
              open: { scale: 0 }
            }}
          />
        </motion.g>

        {/* Comb - middle line */}
        <motion.g
          variants={{
            closed: { opacity: 1, x: 0 },
            open: { opacity: 0, x: 20 }
          }}
        >
          <Path
            d="M 6 16 L 20 16"
            strokeWidth="2"
          />
          <motion.path
            d="M 12 14 L 12 18 M 14 14 L 14 18 M 16 14 L 16 18"
            strokeWidth="1.5"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 }
            }}
          />
        </motion.g>

        {/* Brush - bottom line */}
        <motion.g
          variants={{
            closed: { rotate: 0, x: 0 },
            open: { rotate: -45, x: 2 }
          }}
        >
          <Path
            variants={{
              closed: { d: "M 6 24 C 8 24, 10 24, 14 24" },
              open: { d: "M 6 24 L 14 16" }
            }}
            strokeWidth="2"
          />
          <motion.path
            d="M 15 23 C 17 23, 18 25, 18 26"
            strokeWidth="1.5"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 }
            }}
          />
          <motion.circle
            cx="19"
            cy="26"
            r="2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            variants={{
              closed: { scale: 1 },
              open: { scale: 0 }
            }}
          />
        </motion.g>

        {/* Sparkles when menu opens */}
        <motion.g
          variants={{
            closed: { scale: 0, opacity: 0 },
            open: { scale: 1, opacity: 1 }
          }}
          transition={{ delay: 0.2 }}
        >
          <motion.path
            d="M 22 8 L 24 8 M 23 7 L 23 9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <motion.path
            d="M 26 20 L 28 20 M 27 19 L 27 21"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <motion.path
            d="M 22 28 L 24 28 M 23 27 L 23 29"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </motion.g>
      </svg>
    </motion.button>
  );

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link 
            to="/"
            className="text-2xl font-playfair font-bold text-pink-600"
          >
            Lavanya
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`relative font-medium transition-colors duration-300 ${
                  location.pathname === path
                    ? 'text-pink-600'
                    : 'text-gray-700 hover:text-pink-600'
                }`}
              >
                {label}
                {location.pathname === path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-pink-600"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <MenuButton />
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black"
          >
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-pink-500 to-purple-600"
            >
              <div className="flex flex-col items-center space-y-8">
                {navLinks.map(({ path, label }, i) => (
                  <motion.div
                    key={path}
                    custom={i}
                    variants={linkVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                  >
                    <Link
                      to={path}
                      onClick={() => setIsOpen(false)}
                      className={`relative text-3xl font-playfair font-medium text-white transition-colors duration-300 hover:text-pink-200 ${
                        location.pathname === path && 'text-pink-200'
                      }`}
                    >
                      {label}
                      {location.pathname === path && (
                        <motion.div
                          layoutId="mobile-underline"
                          className="absolute -bottom-2 left-0 right-0 h-0.5 bg-pink-200"
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
