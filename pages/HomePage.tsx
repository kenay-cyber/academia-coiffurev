import React from 'react';
import { Link } from 'react-router-dom';
import { testimonials } from '../data/testimonials';
import { Testimonial } from '../types';

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 shadow-lg text-center transform transition-transform duration-300 hover:scale-105 hover:border-brand-gold">
        <img src={testimonial.avatarUrl} alt={testimonial.name} className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-brand-gold object-cover"/>
        <p className="text-gray-300 italic mb-4">"{testimonial.quote}"</p>
        <h4 className="font-bold text-brand-gold">{testimonial.name}</h4>
    </div>
);

const SocialFeed: React.FC = () => (
    <div className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Suivez Notre Art</h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">Découvrez nos dernières créations à domicile et l'ambiance du salon sur nos réseaux sociaux.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-brand-gold"><i className="fab fa-instagram mr-2"></i>Dernières Publications Instagram</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <a href="https://www.instagram.com/academiacoiffure/" target="_blank" rel="noopener noreferrer">
                        <img src="https://images.unsplash.com/photo-1599335616239-25807498c566?q=80&w=200&h=200&fit=crop" alt="Dégradé parfait" className="rounded-md w-full h-full object-cover hover:opacity-80 transition-opacity" />
                    </a>
                    <a href="https://www.instagram.com/academiacoiffure/" target="_blank" rel="noopener noreferrer">
                        <img src="https://images.unsplash.com/photo-1617833939985-78c6b6d5108a?q=80&w=200&h=200&fit=crop" alt="Taille de barbe" className="rounded-md w-full h-full object-cover hover:opacity-80 transition-opacity" />
                    </a>
                    <a href="https://www.instagram.com/academiacoiffure/" target="_blank" rel="noopener noreferrer">
                        <img src="https://images.unsplash.com/photo-1595476108514-af3917025828?q=80&w=200&h=200&fit=crop" alt="Coiffure locks" className="rounded-md w-full h-full object-cover hover:opacity-80 transition-opacity" />
                    </a>
                    <a href="https://www.instagram.com/academiacoiffure/" target="_blank" rel="noopener noreferrer">
                        <img src="https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=200&h=200&fit=crop" alt="Client satisfait" className="rounded-md w-full h-full object-cover hover:opacity-80 transition-opacity" />
                    </a>
                     <a href="https://www.instagram.com/academiacoiffure/" target="_blank" rel="noopener noreferrer">
                        <img src="https://images.unsplash.com/photo-1567894340345-a63b3a286133?q=80&w=200&h=200&fit=crop" alt="Coupe homme" className="rounded-md w-full h-full object-cover hover:opacity-80 transition-opacity" />
                    </a>
                    <a href="https://www.instagram.com/academiacoiffure/" target="_blank" rel="noopener noreferrer">
                        <img src="https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=200&h=200&fit=crop" alt="Style moderne" className="rounded-md w-full h-full object-cover hover:opacity-80 transition-opacity" />
                    </a>
                </div>
                 <p className="mt-4 text-sm text-gray-500">Note: Ceci est un aperçu. Cliquez pour voir notre profil complet.</p>
            </div>
             <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-brand-gold"><i className="fab fa-tiktok mr-2"></i>Vidéos TikTok</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {[
                        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=200&h=300&fit=crop",
                        "https://images.unsplash.com/photo-1617113949994-08f3c7e7ddc4?q=80&w=200&h=300&fit=crop",
                        "https://images.unsplash.com/photo-1628191062024-3c66f5f3e9e3?q=80&w=200&h=300&fit=crop",
                        "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=200&h=300&fit=crop",
                        "https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=200&h=300&fit=crop",
                        "https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd?q=80&w=200&h=300&fit=crop"
                    ].map((src, i) => (
                        <a key={i} href="https://www.tiktok.com/@academiacoiffure" target="_blank" rel="noopener noreferrer">
                             <div className="relative">
                                <img src={src} alt={`Aperçu vidéo TikTok ${i+1}`} className="rounded-md w-full h-full object-cover hover:opacity-80 transition-opacity" />
                                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                    <i className="fas fa-play text-white text-3xl"></i>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
                <p className="mt-4 text-sm text-gray-500">Confirmation: Le feed TikTok est intégré sous forme de galerie cliquable vers le profil.</p>
            </div>
        </div>
    </div>
);

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1599335616239-25807498c566?q=80&w=1920&h=1080&fit=crop')" }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 p-6">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight text-brand-gold drop-shadow-lg">ACADEMIA COIFFURE</h1>
          <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto">“Votre coiffeur et barbier d'exception, directement chez vous à Kinshasa”</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/commander" className="bg-brand-gold text-brand-dark font-bold py-3 px-8 rounded-full hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105">
              Rendez-vous à domicile
            </Link>
            <Link to="/produits" className="bg-transparent border-2 border-brand-gold text-brand-gold font-bold py-3 px-8 rounded-full hover:bg-brand-gold hover:text-brand-dark transition-all duration-300 transform hover:scale-105">
              Voir nos produits
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-brand-dark py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Ce que nos clients disent</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => <TestimonialCard key={testimonial.id} testimonial={testimonial} />)}
          </div>
        </div>
      </section>
      
      {/* Social Feed Section */}
      <SocialFeed />

    </div>
  );
};

export default HomePage;