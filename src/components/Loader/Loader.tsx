import React from 'react';
import { motion } from 'framer-motion';
import { Scissors } from 'lucide-react';

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-[#F5E6E8] to-[#D4B2D8]"
    >
      <div className="relative">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative"
        >
          <Scissors className="h-16 w-16 text-[#1E1E1E]" />
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-center"
        >
          <h2 className="font-playfair text-2xl font-bold text-[#1E1E1E]">
            Lavanya Salon
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mx-auto mt-2 h-0.5 bg-[#1E1E1E]"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader;