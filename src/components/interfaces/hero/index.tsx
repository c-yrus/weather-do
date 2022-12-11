import StyledHero from './styles';
import Line from '@icons/hero/line.svg';
import Search from '@icons/common/search.svg';
import Button from '@components/common/button';
import FeaturedWeather from '@components/common/cards/featured-weather';
import { AnimatePresenceWrapper } from '@components/common/animate-presence-wrapper';
import { useState } from 'react';
import SearchModal from '@ui/search-modal';

const Hero = () => {
  const [openSearch, setOpenSearch] = useState(false);
  return (
    <>
      <StyledHero>
        <div className="left">
          <div className="title">
            <h2>Modernise</h2>
            <h2>
              with the <span>Cloud</span>
            </h2>
            <h2>that comes to you</h2>
            <div className="icon">
              <Line />
            </div>
          </div>
          <p>
            We`re helping to spread happiness with our drink happy, spread happy
            smoothies…read about how ethically sourcing moringa has had a
            positive impact on farmers and communities.
          </p>
          <Button onClick={() => setOpenSearch(true)}>
            Search your city
            <Search />
          </Button>
        </div>
        <div className="right">
          <div className="card" />
          <div className="maze" />
          <div className="container">
            <FeaturedWeather
              city="London"
              country="UK"
              day="Tuesday"
              time="6:00 am"
              state="Mostly Cloudy"
              temperature={14}
              type="Cloudy"
            />
            <FeaturedWeather
              city="London"
              country="UK"
              day="Tuesday"
              time="6:00 am"
              state="Mostly Cloudy"
              temperature={14}
              type="Sunny"
            />
            <FeaturedWeather
              city="London"
              country="UK"
              day="Tuesday"
              time="6:00 am"
              state="Mostly Cloudy"
              temperature={14}
              type="Rainy"
            />
            <FeaturedWeather
              city="London"
              country="UK"
              day="Tuesday"
              time="6:00 am"
              state="Mostly Cloudy"
              temperature={14}
              type="Snowy"
            />
          </div>
        </div>
      </StyledHero>
      <AnimatePresenceWrapper>
        {openSearch && (
          <SearchModal
            isOpen={openSearch}
            handleClose={() => setOpenSearch(false)}
          />
        )}
      </AnimatePresenceWrapper>
    </>
  );
};

export default Hero;
