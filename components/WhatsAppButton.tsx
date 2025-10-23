
import React from 'react';

const WhatsAppButton: React.FC = () => {
  const whatsappUrl = "https://wa.me/243858117644?text=Bonjour%20ACADEMIA%20COIFFURE,%20j'ai%20une%20question.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-50 transition-transform transform hover:scale-110 hover:bg-green-600"
      aria-label="Contacter sur WhatsApp"
    >
      <i className="fab fa-whatsapp text-4xl"></i>
    </a>
  );
};

export default WhatsAppButton;
