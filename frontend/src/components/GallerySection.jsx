import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Container } from './ui/container';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { galleryImages } from '../data/mock';

const GallerySection = () => {
  const [activeTab, setActiveTab] = useState('restaurant');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const currentImages = galleryImages[activeTab] || [];

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % currentImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(currentImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = currentImageIndex === 0 ? currentImages.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(currentImages[prevIndex]);
  };

  const tabs = [
    { id: 'restaurant', label: 'Restaurant & Salle', emoji: '🍽️' },
    { id: 'dishes', label: 'Nos Plats', emoji: '🍳' }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Découvrez Notre Univers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Plongez dans l'ambiance chaleureuse de notre restaurant et découvrez 
              nos spécialités culinaires qui font la réputation de l'Hôtel du Centre.
            </p>
          </div>

          {/* Onglets */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-full p-2 shadow-lg border border-gray-200">
              {tabs.map((tab) => (
                <Button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`mx-2 px-6 py-3 rounded-full transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-amber-600 text-white shadow-md'
                      : 'bg-transparent text-gray-600 hover:bg-amber-50 hover:text-amber-600'
                  }`}
                >
                  <span className="mr-2">{tab.emoji}</span>
                  {tab.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Galerie d'images */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentImages.map((image, index) => (
              <Card
                key={image.id}
                className="group cursor-pointer overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                onClick={() => openLightbox(image, index)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-lg font-bold mb-2">{image.title}</h3>
                        <p className="text-sm opacity-90">{image.description}</p>
                      </div>
                    </div>
                    
                    {/* Overlay de zoom */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Cliquer pour agrandir
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Lightbox */}
          {selectedImage && (
            <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
              <div className="relative max-w-4xl max-h-full">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
                
                {/* Bouton fermer */}
                <Button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 bg-black/50 text-white border-none hover:bg-black/70 rounded-full p-2"
                >
                  <X className="w-6 h-6" />
                </Button>

                {/* Navigation */}
                {currentImages.length > 1 && (
                  <>
                    <Button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white border-none hover:bg-black/70 rounded-full p-2"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </Button>
                    <Button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white border-none hover:bg-black/70 rounded-full p-2"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </Button>
                  </>
                )}

                {/* Info image */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/70 text-white p-4 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">{selectedImage.title}</h3>
                  <p className="text-sm opacity-90">{selectedImage.description}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default GallerySection;