import Link from "next/link";
import styled from "styled-components";
import PropTypes from 'prop-types';

const Menu = ({show = false}) => {
  return (
    <Navigation show={show} > 
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
};

const Navigation = styled.nav`
    background-color: #ffffff;
    z-index: 100;
    position: fixed;
    right: 0;
    top: 0;
    overflow: hidden;
    height: 100vh;
    width:  ${(props) => (props.show ? "100%" : "0px")};
    visibility: ${(props) => (props.show ? "visible" : "hidden")};
    transition: all 300ms ease-in-out;
    
    display: flex;
    align-items: center;
    flex-direction: column;

    a:first-child {
      margin-top: 144px;
  }

  a {
      font-family: Roboto;
      text-decoration: none;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 23px;
      text-align: center;
      color: #000000; 

      margin-bottom: 50px;
  }

  a:hover {
      color: rgba(255, 255, 255, .5);
  }
`;

Menu.propTypes = {
  show: PropTypes.bool,
};

export default Menu;
