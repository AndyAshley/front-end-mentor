import "bootstrap/dist/css/bootstrap.min.css";
import "@styles/globals.css";
import GoToTop from "@components/GoToTop";

function Application({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GoToTop />
    </>
  );
}

export default Application;
