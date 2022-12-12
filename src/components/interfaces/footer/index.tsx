import { useRouter } from 'next/router';
import StyledFooter from './styles';

const Footer = () => {
  const router = useRouter();
  return (
    <StyledFooter onClick={() => router.push('/about')}>
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
