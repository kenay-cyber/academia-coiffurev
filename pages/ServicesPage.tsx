
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { services } from '../data/services';
import { Service } from '../types';

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate('/commander', { state: { selectedItem: `${service.name} (${service.price})` } });
  };

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-gray-700 flex flex-col transform transition-transform duration-300 hover:-translate-y-2 hover:border-brand-gold">
      <img className="w-full h-56 object-cover" src={service.imageUrl} alt={service.name} />
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-xl text-white">{service.name}</h3>
          <span className="bg-brand-gold text-brand-dark text-sm font-semibold py-1 px-3 rounded-full">{service.price}</span>
        </div>
        <p className="text-gray-400 text-sm flex-grow">{service.description}</p>
        <button onClick={handleOrderClick} className="mt-4 w-full bg-brand-gold text-brand-dark font-bold py-2 px-4 rounded-full hover:bg-yellow-300 transition-colors duration-300">
          Choisir ce service
        </button>
      </div>
    </div>
  );
};

const ServicesPage: React.FC = () => {
  return (
    <div className="py-16 bg-brand-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-gold">Nos Services à Domicile</h1>
          <p className="text-lg text-gray-300 mt-4">Des prestations de qualité pour un style impeccable, réalisées dans le confort de votre foyer.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;