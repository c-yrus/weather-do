import PageWithLayoutType from '@components/layout';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'styles/globalStyles';
import theme from 'styles/theme';
import 'styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

import Preloader from '@ui/preloader';
import { SavesProvider } from 'context/saves';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
type AppLayoutProps = {
  Component: PageWithLayoutType;
  pageProps: any;
};
function MyApp({ Component, pageProps }: AppLayoutProps) {
  const Layout = Component.layout || ((children) => <>{children}</>);
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Next.js + TypeScript Example</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles theme={theme} />
        <Preloader />
        <SavesProvider>
          <Layout>
            <AnimatePresence mode="wait" initial={false}>
              <Component {...pageProps} key={router.asPath} />;
            </AnimatePresence>
          </Layout>
        </SavesProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
