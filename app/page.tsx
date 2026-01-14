import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Publications from '@/components/Publications';
import Contact from '@/components/Contact';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Publications />
      <Contact />
      <ScrollToTop />
    </>
  );
}
