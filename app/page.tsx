"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedText from "@/components/AnimatedText";
import Section from "@/components/Section";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const resumeHref = "/resume.pdf" as string;

const HomePage = () => {
  return (
    <main>
      <section id="home" className="section">
        <div className="container grid items-center gap-10 md:grid-cols-2">
          <div>
            <AnimatedText
              as="h1"
              text="Hi, I’m Gokhan — Senior Software Engineer"
              className="text-4xl md:text-6xl font-bold"
            />
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
              I build fast, accessible, interactive web applications with modern
              technologies like Next.js, TypeScript, and TailwindCSS.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href={resumeHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open resume PDF"
                className="inline-flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-white shadow-md outline-none transition hover:opacity-90 focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                View Resume
              </Link>
              <Link
                href="#contact"
                aria-label="Jump to contact section"
                className="inline-flex items-center rounded-md border border-gray-300 px-5 py-3 text-gray-900 dark:text-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-400"
              >
                Contact Me
              </Link>
            </div>
            <div className="mt-6 flex gap-4">
              <Link
                href="https://www.linkedin.com/in/gokhan-sigircik/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                LinkedIn
              </Link>
              <Link
                href="https://www.instagram.com/gezgingokhann/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram profile"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                Instagram
              </Link>
            </div>
          </div>
          <div className="relative mx-auto aspect-square w-64 overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 md:w-80">
            <Image
              src="/images/profile/homegokhan.jpeg"
              alt="Gokhan profile photo"
              fill
              sizes="(max-width: 768px) 256px, 320px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <Section id="experience" title="Experience & Skills">
        <Skills />
      </Section>

      <Section id="projects" title="Projects">
        <Projects />
      </Section>

      <Section id="contact" title="Contact">
        <Contact />
      </Section>
    </main>
  );
};

export default HomePage;
