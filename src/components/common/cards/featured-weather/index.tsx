import { FC } from 'react';
import StyledFeaturedWeather from './styles';
import Cloudy from '@images/cards/hero/cloud.png';
import Snowy from '@images/cards/hero/snow.png';
import Sunny from '@images/cards/hero/sun.png';
import Rainy from '@images/cards/hero/thunder.png';

type FeaturedWeatherProps = {
  country: string;
  city: string;
  dt: number;
  state: string;
  temperature: number;
  type:
    | 'Thunderstorm'
    | 'Drizzle'
    | 'Rain'
    | 'Snow'
    | 'Atmosphere'
    | 'Clear'
    | 'Clouds'
    | 'Extreme'
    | 'Additional'
    | 'Mist';
};

const FeaturedWeather: FC<FeaturedWeatherProps> = ({
  city,
  country,
  dt,
  state,
  temperature,
  type,
}) => {
  const day = new Date(dt * 1000).toLocaleDateString('en-US', {
    weekday: 'long',
  });
  const time = new Date(dt * 1000).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  const convertKelvinToCelsius = (temp: number) => {
    return Math.round(temp - 273.15);
  };
  temperature = convertKelvinToCelsius(temperature);
  return (
    <StyledFeaturedWeather className={type}>
      <div className="icon">
        {type === 'Clear' && <img src={Sunny.src} alt="Sunny" />}
        {(type === 'Clouds' || type === 'Atmosphere' || type === 'Mist') && (
          <img src={Cloudy.src} alt="Cloudy" />
        )}
        {(type === 'Rain' || type === 'Drizzle' || type === 'Thunderstorm') && (
          <img src={Rainy.src} alt="Rainy" />
        )}

        {type === 'Snow' && <img src={Snowy.src} alt="Snowy" />}
      </div>
      <h2>
        {city}, {country}
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
