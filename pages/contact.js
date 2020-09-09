import styled from "styled-components";
import colors from "../config/colors";
import Layout from "../components/Layout";
import Hero from "../components/Hero";


function Contact() {
    return (
      
        <Container>
        <Hero imageUrl="/images/hero-test-portrait.jpg" />
          <h1>Contact</h1>
        </Container>
      
    );
  }
  
  export default Contact

  const Container = styled.div``;