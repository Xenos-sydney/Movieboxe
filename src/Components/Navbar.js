import { Globe, Download, LogIn } from "lucide-react";
import Searchbar from "./Searchbar";
import Button from "./Button";

export default function Navbar() {
  return (
    <header className="flex items-center gap-3 px-4 md:px-6 py-3 border-b border-white/5 bg-[#0b0c10]/95 sticky top-0 z-20 backdrop-blur">
      <Searchbar />

      <Button variant="ghost" icon={Globe} className="hidden sm:flex">
        EN
      </Button>

      <Button variant="outline" icon={Download}>
        Download App
      </Button>

      <Button variant="solid" icon={LogIn}>
        Log in
      </Button>
    </header>
  );
}