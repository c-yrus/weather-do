import Link from 'next/link';
import StyledAboutSection from './styles';

const AboutSection = () => {
  return (
    <StyledAboutSection>
      <section className="cards">
        <div className="container">
          <div className="drop">
            <h2>WeatherME</h2>
            <p>
              WeatherME is a weather app that allows you to search for the
              weather of any city in the world. You can also save your favorite
              cities
            </p>
            <Link className="read-btn" href="/">
              Home
            </Link>
          </div>
        </div>
      </section>
    </StyledAboutSection>
  );
};

export default AboutSection;
