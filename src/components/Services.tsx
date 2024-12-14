import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';
import { Scissors, Clock, DollarSign, ArrowRight } from 'lucide-react';
import BookingForm from './BookingForm';
import ServiceDetails from './ServiceDetails';
import Footer from './Footer';

const Services = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [showServiceDetails, setShowServiceDetails] = useState(false);
  const [selectedServiceData, setSelectedServiceData] = useState(null);
  const { scrollY } = useScroll();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animations
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Parallax effects for different sections
  const headerY = useTransform(scrollY, [0, 300], [0, -50]);
  const headerOpacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  const servicesScale = useTransform(scrollY, [300, 600], [0.8, 1]);
  const servicesRotateX = useTransform(scrollY, [300, 600], [10, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX - innerWidth / 2) / (innerWidth / 2));
      mouseY.set((clientY - innerHeight / 2) / (innerHeight / 2));
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const serviceCategories = [
    {
      id: "bridal",
      title: "Bridal Services",
      description: "Make your special day even more beautiful with our comprehensive bridal packages",
      services: [
        {
          id: 1,
          name: "Complete Bridal Package",
          description: "Full bridal makeup, hairstyling, and pre-bridal services",
          price: "₹25,999",
          duration: "240 min",
          image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
        },
        {
          id: 2,
          name: "Pre-Bridal Package",
          description: "Facials, threading, waxing, and beauty treatments",
          price: "₹15,999",
          duration: "180 min",
          image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
        }
      ]
    },
    {
      id: "hair",
      title: "Hair Services",
      description: "Transform your look with our premium hair styling and treatment services",
      services: [
        {
          id: 3,
          name: "Global Hair Color",
          description: "Professional hair coloring with premium products",
          price: "₹3,999",
          duration: "120 min",
          image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
        },
        {
          id: 4,
          name: "Keratin Treatment",
          description: "Advanced smoothing treatment for frizz-free hair",
          price: "₹8,999",
          duration: "180 min",
          image: "https://images.unsplash.com/photo-1526045478516-99145907023c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
        }
      ]
    },
    {
      id: "makeup",
      title: "Makeup Services",
      description: "Expert makeup services for every occasion",
      services: [
        {
          id: 5,
          name: "Party Makeup",
          description: "Glamorous makeup for special occasions",
          price: "₹2,999",
          duration: "60 min",
          image: "https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
        },
        {
          id: 6,
          name: "HD Makeup",
          description: "Long-lasting makeup with airbrush technique",
          price: "₹4,999",
          duration: "90 min",
          image: "https://images.unsplash.com/photo-1560869713-da86a9ec0744?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
        }
      ]
    },
    {
      id: "skin",
      title: "Skin Treatments",
      description: "Advanced skincare solutions for radiant, healthy skin",
      services: [
        {
          id: 7,
          name: "Signature Facial",
          description: "Customized facial treatment for your skin type",
          price: "₹2,499",
          duration: "60 min",
          image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
        },
        {
          id: 8,
          name: "Anti-Aging Treatment",
          description: "Advanced treatment to reduce fine lines and wrinkles",
          price: "₹5,999",
          duration: "90 min",
          image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
        }
      ]
    },
    {
      id: "spa",
      title: "Spa & Wellness",
      description: "Rejuvenating spa treatments for complete relaxation",
      services: [
        {
          id: 9,
          name: "Aromatherapy Massage",
          description: "Relaxing massage with essential oils",
          price: "₹2,999",
          duration: "60 min",
          image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
        },
        {
          id: 10,
          name: "Body Polishing",
          description: "Full body exfoliation and moisturizing treatment",
          price: "₹4,499",
          duration: "90 min",
          image: "https://images.unsplash.com/photo-1526045478516-99145907023c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
        }
      ]
    }
  ];

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
          setSelectedServiceData(service);
          setShowServiceDetails(true);
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
                <span>View Details</span>
                <ArrowRight className="h-4 w-4" />
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

  return (
    <motion.div className="min-h-screen bg-gradient-to-b from-rose-50 via-pink-50 to-white">
      {/* Hero Section with Parallax */}
      <motion.section 
        className="relative h-[60vh] overflow-hidden"
        style={{ 
          y: headerY,
          opacity: headerOpacity,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-rose-200/30 to-pink-200/30" />
        <div className="container relative mx-auto flex h-full flex-col items-center justify-center px-4 text-center">
          <motion.h1 
            className="font-playfair text-5xl font-bold text-gray-800 drop-shadow-sm md:text-6xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Our Services
          </motion.h1>
          <motion.p 
            className="mt-6 max-w-2xl text-lg text-gray-600/90"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience luxury beauty services with our expert stylists
          </motion.p>
        </div>
      </motion.section>

      {/* Services Grid */}
      <motion.section 
        className="py-20"
        style={{
          scale: servicesScale,
          rotateX: servicesRotateX,
        }}
      >
        <div className="container mx-auto px-4">
          {serviceCategories.map((category) => (
            <div key={category.id} className="mb-12">
              <h2 className="font-playfair text-3xl font-bold tracking-wide">{category.title}</h2>
              <p className="mt-2 text-lg text-gray-600/90">{category.description}</p>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {category.services.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Service Details Modal */}
      <AnimatePresence>
        {showServiceDetails && selectedServiceData && (
          <ServiceDetails
            isOpen={showServiceDetails}
            onClose={() => setShowServiceDetails(false)}
            service={selectedServiceData}
            onBookNow={() => {
              setShowServiceDetails(false);
              setSelectedService(selectedServiceData.name);
              setIsBookingOpen(true);
            }}
          />
        )}
      </AnimatePresence>

      {/* Booking Form Modal */}
      <AnimatePresence>
        {isBookingOpen && (
          <BookingForm
            isOpen={isBookingOpen}
            onClose={() => setIsBookingOpen(false)}
            selectedService={selectedService}
          />
        )}
      </AnimatePresence>

      <Footer />
    </motion.div>
  );
};

export default Services;
