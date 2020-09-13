import ImageGallery from 'react-image-gallery';
import styled from "styled-components";
import PropTypes from 'prop-types';
import Device from "../config/device";

const Carousel = ({images,className}) => {

  const filledArray = images.map(image => {
    const obj = {
      'original': image.fields.file.url
    };
    return obj;
  });
    
    return (
        <Container className={className}>
            <ImageGallery showNav={false} showBullets={true} showThumbnails={false} showPlayButton={false} showFullscreenButton={false} items={filledArray} />
        </Container>
    );
  };

  const Container = styled.div`
  overflow: hidden;
  height: 406px;
  
  .image-gallery-slide > div{
    height: 406px;
  }
  .image-gallery-image {
    height: 100%;
    width: 100vw;
    object-fit: cover;
  }

  @media ${Device.laptop} { 
    
  }
  `;

  Carousel.propTypes = {
    images: PropTypes.array,
  };
  
  export default Carousel;

