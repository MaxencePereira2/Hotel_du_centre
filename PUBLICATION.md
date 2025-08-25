# Guide de Publication - Hôtel du Centre

## 📁 Structure du Projet

Le site web statique est prêt à la publication et se trouve dans le dossier **`docs/`** :

```
/app/docs/           # ← Dossier à publier
├── index.html       # Page principale  
├── admin.html       # Panel d'administration
├── assets/          # Ressources (CSS, JS)
│   ├── css/
│   │   ├── style.css
│   │   └── admin.css
│   └── js/
│       ├── main.js
│       ├── admin.js
│       └── data.js
├── .htaccess        # Configuration Apache
├── _config.yml      # Configuration GitHub Pages
└── README.md        # Documentation
```

## 🚀 Options de Publication

### 1. GitHub Pages
1. Uploadez le contenu du dossier `docs/` vers un repository GitHub
2. Activez GitHub Pages dans Settings → Pages
3. Sélectionnez `docs/` comme source
4. Le site sera accessible à `https://username.github.io/repository-name/`

### 2. Netlify
1. Glissez-déposez le dossier `docs/` sur Netlify.com
2. Ou connectez un repository GitHub avec le dossier `docs/`
3. Déploiement automatique à chaque modification

### 3. Vercel
1. Connectez votre repository GitHub à Vercel
2. Configurez le Build & Output Settings :
   - **Output Directory**: `docs`
   - **Install Command**: (laisser vide)
   - **Build Command**: (laisser vide)

### 4. Hébergement Traditionnel
1. Uploadez tout le contenu du dossier `docs/` via FTP
2. Pointez le domaine vers le dossier racine
3. Le fichier `.htaccess` optimisera les performances

## 🔧 Configuration Post-Publication

### Administration
- **URL d'accès** : `https://votre-site.com/admin.html`
- **Mot de passe** : `menu2025`
- **Recommandation** : Changez le mot de passe dans `assets/js/admin.js` ligne 13

### Données
- **Stockage** : LocalStorage du navigateur
- **Sauvegarde** : Utilisez toujours le même navigateur pour l'administration
- **Backup** : Exportez les données via le panel admin si disponible

### SEO & Performance
- **Meta tags** : Présents dans `index.html`
- **Sitemap** : Généré automatiquement par GitHub Pages/Netlify
- **Compression** : Activée via `.htaccess`
- **Cache** : Configuré pour les ressources statiques

## ✅ Checklist de Publication

- [ ] Vérifier que tous les fichiers sont dans `docs/`
- [ ] Tester le site localement (ouvrir `docs/index.html`)
- [ ] Vérifier l'accès admin avec le mot de passe
- [ ] Modifier les URLs dans `_config.yml` si nécessaire
- [ ] Tester la responsivité mobile
- [ ] Vérifier les liens de contact (téléphone/email)
- [ ] Publier sur la plateforme choisie

## 📞 Support Technique

Le site est 100% autonome et ne nécessite aucune maintenance serveur.

Pour des modifications de contenu, utilisez l'interface d'administration accessible via `/admin.html`.

---

**Site prêt à la publication ! 🚀**

*Tous les fichiers nécessaires sont dans le dossier `docs/` et peuvent être déployés sur n'importe quelle plateforme d'hébergement statique.*