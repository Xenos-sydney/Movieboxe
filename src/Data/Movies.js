import {
  Home, Tv, Film, Sparkles, TrendingUp
} from "lucide-react";

export const NAV = [
  { icon: Home, label: "Home", active: true },
  { icon: Tv, label: "TV Show" },
  { icon: Film, label: "Movie" },
  { icon: Sparkles, label: "Animation" },
  { icon: TrendingUp, label: "Most Watched" },
];

export const HERO_SLIDES = [
  { 
    title: "Ballerina", 
    year: "2025", 
    genre: "Action", 
    banner: "public/Banners/Ballerina.jpg" 
  },
  { 
    title: "Silent Horizon", 
    year: "2026", 
    genre: "Sci-Fi", 
    banner: "/images/hero/silent-horizon.jpg" 
  },
  { 
    title: "I Know What You Did Last Summer", 
    year: "2025", 
    genre: "Thriller", 
    banner: "/images/hero/i-know-what-you-did-last-summer.jpg" 
  },
];

export const SERIES = [
  { title: "Avatar: The Last Airbender", tag: "S2", grad: ["#3a5a7a", "#0f1b26"] },
  { title: "House of the Dragon", tag: "HBO", grad: ["#4a3020", "#170f08"] },
  { title: "Agent Kim Reactivated", tag: "EN", grad: ["#1c1c1c", "#050505"] },
  { title: "Kwa Baba", tag: "New", grad: ["#5a4028", "#1a1208"] },
  { title: "Love Island USA", tag: "EN", grad: ["#7a2a5a", "#1e0a17"] },
  { title: "Human Vapor", tag: "EN", grad: ["#25405a", "#08131e"] },
  { title: "Legally Blonde: Elle", tag: "EN", grad: ["#7a1a4a", "#1e0512"] },
];