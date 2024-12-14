import React from 'react';
import { Link } from 'react-router-dom';

interface NavigationLinkProps {
  to: string;
  label: string;
  isScrolled: boolean;
  mobile?: boolean;
  onClick?: () => void;
}

const NavigationLink: React.FC<NavigationLinkProps> = ({
  to,
  label,
  isScrolled,
  mobile = false,
  onClick = () => {},
}) => {
  return (
    <Link
      to={to}
      className={`font-poppins transition-colors hover:text-[#D4B2D8] ${
        mobile ? 'block py-2 text-[#1E1E1E]' : isScrolled ? 'text-[#1E1E1E]' : 'text-white'
      }`}
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

export default NavigationLink;