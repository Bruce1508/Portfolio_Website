import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Terminal, Languages, Globe } from "lucide-react";
import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
export function ProjectArtwork({ project }: { project: Project }) {
  return (
    <div className={cn("project-art", `art-${project.slug}`)}>
      {project.images[0] ? (
        <Image
          src={project.images[0]}
          alt={`${project.title} application interface`}
          width={1440}
          height={900}
          sizes="(max-width: 760px) 92vw, 700px"
        />
      ) : project.slug === "bb-cli" ? (
        <div className="terminal-art">
          <div className="terminal-heading">
            <Terminal size={18} />
            <span>blackboard-cli</span>
          </div>
          <p>
            Deadlines.
            <br />
            Grades.
            <br />
            One terminal.
          </p>
          <span className="terminal-caption">Python / Playwright / SQLite</span>
        </div>
      ) : project.slug === "linguistic-twin" ? (
        <div className="language-art">
          <Languages size={24} />
          <p>
            Learn from
            <br />
            your mistakes.
          </p>
          <div className="language-flow">
            <span>Error events</span>
            <span>Learner profile</span>
            <span>Reverse tutor</span>
          </div>
        </div>
      ) : (
        <div className="portfolio-art">
          <Globe size={28} />
          <p>{project.slug === "portfolio" ? "Bruce Vo." : project.title}</p>
          <span>
            {project.slug === "portfolio"
              ? "Web / Work / Places"
              : project.category}
          </span>
        </div>
      )}
    </div>
  );
}
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <Link
        className="project-image-link"
        href={`/projects/${project.slug}`}
        aria-label={`Explore ${project.title}`}
      >
        <ProjectArtwork project={project} />
      </Link>
      <div className="project-copy">
        <div className="project-title">
          <h3>
            <Link href={`/projects/${project.slug}`}>
              {project.title}
              <ArrowUpRight size={22} />
            </Link>
          </h3>
          {project.wip && <span className="project-status">In progress</span>}
        </div>
        <div className="project-meta">
          <span>{project.category.replaceAll(" · ", " / ")}</span>
        </div>
        <p>{project.summary}</p>
        <ul className="tech-line" aria-label="Technologies">
          {project.tech.slice(0, 4).map((t) => (
            <li key={t.label}>{t.label}</li>
          ))}
        </ul>
        <Link className="project-read" href={`/projects/${project.slug}`}>
          Read about the project
          <ArrowUpRight size={15} />
        </Link>
      </div>
    </article>
  );
}
