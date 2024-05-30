"use client";
import {
  AboutStats,
  AboutUs,
  Clients,
  GenericHero,
  OurTeam,
  SustainabilityBgs,
} from "./components";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    Aos.init({
      duration: 200,
      easing: "ease-in-out",
    });
    Aos.refresh();
  }, []);
  return (
    <main>
      <GenericHero title="About Us" />
      <AboutUs />
      <AboutStats />
      <OurTeam />
      <SustainabilityBgs />
      <Clients />
    </main>
  );
}

export default About;
