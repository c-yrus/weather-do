import Button from '@components/common/button';
import { FC } from 'react';
import StyledResultCard from './styles';

type ResultCardProps = {
  name: string;
  country: string;
  temp: number;
  minTemp: number;
  maxTemp: number;
  iconCode: string;
  onClick: () => void;
};

const ResultCard: FC<ResultCardProps> = ({
  name,
  country,
  onClick,
  iconCode,
  maxTemp,
  minTemp,
  temp,
}) => {
  const convertKelvinToCelsius = (temp: number) => {
    return Math.round(temp - 273.15);
  };
  return (
    <StyledResultCard>
      <h3>
        {name}, {country}
      </h3>
      <h3>{convertKelvinToCelsius(temp)} C°</h3>
      <img
        src={`http://openweathermap.org/img/w/${iconCode}.png`}
        alt="Weather icon"
      />
      <p>
        {convertKelvinToCelsius(minTemp)} ~ {convertKelvinToCelsius(maxTemp)}
      </p>

      <Button height="2rem" onClick={onClick}>
        Save
      </Button>
    </StyledResultCard>
  );
};

export default ResultCard;
