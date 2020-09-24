import PropTypes from "prop-types";
import styled from "styled-components";

import device from "../config/device";

const Image = ({ imageUrl, altText, className }) => (
  <Img
    tabIndex="0"
    className={`lazyload ${className}`}
    data-src={imageUrl}
    alt={altText}
    data-srcset={`${imageUrl}?w=450&h=450 450w, ${imageUrl}?w=750&h=750 750w, ${imageUrl}?w=750&h=750 1050w, ${imageUrl}?w=850&h=850 2050w`}
    sizes={`${device.laptopL} 2050px, ${device.laptop} 1050px, ${device.tablet} 750px, ${device.mobileL} 450px, 100vw`}
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
