"use client";
import { useEffect, useRef, useState } from "react";
import { resumeSkillGroups } from "@/data/resume";
import { Code2, Database, Network, Cloud, ChevronDown } from "lucide-react";
import { SiJavascript, SiTypescript, SiPython, SiReact, SiHtml5, SiCss3, SiAngular, SiNodedotjs, SiExpress, SiGraphql, SiMysql, SiPostgresql, SiMongodb, SiPrisma, SiJest, SiDocker, SiGit, SiGithubactions, SiLinux, SiJira, SiCplusplus } from "react-icons/si";
import type { IconType } from "react-icons";
const icons: Record<string, IconType> = {
  JavaScript: SiJavascript, TypeScript: SiTypescript, Python: SiPython,
  HTML: SiHtml5, CSS: SiCss3, React: SiReact, "React Native": SiReact,
  "Angular (Fundamentals)": SiAngular, "Node.js": SiNodedotjs, Express: SiExpress,
  GraphQL: SiGraphql, MySQL: SiMysql, PostgreSQL: SiPostgresql, MongoDB: SiMongodb,
  "Prisma ORM": SiPrisma, "Jest (Unit & Integration)": SiJest, Docker: SiDocker,
  Git: SiGit, "GitHub Actions": SiGithubactions, "Linux (CLI)": SiLinux, Jira: SiJira,
 "C/C++": SiCplusplus,
};
const labels = ["Exploring", "Occasionally", "Sometimes", "Often", "Daily"];
const contexts: Record<string, string> = {
  Languages: "Languages for writing application logic, scripts, and tools.",
  Frontend: "Interfaces for the browser and mobile applications.",
  "Backend & integration": "Services, API contracts, and communication between applications.",
  Databases: "Storing, querying, and structuring application data.",
  "Testing & DevOps": "Testing changes and supporting development and delivery workflows.",
  "Cloud & collaboration": "Cloud infrastructure and coordinating work with a team.",
};
export default function SkillLoadout() {
  const root = useRef<HTMLDivElement>(null);
  const [entered, setEntered] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setEntered(true); observer.disconnect(); }
    }, { threshold: 0.1 });
    if (root.current) observer.observe(root.current);
    return () => observer.disconnect();
  }, []);
  return <div ref={root} className={`skill-loadout ${entered ? "is-ready" : ""}`}>
    <div className="loadout-legend"><span>Usage frequency</span><span>Exploring <i aria-hidden="true">▰ ▰ ▰ ▰ ▰</i> Daily</span></div>
    <p className="loadout-preview">Design preview — bar levels are illustrative, pending my actual usage frequencies.</p>
    <div className="loadout-grid">
      {resumeSkillGroups.map((group, groupIndex) => <section className="loadout-group" key={group.name}>
        <h2>{group.name}</h2>
        <div>{group.skills.map((skill, index) => {
          const Icon = icons[skill] || (group.name === "Databases" ? Database : group.name === "Cloud & collaboration" ? Cloud : group.name === "Backend & integration" ? Network : Code2);
          // Deliberately illustrative: do not treat these values as proficiency or usage claims.
          const level = skill.includes("Fundamentals") ? 1 : 5 - ((index + groupIndex) % 4);
          return <details className="loadout-skill" key={skill}>
            <summary><Icon size={20} aria-hidden="true" /><span className="loadout-name">{skill}</span>
              <span className="energy-meter" aria-label={`Illustrative frequency: ${labels[level - 1]}`}>
                {Array.from({length:5}, (_, n) => <span key={n} className={n < level ? "filled" : ""} style={{transitionDelay:`${n * 75}ms`}} />)}
              </span><span className="energy-label">{labels[level - 1]}</span><ChevronDown className="loadout-chevron" size={13} aria-hidden="true" />
            </summary>
            <p>{contexts[group.name]} <span>Usage level shown here is a design sample.</span></p>
          </details>;
        })}</div>
      </section>)}
    </div>
  </div>;
}
