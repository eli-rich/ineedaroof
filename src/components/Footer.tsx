import { type Component } from 'solid-js';

const Footer: Component = () => {
  return (
    <>
      <footer class='mt-10 flex flex-col pb-5'>
        <a
          href='https://baronbuilthomes.com'
          target='__blank'
          class='mb-2 text-center font-mukta text-xl text-gray-400 hover:underline'
        >
          Discover more of what Baron Built Homes has to offer!
        </a>
        <a
          href='https://baronbuilthomes.com'
          target='__blank'
          class='mx-auto transform rounded-md bg-blue-700 p-2 text-xl font-bold uppercase text-white transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-blue-800'
        >
          baronbuilthomes.com
        </a>
      </footer>
    </>
  );
};

export default Footer;
