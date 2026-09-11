import SkillLoadout from "@/components/portfolio/skill-loadout";
export const metadata = { title: "Skills | Bruce Vo" };
export default function SkillsPage() {
  return (
    <main id="main" className="wrap page-content">
      <div className="page-heading">
        <h1>Tools I build with.</h1>
        <p className="page-lead">Languages, frameworks, and tools I use across the journey so far.</p>
      </div>
      <SkillLoadout />
    </main>
  );
}
