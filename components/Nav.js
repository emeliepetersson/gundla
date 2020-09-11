import { Spin as Hamburger } from 'hamburger-react';
import Link from "next/link";
import styled from "styled-components";

const HamburgerMenu = () => {
    const [isOpen, setOpen] = React.useState(false);

    return (
        <Container show={isOpen}>
            <div className="hamburger-wrapper">
                <Hamburger size={40} Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
            <nav> 
                <Link href="/">
                <a onClick={()=> setOpen(false)}>Hem</a>
                </Link>
                <Link href="/about">
                <a onClick={()=> setOpen(false)}>Om oss</a>
                </Link>
                <Link href="/contact">
                <a onClick={()=> setOpen(false)}>Kontakt</a>
                </Link>
                <Link href="/event">
                <a onClick={()=> setOpen(false)}>Evenemang</a>
                </Link>
                <Link href="/catering">
                <a onClick={()=> setOpen(false)}>Catering</a>
                </Link>
                <Link href="/menu">
                <a onClick={()=> setOpen(false)}>Meny</a>
                </Link>
            </nav>
        </Container>
      );
};

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    position: fixed;
    top: 0;
    z-index: 9999;

    .hamburger-wrapper {
        margin-right: 20px;
        margin-top: 30px;
    }

    .hamburger-react {
        z-index: 9999;
    }

    nav {
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

    }
`;


export default HamburgerMenu;
