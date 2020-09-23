import styled from "styled-components";
import colors from "../config/colors";
import PropTypes from "prop-types";

//How to use the button https://styled-components.com/docs/basics#adapting-based-on-props

const Button = styled.button`
  border: 2px solid ${colors.green};
  font-weight: bold;
  font-size: ${(props) => props.fontSize || 1}em;
  width: ${(props) => props.width || 300}px;
  height: ${(props) => props.height || 48}px;
  color: ${(props) => props.color || colors.white};
  background: ${(props) => props.bg || colors.green};
  border-radius: 3px;
  transition: 0.2s ease;
  &:hover {
    background-color: ${colors.lightGreen};
    border-color: ${colors.lightGreen};
    color: ${colors.black};
  }
  &:active {
    background-color: ${colors.green};
    border-color: ${colors.green};
    transform: scale(0.95, 0.95);
    color: ${colors.white};
  }
 
`;
Button.propTypes = {
  fontSize: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  bg: PropTypes.string,
};

export default Button;
