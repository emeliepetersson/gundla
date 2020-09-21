import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "../config/colors";
import device from "../config/device";


const InfoBadge =({text,checkSide})=>{
   
    return(
        <BadgeContainer checkSide={checkSide} tabIndex="0" >
        <p>
         {text}
        </p>
    </BadgeContainer>
    )
}
const BadgeContainer = styled.div`
    position:relative;
    min-width:97px;
    width:97px;

    min-height:97px;
    height:97px;

    border-radius:50%;
    font-weight:bold;
    display:flex;
    justify-content:center;
    align-items:center;
   
    
    color:${props =>props.color || colors.white};
    background:${props => props.bg || colors.green};

   top:-51px;
    left:-16px;
    margin-left:auto;
    p{
        align-self:center;
        font-size:14px;
    }
    @media ${device.laptop} { 
      top:2px;
      left:0; 
          margin :0px ${
            (props) => props.checkSide === true ? 
            "10% 0px auto":
            "auto 0px -20%"
        };
     
         
       }
`
InfoBadge.propTypes ={
    color:PropTypes.string,
    bg:PropTypes.string,
    text:PropTypes.string,
    checkSide:PropTypes.bool,
}

export default InfoBadge;
