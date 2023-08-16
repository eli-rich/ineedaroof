import type { Component } from 'solid-js';
import Header from './Header';
import Contact from './Contact';
import About from './About';

const App: Component = () => {
  return (
    <>
      <Header />
      <About />
      <main class='mx-auto flex w-4/5 max-w-lg flex-col'>
        <Contact />
        <footer class='mt-10 flex flex-col pb-5'>
          <p class='text-center text-xl text-gray-400'>
            Click here to see what else Baron Built has to offer!
          </p>
          <a
            href='https://youtu.be/dQw4w9WgXcQ'
            target='__blank'
            class='mx-auto rounded-md bg-blue-500 p-2 text-xl font-semibold uppercase text-white hover:bg-blue-600'
          >
            baronbuilthomes.com
          </a>
        </footer>
      </main>
    </>
  );
};

export default App;
