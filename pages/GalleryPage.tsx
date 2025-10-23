
import React, { useState, useEffect } from 'react';
import { galleryImages } from '../data/gallery';
import { GalleryItem } from '../types';

const BeforeAfterSlider: React.FC<{ beforeUrl: string, afterUrl: string }> = ({ beforeUrl, afterUrl }) => {
    const [sliderPosition, setSliderPosition] = useState(50);

    return (
        <div className="relative w-full h-full select-none aspect-video">
            <img src={afterUrl} alt="Après" className="absolute w-full h-full object-contain" />
            <div className="absolute w-full h-full overflow-hidden" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
                <img src={beforeUrl} alt="Avant" className="absolute w-full h-full object-contain" />
            </div>
            <div className="absolute top-0 left-0 right-0 bottom-0 cursor-ew-resize">
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderPosition}
                    onChange={(e) => setSliderPosition(Number(e.target.value))}
                    className="w-full h-full opacity-0"
                    aria-label="Comparer avant et après"
                />
                <div className="absolute top-0 bottom-0 bg-brand-gold w-1" style={{ left: `calc(${sliderPosition}% - 2px)` }}>
                    <div className="absolute top-1/2 -translate-y-1/2 -left-4 w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center text-brand-dark font-bold">
                        <i className="fas fa-arrows-alt-h"></i>
                    </div>
                </div>
                <div className="absolute top-2 left-2 bg-black/70 text-white px-2 py-1 rounded-md text-sm font-bold">AVANT</div>
                <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded-md text-sm font-bold">APRÈS</div>
            </div>
        </div>
    );
};

const GalleryModal: React.FC<{
    items: GalleryItem[],
    startIndex: number,
    onClose: () => void,
}> = ({ items, startIndex, onClose }) => {
    const [currentIndex, setCurrentIndex] = useState(startIndex);
    const item = items[currentIndex];

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };
    
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') goToNext();
            if (e.key === 'ArrowLeft') goToPrevious();
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [items]);


    return (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in" onClick={onClose}>
            <div className="relative w-full max-w-4xl max-h-full bg-brand-dark rounded-lg shadow-2xl p-4 flex flex-col" onClick={e => e.stopPropagation()}>
                <div className="flex-grow flex items-center justify-center">
                    {item.type === 'before-after' && item.beforeUrl && item.afterUrl && (
                        <BeforeAfterSlider beforeUrl={item.beforeUrl} afterUrl={item.afterUrl} />
                    )}
                    {item.type === 'image' && item.imageUrl && (
                        <img src={item.imageUrl} alt={item.description} className="max-w-full max-h-[80vh] object-contain rounded-md" />
                    )}
                    {item.type === 'video' && item.videoUrl && (
                        <video src={item.videoUrl} controls autoPlay className="max-w-full max-h-[80vh] rounded-md" />
                    )}
                </div>
                <p className="text-center text-white mt-4 text-lg">{item.description}</p>
            </div>
            
            <button onClick={onClose} className="absolute top-4 right-4 text-white text-3xl hover:text-brand-gold transition-colors z-50">
                <i className="fas fa-times"></i>
            </button>
            <button onClick={goToPrevious} className="absolute top-1/2 -translate-y-1/2 left-4 text-white text-3xl bg-black/30 p-2 rounded-full hover:bg-brand-gold hover:text-brand-dark transition-colors z-50">
                <i className="fas fa-chevron-left"></i>
            </button>
            <button onClick={goToNext} className="absolute top-1/2 -translate-y-1/2 right-4 text-white text-3xl bg-black/30 p-2 rounded-full hover:bg-brand-gold hover:text-brand-dark transition-colors z-50">
                <i className="fas fa-chevron-right"></i>
            </button>
        </div>
    );
};


const GalleryPage: React.FC = () => {
    const [filter, setFilter] = useState<'all' | 'before-after' | 'image' | 'video'>('all');
    const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

    const filters = [
        { key: 'all', label: 'Tout' },
        { key: 'before-after', label: 'Transformations' },
        { key: 'image', label: 'Coiffures & Produits' },
        { key: 'video', label: 'Vidéos' }
    ];
    
    const filteredItems = filter === 'all' 
        ? galleryImages
        : galleryImages.filter(item => item.type === filter);
        
    const openModal = (item: GalleryItem) => {
        const originalIndex = galleryImages.findIndex(i => i.id === item.id);
        setSelectedItemIndex(originalIndex);
    };

    return (
        <div className="py-16 bg-brand-dark">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-brand-gold">Notre Portfolio</h1>
                    <p className="text-lg text-gray-300 mt-4">Découvrez nos réalisations, nos modèles de coiffure et nos produits.</p>
                </div>

                <div className="flex justify-center flex-wrap gap-4 mb-12">
                    {filters.map(f => (
                        <button
                            key={f.key}
                            onClick={() => setFilter(f.key as any)}
                            className={`px-6 py-2 font-semibold rounded-full transition-colors duration-300 ${filter === f.key ? 'bg-brand-gold text-brand-dark' : 'bg-gray-800 text-white hover:bg-gray-700'}`}
                        >
                            {f.label}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredItems.map(item => (
                        <div key={item.id} className="group relative rounded-lg overflow-hidden cursor-pointer" onClick={() => openModal(item)}>
                            <img src={item.thumbnailUrl} alt={item.description} className="w-full h-full aspect-square object-cover transform group-hover:scale-110 transition-transform duration-300" />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-colors duration-300 flex flex-col items-center justify-center p-4 text-center">
                                <div className="absolute top-2 left-2 text-2xl text-white">
                                    {item.type === 'video' && <i className="fas fa-play-circle"></i>}
                                    {item.type === 'before-after' && <i className="fas fa-sync-alt"></i>}
                                    {item.type === 'image' && <i className="fas fa-camera"></i>}
                                </div>
                                <p className="text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {selectedItemIndex !== null && (
                <GalleryModal
                    items={galleryImages}
                    startIndex={selectedItemIndex}
                    onClose={() => setSelectedItemIndex(null)}
                />
            )}
        </div>
    );
};

export default GalleryPage;
