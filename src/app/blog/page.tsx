import Link from "next/link";
export default function Blog() {
  return (
    <main id="main" className="wrap page-content prose-page">
      <h1>Notes</h1>
      <p className="page-lead">
        No posts published yet. In the meantime, explore what I’ve been
        building.
      </p>
      <Link href="/projects" className="button">
        Explore projects
      </Link>
    </main>
  );
}
