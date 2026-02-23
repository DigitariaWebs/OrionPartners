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
  zoom?: number; // Zoom factor for the image, e.g., 1.1 for 110%
  position?: string; // Object position for the image, e.g., "center 0%"
};

export type TranslationFunction = (key: string, params?: Record<string, string | number>) => string;

// Base team member data (non-translatable fields)
const baseTeamMembers = [
  {
    name: "Ferdinand Ntambwe, M.A.",
    title: "M.A.",
    subtitle: "Associé, Croissance & Marchés",
    image: "/NotreEquipe/FerdinandNtambwe.jpg",
    email: "f.ntambwe@orionconseil.com",
    university: "Université Ibn Khaldoun (Licence), Université Laval (Maîtrise)",
    country: "Tunisie, Canada",
    slug: "ferdinand-ntambwe",
    zoom: 1.5,
    position: "center -10%",
  },
  {
    name: "Gisèle Kabwende",
    title: "Avocate",
    subtitle: "Associée, Directrice du pôle Juridique & Fiscal",
    image: "/NotreEquipe/GiseleKabwende.png",
    email: "g.kabwende@orionconseil.com",
    university: "Université de Kinshasa",
    country: "République Démocratique du Congo",
    slug: "gisele-kabwende",
    zoom: 1,
    position: "center 30%",
  },
  {
    name: "Jean Claude Gersone",
    title: "",
    subtitle: "Associé, Performance & Opérations",
    image: "/NotreEquipe/JeanClaudeGersone.png",
    email: "j.gersone@orionconseil.com",
    university: "Université Pédagogique Nationale (Licence), ENA (Maîtrise)",
    country: "République Démocratique du Congo, France",
    slug: "jean-claude-gersone",
    zoom: 1.5,
    position: "center -10%",
  },
  {
    name: "Christian Mukeba",
    title: "",
    subtitle: "Consultant Senior – Énergie & Gouvernance",
    image: "/NotreEquipe/ChristiaMukeba.png",
    email: "khrismukeba@outlook.fr",
    university: "Université de Kinshasa",
    country: "République Démocratique du Congo",
    slug: "christian-mukeba",
    zoom: 1,
    position: "center 0%",
  },
  {
    name: "Nancy Besoke, MBA",
    title: "MBA",
    subtitle: "Consultante Senior – Finance d'Entreprise",
    image: "/NotreEquipe/NancyBesoke.jpeg",
    email: "besokenhancy@gmail.com",
    university: "Université d'Ottawa",
    country: "Canada",
    slug: "nancy-besoke",
    zoom: 1.5,
    position: "center -10%",
  },
  {
    name: "Philippe Emmanuel Amvenebe",
    title: "",
    subtitle: "Consultant Senior en Développement d'Affaires",
    image: "/NotreEquipe/Philippes.png",
    email: "philippeae@outlook.com",
    university: "Université Laval",
    country: "Canada",
    slug: "philippe-emmanuel-amvenebe",
    zoom: 1,
    position: "center 20%",
  },
  {
    name: "Christian Maheshe",
    title: "",
    subtitle: "Consultant, Production et Santé agropastorale",
    image: "/NotreEquipe/ChristianMaheshe.jpeg",
    email: "chrismaheshe12@gmail.com",
    university: "Université de Kinshasa",
    country: "République Démocratique du Congo",
    slug: "christian-maheshe",
    zoom: 1.4,
    position: "center -60%",
  },
  {
    name: "Corine Kasongo",
    title: "",
    subtitle: "Consultante, Stratégie Digitale",
    image: "/NotreEquipe/CorineKasongo.png",
    email: "kasongocorine@gmail.com",
    university: "Université de Kinshasa",
    country: "République Démocratique du Congo",
    slug: "corine-kasongo",
    zoom: 1.2,
    position: "center -10%",
  },
  {
    name: "Edith Elda Nsenkey",
    title: "",
    subtitle: "Consultante, Secteur Bancaire",
    image: "/NotreEquipe/EldatEdithNsenkey.png",
    email: "nsenkeymayel@gmail.com",
    university: "Université de Kinshasa",
    country: "République Démocratique du Congo",
    slug: "edith-elda-nsenkey",
    zoom: 1,
    position: "center 0%",
  },
  {
    name: "Nonce Dede, LL.M.",
    title: "LL.M.",
    subtitle: "Consultant Senior, juridique",
    image: "/NotreEquipe/NonceDede.jpg",
    email: "n.dede@orionconseil.com",
    university: "Université de Montréal (Maîtrise), Université de Kinshasa (Licence)",
    country: "Canada, République Démocratique du Congo",
    slug: "nonce-dede",
    zoom: 1.6,
    position: "center -20%",
  },
  {
    name: "Gracia Matala",
    title: "",
    subtitle: "Associate Consultant, Énergie",
    image: "/NotreEquipe/GraciaMatala.png",
    email: "g.matala@orionconseil.com",
    university: "Université de Kinshasa",
    country: "République Démocratique du Congo",
    slug: "gracia-matala",
    zoom: 1.2,
    position: "center -30%",
  },
  {
    name: "Renedi Mubutshu",
    title: "",
    subtitle: "Associate Consultant, Analyse Économique",
    image: "/NotreEquipe/RenediMubutshu.jpeg",
    email: "renedimubutshu@gmail.com",
    university: "Université de Kinshasa",
    country: "République Démocratique du Congo",
    slug: "renedi-mubutshu",
    zoom: 1.5,
    position: "center -10%",
  },
  {
    name: "Victoria Nkarha",
    title: "",
    subtitle: "Associate Consultant, Communication & Stratégie de Marque",
    image: "/NotreEquipe/VictoriaNkhara.jpeg",
    email: "v.nkarha@orionconseil.com",
    university: "Université Pédagogique Nationale",
    country: "République Démocratique du Congo",
    slug: "victoria-nkarha",
    zoom: 1.4,
    position: "center 20%",
  },
  {
    name: "Osmarie Mabanga",
    title: "",
    subtitle: "Associate Consultant, comptabilité et intelligence d'affaires",
    image: "/NotreEquipe/OsmarieMabanga.jpg",
    email: "contact@orionconseil.com",
    university: "Université Protestante au Congo",
    country: "République Démocratique du Congo",
    slug: "osmarie-mabanga",
    zoom: 1.2,
    position: "center 10%",
  },
];

export function getTeamMembers(t: TranslationFunction): TeamMember[] {
  return baseTeamMembers.map(member => ({
    name: member.name,
    title: t(`notreEquipe.teamMembers.profiles.${member.slug}.title`),
    subtitle: t(`notreEquipe.teamMembers.profiles.${member.slug}.subtitle`),
    image: member.image,
    briefDescription: t(`notreEquipe.teamMembers.profiles.${member.slug}.briefDescription`),
    description: t(`notreEquipe.teamMembers.profiles.${member.slug}.description`),
    email: member.email,
    expertise: t(`notreEquipe.teamMembers.profiles.${member.slug}.expertise`),
    education: t(`notreEquipe.teamMembers.profiles.${member.slug}.education`),
    university: t(`notreEquipe.teamMembers.profiles.${member.slug}.university`),
    country: t(`notreEquipe.teamMembers.profiles.${member.slug}.country`),
    experience: t(`notreEquipe.teamMembers.profiles.${member.slug}.experience`),
    slug: member.slug,
    zoom: member.zoom,
    position: member.position,
  }));
}

// For backward compatibility, export a function that will be called with translations
export const teamMembers = (t: TranslationFunction) => getTeamMembers(t);
