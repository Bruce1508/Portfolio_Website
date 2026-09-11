import projects from "@/data/projects";
import ProjectCard from "@/components/portfolio/project-card";
export default function Projects() {
  return (
    <main id="main" className="wrap page-content">
      <h1>Projects & experiments.</h1>
      <p className="page-lead">
        Local AI, developer tools, and learning systems. A closer look at what
        I’ve built and how it works.
      </p>
      <div className="project-grid all-projects">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </main>
  );
}
