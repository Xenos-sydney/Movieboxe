export default function Button({
  children,
  icon: Icon,
  variant = "ghost", // "solid" | "outline" | "ghost"
  onClick,
  className = "",
  ...rest
}) {
  const base =
    "flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-full transition-colors";

  const variants = {
    solid: "bg-emerald-500 text-black hover:bg-emerald-400",
    outline: "bg-white/[0.07] border border-white/10 text-white hover:bg-white/[0.12]",
    ghost: "text-white/50 hover:bg-white/5 hover:text-white/90",
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
      {...rest}
    >
      {Icon && <Icon size={14} />}
      {children}
    </button>
  );
}