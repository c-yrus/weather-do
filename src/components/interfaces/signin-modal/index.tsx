import BackdropWrapper from '@components/common/backdrop-wrapper';
import Button from '@components/common/button';
import Input from '@components/common/Input';
import type { FC } from 'react';
import StyledSignIn from './styles';
import Close from '@icons/header/close.svg';
type SignInProps = {
  handleClose: () => void;
  switchToSignUp: () => void;
};

const SignIn: FC<SignInProps> = ({ handleClose, switchToSignUp }) => {
  return (
    <BackdropWrapper closeModal={() => handleClose()}>
      <StyledSignIn>
        <header>
          <div className="title">
            <h2>Sign In</h2>
            <p>Welcome Back To weatherMe</p>
          </div>
          <div className="close" onClick={handleClose}>
            <Close />
          </div>
        </header>

        <form>
          <Input
            type="email"
            label=""
            placeholder="Email"
            name="email"
            required={true}
            minLength={8}
          />
          <Input
            type="password"
            label=""
            placeholder="Password"
            name="password"
            required={true}
            minLength={8}
          />
          <Button>sign in</Button>
          <div className="seperator">OR</div>
          <p className="center">
            Create a <span onClick={switchToSignUp}>new account</span> right
            now!
          </p>
        </form>
      </StyledSignIn>
      ;
    </BackdropWrapper>
  );
};

export default SignIn;
