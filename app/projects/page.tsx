"use client";
import { GenericHero, ProjectsSec, Clients } from "./components";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Projects() {
  useEffect(() => {
    Aos.init({
      duration: 200,
      easing: "ease-in-out",
    });
    Aos.refresh();
  }, []);
  return (
    <main>
      <GenericHero title="Projects" />
      <ProjectsSec />
      <Clients />
    </main>
  );
}

export default Projects;
