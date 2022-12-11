import styled from 'styled-components';

const StyledFeaturedWeather = styled.div`
  width: 18rem;
  height: 20rem;
  padding-bottom: 1.6rem;
  border-radius: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  box-shadow: -1px -1px 8px rgba(3, 0, 30, 0.08);
  position: relative;

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
  &.Sunny {
    background: linear-gradient(140.99deg, #fa8607 0%, #fecc51 100%);
  }
  &.Cloudy {
    background: linear-gradient(140.99deg, #092e5a 0%, #e87a90 100%);
  }
  &.Rainy {
    background: linear-gradient(140.99deg, #22c1c3 0%, #fdbb2d 100%);
  }
  &.Snowy {
    background: linear-gradient(140.99deg, #6190e8 0%, #a7bfe8 100%);
  }
`;
export default StyledFeaturedWeather;
