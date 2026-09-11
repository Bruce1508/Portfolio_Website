import ContactForm from "@/components/ContactForm";
import { config } from "@/data/config";
export default function Contact() {
  return (
    <main id="main" className="wrap page-content">
      <h1>
        Let’s talk
        <br />
        about your idea.
      </h1>
      <p className="page-lead">
        Have a project in mind, an opportunity to share, or a question about my
        work?
      </p>
      <div className="contact-layout">
        <div>
          <h2>Drop me a line.</h2>
          <a className="text-link email-link" href={`mailto:${config.email}`}>
            {config.email}
          </a>
          <div className="social-links">
            <a href={config.social.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={config.social.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </main>
  );
}
