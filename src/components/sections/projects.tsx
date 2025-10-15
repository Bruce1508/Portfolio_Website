"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const ProjectsSection = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto min-h-[100vh] flex flex-col justify-center items-center px-4">
      <Link href={"#projects"}>
        <h2
          className={cn(
            "bg-clip-text text-4xl text-center text-transparent md:text-7xl pt-16 mb-8",
            "bg-gradient-to-b from-black/80 to-black/50",
            "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50"
          )}
        >
          Projects
        </h2>
      </Link>

      {/* Coming Soon Content */}
      <div className="flex flex-col items-center justify-center flex-1 w-full relative z-10">
        {/* Enhanced backdrop container for prominence */}
        <div className="relative max-w-6xl w-full">
          {/* Lighter backdrop blur effect - more transparent to see the cat */}
          <div className="absolute inset-0 bg-white/40 dark:bg-black/50 backdrop-blur-md rounded-3xl border-2 border-purple-500/30 dark:border-purple-400/30 shadow-2xl" />

          {/* Animated gradient background blur - more intense */}
          <div className="absolute -inset-10 bg-gradient-to-r from-purple-600/30 via-pink-600/30 to-blue-600/30 blur-3xl animate-pulse rounded-full" />

          <div className="relative text-center space-y-8 px-8 md:px-16 py-16 md:py-24 z-20">
            {/* Main "Coming Soon" text with white mixed in gradient */}
            <h3 className="text-7xl md:text-9xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-400 via-pink-500 to-blue-500 animate-gradient-x"
                style={{
                  textShadow: '0 0 80px rgba(255, 255, 255, 0.6), 0 0 120px rgba(168, 85, 247, 0.8), 0 0 160px rgba(236, 72, 153, 0.6)',
                  filter: 'drop-shadow(0 10px 30px rgba(168, 85, 247, 0.5))'
                }}>
              COMING SOON
            </h3>

            {/* Glowing divider */}
            <div className="flex justify-center">
              <div className="h-1 w-32 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full"
                   style={{ boxShadow: '0 0 20px rgba(168, 85, 247, 0.8)' }} />
            </div>

            {/* Subtitle with better contrast */}
            <p className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white animate-fade-in"
               style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)' }}>
              Amazing Projects Are On The Way
            </p>

            {/* Description with enhanced readability */}
            <p className="text-lg md:text-xl text-gray-800 dark:text-gray-100 max-w-2xl mx-auto font-mono animate-fade-in-delay leading-relaxed"
               style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)' }}>
              I'm currently working on some exciting projects that will showcase my skills and creativity.
              Stay tuned for updates!
            </p>

            {/* Animated dots with glow effect */}
            <div className="flex gap-4 justify-center items-center mt-12">
              <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-bounce shadow-lg shadow-purple-500/50"
                   style={{ animationDelay: "0ms", animationDuration: "1s" }} />
              <div className="w-5 h-5 rounded-full bg-gradient-to-r from-pink-500 to-red-500 animate-bounce shadow-lg shadow-pink-500/50"
                   style={{ animationDelay: "200ms", animationDuration: "1s" }} />
              <div className="w-5 h-5 rounded-full bg-gradient-to-r from-red-500 to-orange-500 animate-bounce shadow-lg shadow-orange-500/50"
                   style={{ animationDelay: "400ms", animationDuration: "1s" }} />
              <div className="w-5 h-5 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 animate-bounce shadow-lg shadow-yellow-500/50"
                   style={{ animationDelay: "600ms", animationDuration: "1s" }} />
              <div className="w-5 h-5 rounded-full bg-gradient-to-r from-yellow-500 to-green-500 animate-bounce shadow-lg shadow-green-500/50"
                   style={{ animationDelay: "800ms", animationDuration: "1s" }} />
            </div>

            {/* Enhanced decorative elements with better visibility */}
            <div className="absolute -top-32 -left-32 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
                 style={{ animationDuration: "3s" }} />
            <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
                 style={{ animationDuration: "4s" }} />
          </div>

          {/* Corner accent elements - positioned outside content div to fix alignment */}
          <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-purple-500/50 rounded-tl-3xl" />
          <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-blue-500/50 rounded-br-3xl" />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
