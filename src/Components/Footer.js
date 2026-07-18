export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-10 px-4 md:px-6 py-6 text-xs text-white/35 flex flex-wrap items-center justify-center gap-4 md:gap-6">
      <span className="text-center">© {new Date().getFullYear()} MovieBox. Ryan Walker. All rights reserved.</span>
      <div className="flex gap-4">
        <a href="#" className="hover:text-white/60">About</a>
        <a href="#" className="hover:text-white/60">Contact</a>
        <a href="#" className="hover:text-white/60">Privacy</a>
      </div>
    </footer>
  );
}