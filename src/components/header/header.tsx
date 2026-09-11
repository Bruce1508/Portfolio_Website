"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { config } from "@/data/config";
export default function Header() {
  const pathname = usePathname();
  return (
    <header className="site-header wrap">
      <Link href="/" className="wordmark" aria-label="Bruce Vo home">
        Bruce Vo<span>.</span>
      </Link>
      <nav aria-label="Main navigation">
        {[
          ["/", "Home"],
          ["/projects", "Work"],
          ["/skills", "Skills"],
          ["/experience", "Experience"],
          ["/about", "About"],
          ["/contact", "Contact"],
        ].map(([href, label]) => (
          <Link
            key={href}
            href={href}
            aria-current={
              (href === "/" ? pathname === href : pathname.startsWith(href))
                ? "page"
                : undefined
            }
            className={cn(
              "nav-link",
              (href === "/" ? pathname === href : pathname.startsWith(href)) &&
                "active",
            )}
          >
            {label}
          </Link>
        ))}
      </nav>
      <a
        className="header-github"
        href={config.social.github}
        target="_blank"
        rel="noreferrer"
      >
        GitHub <ArrowUpRight size={14} />
      </a>
    </header>
  );
}
