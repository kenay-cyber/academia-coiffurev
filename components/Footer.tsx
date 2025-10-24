
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const socialLinks = [
    { name: 'Facebook', icon: 'fab fa-facebook-f', url: 'https://www.facebook.com/61556884096765/' },
    { name: 'Instagram', icon: 'fab fa-instagram', url: 'https://www.instagram.com/academiacoiffure/' },
    { name: 'TikTok', icon: 'fab fa-tiktok', url: 'https://www.tiktok.com/@academiacoiffure' },
    { name: 'WhatsApp', icon: 'fab fa-whatsapp', url: 'https://wa.me/243858117644' },
  ];

  return (
    <footer className="bg-black text-gray-300 py-12 border-t-2 border-brand-gold/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <img src="https://i.postimg.cc/fT9Y4sv9/Whats-App-Image-2025-10-21-at-13-08-14.jpg" alt="ACADEMIA COIFFURE Logo" className="h-16 mb-4 mx-auto md:mx-0" />
            <p className="text-sm">L’art de la coiffure masculine et du soin capillaire, directement chez vous à Kinshasa.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-brand-gold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="hover:text-brand-gold transition-colors">Services</Link></li>
              <li><Link to="/produits" className="hover:text-brand-gold transition-colors">Produits</Link></li>
              <li><Link to="/galerie" className="hover:text-brand-gold transition-colors">Galerie</Link></li>
              <li><Link to="/contact" className="hover:text-brand-gold transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-brand-gold mb-4">Nous Suivre</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((link) => (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-brand-gold text-2xl transition-transform transform hover:scale-125">
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
            <p className="mt-4 text-sm">academiacoiffure1@gmail.com</p>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-10 pt-6 border-t border-gray-800">
          <p>&copy; {new Date().getFullYear()} ACADEMIA COIFFURE. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;