import { Fragment, lazy } from "react";
import GlobalStyles from "../config/globalStyles.js";
import "react-image-gallery/styles/css/image-gallery.css";
import Layout from "../components/Layout";
import { StaticKitProvider } from '@statickit/react';
import "lazysizes";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Layout>
        <GlobalStyles />
        <StaticKitProvider site={process.env.NEXT_PUBLIC_STATICKIT_SITE_ID}>
        <Component {...pageProps} />
        </StaticKitProvider>
      </Layout>
    </Fragment>
  );
};

export default MyApp;
