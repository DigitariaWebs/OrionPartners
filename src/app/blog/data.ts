export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  authorRole: string;
  authorBio: string;
  publishDate: string;
  readTime: string;
  image: string;
  category: string;
  content: string;
  tags: string[];
  featured: boolean;
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "transformation-digitale-entreprises-2025",
    title: "La transformation digitale des entreprises en 2025",
    excerpt: "Découvrez les tendances clés de la transformation digitale et comment les entreprises peuvent s'adapter aux nouveaux défis technologiques.",
    author: "Marie Dubois",
    authorRole: "Directrice Conseil Digital",
    authorBio: "Marie est une experte en transformation digitale avec plus de 15 ans d'expérience dans l'accompagnement des entreprises dans leur évolution technologique.",
    publishDate: "2025-01-15",
    readTime: "5 min",
    image: "/ServiceImages/VilleNewYork.jpg",
    category: "Transformation Digitale",
    content: `
      <h2>Introduction à la transformation digitale</h2>
      <p>La transformation digitale représente aujourd'hui un défi majeur pour les entreprises de toutes tailles. Avec l'avènement des nouvelles technologies et l'évolution rapide des attentes des consommateurs, il est essentiel de s'adapter pour rester compétitif.</p>

      <h2>Les tendances clés de 2025</h2>
      <p>Cette année, plusieurs tendances se distinguent particulièrement :</p>
      <ul>
        <li><strong>L'intelligence artificielle conversationnelle</strong> : Les chatbots et assistants virtuels deviennent omniprésents</li>
        <li><strong>Le cloud computing hybride</strong> : Une approche flexible pour optimiser les ressources</li>
        <li><strong>La cybersécurité intégrée</strong> : La sécurité devient une priorité stratégique</li>
        <li><strong>Les expériences immersives</strong> : Réalité virtuelle et augmentée transforment l'interaction client</li>
      </ul>

      <h2>Stratégies d'adaptation</h2>
      <p>Pour réussir leur transformation, les entreprises doivent adopter une approche structurée :</p>
      <ol>
        <li>Évaluer leur maturité digitale actuelle</li>
        <li>Définir une vision claire et des objectifs mesurables</li>
        <li>Investir dans les compétences et la formation</li>
        <li>Adopter une approche itérative et agile</li>
      </ol>

      <h2>Conclusion</h2>
      <p>La transformation digitale n'est plus une option mais une nécessité. Les entreprises qui sauront anticiper les changements et s'adapter rapidement seront celles qui réussiront dans cet environnement en constante évolution.</p>
    `,
    tags: ["Transformation Digitale", "Innovation", "Stratégie"],
    featured: true
  },
  {
    id: 2,
    slug: "optimisation-comptabilite-automatisation",
    title: "Optimisation de la comptabilité par l'automatisation",
    excerpt: "Comment l'automatisation peut révolutionner vos processus comptables et améliorer l'efficacité de votre entreprise.",
    author: "Pierre Martin",
    authorRole: "Expert Comptable",
    authorBio: "Pierre est expert-comptable certifié avec une spécialisation en systèmes d'information comptable et d'automatisation des processus financiers.",
    publishDate: "2025-01-10",
    readTime: "4 min",
    image: "/ServiceImages/VilleNewYork.jpg",
    category: "Comptabilité",
    content: `
      <h2>Le défi de l'efficacité comptable</h2>
      <p>La comptabilité traditionnelle est souvent perçue comme une fonction administrative chronophage et répétitive. L'automatisation offre une solution moderne pour optimiser ces processus et libérer du temps pour des tâches à plus haute valeur ajoutée.</p>

      <h2>Les avantages de l'automatisation</h2>
      <p>L'automatisation des tâches comptables apporte plusieurs bénéfices :</p>
      <ul>
        <li><strong>Réduction des erreurs</strong> : Élimination des saisies manuelles</li>
        <li><strong>Gain de temps</strong> : Traitement automatique des opérations répétitives</li>
        <li><strong>Amélioration de la compliance</strong> : Respect automatique des normes</li>
        <li><strong>Meilleure visibilité</strong> : Tableaux de bord en temps réel</li>
      </ul>

      <h2>Outils et technologies</h2>
      <p>Plusieurs solutions s'offrent aux entreprises :</p>
      <ol>
        <li>Logiciels de comptabilité en cloud</li>
        <li>Outils d'extraction automatique des données</li>
        <li>Systèmes de reconnaissance optique des caractères</li>
        <li>Intelligence artificielle pour la validation des écritures</li>
      </ol>

      <h2>Conclusion</h2>
      <p>L'automatisation comptable n'est pas une tendance passagère mais une évolution nécessaire. Elle permet aux équipes comptables de se concentrer sur l'analyse et le conseil stratégique plutôt que sur les tâches opérationnelles.</p>
    `,
    tags: ["Comptabilité", "Automatisation", "Efficacité"],
    featured: false
  },
  {
    id: 3,
    slug: "intelligence-artificielle-decisionnel",
    title: "L'intelligence artificielle au service du décisionnel",
    excerpt: "Explorez comment l'IA transforme l'analyse de données et aide les dirigeants à prendre des décisions plus éclairées.",
    author: "Sophie Laurent",
    authorRole: "Data Scientist",
    authorBio: "Sophie est data scientist spécialisée dans l'application de l'intelligence artificielle aux problématiques business et de prise de décision.",
    publishDate: "2025-01-05",
    readTime: "6 min",
    image: "/ServiceImages/VilleNewYork.jpg",
    category: "Data Intelligence",
    content: `
      <h2>L'IA : un levier pour la prise de décision</h2>
      <p>L'intelligence artificielle révolutionne le monde du décisionnel en permettant d'analyser des volumes de données inimaginables et d'identifier des patterns complexes que l'œil humain ne pourrait détecter.</p>

      <h2>Applications concrètes de l'IA</h2>
      <p>L'IA trouve de nombreuses applications dans le domaine du décisionnel :</p>
      <ul>
        <li><strong>Prévisions de ventes</strong> : Anticipation des tendances avec une précision accrue</li>
        <li><strong>Segmentation client</strong> : Identification automatique des groupes de clients</li>
        <li><strong>Détection d'anomalies</strong> : Identification des comportements inhabituels</li>
        <li><strong>Optimisation des prix</strong> : Ajustement dynamique des tarifs</li>
      </ul>

      <h2>Technologies clés</h2>
      <p>Plusieurs technologies de l'IA sont particulièrement pertinentes :</p>
      <ol>
        <li>Machine Learning pour les prédictions</li>
        <li>Traitement du langage naturel pour l'analyse de texte</li>
        <li>Computer Vision pour l'analyse d'images</li>
        <li>Deep Learning pour les analyses complexes</li>
      </ol>

      <h2>Conclusion</h2>
      <p>L'IA ne remplace pas le jugement humain mais l'amplifie. Elle fournit aux décideurs des insights précieux qui leur permettent de prendre des décisions plus informées et plus rapides.</p>
    `,
    tags: ["Intelligence Artificielle", "Data", "Décisionnel"],
    featured: false
  }
];
