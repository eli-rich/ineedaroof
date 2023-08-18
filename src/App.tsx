import type { Component } from 'solid-js';
import Header from './Header';
import Contact from './Contact';
import About from './About';
import Footer from './Footer';

const App: Component = () => {
  alert(
    "Devin you should play chess. Or at least watch the twitch streamer chess tournement that's going on",
  );
  window.location.href = 'https://www.twitch.tv/chess';
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
