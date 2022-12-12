import styled from 'styled-components';

const StyledFooter = styled.footer`
  margin-top: 16rem;
  width: 100%;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .drop {
    width: 200px;
    height: 150px;
    border-radius: 51% 49% 33% 67% / 39% 48% 52% 61%;
    background: transparent;
    box-shadow: inset 15px 15px 30px #00000020, inset -15px -15px 30px #fff,
      20px 60px 40px #00000010;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
    transition: all 0.5s ease;
  }

  .drop::before {
    content: '';
    position: absolute;
    top: 100px;
    left: 90px;
    background: #fff;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }

  .drop::after {
    content: '';
    position: absolute;
    top: 150px;
    left: 150px;
    background: #fff;
    border-radius: 50%;
    width: 20px;
    height: 20px;
  }

  .drop p {
    font-style: normal;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2.1rem;
    color: ${({ theme }) => theme.colors.primary.text};
    text-align: center;
  }

  .drop:hover {
    border-radius: 50%;
  }
`;
export default StyledFooter;
