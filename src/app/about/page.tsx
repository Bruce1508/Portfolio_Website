import MemoryAtlas from "@/components/portfolio/memory-atlas";
import { places } from "@/data/places";

export default function About() {
  return (
    <main id="main" className="wrap atlas-page">
      <header className="atlas-heading">
        <div><h1>Beyond the code.</h1><p>Hackathons, new faces, and places along the way.</p></div>
        <span>{places.length} entries · Ontario to Vancouver</span>
      </header>
      <section id="places" aria-label="My places and memories">
        <MemoryAtlas />
      </section>
      <p className="atlas-caption">Pick a place to open its story. Numbered pins share a location.</p>
    </main>
  );
}
