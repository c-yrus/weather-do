import { FC, useRef } from 'react';
import StyledInput from './styles';

type InputProps = {
  name: string;
  label: string;
  placeholder: string;
  maxLength?: number;
  minLength?: number;
  width?: string;
  height?: string;
  padding?: string;
  required?: boolean;
  disabled?: boolean;
  onChange?: (value: string) => void;
};

const Input: FC<InputProps> = ({
  label,
  name,
  placeholder,
  disabled,
  maxLength,
  height,
  minLength,
  padding,
  width,
  onChange,
  required,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <StyledInput style={{ width, padding, height }}>
      <label htmlFor={name}>{label}</label>
      <input
        ref={inputRef}
        type="text"
        placeholder={placeholder}
        required={required}
        autoComplete="on"
        maxLength={maxLength}
        minLength={minLength}
        name={name}
        onChange={(e) => {
          onChange && onChange(e.target.value);
        }}
        disabled={disabled}
      />
    </StyledInput>
  );
};

export default Input;
