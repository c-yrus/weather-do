import styled from 'styled-components';

const StyledBackdropWrapper = styled.div`
  .backdrop {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.1);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .animated-modal {
    overflow: auto;
    outline: currentcolor none medium;
    margin: 0 auto;
    align-items: center;
    width: 90%;
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;

    &.p-0 {
      padding: 0;
    }

    &.small {
      width: 90%;
      height: max-content;
    }

    @media screen and (min-width: 992px) {
      width: 660px;
      max-width: 660px;
      height: max-content;
      max-height: 100%;

      &.small {
        width: 400px;
      }
    }
  }
`;
export default StyledBackdropWrapper;
