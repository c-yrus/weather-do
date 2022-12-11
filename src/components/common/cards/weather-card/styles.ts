import styled from 'styled-components';

const StyledWeatherCard = styled.div`
  box-shadow: -1px -1px 8px rgba(3, 0, 30, 0.08);
  height: 100%;
  padding: 1rem;
  border-radius: 2.5rem;
  position: relative;
  width: 100%;
  @media screen and (min-width: 450px) {
    width: 18rem;
  }
  & > div {
    min-width: 5rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
  }

  cursor: pointer;
  .icon {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 10rem;
    height: 10rem;
    img {
      width: 100%;
      height: 100%;
    }
    @media screen and (min-width: 450px) {
      right: -25%;
      bottom: -25%;
    }
  }
  h2 {
    text-transform: capitalize;
    font-style: normal;
    font-weight: 600;
    font-size: 2rem;
    line-height: 3rem;
    color: ${({ theme }) => theme.colors.secondary.text};
  }
  p {
    color: ${({ theme }) => theme.colors.secondary.description};
    font-style: normal;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2.1rem;
  }
  h5 {
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2.1rem;
    color: ${({ theme }) => theme.colors.secondary.text};
  }
  &.Clear {
    background: linear-gradient(140.99deg, #fa8607 0%, #fecc51 100%);
  }
  &.Clouds,
  &.Atmosphere,
  &.Mist {
    background: linear-gradient(140.99deg, #092e5a 0%, #e87a90 100%);
  }
  &.Rain,
  &.Drizzle,
  &.Thunderstorm {
    background: linear-gradient(140.99deg, #22c1c3 0%, #fdbb2d 100%);
  }
  &.Snow {
    background: linear-gradient(140.99deg, #6190e8 0%, #a7bfe8 100%);
  }
  .info {
    text-align: center;
  }
`;
export default StyledWeatherCard;
