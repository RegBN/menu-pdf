import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import VideoHighlight from './components/VideoHighlight';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <Hero />
      <About />
      <VideoHighlight />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;