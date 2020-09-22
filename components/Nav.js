import { Spin as Hamburger } from "hamburger-react";
import Link from "next/link";
import styled from "styled-components";
import device from "../config/device";
import colors from "../config/colors";

const HamburgerMenu = () => {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <Container show={isOpen}>
      <Link href="/">
        <img
          className="logo"
          src="./icons/logo.png"
          alt="Gundla's logotype, an black outlined sunflower in a white circle."
        />
      </Link>

      <div className="nav-header-container">
        <h1>Gundla Gårdscafé</h1>
      </div>
      <div className="nav-hamburger-container">
        <Hamburger
          size={32}
          color={"#ffffff"}
          Hamburger
          toggled={isOpen}
          toggle={setOpen}
        />
      </div>
      <nav>
        <Link href="/">
          <a onClick={() => setOpen(false)}>Hem</a>
        </Link>
        <Link href="/about">
          <a onClick={() => setOpen(false)}>Om oss</a>
        </Link>
        <Link href="/eat">
          <a onClick={() => setOpen(false)}>Äta</a>
        </Link>
        <Link href="/event">
          <a onClick={() => setOpen(false)}>Evenemang</a>
        </Link>
        <Link href="/catering">
          <a onClick={() => setOpen(false)}>Catering</a>
        </Link>
        <Link href="/find">
          <a onClick={() => setOpen(false)}>Hitta hit</a>
        </Link>
        <Link href="/contact">
          <a onClick={() => setOpen(false)}>Kontakt</a>
        </Link>
      </nav>
    </Container>
  );
};

const Container = styled.div`
  background: ${colors.black};
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 9999;
  height: 62px;
  box-sizing: border-box;

  .logo {
    width: 40px;
    height: 40px;
    margin: auto 0;
    margin-left: 20px;
    cursor: pointer;
  }

  .nav-header-container {
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: 1em;
      text-align: center;
      color: ${colors.white};
    }
  }

  .nav-hamburger-container {
    display: flex;
    justify-content: flex-end;
    padding-right: 12px;
    margin: auto 0px;
  }

  .hamburger-react {
    z-index: 9999;
  }

  nav {
    background-color: #000000;
    z-index: 100;
    position: fixed;
    right: 0;
    top: 0;
    overflow: hidden;
    height: 100vh;
    width: ${(props) => (props.show ? "100%" : "0px")};
    visibility: ${(props) => (props.show ? "visible" : "hidden")};
    transition: all 300ms ease-in-out;

    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: auto 0px;

    a {
      text-decoration: none;
      font-family: Noto Serif;
      font-style: normal;
      font-weight: 500;
      font-size: 1.5em;
      line-height: 33px;
      text-align: center;
      color: #ffffff;
      margin-bottom: 32px;
    }
  }

  @media ${device.laptop} {
    height: 70px;

    .logo {
      margin-left: 33px;
    }

    .nav-hamburger-container {
      padding-right: 25px;
      margin: auto 0px;
    }

    .nav-header-container {
      h1 {
        font-size: 1.125em;
        line-height: 25px;
      }
    }

    nav {
      a:hover {
        color: rgb(255, 255, 255, 0.5);
      }
    }
  }
`;

export default HamburgerMenu;
