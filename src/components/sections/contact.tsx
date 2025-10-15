"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ContactForm from "../ContactForm";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { config } from "@/data/config";
const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen max-w-7xl mx-auto ">
      <Link href={"#contact"}>
        <h2
          className={cn(
            "bg-clip-text text-4xl text-center text-transparent md:text-7xl pt-16",
            "bg-gradient-to-b from-black/80 to-black/50",
            "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50"
          )}
        >
          LET&apos;S WORK <br />
          TOGETHER
        </h2>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 z-[9999]">
        <div className="relative group mt-10 md:mt-20">
          {/* Glowing background effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500 animate-pulse" />

          {/* Card with enhanced styling */}
          <Card className="relative min-w-7xl bg-white/80 dark:bg-black/80 backdrop-blur-lg rounded-2xl border-2 border-purple-500/20 shadow-2xl">
            <CardHeader className="space-y-2">
              <CardTitle className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
                Contact Form
              </CardTitle>
              <CardDescription className="text-base text-gray-700 dark:text-gray-300">
                Please contact me directly at{" "}
                <a
                  target="_blank"
                  href={`mailto:${config.email}`}
                  className="text-purple-600 dark:text-purple-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors font-semibold cursor-pointer rounded-lg"
                >
                  {config.email.replace(/@/g, "(at)")}
                </a>{" "}
                or drop your info here.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
