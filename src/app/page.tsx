import OrganizationLogo from "@/components/portfolio/organization-logo";
import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { config } from "@/data/config";
import Portrait from "@/components/portfolio/portrait";
import { resumeUrl, education, experience } from "@/data/resume";
export default function Home() {
  return (
    <main id="main" className="wrap home">
      <section className="intro">
        <div className="intro-copy">
          <h1>Bruce Vo.</h1>
          <p className="intro-role">Software engineer.</p>
          <p className="intro-description">
            I build web applications and local AI tools. My work explores how
            software can explain data, simplify coursework, and help us learn.
          </p>
          <div className="intro-links">
            <Link className="button" href="/projects">
              See my work
            </Link>
            <a
              href={config.social.github}
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={19} />
            </a>
            <a
              href={config.social.linkedin}
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={19} />
            </a>
            <a href={`mailto:${config.email}`} aria-label="Email Bruce">
              <Mail size={19} />
            </a>
          </div>
          <a
            className="intro-about"
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
          >
            View résumé
            <ArrowUpRight size={15} />
          </a>
        </div>
        <Portrait />
      </section>
      <section className="currently" aria-labelledby="currently-title">
        <h2 id="currently-title">Currently</h2>
        <div className="currently-items">
          <Link href="/experience" className="current-item">
            <OrganizationLogo name={education.school} />
            <span>
              <strong>
                {education.school} <ArrowUpRight size={14} />
              </strong>
              <small>Bachelor of Software Development</small>
            </span>
          </Link>
          {experience
            .filter((item) => item.kind === "work")
            .map((item) => (
              <Link
                href="/experience"
                className="current-item"
                key={item.organization}
              >
                <OrganizationLogo name={item.organization} />
                <span>
                  <strong>
                    {item.organization} <ArrowUpRight size={14} />
                  </strong>
                  <small>{item.role}</small>
                </span>
              </Link>
            ))}
        </div>
      </section>
      <section className="contact-band">
        <div>
          <h2>Have a project in mind?</h2>
          <p>I’m happy to talk about the work, a role, or an idea.</p>
        </div>
        <Link href="/contact" className="button">
          Let’s talk
          <ArrowUpRight size={16} />
        </Link>
      </section>
    </main>
  );
}
