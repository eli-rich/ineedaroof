import type { Component } from 'solid-js';
import Header from './components/Header';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';

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
