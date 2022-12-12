import styled from 'styled-components';

const StyledFeaturedWeather = styled.div`
  height: 20rem;
  padding-bottom: 1.6rem;
  border-radius: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  width: 100%;
  text-align: center;
  @media screen and (min-width: 450px) {
    width: 18rem;
  }
  .icon {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 18rem;
    height: 18rem;
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
`;
export default StyledFeaturedWeather;
