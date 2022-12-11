import styled from 'styled-components';

const StyledSearchModal = styled.div`
  background: rgba(255, 255, 255, 0.29);
  backdrop-filter: blur(13.8px);
  padding: 5rem;
  border-radius: 1.6rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  height: 50vh;
  width: 50vw;
  h2 {
    font-size: 4rem;
    line-height: 3.6rem;
    font-weight: bolder;
    text-align: center;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    background-image: ${({ theme }) => theme.colors.primary.color};
  }
`;

export default StyledSearchModal;
