
import React, { useState } from 'react';

const ContactPage: React.FC = () => {
    const [contactForm, setContactForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setContactForm({
            ...contactForm,
            [e.target.name]: e.target.value
        });
    };
    
    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = `Message de ${contactForm.name} via le site web`;
        const body = `${contactForm.message}\n\nDe: ${contactForm.name}\nEmail: ${contactForm.email}`;
        window.location.href = `mailto:academiacoiffure1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <div className="py-16 bg-brand-dark">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-brand-gold">Contactez-nous</h1>
                    <p className="text-lg text-gray-300 mt-4">Nous sommes à votre écoute pour toute question ou pour planifier votre rendez-vous à domicile.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Contact Info */}
                    <div className="bg-gray-900 p-8 rounded-lg border border-gray-700">
                        <h2 className="text-2xl font-bold text-brand-gold mb-6">Notre Concept : Le Salon Vient à Vous</h2>
                        <p className="text-gray-300 mb-6">Plus besoin de vous déplacer ! Nous offrons tous nos services de coiffure et de barbier directement à votre domicile, bureau, ou lieu de votre choix à Kinshasa. Profitez d'un service professionnel dans un environnement familier et confortable.</p>
                        
                        <div className="space-y-4 text-gray-300">
                             <div className="flex items-start">
                                <i className="fas fa-motorcycle text-brand-gold mt-1 mr-4"></i>
                                <span>Service disponible sur toute l'étendue de Kinshasa.</span>
                            </div>
                            <div className="flex items-start">
                                <i className="fab fa-whatsapp text-brand-gold mt-1 mr-4"></i>
                                <a href="https://wa.me/243858117644" className="hover:text-brand-gold">+243 858 117 644 (Prise de RDV)</a>
                            </div>
                            <div className="flex items-start">
                                <i className="fas fa-envelope text-brand-gold mt-1 mr-4"></i>
                                <a href="mailto:academiacoiffure1@gmail.com" className="hover:text-brand-gold">academiacoiffure1@gmail.com</a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gray-900 p-8 rounded-lg border border-gray-700">
                         <h2 className="text-2xl font-bold text-brand-gold mb-6">Envoyez-nous un message</h2>
                        <form onSubmit={handleFormSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="text-sm font-medium text-brand-gold">Nom</label>
                                <input type="text" id="name" name="name" onChange={handleFormChange} required className="mt-1 block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm focus:ring-brand-gold focus:border-brand-gold text-white p-3" />
                            </div>
                            <div>
                                <label htmlFor="email" className="text-sm font-medium text-brand-gold">Email</label>
                                <input type="email" id="email" name="email" onChange={handleFormChange} required className="mt-1 block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm focus:ring-brand-gold focus:border-brand-gold text-white p-3" />
                            </div>
                            <div>
                                <label htmlFor="message" className="text-sm font-medium text-brand-gold">Message</label>
                                <textarea id="message" name="message" rows={4} onChange={handleFormChange} required className="mt-1 block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm focus:ring-brand-gold focus:border-brand-gold text-white p-3"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-brand-gold text-brand-dark font-bold py-3 px-4 rounded-full hover:bg-yellow-300 transition-colors duration-300">
                                Envoyer
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;