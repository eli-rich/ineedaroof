import { createSignal, type Component, type ParentComponent } from 'solid-js';
import { FormType } from './form/FormType';
import {
  SubmitHandler,
  createForm,
  email,
  required,
  type ValidateField,
} from '@modular-forms/solid';

const FieldContainer: ParentComponent = ({ children }) => (
  <div class='flex flex-col gap-1'>{children}</div>
);

const ErrorMessage: Component<{ error: string }> = ({ error }) => (
  <p class='font-mukta text-red-400'>{error}</p>
);

const Contact: Component = () => {
  const [contactForm, { Form, Field, FieldArray }] = createForm<FormType>();

  const [message, setMessage] = createSignal<string | undefined>(undefined);
  const [title, setTitle] = createSignal<string | undefined>(undefined);
  const [showModal, setShowModal] = createSignal(false);

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
      setMessage(
        'There was an error submitting your form. Please contact the site owner at (555) 555-5555',
      );
      setTitle('Error');
      setShowModal(true);
    } else {
      setMessage('Your form was submitted successfully!');
      setTitle('Thank you');
      setShowModal(true);
    }
  };

  const CustomField: Component<{
    name: keyof FormType;
    validate: ValidateField<string | undefined>[];
    label: string;
    inputType: string;
    options?: string[];
  }> = ({ name, validate, label, inputType, options }) => (
    <Field name={name} validate={validate}>
      {(field, props) => {
        return (
          <>
            <FieldContainer>
              <label for={name}>{label}</label>
              {inputType === 'textarea' ? (
                <textarea {...props} id={name} class={textAreaFieldClass} />
              ) : inputType === 'select' ? (
                <select {...props} id={name} class='w-full'>
                  <option value=''>Select One</option>
                  {options && options.map(option => <option value={option}>{option}</option>)}
                </select>
              ) : (
                <input
                  {...props}
                  class={inputFieldClass}
                  type={inputType === 'tel' ? 'tel' : 'text'}
                  id={name}
                />
              )}
            </FieldContainer>
            {field.error && <ErrorMessage error={field.error} />}
          </>
        );
      }}
    </Field>
  );

  return (
    <>
      <h2 class='text-3xl capitalize text-white'>Get An Estimate</h2>
      <p class='mb-2 text-gray-400'>Fields with * are required.</p>
      <Form class='flex flex-col gap-5 text-gray-400' onSubmit={submitHandler}>
        <div>
          <CustomField
            name='name'
            validate={[required('Please enter your name.')]}
            label='Name*'
            inputType='text'
          />
        </div>
        <div>
          <CustomField
            name='address'
            validate={[required('Please enter your address.')]}
            label='Address*'
            inputType='text'
          />
        </div>
        <div>
          <CustomField
            name='email'
            validate={[
              required('Please enter a valid email address.'),
              email('Please enter a valid email address.'),
            ]}
            label='Email*'
            inputType='email'
          />
        </div>
        <div>
          <CustomField
            name='phone'
            validate={[required('Please enter your phone number.')]}
            label='Phone*'
            inputType='tel'
          />
        </div>
        <div>
          <div class='my-4 flex justify-between gap-1'>
            <CustomField
              name='existingRoof'
              validate={[]}
              label='Existing Roof'
              inputType='select'
              options={['Shingle', 'Metal', 'Other']}
            />
            <CustomField
              name='newRoof'
              validate={[]}
              label='New Roof'
              inputType='select'
              options={['Shingle', 'Metal', 'Other']}
            />
          </div>
        </div>
        <div>
          <CustomField
            name='desiredTimeline'
            validate={[]}
            label='Desired Timeline'
            inputType='text'
          />
        </div>
        <div>
          <CustomField
            name='message'
            validate={[required('Please enter your message.')]}
            label='Message*'
            inputType='textarea'
          />
        </div>
        <button
          type='submit'
          class='w-full rounded-md bg-blue-500 py-2 text-xl font-semibold text-white hover:bg-blue-600'
        >
          Submit
        </button>
      </Form>
      {showModal() && (
        <div class='fixed inset-0 z-10 overflow-y-auto'>
          <div class='flex min-h-screen items-end justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0'>
            <div class='fixed inset-0 transition-opacity' aria-hidden='true'>
              <div class='absolute inset-0 bg-gray-500 opacity-75'></div>
            </div>
            <span class='hidden sm:inline-block sm:h-screen sm:align-middle' aria-hidden='true'>
              &#8203;
            </span>
            <div class='inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle'>
              <div class='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
                <div class='sm:flex sm:items-start'>
                  <div class='mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left'>
                    <h3 class='text-lg font-medium leading-6 text-gray-900' id='modal-title'>
                      {title() || 'Thank you'}
                    </h3>
                    <div class='mt-2'>
                      <p class='text-sm text-gray-500'>{message()}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class='bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
                <button
                  type='button'
                  class='mt-3 inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:ml-3 sm:mt-0 sm:w-auto sm:text-sm'
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
