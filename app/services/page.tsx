"use client";
import { Clients, GenericHero, ServicesSec } from "./components";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Services() {
  useEffect(() => {
    Aos.init({
      duration: 200,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <main>
      <GenericHero title="Services" />
      <ServicesSec />
      <Clients />
    </main>
  );
}

export default Services;
