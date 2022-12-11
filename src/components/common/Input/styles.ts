import styled from 'styled-components';

const StyledInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
  position: relative;

  label {
    font-size: 1.6rem;
    font-weight: 500;

    &.gray {
      color: gray;
    }

    &.unverified {
      display: flex;
      align-items: center;
      gap: 1rem;

      span.unverified {
        font-size: 1.4rem;
        color: #f20000;

        &::before {
          content: '(';
        }

        &::after {
          content: ')';
        }
      }
    }

    span.required {
      color: red;
    }
  }
  .input {
    border: 1px solid #ff5f6d;
    border-radius: 5rem;
    display: flex;
    align-items: center;
    width: 100%;
    background-color: #f2f2f2;
    padding-right: 1rem;
    gap: 1rem;
    transition: all 0.3s;

    :has(:focus) {
      box-shadow: 0 0 1px 2px #ffc371;
    }

    :has(:disabled) {
      background-color: #f2f2f2;
    }
  }
  input {
    width: 100%;
    border-radius: 2.8rem;
    border: none;
    background-color: transparent;
    font-weight: 400;
    font-size: 1.5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    text-indent: 1em;
    outline: none;
    height: 5rem;
    &::placeholder {
      color: gray;
    }
  }
`;
export default StyledInput;
