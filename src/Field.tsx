import type { Accessor, Component, Setter } from 'solid-js';
import { Show, createEffect, createSignal, onMount } from 'solid-js';

type FieldProps = {
  label: string;
  name: string;
  placeholder: string;
} & (
  | {
      type: 'textarea';
      setRef: Setter<HTMLTextAreaElement | undefined>;
    }
  | {
      type: 'text' | 'email';
      setRef: Setter<HTMLInputElement | undefined>;
    }
);

const InputField: Component<FieldProps> = ({ label, name, type, placeholder, setRef }) => {
  let inputRef: HTMLInputElement | undefined;
  onMount(() => {
    if (!inputRef) return;
    if (type === 'textarea') return;
    setRef(inputRef);
    // ^?
  });

  return (
    <>
      <div class='flex flex-col gap-1'>
        <label for={name}>{label}</label>
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          class='font-mukta h-10 rounded-sm p-2'
          ref={inputRef!}
        />
      </div>
    </>
  );
};

const TextAreaField: Component<FieldProps> = ({ label, name, placeholder, type, setRef }) => {
  let textAreaRef: HTMLTextAreaElement | undefined;
  onMount(() => {
    if (!textAreaRef) return;
    if (type !== 'textarea') return;
    setRef(textAreaRef);
  });

  return (
    <>
      <div class='flex flex-col gap-1'>
        <label for={name}>{label}</label>
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          class='font-mukta h-28 rounded-sm p-2'
          ref={textAreaRef}
        />
      </div>
    </>
  );
};

const Field: Component<FieldProps> = ({ label, name, type, placeholder, setRef }) => {
  return (
    <>
      {type !== 'textarea' ? (
        <InputField
          label={label}
          name={name}
          placeholder={placeholder}
          type={type}
          setRef={setRef}
        />
      ) : (
        <TextAreaField
          label={label}
          name={name}
          placeholder={placeholder}
          type={type}
          setRef={setRef}
        />
      )}
    </>
  );
};

export default Field;
