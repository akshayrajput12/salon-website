import React, { useEffect } from 'react';
import { motion, useAnimation, useSpring, useTransform, useScroll, useMotionValue, useInView } from 'framer-motion';
import { Heart, Users, Award, Gem, Clock, Shield, Star, Sparkles, Scissors } from 'lucide-react';
import Footer from './Footer';

// Journey Images from Unsplash
const journeyImages = {
  start: "https://images.unsplash.com/photo-1560869713-da86a9ec0744?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  growth: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  innovation: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  excellence: "https://images.unsplash.com/photo-1526045478516-99145907023c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  today: "https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
};

// Team Member Images
const teamImages = {
  stylist1: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  stylist2: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  stylist3: "https://images.unsplash.com/photo-1526045478516-99145907023c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  stylist4: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  stylist5: "https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  stylist6: "https://images.unsplash.com/photo-1560869713-da86a9ec0744?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
};

const About = () => {
  const { scrollY } = useScroll();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const controls = useAnimation();

  // Smooth spring animations for mouse movement
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

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

  // Liquid animation variants
  const liquidContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const liquidItem = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.8,
      filter: "blur(10px)",
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      }
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 200,
      }
    }
  };

  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Client-Focused Care",
      description: "Every client receives personalized attention and care tailored to their unique style preferences"
    },
    {
      icon: <Scissors className="h-8 w-8" />,
      title: "Expert Artistry",
      description: "Our master stylists bring years of experience and continuous training in latest techniques"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Premium Quality",
      description: "We use only salon-grade professional products from trusted international brands"
    }
  ];

  const features = [
    {
      icon: <Sparkles className="h-8 w-8" />,  
      title: "Luxury Experience",
      description: "Indulge in our premium salon environment with complimentary refreshments and relaxing ambiance"
    },
    {
      icon: <Clock className="h-8 w-8" />,  
      title: "Convenient Hours",
      description: "Open 7 days a week with early morning and late evening appointments available"
    },
    {
      icon: <Shield className="h-8 w-8" />,  
      title: "Hygiene Assured",
      description: "We maintain the highest standards of cleanliness with sanitized tools and equipment"
    },
    {
      icon: <Star className="h-8 w-8" />,  
      title: "Guaranteed Results",
      description: "Our commitment to excellence ensures your complete satisfaction with every visit"
    }
  ];

  const journeyMilestones = [
    {
      year: "2018",
      title: "The Beginning",
      description: "Lavanya Beauty Salon opened its doors, bringing expert beauty services to the community.",
      image: journeyImages.start
    },
    {
      year: "2019",
      title: "Expanding Services",
      description: "Introduced advanced skincare treatments and expanded our team of certified professionals.",
      image: journeyImages.growth
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Launched online booking system and virtual consultations for client convenience.",
      image: journeyImages.innovation
    },
    {
      year: "2021",
      title: "Premium Partnership",
      description: "Partnered with leading beauty brands to offer exclusive treatments and products.",
      image: journeyImages.excellence
    },
    {
      year: "2022",
      title: "Award Recognition",
      description: "Received 'Best Luxury Salon' award for exceptional service and client satisfaction.",
      image: journeyImages.today
    },
    {
      year: "2023",
      title: "Innovation & Growth",
      description: "Introduced AI-powered skin analysis and expanded to multiple locations.",
      image: journeyImages.today
    }
  ];

  const teamMembers = [
    {
      name: "Lavanya Sharma",
      role: "Founder & Master Stylist",
      specialties: ["Bridal Makeup", "Hair Styling", "Advanced Color Techniques"],
      experience: "15+ Years",
      image: teamImages.stylist1
    },
    {
      name: "Priya Patel",
      role: "Senior Makeup Artist",
      specialties: ["HD Makeup", "Airbrush Techniques", "Celebrity Styling"],
      experience: "10+ Years",
      image: teamImages.stylist2
    },
    {
      name: "Anjali Reddy",
      role: "Skincare Specialist",
      specialties: ["Advanced Facials", "Chemical Peels", "Anti-aging Treatments"],
      experience: "8+ Years",
      image: teamImages.stylist3
    },
    {
      name: "Meera Kapoor",
      role: "Hair Expert",
      specialties: ["Hair Treatments", "Global Coloring", "Keratin Services"],
      experience: "12+ Years",
      image: teamImages.stylist4
    },
    {
      name: "Ritu Verma",
      role: "Nail Art Specialist",
      specialties: ["Gel Extensions", "3D Nail Art", "Luxury Manicures"],
      experience: "7+ Years",
      image: teamImages.stylist5
    },
    {
      name: "Deepa Singh",
      role: "Spa Therapist",
      specialties: ["Body Treatments", "Aromatherapy", "Hot Stone Massage"],
      experience: "9+ Years",
      image: teamImages.stylist6
    }
  ];

  const achievements = [
    { number: "10K+", label: "Happy Clients" },
    { number: "50+", label: "Expert Staff" },
    { number: "15+", label: "Beauty Awards" },
    { number: "100%", label: "Client Satisfaction" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white"
    >
      {/* Hero Section with Liquid Effect */}
      <section className="relative overflow-hidden bg-gradient-to-b from-pink-50 to-white py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 1,
            type: "spring",
            damping: 20
          }}
          className="container relative mx-auto px-4 text-center"
        >
          {/* Liquid Blob Background */}
          <motion.div
            className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2"
            style={{
              background: "radial-gradient(circle at center, rgba(244,114,182,0.2) 0%, rgba(219,39,119,0.1) 50%, transparent 70%)",
              filter: "blur(40px)",
              x: useTransform(smoothMouseX, [-1, 1], [-20, 20]),
              y: useTransform(smoothMouseY, [-1, 1], [-20, 20]),
            }}
          />

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1,
              type: "spring",
              damping: 20
            }}
            className="relative mb-6 font-playfair text-5xl font-bold text-gray-900 md:text-6xl"
            style={{
              x: useTransform(smoothMouseX, [-1, 1], [-5, 5]),
              y: useTransform(smoothMouseY, [-1, 1], [-5, 5]),
            }}
          >
            About Lavanya Salon
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1,
              delay: 0.2,
              type: "spring",
              damping: 20
            }}
            className="mx-auto mb-8 max-w-2xl font-poppins text-lg text-gray-600"
          >
            Where passion meets expertise in creating beautiful transformations. 
            Our commitment to excellence has made us a trusted name in beauty care.
          </motion.p>
        </motion.div>

        {/* Animated Decorative Elements */}
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
              filter: ["blur(20px)", "blur(40px)", "blur(20px)"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              x: useTransform(smoothMouseX, [-1, 1], [-30, 30]),
              y: useTransform(smoothMouseY, [-1, 1], [-30, 30]),
            }}
            className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-gradient-to-r from-pink-200 to-purple-200 opacity-30"
          />
          <motion.div
            animate={{
              rotate: -360,
              scale: [1, 1.2, 1],
              filter: ["blur(30px)", "blur(50px)", "blur(30px)"],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              x: useTransform(smoothMouseX, [-1, 1], [30, -30]),
              y: useTransform(smoothMouseY, [-1, 1], [30, -30]),
            }}
            className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-gradient-to-r from-purple-200 to-pink-200 opacity-30"
          />
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="mb-8 font-playfair text-4xl font-bold text-gray-900">
              Our Story
            </h2>
            <p className="mb-6 font-poppins text-lg text-gray-600">
              Founded in 2010, Lavanya Salon has been a cornerstone of beauty and wellness in our community. 
              What started as a small salon has grown into a premium beauty destination, thanks to our 
              dedication to excellence and our wonderful clients.
            </p>
            <p className="font-poppins text-lg text-gray-600">
              Our team of skilled professionals brings together decades of combined experience, 
              ensuring that every client receives the highest quality service and leaves feeling 
              confident and beautiful.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section with Liquid Motion */}
      <motion.section
        variants={liquidContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="py-16"
      >
        <div className="container mx-auto px-4">
          <motion.div
            variants={liquidItem}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 font-playfair text-3xl font-bold text-gray-900">Our Values</h2>
            <p className="text-gray-600">What drives us to deliver excellence</p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={liquidItem}
                whileHover="hover"
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-pink-50 p-6 shadow-lg transition-shadow hover:shadow-xl"
              >
                <motion.div
                  className="mb-4 inline-block rounded-full bg-primary/10 p-3 text-primary"
                  whileHover={{ scale: 1.1, rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.3 }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
                
                {/* Liquid hover effect */}
                <motion.div
                  className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/5 to-primary/10 opacity-0 transition-opacity group-hover:opacity-100"
                  style={{
                    x: useTransform(smoothMouseX, [-1, 1], [-20, 20]),
                    y: useTransform(smoothMouseY, [-1, 1], [-20, 20]),
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Journey Timeline Section */}
      <section className="py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center font-playfair text-4xl font-bold text-gray-900 md:text-5xl"
          >
            Our Journey
          </motion.h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1.5 }}
              className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-pink-200 md:block hidden"
            />

            {/* Timeline Items */}
            {journeyMilestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative mb-20 flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center justify-center gap-8`}
              >
                {/* Year Badge */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="absolute left-1/2 -translate-x-1/2 rounded-full bg-pink-500 px-6 py-3 text-white shadow-lg md:static md:translate-x-0"
                >
                  <span className="font-bold text-lg">{milestone.year}</span>
                </motion.div>

                {/* Content */}
                <div className={`w-full px-4 text-center md:w-1/2 ${
                  index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                } md:px-8`}>
                  <h3 className="mb-3 font-playfair text-2xl font-bold text-gray-900 md:text-3xl">{milestone.title}</h3>
                  <p className="text-gray-600 md:text-lg">{milestone.description}</p>
                </div>

                {/* Image */}
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: index % 2 === 0 ? 5 : -5,
                    z: 50
                  }}
                  className="w-full md:w-1/2"
                >
                  <div className="group relative overflow-hidden rounded-2xl shadow-xl transition-transform duration-300 hover:shadow-2xl">
                    <motion.img
                      src={milestone.image}
                      alt={milestone.title}
                      className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110 md:h-80"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                      <h4 className="text-xl font-bold">{milestone.title}</h4>
                      <p className="mt-2 text-sm">{milestone.description}</p>
                    </div>
                  </div>
                </motion.div>
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
            <h2 className="mb-4 font-playfair text-4xl font-bold text-gray-900 md:text-5xl">
              Why Choose Us
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 md:text-lg">
              We pride ourselves on delivering exceptional service and creating unforgettable experiences for our clients.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 hover-3d perspective-1000">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="rounded-xl bg-white p-6 text-center shadow-lg transition-all duration-300 hover:shadow-2xl hover:bg-pink-50 slick-card group transform-gpu hover:scale-105 hover:[transform:rotateX(10deg)_rotateY(10deg)] cursor-pointer"
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px"
                }}
              >
                <div className="transform transition-all duration-300">
                  <div className="overflow-hidden rounded-lg mb-4">
                    <img
                      src={
                        feature.title === 'Luxury Experience'
                          ? 'https://images.unsplash.com/photo-1657563920440-0ac6d8932f20?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                          : feature.title === 'Convenient Hours'
                          ? 'https://images.unsplash.com/photo-1533749047139-189de3cf06d3?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                          : feature.title === 'Hygiene Assured'
                          ? 'https://plus.unsplash.com/premium_photo-1669735916387-24340468a65c?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                          : 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                      }
                      alt={feature.title}
                      className="w-full h-32 object-cover rounded-lg transition-transform duration-500 group-hover:scale-110 smooth-image"
                    />
                  </div>
                  <h3 className="mb-2 font-playfair text-xl font-bold transition-colors duration-300 hover:text-pink-600 transform-gpu group-hover:[transform:translateZ(20px)]">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 transform-gpu group-hover:[transform:translateZ(30px)]">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section with Enhanced Cards */}
      <section className="bg-gradient-to-b from-pink-50 to-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 font-playfair text-4xl font-bold text-gray-900 md:text-5xl">
              Meet Our Experts
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 md:text-lg">
              Our team of passionate professionals brings years of experience and expertise to ensure you receive the best service.
            </p>
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  scale: 1.03,
                  rotateX: 2,
                  rotateY: 2,
                  z: 10
                }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all duration-300 hover:shadow-2xl"
                style={{
                  perspective: "1000px",
                  transformStyle: "preserve-3d"
                }}
              >
                {/* Profile Image Container */}
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.4 }}
                    className="aspect-w-1 aspect-h-1"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  <motion.h3
                    whileHover={{ scale: 1.05 }}
                    className="mb-2 font-playfair text-2xl font-bold text-gray-900"
                  >
                    {member.name}
                  </motion.h3>
                  <p className="mb-4 text-pink-500 font-medium">
                    {member.role}
                  </p>
                  <p className="mb-4 text-gray-600">
                    <span className="font-semibold">Experience:</span> {member.experience}
                  </p>

                  {/* Specialties */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.specialties.map((specialty, idx) => (
                      <motion.span
                        key={idx}
                        whileHover={{ scale: 1.1 }}
                        className="px-4 py-1.5 bg-pink-100 text-pink-600 rounded-full text-sm font-medium transition-colors duration-300 hover:bg-pink-200"
                      >
                        {specialty}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Animated Background */}
                <motion.div
                  className="absolute inset-0 -z-10 bg-gradient-to-br from-pink-100/80 to-purple-100/80 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  animate={{
                    background: [
                      "radial-gradient(circle at 0% 0%, rgba(244,114,182,0.2) 0%, rgba(219,39,119,0.1) 100%)",
                      "radial-gradient(circle at 100% 100%, rgba(244,114,182,0.2) 0%, rgba(219,39,119,0.1) 100%)"
                    ]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  style={{
                    filter: "blur(20px)"
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with Enhanced 3D Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid gap-8 md:grid-cols-3"
          >
            {achievements.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateX: 10,
                  rotateY: 10,
                  z: 50
                }}
                transition={{ delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg"
                style={{
                  perspective: "1000px",
                  transformStyle: "preserve-3d"
                }}
              >
                <div className="relative z-10 text-center">
                  <motion.h3
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="mb-2 font-playfair text-4xl font-bold text-pink-500"
                  >
                    {stat.number}
                  </motion.h3>
                  <p className="text-gray-600 text-lg">{stat.label}</p>
                </div>
                <motion.div
                  className="absolute inset-0 -z-10 bg-gradient-to-br from-pink-100 to-purple-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  animate={{
                    background: [
                      "radial-gradient(circle at 0% 0%, rgba(244,114,182,0.3) 0%, rgba(219,39,119,0.1) 100%)",
                      "radial-gradient(circle at 100% 100%, rgba(244,114,182,0.3) 0%, rgba(219,39,119,0.1) 100%)"
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  style={{
                    filter: "blur(20px)"
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Add Footer */}
      <Footer />
    </motion.div>
  );
};

export default About;
