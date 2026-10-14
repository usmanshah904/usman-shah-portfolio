import { useEffect, useState } from 'react';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { TechStrip } from './components/TechStrip';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects, type ProjectFilter } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { initSpotlight } from './components/spotlight';

export default function App() {
  const [filter, setFilter] = useState<ProjectFilter>('all');

  useEffect(initSpotlight, []);

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <TechStrip />
        <About />
        <Services />
        <Projects filter={filter} onFilterChange={setFilter} />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
