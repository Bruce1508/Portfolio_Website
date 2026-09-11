import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import projects from "@/data/projects";
import { ProjectArtwork } from "@/components/portfolio/project-card";
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = projects.find((p) => p.slug === params.slug);
  return { title: p ? `${p.title} | Bruce Vo` : "Project not found" };
}
export default function ProjectPage({ params }: { params: { slug: string } }) {
  const p = projects.find((p) => p.slug === params.slug);
  if (!p) notFound();
  return (
    <main id="main" className="wrap page-content project-detail">
      <Link className="text-link" href="/projects">
        All projects
      </Link>
      <p className="detail-category">
        {p.category}
        {p.wip && " / In progress"}
      </p>
      <h1>{p.title}</h1>
      <p className="page-lead">{p.summary}</p>
      <div className="detail-links">
        {p.github && (
          <a
            className="button"
            href={p.github}
            target="_blank"
            rel="noreferrer"
          >
            View source
          </a>
        )}
        {p.live && (
          <a
            className="text-link"
            href={p.live}
            target="_blank"
            rel="noreferrer"
          >
            {p.liveLabel ?? "Visit website"}
          </a>
        )}
      </div>
      <ProjectArtwork project={p} />
      <section className="detail-description">
        <h2>Inside the project</h2>
        <p>{p.description}</p>
        <div className="tech-badges">
          {p.tech.map((t) => (
            <span key={t.label}>
              {t.icon}
              {t.label}
            </span>
          ))}
        </div>
      </section>
      {p.images.slice(1).map((src, i) => (
        <Image
          className="detail-screenshot"
          key={src}
          src={src}
          alt={`${p.title} — ${i === 0 ? "investigation view" : "evidence view"}`}
          width={1400}
          height={900}
          sizes="(max-width: 960px) 90vw, 960px"
        />
      ))}
    </main>
  );
}
