import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, DollarSign, Star, ChevronRight } from 'lucide-react';

interface ServiceDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    id: number;
    name: string;
    description: string;
    price: string;
    duration: string;
    image: string;
    category: string;
  };
  onBookNow: () => void;
}

const ServiceDetails: React.FC<ServiceDetailsProps> = ({ isOpen, onClose, service, onBookNow }) => {
  if (!isOpen) return null;

  // Additional details for each service
  const getServiceDetails = (category: string) => {
    switch (category) {
      case 'Hair':
        return {
          features: [
            'Consultation with expert stylist',
            'Premium imported products',
            'Head massage included',
            'Style recommendations',
            'Hair care tips'
          ],
          benefits: [
            'Personalized styling advice',
            'Relaxing head massage experience',
            'Long-lasting results',
            'Expert styling techniques'
          ]
        };
      case 'Makeup':
        return {
          features: [
            'HD makeup application',
            'Premium branded products',
            'Customized look creation',
            'False lashes included',
            'Touch-up kit provided'
          ],
          benefits: [
            'Perfect for Indian weather',
            'Long-lasting makeup finish',
            'Photos & occasion ready',
            'Natural yet glamorous look'
          ]
        };
      case 'Special':
        return {
          features: [
            'Complete bridal consultation',
            'Pre-bridal trial session',
            'Premium makeup & accessories',
            'Traditional & modern styles',
            'Family coordination available'
          ],
          benefits: [
            'Customized bridal package',
            'Traditional & modern fusion',
            'Picture-perfect finish',
            'Stress-free experience'
          ]
        };
      default:
        return {
          features: [
            'Expert consultation',
            'Premium service',
            'Quality products',
            'Relaxing experience',
            'Style guidance'
          ],
          benefits: [
            'Personalized attention',
            'Long-lasting results',
            'Expert care',
            'Complete satisfaction'
          ]
        };
    }
  };

  const details = getServiceDetails(service.category);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white p-8 shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full bg-white/90 p-2 text-gray-400 shadow-lg transition-all hover:bg-gray-100 hover:text-gray-600"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Image Section */}
          <div className="relative h-[300px] overflow-hidden rounded-xl md:h-[400px]">
            <img
              src={service.image}
              alt={service.name}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="font-playfair text-3xl font-bold text-gray-800">{service.name}</h2>
              <p className="mt-2 text-gray-600/90">{service.description}</p>

              <div className="mt-4 flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-rose-500" />
                  <span className="text-gray-700">{service.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-rose-500">{service.price}</span>
                </div>
              </div>

              {/* Features */}
              <div className="mt-8">
                <h3 className="mb-4 text-lg font-semibold text-gray-800">What's Included</h3>
                <ul className="space-y-3">
                  {details.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-600/90">
                      <ChevronRight className="h-5 w-5 text-rose-500" />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="mt-8">
                <h3 className="mb-4 text-lg font-semibold text-gray-800">Benefits</h3>
                <ul className="space-y-3">
                  {details.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-600/90">
                      <Star className="h-5 w-5 text-rose-500" />
                      <span className="leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Book Now Button */}
            <button
              onClick={onBookNow}
              className="mt-8 w-full rounded-lg bg-rose-500 px-6 py-4 font-semibold text-white shadow-lg transition-all hover:bg-rose-600 hover:shadow-xl"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ServiceDetails;
