import React, { useState, useEffect, useRef } from 'react';
import { 
  motion, 
  useScroll, 
  useTransform, 
  AnimatePresence,
  useInView,
  useAnimation,
  useMotionValue,
  useSpring
} from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Clock, Award, Users, Star, Scissors, Heart, Play, ChevronLeft, X, ChevronDown } from 'lucide-react';
import { staggerContainer, fadeInUp, scaleIn } from '../utils/animations';
import BookingForm from './BookingForm';
import Footer from '../components/Footer'; // Import Footer component
import a1 from '../assets/a1.webp';  
import a2 from '../assets/a2.webp';
import a3 from '../assets/a3.webp';
import a4 from '../assets/a4.webp';
import a5 from '../assets/a5.webp';
import b1 from '../assets/b1.webp';
import b2 from '../assets/b2.webp';
import b3 from '../assets/b3.webp';
import b4 from '../assets/b4.webp';
import b5 from '../assets/b5.webp';
import c1 from '../assets/c1.webp';
import c2 from '../assets/c2.webp';
import c3 from '../assets/c3.webp';
import d1 from '../assets/d1.webp';
import d2 from '../assets/d2.webp';
import d3 from '../assets/d3.webp';
import e1 from '../assets/e1.webp';
import e2 from '../assets/e2.webp';
import f1 from '../assets/f1.webp';
import f2 from '../assets/f2.webp';
import f3 from '../assets/f3.webp';
import f4 from '../assets/f4.webp';
import g1 from '../assets/g1.webp';
import g2 from '../assets/g2.webp';
import g3 from '../assets/g3.webp';
import h1 from '../assets/h1.webp';
import h2 from '../assets/h2.webp';
import h3 from '../assets/h3.webp';

// AnimatedText Component
const AnimatedText = ({ text, className = "" }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false,
    amount: 0.5
  });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 50,
      rotate: -20,
      scale: 0.5,
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={container}
      className={className}
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          className="relative cursor-pointer"
          whileHover={{
            scale: 1.2,
            rotate: [0, -10, 10, 0],
            transition: {
              duration: 0.3,
            },
          }}
          style={{ display: "inline-block" }}
        >
          <span className="relative z-10 transition-colors duration-300 hover:text-rose-500">
            {letter === " " ? "\u00A0" : letter}
          </span>
          <motion.span
            className="absolute inset-0 -z-10 opacity-0"
            whileHover={{
              opacity: [0, 1, 0],
              y: [0, -20, 0],
              transition: {
                duration: 0.6,
                repeat: Infinity,
              },
            }}
          >
            ✨
          </motion.span>
        </motion.span>
      ))}
    </motion.div>
  );
};

