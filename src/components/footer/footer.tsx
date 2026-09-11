import Link from "next/link";
export default function Footer() {
  return (
    <footer className="site-footer wrap">
      <span>© {new Date().getFullYear()} Bruce Vo</span>
      <Link href="#main">Back to top</Link>
    </footer>
  );
}
