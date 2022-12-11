import styled from 'styled-components';

const StyledResultCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 1rem;
  margin-top: 1rem;
  border-bottom: 1px solid #ff5f6d;
  p {
    display: none;
    @media screen and (min-width: 768px) {
      display: block;
    }
  }
  img {
    display: none;
    @media screen and (min-width: 768px) {
      display: block;
    }
  }
`;
export default StyledResultCard;
