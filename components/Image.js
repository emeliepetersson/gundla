import PropTypes from "prop-types";
import styled from "styled-components";

import device from "../config/device";

const Image = ({ imageUrl, altText, className }) => (
  <Img
    className={`lazyload ${className}`}
    data-src={imageUrl}
    alt={altText}
    data-srcset={`${imageUrl}?w=450&h=450 450w, ${imageUrl}?w=750&h=750 750w, ${imageUrl}?w=1050&h=1050 1050w, ${imageUrl}?w=2050&h=2050 2050w`}
    sizes={`(min-width: ${device.laptopL}) 2050px, (min-width: ${device.laptop}) 1050px, (min-width: ${device.tablet}) 750px, 100vw`}
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
