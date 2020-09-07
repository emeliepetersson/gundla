import styled from "styled-components";
import colors from "../config/colors";

const Hero = ({ fullScreen = false, imageUrl, showIcon = false, text }) => (
  <Container fullScreen={fullScreen} imageUrl={imageUrl}>
    {text && <h1>{text}</h1>}
    {showIcon && (
      <img
        className="icon"
        src="/icons/down-arrow.png"
        alt="Arrow pointing down"
      />
    )}
  </Container>
);

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: ${(props) => (props.fullScreen ? "100vh" : "50vh")};
  width: 100vw;
  position: relative;
  color: ${colors.white};
  background-image: url(${(props) => props.imageUrl || "none"});
  background-size: cover;
  background-repeat: none;
  background-position: bottom;

  h1 {
    text-align: center;
    margin-bottom: 100px;
  }

  .icon {
    width: 50px;
    position: absolute;
    bottom: 50px;
    animation: bounce 1500ms infinite ease-out;
  }

  @keyframes bounce {
    0% {
      transform: translateY(6px);
    }
    50% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(6px);
    }
  }
`;

export default Hero;
