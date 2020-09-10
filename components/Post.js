import styled from "styled-components";
import PropTypes from "prop-types";

import Button from "./Button";

const ContactInfo = ({ altText, buttonText, imageUrl, title, text }) => {
  return (
    <Container>
      {imageUrl && (
        <div className="image-container">
          <img src={imageUrl} alt={altText} />
        </div>
      )}
      <div className="content">
        <h2>{title}</h2>
        {text && <p>{text}</p>}
        {buttonText && <Button>{buttonText}</Button>}
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  overflow: hidden;
  width: 100%;
  background-color: cornflowerblue;
  padding-bottom: 80px;

  .image-container {
    position: relative;
    width: 100%;
    padding-top: 100%;

    img {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .content {
    padding: 48px 37px 0;

    p {
      margin: 32px 0 20px;
    }

    button {
      margin-top: 40px;
    }
  }
`;

ContactInfo.propTypes = {
  altText: PropTypes.string,
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  buttonText: PropTypes.string,
};

export default ContactInfo;