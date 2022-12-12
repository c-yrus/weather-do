import BackdropWrapper from '@components/common/backdrop-wrapper';
import ResultCard from '@components/common/cards/result';
import Input from '@components/common/Input';
import { useGetWeather } from '@hooks/useGetWeather';
import { useState } from 'react';
import type { FC } from 'react';
import StyledSearchModal from './styles';
import Search from '@icons/common/search.svg';
import { useSaves } from 'context/saves';
import LocationIcon from '@icons/common/location.svg';
type SearchModalProps = {
  handleClose: () => void;
};
const SearchModal: FC<SearchModalProps> = ({ handleClose }) => {
  const [search, setSearch] = useState<string>('');
  const { getWeatherBylatAndLon, getWeatherByCity, weather } = useGetWeather();
  const { addSave } = useSaves();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    getWeatherByCity(search);
  };

  const handleClick = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      getWeatherBylatAndLon(
        position.coords.latitude,
        position.coords.longitude
      );
    });
  };

  return (
    <BackdropWrapper closeModal={() => handleClose()}>
      <StyledSearchModal>
        <h2>Search For Your City</h2>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="search"
            placeholder="Sousse, Tunis, Paris, London, etc..."
            onChange={setSearch}
            required={true}
            label=""
            minLength={3}
          >
            <div className="search" onClick={handleSubmit}>
              <Search />
            </div>
          </Input>
        </form>
        {weather && (
          <ResultCard
            name={weather.name}
            country={weather.sys.country}
            iconCode={weather.weather[0].icon}
            maxTemp={weather.main.temp_max}
            minTemp={weather.main.temp_min}
            temp={weather.main.temp}
            onClick={() => addSave(weather)}
          />
        )}
        <div className="seperator">OR</div>
        <div className="location" onClick={handleClick}>
          <p>Current Location</p>
          <LocationIcon />
        </div>
      </StyledSearchModal>
    </BackdropWrapper>
  );
};

export default SearchModal;
