import OrganizationLogo from "@/components/portfolio/organization-logo";
import { Download, ArrowUpRight } from "lucide-react";
import Experience from "@/components/portfolio/experience";
import { education, resumeUrl } from "@/data/resume";
export const metadata = { title: "Experience | Bruce Vo" };
export default function ExperiencePage() {
  return (
    <main id="main" className="wrap page-content">
      <h1>My work experience.</h1>
      <p className="page-lead">
        Data, technical operations, and volunteering in my community.
      </p>
      <div className="detail-links">
        <a className="button" href={resumeUrl} target="_blank" rel="noreferrer">
          View résumé
          <ArrowUpRight size={16} />
        </a>
        <a className="text-link" href={resumeUrl} download>
          Download PDF
          <Download size={16} />
        </a>
      </div>
      <Experience />
      <section className="education-section">
        <h2>Education</h2>
        <div className="education-content">
          <div className="experience-brand"><OrganizationLogo name={education.school} /><h3>{education.degree}</h3></div>
          <p className="experience-org">
            {education.school}
            <span>{education.location}</span>
          </p>
          <p>{education.gpa}</p>
          <p>Concentration: {education.concentration}</p>
          <details>
            <summary>Relevant coursework</summary>
            <ul>
              {education.courses.map((course) => (
                <li key={course}>{course}</li>
              ))}
            </ul>
          </details>
        </div>
      </section>
    </main>
  );
}
