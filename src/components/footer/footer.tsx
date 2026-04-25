import React from "react";
import Link from "next/link";
import { footer } from "./config";
import SocialMediaButtons from "../social/social-media-icons";
import { config } from "@/data/config";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t border-border px-4 py-6 sm:flex-row md:px-6 sm:justify-between">
      <p className="text-xs font-mono text-muted-foreground">
        © {year} {config.author}
      </p>
      <SocialMediaButtons />
      <nav className="flex gap-4 sm:gap-6 z-10">
        {footer.map((link, index) => (
          <Link
            key={`l_${index}`}
            href={link.href}
            className="text-xs font-mono text-muted-foreground hover:text-foreground underline-offset-4 hover:underline transition-colors"
          >
            {link.title}
          </Link>
        ))}
      </nav>
    </footer>
  );
}

export default Footer;
