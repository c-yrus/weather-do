import PageWithLayoutType from '@components/layout';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'styles/globalStyles';
import theme from 'styles/theme';
import 'styles/globals.css';
import Preloader from '@ui/preloader';
type AppLayoutProps = {
  Component: PageWithLayoutType;
  pageProps: any;
};
function MyApp({ Component, pageProps }: AppLayoutProps) {
  const Layout = Component.layout || ((children) => <>{children}</>);

  return (
    <>
      <Head>
        <title>Next.js + TypeScript Example</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles theme={theme} />
        <Preloader />
        <Layout>
          <Component {...pageProps} />;
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
