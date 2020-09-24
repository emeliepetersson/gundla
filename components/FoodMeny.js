import styled from "styled-components";
import Device from "../config/device";
import colors from "../config/colors";
import PropTypes from "prop-types";
import options from "../config/richTextOptions"
import {documentToReactComponents } from '@contentful/rich-text-react-renderer';
const FoodMenu =({theMenu})=>{ 
   
    return(
        <ContainerMenu>
            <FoodInfo>
                { documentToReactComponents(theMenu.menyInfo,options) }
            </FoodInfo>
            
            <Food >
                {documentToReactComponents(theMenu.meny,options)}
            </Food>
        </ContainerMenu>
   )
        
     
}

const ContainerMenu = styled.div`
    background:${colors.greenBackground};
    width:100%;
    padding:62px 10% 62px 10%;
    display:flex;
    flex-direction: column;
    text-align:center;
    p,h1,h2,h3,h4,h5,h6{
        padding:10px 0px;
    }
     @media ${Device.laptop} {
        padding:92px 10% 92px 10%;
        width:100%;
        flex-direction: row;
       
      
    }

    
`
const FoodInfo = styled.div`
   border-bottom:1px solid ${colors.lightBlack};
  
    padding-bottom:42px;
    width:100%;
    p{
     text-align:left;   
    }
      @media ${Device.laptop} {
         border-bottom:0px solid ${colors.lightBlack};  
        border-right:1px solid ${colors.lightBlack};
        padding-right:10%;
        padding-top:5%;
          h2,p{
            max-width:300px;
            margin:0 auto;
        }
        h2{
            text-align:left;
        }
     
    }
`
const Food = styled.div`
    padding:42px 0px;
    width:100%;
    @media ${Device.laptop} {
        
        padding-left:10%;
        p{
            margin-left:auto;
            margin-right:auto;
            width:70%;
        }
    }
`

FoodMenu.propTypes = {
    theMenu: PropTypes.object,
    border:PropTypes.string,
    padding:PropTypes.string
};

export default FoodMenu;