import Link from "next/link";
import ImageGallery from "react-image-gallery";
import styled from "styled-components";
import PropTypes from "prop-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import options from "../config/richTextOptions";
import Button from "./Button";
import device from "../config/device";

const Carousel = ({ images, className, buttonText, title, text, link }) => {
  const filledArray = images.map((image) => {
    const obj = {
      original: image.fields.file.url,
    };
    return obj;
  });

  return (
    <Container className={className}>
      {filledArray && (
        <div className="carousel-images-container">
          <div className="carousel-images-inner-container">
            <ImageGallery
              showNav={false}
              showBullets={true}
              showThumbnails={false}
              showPlayButton={false}
              showFullscreenButton={false}
              items={filledArray}
            />
          </div>
        </div>
      )}
      <div className="carousel-content-container">
        <div>
          {title && <h2 tabIndex="0">{title}</h2>}
          {text && documentToReactComponents(text, options)}
        </div>
        {buttonText && (
          <Link href={`/${link}`}>
            <Button className="andreas">{buttonText}</Button>
          </Link>
        )}
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  .carousel-images-container {
    .carousel-images-inner-container {
      overflow: hidden;
      height: 406px;
      width: 100%;

      .image-gallery-slide > div {
        height: 406px;
        width: 100%;
      }

      .image-gallery-image {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
  }

  .carousel-content-container {
    padding: 48px 38px 64px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div {
      h3 {
        margin: 16px 0px 32px;
      }

      p {
        margin-top: 16px;
      }
    }

    button {
      margin-top: 32px;
    }
  }

  @media ${device.laptop} {
    display: flex;
    flex-direction: row;

    .carousel-images-container {
      width: 50%;
      height: 600px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .carousel-images-inner-container {
        height: 450px;
        width: 576px;
        .image-gallery-slide > div {
          height: 450px;
          width: 576px;
        }
      }
    }

    .carousel-content-container {
      padding: 48px 87px 64px;
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      div {
        width: 400px;
      }
    }
  }
`;

Carousel.propTypes = {
  images: PropTypes.array,
  title: PropTypes.string,
  text: PropTypes.object,
  buttonText: PropTypes.string,
};

export default Carousel;
