import React, { useState } from 'react';
import { ChefHat, Coffee, Cake } from 'lucide-react';
import { Container } from './ui/container';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { menuData } from '../data/mock';

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('entrees');

  const categories = [
    { id: 'entrees', label: 'Entrées', icon: <Coffee className="w-5 h-5" />, data: menuData.entrees },
    { id: 'plats', label: 'Plats Principaux', icon: <ChefHat className="w-5 h-5" />, data: menuData.plats },
    { id: 'desserts', label: 'Desserts', icon: <Cake className="w-5 h-5" />, data: menuData.desserts }
  ];

  const currentCategory = categories.find(cat => cat.id === activeCategory);

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-white to-amber-50">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Notre Carte
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Découvrez notre sélection de plats traditionnels préparés avec des produits frais 
              et locaux. Une cuisine authentique qui respecte les saveurs du terroir auvergnat.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto rounded-full"></div>
          </div>

          {/* Navigation par catégories */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-full p-2 shadow-lg border border-gray-200">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`mx-1 px-6 py-3 rounded-full transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-amber-600 text-white shadow-md'
                      : 'bg-transparent text-gray-600 hover:bg-amber-50 hover:text-amber-600'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Menu items */}
          <div className="grid gap-6">
            {currentCategory && (
              <Card className="border-none shadow-lg">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl text-center text-gray-900 flex items-center justify-center space-x-3">
                    {currentCategory.icon}
                    <span>{currentCategory.label}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6">
                    {currentCategory.data.map((item, index) => (
                      <div
                        key={index}
                        className="group border-b border-gray-100 last:border-b-0 pb-6 last:pb-0 hover:bg-amber-50/50 -mx-6 px-6 py-4 rounded-lg transition-colors duration-300"
                      >
                        <div className="flex justify-between items-start gap-4">
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors">
                              {item.name}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                          <div className="flex-shrink-0">
                            <span className="inline-block bg-amber-600 text-white px-4 py-2 rounded-full font-bold text-lg group-hover:bg-amber-700 transition-colors">
                              {item.price}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Informations complémentaires */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg bg-gradient-to-br from-amber-50 to-orange-50">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">🌟</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Spécialités Régionales</h3>
                <p className="text-gray-700 leading-relaxed">
                  Nos plats mettent à l'honneur les produits du terroir auvergnat : 
                  tome fraîche, lentilles vertes du Puy, viandes locales et légumes de saison.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-gradient-to-br from-green-50 to-emerald-50">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">🥬</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Options Végétariennes</h3>
                <p className="text-gray-700 leading-relaxed">
                  Nous proposons également des options végétariennes préparées avec 
                  la même attention et des produits frais de qualité.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Note importante */}
          <div className="mt-12 text-center">
            <div className="bg-white border border-amber-200 rounded-lg p-6 shadow-sm">
              <p className="text-gray-600 text-sm">
                <strong className="text-amber-600">Note :</strong> Notre carte évolue selon les saisons et les arrivages. 
                N'hésitez pas à nous contacter pour connaître nos plats du jour et nos suggestions spéciales.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MenuSection;