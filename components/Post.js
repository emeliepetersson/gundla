import styled from "styled-components";
import PropTypes from "prop-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";

import Button from "./Button";
import Image from "./Image";
import device from "../config/device";

const Post = ({
  altText,
  buttonText,
  imageUrl,
  title,
  text,
  className,
  link,
  externalLink,
}) => {
  return (
    <Container className={className}>
      {imageUrl && (
        <div className="image-container">
          <Image imageUrl={imageUrl} altText={altText} />
        </div>
      )}
      <div className={`content ${imageUrl ? "" : "only-text"}`}>
        {title && <h2>{title}</h2>}
        {text && documentToReactComponents(text)}
        {buttonText && link && (
          <Link href={`/${link}`}>
            <Button>{buttonText}</Button>
          </Link>
        )}
        {buttonText && externalLink && (
          <a href={externalLink}>
            <Button>{buttonText}</Button>
          </a>
        )}
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
  text-align: left;

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
    display: flex;
    flex-direction: column;

    h2 {
      margin-bottom: 15px;
    }

    p {
      margin-top: 20px;
    }

    button {
      margin-top: 48px;
      align-self: center;
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

      button {
        align-self: flex-start;
      }
    }
    .content.only-text {
      width: 40%;
      padding: 0 0;
      margin: 0 auto;

      h2 {
        text-align: left;
      }
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
