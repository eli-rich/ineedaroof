import { Component } from 'solid-js';

const Testimonial: Component = () => {
  return (
    <section class='mt-5 grid content-center items-center justify-center'>
      <div class='flex max-h-min max-w-2xl flex-col items-center justify-center gap-2 p-4 text-white'>
        <h2 class='text-2xl'>Testimonial</h2>
        <p>
          "In September of 2023, I needed a new roof for the home my 93 year old father lives in as
          soon as possible. Dave Baron of Baron Built Homes came out and gave me a price. He ordered
          the materials and dumpster and as soon as it was all there, started the job. In just a
          couple of days, we had a new, beautiful roof. Everyone was polite and well mannered. His
          crew did an excellent job!
          <br />
          <br />
          They picked up all the debris that comes with taking the old roof off and disposed of it.
          They left nothing in the yard, it was like they found it. I will most certainly recommend
          him in the future. Since then I have used his company on a couple projects at my own home,
          and like before, he did an awesome job. Give him a try. Thank you for all you and your
          crew have done."
        </p>
        <p class='self-start italic'>-Connie Strack</p>
      </div>
    </section>
  );
};

export default Testimonial;
