export default function MovieCard({ title, grad, tag }) {
  return (
    <div
      className="relative w-full aspect-[2/3] rounded-md overflow-hidden shrink-0"
      style={{ background: `linear-gradient(160deg, ${grad[0]}, ${grad[1]})` }}
    >
      {tag && (
        <span className="absolute top-2 left-2 text-[10px] font-semibold tracking-wide bg-black/60 text-white/90 px-1.5 py-0.5 rounded">
          {tag}
        </span>
      )}
      <div className="absolute inset-0 flex items-end p-3">
        <span className="text-white/90 text-sm font-semibold leading-tight drop-shadow-lg">
          {title}
        </span>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/10" />
    </div>
  );
}