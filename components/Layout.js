import Head from "next/head";
import Nav from "./Nav";
import PropTypes from "prop-types";
import Footer from "./Footer";

const Layout = ({ children, title, footerData }) => (
  <main>
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5"
      />
      <meta name="description" content="Description" />
      <meta name="keywords" content="Keywords" />
      <title>{title || "Gundla Gårdscafé"}</title>

      <link rel="manifest" href="/manifest.json" />
      <link
        href="/favicon16x16.ico"
        rel="icon"
        type="image/png"
        sizes="16x16"
      />
      <link
        href="/favicon32x32.ico"
        rel="icon"
        type="image/png"
        sizes="32x32"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans&family=Noto+Serif&display=swap"
        rel="stylesheet"
      />
      <link rel="apple-touch-icon" href="/icons/logo.png" />
      <meta name="theme-color" content="#317EFB" />
    </Head>
    <Nav />
    <div className="content">{children}</div>
    <Footer footerData={footerData} />
  </main>
);

Layout.propTypes = {
  title: PropTypes.string,
  footerData: PropTypes.object,
};

export default Layout;
