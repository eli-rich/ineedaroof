import { createSignal, type Component } from 'solid-js';
import Field from './Field';
import Button from './Button';

const Contact: Component = () => {
  let [nameRef, setNameRef] = createSignal<HTMLInputElement>();
  let [emailRef, setEmailRef] = createSignal<HTMLInputElement>();
  let [messageRef, setMessageRef] = createSignal<HTMLTextAreaElement>();

  let [showNameError, setShowNameError] = createSignal(false);
  let [showEmailError, setShowEmailError] = createSignal(false);
  let [showMessageError, setShowMessageError] = createSignal(false);

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    const name = nameRef()?.value;
    const email = emailRef()?.value;
    const message = messageRef()?.value;
    if (!name) setShowNameError(true);
    if (!email) setShowEmailError(true);
    if (!message) setShowMessageError(true);
  };

  return (
    <>
      <form class='flex flex-col gap-5 text-gray-400'>
        <div>
          <Field
            label='Name'
            name='name'
            type='text'
            placeholder='Your Name...'
            setRef={setNameRef}
          />
          <p
            class='font-mukta text-red-400'
            classList={{
              invisible: !showNameError(),
            }}
          >
            Name is a required field.
          </p>
        </div>
        <div>
          <Field
            label='Email'
            name='email'
            type='email'
            placeholder='Your Email Address...'
            setRef={setEmailRef}
          />
          <p class='font-mukta text-red-400' classList={{ invisible: !showEmailError() }}>
            Email is a required field.
          </p>
        </div>
        <div>
          <Field
            label='Message'
            name='message'
            type='textarea'
            placeholder='Your Message...'
            setRef={setMessageRef}
          />
          <p class='font-mukta text-red-400' classList={{ invisible: !showMessageError() }}>
            Message is a required field.
          </p>
        </div>
        <Button type='submit' onclick={handleSubmit}>
          Send Message
        </Button>
      </form>
    </>
  );
};

export default Contact;
