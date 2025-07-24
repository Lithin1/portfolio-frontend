// 📁 src/pages/home/IntroPage.tsx
import React from "react";
import Intro from "./Intro";
import About from "../about/About";
import Experience from "../experience/Experience";
import SkillSet from "../skills/SkillSet";
import Project from "../projects/Project";
import Achievement from "../achievements/Achievements";
import Contact from "../contact/Contact";

const MobileView: React.FC = () => (
  <>
    <main className="overflow-x-hidden">
      <section id="home" className="scroll ">
        <Intro />
      </section>
      <section id="about" className="scroll ">
        <About />
      </section>
      <section id="experience" className="scroll ">
        <Experience />
      </section>
      <section id="skills" className="scroll ">
        <SkillSet />
      </section>
      <section id="projects" className="scroll ">
        <Project />
      </section>
      <section id="achievements" className="scroll ">
        <Achievement />
      </section>
      <section id="contact" className="scroll ">
        <Contact />
      </section>
    </main>
  </>
);

export default MobileView;
