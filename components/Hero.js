import styled, { css } from "styled-components";
import PropTypes from "prop-types";

import colors from "../config/colors";
import device from "../config/device";

const Hero = ({
  fullScreen = false,
  imagePortraitUrl,
  imageLandscapeUrl,
  showIcon = false,
  addOverlay = false,
  text,
  altText,
}) => (
  <Container fullScreen={fullScreen} addOverlay={addOverlay}>
    <picture>
      <source media={device.laptop} srcSet={imageLandscapeUrl} />
      <source
        media={device.tablet}
        srcSet={`${imageLandscapeUrl}?w=1050&h=1050`}
      />
      <source
        media={device.mobileL}
        srcSet={`${imagePortraitUrl}?w=550&h=550`}
      />

      <img className="background-image" src={imagePortraitUrl} alt={altText} />
    </picture>
    {text && <h2>{text}</h2>}
    {showIcon && (
      <a className="icon" href="#scroll-to">
        <img src="/icons/down-arrow.png" alt="Arrow pointing down" />
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
  margin-top: ${(props) => (props.fullScreen ? "0" : "60px")};
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

  h2 {
    text-align: center;
    margin-bottom: 100px;
    width: 60%;
  }

  .icon {
    position: absolute;
    bottom: 50px;
    animation: bounce 1500ms infinite ease-out;

    img {
      width: 50px;
    }
  }

  ${(props) =>
    props.addOverlay &&
    css`
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.5) 42.86%,
        rgba(0, 0, 0, 0) 64.9%
      );
    `}

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

  @media ${device.laptop} {
    margin-top: ${(props) => (props.fullScreen ? "0" : "70px")};

    h2 {
      text-align: center;
      margin-bottom: 0;
      width: 100%;
    }
  }
`;

Hero.propTypes = {
  fullScreen: PropTypes.bool,
  imagePortraitUrl: PropTypes.string.isRequired,
  imageLandscapeUrl: PropTypes.string.isRequired,
  showIcon: PropTypes.bool,
  text: PropTypes.string,
};

export default Hero;
