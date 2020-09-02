import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Menu = () => (
  <Navigation>
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

export default Menu;
