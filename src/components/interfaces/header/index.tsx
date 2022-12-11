import StyledHeader from './styles';
import Sun from '@icons/header/sun.png';
import Link from 'next/link';
import { Container } from '@components/common/container';

const Header = () => {
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
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <div className="humburger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </Container>
    </StyledHeader>
  );
};

export default Header;
