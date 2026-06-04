import './App.css';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import { ThemeProvider } from './common/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
