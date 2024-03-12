import { Component } from 'solid-js';

const Gallery: Component = () => {
  return (
    <div class='flex flex-col justify-between sm:flex-row'>
      <div class='w-full p-2 sm:w-1/3'>
        <img
          src='img/gallery/rdb1.webp'
          width='1040'
          height='520'
          alt='Roofing photo #1'
          class='h-full w-full object-cover'
        />
      </div>
      <div class='w-full p-2 sm:w-1/3'>
        <img
          src='img/gallery/rdb2.webp'
          width='1020'
          height='765'
          alt='Roofing photo #2'
          class='h-full w-full object-cover'
        />
      </div>
      <div class='w-full p-2 sm:w-1/3'>
        <img
          src='img/gallery/rdb3.webp'
          width='1040'
          height='520'
          alt='Roofing photo #3'
          class='h-full w-full object-cover'
        />
      </div>
    </div>
  );
};

export default Gallery;
