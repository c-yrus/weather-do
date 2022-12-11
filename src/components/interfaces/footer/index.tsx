import { Container } from '@components/common/container';
import StyledFooter from './styles';

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <p>
          Made with <span>❤</span>, Copyright 2022 ©
        </p>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
