import { FC, useRef } from 'react';
import StyledInput from './styles';

type InputProps = {
  name: string;
  label: string;
  placeholder: string;
  type: 'text' | 'password' | 'email';
  maxLength?: number;
  minLength?: number;
  width?: string;
  height?: string;
  padding?: string;
  required?: boolean;
  disabled?: boolean;
  onChange?: (value: string) => void;
  children?: React.ReactNode;
};

const Input: FC<InputProps> = ({
  label,
  name,
  type,
  placeholder,
  disabled,
  maxLength,
  height,
  minLength,
  padding,
  width,
  onChange,
  required,
  children,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <StyledInput style={{ width, padding, height }}>
      <label htmlFor={name}>{label}</label>
      <div className="input">
        <input
          ref={inputRef}
          type={type}
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
        {children}
      </div>
    </StyledInput>
  );
};

export default Input;
