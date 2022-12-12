import styled from 'styled-components';

const StyledSearchModal = styled.div`
  background: rgba(255, 255, 255, 0.29);
  backdrop-filter: blur(13.8px);
  padding: 5rem;
  border-radius: 1.6rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  height: max-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  h2 {
    font-size: 2.4rem;
    line-height: 3rem;
    font-weight: bolder;
    text-align: center;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    background-image: ${({ theme }) => theme.colors.primary.color};
    @media screen and (min-width: 768px) {
      font-size: 4rem;
      line-height: 5rem;
    }
  }
  p {
    height: 100%;
    font-size: 1.4rem;
    line-height: 2rem;
    font-weight: 600;
    text-align: center;
    @media screen and (min-width: 768px) {
      font-size: 2rem;
      line-height: 2.4rem;
    }
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    background-image: ${({ theme }) => theme.colors.primary.color};
    cursor: pointer;
  }
  .seperator {
    width: 100%;
    text-align: center;
    position: relative;
    font-size: 1.65rem;
    font-weight: 600;
    color: #b6b6b6;
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      width: 45%;
      height: 1px;
      background-color: gray;
    }

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      right: 0;
      width: 45%;
      height: 1px;
      background-color: gray;
    }
  }
  .search {
    background: ${({ theme }) => theme.colors.primary.color};
    border-radius: 10rem;
    width: 4rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .location {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    svg {
      cursor: pointer;
    }
  }
`;

export default StyledSearchModal;
