import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Heart } from 'lucide-react';
import { Container } from './ui/container';
import { hotelInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <Container>
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Information principale */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">H</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{hotelInfo.name}</h3>
                  <p className="text-amber-300">{hotelInfo.subtitle}</p>
                </div>
              </div>
              
              <p className="text-gray-300 max-w-md leading-relaxed">
                Restaurant familial au cœur de Champeix, proposant une cuisine traditionnelle 
                auvergnate dans une ambiance chaleureuse et authentique.
              </p>

              <div className="flex items-center space-x-2 text-amber-300">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <span className="font-semibold">{hotelInfo.rating}/5</span>
                <span className="text-gray-400">({hotelInfo.reviewCount} avis Google)</span>
              </div>
            </div>

            {/* Contact rapide */}
            <div className="space-y-6">
              <h4 className="text-lg font-bold text-white">Contact</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300 hover:text-amber-300 transition-colors">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <a href={`tel:${hotelInfo.phone}`} className="hover:underline">
                    {hotelInfo.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-amber-300 transition-colors">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <a href={`mailto:${hotelInfo.email}`} className="hover:underline">
                    {hotelInfo.email}
                  </a>
                </div>
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">{hotelInfo.address}</span>
                </div>
              </div>
            </div>

            {/* Horaires */}
            <div className="space-y-6">
              <h4 className="text-lg font-bold text-white">Horaires</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-300">Lundi</span>
                  <span className="text-red-400 font-medium">{hotelInfo.hours.monday}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Mar - Dim</span>
                  <span className="text-green-400 font-medium">{hotelInfo.hours.tuesday}</span>
                </div>
              </div>

              {/* Réseaux sociaux */}
              <div>
                <h5 className="text-white font-semibold mb-3">Suivez-nous</h5>
                <div className="flex space-x-3">
                  <button className="p-2 bg-gray-800 hover:bg-blue-600 rounded-full transition-colors">
                    <Facebook className="w-5 h-5" />
                  </button>
                  <button className="p-2 bg-gray-800 hover:bg-pink-600 rounded-full transition-colors">
                    <Instagram className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-gray-800"></div>

        {/* Copyright */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} {hotelInfo.name}. Tous droits réservés.
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Fait avec</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>à Champeix</span>
            </div>

            <div className="flex space-x-6 text-sm">
              <button className="text-gray-400 hover:text-amber-300 transition-colors">
                Mentions légales
              </button>
              <button className="text-gray-400 hover:text-amber-300 transition-colors">
                Politique de confidentialité
              </button>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;