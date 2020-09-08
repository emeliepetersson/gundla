import styled from "styled-components";
import PropTypes from "prop-types";

const SocialMedia = ({ text, icons }) => (
  <Container>
    <p>{text}</p>
    <div>
      {icons.map((icon, index) => (
        <img className="icon" src={icon.url} key={index} alt={icon.altText} />
      ))}
    </div>
  </Container>
);

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  p {
    font-weight: bold;
    text-align: center;
  }

  .icon {
    margin: 8px;
    width: 44px;
  }
`;

SocialMedia.propTypes = {
  icons: PropTypes.array.isRequired,
  text: PropTypes.string,
};

export default SocialMedia;
