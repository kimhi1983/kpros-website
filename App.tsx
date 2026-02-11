import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Tech from './components/Tech';
import VisualStream from './components/VisualStream';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="antialiased text-slate-800 bg-[#F5F5F3]">
      <Navbar />
      <main>
        <Hero />
        <Tech />
        <VisualStream />
        <Products />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;