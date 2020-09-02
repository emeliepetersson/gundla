import { Fragment } from "react";
import GlobalStyles from "../config/globalStyles.js";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <GlobalStyles />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
