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
      </header>
    </>
  );
};
export default Header;
