import { type Component } from 'solid-js';

const About: Component = () => {
  return (
    <>
      <section class='mx-auto mb-10 flex max-h-min w-4/5 max-w-lg flex-col justify-center gap-2 sm:flex-row'>
        <img
          src='/family.webp'
          alt='placeholder'
          class='mx-auto w-2/3 rounded-md border-2 border-blue-950 sm:w-1/2'
          width={600}
          height={800}
        />
        <div class='text-center text-white sm:text-left'>
          <h2 class='text-xl'>About Me</h2>
          <p class=''>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tortor felis, dapibus non
            turpis vel, bibendum bibendum lorem. Ut id massa et ex volutpat congue at eu leo.
            Quisque sit.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
