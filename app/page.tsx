import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Portfolio from '@/components/Portfolio';
import Footer from '@/components/Footer';
import BackgroundWrapper from '@/components/BackgroundWrapper';
import DigitalTwin from '@/components/DigitalTwin';

export default function Home() {
  return (
    <>
      <BackgroundWrapper />
      <Navbar />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Portfolio />
      </main>
      <Footer />
      <DigitalTwin />
    </>
  );
}
