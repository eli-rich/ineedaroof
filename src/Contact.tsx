import { createSignal, type Component } from 'solid-js';
import Field from './Field';

const Contact: Component = () => {
  let [nameRef, setNameRef] = createSignal<HTMLInputElement>();
  let [emailRef, setEmailRef] = createSignal<HTMLInputElement>();
  let [messageRef, setMessageRef] = createSignal<HTMLTextAreaElement>();

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    const name = nameRef()?.value;
    const email = emailRef()?.value;
    const message = messageRef()?.value;
    console.log(name, email, message);
  };

  return (
    <>
      <form class='flex flex-col gap-7 text-gray-400'>
        <Field
          label='Name'
          name='name'
          type='text'
          placeholder='Your Name...'
          setRef={setNameRef}
        />
        <Field
          label='Email'
          name='email'
          type='email'
          placeholder='Your Email Address...'
          setRef={setEmailRef}
        />
        <Field
          label='Message'
          name='message'
          type='textarea'
          placeholder='Your Message...'
          setRef={setMessageRef}
        />
        <button
          type='submit'
          class='w-full rounded-md bg-blue-500 py-2 text-xl font-semibold text-white hover:bg-blue-600'
          onclick={handleSubmit}
        >
          Send Message
        </button>
      </form>
    </>
  );
};

export default Contact;
