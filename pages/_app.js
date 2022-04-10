import "bootstrap/dist/css/bootstrap.min.css";
import "@styles/globals.css";
import Head from "next/head";

function Application({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Space tourism website</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default Application;
