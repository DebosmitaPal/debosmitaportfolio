import React from "react";
import { Navbar } from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Achievements from "./components/Achievements";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />

      <main className="pt-15 max-w-full mx-auto">
        <section id="hero" className="min-h-screen">
          <Hero />
        </section>

        <section id="about" className="min-h-screen">
          <About />
        </section>

        <section id="skills" className="min-h-screen">
          <Skills />
        </section>

        <section id="projects" className="min-h-screen">
          <Projects />
        </section>

        <section id="certificates" className="min-h-screen">
          <Certificates />
        </section>

        <section id="achievements" className="min-h-screen">
          <Achievements />
        </section>

        <section id="contacts" className="min-h-screen">
          <Contacts />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
