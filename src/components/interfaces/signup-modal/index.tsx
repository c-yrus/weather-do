import BackdropWrapper from '@components/common/backdrop-wrapper';
import Input from '@components/common/Input';
import { FC } from 'react';
import StyledSignUp from './styles';
import Close from '@icons/header/close.svg';
import Button from '@components/common/button';

type SignUpProps = {
  handleClose: () => void;
  switchToSignIn: () => void;
};

const SignUp: FC<SignUpProps> = ({ handleClose, switchToSignIn }) => {
  return (
    <BackdropWrapper closeModal={() => handleClose()}>
      <StyledSignUp>
        <header>
          <div className="title">
            <h2>Sign Up</h2>
            <p>Welcome To weatherMe, It`s a pleasure to see you here</p>
          </div>
          <div className="close" onClick={handleClose}>
            <Close />
          </div>
        </header>

        <form>
          <Input
            type="text"
            placeholder="First Name"
            label=""
            name="firstname"
            required={true}
            minLength={3}
          />
          <Input
            type="text"
            label=""
            placeholder="Last Name"
            name="firstname"
            required={true}
            minLength={8}
          />
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
          <Input
            type="password"
            label=""
            placeholder="Confirm Password"
            name="confirm-password"
            required={true}
            minLength={8}
          />
          <Button>sign up</Button>
          <div className="seperator">OR</div>
          <p className="center">
            Already Have an account
            <span onClick={switchToSignIn}> Sign In</span> now!
          </p>
        </form>
      </StyledSignUp>
    </BackdropWrapper>
  );
};

export default SignUp;
