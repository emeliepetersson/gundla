import Head from "next/head";
import HamburgerMenu from "./HamburgerMenu";
import PropTypes from 'prop-types';
import PropTypes from "prop-types";
import Footer from "./Footer"

const Layout = ({ children, title }) => (
  <main>
    <Head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      <meta name="description" content="Description" />
      <meta name="keywords" content="Keywords" />
      <title>{title || "Gundla Gårdscafé"}</title>

      <link rel="manifest" href="/manifest.json" />
      <link
        href="/favicon-16x16.png"
        rel="icon"
        type="image/png"
        sizes="16x16"
      />
      <link
        href="/favicon-32x32.png"
        rel="icon"
        type="image/png"
        sizes="32x32"
      />
      <link rel="apple-touch-icon" href="/apple-icon.png"></link>
      <meta name="theme-color" content="#317EFB" />
    </Head>
    <HamburgerMenu />
    <div className="content">{children}</div>
     <Footer>

     </Footer>
  </main>
  
);

Layout.propTypes = {
  title: PropTypes.string,
};

export default Layout;
