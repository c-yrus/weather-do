import { FC } from 'react';
import StyledButton from './styles';

type ButtonProps = {
  children: React.ReactNode;
  width?: string;
  height?: string;
  fitContent?: boolean;
  padding?: string;
  margin?: string;
  type?: 'button' | 'submit' | 'reset';
  theme?: 'primary' | 'secondary' | 'tertiary';
  onClick?: () => void;
};

const Button: FC<ButtonProps> = ({
  children,
  height,
  margin,
  onClick,
  padding,
  theme = 'primary',
  type,
  width,
}) => {
  return (
    <StyledButton
      style={{ width, height, margin, padding }}
      className={`${theme} ${type}`}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
