# Hôtel du Centre - Site Web Statique

Site web pour l'Hôtel du Centre à Champeix, géré par Jérôme et Amandine Moins.

## 🌐 Site Web en Ligne

Ce site est 100% statique et peut être publié sur n'importe quelle plateforme d'hébergement statique :
- GitHub Pages
- Netlify  
- Vercel
- Surge.sh
- Ou tout serveur web standard

## 📁 Structure des Fichiers

```
docs/
├── index.html              # Page principale du site
├── admin.html              # Interface d'administration
├── assets/
│   ├── css/
│   │   ├── style.css       # Styles du site principal
│   │   └── admin.css       # Styles de l'administration
│   └── js/
│       ├── main.js         # Fonctionnalités du site principal
│       ├── admin.js        # Fonctionnalités de l'administration
│       └── data.js         # Gestion des données (localStorage)
└── README.md               # Ce fichier
```

## 🚀 Utilisation

### Ouverture du Site
1. Ouvrez `index.html` dans un navigateur web
2. Ou hébergez le dossier `docs/` sur un serveur web

### Administration
1. Accédez à `/admin.html`
2. Entrez le mot de passe : **`menu2025`**
3. Gérez le contenu du site :
   - **Menus** : Ajouter/modifier/supprimer les plats par catégorie
   - **Avis** : Gérer les témoignages clients
   - **Informations** : Modifier les détails de l'hôtel
   - **Réservations** : Consulter les demandes

## 🔧 Fonctionnalités

### Site Principal
- ✅ **Design responsive** - Compatible mobile/tablette/desktop
- ✅ **Navigation fluide** - Liens anchor avec animation
- ✅ **Galerie interactive** - Lightbox pour les images
- ✅ **Menu dynamique** - Affiché par catégories
- ✅ **Avis clients** - Témoignages avec notes
- ✅ **Contact direct** - Liens téléphone/email/maps

### Administration
- ✅ **Authentification sécurisée** - Mot de passe requis
- ✅ **Gestion complète du menu** - CRUD par catégorie  
- ✅ **Gestion des avis** - Ajout/modification/suppression
- ✅ **Paramètres généraux** - Informations hôtel, horaires
- ✅ **Sauvegarde automatique** - Données en localStorage

## 💾 Stockage des Données

Le site utilise **localStorage** du navigateur pour stocker :
- Menu et tarifs
- Avis clients
- Informations de l'hôtel
- Horaires d'ouverture

**Note** : Les données sont liées au navigateur utilisé pour l'administration. Pour une utilisation multi-utilisateurs, il est recommandé d'utiliser toujours le même navigateur/ordinateur pour l'administration.

## 🔒 Sécurité

- **Mot de passe d'administration** : `menu2025`
- **Session temporaire** : L'authentification expire à la fermeture du navigateur
- **Données locales** : Aucune donnée n'est envoyée vers des serveurs externes

## 🎨 Personnalisation

### Couleurs Principales
- **Primaire** : Orange/Amber (#d97706)
- **Secondaire** : Orange foncé (#ea580c)
- **Texte** : Gris foncé (#1f2937)
- **Fond** : Blanc/Beige clair

### Polices
- **Titres** : Playfair Display (serif)
- **Texte** : Inter (sans-serif)

### Images
- **Hero** : Intérieur du restaurant (Google Photos)
- **Galerie** : Photos réelles + images Unsplash pour les plats
- **Icônes** : Lucide React via CDN

## 📧 Support

Pour toute question technique sur le site, contactez l'administrateur système.

Pour des modifications du contenu, utilisez l'interface d'administration accessible via `/admin.html`.

---

**© 2025 Hôtel du Centre - Jérôme et Amandine Moins**  
*17 Rue de la Halle, 63320 Champeix, France*  
*Tél : +33 4 73 96 35 08*