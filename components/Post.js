import styled from "styled-components";
import PropTypes from "prop-types";

import Button from "./Button";

const ContactInfo = ({ altText, buttonText, imageUrl, title, text }) => {
  return (
    <Container>
      <img src={imageUrl} alt={altText} />
      <h2>{title}</h2>
      <p>{text}</p>
      <Button>{buttonText}</Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  /* padding-top: 100%;  */
  /**https://www.w3schools.com/howto/howto_css_aspect_ratio.asp */
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
  }
`;

ContactInfo.propTypes = {
  buttonText: PropTypes.string,
};

export default ContactInfo;
