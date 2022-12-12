import StyledHero from './styles';
import Line from '@icons/hero/line.svg';
import Search from '@icons/common/search.svg';
import Button from '@components/common/button';
import FeaturedWeather from '@components/common/cards/featured-weather';
import { AnimatePresenceWrapper } from '@components/common/animate-presence-wrapper';
import { useEffect, useState } from 'react';
import SearchModal from '@ui/search-modal';
import { addLock, removeLock } from '@utils/body';
import type { Weather, WeatherGroupe } from 'context/saves/types';
import { useGetWeather } from '@hooks/useGetWeather';

const Hero = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const ids = [2995468, 6455259, 2998285, 2464915];
  const [featuredWeather, setFeaturedWeather] = useState<WeatherGroupe>();
  const openSearchHandler = () => {
    setOpenSearch(true);
    addLock();
  };
  const { getGroupWeather } = useGetWeather();
  const closeSearchHandler = () => {
    setOpenSearch(false);
    removeLock();
  };

  useEffect(() => {
    getGroupWeather(ids, setFeaturedWeather);
  }, []);
  console.log(featuredWeather);
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
          <Button onClick={() => openSearchHandler()}>
            Search your city
            <Search />
          </Button>
        </div>
        <div className="right">
          <div className="card" />
          <div className="maze" />
          <div className="container">
            {featuredWeather &&
              featuredWeather.list.map((weather: Weather) => (
                <FeaturedWeather
                  key={weather.id}
                  city={weather.name}
                  country={weather.sys.country}
                  dt={weather.dt}
                  state={
                    weather.weather && weather.weather[0]?.description
                      ? weather.weather[0].description
                      : 'Mostly Cloudy'
                  }
                  temperature={weather.main.temp}
                  type={
                    weather.weather && weather.weather[0]?.main
                      ? weather.weather[0].main
                      : 'Clear'
                  }
                />
              ))}
          </div>
        </div>
      </StyledHero>

      <AnimatePresenceWrapper>
        {openSearch && <SearchModal handleClose={() => closeSearchHandler()} />}
      </AnimatePresenceWrapper>
    </>
  );
};

export default Hero;
