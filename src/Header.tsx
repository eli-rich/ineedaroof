import type { Component } from 'solid-js';

const Header: Component = () => {
  return (
    <>
      <header class='flex flex-col justify-center p-8 text-center'>
        <h1 class='text-4xl font-bold uppercase text-white md:text-5xl lg:text-6xl'>
          ineedaroof.com
        </h1>
        <p class='text-lg uppercase text-gray-400 lg:text-xl'>By Baron Built Homes</p>
      </header>
    </>
  );
};
export default Header;
