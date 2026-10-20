import React from 'react';
import { LangProvider } from './i18n';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Business from './components/Business';
import Products from './components/Products';
import Finished from './components/Finished';
import Partners from './components/Partners';
import Infra from './components/Infra';
import Coching from './components/Coching';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => (
  <LangProvider>
    <Navbar />
    <main>
      <Hero />
      <Stats />
      <Business />
      <Products />
      <Finished />
      <Partners />
      <Infra />
      <Coching />
      <Contact />
    </main>
    <Footer />
  </LangProvider>
);

export default App;
