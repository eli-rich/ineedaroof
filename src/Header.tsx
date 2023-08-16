import type { Component } from 'solid-js';
import { Icon } from '@iconify-icon/solid';

const Header: Component = () => {
  return (
    <>
      <header class='flex flex-col justify-center p-8 text-center'>
        <div class='flex items-center justify-center sm:gap-1'>
          <Icon icon='ic:outline-roofing' class='text-6xl text-white' />
          <h1 class='text-4xl font-bold uppercase text-white sm:text-5xl lg:text-6xl'>
            ineedaroof.com
          </h1>
        </div>
        <p class='text-lg uppercase text-gray-400 lg:text-xl'>
          By{' '}
          <a href='https://youtu.be/dQw4w9WgXcQ' target='__blank' class='underline'>
            Baron Built Homes
          </a>
        </p>
      </header>
    </>
  );
};
export default Header;
