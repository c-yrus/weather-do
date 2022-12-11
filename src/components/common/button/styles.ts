import styled from 'styled-components';

const StyledButton = styled.button`
  border-radius: 0.8rem;
  font-style: normal;
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  padding: 1.2rem 2.4rem;

  &.primary {
    color: white;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    background: ${({ theme }) => theme.colors.primary.color};
    transition: all 0.3s ease-in-out;
  }
`;
export default StyledButton;
