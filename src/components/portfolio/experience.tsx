import OrganizationLogo from "./organization-logo";
import { HandHeart } from "lucide-react";
import { experience } from "@/data/resume";
export default function Experience() {
  return <div className="career-timeline">
    {[
      { title: "Work", kind: "work" },
      { title: "Volunteering", kind: "volunteer" },
    ].map(group => <section className="career-group" key={group.kind}>
      <h2>{group.title}</h2>
      {experience.filter(item => item.kind === group.kind).map(item => <article className="career-entry" key={item.organization}>
        <p className="career-date">{item.period}</p>
        <div className="career-content" data-current={!item.end}>
          <div className="career-title"><h3>{item.role}</h3><div className="career-logo">{item.kind === "volunteer" ? <HandHeart size={34} aria-hidden="true" /> : <OrganizationLogo name={item.organization} />}</div></div>
          <p className="career-meta">{item.organization}<span>{item.location}</span>{!item.end && <span className="career-now">Now</span>}</p>
          <ul>{item.points.map(point => <li key={point}>{point}</li>)}</ul>
        </div>
      </article>)}
    </section>)}
  </div>;
}
