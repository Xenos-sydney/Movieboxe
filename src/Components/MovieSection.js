import { ChevronRight } from "lucide-react";
import MovieCard from "./MovieCard";

export default function MovieSection({ title, items }) {
  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-bold">{title}</h2>

        <button className="text-xs text-white/45 hover:text-white/80 flex items-center gap-1">
          More <ChevronRight size={13} />
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4">
        {items.map((item) => (
          <MovieCard
            key={item.title}
            title={item.title}
            image={item.image}
            tag={item.tag}
            grad={item.grad}
          />
        ))}
      </div>
    </section>
  );
}