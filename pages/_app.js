import { Fragment, lazy } from "react";
import GlobalStyles from "../config/globalStyles.js";
import Layout from "../components/Layout";
import colors from "../config/globalStyles"
const MyApp=({ Component, pageProps })=> {

  return (
   
    <Fragment>
      <Layout>
        
        <GlobalStyles />
        <Component {...pageProps} />
      </Layout>
    </Fragment>

  );
}

export default MyApp;
