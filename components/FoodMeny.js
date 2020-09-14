import styled from "styled-components";
import PropTypes from "prop-types";

const FoodMenu =({theMenu})=>{
    return(
     <ContainerMenu >
        { theMenu }
    </ContainerMenu >
    )
   

}

const ContainerMenu = styled.div`
    width:100%;
    padding:40px 36px 100px 36px;
    text-align: center;
    h2{
        padding:28px 0px;
        margin:0;
    }
    h3{
        padding:28px 0px 10px 0px;
    }
    p{
        padding:8px 0px;
    }
`
FoodMenu.propTypes = {
    theMenu: PropTypes.array,
  
};
export default FoodMenu;