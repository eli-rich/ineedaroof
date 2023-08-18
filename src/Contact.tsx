import { createSignal, type Component } from 'solid-js';
import Field from './Field';
import Button from './Button';

const Contact: Component = () => {
  const [nameRef, setNameRef] = createSignal<HTMLInputElement>();
  const [addressRef, setAddressRef] = createSignal<HTMLInputElement>();
  const [emailRef, setEmailRef] = createSignal<HTMLInputElement>();
  const [messageRef, setMessageRef] = createSignal<HTMLTextAreaElement>();

  const [showNameError, setShowNameError] = createSignal(false);
  const [showAddressError, setShowAddressError] = createSignal(false);
  const [showEmailError, setShowEmailError] = createSignal(false);
  const [showMessageError, setShowMessageError] = createSignal(false);

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    const name = nameRef()?.value;
    const address = addressRef()?.value;
    const email = emailRef()?.value;
    const message = messageRef()?.value;

    if (!name) setShowNameError(true);
    if (!address) setShowAddressError(true);
    if (!email) setShowEmailError(true);
    if (!message) setShowMessageError(true);
  };

  return (
    <>
      <h2 class='text-3xl capitalize text-white'>Get An Estimate</h2>
      <p class='mb-2 text-gray-400'>Fields with * are required.</p>
      <form class='flex flex-col gap-5 text-gray-400'>
        <div>
          <Field
            label='Name*'
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
            label='Address*'
            name='address'
            type='text'
            placeholder='Your Address...'
            setRef={setAddressRef}
          />
          <p
            class='font-mukta text-red-400'
            classList={{
              invisible: !showAddressError(),
            }}
          >
            Address is not required.
          </p>
        </div>
        <div>
          <Field
            label='Email*'
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
            label='Message*'
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
