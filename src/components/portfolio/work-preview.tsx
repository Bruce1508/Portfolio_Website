"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import projects from "@/data/projects";
const views = ["Overview", "Investigation", "Evidence"];
export default function WorkPreview() {
  const [selected, setSelected] = useState(0);
  const project = projects.find((p) => p.slug === "rootlens");
  if (!project?.images.length) return null;
  return (
    <figure className="work-preview">
      <div className="preview-toolbar">
        <span>Inside RootLens</span>
        <div
          className="preview-switch"
          role="group"
          aria-label="Application views"
        >
          {views.map((label, i) => (
            <button
              key={label}
              type="button"
              aria-pressed={selected === i}
              onClick={() => setSelected(i)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <Link
        href="/projects/rootlens"
        className="preview-screen"
        aria-label="Read about RootLens"
      >
        <Image
          src={project.images[selected]}
          alt={`RootLens ${views[selected].toLowerCase()} interface`}
          width={1440}
          height={900}
          priority={selected === 0}
          sizes="(max-width: 760px) 94vw, 650px"
        />
      </Link>
      <figcaption>
        <span>Trace the answer back to the evidence.</span>
        <Link href="/projects/rootlens" aria-label="Explore RootLens">
          <ArrowUpRight size={18} />
        </Link>
      </figcaption>
    </figure>
  );
}
