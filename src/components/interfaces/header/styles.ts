import styled from 'styled-components';

const StyledHeader = styled.header`
  & > div {
    height: 8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .logo {
    width: 5rem;
    height: 5rem;
    img {
      max-width: 100%;
      max-height: 100%;
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
      margin-right: 2rem;

      a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.primary.text};
        font-weight: 400;
        font-size: 2rem;
        line-height: 2.9rem;
      }
    }
  }
  .humburger {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 2rem;
    height: 1.5rem;
    cursor: pointer;
    margin-right: 2rem;
    .line {
      width: 100%;
      height: 0.2rem;
      background-color: ${({ theme }) => theme.colors.primary.text};
    }
    @media screen and (min-width: 768px) {
      display: none;
    }
  }
`;
export default StyledHeader;
