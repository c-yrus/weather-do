import { FC } from 'react';
import StyledFeaturedWeather from './styles';
import Cloudy from '@images/cards/hero/cloud.png';
import Snowy from '@images/cards/hero/snow.png';
import Sunny from '@images/cards/hero/sun.png';
import Rainy from '@images/cards/hero/thunder.png';

type FeaturedWeatherProps = {
  country: string;
  city: string;
  day: string;
  time: string;
  state: string;
  temperature: number;
  type: 'Sunny' | 'Cloudy' | 'Rainy' | 'Snowy';
};

const FeaturedWeather: FC<FeaturedWeatherProps> = ({
  city,
  country,
  day,
  state,
  temperature,
  time,
  type,
}) => {
  return (
    <StyledFeaturedWeather className={type}>
      <div className="icon">
        {type === 'Sunny' && <img src={Sunny.src} alt="Sunny" />}
        {type === 'Cloudy' && <img src={Cloudy.src} alt="Cloudy" />}
        {type === 'Rainy' && <img src={Rainy.src} alt="Rainy" />}
        {type === 'Snowy' && <img src={Snowy.src} alt="Snowy" />}
      </div>
      <h2>
        {city},{country}
      </h2>
      <p>
        {day}, {time}
      </p>
      <p>{state}</p>
      <h5>{temperature}°C</h5>
    </StyledFeaturedWeather>
  );
};

export default FeaturedWeather;
