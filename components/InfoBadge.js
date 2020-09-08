import styled from "styled-components";
import colors from "../config/colors";
//if there is going to be more than "for the yngre"
const age =(num)=>{
    if(num <14){   
     return "För de yngre" 
    }
    return;
    
}



const InfoBadge =(props)=>{

    return(
    <BadgeContainer age={num}>
        <p>
        {age(num)}
        </p>
    </BadgeContainer>
    )
}
const BadgeContainer = styled.div`
    position:absolute;
    width:100px;
    height:100px;
    color:${props.color}
    border-radius:50%;
    font-size:12px;
    font-weight:bold;
    display:flex;
    justify-content:center;
    align-items:center;
    right:16px;
    
    }
`

export default InfoBadge;
