import React from 'react';
import { motion } from 'framer-motion';
import NavigationLinks from './NavigationLinks';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onBookNow: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onBookNow }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="absolute left-0 right-0 bg-white px-4 py-2 shadow-lg md:hidden"
    >
      <NavigationLinks
        mobile
        isScrolled={true}
        onClick={onClose}
        onBookNow={onBookNow}
      />
    </motion.div>
  );
};

export default MobileMenu;