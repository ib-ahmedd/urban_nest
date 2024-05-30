"use client";
import { useEffect } from "react";
import {
  Hero,
  Sustainability,
  BuildDream,
  Founders,
  Testimonials,
  FAQs,
} from "./components";
import Aos from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    Aos.init({
      duration: 200,
      easing: "ease-in-out",
    });
    Aos.refresh();
  }, []);
  return (
    <main>
      <Hero />
      <BuildDream />
      <Sustainability />
      <Founders />
      <Testimonials />
      <FAQs />
    </main>
  );
}

export default Home;
