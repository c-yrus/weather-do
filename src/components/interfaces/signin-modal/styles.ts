import styled from 'styled-components';

const StyledSignIn = styled.div`
  background: rgba(255, 255, 255, 0.29);
  backdrop-filter: blur(13.8px);
  padding: 5rem;
  border-radius: 1.6rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    .title {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .close {
      cursor: pointer;
      width: 5rem;
      height: 5rem;

      svg {
        width: 100%;
        height: 100%;
        &:hover {
          path {
            stroke: #ff5f6d;
            transition: all 0.3s ease-in-out;
          }
        }
      }
    }
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
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
  }

  h2 {
    font-size: 2.4rem;
    line-height: 2.4rem;
    font-weight: bolder;
    height: 100%;
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
    font-size: 1.4rem;
    line-height: 1.4rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.primary.color};
    @media screen and (min-width: 768px) {
      font-size: 2rem;
      line-height: 2rem;
    }
    span {
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      background-image: ${({ theme }) => theme.colors.primary.color};
      cursor: pointer;
    }
    &.center {
      text-align: center;
    }
  }
`;
export default StyledSignIn;
