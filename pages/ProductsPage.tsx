
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { Product } from '../types';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate('/commander', { state: { selectedItem: `${product.name} (${product.price})` } });
  };
  
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-gray-700 flex flex-col transform transition-transform duration-300 hover:-translate-y-2 hover:border-brand-gold">
      <img className="w-full h-56 object-cover" src={product.imageUrl} alt={product.name} />
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-xl text-white">{product.name}</h3>
          <span className="bg-brand-gold text-brand-dark text-sm font-semibold py-1 px-3 rounded-full">{product.price}</span>
        </div>
        <p className="text-gray-400 text-sm flex-grow">{product.description}</p>
        <button onClick={handleOrderClick} className="mt-4 w-full bg-brand-gold text-brand-dark font-bold py-2 px-4 rounded-full hover:bg-yellow-300 transition-colors duration-300">
          Acheter maintenant
        </button>
      </div>
    </div>
  );
};

const ProductsPage: React.FC = () => {
  return (
    <div className="py-16 bg-brand-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-gold">Nos Produits</h1>
          <p className="text-lg text-gray-300 mt-4">Le meilleur pour vos cheveux et votre barbe, livré directement chez vous.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;