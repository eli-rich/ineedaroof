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
      <Gallery />
      <div class='mx-auto mb-10 flex w-4/5 max-w-xl flex-col'>
        <Contact />
      </div>
      <About />
      <section class='mx-auto flex w-4/5 max-w-xl flex-col'>
        <Testimonial />
        <Footer />
      </section>
    </>
  );
};

export default App;
