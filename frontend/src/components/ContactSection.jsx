import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Calendar, Users } from 'lucide-react';
import { Container } from './ui/container';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { hotelInfo } from '../data/mock';
import { useToast } from '../hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, on simule l'envoi du formulaire
    toast({
      title: "Demande de réservation envoyée !",
      description: "Nous vous recontacterons rapidement pour confirmer votre réservation.",
    });
    
    // Reset du formulaire
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      guests: '',
      message: ''
    });
  };

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Téléphone",
      info: hotelInfo.phone,
      description: "Appelez-nous directement",
      action: () => window.open(`tel:${hotelInfo.phone}`)
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      info: hotelInfo.email,
      description: "Écrivez-nous un message",
      action: () => window.open(`mailto:${hotelInfo.email}`)
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Adresse",
      info: hotelInfo.address,
      description: "Venez nous rendre visite",
      action: () => window.open(`https://maps.google.com/?q=${encodeURIComponent(hotelInfo.address)}`)
    }
  ];

  const businessHours = [
    { day: "Lundi", hours: hotelInfo.hours.monday, closed: true },
    { day: "Mardi", hours: hotelInfo.hours.tuesday },
    { day: "Mercredi", hours: hotelInfo.hours.wednesday },
    { day: "Jeudi", hours: hotelInfo.hours.thursday },
    { day: "Vendredi", hours: hotelInfo.hours.friday },
    { day: "Samedi", hours: hotelInfo.hours.saturday },
    { day: "Dimanche", hours: hotelInfo.hours.sunday }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <Container>
        <div className="max-w-7xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Réservez Votre Table
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contactez-nous pour réserver votre table ou pour toute question. 
              Nous serons ravis de vous accueillir dans notre restaurant familial.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulaire de contact */}
            <Card className="border-none shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center space-x-2">
                  <Calendar className="w-6 h-6 text-amber-600" />
                  <span>Demande de Réservation</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nom complet *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Votre nom"
                        required
                        className="border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="votre@email.com"
                        required
                        className="border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Téléphone
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="06 12 34 56 78"
                        className="border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre de convives
                      </label>
                      <Input
                        type="number"
                        name="guests"
                        value={formData.guests}
                        onChange={handleInputChange}
                        placeholder="2"
                        min="1"
                        max="70"
                        className="border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date souhaitée
                    </label>
                    <Input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message (optionnel)
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Précisez vos préférences, allergies, occasion spéciale..."
                      rows={4}
                      className="border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 text-lg"
                  >
                    Envoyer la demande de réservation
                  </Button>

                  <p className="text-sm text-gray-600 text-center">
                    * Champs obligatoires. Nous vous recontacterons pour confirmer votre réservation.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Informations de contact */}
            <div className="space-y-8">
              {/* Moyens de contact */}
              <div className="grid gap-4">
                {contactMethods.map((method, index) => (
                  <Card
                    key={index}
                    className="border-none shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                    onClick={method.action}
                  >
                    <CardContent className="p-6 flex items-center space-x-4">
                      <div className="p-3 bg-amber-100 text-amber-600 rounded-full group-hover:bg-amber-600 group-hover:text-white transition-colors">
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
                          {method.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-1">{method.description}</p>
                        <p className="text-gray-900 font-medium">{method.info}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Horaires */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-amber-600" />
                    <span>Horaires d'Ouverture</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {businessHours.map((schedule, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                      >
                        <span className="font-medium text-gray-900">{schedule.day}</span>
                        <span
                          className={`font-medium ${
                            schedule.closed ? 'text-red-600' : 'text-green-600'
                          }`}
                        >
                          {schedule.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Informations supplémentaires */}
              <Card className="border-none shadow-lg bg-gradient-to-br from-amber-50 to-orange-50">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <Users className="w-5 h-5 text-amber-600" />
                    <h3 className="font-bold text-gray-900">Groupes & Événements</h3>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    Nous accueillons les groupes jusqu'à 70 personnes pour vos événements spéciaux : 
                    anniversaires, repas d'entreprise, réunions de famille...
                  </p>
                  <p className="text-amber-700 text-sm font-medium">
                    Contactez-nous pour un devis personnalisé !
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;