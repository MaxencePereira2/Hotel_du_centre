// Data management for Hotel du Centre website
// This file handles all data storage using localStorage

// Default data structure
const DEFAULT_DATA = {
    hotelInfo: {
        name: "Hôtel du Centre",
        subtitle: "Jérôme et Amandine Moins",
        description: "Au cœur de Champeix, l'Hôtel du Centre vous accueille dans un cadre chaleureux et authentique. Jérôme et Amandine vous proposent une cuisine traditionnelle française avec des produits locaux de qualité, dans une ambiance conviviale qui fait le charme de notre établissement depuis des générations.",
        address: "17 Rue de la Halle, 63320 Champeix, France",
        phone: "+33 4 73 96 35 08",
        email: "contact@hotel-du-centre-champeix.fr",
        rating: 4.7,
        reviewCount: 365,
        hours: {
            monday: "Fermé",
            tuesday: "08:00 - 22:00",
            wednesday: "08:00 - 22:00", 
            thursday: "08:00 - 22:00",
            friday: "08:00 - 22:00",
            saturday: "08:00 - 22:00",
            sunday: "08:00 - 22:00"
        }
    },

    galleryImages: {
        restaurant: [
            {
                id: 1,
                url: "https://lh3.googleusercontent.com/p/AF1QipP1Iig4bRvFXNjhXk-KtRdt33iD2HYqTtYiTYro=w500-h400-n-k-no",
                title: "Salle principale du restaurant",
                description: "Notre salle de restaurant avec une décoration traditionnelle et chaleureuse"
            },
            {
                id: 2, 
                url: "https://lh3.googleusercontent.com/p/AF1QipOVWl3RwkTTPfQt9Le3A3zTr83KDnUiW76FmSLT=w500-h400-n-k-no",
                title: "Terrasse extérieure",
                description: "Profitez de notre terrasse pour déguster nos spécialités"
            },
            {
                id: 3,
                url: "https://lh3.googleusercontent.com/p/AF1QipNsqDIq44qTqg8HswgXRSwd1RbjNBTemWdOgeZv=w500-h400-n-k-no", 
                title: "Ambiance chaleureuse",
                description: "Un cadre authentique pour vos repas en famille ou entre amis"
            }
        ],
        dishes: [
            {
                id: 1,
                url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=400&fit=crop&crop=center",
                title: "Plat du terroir",
                description: "Nos spécialités locales préparées avec passion"
            },
            {
                id: 2,
                url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=400&fit=crop&crop=center",
                title: "Cuisine traditionnelle",
                description: "Des recettes authentiques transmises de génération en génération"
            },
            {
                id: 3,
                url: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=500&h=400&fit=crop&crop=center",
                title: "Desserts maison",
                description: "Nos desserts préparés sur place avec des ingrédients locaux"
            }
        ]
    },

    menuData: {
        entrees: [
            { id: 1, name: "Terrine de campagne maison", price: "8€", description: "Accompagnée de cornichons et pain grillé" },
            { id: 2, name: "Salade de chèvre chaud", price: "12€", description: "Sur lit de salade, noix et miel" },
            { id: 3, name: "Escargots de Bourgogne", price: "14€", description: "Les 6 pièces, beurre persillé" }
        ],
        plats: [
            { id: 4, name: "Truffade traditionnelle", price: "16€", description: "Pommes de terre, tome fraîche et lardons" },
            { id: 5, name: "Côte de bœuf grillée", price: "22€", description: "Sauce au poivre, frites maison" },
            { id: 6, name: "Saumon grillé", price: "19€", description: "Beurre blanc, légumes de saison" },
            { id: 7, name: "Confit de canard", price: "18€", description: "Pommes sarladaises et haricots verts" }
        ],
        desserts: [
            { id: 8, name: "Tarte aux myrtilles", price: "7€", description: "Pâte sablée maison, myrtilles locales" },
            { id: 9, name: "Tiramisu maison", price: "6€", description: "Recette traditionnelle italienne" },
            { id: 10, name: "Plateau de fromages régionaux", price: "9€", description: "Sélection de fromages d'Auvergne" }
        ]
    },

    reviewsData: [
        {
            id: 1,
            name: "Marie L.",
            rating: 5,
            date: "Il y a 2 semaines",
            comment: "Excellent accueil de Jérôme et Amandine. La cuisine est délicieuse et authentique. La truffade était parfaite ! Nous reviendrons certainement."
        },
        {
            id: 2,
            name: "Pierre D.",
            rating: 5,
            date: "Il y a 1 mois", 
            comment: "Restaurant familial chaleureux. Les produits sont frais et locaux. Service impeccable. Une adresse à retenir à Champeix."
        },
        {
            id: 3,
            name: "Sophie M.",
            rating: 4,
            date: "Il y a 3 semaines",
            comment: "Très bon restaurant traditionnel. Les portions sont généreuses et les prix raisonnables. Cadre agréable et service souriant."
        },
        {
            id: 4,
            name: "Jean-Claude R.",
            rating: 5,
            date: "Il y a 1 semaine",
            comment: "Une cuisine du terroir comme on les aime. L'ambiance est conviviale et les propriétaires sont aux petits soins. Bravo !"
        }
    ],

    reservations: []
};

// Data management functions
class DataManager {
    constructor() {
        this.initializeData();
    }

