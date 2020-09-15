import styled from "styled-components";
import Device from "../config/device";
import Color from "../config/colors";
import PropTypes from "prop-types";
import {documentToReactComponents } from '@contentful/rich-text-react-renderer';
const FoodMenu =({theMenu})=>{ 
   
    return(
        <ContainerMenu>
            <FoodInfo>
                { documentToReactComponents(theMenu.menyInfo) }
            </FoodInfo>
            
            <Food >
                {documentToReactComponents(theMenu.meny)}
            </Food>
        </ContainerMenu>
   )
        
     
}

const ContainerMenu = styled.div`
    background:${Color.lightGrey};
    width:100%;
    padding:40px 9% 100px 9%;
    display:flex;
    flex-direction: column;
    text-align:center;
    p,h1,h2,h3,h4,h5,h6{
        padding:14px 0px;
    }
     @media ${Device.laptop} {
        flex-direction: row;
        padding:75px 9% 75px 9%;
    }

    
`
const FoodInfo = styled.div`
   "border-bottom":1px solid ${Color.lightBlack};
  
    padding-bottom:42px;
    width:100%;
    p{
     text-align:left;   
    }
      @media ${Device.laptop} {
        border-right:1px solid black;
        padding-right:10%;
        padding-top:5%;
        p{
            text-align:center;
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