import OrganizationLogo from "./organization-logo";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { experience } from "@/data/resume";
export default function Experience({ compact = false }: { compact?: boolean }) {
  const groups = compact
    ? [{ title: "Work experience", kind: "work" }]
    : [
        { title: "Work experience", kind: "work" },
        { title: "Projects & community", kind: "community" },
      ];
  return (
    <>
      {groups.map((group) => (
        <section className="experience-section" key={group.kind}>
          <div className="section-heading">
            <h2>{group.title}</h2>
            {compact && (
              <Link className="text-link" href="/experience">
                Full experience
                <ArrowUpRight size={16} />
              </Link>
            )}
          </div>
          <div className="experience-list">
            {experience
              .filter((item) => item.kind === group.kind)
              .map((item) => (
                <article className="experience-entry" key={item.organization}>
                  <p className="experience-date">{item.period}</p>
                  <div className="experience-content">
                    <div className="experience-brand"><OrganizationLogo name={item.organization} /><h3>{item.role}</h3></div>
                    <p className="experience-org">
                      {item.organization}
                      <span>{item.location}</span>
                    </p>
                    <ul>
                      {(compact ? item.points.slice(0, 1) : item.points).map(
                        (point) => (
                          <li key={point}>{point}</li>
                        ),
                      )}
                    </ul>
                  </div>
                </article>
              ))}
          </div>
        </section>
      ))}
    </>
  );
}
