import { Fragment } from "react";
import GlobalStyles from "../config/globalStyles.js";
import "react-image-gallery/styles/css/image-gallery.css";


function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <GlobalStyles />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
