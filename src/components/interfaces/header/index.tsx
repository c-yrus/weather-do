import StyledHeader from './styles';
import Sun from '@icons/header/sun.png';
import Link from 'next/link';
import { Container } from '@components/common/container';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Button from '@components/common/button';
import { addLock, removeLock } from '@utils/body';
import Close from '@icons/header/close.svg';
import Hamburger from '@icons/header/hamburger.svg';
import { AnimatePresenceWrapper } from '@components/common/animate-presence-wrapper';
import SignIn from '@ui/signin-modal';
import SignUp from '@ui/signup-modal';

const Header = () => {
  const [openSlider, setOpenSlider] = useState<boolean>(false);
  const [openSignIn, setOpenSignIn] = useState<boolean>(false);
  const [openSignUp, setOpenSignUp] = useState<boolean>(false);
  const openSliderHandler = () => {
    setOpenSlider(true);
    addLock();
  };
  const closeSliderHandler = () => {
    setOpenSlider(false);
    removeLock();
  };

  const openSignInHandler = () => {
    setOpenSignIn(true);
    addLock();
  };
  const closeSignInHandler = () => {
    setOpenSignIn(false);
    removeLock();
  };

  const closeSignUpHandler = () => {
    setOpenSignUp(false);
    removeLock();
  };
  const switchToSignInHandler = () => {
    setOpenSignUp(false);
    setOpenSignIn(true);
  };
  const switchToSignUpHandler = () => {
    setOpenSignIn(false);
    setOpenSignUp(true);
  };

  return (
    <>
      <StyledHeader>
        <Container>
          <Link href="/">
            <div className="logo">
              <img src={Sun.src} alt="sun logo" />
            </div>
          </Link>
          <ul className="links">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Button onClick={openSignInHandler}>Sign In</Button>
            </li>
          </ul>
          <div className="hamburger" onClick={() => openSliderHandler()}>
            <Hamburger />
          </div>
          <AnimatePresence>
            {openSlider && (
              <motion.div
                initial={{ opacity: 0, x: '-100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '-100%' }}
                transition={{
                  duration: 0.1,
                  type: 'spring',
                  damping: 45,
                  stiffness: 450,
                }}
                className="slider"
              >
                <div className="heading">
                  <Link href="/">
                    <div className="logo">
                      <img src={Sun.src} alt="sun logo" />
                    </div>
                  </Link>
                  <button
                    className="close"
                    onClick={() => closeSliderHandler()}
                  >
                    <Close />
                  </button>
                </div>
                <nav>
                  <ul className="links">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/about">About</Link>
                    </li>
                  </ul>
                </nav>
                <Button onClick={openSignInHandler}>Sign In</Button>
              </motion.div>
            )}
          </AnimatePresence>
        </Container>
      </StyledHeader>
      <AnimatePresenceWrapper>
        {openSignIn && (
          <SignIn
            key={'sign in'}
            handleClose={closeSignInHandler}
            switchToSignUp={switchToSignUpHandler}
          />
        )}
        {openSignUp && (
          <SignUp
            key={'sign up'}
            handleClose={closeSignUpHandler}
            switchToSignIn={switchToSignInHandler}
          />
        )}
      </AnimatePresenceWrapper>
    </>
  );
};

export default Header;
