import { Component } from 'solid-js';

const Gallery: Component = () => {
  return (
    <section class='mx-auto mb-10 max-w-2xl'>
      <div class='w-full p-2 text-left'>
        <ul class='mb-1 list-inside list-disc text-lg text-white'>
          <li>Have a leak in your roof?</li>
          <li>Roof got damaged in a tornado or hurricane?</li>
          <li>Want your current roof repaired?</li>
          <li>Need a new roof designed to withstand high winds, hail, and hurricanes?</li>
          <li>Looking for a FORTIFIED ROOF?</li>
        </ul>
        <p class='text-lg text-white'>
          We want to help! We do roofs and re-roofs, and we take pride in everything we do, treating
          each project with care and consideration. Call us today or fill out the form below!
        </p>
      </div>
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
    </section>
  );
};

export default Gallery;
