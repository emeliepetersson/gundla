import { Fragment } from "react";
import GlobalStyles from "../config/globalStyles.js";
import "react-image-gallery/styles/css/image-gallery.css";
import Layout from "../components/Layout";
import { StaticKitProvider } from "@statickit/react";
import { fetchEntries } from "../pages/api/Contentful";
import "lazysizes";

const MyApp = ({ Component, pageProps, footerData }) => {
  return (
    <Fragment>
      <Layout footerData={footerData}>
        <GlobalStyles />
        <StaticKitProvider site={process.env.NEXT_PUBLIC_STATICKIT_SITE_ID}>
          <Component {...pageProps} />
        </StaticKitProvider>
      </Layout>
    </Fragment>
  );
};

export default MyApp;

MyApp.getInitialProps = async () => {
  const footerDataRes = await fetchEntries("visitingInfo");
  const footerDataResponse = await footerDataRes.map((i) => {
    return i.fields;
  });
  const footerData = footerDataResponse[0];

  return { footerData };
};
