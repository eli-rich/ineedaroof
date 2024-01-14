import { type Component } from 'solid-js';

const About: Component = () => {
  return (
    <>
      <main class='grid content-center items-center justify-center'>
        <section class='mb-10 flex max-h-min max-w-2xl flex-col items-center justify-center gap-2 p-4 sm:flex-row'>
          <div class='order-1 flex-1 text-center text-white sm:order-2 sm:text-left'>
            <h2 class='text-xl'>About Us</h2>
            <p class=''>
              I Need A Roof is a Baron Built Homes company focused on roofing. We do new roofs and
              re-roofs. We are certified to install FORTIFIED ROOFs, that withstand High Wind, Hail,
              and Hurricanes. We take pride in everything we do and treat each project with the same
              care and consideration.
              <br />
              <br />
              David Baron and his family have been serving Baldwin County and the rest of Alabama
              since 1994. If you're ready to get your roof installed by a local contractor, please
              fill out the form below. If you want to know more information about us, check out{' '}
              <a href='https://baronbuilthomes.com' target='__blank' class='underline'>
                baronbuilthomes.com
              </a>
            </p>
          </div>
          <img
            src='/resized.webp'
            alt='Portrait of the Baron family.'
            class='order-2 mx-auto max-h-96 rounded-md border-2 border-blue-950 sm:order-1'
          />
        </section>
      </main>
    </>
  );
};

export default About;
