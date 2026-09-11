import Link from "next/link";
import projects from "@/data/projects";
import { skillGroups } from "@/data/skill-groups";
import { ArrowUpRight } from "lucide-react";
export default function Skills({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className="skills-table">
      {skillGroups.map((group) => (
        <section className="skill-group" key={group.name}>
          <div className="skill-group-title">
            <h3>{group.name}</h3>
            <p>{group.description}</p>
          </div>
          <div className="skill-items">
            {group.labels.map((label) => {
              const used = projects.filter((p) =>
                p.tech.some((t) => t.label === label),
              );
              const tech = used[0]?.tech.find((t) => t.label === label);
              if (!tech) return null;
              return (
                <div className="skill-item" key={label}>
                  <div className="skill-name">
                    <span aria-hidden="true">{tech.icon}</span>
                    <span>{label}</span>
                  </div>
                  {detailed ? (
                    <ul className="skill-evidence">
                      {used.map((p) => (
                        <li key={p.slug}>
                          <Link href={`/projects/${p.slug}`}>
                            {p.title}
                            <ArrowUpRight size={12} />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <Link
                      className="skill-example"
                      href={`/projects/${used[0].slug}`}
                      aria-label={`${label} used in ${used[0].title}`}
                    >
                      {used[0].title}
                      <ArrowUpRight size={12} />
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
