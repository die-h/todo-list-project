// import App from 'next/app'
import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";
function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>TODO list project</title>
        <link rel="shortcut icon" href="public/favicon.ico" type="image/x-icon" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default App;
