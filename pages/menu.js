import styled from "styled-components";
import Hero from "../components/Hero";
import colors from "../config/colors";
import { fetchEntries } from "../pages/api/Contentful";

import Post from "../components/Post";
import FoodMenu from "../components/FoodMeny";



const Menu =({menuPage,menu})=> {
    
 
    return (
        
        <Container>
        <Hero 
              imageUrl={menuPage.hero.fields.file.url}
              altText={menuPage.hero.fields.description}
        /> 

           <FoodMenu
              theMenu={menu}
              border={"border-right"}
           />
          <Post
            className="menu-req" 
            title={menuPage.titleRequests}
            text={menuPage.textRequests}
            buttonText={"Kontakta"}
          /> 
        <Post
         
          imageUrl={menuPage.ImageLuxury.fields.file.url}
          altText={menuPage.ImageLuxury.fields.description}
          title={menuPage.titleLuxury}
          text={menuPage.textLuxury}
          buttonText={"Till catering"}
        /> 
        </Container>

    )
  }
export default Menu

export const getStaticProps = async () => {
  const resMenuPage = await fetchEntries("menySida");
 
  const responseMenuPage = await resMenuPage.map((i)=>{
       return i.fields
  })
  const menuPage = responseMenuPage[0];

  const resMenu = await fetchEntries("meny");
  const responseMenu = await resMenu.map((i) => {
    return i.fields
  })
  const menu = responseMenu[0];

  return {

    props:{
      menuPage,
      menu
    }
  };
  
}

  
 

  const Container = styled.div`
  min-height: 100vh;
  width:100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background:white;
  hr{
    width:100%;
    border:1px solid ${colors.black};
    background:${colors.black};
  }
  .menu-req{
    background:${colors.lightGrey};
  }
  .background-image{
    z-index:0;
  }
  `;

  