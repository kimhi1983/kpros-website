import React from 'react';
import { LangProvider } from './i18n';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryStrip from './components/CategoryStrip';
import Business from './components/Business';
import Products from './components/Products';
import Finished from './components/Finished';
import Lab from './components/Lab';
import Partners from './components/Partners';
import Support from './components/Support';
import Coching from './components/Coching';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => (
  <LangProvider>
    <Navbar />
    <main>
      <Hero />
      <CategoryStrip />
      <Business />
      <Products />
      <Finished />
      <Lab />
      <Partners />
      <Support />
      <Coching />
      <Contact />
    </main>
    <Footer />
  </LangProvider>
);

export default App;
