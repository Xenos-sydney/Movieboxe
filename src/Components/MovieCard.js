export default function MovieCard({ title, image, tag }) {
  return (
    <div className="group cursor-pointer">

      <div className="relative overflow-hidden rounded-xl aspect-[2/3] bg-zinc-900">

        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />

        <span className="absolute top-2 left-2 bg-black/70 text-xs px-2 py-1 rounded text-white">
          {tag}
        </span>

      </div>

      <h3 className="mt-2 text-sm font-medium line-clamp-2">
        {title}
      </h3>

    </div>
  );
}