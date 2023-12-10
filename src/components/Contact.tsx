import type { Component, ParentComponent } from 'solid-js';
import { FormType, formSchema } from './form/FormType';
import { SubmitHandler, createForm, email, required, zodForm } from '@modular-forms/solid';

const FieldContainer: ParentComponent = ({ children }) => (
  <div class='flex flex-col gap-1'>{children}</div>
);

const ErrorMessage: Component<{ error: string }> = ({ error }) => (
  <p class='font-mukta text-red-400'>{error}</p>
);

const Contact: Component = () => {
  const [contactForm, { Form, Field, FieldArray }] = createForm<FormType>();

  const inputFieldClass = 'h-10 rounded-sm p-2 font-mukta';
  const textAreaFieldClass = 'h-28 rounded-sm p-2 font-mukta';

  const submitHandler: SubmitHandler<FormType> = async (values, event) => {
    event.preventDefault();
    const response = await fetch('https://formspree.io/f/meqbypgl', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    if (!data || !data.ok) {
      console.error(data);
      alert(
        'There was an error submitting your form. Please contact the site owner at (555) 555-5555',
      );
    } else {
      alert('Your form was submitted successfully!');
    }
  };

  return (
    <>
      <h2 class='text-3xl capitalize text-white'>Get An Estimate</h2>
      <p class='mb-2 text-gray-400'>Fields with * are required.</p>
      <Form class='flex flex-col gap-5 text-gray-400' onSubmit={submitHandler}>
        <div>
          <Field name='name' validate={[required('Please enter your name.')]}>
            {(field, props) => {
              return (
                <>
                  <FieldContainer>
                    <label for='name'>Name*</label>
                    <input {...props} class={inputFieldClass} />
                  </FieldContainer>
                  {field.error && <ErrorMessage error={field.error} />}
                </>
              );
            }}
          </Field>
        </div>
        <div>
          <Field name='address' validate={[required('Please enter your address.')]}>
            {(field, props) => {
              return (
                <>
                  <FieldContainer>
                    <label for='address'>Address*</label>
                    <input {...props} class={inputFieldClass} />
                  </FieldContainer>
                  {field.error && <ErrorMessage error={field.error} />}
                </>
              );
            }}
          </Field>
        </div>
        <div>
          <Field
            name='email'
            validate={[
              required('Please enter a valid email address.'),
              email('Please enter a valid email address.'),
            ]}
          >
            {(field, props) => {
              return (
                <>
                  <FieldContainer>
                    <label for='email'>Email*</label>
                    <input {...props} class={inputFieldClass} />
                  </FieldContainer>
                  {field.error && <ErrorMessage error={field.error} />}
                </>
              );
            }}
          </Field>
        </div>
        <div>
          <Field name='phone' validate={[required('Please enter your phone number.')]}>
            {(field, props) => {
              return (
                <>
                  <FieldContainer>
                    <label for='phone'>Phone*</label>
                    <input {...props} class={inputFieldClass} />
                  </FieldContainer>
                  {field.error && <ErrorMessage error={field.error} />}
                </>
              );
            }}
          </Field>
        </div>
        <div>
          <div class='my-4 flex justify-between gap-1'>
            <Field name='existingRoof'>
              {(field, props) => {
                return (
                  <FieldContainer>
                    <label for='existingRoof'>Existing Roof</label>
                    <select {...props} class='w-full'>
                      <option value=''>Select One</option>
                      <option value='shingle'>Shingle</option>
                      <option value='metal'>Metal</option>
                      <option value='other'>Other</option>
                    </select>
                  </FieldContainer>
                );
              }}
            </Field>
            <Field name='newRoof'>
              {(field, props) => {
                return (
                  <FieldContainer>
                    <label for='newRoof'>New Roof</label>
                    <select {...props}>
                      <option value=''>Select One</option>
                      <option value='shingle'>Shingle</option>
                      <option value='metal'>Metal</option>
                      <option value='other'>Other</option>
                    </select>
                  </FieldContainer>
                );
              }}
            </Field>
          </div>
        </div>
        <div>
          <Field name='desiredTimeline'>
            {(field, props) => {
              return (
                <FieldContainer>
                  <label for='desiredTimeline'>Desired Timeline</label>
                  <input {...props} class={inputFieldClass} />
                </FieldContainer>
              );
            }}
          </Field>
        </div>
        <div>
          <Field name='message' validate={[required('Please enter your message.')]}>
            {(field, props) => {
              return (
                <>
                  <FieldContainer>
                    <label for='message'>Message*</label>
                    <textarea {...props} class={textAreaFieldClass} />
                  </FieldContainer>
                  {field.error && <ErrorMessage error={field.error} />}
                </>
              );
            }}
          </Field>
        </div>
        <button
          type='submit'
          class='w-full rounded-md bg-blue-500 py-2 text-xl font-semibold text-white hover:bg-blue-600'
        >
          Submit
        </button>
      </Form>
    </>
  );
};

export default Contact;
