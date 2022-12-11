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

  input {
    width: 100%;
    font-weight: 400;
    font-size: 1.5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    text-indent: 1em;
    border: 1px solid #ff5f6d;
    outline: none;
    height: 5rem;
    transition: all 0.3s;
    border-radius: 2.8rem;

    &:focus {
      /* Box Shadow instead of Outline to support webkit browsers & old Chrome/Firefox */
      box-shadow: 0 0 1px 2px #ffc371;
    }

    &::placeholder {
      color: gray;
    }

    &:disabled {
      background-color: #f2f2f2;
    }
  }
`;
export default StyledInput;
