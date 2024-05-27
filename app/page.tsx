import { Hero, Sustainability, BuildDream } from "./components";

function Home() {
  return (
    <main className="flex flex-col items-center gap-20">
      <Hero />
      <BuildDream />
      <Sustainability />
    </main>
  );
}

export default Home;
