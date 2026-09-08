import Header from "@/components/layout/navbar/navbar";
import Hero from "@/components/home/hero/hero";
import Skills from "@/components/home/skills/skills";
import Experience from "@/components/home/experience/experience";
import Projects from "@/components/home/project/project";
import Contact from "@/components/contact/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090b] text-white">
      <Header />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
