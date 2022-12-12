import styled from 'styled-components';

const StyledAboutSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  .cards .container {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    padding: 2rem;
    display: grid;
    place-items: center;
    gap: 5rem;
  }

  .cards .drop {
    width: 100%;
    height: 500px;
    position: relative;
    box-shadow: inset 20px 20px 20px rgba(0, 0, 0, 0.1),
      25px 35px 20px rgba(0, 0, 0, 0.1), 25px 30px 30px rgba(0, 0, 0, 0.1),
      inset -20px -20px 25px rgba(255, 255, 255, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 4rem;
    transition: border-radius 0.5s;
    overflow: hidden;
    text-align: center;
    animation: drop 2s infinite alternate ease-in-out;
  }

  .cards .drop {
    border-radius: 38% 62% 46% 54% / 46% 51% 49% 54%;
  }

  @keyframes drop {
    from {
      border-radius: 38% 62% 46% 54% / 46% 51% 49% 54%;
    }

    to {
      border-radius: 50%;
    }
  }

  .cards .drop::before {
    content: '';
    position: absolute;
    top: 50px;
    left: 75px;
    width: 35px;
    height: 35px;
    background: white;
    border-radius: 50%;
    opacity: 0.7;
  }

  .cards .drop::after {
    content: '';
    position: absolute;
    top: 90px;
    left: 100px;
    width: 15px;
    height: 15px;
    background: white;
    border-radius: 50%;
    opacity: 0.7;
  }

  p {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary.text};
    font-size: 1.4rem;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    transition: all 0.3s ease;
  }
  .read-btn {
    text-decoration: none;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    font-family: inherit;
    color: inherit;
    font-weight: 600;
    font-size: 1.2rem;
    padding: 0.5rem;
    cursor: pointer;
  }
`;

export default StyledAboutSection;
