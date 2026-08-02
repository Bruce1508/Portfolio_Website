"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

import "@splidejs/react-splide/css";

import projects, { type Project } from "@/data/projects";

const ProjectCard = ({ project }: { project: Project }) => (
  <li
    className="w-[300px] border-[.5px] rounded-md border-zinc-600 overflow-hidden"
    style={{ backdropFilter: "blur(2px)" }}
  >
    {project.images.length > 0 && (
      <div className="h-[200px]">
        <Splide
          options={{
            type: "loop",
            interval: 3000,
            autoplay: true,
            speed: 2000,
            perMove: 1,
            rewind: true,
            easing: "cubic-bezier(0.25, 1, 0.5, 1)",
            arrows: false,
          }}
          aria-label={`Screenshots of ${project.title}`}
        >
          {project.images.map((image) => (
            <SplideSlide key={image}>
              <Image
                src={image}
                alt={`Screenshot of ${project.title}`}
                className="w-[300px] h-[200px] rounded-md bg-zinc-900"
                width={300}
                height={400}
                style={{ height: "200px" }}
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    )}

    <div className="p-4 text-zinc-300 flex flex-col gap-3">
      <div className="flex items-baseline justify-between gap-3">
        <h2 className="text-xl">{project.title}</h2>
        <span className="font-mono text-xs text-zinc-600">{project.num}</span>
      </div>

      <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
        {project.category}
      </p>

      <p className="text-xs text-zinc-500">{project.description}</p>

      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t.label}
            className="inline-flex items-center gap-1 px-2 py-0.5 border border-zinc-700 text-[10px] font-mono text-zinc-400"
          >
            {t.label}
          </span>
        ))}
      </div>

      <div className="flex gap-3 pt-2 border-t border-zinc-800 text-xs font-mono">
        {project.live && !project.wip && (
          <Link
            href={project.live}
            target="_blank"
            rel="noopener"
            className="text-zinc-300 hover:underline"
          >
            {project.liveLabel ?? "Live site"}
          </Link>
        )}
        {project.github && (
          <Link
            href={project.github}
            target="_blank"
            rel="noopener"
            className="text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            GitHub
          </Link>
        )}
        {project.wip && <span className="text-zinc-600">In progress</span>}
      </div>
    </div>
  </li>
);

function Page() {
  return (
    <>
      <div className="container mx-auto md:px-[50px] xl:px-[150px] text-zinc-300 h-full">
        <h1 className="text-4xl mt-[100px] mb-[50px]">Projects</h1>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-around">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default Page;
