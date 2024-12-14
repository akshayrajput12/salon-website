export const glassEffect = {
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
};

export const cardHover = {
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
  },
};

export const gradientText = {
  background: 'linear-gradient(45deg, #FF6B6B, #FF8E53)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
};

export const modernButton = {
  background: 'linear-gradient(45deg, #FF6B6B, #FF8E53)',
  border: 'none',
  borderRadius: '30px',
  padding: '12px 30px',
  color: 'white',
  fontWeight: 'bold',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 5px 15px rgba(255, 107, 107, 0.4)',
  },
};
