import { ChevronRight } from "lucide-react";
import MovieCard from "./MovieCard";

export default function MovieSection({ title, items }) {
  return (
    <section>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-bold">{title}</h2>
        <button className="text-xs text-white/45 hover:text-white/80 flex items-center gap-0.5">
          More <ChevronRight size={13} />
        </button>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3">
        {items.map((item) => (
          <MovieCard key={item.title} title={item.title} grad={item.grad} tag={item.tag} />
        ))}
      </div>
    </section>
  );
}