import React from "react";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

const Nav = () => (
  <Navigation>
    <Head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      <meta name="description" content="Description" />
      <meta name="keywords" content="Keywords" />
      <title>Gundla Gårdscafé</title>

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

    <Link href="/">
      <a>Hem</a>
    </Link>
    <Link href="/about">
      <a>Om oss</a>
    </Link>
    <Link href="/contact">
      <a>Kontakt</a>
    </Link>
  </Navigation>
);

const Navigation = styled.nav`
  margin-top: 20px;

  a {
    margin: 10px;
  }
`;

export default Nav;
