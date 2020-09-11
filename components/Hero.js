import styled from "styled-components";
import PropTypes from "prop-types";

import colors from "../config/colors";
import Image from "./Image";

const Hero = ({
  fullScreen = false,
  imageUrl,
  showIcon = false,
  text,
  altText,
}) => (
  <Container fullScreen={fullScreen}>
    <Image className="background-image" imageUrl={imageUrl} altText={altText} />
    {text && <h1>{text}</h1>}
    {showIcon && (
      <a href="#scroll">
        <img
          className="icon"
          src="/icons/down-arrow.png"
          alt="Arrow pointing down"
        />
      </a>
    )}
  </Container>
);

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: ${(props) => (props.fullScreen ? "100vh" : "50vh")};
  width: 100vw;
  position: relative;
  color: ${colors.white};

  .background-image {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  h1 {
    text-align: center;
    margin-bottom: 100px;
  }

  .icon {
    width: 50px;
    position: absolute;
    bottom: 50px;
    animation: bounce 1500ms infinite ease-out;
  }

  @keyframes bounce {
    0% {
      transform: translateY(6px);
    }
    50% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(6px);
    }
  }
`;

Hero.propTypes = {
  fullScreen: PropTypes.bool,
  imageUrl: PropTypes.string.isRequired,
  showIcon: PropTypes.bool,
  text: PropTypes.string,
};

export default Hero;
