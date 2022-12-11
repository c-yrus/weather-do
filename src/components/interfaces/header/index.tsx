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

const Header = () => {
  const [openSlider, setOpenSlider] = useState<boolean>(false);
  const openSliderHandler = () => {
    setOpenSlider(true);
    addLock();
  };
  const closeSliderHandler = () => {
    setOpenSlider(false);
    removeLock();
  };

  return (
    <StyledHeader>
      <Container>
        <div className="logo">
          <img src={Sun.src} alt="sun logo" />
        </div>
        <ul className="links">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Button>Sign In</Button>
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
                <button className="close" onClick={() => closeSliderHandler()}>
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
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
              <Button>Sign In</Button>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </StyledHeader>
  );
};

export default Header;
