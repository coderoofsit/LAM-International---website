import project1 from "../assets/project-1.jpg";
import project2 from "../assets/project-2.jpg";
import project3 from "../assets/project-3.jpg";
import project4 from "../assets/project-4.jpg";
import project5 from "../assets/project-5.jpg";
import project6 from "../assets/project-6.jpg";
import hero1 from "../assets/hero-1.jpg";
import hero2 from "../assets/hero-2.jpg";
import hero3 from "../assets/hero-3.jpg";
import product1 from "../assets/product-1.jpg";
import product2 from "../assets/product-2.jpg";
import product3 from "../assets/product-3.jpg";
import product4 from "../assets/product-4.jpg";

export type Project = {
  id: string;
  title: string;
  location: string;
  description: string;
  detail: string;
  cover: string;
  images: string[];
  tall?: boolean;
};

/** Curated Unsplash interiors for a richer 24-project gallery */
const remote = [
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1600047509807-ba8f99d2cd27?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1615529182904-14819c35d7a0?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=1400&q=80",
] as const;

function gallery(cover: string, extras: string[]): string[] {
  return [cover, ...extras.filter((img) => img !== cover)].slice(0, 5);
}

export const projects: Project[] = [
  {
    id: "atelier-boutique",
    title: "Atelier Boutique Flagship",
    location: "Dubai Mall, Dubai",
    description: "Precision track lighting that elevates merchandise and brand storytelling.",
    detail:
      "A layered retail scheme combining adjustable track spots and soft ambient wash to guide the customer journey while highlighting product texture and color accuracy.",
    cover: project3,
    images: gallery(project3, [remote[15], product2, hero3, remote[16]]),
    tall: true,
  },
  {
    id: "grand-ballroom",
    title: "The Grand Ballroom",
    location: "Emirates Palace Hotel",
    description: "Chandelier and cove lighting for unforgettable evening atmospheres.",
    detail:
      "Warm hierarchical lighting for banquets and galas — decorative statement fixtures paired with discreet architectural accents for flexible event scenes.",
    cover: project2,
    images: gallery(project2, [remote[11], remote[12], hero2, project6]),
  },
  {
    id: "skyline-hq",
    title: "Skyline Corporate HQ",
    location: "Business Bay, Dubai",
    description: "High-performance office lighting balanced for focus and comfort.",
    detail:
      "Glare-controlled downlights and linear systems calibrated for long workdays, with accent zones that reinforce brand presence in lobbies and collaboration hubs.",
    cover: project4,
    images: gallery(project4, [remote[9], remote[10], hero1, product1]),
  },
  {
    id: "marina-residence",
    title: "Marina Private Residence",
    location: "Dubai Marina",
    description: "Warm residential layers that make contemporary living feel intimate.",
    detail:
      "Recessed, wall-wash, and decorative layers choreographed for day-to-night living — from kitchen task light to lounge ambience.",
    cover: project1,
    images: gallery(project1, [remote[0], remote[1], project5, product3]),
    tall: true,
  },
  {
    id: "villa-ascension",
    title: "Villa Ascension",
    location: "Palm Jumeirah",
    description: "Sculptural staircase lighting that turns architecture into drama.",
    detail:
      "Linear and accent lighting along a double-height stair volume, revealing material depth while providing safe, elegant circulation light.",
    cover: project5,
    images: gallery(project5, [remote[19], remote[20], project1, hero3]),
  },
  {
    id: "spa-sanctuary",
    title: "Spa Sanctuary Retreat",
    location: "Al Ain Resort",
    description: "Soft hospitality lighting crafted for calm and recovery.",
    detail:
      "Low-glare warm tones, indirect washes, and subtle highlights create a restorative spa atmosphere without visual noise.",
    cover: project6,
    images: gallery(project6, [remote[21], remote[5], project2, product4]),
  },
  {
    id: "lobby-lumina",
    title: "Lobby Lumina",
    location: "Downtown Office Tower",
    description: "A luminous arrival experience for a landmark commercial lobby.",
    detail:
      "Feature pendants and wall grazing establish first impressions, while discreet ambient systems keep circulation clear and refined.",
    cover: hero2,
    images: gallery(hero2, [remote[17], remote[18], project4, product2]),
    tall: true,
  },
  {
    id: "concept-retail",
    title: "Concept Retail Store",
    location: "City Walk",
    description: "Flexible accent lighting for seasonal displays and brand moments.",
    detail:
      "Track and gimbal systems give merchandising teams complete aiming control for campaigns, windows, and feature walls.",
    cover: hero3,
    images: gallery(hero3, [remote[16], project3, product2, product3]),
  },
  {
    id: "mall-atrium",
    title: "Galleria Atrium Lights",
    location: "Mall of the Emirates",
    description: "Large-volume lighting that keeps atriums bright and inviting.",
    detail:
      "High-output architectural fixtures and decorative clusters balance daylight with evening shopping ambience across multi-level voids.",
    cover: remote[15],
    images: gallery(remote[15], [hero1, project3, remote[16], product1]),
  },
  {
    id: "chef-table",
    title: "Chef’s Table Restaurant",
    location: "DIFC",
    description: "Dining light tuned for cuisine, conversation, and atmosphere.",
    detail:
      "Focused table accents, warm perimeter washes, and controlled spill create intimacy without compromising service visibility.",
    cover: remote[13],
    images: gallery(remote[13], [remote[14], project2, product3, hero2]),
    tall: true,
  },
  {
    id: "cafe-noir",
    title: "Café Noir",
    location: "Jumeirah Beach Road",
    description: "Intimate café lighting with soft contrast and inviting warmth.",
    detail:
      "Decorative pendants and subtle wall light define seating clusters while keeping the counter and pastry display crisp.",
    cover: remote[14],
    images: gallery(remote[14], [remote[13], project6, product4, hero3]),
  },
  {
    id: "horizon-villa",
    title: "Horizon Luxury Villa",
    location: "Arabian Ranches",
    description: "Whole-home lighting design for modern villa living.",
    detail:
      "From façade grazers to bedroom scenes, every zone is tuned for comfort, architecture, and evening outdoor living.",
    cover: remote[19],
    images: gallery(remote[19], [remote[3], project5, project1, remote[20]]),
  },
  {
    id: "studio-loft",
    title: "Studio Loft Interiors",
    location: "Al Quoz",
    description: "Clean architectural light for open-plan creative living.",
    detail:
      "Track and recessed systems keep ceilings calm while giving flexible aiming for art, desks, and social zones.",
    cover: remote[0],
    images: gallery(remote[0], [remote[4], product1, project1, remote[1]]),
    tall: true,
  },
  {
    id: "boardroom-one",
    title: "Boardroom One",
    location: "Sheikh Zayed Road",
    description: "Executive meeting light with clarity and quiet prestige.",
    detail:
      "Even table illumination, wall wash for presentations, and dimming scenes for video conferences and evening briefings.",
    cover: remote[9],
    images: gallery(remote[9], [remote[10], project4, product1, hero1]),
  },
  {
    id: "showroom-line",
    title: "Showroom Line",
    location: "Industrial City",
    description: "Product-forward lighting for a premium brand showroom.",
    detail:
      "High-CRI accent and wash systems present finishes accurately while creating a gallery-like path through collections.",
    cover: remote[22],
    images: gallery(remote[22], [product2, product3, product4, project3]),
  },
  {
    id: "hotel-corridor",
    title: "Hotel Corridor Suite",
    location: "Abu Dhabi Corniche",
    description: "Guiding hospitality light with rhythm and warmth.",
    detail:
      "Wall-mounted accents and soft ceiling glow create wayfinding clarity and a luxurious overnight guest experience.",
    cover: remote[11],
    images: gallery(remote[11], [remote[12], project2, project6, product4]),
  },
  {
    id: "penthouse-glow",
    title: "Penthouse Glow",
    location: "Downtown Dubai",
    description: "City-view penthouse lighting with refined evening scenes.",
    detail:
      "Indirect coves, art accents, and living-area layers preserve views while delivering cinematic night-time ambience.",
    cover: remote[2],
    images: gallery(remote[2], [remote[1], project1, hero2, remote[23]]),
    tall: true,
  },
  {
    id: "retail-arcade",
    title: "Retail Arcade",
    location: "Bluewaters Island",
    description: "Continuous shopping light that feels bright yet comfortable.",
    detail:
      "Uniform ambient levels with punchy accents on windows and feature displays keep the arcade lively from day to night.",
    cover: remote[16],
    images: gallery(remote[16], [project3, hero3, product2, remote[15]]),
  },
  {
    id: "museum-wall",
    title: "Gallery Wall Wash",
    location: "Saadiyat Cultural District",
    description: "Even vertical light for art and architectural surfaces.",
    detail:
      "Asymmetric wall washers reveal texture and artwork with controlled glare and excellent color rendering.",
    cover: product4,
    images: gallery(product4, [remote[23], project5, hero3, product3]),
  },
  {
    id: "workspace-garden",
    title: "Workspace Garden Floors",
    location: "Dubai Internet City",
    description: "Biophilic office lighting that supports wellbeing and focus.",
    detail:
      "Tunable white options and soft indirect systems complement planted atriums and open collaboration neighborhoods.",
    cover: remote[10],
    images: gallery(remote[10], [remote[9], project4, product1, hero1]),
  },
  {
    id: "suite-nocturne",
    title: "Suite Nocturne",
    location: "Luxury Hotel Residences",
    description: "Guest-suite scenes from arrival to late-night reading.",
    detail:
      "Bedside accents, wardrobe task light, and bathroom layers create a personal luxury narrative for every stay.",
    cover: remote[21],
    images: gallery(remote[21], [remote[12], project6, project2, product3]),
    tall: true,
  },
  {
    id: "facade-ribbon",
    title: "Facade Ribbon",
    location: "Commercial Boulevard",
    description: "Architectural façade lighting that defines the night skyline.",
    detail:
      "Linear grazers and discreet flood accents articulate the building’s geometry without light spill or glare.",
    cover: remote[17],
    images: gallery(remote[17], [remote[18], hero2, project4, remote[7]]),
  },
  {
    id: "dining-court",
    title: "Dining Court",
    location: "Lifestyle Hub",
    description: "Shared dining lighting that balances energy and intimacy.",
    detail:
      "Decorative clusters over communal tables sit within a calm architectural envelope for all-day hospitality use.",
    cover: remote[7],
    images: gallery(remote[7], [remote[13], remote[14], project2, product4]),
  },
  {
    id: "atelier-home",
    title: "Atelier Home Studio",
    location: "Private Collection, Dubai",
    description: "Decorative lighting installation as the heart of the home.",
    detail:
      "A signature fixture composition paired with discreet architectural support light — artistry first, function always.",
    cover: remote[23],
    images: gallery(remote[23], [remote[5], project5, hero2, product3]),
    tall: true,
  },
];
