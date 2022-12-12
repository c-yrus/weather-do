import { Container } from '@components/common/container';
import StyledFooter from './styles';

const Footer = () => {
  return (
    <StyledFooter>
      <div className="drop">
        <p>
          Made with <span>❤</span>
          <br /> Copyright 2022©
        </p>
      </div>
    </StyledFooter>
  );
};

export default Footer;