const Home = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { scrollY } = useScroll();
  
  // Create motion values for mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Create smooth spring animations
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  
  // Parallax effects for different layers
  const heroImageY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroTextY = useTransform(scrollY, [0, 500], [0, -50]);
  const decorativeY = useTransform(scrollY, [0, 500], [0, 100]);

  // Transform mouse position for various effects
  const backgroundX = useTransform(smoothMouseX, [-1, 1], [-20, 20]);
  const backgroundY = useTransform(smoothMouseY, [-1, 1], [-20, 20]);
  
  const decorativeX = useTransform(smoothMouseX, [-1, 1], [-30, 30]);
  const decorativeY2 = useTransform(smoothMouseY, [-1, 1], [-30, 30]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Convert mouse position to values between -1 and 1
      const x = (clientX - innerWidth / 2) / (innerWidth / 2);
      const y = (clientY - innerHeight / 2) / (innerHeight / 2);
      
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const handleNext = () => {
    if (selectedGalleryItem && selectedGalleryItem.type === 'images') {
      setCurrentImageIndex((prev) => 
        prev === selectedGalleryItem.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handlePrevious = () => {
    if (selectedGalleryItem && selectedGalleryItem.type === 'images') {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedGalleryItem.images.length - 1 : prev - 1
      );
    }
  };

  const heroContent = {
    title: "Lavanya Beauty Salon & Spa",
    subtitle: "Where Beauty Meets Elegance",
    description: "Experience the perfect blend of traditional beauty practices and modern techniques at Lavanya Salon. Our expert team delivers exceptional services tailored to enhance your natural beauty.",
    cta: "Book Appointment"
  };

  const features = [
    {
      icon: <Scissors className="h-8 w-8" />,
      title: "Expert Stylists",
      description: "Our team of certified professionals brings years of experience in latest beauty trends and techniques."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Premium Products",
      description: "We use only the finest quality beauty products from renowned international brands."
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Personalized Care",
      description: "Every service is customized to match your unique style and beauty requirements."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Relaxing Atmosphere",
      description: "Step into our peaceful sanctuary designed for your complete relaxation and rejuvenation."
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Regular Client",
      image: "https://images.unsplash.com/photo-1557555187-23d685287bc3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      quote: "Lavanya Salon has been my go-to place for all beauty services. Their attention to detail and professional approach is commendable."
    },
    {
      name: "Anjali Patel",
      role: "Bridal Client",
      image: "https://images.unsplash.com/photo-1592621385612-4d7129426394?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      quote: "My bridal makeup was absolutely stunning! The team made me feel so special and beautiful on my big day."
    },
    {
      name: "Meera Reddy",
      role: "Regular Client",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      quote: "The spa services at Lavanya are exceptional. It's my perfect retreat for relaxation and self-care."
    }
  ];

  const stats = [
    { number: "10+", label: "Years of Excellence" },
    { number: "15K+", label: "Happy Clients" },
    { number: "50+", label: "Expert Stylists" },
    { number: "100+", label: "Beauty Services" }
  ];

  const galleryItems = [
    {
      id: 1,
      type: 'images',
      images: [
        a1,
        a2,
        a3,
        a4,
        a5
      ],
      title: "Bridal Makeup",
      description: "Beautiful hair styling and makeup results"
    },
    {
      id: 2,
      type: 'images',
      images: [
        b1,
        b2,
        b3,
        b4,
        b5
      ],
      title: "Color Transformations",
      description: "Beautiful hair coloring results"
    },
    {
      id: 3,
      type: 'images',
      images: [
        c1,
        c2,
        c3
      ],
      title: "Bride Makeup",
      description: "Beautiful bride makeup results"
    },
    {
      id: 4,
      type: 'images',
      images: [
        e1,
        e2
      ],
      title: "Modern Styling",
      description: "Elegant and trendy styling"
    },
    {
      id: 5,
      type: 'images',
      images: [
        f1,
        f2,
        f3,
        f4
      ],
      title: "Bride Styling",
      description: "Glamorous bride styling"
    },
    {
      id: 6,
      type: 'images',
      images: [
        d1,
        d2,
        d3
      ],
      title: "Special Occasions",
      description: "Glamorous event styling"
    }
  ];

  const heroY = useTransform(scrollY, [0, 300], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.8]);

  const ServiceCard = ({ service }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
      <motion.div
        className="group relative h-[400px] overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ 
          scale: 1.02,
          transition: { duration: 0.2 }
        }}
        onClick={() => {
          setIsBookingOpen(true);
        }}
      >
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="font-playfair text-2xl font-bold tracking-wide">{service.name}</h3>
          <p className="mt-2 text-sm font-medium text-white/90">{service.description}</p>
          
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-rose-300" />
                <span className="text-sm font-medium text-white/90">{service.duration}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold text-rose-300">{service.price}</span>
              </div>
            </div>
          </div>
          
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="mt-4 flex items-center gap-2 text-sm font-medium text-rose-300"
              >
                <span>Book Now</span>
                <ChevronRight className="h-4 w-4" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.div
          className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          initial={false}
          animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
        />
      </motion.div>
    );
  };

  const ServicesSection = () => {
    return (
      <section className="bg-gradient-to-b from-rose-50 via-pink-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className="font-playfair text-4xl font-bold text-gray-800"
            >
              Featured Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-gray-600"
            >
              Discover our most popular beauty and wellness treatments
            </motion.p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                id: 1,
                name: 'Bridal Package',
                description: 'Complete bridal makeup & hairstyling',
                price: '₹15,999',
                duration: '180 min',
                image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80',
                category: 'Special'
              },
              {
                id: 2,
                name: 'Hair Coloring',
                description: 'Global color, highlights, or balayage',
                price: '₹2,499',
                duration: '120 min',
                image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80',
                category: 'Hair'
              },
              {
                id: 3,
                name: 'Party Makeup',
                description: 'Glamorous makeup for special occasions',
                price: '₹2,999',
                duration: '45 min',
                image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=800&q=80',
                category: 'Makeup'
              }
            ].map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link 
              to="/services"
              className="inline-block rounded-lg bg-rose-500 px-8 py-3 font-semibold text-white shadow-lg transition-all hover:bg-rose-600 hover:shadow-xl"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    );
  };

  const TestimonialsSection = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const testimonialsPerPage = 3;
    const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

    // Auto-scroll functionality
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % totalPages);
      }, 5000); // Change testimonials every 5 seconds

      return () => clearInterval(timer);
    }, [totalPages]);

    const nextTestimonial = () => {
      setCurrentTestimonial((prev) => (prev + 1) % totalPages);
    };

    const prevTestimonial = () => {
      setCurrentTestimonial((prev) => (prev - 1 + totalPages) % totalPages);
    };

    return (
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="font-playfair text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Real experiences from our valued clients
            </p>
          </motion.div>

          <div className="relative">
            <div className="flex items-center justify-between">
              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-lg transition-all hover:bg-white"
              >
                <ChevronLeft className="h-6 w-6 text-gray-600" />
              </button>

              <div className="mx-auto grid w-full gap-8 px-12 md:grid-cols-3">
                {testimonials
                  .slice(
                    currentTestimonial * testimonialsPerPage,
                    (currentTestimonial + 1) * testimonialsPerPage
                  )
                  .map((testimonial, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false }}
                      transition={{ delay: index * 0.2 }}
                      className={`rounded-xl bg-white p-8 shadow-lg transform transition-all duration-500 
                        ${index === 1 ? 
                          'bg-gradient-to-br from-rose-100 via-pink-100 to-purple-100 scale-110 shadow-2xl -rotate-1 hover:rotate-0 hover:scale-115 z-10 border border-pink-200' : 
                          index % 2 === 0 ? 'hover:bg-pink-50 hover:scale-105' : 'hover:bg-purple-50 hover:scale-105'
                        }
                        ${index === 1 ? 'transform-style-3d perspective-1000' : ''}
                      `}
                      style={{
                        transform: index === 1 ? 'perspective(1000px) rotateY(0deg)' : '',
                        transition: 'all 0.5s ease-in-out'
                      }}
                      whileHover={index === 1 ? {
                        rotateY: [-5, 5],
                        transition: {
                          duration: 1,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }
                      } : {}}
                    >
                      <div className={`mb-6 flex flex-col items-center ${index === 1 ? 'transform translate-z-10' : ''}`}>
                        <div className="relative mb-4">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className={`rounded-full border-4 ${
                              index === 1 
                                ? 'h-32 w-32 border-rose-300 shadow-xl animate-pulse' 
                                : 'h-24 w-24 border-white shadow-lg'
                            }`}
                          />
                          <motion.div
                            className={`absolute -right-2 -top-2 rounded-full ${
                              index === 1 ? 'bg-rose-400 p-3' : 'bg-yellow-400 p-2'
                            }`}
                            animate={index === 1 ? {
                              scale: [1, 1.3, 1],
                              rotate: [0, 360]
                            } : {
                              scale: [1, 1.2, 1]
                            }}
                            transition={{ 
                              duration: index === 1 ? 3 : 2, 
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            <Star className={`${
                              index === 1 ? 'h-5 w-5' : 'h-4 w-4'
                            } text-white`} />
                          </motion.div>
                        </div>
                        <h3 className={`font-playfair font-bold text-gray-900 ${
                          index === 1 ? 'text-2xl mb-2' : 'text-xl'
                        }`}>
                          {testimonial.name}
                        </h3>
                        <p className={`text-gray-600 ${
                          index === 1 ? 'text-base font-medium' : 'text-sm'
                        }`}>
                          {testimonial.role}
                        </p>
                      </div>
                      <p className={`text-center italic ${
                        index === 1 
                          ? 'text-lg text-gray-700 font-medium leading-relaxed' 
                          : 'text-gray-600'
                      }`}>
                        "{testimonial.quote}"
                      </p>
                      <div className={`mt-6 flex items-center justify-center gap-1 ${
                        index === 1 ? 'scale-110' : ''
                      }`}>
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`fill-current ${
                              index === 1 
                                ? 'h-5 w-5 text-rose-400' 
                                : 'h-4 w-4 text-yellow-400'
                            }`}
                          />
                        ))}
                      </div>
                    </motion.div>
                  ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-lg transition-all hover:bg-white"
              >
                <ChevronRight className="h-6 w-6 text-gray-600" />
              </button>
            </div>

            <div className="mt-8 flex justify-center gap-2">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-2 rounded-full transition-all ${
                    currentTestimonial === index
                      ? 'w-8 bg-rose-500'
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      className="min-h-screen bg-gray-50"
    >
      {/* Hero Section */}
      <motion.section
        className="relative min-h-screen overflow-hidden"
        style={{
          y: heroY,
          opacity: heroOpacity,
          scale: heroScale,
        }}
      >
        {/* Background Image with Parallax */}
        <motion.div 
          className="absolute inset-0"
          style={{
            y: useTransform(scrollY, [0, 300], [0, 100]),
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=2000&q=80"
            alt="Salon Background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>

        <div className="container relative mx-auto flex min-h-screen flex-col items-center justify-center px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <AnimatedText
              text={heroContent.title}
              className="font-playfair text-5xl font-bold text-white md:text-7xl"
            />
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mx-auto mt-6 max-w-2xl text-lg text-white/90"
            >
              {heroContent.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-4"
            >
              <button
                onClick={() => setIsBookingOpen(true)}
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-rose-500 px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-rose-600"
              >
                <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
                {heroContent.cta}
              </button>
              <Link
                to="/services"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-white/10"
              >
                <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
                View Services
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 1.2, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
          >
            <div className="animate-bounce">
              <ChevronDown className="h-8 w-8 text-white/70" />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="bg-gray-900 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="mb-2 font-playfair text-4xl font-bold text-pink-500">
                  <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                  >
                    {stat.number}
                  </motion.span>
                </h3>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

            {/* Why Choose Us Section */}
            <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 font-playfair text-4xl font-bold text-gray-900">
              Why Choose Us
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              We pride ourselves on delivering exceptional service and creating unforgettable experiences for our clients.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 hover-3d">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className={`rounded-xl bg-white p-6 text-center shadow-lg transition-all duration-300 hover:shadow-xl ${index % 2 === 0 ? 'bg-pink-50' : 'bg-purple-50'}`}
              >
                <div className="transform transition-transform duration-300 tilt">
                  <img
                    src={
                      feature.title === 'Expert Stylists'
                        ? 'https://images.unsplash.com/photo-1657563920440-0ac6d8932f20?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        : feature.title === 'Flexible Hours'
                        ? 'https://images.unsplash.com/photo-1533749047139-189de3cf06d3?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        : feature.title === 'Premium Products'
                        ? 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        : 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    }
                    alt={feature.title}
                    className="mb-4 h-32 w-full object-cover rounded-lg smooth-image"
                  />
                  <h3 className="mb-2 font-playfair text-xl font-bold transition-colors duration-300 hover:text-pink-600">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ServicesSection />

      {/* Gallery Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="bg-gray-50 py-12 sm:py-16 md:py-20"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="mb-8 text-center sm:mb-12"
          >
            <h2 className="font-playfair text-2xl font-bold sm:text-3xl md:text-4xl">Our Gallery</h2>
            <p className="mt-4 text-sm text-gray-600 sm:text-base">Explore our latest work and transformations</p>
          </motion.div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {galleryItems.slice(0, 6).map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotateX: -15 }}
                whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                whileHover={{
                  scale: 1.05,
                  rotateX: 5,
                  z: 50,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                  type: "spring",
                  damping: 15
                }}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px"
                }}
                viewport={{ once: false }}
                className="group relative overflow-hidden rounded-xl bg-white shadow-lg"
                onClick={() => setSelectedGalleryItem(item)}
              >
                {item.type === 'video' ? (
                  <div className="relative h-[300px]">
                    <video
                      src={item.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:brightness-90"
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="rounded-full bg-white/20 p-4 backdrop-blur-sm"
                      >
                        <Play className="h-8 w-8 text-white drop-shadow-glow" />
                      </motion.div>
                    </motion.div>
                  </div>
                ) : (
                  <div className="relative h-[300px]">
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:brightness-90"
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    {item.images.length > 1 && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm"
                        >
                          <span className="text-white drop-shadow-glow">+{item.images.length - 1} more</span>
                        </motion.div>
                      </motion.div>
                    )}
                  </div>
                )}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6"
                >
                  <h3 className="font-playfair text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-200">{item.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 text-center"
          >
            <Link to="/gallery">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
                  px-8 py-3 rounded-full font-medium text-white
                  bg-gradient-to-r from-pink-500 to-pink-600
                  transform transition-all duration-300
                  hover:shadow-lg
                  flex items-center justify-center gap-2 mx-auto
                "
              >
                <span>View All Gallery</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                >
                  →
                </motion.span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Newsletter Section */}
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-4">
          <div className="relative rounded-2xl bg-gray-900 px-6 py-16 text-center text-white md:py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <h2 className="mb-4 font-playfair text-4xl font-bold">
                Join Our Newsletter
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-gray-400">
                Subscribe to receive updates about new services, special offers, and beauty tips.
              </p>
              <form className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-full bg-white px-6 py-3 text-gray-900 placeholder-gray-500"
                />
                <button
                  type="submit"
                  className="rounded-full bg-pink-500 px-8 py-3 font-medium text-white transition-colors hover:bg-pink-600"
                >
                  Subscribe
                </button>
              </form>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute right-0 top-0 h-64 w-64 rounded-full bg-pink-500/20 blur-3xl"
            />
            <motion.div
              animate={{
                rotate: -360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Booking Form Modal */}
      {isBookingOpen && (
        <BookingForm
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
        />
      )}
      
      <AnimatePresence>
        {selectedGalleryItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              onClick={() => {
                setSelectedGalleryItem(null);
                setCurrentImageIndex(0);
              }}
              className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <X className="h-6 w-6" />
            </motion.button>

            {selectedGalleryItem.type === 'video' ? (
              <motion.video
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                src={selectedGalleryItem.src}
                controls
                autoPlay
                loop
                muted
                className="max-h-[80vh] max-w-[90vw] rounded-lg"
              />
            ) : (
              <div className="relative">
                <motion.img
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  src={selectedGalleryItem.images[currentImageIndex]}
                  alt={selectedGalleryItem.title}
                  className="max-h-[80vh] max-w-[90vw] rounded-lg"
                />
                {selectedGalleryItem.images.length > 1 && (
                  <>
                    <motion.button
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      whileHover={{ scale: 1.1 }}
                      onClick={handlePrevious}
                      className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </motion.button>
                    <motion.button
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      whileHover={{ scale: 1.1 }}
                      onClick={handleNext}
                      className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </motion.button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-4 py-2 text-sm text-white backdrop-blur-sm">
                      {currentImageIndex + 1} / {selectedGalleryItem.images.length}
                    </div>
                  </>
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
};

export default Home;
