
import React from 'react';
import { Link } from 'react-router-dom';
import { testimonials } from '../data/testimonials';
import { Testimonial } from '../types';
import { services } from '../data/services';
import { products } from '../data/products';
import { galleryImages } from '../data/gallery';

// Re-usable Section component for consistent styling
const Section: React.FC<{ title: string; subtitle: string; children: React.ReactNode; className?: string; }> = ({ title, subtitle, children, className = '' }) => (
    <section className={`py-16 ${className}`}>
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-gold">{title}</h2>
                <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">{subtitle}</p>
            </div>
            {children}
        </div>
    </section>
);


const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 shadow-lg text-center transform transition-transform duration-300 hover:scale-105 hover:border-brand-gold">
        <img src={testimonial.avatarUrl} alt={testimonial.name} className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-brand-gold object-cover"/>
        <p className="text-gray-300 italic mb-4">"{testimonial.quote}"</p>
        <h4 className="font-bold text-white">{testimonial.name}</h4>
    </div>
);

const whyChooseUsData = [
    {
        icon: "fa-solid fa-scissors",
        title: "Expertise & Passion",
        description: "Nos coiffeurs sont des artisans passionnés, formés aux dernières tendances pour vous offrir une coupe sur-mesure."
    },
    {
        icon: "fa-solid fa-couch",
        title: "Confort & Exclusivité",
        description: "Profitez d'un service de luxe sans quitter votre domicile. Nous apportons l'expérience du salon directement à vous."
    },
    {
        icon: "fa-solid fa-shield-halved",
        title: "Qualité & Hygiène",
        description: "Nous utilisons uniquement des produits haut de gamme et respectons des normes d'hygiène strictes pour votre sécurité."
    }
];

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section with Video */}
      <section className="relative h-[90vh] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
        >
          <source src="https://videos.pexels.com/video-files/3253459/3253459-hd_1920_1080_25fps.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la vidéo.
        </video>
        <div className="relative z-20 p-6">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight text-brand-gold drop-shadow-lg animate-fade-in">ACADEMIA COIFFURE</h1>
          <p className="text-lg md:text-2xl mb-2 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>L'art de la coiffure masculine et du soin capillaire</p>
          <p className="text-md md:text-xl mb-8 max-w-3xl mx-auto text-gray-300 animate-fade-in" style={{ animationDelay: '0.4s' }}>Votre coiffeur et barbier d'exception, directement chez vous à Kinshasa.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Link to="/commander" className="bg-brand-gold text-brand-dark font-bold py-3 px-8 rounded-full hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105">
              Prendre rendez-vous
            </Link>
            <Link to="/services" className="bg-transparent border-2 border-brand-gold text-brand-gold font-bold py-3 px-8 rounded-full hover:bg-brand-gold hover:text-brand-dark transition-all duration-300 transform hover:scale-105">
              Voir nos services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <Section title="Pourquoi nous choisir ?" subtitle="L'expérience ACADEMIA COIFFURE, c'est la promesse d'un service inégalé." className="bg-brand-dark">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUsData.map(item => (
                <div key={item.title} className="text-center p-6 bg-gray-900 rounded-lg border border-gray-800 hover:border-brand-gold transition-colors duration-300">
                    <i className={`${item.icon} text-4xl text-brand-gold mb-4`}></i>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                </div>
            ))}
        </div>
      </Section>

      {/* Services Preview Section */}
      <Section title="Nos Services Signature" subtitle="Découvrez une sélection de nos prestations les plus demandées, réalisées par nos experts." className="bg-black">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.slice(0, 4).map(service => (
                  <div key={service.id} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-gray-700 flex flex-col transform transition-transform duration-300 hover:-translate-y-2 hover:border-brand-gold">
                      <img className="w-full h-48 object-cover" src={service.imageUrl} alt={service.name} />
                      <div className="p-4 flex flex-col flex-grow">
                          <h3 className="font-bold text-lg text-white">{service.name}</h3>
                          <p className="text-gray-400 text-sm my-2 flex-grow">{service.description.substring(0, 60)}...</p>
                          <span className="text-brand-gold font-semibold">{service.price}</span>
                      </div>
                  </div>
              ))}
          </div>
          <div className="text-center mt-12">
              <Link to="/services" className="bg-brand-gold text-brand-dark font-bold py-3 px-8 rounded-full hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105">
                  Voir tous les services
              </Link>
          </div>
      </Section>

      {/* Products Preview Section */}
      <Section title="Nos Produits Essentiels" subtitle="Une sélection de produits professionnels pour entretenir votre style au quotidien." className="bg-brand-dark">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.slice(0, 4).map(product => (
                  <div key={product.id} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-gray-700 flex flex-col transform transition-transform duration-300 hover:-translate-y-2 hover:border-brand-gold">
                      <img className="w-full h-48 object-cover" src={product.imageUrl} alt={product.name} />
                      <div className="p-4 flex flex-col flex-grow">
                          <h3 className="font-bold text-lg text-white">{product.name}</h3>
                          <p className="text-gray-400 text-sm my-2 flex-grow">{product.description.substring(0, 60)}...</p>
                          <span className="text-brand-gold font-semibold">{product.price}</span>
                      </div>
                  </div>
              ))}
          </div>
          <div className="text-center mt-12">
              <Link to="/produits" className="bg-brand-gold text-brand-dark font-bold py-3 px-8 rounded-full hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105">
                  Découvrir nos produits
              </Link>
          </div>
      </Section>

      {/* Gallery Preview Section */}
      <Section title="Notre Galerie" subtitle="Un aperçu de notre savoir-faire et des styles que nous créons.">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.slice(0, 8).map(item => (
                <Link to="/galerie" key={item.id} className="group relative rounded-lg overflow-hidden block">
                    <img src={item.thumbnailUrl} alt={item.description} className="w-full h-full aspect-square object-cover transform group-hover:scale-110 transition-transform duration-300" />
                     <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-colors duration-300 flex items-center justify-center p-2 text-center">
                        <p className="text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.description}</p>
                    </div>
                </Link>
            ))}
        </div>
        <div className="text-center mt-12">
            <Link to="/galerie" className="bg-brand-gold text-brand-dark font-bold py-3 px-8 rounded-full hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105">
                Explorer la galerie
            </Link>
        </div>
      </Section>


      {/* Testimonials Section */}
      <Section title="Ce que nos clients disent" subtitle="La satisfaction de nos clients est notre plus grande fierté." className="bg-black">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => <TestimonialCard key={testimonial.id} testimonial={testimonial} />)}
        </div>
      </Section>

      {/* Final CTA Section */}
      <section className="bg-brand-gold py-16">
          <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Prêt à transformer votre style ?</h2>
              <p className="text-lg text-gray-800 mt-4 max-w-2xl mx-auto mb-8">Réservez votre séance privée avec nos experts coiffeurs et barbiers à domicile.</p>
              <Link to="/commander" className="bg-brand-dark text-brand-gold font-bold py-3 px-8 rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 text-lg">
                  Prendre rendez-vous
              </Link>
          </div>
      </section>
    </div>
  );
};

export default HomePage;
