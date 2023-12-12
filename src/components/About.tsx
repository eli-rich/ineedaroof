import { type Component } from 'solid-js';

const About: Component = () => {
  return (
    <>
      <section class='mx-auto mb-10 flex max-h-min w-4/5 max-w-xl flex-col justify-center gap-2 sm:flex-row'>
        <div class='order-1 text-center text-white sm:order-2 sm:text-left'>
          <h2 class='text-xl'>About Us</h2>
          <p class=''>
            We are a custom home builder who can make your vision a reality. Whether you want a cozy
            starter home or a lavish dream home, we can handle any project, big or small. We also do
            remodeling, addition, and roofing.
            <br /> <br />
            We care about every home and project we work on, and we deliver quality work with pride.
            <br />
            <br /> We are licensed, insured, and Fortified Home certified.
          </p>
        </div>
        <img
          src='/resized.webp'
          alt='Portrait of the Baron family.'
          class='order-2 mx-auto max-h-96 rounded-md border-2 border-blue-950 sm:order-1'
        />
      </section>
    </>
  );
};

export default About;
