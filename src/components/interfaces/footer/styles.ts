import styled from 'styled-components';

const StyledFooter = styled.footer`
  margin-top: 16rem;
  width: 100%;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2.1rem;
    color: ${({ theme }) => theme.colors.primary.text};
    text-align: center;
  }
`;
export default StyledFooter;
