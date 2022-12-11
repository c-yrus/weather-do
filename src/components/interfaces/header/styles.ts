import styled from 'styled-components';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  /* From https://css.glass */
  background: rgba(255, 255, 255, 01);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  z-index: 10;
  & > div {
    height: 8rem;
    display: flex;
    flex-direction: row-reverse;

    justify-content: space-between;
    align-items: center;
    width: 100%;
    @media screen and (min-width: 768px) {
      flex-direction: row;
    }
  }
  .logo {
    width: 5rem;
    height: 5rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .links {
    display: none;
    @media screen and (min-width: 768px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: max-content;
      gap: 5rem;

      a {
        color: ${({ theme }) => theme.colors.primary.text};
        text-decoration: none;
        font-weight: 400;
        font-size: 2rem;
        line-height: 2.9rem;
      }
    }
  }
  .hamburger {
    width: 4rem;
    height: 4rem;
    svg {
      width: 100%;
      height: 100%;
    }
    @media screen and (min-width: 768px) {
      display: none;
    }
  }

  .slider {
    position: absolute;
    height: 100vh;
    background: rgba(61, 61, 61, 0.22);
    backdrop-filter: blur(18.5px);
    -webkit-backdrop-filter: blur(18.5px);
    top: 0;
    left: 0;
    width: 100%;
    padding: 4.9rem 3rem 3rem;
    display: flex;
    flex-direction: column;
    z-index: 100;
    .heading {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 7rem;
      width: 100%;
      .close {
        width: 5rem;
        height: 5rem;
        svg {
          width: 100%;
          height: 100%;
        }
      }
    }
    nav {
      width: 100%;
    }
    ul {
      display: flex;
      flex-direction: column;
      text-decoration: none;
      font-weight: 400;
      font-size: 2rem;
      line-height: 2.9rem;
      li {
        padding: 2rem 0;

        &.about {
          position: relative;
          margin-top: 2rem;

          &::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 2px;
            background-color: #a4a4a4;
            top: -10px;
            left: 0;
          }
        }
      }
    }

    nav ~ button {
      margin-top: auto;
    }

    @media screen and (min-width: 992px) {
      display: none;
    }
  }
`;
export default StyledHeader;
