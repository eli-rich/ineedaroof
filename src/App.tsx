import type { Component } from 'solid-js';
import Header from './Header';
import Contact from './Contact';

const App: Component = () => {
  return (
    <>
      <Header />
      <main class='mx-auto flex w-4/5 max-w-lg flex-col'>
        <Contact />
        <footer class='mt-10 flex flex-col pb-5'>
          <p class='text-center text-xl text-gray-400'>
            Wanna see what else Baron Built Homes has to offer?
          </p>
          <a
            href='https://youtu.be/dQw4w9WgXcQ'
            target='__blank'
            class='mx-auto rounded-md bg-blue-500 p-2 text-xl font-semibold text-white hover:bg-blue-600'
          >
            Click Here
          </a>
        </footer>
      </main>
    </>
  );
};

export default App;
