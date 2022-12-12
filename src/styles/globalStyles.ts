import { createGlobalStyle } from 'styled-components';

type Props = {
  theme: any;
};

export const GlobalStyles = createGlobalStyle<Props>`
  body {
  }
  ::-webkit-scrollbar {
    width: 0.5rem;
  }
  ::-webkit-scrollbar-track {
    background: "#F3EFE0";
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary.color};
  }


  /* React Toastify */
  .Toastify__toast-container {
    z-index: 200000;
  }

  /** handle the notificaiton color and the text color based on the theme **/
  .Toastify__toast-theme--light {
    border-radius: 10rem;
    font-size: 1.4rem;
    font-weight: 400;
    padding: 1.1rem 1.5rem;
    color: #fff;
    z-index:1000000;
  }

  .Toastify__toast-theme--light.Toastify__toast--success {
    background: ${({ theme }) => theme.colors.toast.success}; 
  }

  .Toastify__toast-theme--light.Toastify__toast--warning {
    background: ${({ theme }) => theme.colors.toast.warning};
  }

  .Toastify__toast-theme--light.Toastify__toast--info {
    background: ${({ theme }) => theme.colors.toast.warning};
  }

  .Toastify__toast-theme--light.Toastify__toast--error {
    background: ${({ theme }) => theme.colors.toast.error};
  }

  /** Classes for the close button. Better use your own closeButton **/
  .Toastify__close-button {
    align-self: center;
    height: fit-content;
  }

  .Toastify__close-button--light {
    color: #fff;
    opacity: 0.5;
  } 
`;
