import { useState } from 'react';
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

export default function App() {
  const [filter, setFilter] = useState<ProjectFilter>('all');

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
        <Projects filter={filter} onFilterChange={setFilter} />
        <Services />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
