import { createGlobalStyle } from 'styled-components';

type Props = {
  theme: any;
};

export const GlobalStyles = createGlobalStyle<Props>`
  body {
  }
  ::-webkit-scrollbar {
    width: 0.25rem;
  }
  ::-webkit-scrollbar-track {
    background: "#F3EFE0";
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary.color};
  }


`;
