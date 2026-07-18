"use client";

import { Search } from "lucide-react";

export default function Searchbar({ placeholder = "Search movies / TV Shows", onChange }) {
  return (
    <div className="flex-1 max-w-xl relative">
      <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/35" />
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full bg-white/[0.06] border border-white/10 rounded-full py-2 pl-9 pr-4 text-sm placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
      />
    </div>
  );
}