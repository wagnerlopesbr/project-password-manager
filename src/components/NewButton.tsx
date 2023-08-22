import { ButtonProps } from '../types';

function NewButton({ children, handleClick }: ButtonProps) {
  return (
    <button onClick={ handleClick }>
      {children}
    </button>
  );
}

export default NewButton;
