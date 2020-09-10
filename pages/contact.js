import styled from "styled-components";
import colors from "../config/colors";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";


function Contact() {

  const images = ['/images/hero-test-portrait.jpg', '/images/jos4.jpg','/images/hero-test.jpg',];

    return (
      
        <Container>
        <Hero imageUrl="/images/hero-test-portrait.jpg" />
          <h1>Contact</h1>
          <Carousel images={images} />
        </Container>
      
    );
  }
  
  export default Contact

  const Container = styled.div``;