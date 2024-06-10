import type { Component } from 'solid-js';

const Header: Component = () => {
  return (
    <>
      <header class='mb-4 flex flex-col justify-center rounded-sm bg-white text-center'>
        <div class='flex items-center justify-center sm:gap-1'>
          <object
            data='/logo.svg'
            type='image/svg+xml'
            class='max-w-sm md:max-w-md'
            aria-label='Logo for "I Need a Roof"'
          ></object>
        </div>
        <div class='fixed top-0 z-50 w-full bg-white'>
          <h1 class='text-2xl font-bold text-gray-800'>
            Call us at{' '}
            <a href='tel:2512790266' class='hover:underline'>
              251-279-0266
            </a>
          </h1>
        </div>
      </header>
    </>
  );
};
export default Header;
