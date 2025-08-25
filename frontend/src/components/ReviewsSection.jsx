import React from 'react';
import { Star, Quote, ExternalLink } from 'lucide-react';
import { Container } from './ui/container';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { hotelInfo, reviewsData } from '../data/mock';

const ReviewsSection = () => {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* En-tête avec statistiques */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Ce Que Disent Nos Clients
            </h2>
            
            {/* Statistiques de notes */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="text-5xl font-bold text-amber-600">{hotelInfo.rating}</div>
                <div>
                  <div className="flex space-x-1 mb-2">
                    {renderStars(Math.floor(hotelInfo.rating))}
                  </div>
                  <p className="text-gray-600">
                    Basé sur <strong>{hotelInfo.reviewCount} avis</strong> Google
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <Button
                  onClick={() => window.open('https://www.google.com/search?q=H%C3%B4tel+du+Centre+Champeix+avis', '_blank')}
                  variant="outline"
                  className="border-amber-600 text-amber-600 hover:bg-amber-50"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Voir tous les avis Google
                </Button>
              </div>
            </div>
          </div>

          {/* Grille des avis */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {reviewsData.map((review) => (
              <Card
                key={review.id}
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white relative overflow-hidden"
              >
                <CardContent className="p-8">
                  {/* Citation décorative */}
                  <div className="absolute top-4 right-4 text-amber-200">
                    <Quote className="w-8 h-8" />
                  </div>
                  
                  {/* En-tête de l'avis */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{review.name}</h3>
                      <div className="flex items-center space-x-2">
                        <div className="flex space-x-1">
                          {renderStars(review.rating)}
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Commentaire */}
                  <blockquote className="text-gray-700 leading-relaxed italic">
                    "{review.comment}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Section d'encouragement */}
          <div className="text-center">
            <Card className="border-none shadow-lg bg-gradient-to-r from-amber-600 to-orange-600 text-white max-w-3xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Votre Avis Nous Intéresse !</h3>
                <p className="text-amber-100 mb-6 leading-relaxed">
                  Vous avez apprécié votre expérience chez nous ? N'hésitez pas à partager votre avis 
                  pour aider d'autres gourmets à découvrir notre cuisine traditionnelle.
                </p>
                <Button
                  onClick={() => window.open('https://www.google.com/search?q=H%C3%B4tel+du+Centre+Champeix+avis', '_blank')}
                  className="bg-white text-amber-600 hover:bg-gray-100"
                >
                  <Star className="w-4 h-4 mr-2" />
                  Laisser un avis Google
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Badges de confiance */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl">🏆</div>
              <div className="text-sm font-medium text-gray-900">Excellence</div>
              <div className="text-xs text-gray-600">Service reconnu</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl">👨‍👩‍👧‍👦</div>
              <div className="text-sm font-medium text-gray-900">Familial</div>
              <div className="text-xs text-gray-600">Accueil chaleureux</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl">🌱</div>
              <div className="text-sm font-medium text-gray-900">Produits Locaux</div>
              <div className="text-xs text-gray-600">Circuit court</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl">⭐</div>
              <div className="text-sm font-medium text-gray-900">{hotelInfo.rating}/5</div>
              <div className="text-xs text-gray-600">{hotelInfo.reviewCount} avis</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ReviewsSection;