import styled from "styled-components";
import colors from "../config/colors";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import ContactForm  from '../components/ContactForm';


function Contact() {

  const images = ['/images/hero-test-portrait.jpg', '/images/jos4.jpg','/images/hero-test.jpg',];

    return (
        <Container>
        <Hero imageUrl="/images/hero-test-portrait.jpg" />
          <h1>Contact</h1>
          <Carousel images={images} />
          <ContactForm/>
        </Container>
    );
  }
  
  export default Contact

  const Container = styled.div``;