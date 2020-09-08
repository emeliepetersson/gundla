import styled from "styled-components";
import colors from "../config/colors";


const Button = styled.button`
    font-size:${props => props.fontSize || "16"}px;
    font-weight:bold;
    min-width:200px;
    min-height:48px;
    border:1px solid #D7D7D7;
    border-radius:16px;
    color:${props => props.color || colors.black};
    background-color:${props => props.bg || "#D7D7D7"};
   
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


export default Button