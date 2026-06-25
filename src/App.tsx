import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Work } from './components/Work';
import { About } from './components/About';
import { Stack } from './components/Stack';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-paper">
      <Nav />
      <Hero />
      <Services />
      <Work />
      <About />
      <Stack />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
