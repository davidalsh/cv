import { cv } from "@/content/cv";
import { useDarkMode } from "@/hooks/useDarkMode";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Extras from "@/components/Extras";
import Contact from "@/components/Contact";
import CursorGlow from "@/components/CursorGlow";

export default function App() {
  const { dark, toggle } = useDarkMode();

  return (
    <>
      <CursorGlow />
      <Nav dark={dark} onToggleDark={toggle} />
      <main>
        <Hero basics={cv.basics} />
        <About summary={cv.basics.summary} />
        <Skills skills={cv.skills} />
        <Experience experience={cv.experience} />
        <Education education={cv.education} />
        <Extras extras={cv.extras} />
        <Contact basics={cv.basics} />
      </main>
    </>
  );
}
