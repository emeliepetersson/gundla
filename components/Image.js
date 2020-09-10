import PropTypes from "prop-types";

import device from "../config/device";

const Image = ({ imageUrl, altText }) => (
  <img
    src={imageUrl}
    alt={altText}
    srcSet={`
    ${imageUrl}?w=450 450w, 
    ${imageUrl}?w=750 750w, 
    ${imageUrl}?w=1050 1050w`}
    sizes={`(min-width: ${device.laptop}) 1050px, 
     (min-width: ${device.tablet}) 750px,
    100vw`}
  />
);

Image.propTypes = {
  imageUrl: PropTypes.string,
  altText: PropTypes.string,
};

export default Image;
