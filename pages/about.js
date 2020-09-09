import styled from "styled-components";
import colors from "../config/colors";
import Layout from "../components/Layout";
import Hero from "../components/Hero";

function About() {
  return (
 
      <Container>
        <Hero imageUrl="/images/hero-test-portrait.jpg" />
        <h1>About</h1>
      </Container>
    
  );
}

export default About;

const Container = styled.div``;
