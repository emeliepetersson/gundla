import { Spin as Hamburger } from 'hamburger-react';
import Menu from './Menu';
import styled from "styled-components";

import PropTypes from "prop-types";

const HamburgerMenu = () => {
    const [sidebar, setSidebar] = React.useState(null);
    return (
        <Container>
            <div className="hamburger-wrapper">
                <Hamburger size={40}  onToggle={toggled => {
                    setSidebar(toggled );
                }}/>
            </div>
            <Menu show={sidebar}/>
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
`;

export default HamburgerMenu;
