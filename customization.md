# Guide de Personnalisation VOCALIZEN

## 🎨 Personnalisation Rapide

### 1. Changer les Couleurs

Dans `css/styles.css`, modifiez les variables :

```css
:root {
    --primary: #2563EB;    /* Bleu principal */
    --green: #10B981;      /* Vert pour succès */
    --red: #EF4444;        /* Rouge pour problèmes */
    --dark: #1E293B;       /* Texte foncé */
    --gray: #64748B;       /* Texte secondaire */
}
```

### 2. Modifier le Numéro de Téléphone

Recherchez et remplacez dans tous les fichiers :
- `+33760884320` → Votre numéro
- `07 60 88 43 20` → Votre numéro formaté

### 3. Changer le Nom de l'Agent

Remplacez `VOCALIZEN` par votre nom de marque dans :
- Le logo (header)
- Le titre de la page
- Les mentions dans le contenu

## 🚀 Optimisations Avancées

### Ajouter des Images

1. Créez un dossier `img/`
2. Ajoutez vos images optimisées (WebP recommandé)
3. Référencez-les dans le HTML :

```html
<img src="img/votre-image.webp" alt="Description" loading="lazy">
```

### Ajouter Google Analytics

Dans `index.html`, avant `</head>` :

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Optimiser pour SEO

1. **Meta Tags** (dans `<head>`) :
```html
<meta name="description" content="VOCALIZEN - Agent vocal IA pour dentistes. Réduisez 73% des no-shows, automatisez vos RDV.">
<meta name="keywords" content="agent ia dentiste, assistant vocal cabinet dentaire, vocalizen">
<meta property="og:title" content="VOCALIZEN - Agent Vocal IA pour Dentistes">
<meta property="og:description" content="Automatisez votre cabinet dentaire avec l'IA">
<meta property="og:image" content="https://votre-site.fr/img/og-image.jpg">
```

2. **Schema.org** (avant `</body>`) :
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@name": "VOCALIZEN",
  "description": "Agent vocal IA pour cabinets dentaires",
  "applicationCategory": "HealthApplication"
}
</script>
```

## 📱 Adaptations Mobile

### Tester le Responsive
- Chrome DevTools (F12)
- Tailles clés : 375px, 768px, 1024px, 1440px

### Optimiser les Performances Mobile
1. Compressez les images (TinyPNG)
2. Minimisez CSS/JS en production
3. Utilisez un CDN pour les assets

## 🔧 Intégrations Possibles

### 1. Formulaire de Contact

Remplacez les liens téléphone par un formulaire :

```html
<form class="contact-form" action="https://formspree.io/f/YOUR_ID" method="POST">
  <input type="text" name="name" placeholder="Votre nom" required>
  <input type="email" name="email" placeholder="Email" required>
  <input type="tel" name="phone" placeholder="Téléphone" required>
  <textarea name="message" placeholder="Message" rows="4"></textarea>
  <button type="submit" class="cta-button">Envoyer</button>
</form>
```

### 2. Chat Widget

Ajoutez un chat en direct :

```html
<!-- Crisp, Intercom, ou autre -->
<script type="text/javascript">
  window.$crisp=[];window.CRISP_WEBSITE_ID="YOUR_ID";
  (function(){d=document;s=d.createElement("script");
  s.src="https://client.crisp.chat/l.js";s.async=1;
  d.getElementsByTagName("head")[0].appendChild(s);})();
</script>
```

### 3. Calendrier de Démo

Intégrez Calendly :

```html
<div class="calendly-inline-widget" 
     data-url="https://calendly.com/votre-lien" 
     style="min-width:320px;height:630px;">
</div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>
```

## 🎯 Tests et Optimisation

### Outils Recommandés
- **PageSpeed Insights** : Performance
- **GTmetrix** : Vitesse de chargement
- **Hotjar** : Heatmaps et recordings
- **Google Optimize** : A/B testing

### Métriques à Suivre
- Taux de conversion (appels/visites)
- Temps sur la page
- Taux de rebond
- Scroll depth

## 📈 Amélioration Continue

1. **A/B Testing** : Testez différents CTAs
2. **Feedback** : Ajoutez un widget de feedback
3. **Analytics** : Analysez le comportement utilisateur
4. **Itération** : Améliorez basé sur les données

---

💡 **Astuce Pro** : Gardez toujours une copie de sauvegarde avant modifications majeures !