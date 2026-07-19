import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import MovieSection from "../Components/MovieSection";
import Footer from "../Components/Footer";
import {
  SERIES,
  TEEN_FANTASY,
  ACTION_AND_THRILLER,
  ANIME,
  HORROR,
} from "../Data/Movies";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0c10] text-white font-sans flex">
      <Sidebar />

      <div className="flex-1 min-w-0 flex flex-col">
        <Navbar />

        <main className="px-4 md:px-6 py-5 flex-1">
          <Hero />
          <MovieSection title="Popular Series" items={SERIES} />
        </main>

        <main className="px-4 md:px-6 py-5 flex-1">
          <MovieSection title="Teen Fantasy" items={TEEN_FANTASY} />
        </main>

        <main className="px-4 md:px-6 py-5 flex-1">
          <MovieSection title="Action and Thriller" items={ACTION_AND_THRILLER} />
        </main>

        <main className="px-4 md:px-6 py-5 flex-1">
          <MovieSection title="Anime" items={ANIME} />
        </main>

        <main className="px-4 md:px-6 py-5 flex-1">
          <MovieSection title="Horror" items={HORROR} />
        </main>

        <Footer />
      </div>
    </div>
  );
}