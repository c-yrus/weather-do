import styled from 'styled-components';
import Maze from '@images/cards/hero/maze.png';

const StyledHero = styled.section`
  display: flex;
  flex-direction: column;
  gap: 11.6rem;
  width: 100%;
  margin-top: 16rem;
  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
  .left {
    flex: 1.5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    gap: 2rem;
    @media screen and (min-width: 768px) {
      gap: 5rem;
    }
    .title {
      position: relative;
      .icon {
        position: absolute;
        top: 0;
        right: 0;
        @media screen and (min-width: 1200px) {
          transform: translate(70%, -10%);
        }
      }
    }
    button {
      @media screen and (min-width: 768px) {
        margin-left: auto;
      }
      @media screen and (min-width: 1200px) {
        margin-left: 0;
      }
    }
    h2 {
      font-style: normal;
      font-weight: 700;
      font-size: 3.2rem;
      line-height: 4.8rem;
      color: ${({ theme }) => theme.colors.primary.text};
      text-transform: capitalize;
      span {
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        background-image: ${({ theme }) => theme.colors.primary.color};
      }
      @media screen and (min-width: 1200px) {
        font-size: 4.8rem;
        line-height: 6.2rem;
      }
    }
    p {
      font-style: normal;
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 2.1rem;
      color: ${({ theme }) => theme.colors.primary.description};
    }
  }

  .right {
    flex: 1;
    display: flex;
    position: relative;
    .container {
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

      @media screen and (min-width: 1200px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 6rem;
      }
    }
    .maze {
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background-image: url(${Maze.src});
      background-repeat: no-repeat;
      display: none;
      @media screen and (min-width: 1200px) {
        display: block;
      }
    }

    .card {
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      background: linear-gradient(
        235.19deg,
        rgba(255, 95, 109, 0.6) 5.21%,
        rgba(255, 195, 113, 0) 96.61%
      );
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      border-radius: 24px;
      display: none;
      @media screen and (min-width: 1200px) {
        display: block;
        width: 75%;
      }
    }
  }
`;
export default StyledHero;
