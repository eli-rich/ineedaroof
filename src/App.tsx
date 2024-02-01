import type { Component } from 'solid-js';
import Header from './components/Header';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';
import Testimonial from './components/Testimonial';
import Gallery from './components/Gallery';

const App: Component = () => {
  return (
    <>
      <Header />
      <About />
      <main class='mx-auto flex w-4/5 max-w-xl flex-col'>
        <Contact />
        <Testimonial />
        <Gallery />
        <Footer />
      </main>
    </>
  );
};

export default App;
