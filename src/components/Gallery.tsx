import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';
import Footer from './Footer';
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

const GalleryCard = ({ item, onClick }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      whileHover="hover"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative h-[400px] w-full cursor-pointer overflow-hidden rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 p-1 shadow-lg transition-all duration-300 hover:shadow-2xl"
      onClick={onClick}
    >
      <motion.div
        variants={{
          hover: { scale: 1.05, transition: { duration: 0.3 } }
        }}
        className="relative h-full w-full overflow-hidden rounded-xl bg-white"
      >
        <img
          src={item.images[0]}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ transform: "translateZ(20px)" }}
        >
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 
              className="text-2xl font-bold"
              style={{ transform: "translateZ(50px)" }}
            >
              {item.title}
            </h3>
            <p 
              className="mt-2 text-sm opacity-90"
              style={{ transform: "translateZ(40px)" }}
            >
              {item.description}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Gallery = () => {
  const [selectedGalleryItem, setSelectedGalleryItem] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState<number>(6);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

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

  const loadMoreItems = () => {
    setIsLoading(true);
    // Simulate API call delay
    setTimeout(() => {
      setVisibleItems(prev => prev + 6);
      // Assuming we have a total of 18 items
      if (visibleItems + 6 >= galleryItems.length) {
        setHasMore(false);
      }
      setIsLoading(false);
    }, 800);
  };

  const galleryItems = [
    {
      id: 1,
      type: 'images',
      images: [a1, a2, a3, a4, a5],
      title: "Elegant Makeup",
      description: "Beautiful hair styling and makeup results"
    },
    {
      id: 2,
      type: 'images',
      images: [b1, b2, b3, b4, b5],
      title: "Color Transformations",
      description: "Beautiful hair coloring results"
    },
    {
      id: 3,
      type: 'images',
      images: [c1, c2, c3],
      title: "Bridal Makeup",
      description: "Beautiful bride makeup results"
    },
    {
      id: 4,
      type: 'images',
      images: [e1, e2],
      title: "Modern Styling",
      description: "Elegant and trendy styling"
    },
    {
      id: 5,
      type: 'images',
      images: [f1, f2, f3, f4],
      title: "Bridal Styling",
      description: "Glamorous bride styling"
    },
    {
      id: 6,
      type: 'images',
      images: [d1, d2, d3],
      title: "Special Occasions",
      description: "Glamorous event styling"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative overflow-hidden py-20 text-center"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-pink-200/30 to-purple-200/30" />

        <div className="container relative mx-auto px-4">
          <h1 className="font-playfair text-5xl font-bold text-gray-900 md:text-6xl">
            Our Gallery
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Explore our stunning collection of transformations and beautiful styles
          </p>
        </div>
      </motion.section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {galleryItems.slice(0, visibleItems).map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: galleryItems.indexOf(item) * 0.1 }}
                className="transform-gpu"
              >
                <GalleryCard
                  item={item}
                  onClick={() => {
                    setSelectedGalleryItem(item);
                    setCurrentImageIndex(0);
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Load More Button */}
      {hasMore && (
        <div className="mt-12 text-center">
          <motion.button
            onClick={loadMoreItems}
            disabled={isLoading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`
              relative px-8 py-3 rounded-full font-medium text-white
              bg-gradient-to-r from-pink-500 to-pink-600
              transform transition-all duration-300
              hover:shadow-lg disabled:opacity-70
              ${isLoading ? 'cursor-wait' : 'cursor-pointer'}
            `}
          >
            <motion.span
              animate={isLoading ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              Load More
            </motion.span>
            
            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                />
              </motion.div>
            )}
          </motion.button>
        </div>
      )}

      {/* Modal for viewing gallery items */}
      <AnimatePresence>
        {selectedGalleryItem && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          >
            <motion.div 
              className="relative max-h-[90vh] max-w-[90vw]"
              initial={{ scale: 0.9, opacity: 1 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <button
                onClick={() => setSelectedGalleryItem(null)}
                className="absolute -right-4 -top-4 z-10 rounded-full bg-white p-2 text-black transition-transform hover:scale-110"
              >
                <X className="h-6 w-6" />
              </button>

              {selectedGalleryItem.type === 'images' && (
                <motion.div
                  key={currentImageIndex}
                  initial={{ x: 300, opacity: 1 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                >
                  <img
                    src={selectedGalleryItem.images[currentImageIndex]}
                    alt={selectedGalleryItem.title}
                    className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-2xl"
                  />
                  {selectedGalleryItem.images.length > 1 && (
                    <>
                      <button
                        onClick={handlePrevious}
                        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-black transition-transform hover:scale-110"
                      >
                        <ChevronLeft className="h-6 w-6" />
                      </button>
                      <button
                        onClick={handleNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-black transition-transform hover:scale-110"
                      >
                        <ChevronRight className="h-6 w-6" />
                      </button>
                    </>
                  )}
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Gallery;