    // Initialize data from localStorage or use defaults
    initializeData() {
        const savedData = localStorage.getItem('hotelData');
        if (savedData) {
            try {
                this.data = JSON.parse(savedData);
                // Merge with defaults to ensure all properties exist
                this.data = this.mergeWithDefaults(this.data, DEFAULT_DATA);
            } catch (e) {
                console.error('Error parsing saved data:', e);
                this.data = JSON.parse(JSON.stringify(DEFAULT_DATA));
            }
        } else {
            this.data = JSON.parse(JSON.stringify(DEFAULT_DATA));
        }
    }

    // Merge saved data with defaults to handle new properties
    mergeWithDefaults(saved, defaults) {
        const merged = JSON.parse(JSON.stringify(defaults));
        
        Object.keys(saved).forEach(key => {
            if (typeof saved[key] === 'object' && saved[key] !== null && !Array.isArray(saved[key])) {
                merged[key] = this.mergeWithDefaults(saved[key], defaults[key] || {});
            } else {
                merged[key] = saved[key];
            }
        });
        
        return merged;
    }

    // Save data to localStorage
    saveData() {
        try {
            localStorage.setItem('hotelData', JSON.stringify(this.data));
            return true;
        } catch (e) {
            console.error('Error saving data:', e);
            return false;
        }
    }

    // Get hotel info
    getHotelInfo() {
        return this.data.hotelInfo;
    }

    // Update hotel info
    updateHotelInfo(info) {
        this.data.hotelInfo = { ...this.data.hotelInfo, ...info };
        return this.saveData();
    }

    // Get gallery images
    getGalleryImages() {
        return this.data.galleryImages;
    }

    // Get menu data
    getMenuData() {
        return this.data.menuData;
    }

    // Add menu item
    addMenuItem(category, item) {
        if (!this.data.menuData[category]) {
            this.data.menuData[category] = [];
        }
        
        const newId = Math.max(0, ...Object.values(this.data.menuData).flat().map(item => item.id || 0)) + 1;
        const newItem = { ...item, id: newId };
        
        this.data.menuData[category].push(newItem);
        return this.saveData();
    }

    // Update menu item
    updateMenuItem(category, itemId, updatedItem) {
        const items = this.data.menuData[category];
        const index = items.findIndex(item => item.id === itemId);
        
        if (index !== -1) {
            items[index] = { ...items[index], ...updatedItem };
            return this.saveData();
        }
        return false;
    }

    // Delete menu item
    deleteMenuItem(category, itemId) {
        const items = this.data.menuData[category];
        const index = items.findIndex(item => item.id === itemId);
        
        if (index !== -1) {
            items.splice(index, 1);
            return this.saveData();
        }
        return false;
    }

    // Get reviews
    getReviews() {
        return this.data.reviewsData;
    }

    // Add review
    addReview(review) {
        const newId = Math.max(0, ...this.data.reviewsData.map(r => r.id || 0)) + 1;
        const newReview = { ...review, id: newId };
        
        this.data.reviewsData.push(newReview);
        return this.saveData();
    }

    // Update review
    updateReview(reviewId, updatedReview) {
        const index = this.data.reviewsData.findIndex(r => r.id === reviewId);
        
        if (index !== -1) {
            this.data.reviewsData[index] = { ...this.data.reviewsData[index], ...updatedReview };
            return this.saveData();
        }
        return false;
    }

    // Delete review
    deleteReview(reviewId) {
        const index = this.data.reviewsData.findIndex(r => r.id === reviewId);
        
        if (index !== -1) {
            this.data.reviewsData.splice(index, 1);
            return this.saveData();
        }
        return false;
    }

    // Get reservations
    getReservations() {
        return this.data.reservations || [];
    }

    // Add reservation
    addReservation(reservation) {
        if (!this.data.reservations) {
            this.data.reservations = [];
        }
        
        const newId = Math.max(0, ...this.data.reservations.map(r => r.id || 0)) + 1;
        const newReservation = { 
            ...reservation, 
            id: newId, 
            status: 'pending',
            createdAt: new Date().toISOString()
        };
        
        this.data.reservations.push(newReservation);
        return this.saveData();
    }

    // Update reservation status
    updateReservationStatus(reservationId, status) {
        if (!this.data.reservations) return false;
        
        const index = this.data.reservations.findIndex(r => r.id === reservationId);
        
        if (index !== -1) {
            this.data.reservations[index].status = status;
            return this.saveData();
        }
        return false;
    }

    // Delete reservation
    deleteReservation(reservationId) {
        if (!this.data.reservations) return false;
        
        const index = this.data.reservations.findIndex(r => r.id === reservationId);
        
        if (index !== -1) {
            this.data.reservations.splice(index, 1);
            return this.saveData();
        }
        return false;
    }

    // Export data for backup
    exportData() {
        return JSON.stringify(this.data, null, 2);
    }

    // Import data from backup
    importData(jsonData) {
        try {
            const importedData = JSON.parse(jsonData);
            this.data = this.mergeWithDefaults(importedData, DEFAULT_DATA);
            return this.saveData();
        } catch (e) {
            console.error('Error importing data:', e);
            return false;
        }
    }

    // Reset to defaults
    reset() {
        this.data = JSON.parse(JSON.stringify(DEFAULT_DATA));
        return this.saveData();
    }
}

// Create global instance
const dataManager = new DataManager();

// Legacy support - expose data in old format for compatibility
window.hotelInfo = dataManager.getHotelInfo();
window.galleryImages = dataManager.getGalleryImages();
window.menuData = dataManager.getMenuData();
window.reviewsData = dataManager.getReviews();