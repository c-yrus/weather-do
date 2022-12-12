import WeatherCard from '@components/common/cards/weather-card';
import { useSaves } from 'context/saves';
import StyledSaves from './styles';

const Saves = () => {
  const { saves } = useSaves();
  console.log(saves);
  return (
    <StyledSaves>
      <header>
        {saves.length === 0 ? (
          <h2>
            You don`t have any saved <span>cities</span> yet
          </h2>
        ) : (
          <>
            <h2>
              Saved <span>Cities</span>
            </h2>
            <p>Here you can find all your saved cities</p>
          </>
        )}
      </header>
      <div className="saves-cities">
        {saves.map((save, index) => (
          <WeatherCard
            key={index}
            city={save.name}
            country={save.sys.country}
            dt={save.dt}
            state={
              save.weather && save.weather[0]?.description
                ? save.weather[0].description
                : 'Mostly Cloudy'
            }
            temperature={save.main.temp}
            type={
              save.weather && save.weather[0]?.main
                ? save?.weather[0].main
                : 'Clear'
            }
          />
        ))}
      </div>
    </StyledSaves>
  );
};

export default Saves;
