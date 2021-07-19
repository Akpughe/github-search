import '../styles/globals.css';
import '../styles/tailwind.css';
import { Provider as AuthProvider } from 'next-auth/client';
import Head from 'next/head'
import NProgress from 'nprogress';
import Router from 'next/dist/client/router';

const showProgressBar = (delay) => {
  const timer = setTimeout(() => NProgress.start(), delay);
  Router.events.on('routeChangeComplete', () => stopProgress(timer));
  Router.events.on('routeChangeError', () => stopProgress(timer));
};

const stopProgress = (timer) => {
  clearTimeout(timer);
  NProgress.done();
};

Router.events.on('routeChangeStart', () => showProgressBar(300));

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider session={pageProps.session}>
       <Head>
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
        <link rel="stylesheet" type="text/css" href="/css/nprogress.css" />
        <title>Github Search</title>
      </Head>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
