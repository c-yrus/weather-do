import styled from 'styled-components';

const StyledSaves = styled.section`
  display: flex;
  flex-direction: column;
  gap: 11.6rem;
  width: 100%;
  margin-top: 16rem;
  text-align: center;

  header {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    h2 {
      font-style: normal;

      font-weight: 600;
      font-size: 2.4rem;
      line-height: 3.6rem;
      color: ${({ theme }) => theme.colors.primary.text};
      span {
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        background-image: ${({ theme }) => theme.colors.primary.color};
      }
      @media screen and (min-width: 768px) {
        font-size: 3.2rem;
        line-height: 4.8rem;
      }
    }
    p {
      font-style: normal;
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 2.1rem;
      color: ${({ theme }) => theme.colors.primary.description};

      @media screen and (min-width: 768px) {
        font-size: 1.6rem;
        line-height: 2.4rem;
      }
    }
  }

  .saves-cities {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 7rem;
    & > div {
      flex: 0 0 calc(1fr - 3rem);
      @media screen and (min-width: 768px) {
        flex: 0 0 calc(1fr - 3rem);
      }
    }
  }
`;

export default StyledSaves;
