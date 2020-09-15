import styled from "styled-components";
import PropTypes from "prop-types";

import device from "../config/device";

const SocialMedia = ({ text, icons, className }) => (
  <Container className={className}>
    <p>{text}</p>
    <div>
      {icons.map((icon, index) => (
        <img className="icon" src={icon.url} key={index} alt={icon.altText} />
      ))}
    </div>
  </Container>
);

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 55px 50px;

  p {
    font-weight: bold;
    text-align: center;
  }

  .icon {
    margin: 24px 8px 8px;
    width: 44px;
  }

  @media ${device.laptop} {
    padding: 100px 39%;
  }
`;

SocialMedia.propTypes = {
  icons: PropTypes.array.isRequired,
  text: PropTypes.string,
};

export default SocialMedia;
