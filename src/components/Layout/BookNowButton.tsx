import React from 'react';

interface BookNowButtonProps {
  mobile?: boolean;
  isScrolled?: boolean;
  onClick: () => void;
}

const BookNowButton: React.FC<BookNowButtonProps> = ({ mobile = false, isScrolled = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-6 py-2 font-poppins text-sm transition-all ${
        mobile || isScrolled
          ? 'bg-[#1E1E1E] text-white hover:bg-[#1E1E1E]/90'
          : 'bg-white text-[#1E1E1E] hover:bg-[#F5E6E8]'
      }`}
    >
      Book Now
    </button>
  );
};

export default BookNowButton;