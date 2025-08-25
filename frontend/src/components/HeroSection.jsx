import React from 'react';
import { Star, MapPin, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Container } from './ui/container';
import { hotelInfo } from '../data/mock';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-amber-50 to-orange-50">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center py-20">
          {/* Contenu textuel */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                <MapPin className="w-4 h-4" />
                <span>Champeix, Puy-de-Dôme</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {hotelInfo.name}
              </h1>
              
              <p className="text-xl text-amber-700 font-medium">
                {hotelInfo.subtitle}
              </p>
              
              <div className="flex items-center space-x-4 text-lg">
                <div className="flex items-center space-x-1">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(hotelInfo.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-semibold text-gray-900">{hotelInfo.rating}</span>
                  <span className="text-gray-600">({hotelInfo.reviewCount} avis)</span>
                </div>
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              {hotelInfo.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg"
              >
                Réserver une table
              </Button>
              <Button
                onClick={() => document.getElementById('menu').scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
                size="lg"
                className="border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-3 text-lg"
              >
                Voir le menu
              </Button>
            </div>

            {/* Horaires rapides */}
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 border border-amber-200">
              <div className="flex items-center space-x-2 mb-3">
                <Clock className="w-5 h-5 text-amber-600" />
                <h3 className="font-semibold text-gray-900">Horaires d'ouverture</h3>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Lundi</span>
                  <span className="font-medium text-red-600">{hotelInfo.hours.monday}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Mardi-Dim</span>
                  <span className="font-medium text-green-600">{hotelInfo.hours.tuesday}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image principale */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://lh3.googleusercontent.com/p/AF1QipP1Iig4bRvFXNjhXk-KtRdt33iD2HYqTtYiTYro=w500-h400-n-k-no"
                alt="Intérieur de l'Hôtel du Centre"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Badge flottant */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 border-l-4 border-amber-600">
              <div className="text-sm text-gray-600">Restaurant & Hôtel</div>
              <div className="font-bold text-gray-900">Depuis 2016</div>
            </div>
          </div>
        </div>
      </Container>
      
      {/* Décoration de fond */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
        <div className="w-full h-full bg-gradient-to-l from-amber-200 to-transparent"></div>
      </div>
    </section>
  );
};

export default HeroSection;