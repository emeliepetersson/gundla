import PropTypes from "prop-types";
import styled from "styled-components";

import device from "../config/device";

const Image = ({ imageUrl, altText, className }) => (
  <Img
    className={`lazyload ${className}`}
    data-src={imageUrl}
    alt={altText}
    data-srcset={`${imageUrl}?w=550&h=550 450w, ${imageUrl}?w=750&h=750 750w, ${imageUrl}?w=1500&h=1500 1050w, ${imageUrl}?w=2500&h=2500 2050w`}
    sizes={`${device.laptopL} 2050px, ${device.laptop} 1050px, ${device.tablet} 750px, 100vw`}
  />
);

const Img = styled.img`
  height: 100%;
`;

Image.propTypes = {
  imageUrl: PropTypes.string,
  altText: PropTypes.string,
};

export default Image;
