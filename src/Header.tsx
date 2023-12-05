import type { Component } from 'solid-js';

const Header: Component = () => {
  return (
    <>
      <header class='-mt-8 mb-4 flex flex-col justify-center rounded-sm bg-white pb-2 text-center'>
        <div class='flex items-center justify-center sm:gap-1'>
          <object data='/logo.svg' type='image/svg+xml' class='max-w-sm md:max-w-md'></object>
          {/* <h1 class='text-4xl font-bold uppercase text-white sm:text-5xl lg:text-6xl'>
            ineedaroof.com
          </h1> */}
        </div>
        <p class='text-lg uppercase text-gray-400 lg:text-xl'>
          By{' '}
          <a href='https://youtu.be/dQw4w9WgXcQ' target='__blank' class='font-mukta underline'>
            Baron Built Homes
          </a>
        </p>
      </header>
    </>
  );
};
export default Header;
