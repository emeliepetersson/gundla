import styled from "styled-components";
import colors from "../config/colors";

const Hero = ({
  altText,
  fullScreen = false,
  imageUrl,
  showIcon = false,
  text,
}) => (
  <Container fullScreen={fullScreen}>
    <img src={imageUrl} alt={altText} />
    {text && <h1>{text}</h1>}
    {showIcon && <img />}
  </Container>
);

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => (props.fullScreen ? "100vh" : "50vh")};
  width: 100vw;
  background-color: blue;

  h1 {
    text-align: center;
  }
`;

export default Hero;
