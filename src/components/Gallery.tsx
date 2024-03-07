import { Component } from 'solid-js';

const Gallery: Component = () => {
  return (
    <div class='flex flex-col justify-between sm:flex-row'>
      <div class='w-full p-2 sm:w-1/3'>
        <img src='db1.webp' alt='Roofing photo #1' class='h-full w-full object-cover' />
      </div>
      <div class='w-full p-2 sm:w-1/3'>
        <img src='db2.webp' alt='Roofing photo #2' class='h-full w-full object-cover' />
      </div>
      <div class='w-full p-2 sm:w-1/3'>
        <img src='db3.webp' alt='Roofing photo #3' class='h-full w-full object-cover' />
      </div>
    </div>
  );
};

export default Gallery;
