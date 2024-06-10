import type { Component } from 'solid-js';

const Header: Component = () => {
  return (
    <>
      <header class='-mt-8 mb-4 flex flex-col justify-center rounded-sm bg-white text-center'>
        <div class='flex items-center justify-center sm:gap-1'>
          <object
            data='/logo.svg'
            type='image/svg+xml'
            class='max-w-sm md:max-w-md'
            aria-label='Logo for "I Need a Roof"'
          ></object>
        </div>
        <h1 class='text-2xl font-bold text-gray-800'>
          Call us at{' '}
          <a href='tel:2512790266' class='hover:underline'>
            251-279-0266
          </a>
        </h1>
      </header>
    </>
  );
};
export default Header;
