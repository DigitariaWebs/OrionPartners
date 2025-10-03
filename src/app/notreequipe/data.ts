export type TeamMember = {
  name: string;
  title: string;
  subtitle: string;
  image: string;
  briefDescription: string;
  description: string;
  email: string;
  expertise: string;
  education: string;
  university: string;
  country: string;
  experience: string;
  slug: string;
};

export const teamMembers: TeamMember[] = [
  // Associés et Consultants Seniors
  {
    name: "Ferdinand Ntambwe, M.A.",
    title: "M.A.",
    subtitle: "Associé, Croissance & Marchés",
    image: "/NotreEquipe/FerdinandNtambwe.jpg",
    briefDescription:
      "En tant qu'Associé Croissance & Marchés, Ferdinand Ntambwe est l'architecte des ponts entre les défis de nos clients et les solutions d'Orion Conseil.",
    description:
      "En tant qu'Associé Croissance & Marchés, Ferdinand Ntambwe est l'architecte des ponts entre les défis de nos clients et les solutions d'Orion Conseil. Il identifie les opportunités stratégiques et s'assure que notre expertise évolue constamment pour répondre à leurs ambitions. Véritable partenaire de nos clients clés, il met à profit plus de 5 ans d'expérience pour cultiver des relations de confiance et transformer leurs objectifs en succès partagés. Son leadership en développement d'affaires est la garantie pour nos clients d'avoir un partenaire qui non seulement comprend, mais anticipe leurs besoins futurs. Ferdinand détient une licence en finance de l'Université Ibn Khaldoun (Tunisie) et une maîtrise en finances publiques de l'Université Laval (Canada).",
    email: "f.ntambwe@orionconseil.com",
    expertise:
      "Développement d'affaires, Stratégie de croissance, Relations clients",
    education:
      "Licence en finance (Université Ibn Khaldoun), Maîtrise en finances publiques (Université Laval)",
    university: "Université Ibn Khaldoun (Licence), Université Laval (Maîtrise)",
    country: "Tunisie, Canada",
    experience: "Plus de 5 ans d'expérience en développement d'affaires",
    slug: "ferdinand-ntambwe",
  },
  {
    name: "Gisèle Kabwende",
    title: "Avocate",
    subtitle: "Associée, Directrice du pôle Juridique & Fiscal",
    image: "/NotreEquipe/GiseleKabwende.png",
    briefDescription:
      "À la tête de notre pôle Juridique et Fiscal, Me. Gisèle Kabwende est une avocate chevronnée forte de 13 ans d'expérience en droit des affaires et fiscalité d'entreprise.",
    description:
      "À la tête de notre pôle Juridique et Fiscal, Me. Gisèle Kabwende est une avocate chevronnée forte de 13 ans d'expérience en droit des affaires et fiscalité d'entreprise. Elle conseille nos clients sur des enjeux critiques tels que la conformité réglementaire, l'optimisation fiscale et la sécurisation des transactions (fusions-acquisitions, restructurations). Titulaire d'une licence en droit de l'Université de Kinshasa, sa mission est de transformer les contraintes légales en avantages stratégiques pour nos clients.",
    email: "g.kabwende@orionconseil.com",
    expertise:
      "Droit des affaires, Fiscalité d'entreprise, Conformité réglementaire",
    education: "Licence en droit (Université de Kinshasa)",
    university: "Université de Kinshasa",
    country: "République Démocratique du Congo",
    experience:
      "13 ans d'expérience en droit des affaires et fiscalité d'entreprise",
    slug: "gisele-kabwende",
  },
  {
    name: "Jean Claude Gersone",
    title: "",
    subtitle: "Associé, Performance & Opérations",
    image: "/NotreEquipe/JeanClaudeGersone.png",
    briefDescription:
      "Fort de plus de 5 ans d'expérience, Jean Claude Gersone est le garant de la performance et de la bonne gouvernance de nos missions. Il s'assure que nos ressources et processus sont parfaitement alignés pour garantir le succès de nos clients.",
    description:
      "Fort de plus de 5 ans d'expérience, Jean Claude Gersone est le garant de la performance et de la bonne gouvernance de nos missions. Il s'assure que nos ressources et processus sont parfaitement alignés pour garantir le succès de nos clients. Titulaire d'une licence en économie de l'Université Pédagogique National (RDC) et d'une maîtrise en gestion publique de la prestigieuse ENA.",
    email: "j.gersone@orionconseil.com",
    expertise: "Performance opérationnelle, Gouvernance, Gestion publique",
    education:
      "Licence en économie (Université Pédagogique National), Maîtrise en gestion publique (ENA)",
    university: "Université Pédagogique National (Licence), ENA (Maîtrise)",
    country: "République Démocratique du Congo, France",
    experience: "Plus de 5 ans d'expérience en performance et opérations",
    slug: "jean-claude-gersone",
  },
  {
    name: "Christian Mukeba",
    title: "",
    subtitle: "Consultant Senior – Énergie & Gouvernance",
    image: "/NotreEquipe/ChristiaMukeba.png",
    briefDescription:
      "Christian Mukeba est un consultant senior et expert reconnu du secteur de l'énergie, avec une spécialisation dans le pétrole, le gaz et les énergies renouvelables, en particulier le solaire photovoltaïque.",
    description:
      "Christian Mukeba est un consultant senior et expert reconnu du secteur de l'énergie, avec une spécialisation dans le pétrole, le gaz et les énergies renouvelables, en particulier le solaire photovoltaïque. Fort de plus de 10 années d'expérience, il accompagne institutions publiques, entreprises privées et partenaires techniques dans la conception, la mise en œuvre et la gouvernance de projets énergétiques et de développement durable. Son expertise couvre quatre axes majeurs : (1) Énergie et industrie : gestion de projets pétroliers et gaziers, optimisation des opérations, évaluation et réduction des risques techniques et stratégiques. (2) Énergies renouvelables : développement et intégration de solutions photovoltaïques pour l'électrification durable, avec un focus sur les contextes hors-réseau et les marchés émergents. (3) Études de marché et secteur financier : analyse de l'offre et de la demande énergétique, identification d'opportunités d'investissement, et une brève expérience dans le secteur bancaire qui enrichit sa compréhension des mécanismes de financement. (4) Gouvernance environnementale et sociale : expertise en responsabilité sociétale, en sauvegarde environnementale et en accompagnement des réformes de gouvernance dans le secteur extractif. Il est titulaire d'un diplôme d'Ingénieur en Pétrole et Gaz de l'Université de Kinshasa (RDC), qui constitue le socle de sa crédibilité technique et de sa capacité à résoudre des problématiques complexes dans des environnements exigeants.",
    email: "khrismukeba@outlook.fr",
    expertise:
      "Énergie & Industrie, Énergies renouvelables, Gouvernance environnementale",
    education: "Ingénieur en Pétrole et Gaz (Université de Kinshasa)",
    university: "Université de Kinshasa",
    country: "République Démocratique du Congo",
    experience: "Plus de 10 ans d'expérience dans le secteur énergétique",
    slug: "christian-mukeba",
  },
  {
    name: "Nancy Besoke, MBA",
    title: "MBA",
    subtitle: "Consultante Senior – Finance d'Entreprise",
    image: "/NotreEquipe/NancyBesoke.jpeg",
    briefDescription:
      "Forte de plus de cinq ans d'expérience, Nancy Besoke Bendo est une consultante senior spécialisée dans la transformation de la fonction financière et l'accompagnement stratégique des entreprises.",
    description:
      "Forte de plus de cinq ans d'expérience, Nancy Besoke Bendo est une consultante senior spécialisée dans la transformation de la fonction financière et l'accompagnement stratégique des entreprises. Elle intervient auprès des dirigeants pour optimiser la performance financière, renforcer la prise de décision et générer une valeur durable. Son expertise couvre la modélisation financière, l'évaluation d'investissements et la gestion de la performance (EPM), avec une approche alliant rigueur analytique et compréhension fine des réalités opérationnelles. Titulaire d'un MBA de l'Université d'Ottawa (Canada), Nancy bénéficie d'une formation de haut niveau qui lui confère une vision stratégique intégrée des enjeux d'affaires. Ce bagage académique lui permet de connecter les dimensions financières aux objectifs globaux des organisations, en apportant des solutions concrètes, agiles et orientées vers les résultats pour les clients.",
    email: "besokenhancy@gmail.com",
    expertise:
      "Finance d'entreprise, Modélisation financière, Gestion de la performance (EPM)",
    education: "MBA (Université d'Ottawa, Canada)",
    university: "Université d'Ottawa",
    country: "Canada",
    experience: "Plus de 5 ans d'expérience en finance d'entreprise",
    slug: "nancy-besoke",
  },
  {
    name: "Philippe Emmanuel Amvenebe",
    title: "",
    subtitle: "Consultant Senior en Développement d'Affaires",
    image: "/NotreEquipe/Philippes.png",
    briefDescription:
      "Philippe Emmanuel est un consultant senior qui se consacre à accélérer la croissance de ses clients. Fort de plus de 10 ans d'expérience, il conçoit et met en œuvre des stratégies de développement d'affaires sur mesure.",
    description:
      "Philippe Emmanuel est un consultant senior qui se consacre à accélérer la croissance de ses clients. Fort de plus de 10 ans d'expérience, il conçoit et met en œuvre des stratégies de développement d'affaires sur mesure, visant à augmenter les revenus et à conquérir de nouveaux marchés. Son approche pragmatique combine analyse rigoureuse et exécution terrain pour transformer les opportunités en résultats concrets. Il accompagne les entreprises dans la structuration de leur démarche commerciale, l'optimisation de leurs ventes et la création de partenariats stratégiques. Philippe est titulaire de plusieurs certifications en gestion d'entreprise dont certaines de l'Université Laval (Canada).",
    email: "philippeae@outlook.com",
    expertise:
      "Développement d'affaires, Stratégie commerciale, Partenariats stratégiques",
    education:
      "Plusieurs certifications en gestion d'entreprise (Université Laval)",
    university: "Université Laval",
    country: "Canada",
    experience: "Plus de 10 ans d'expérience en développement d'affaires",
    slug: "philippe-emmanuel-amvenebe",
  },
  {
    name: "Christian Maheshe",
    title: "",
    subtitle: "Consultant, Production et Santé agropastorale",
    image: "/NotreEquipe/ChristianMaheshe.jpeg",
    briefDescription:
      "Fort de plus de 6 ans d'expérience, Christian Maheshe est le consultant spécialiste des secteurs agricole et de l'élevage au sein d'Orion Conseil. Il accompagne nos clients évoluant dans le secteur agropastoral.",
    description:
      "Fort de plus de 6 ans d'expérience, Christian Maheshe est le consultant spécialiste des secteurs agricole et de l'élevage au sein d'Orion Conseil. Il accompagne nos clients évoluant dans le secteur agropastoral de la phase d'incubation de leurs projets à l'intensification durable de leur production. Son rôle est de traduire les objectifs stratégiques en excellence opérationnelle sur le terrain. Son approche combine une expertise scientifique pointue et une vision pragmatique de la rentabilité. Il intervient sur la mise en place de plans de prophylaxie, l'optimisation des indices de conversion alimentaire, la mise en place des stratégies de production et de rentabilité, l'ingénierie de protocoles de biosécurité stricts. Christian aide ainsi les entreprises, agripreneurs et les éleveurs à réduire significativement le taux de mortalité, à augmenter la productivité et la rentabilité, à améliorer la traçabilité et à se conformer aux standards sanitaires les plus exigeants pour valoriser leur production. Christian est titulaire d'un diplôme de Docteur en Médecine Vétérinaire de l'Université de Kinshasa (RDC). Cette formation médicale et scientifique de haut niveau est le socle de son expertise, garantissant des recommandations qui allient performance économique et excellence sanitaire.",
    email: "chrismaheshe12@gmail.com",
    expertise: "Production agropastorale, Santé animale, Biosécurité",
    education: "Docteur en Médecine Vétérinaire (Université de Kinshasa)",
    university: "Université de Kinshasa",
    country: "République Démocratique du Congo",
    experience: "Plus de 6 ans d'expérience dans le secteur agropastoral",
    slug: "christian-maheshe",
  },
  {
    name: "Corine Kasongo",
    title: "",
    subtitle: "Consultante, Stratégie Digitale",
    image: "/NotreEquipe/CorineKasongo.png",
    briefDescription:
      "Corinne Kasongo est une stratège digitale et économiste de formation, spécialisée en gestion financière des entreprises. Elle accompagne les organisations dans leur transformation numérique en alignant innovation technologique, performance économique et impact durable.",
    description:
      "Corinne Kasongo est une stratège digitale et économiste de formation, spécialisée en gestion financière des entreprises. Elle accompagne les organisations dans leur transformation numérique en alignant innovation technologique, performance économique et impact durable. En tant que consultante en stratégie digitale, elle aide ses clients à accroître leur visibilité, à optimiser leur présence en ligne et à exploiter pleinement le potentiel du digital pour stimuler leur croissance. Passionnée par l'innovation et les solutions à forte valeur ajoutée, Corinne conçoit des stratégies de marketing digital fondées sur l'analyse de données, l'amélioration de l'expérience utilisateur (UX) et la conversion des opportunités technologiques en avantages compétitifs concrets. Sa maîtrise des enjeux financiers lui permet d'intégrer rigueur budgétaire et vision stratégique dans chaque projet. Diplômée en économie de l'Université de Kinshasa (RDC), elle incarne une approche multidisciplinaire, alliant expertise financière, intelligence digitale et sens de l'impact social.",
    email: "kasongocorine@gmail.com",
    expertise: "Stratégie digitale, Marketing digital, Gestion financière",
    education: "Diplômée en économie (Université de Kinshasa)",
    university: "Université de Kinshasa",
    country: "République Démocratique du Congo",
    experience:
      "Spécialiste en transformation numérique et stratégie digitale",
    slug: "corine-kasongo",
  },
  {
    name: "Edith Elda Nsenkey",
    title: "",
    subtitle: "Consultante, Secteur Bancaire",
    image: "/NotreEquipe/EldatEdithNsenkey.png",
    briefDescription:
      "Edith Elda Nsenkey est la consultante spécialiste du secteur bancaire au sein d'Orion Conseil. Elle accompagne les institutions financières dans la navigation des défis réglementaires, l'optimisation de leurs opérations et la mise en œuvre de leurs stratégies de transformation.",
    description:
      "Edith Elda Nsenkey est la consultante spécialiste du secteur bancaire au sein d'Orion Conseil. Elle accompagne les institutions financières dans la navigation des défis réglementaires, l'optimisation de leurs opérations et la mise en œuvre de leurs stratégies de transformation. Son expertise couvre l'analyse des produits financiers, la gestion des risques et l'amélioration de l'expérience client. Elle se consacre à fournir des solutions pragmatiques qui renforcent la compétitivité et la rentabilité de nos clients dans un marché en constante évolution. Elda est titulaire d'une licence en économie mathématique et d'un Diplôme d'étude Approfondie (DEA) de l'Université de Kinshasa (RDC). Cette formation lui confère une solide compréhension des mécanismes qui régissent le secteur financier, ancrant son expertise pratique dans des fondements analytiques robustes.",
    email: "nsenkeymayel@gmail.com",
    expertise: "Secteur bancaire, Produits financiers, Gestion des risques",
    education:
      "Licence en économie mathématique et DEA (Université de Kinshasa)",
    university: "Université de Kinshasa",
    country: "République Démocratique du Congo",
    experience:
      "Spécialiste du secteur bancaire et des institutions financières",
    slug: "edith-elda-nsenkey",
  },
  {
    name: "Nonce Dede, LL.M.",
    title: "LL.M.",
    subtitle: "Consultant Senior, juridique",
    image: "/NotreEquipe/NonceDede.jpg",
    briefDescription:
      "Fort de plus de 4 ans d'expérience, Nonce Dede est Consultant Juridique au sein d'Orion Conseil. Il apporte une expertise de premier plan pour sécuriser les opérations commerciales.",
    description:
      "Fort de plus de 4 ans d'expérience, Nonce Dede est Consultant Juridique au sein d'Orion Conseil. Il apporte une expertise de premier plan pour sécuriser les opérations commerciales et les investissements de nos clients sur les scènes nationale et internationale. Sa pratique se concentre sur le droit international des affaires, le droit des investissements et la gestion des contentieux. Il est particulièrement spécialisé dans la rédaction, l'analyse et la négociation de contrats complexes. Nonce est titulaire d'une Maîtrise en droit international de l'Université de Montréal (Canada) et d'une licence en Droit économique et social de l'Université de Kinshasa.",
    email: "n.dede@orionconseil.com",
    expertise:
      "Droit international des affaires, Droit des investissements, Rédaction contractuelle",
    education:
      "Maîtrise en droit international (Université de Montréal), Licence en Droit économique et social (Université de Kinshasa)",
    university: "Université de Montréal (Maîtrise), Université de Kinshasa (Licence)",
    country: "Canada, République Démocratique du Congo",
    experience:
      "Plus de 4 ans d'expérience en droit international des affaires",
    slug: "nonce-dede",
  },

  // Nos équipes supports
  {
    name: "Gracia Matala",
    title: "",
    subtitle: "Associate Consultant, Énergie",
    image: "/NotreEquipe/GraciaMatala.png",
    briefDescription:
      "Gracia Matala apporte au sein d'Orion Conseil une expertise pointue dans le secteur des énergies. En tant qu'Analyste, il soutient l'équipe sur des mandats complexes liés aux industries du pétrole, gaz et des énergies renouvelables.",
    description:
      "Gracia Matala apporte au sein d'Orion Conseil une expertise pointue dans le secteur des énergies. En tant qu'Analyste, il soutient l'équipe sur des mandats complexes liés aux industries du pétrole, gaz et des énergies renouvelables. Œuvrant également dans le secteur bancaire, Il contribue activement à l'analyse des marchés, à la veille réglementaire et à la recherche de données stratégiques pour nos clients sur ces deux secteurs. Sa rigueur et sa connaissance approfondie des enjeux énergétiques et une connaissance fine des opérations financières et de la relation client du secteur bancaire sont des atouts précieux pour nos missions. Gracia est titulaire d'une Licence en pétrole, gaz et énergies renouvelables.",
    email: "g.matala@orionconseil.com",
    expertise:
      "Secteur des énergies renouvelables et non renouvelables, Analyse de marché",
    education: "Licence en pétrole, gaz et énergies renouvelables",
    university: "Université de Kinshasa",
    country: "République Démocratique du Congo",
    experience: "Analyste du secteur énergétique et financier",
    slug: "gracia-matala",
  },
  {
    name: "Renedi Mubutshu",
    title: "",
    subtitle: "Associate Consultant, Analyse Économique",
    image: "/NotreEquipe/RenediMubutshu.jpeg",
    briefDescription:
      "Renedi Mubutshu est une Analyste qui renforce les capacités d'analyse économique et quantitative d'Orion Conseil. Elle joue un rôle clé dans le soutien des missions en fournissant des analyses rigoureuses qui éclairent les décisions stratégiques de nos clients.",
    description:
      "Renedi Mubutshu est une Analyste qui renforce les capacités d'analyse économique et quantitative d'Orion Conseil. Elle joue un rôle clé dans le soutien des missions en fournissant des analyses rigoureuses qui éclairent les décisions stratégiques de nos clients. Elle participe activement à la recherche, à la modélisation de données et à la préparation de rapports d'analyse de marché. Son esprit analytique et sa capacité à synthétiser des informations complexes sont essentiels pour évaluer la viabilité des projets et identifier les opportunités de croissance. Renedi est titulaire d'une licence en économie de l'Université de Kinshasa (RDC), ce qui ancre son travail dans des fondements théoriques et pratiques solides.",
    email: "renedimubutshu@gmail.com",
    expertise: "Secteur financier, économique et bancaire",
    education:
      "Diplôme d'ingénieur en pétrole, gaz et énergies renouvelables (Université de Kinshasa)",
    university: "Université de Kinshasa",
    country: "République Démocratique du Congo",
    experience: "Analyste financier",
    slug: "renedi-mubutshu",
  },
  {
    name: "Victoria Nkarha",
    title: "",
    subtitle: "Associate Consultant, Communication & Stratégie de Marque",
    image: "/NotreEquipe/VictoriaNkhara.jpeg",
    briefDescription:
      "Victoria Nkarha pilote la stratégie de communication digitale et de marque au sein d'Orion Conseil. En tant qu'Analyste, elle se concentre sur la construction et la protection de l'identité numérique des organisations.",
    description:
      "Victoria Nkarha pilote la stratégie de communication digitale et de marque au sein d'Orion Conseil. En tant qu'Analyste, elle se concentre sur la construction et la protection de l'identité numérique des organisations. Elle conçoit et déploie des stratégies sur mesure pour renforcer l'image de marque (branding), optimiser la visibilité en ligne et gérer l'e-réputation afin d'assurer une présence digitale cohérente et impactante. Passionnée par l'écosystème digital, Victoria excelle dans l'art de traduire les valeurs d'une entreprise en récits engageants et en expériences mémorables pour les audiences cibles. Sa double compétence en gestion et en communication lui permet d'aligner chaque action digitale sur les objectifs stratégiques et commerciaux de nos clients, transformant la présence en ligne en un véritable levier de croissance. Victoria est titulaire d'un Master en gestion des entreprises de l'Université Pédagogique Nationale (UPN) en RDC, une formation qui ancre son approche créative dans une solide compréhension des enjeux business.",
    email: "v.nkarha@orionconseil.com",
    expertise: "Communication digitale, Branding, E-réputation",
    education:
      "Master en gestion des entreprises (Université Pédagogique Nationale)",
    university: "Université Pédagogique Nationale",
    country: "République Démocratique du Congo",
    experience:
      "Analyste en communication digitale et stratégie de marque",
    slug: "victoria-nkarha",
  },
];
