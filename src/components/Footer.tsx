import { type Component } from 'solid-js';

const Footer: Component = () => {
  return (
    <>
      <footer class='mt-10 flex flex-col pb-5'>
        <p class='font-mukta text-center text-xl text-gray-400'>
          Click here to see what else Baron Built has to offer!
        </p>
        <a
          href='https://youtu.be/dQw4w9WgXcQ'
          target='__blank'
          class='mx-auto rounded-md bg-blue-500 p-2 text-xl font-bold uppercase text-white hover:bg-blue-600'
        >
          baronbuilthomes.com
        </a>
      </footer>
    </>
  );
};

export default Footer;
