"use client";
import { GenericHero, InfoSec } from "./components";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Contact() {
  useEffect(() => {
    Aos.init({
      duration: 200,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <main>
      <GenericHero title="Contact Us" />
      <InfoSec />
    </main>
  );
}

export default Contact;
