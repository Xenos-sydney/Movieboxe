"use client";

import { useState, useEffect, useRef } from "react";
import { Film, ChevronLeft, ChevronRight } from "lucide-react";
import { HERO_SLIDES } from "../Data/Movies";

export default function Hero() {
  const [slide, setSlide] = useState(0);
  const timer = useRef(null);

  useEffect(() => {
    timer.current = setInterval(() => {
      setSlide((s) => (s + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer.current);
  }, []);

  const current = HERO_SLIDES[slide];

  return (
    <section className="relative rounded-2xl overflow-hidden h-[220px] md:h-[300px] mb-6">
      {/* Banner image, cross-fades between slides */}
      {HERO_SLIDES.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
            i === slide ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${s.Banners})` }}
        />
      ))}

      {/* Dark gradient overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
      <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[radial-gradient(circle_at_75%_30%,rgba(255,255,255,0.25),transparent_60%)]" />

      <button
        onClick={() => setSlide((s) => (s - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/40 border border-white/15 flex items-center justify-center hover:bg-black/60 z-10"
      >
        <ChevronLeft size={50} />
      </button>
      <button
        onClick={() => setSlide((s) => (s + 1) % HERO_SLIDES.length)}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/40 border border-white/15 flex items-center justify-center hover:bg-black/60 z-10"
      >
        <ChevronRight size={50} />
      </button>

      <div className="absolute bottom-0 left-0 p-5 md:p-7 z-10">
        <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight drop-shadow-lg">
          {current.title}
        </h1>
        <p className="flex items-center gap-2 text-white/60 text-sm mt-2">
          <Film size={13} /> {current.year} &nbsp;|&nbsp; {current.genre}
        </p>
      </div>

      <div className="absolute bottom-3 right-4 flex gap-1.5 z-10">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setSlide(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === slide ? "w-5 bg-emerald-400" : "w-1.5 bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}