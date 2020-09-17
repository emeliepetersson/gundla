import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "../config/colors";
import device from "../config/device";


const InfoBadge =({text,checkSide})=>{
   
    return(
    <BadgeContainer checkSide={checkSide}>
        <p>
         {text}
        </p>
    </BadgeContainer>
    )
}
const BadgeContainer = styled.div`
    position:relative;
    width:100px;
    height:100px;
    border-radius:50%;
  
    font-weight:bold;
    display:flex;
    justify-content:center;
    align-items:center;
    align-self:center;
    
    color:${props =>props.color || colors.white};
    background:${props => props.bg || colors.infoGreen};

    top:-55px;
    left:-16px;
    margin-left:auto;
    p{
        font-size:12px;
    }
    @media ${device.laptop} { 
      top:2px;
      left:0; 
          margin:${(props) => props.checkSide === true ?  "0px 16px 0px auto":"0px auto 0px -16px"};
     
         
       }
`
InfoBadge.propTypes ={
    color:PropTypes.string,
    bg:PropTypes.string,
    text:PropTypes.string,
    checkSide:PropTypes.bool,
}

export default InfoBadge;
