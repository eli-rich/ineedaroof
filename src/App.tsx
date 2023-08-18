import type { Component } from 'solid-js';
import Header from './Header';
import Contact from './Contact';
import About from './About';
import Footer from './Footer';

const App: Component = () => {
  return (
    <>
      <Header />
      <About />
      <main class='mx-auto flex w-4/5 max-w-lg flex-col'>
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default App;
