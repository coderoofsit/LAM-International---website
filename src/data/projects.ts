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

const doctorMModules = import.meta.glob<string>(
  "../assets/Doctor M Optical & Subnglasses Store , Dubai Mall/Photos/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  { eager: true, import: "default" },
);

const littleThingsModules = import.meta.glob<string>(
  "../assets/The Little Things Toys Store, YAS Mall/The Little Things Toys Store, YAS Mall/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  { eager: true, import: "default" },
);

function imagesFromGlob(modules: Record<string, string>): string[] {
  return Object.keys(modules)
    .sort()
    .map((key) => modules[key]);
}

const doctorMImages = imagesFromGlob(doctorMModules);
const littleThingsImages = imagesFromGlob(littleThingsModules);

export const projects: Project[] = [
  {
    id: "doctor-m-dubai-mall",
    title: "Doctor M Optical & Sunglasses Store",
    location: "Dubai Mall, Dubai",
    description:
      "Retail lighting designed to showcase eyewear with clarity, contrast, and a refined boutique atmosphere.",
    detail:
      "A precision retail lighting scheme for Doctor M at Dubai Mall — accent and ambient layers that highlight frames, glass displays, and brand detailing while keeping the shopping experience bright and inviting.",
    cover: doctorMImages[0],
    images: doctorMImages,
  },
  {
    id: "little-things-yas-mall",
    title: "The Little Things Toys Store",
    location: "YAS Mall, Abu Dhabi",
    description:
      "Playful, high-clarity lighting that brings colour, texture, and product displays to life.",
    detail:
      "Lighting for The Little Things at YAS Mall focuses on vibrant product presentation — balanced ambient light with focused accents so toys, displays, and feature zones feel lively without glare.",
    cover: littleThingsImages[0],
    images: littleThingsImages,
    tall: true,
  },
];
