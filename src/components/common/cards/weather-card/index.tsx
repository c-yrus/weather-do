import { FC, useState } from 'react';
import StyledWeatherCard from './styles';
import Cloudy from '@images/cards/hero/cloud.png';
import Snowy from '@images/cards/hero/snow.png';
import Sunny from '@images/cards/hero/sun.png';
import Rainy from '@images/cards/hero/thunder.png';
import { AnimatePresence, motion } from 'framer-motion';
type WeatherCardProps = {
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
const WeatherCard: FC<WeatherCardProps> = ({
  city,
  country,
  dt,
  state,
  temperature,
  type,
}) => {
  const [openInfo, setOpenInfo] = useState(false);

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
    <StyledWeatherCard className={type} onClick={() => setOpenInfo(!openInfo)}>
      <div>
        <AnimatePresence mode="wait">
          {openInfo && (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.5,
              }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
              }}
              className="icon"
            >
              {type === 'Clear' && <img src={Sunny.src} alt="Sunny" />}
              {(type === 'Clouds' ||
                type === 'Atmosphere' ||
                type === 'Mist') && <img src={Cloudy.src} alt="Cloudy" />}
              {(type === 'Rain' ||
                type === 'Drizzle' ||
                type === 'Thunderstorm') && <img src={Rainy.src} alt="Rainy" />}

              {type === 'Snow' && <img src={Snowy.src} alt="Snowy" />}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.h2>
          {city}, {country}
        </motion.h2>

        <AnimatePresence mode="wait">
          {openInfo && (
            <motion.div
              key="content"
              initial="collapsed"
              animate="open"
              exit="collapsed"
              className="info"
              variants={{
                open: {
                  opacity: 1,
                  height: 'auto',
                },
                collapsed: { opacity: 0, height: 0, overflow: 'hidden' },
              }}
              transition={{ duration: 0.3, type: 'spring', stiffness: 100 }}
            >
              <p>
                {day}, {time}
              </p>
              <p>{state}</p>
            </motion.div>
          )}
        </AnimatePresence>

        <h5>{temperature}°C</h5>
      </div>
    </StyledWeatherCard>
  );
};

export default WeatherCard;
