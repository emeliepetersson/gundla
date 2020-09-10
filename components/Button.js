import styled from "styled-components";
import colors from "../config/colors";
import PropTypes from "prop-types";

//How to use the button https://styled-components.com/docs/basics#adapting-based-on-props

const Button = styled.button`
    border:1px solid ${colors.buttonColor};
    border-radius:16px;
    font-weight:bold;
    font-size:${props => props.fontSize || 16}px;
    width:${props =>props.width || 200}px;
    height:${props => props.height || 48}px;
    color:${props => props.color || colors.black};
    background:${props => props.bg || colors.buttonColor};
   
    transition:0.5s ease;
    &:hover{
         background-color: ${colors.medium};
         border-color:${colors.medium};
         color:${colors.white};
    }
   &:active{
          background-color:${colors.white};
          border-color:${colors.black};
          box-shadow:inset 0px 0px 100px 10px ${colors.black};
            
   }
`
Button.propTypes = {
     fontSize:PropTypes.number,
     width: PropTypes.number,
     height: PropTypes.number,
     color: PropTypes.string,
     bg: PropTypes.string,
}

export default Button