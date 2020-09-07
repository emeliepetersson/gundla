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
    <Link href="/event">
      <a>Evenemang</a>
    </Link>
    <Link href="/catering">
      <a>Catering</a>
    </Link>
    <Link href="/menu">
      <a>Meny</a>
    </Link>
  </Navigation>
);

const Navigation = styled.nav`
  margin-top: 20px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;

  a {
    margin: 10px;
  }
`;

export default Menu;
