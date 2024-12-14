import React from 'react';
import NavigationLink from './NavigationLink';
import BookNowButton from './BookNowButton';
import { navigationLinks } from './navigationData';

interface NavigationLinksProps {
  mobile?: boolean;
  isScrolled?: boolean;
  onClick?: () => void;
  onBookNow: () => void;
}

const NavigationLinks: React.FC<NavigationLinksProps> = ({
  mobile = false,
  isScrolled = false,
  onClick = () => {},
  onBookNow
}) => {
  const handleBookNow = () => {
    onBookNow();
    onClick();
  };

  return (
    <>
      {navigationLinks.map((link) => (
        <NavigationLink
          key={link.label}
          {...link}
          isScrolled={isScrolled}
          mobile={mobile}
          onClick={onClick}
        />
      ))}
      <BookNowButton
        mobile={mobile}
        isScrolled={isScrolled}
        onClick={handleBookNow}
      />
    </>
  );
};

export default NavigationLinks;