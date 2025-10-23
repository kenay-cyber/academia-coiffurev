
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { services } from '../data/services';
import { products } from '../data/products';

const OrderPage: React.FC = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    fullName: '',
    whatsappNumber: '',
    address: '',
    selectedItem: '',
    desiredDate: '',
    paymentMethod: 'Orange Money',
    paymentNumber: '',
    comments: '',
  });

  useEffect(() => {
    if (location.state?.selectedItem) {
      setFormData(prev => ({ ...prev, selectedItem: location.state.selectedItem }));
    }
  }, [location.state]);

  const allItems = [
    ...services.map(s => `${s.name} (${s.price})`),
    ...products.map(p => `${p.name} (${p.price})`),
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `
Bonjour, je souhaite passer une commande chez ACADEMIA COIFFURE.
Voici les détails :
--------------------
*Nom complet* : ${formData.fullName}
*Numéro WhatsApp* : ${formData.whatsappNumber}
*Adresse (Rendez-vous/Livraison)* : ${formData.address}
*Service/Produit* : ${formData.selectedItem}
*Date souhaitée* : ${formData.desiredDate || 'Non spécifiée'}
*Mode de paiement* : ${formData.paymentMethod}
*Numéro pour paiement* : ${formData.paymentNumber}
*Commentaires* : ${formData.comments || 'Aucun'}
--------------------
Merci de confirmer ma commande.
    `;
    const whatsappUrl = `https://wa.me/243858117644?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  
  const isServiceSelected = services.some(s => formData.selectedItem.includes(s.name));


  return (
    <div className="py-16 bg-brand-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-gold">Commander un Service ou Produit</h1>
          <p className="text-lg text-gray-300 mt-4">Remplissez le formulaire pour un rendez-vous à domicile ou une livraison.</p>
        </div>
        <div className="max-w-2xl mx-auto bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-700">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-brand-gold">Nom complet</label>
              <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required className="mt-1 block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm focus:ring-brand-gold focus:border-brand-gold text-white p-3" />
            </div>
            <div>
              <label htmlFor="whatsappNumber" className="block text-sm font-medium text-brand-gold">Numéro WhatsApp</label>
              <input type="tel" id="whatsappNumber" name="whatsappNumber" value={formData.whatsappNumber} onChange={handleChange} required className="mt-1 block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm focus:ring-brand-gold focus:border-brand-gold text-white p-3" placeholder="+243..." />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-brand-gold">Adresse de rendez-vous / livraison</label>
              <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required className="mt-1 block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm focus:ring-brand-gold focus:border-brand-gold text-white p-3" />
            </div>
            <div>
              <label htmlFor="selectedItem" className="block text-sm font-medium text-brand-gold">Choix du service / produit</label>
              <select id="selectedItem" name="selectedItem" value={formData.selectedItem} onChange={handleChange} required className="mt-1 block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm focus:ring-brand-gold focus:border-brand-gold text-white p-3">
                <option value="" disabled>Sélectionnez une option</option>
                <optgroup label="Services à Domicile">
                  {services.map(s => <option key={s.id} value={`${s.name} (${s.price})`}>{s.name} ({s.price})</option>)}
                </optgroup>
                <optgroup label="Produits en Livraison">
                  {products.map(p => <option key={p.id} value={`${p.name} (${p.price})`}>{p.name} ({p.price})</option>)}
                </optgroup>
              </select>
            </div>
            
            {isServiceSelected && (
              <div>
                <label htmlFor="desiredDate" className="block text-sm font-medium text-brand-gold">Date et heure souhaitées</label>
                <input type="datetime-local" id="desiredDate" name="desiredDate" value={formData.desiredDate} onChange={handleChange} className="mt-1 block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm focus:ring-brand-gold focus:border-brand-gold text-white p-3" />
              </div>
            )}
            
            <div>
              <label htmlFor="paymentMethod" className="block text-sm font-medium text-brand-gold">Mode de paiement</label>
              <select id="paymentMethod" name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} required className="mt-1 block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm focus:ring-brand-gold focus:border-brand-gold text-white p-3">
                <option>Orange Money</option>
                <option>M-Pesa</option>
              </select>
            </div>
            <div>
              <label htmlFor="paymentNumber" className="block text-sm font-medium text-brand-gold">Numéro utilisé pour le paiement</label>
              <input type="tel" id="paymentNumber" name="paymentNumber" value={formData.paymentNumber} onChange={handleChange} required className="mt-1 block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm focus:ring-brand-gold focus:border-brand-gold text-white p-3" placeholder="+243..." />
            </div>
            <div>
              <label htmlFor="comments" className="block text-sm font-medium text-brand-gold">Commentaires (optionnel)</label>
              <textarea id="comments" name="comments" value={formData.comments} onChange={handleChange} rows={3} className="mt-1 block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm focus:ring-brand-gold focus:border-brand-gold text-white p-3"></textarea>
            </div>
            <div>
              <button type="submit" className="w-full bg-brand-gold text-brand-dark font-bold py-3 px-4 rounded-full hover:bg-yellow-300 transition-colors duration-300 text-lg">
                Confirmer sur WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;