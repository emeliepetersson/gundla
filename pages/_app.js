import { Fragment, lazy } from "react";
import GlobalStyles from "../config/globalStyles.js";
import "react-image-gallery/styles/css/image-gallery.css";
import Layout from "../components/Layout";
import "lazysizes";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Layout>
        <GlobalStyles />
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
};

export default MyApp;
