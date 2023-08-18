import { createSignal, type Component } from 'solid-js';

// button with click animation
const Button: Component<{
  type: 'submit' | 'button' | 'reset';
  onclick: (e: Event) => void;
  children: string;
}> = ({ onclick, type, children }) => {
  const [isClicked, setIsClicked] = createSignal(false);

  const handleClick = (e: Event) => {
    e.preventDefault();
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 301);
    onclick(e);
  };
  return (
    <button
      type={type}
      class='w-full rounded-md bg-blue-500 py-2 text-xl font-semibold text-white hover:bg-blue-600'
      classList={{
        'animate-click': isClicked(),
      }}
      onclick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
