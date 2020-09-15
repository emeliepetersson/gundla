import styled from "styled-components";
import PropTypes from "prop-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import Button from "./Button";
import Image from "./Image";
import device from "../config/device";

const Post = ({ altText, buttonText, imageUrl, title, text, className }) => {
  console.log(imageUrl);
  return (
    <Container className={className}>
      {imageUrl && (
        <div className="image-container">
          <Image imageUrl={imageUrl} altText={altText} />
        </div>
      )}
      <div className={`content ${imageUrl ? "" : "only-text"}`}>
        <h2>{title}</h2>
        {text && documentToReactComponents(text)}
        {buttonText && <Button>{buttonText}</Button>}
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
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

  @media ${device.laptop} {
    flex-direction: row;
    align-items: flex-start;
    padding: 75px 10%;

    .image-container {
      width: 50%;
      padding-top: 40%;
    }
    .content {
      padding: 106px 0 0 130px;
      width: 38%;
    }
    .content.only-text {
      width: 29%;
      padding: 105px 0 125px;
      margin: 0 auto;
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
