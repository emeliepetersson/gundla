import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "../config/colors";



const InfoBadge =({text})=>{

    return(
    <BadgeContainer>
        <p>
         {text}
        </p>
    </BadgeContainer>
    )
}
const BadgeContainer = styled.div`
    position:absolute;
    width:100px;
    height:100px;
    border-radius:50%;
    font-size:12px;
    font-weight:bold;
    display:flex;
    justify-content:center;
    align-items:center;
    align-self:center;
 
    color:${props =>props.color || colors.white};
    background:${props => props.bg || colors.infoGreen};
    top:${props => props.top || 47}vh;
    right:${props => props.right|| 16}px;
    
    }
`
InfoBadge.propTypes ={
    color:PropTypes.string,
    bg:PropTypes.string,
    top:PropTypes.any,
    right:PropTypes.any,
    text:PropTypes.string
}

export default InfoBadge;