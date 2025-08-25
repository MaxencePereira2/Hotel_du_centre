import React from 'react';
import { Heart, Users, Award, MapPin } from 'lucide-react';
import { Container } from './ui/container';
import { Card, CardContent } from './ui/card';
import { hotelInfo } from '../data/mock';

const PresentationSection = () => {
  const features = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Cuisine du Cœur",
      description: "Des recettes traditionnelles préparées avec passion et des produits locaux de qualité."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Accueil Familial", 
      description: "Jérôme et Amandine vous accueillent dans une ambiance chaleureuse et conviviale."
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-600" />,
      title: "Savoir-Faire",
      description: "Une expertise culinaire reconnue avec plus de 365 avis clients satisfaits."
    },
    {
      icon: <MapPin className="w-8 h-8 text-green-600" />,
      title: "Terroir Auvergnat",
      description: "Au cœur de Champeix, découvrez les saveurs authentiques de notre région."
    }
  ];

  return (
    <section id="presentation" className="py-20 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* En-tête de section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Une Histoire de Passion
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Depuis notre installation à Champeix, nous nous sommes donnés pour mission de vous faire 
              découvrir la richesse de la gastronomie auvergnate dans un cadre authentique et chaleureux.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto rounded-full"></div>
          </div>

          {/* Présentation détaillée */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Jérôme et Amandine Moins</h3>
              <p className="text-gray-700 leading-relaxed">
                Propriétaires de l'Hôtel du Centre depuis 2016, nous avons à cœur de perpétuer la tradition 
                de l'hospitalité française. Notre restaurant familial est devenu une référence à Champeix 
                grâce à notre cuisine authentique et notre service attentionné.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Chaque plat est préparé avec soin, en privilégiant les circuits courts et les producteurs 
                locaux. Notre terrasse vous invite à profiter des beaux jours dans un cadre paisible, 
                tandis que notre salle intérieure vous accueille dans une ambiance feutrée et conviviale.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-r-lg">
                <p className="text-amber-800 font-medium italic">
                  "Notre plus grande fierté ? Voir nos clients repartir avec le sourire et l'envie de revenir !"
                </p>
                <p className="text-amber-700 text-sm mt-2">- Jérôme et Amandine</p>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://lh3.googleusercontent.com/p/AF1QipOVWl3RwkTTPfQt9Le3A3zTr83KDnUiW76FmSLT=w400-h300-n-k-no"
                  alt="L'équipe de l'Hôtel du Centre"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>
              
              {/* Badge de certification */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-3 border border-gray-200">
                <div className="flex items-center space-x-2">
                  <Award className="w-6 h-6 text-yellow-600" />
                  <div>
                    <div className="text-sm font-bold text-gray-900">{hotelInfo.rating}/5</div>
                    <div className="text-xs text-gray-600">Note Google</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Caractéristiques */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gray-50 rounded-full">
                      {feature.icon}
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Services et équipements */}
          <div className="mt-16 bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Nos Services</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl mb-2">🍽️</div>
                <h4 className="font-semibold text-gray-900">Restaurant</h4>
                <p className="text-sm text-gray-600">110 couverts en salle</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl mb-2">🌿</div>
                <h4 className="font-semibold text-gray-900">Terrasse</h4>
                <p className="text-sm text-gray-600">50 couverts extérieurs</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl mb-2">👥</div>
                <h4 className="font-semibold text-gray-900">Groupes</h4>
                <p className="text-sm text-gray-600">Jusqu'à 70 personnes</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PresentationSection;