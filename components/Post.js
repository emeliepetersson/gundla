import styled from "styled-components";
import PropTypes from "prop-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import Button from "./Button";
import Image from "./Image";

const Post = ({ altText, buttonText, imageUrl, title, text }) => {
  return (
    <Container>
      {imageUrl && (
        <div className="image-container">
          <Image imageUrl={imageUrl} altText={altText} />
        </div>
      )}
      <div className="content">
        <h2>{title}</h2>
        {documentToReactComponents(text)}
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

Post.propTypes = {
  altText: PropTypes.string,
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.object,
  buttonText: PropTypes.string,
};

export default Post;
