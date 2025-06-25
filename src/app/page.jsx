"use client";
import React, { useEffect } from "react";
import Hero from "./Components/homepage/Hero";
import About from "./Components/homepage/About";
import ProjectsSection from "./Components/homepage/ProjectsSection";
import Lenis from "lenis";
import Skills from "./Components/homepage/Skills";
import ContactSection from "./Components/homepage/ContactSection";

const page = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <ProjectsSection />
      <ContactSection/>
    </div>
  );
};
export default page;
