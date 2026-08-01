import {
  retailLuxury01,
  retailLuxury02,
  retailLuxury03,
  retailLuxury04,
  retailLuxury05,
  retailLuxury06,
  hospitalityLighting01,
  hospitalityLighting02,
  commercialLighting01,
  commercialLighting02,
  commercialLighting03,
  genericResidential01,
  genericCommercial01,
  genericRetail01,
  genericRetail02,
  lightingDesign01,
  lightingDesign02,
  pendantLighting01,
  pendantLighting02,
  pendantLighting03,
  pendantLighting04,
  pendantLighting05,
  linearLights01,
  linearLights02,
  linearLights03,
  linearLights04,
  linearLights05,
  wallWashers01,
  wallWashers02,
  wallWashers03,
  trackLights01,
  trackLights02,
  trackLights03,
  downlights01,
  downlights02,
  spotlights01,
  spotlights02,
  spotlights03,
  homeHero01,
  homeHero02,
  homeHero03,
} from "../assets/media";

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
    cover: retailLuxury01,
    images: gallery(retailLuxury01, [trackLights01, retailLuxury02, spotlights01, genericRetail01]),
    tall: true,
  },
  {
    id: "grand-ballroom",
    title: "The Grand Ballroom",
    location: "Emirates Palace Hotel",
    description: "Chandelier and cove lighting for unforgettable evening atmospheres.",
    detail:
      "Warm hierarchical lighting for banquets and galas — decorative statement fixtures paired with discreet architectural accents for flexible event scenes.",
    cover: hospitalityLighting01,
    images: gallery(hospitalityLighting01, [
      pendantLighting01,
      hospitalityLighting02,
      linearLights01,
      pendantLighting02,
    ]),
  },
  {
    id: "skyline-hq",
    title: "Skyline Corporate HQ",
    location: "Business Bay, Dubai",
    description: "High-performance office lighting balanced for focus and comfort.",
    detail:
      "Glare-controlled downlights and linear systems calibrated for long workdays, with accent zones that reinforce brand presence in lobbies and collaboration hubs.",
    cover: commercialLighting01,
    images: gallery(commercialLighting01, [
      downlights01,
      linearLights02,
      commercialLighting02,
      genericCommercial01,
    ]),
  },
  {
    id: "marina-residence",
    title: "Marina Private Residence",
    location: "Dubai Marina",
    description: "Warm residential layers that make contemporary living feel intimate.",
    detail:
      "Recessed, wall-wash, and decorative layers choreographed for day-to-night living — from kitchen task light to lounge ambience.",
    cover: genericResidential01,
    images: gallery(genericResidential01, [
      pendantLighting03,
      downlights02,
      wallWashers01,
      homeHero01,
    ]),
    tall: true,
  },
  {
    id: "villa-ascension",
    title: "Villa Ascension",
    location: "Palm Jumeirah",
    description: "Sculptural staircase lighting that turns architecture into drama.",
    detail:
      "Linear and accent lighting along a double-height stair volume, revealing material depth while providing safe, elegant circulation light.",
    cover: linearLights03,
    images: gallery(linearLights03, [
      pendantLighting04,
      linearLights04,
      spotlights02,
      lightingDesign01,
    ]),
  },
  {
    id: "spa-sanctuary",
    title: "Spa Sanctuary Retreat",
    location: "Al Ain Resort",
    description: "Soft hospitality lighting crafted for calm and recovery.",
    detail:
      "Low-glare warm tones, indirect washes, and subtle highlights create a restorative spa atmosphere without visual noise.",
    cover: hospitalityLighting02,
    images: gallery(hospitalityLighting02, [
      wallWashers02,
      linearLights05,
      pendantLighting05,
      hospitalityLighting01,
    ]),
  },
  {
    id: "lobby-lumina",
    title: "Lobby Lumina",
    location: "Downtown Office Tower",
    description: "A luminous arrival experience for a landmark commercial lobby.",
    detail:
      "Feature pendants and wall grazing establish first impressions, while discreet ambient systems keep circulation clear and refined.",
    cover: commercialLighting03,
    images: gallery(commercialLighting03, [
      pendantLighting01,
      wallWashers03,
      commercialLighting01,
      homeHero02,
    ]),
    tall: true,
  },
  {
    id: "concept-retail",
    title: "Concept Retail Store",
    location: "City Walk",
    description: "Flexible accent lighting for seasonal displays and brand moments.",
    detail:
      "Track and spotlight systems give merchandising teams complete aiming control for campaigns, windows, and feature walls.",
    cover: retailLuxury03,
    images: gallery(retailLuxury03, [trackLights02, spotlights03, retailLuxury04, genericRetail02]),
  },
  {
    id: "mall-atrium",
    title: "Galleria Atrium Lights",
    location: "Mall of the Emirates",
    description: "Large-volume lighting that keeps atriums bright and inviting.",
    detail:
      "High-output architectural fixtures and decorative clusters balance daylight with evening shopping ambience across multi-level voids.",
    cover: retailLuxury05,
    images: gallery(retailLuxury05, [trackLights03, retailLuxury06, downlights01, homeHero03]),
  },
  {
    id: "chef-table",
    title: "Chef’s Table Restaurant",
    location: "DIFC",
    description: "Dining light tuned for cuisine, conversation, and atmosphere.",
    detail:
      "Focused table accents, warm perimeter washes, and controlled spill create intimacy without compromising service visibility.",
    cover: pendantLighting02,
    images: gallery(pendantLighting02, [
      hospitalityLighting01,
      spotlights01,
      pendantLighting01,
      wallWashers01,
    ]),
    tall: true,
  },
  {
    id: "cafe-noir",
    title: "Café Noir",
    location: "Jumeirah Beach Road",
    description: "Intimate café lighting with soft contrast and inviting warmth.",
    detail:
      "Decorative pendants and subtle wall light define seating clusters while keeping the counter and pastry display crisp.",
    cover: pendantLighting05,
    images: gallery(pendantLighting05, [
      hospitalityLighting02,
      spotlights02,
      wallWashers02,
      retailLuxury02,
    ]),
  },
  {
    id: "horizon-villa",
    title: "Horizon Luxury Villa",
    location: "Arabian Ranches",
    description: "Whole-home lighting design for modern villa living.",
    detail:
      "From façade grazers to bedroom scenes, every zone is tuned for comfort, architecture, and evening outdoor living.",
    cover: lightingDesign01,
    images: gallery(lightingDesign01, [
      genericResidential01,
      pendantLighting03,
      linearLights01,
      lightingDesign02,
    ]),
  },
  {
    id: "studio-loft",
    title: "Studio Loft Interiors",
    location: "Al Quoz",
    description: "Clean architectural light for open-plan creative living.",
    detail:
      "Track and recessed systems keep ceilings calm while giving flexible aiming for art, desks, and social zones.",
    cover: trackLights01,
    images: gallery(trackLights01, [downlights02, linearLights02, spotlights01, homeHero01]),
    tall: true,
  },
  {
    id: "boardroom-one",
    title: "Boardroom One",
    location: "Sheikh Zayed Road",
    description: "Executive meeting light with clarity and quiet prestige.",
    detail:
      "Even table illumination, wall wash for presentations, and dimming scenes for video conferences and evening briefings.",
    cover: commercialLighting02,
    images: gallery(commercialLighting02, [
      downlights01,
      wallWashers01,
      linearLights03,
      genericCommercial01,
    ]),
  },
  {
    id: "showroom-line",
    title: "Showroom Line",
    location: "Industrial City",
    description: "Product-forward lighting for a premium brand showroom.",
    detail:
      "High-CRI accent and wash systems present finishes accurately while creating a gallery-like path through collections.",
    cover: retailLuxury04,
    images: gallery(retailLuxury04, [trackLights02, spotlights02, wallWashers03, retailLuxury01]),
  },
  {
    id: "hotel-corridor",
    title: "Hotel Corridor Suite",
    location: "Abu Dhabi Corniche",
    description: "Guiding hospitality light with rhythm and warmth.",
    detail:
      "Wall-mounted accents and soft ceiling glow create wayfinding clarity and a luxurious overnight guest experience.",
    cover: wallWashers02,
    images: gallery(wallWashers02, [
      hospitalityLighting02,
      linearLights04,
      wallWashers01,
      pendantLighting04,
    ]),
  },
  {
    id: "penthouse-glow",
    title: "Penthouse Glow",
    location: "Downtown Dubai",
    description: "City-view penthouse lighting with refined evening scenes.",
    detail:
      "Indirect coves, art accents, and living-area layers preserve views while delivering cinematic night-time ambience.",
    cover: linearLights05,
    images: gallery(linearLights05, [
      pendantLighting03,
      spotlights03,
      genericResidential01,
      lightingDesign01,
    ]),
    tall: true,
  },
  {
    id: "retail-arcade",
    title: "Retail Arcade",
    location: "Bluewaters Island",
    description: "Continuous shopping light that feels bright yet comfortable.",
    detail:
      "Uniform ambient levels with punchy accents on windows and feature displays keep the arcade lively from day to night.",
    cover: genericRetail02,
    images: gallery(genericRetail02, [retailLuxury06, trackLights03, spotlights01, retailLuxury03]),
  },
  {
    id: "museum-wall",
    title: "Gallery Wall Wash",
    location: "Saadiyat Cultural District",
    description: "Even vertical light for art and architectural surfaces.",
    detail:
      "Asymmetric wall washers reveal texture and artwork with controlled glare and excellent color rendering.",
    cover: wallWashers01,
    images: gallery(wallWashers01, [wallWashers03, spotlights02, lightingDesign02, linearLights01]),
  },
  {
    id: "workspace-garden",
    title: "Workspace Garden Floors",
    location: "Dubai Internet City",
    description: "Biophilic office lighting that supports wellbeing and focus.",
    detail:
      "Tunable white options and soft indirect systems complement planted atriums and open collaboration neighborhoods.",
    cover: genericCommercial01,
    images: gallery(genericCommercial01, [
      commercialLighting01,
      linearLights02,
      downlights02,
      commercialLighting03,
    ]),
  },
  {
    id: "suite-nocturne",
    title: "Suite Nocturne",
    location: "Luxury Hotel Residences",
    description: "Guest-suite scenes from arrival to late-night reading.",
    detail:
      "Bedside accents, wardrobe task light, and bathroom layers create a personal luxury narrative for every stay.",
    cover: pendantLighting04,
    images: gallery(pendantLighting04, [
      hospitalityLighting01,
      spotlights03,
      wallWashers02,
      pendantLighting02,
    ]),
    tall: true,
  },
  {
    id: "facade-ribbon",
    title: "Facade Ribbon",
    location: "Commercial Boulevard",
    description: "Architectural façade lighting that defines the night skyline.",
    detail:
      "Linear grazers and discreet flood accents articulate the building’s geometry without light spill or glare.",
    cover: lightingDesign02,
    images: gallery(lightingDesign02, [
      wallWashers03,
      linearLights03,
      spotlights01,
      commercialLighting02,
    ]),
  },
  {
    id: "dining-court",
    title: "Dining Court",
    location: "Lifestyle Hub",
    description: "Shared dining lighting that balances energy and intimacy.",
    detail:
      "Decorative clusters over communal tables sit within a calm architectural envelope for all-day hospitality use.",
    cover: pendantLighting01,
    images: gallery(pendantLighting01, [
      hospitalityLighting02,
      pendantLighting05,
      retailLuxury05,
      linearLights04,
    ]),
  },
  {
    id: "atelier-home",
    title: "Atelier Home Studio",
    location: "Private Collection, Dubai",
    description: "Decorative lighting installation as the heart of the home.",
    detail:
      "A signature fixture composition paired with discreet architectural support light — artistry first, function always.",
    cover: homeHero02,
    images: gallery(homeHero02, [
      pendantLighting03,
      lightingDesign01,
      genericResidential01,
      spotlights02,
    ]),
    tall: true,
  },
];
