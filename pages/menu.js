import styled from "styled-components";
import Hero from "../components/Hero";
import colors from "../config/colors";
import { fetchEntries } from "../pages/api/Contentful";
import Device from "../config/device";
import Post from "../components/Post";
import FoodMenu from "../components/FoodMeny";

const Menu =({menuPage,menu})=> {
    
  
    return (
      
        <Container>
         <br>
         </br> 
       
        <Hero 
          imagePortraitUrl={menuPage.heroDesktop.fields.file.url}
          imageLandscapeUrl={menuPage.heroMobile.fields.file.url}
          altText={menuPage.heroMobile.fields.description}
        /> 

           <FoodMenu
              theMenu={menu}
              border={"border-right"}
           />
        
        <Post
          className={"menu-lux"}
          imageUrl={menuPage.ImageLuxury.fields.file.url}
          altText={menuPage.ImageLuxury.fields.description}
          title={menuPage.titleLuxury}
          text={menuPage.textLuxury}
          buttonText={"Till catering"}
        /> 

        <Wrapper>
            <Post
              className="menu-req"
              title={menuPage.titleRequests}
              text={menuPage.textRequests}
              buttonText={"Kontakta"}
            /> 
         
          <AllergyContainer >
            <Post
              className="allergy-text"
              title={menuPage.titleAllergy}
              text={menuPage.textAllergy}
            />
          <AllergyLogos>
         
                {menuPage.logos.map((L,index) =>{
                  return(
                  <div key={index}>
                    <img 
                        src={L.fields.file.url}
                        alt={L.fields.description}
                        />
                        <p>{L.fields.title}</p>
                  </div>
                )})
                }
            </AllergyLogos >
          </AllergyContainer>
          </Wrapper>
        </Container>

    )
  }
export default Menu

  const Container = styled.div`

  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  ,div  {
     width:100%;  
     
     .image-container{
      max-height:500px;
      
      }
  }
 .menu-lux , .menu-req , .content, .only-text, .allergy-text {
   padding:0;
 }
 .menu-lux .content{
   padding:48px 10% 64px 10%;
 }
 
   @media ${Device.laptop} {
    .menu-lux , .menu-req , .only-text, .allergy-text {
      
      padding:75px 10% 75px 10%;
          .content{
              padding:0;
            
              }    
            }
        }
        .menu-lux .content{
          padding-left:12.09%;
          min-width:50%;;
          align-self:center;
        }
  
  `;

const Wrapper = styled.div`
      background:${colors.lightGrey};
      padding:48px 10% 64px 10%;
      .allergy-text .content{
        padding-top:48px;
        padding-bottom:0px;
      }
    
      p,h2{
        text-align:center;
      }
      .content{
        max-width:400px;
      }
      @media ${Device.laptop} {
        display:flex;
        flex-direction:row;
        align-items:center;
     
        padding:97px 10%;
        
        .menu-req, .allergy-text, .content {
            padding:0;
            margin:0px;
        }
         .menu-req, .allergy-text{.content{
           margin:0px;
           width:100%;
       
             text-align:center;
           button{
             align-self:center;
           }
         }}
       .menu-req{
          min-width:50%;
          max-width:400px;
          border-right:1px solid ${colors.lightBlack};
          padding-right:12%;
           p{
             text-align:left;
           }
          
        }
        .menu-req{
          padding-top:107px;
          padding-bottom:107px;
        }
        
      
    }
  `;

  const AllergyContainer = styled.div`
    .hello{
     
    }
    
      @media ${Device.laptop} {
        align-self:center;
         padding-left:12%;
         min-width:50%;
          max-width:350px;
          
          padding-top:107px;
          padding-bottom:107px;
      
         .allergy-text .content{
           padding-top:0;
           p{
             text-align:left;
              padding:2px;
           }
         }
        
      
      }
    
  ` 
const AllergyLogos = styled.div`
position:relative;
padding-top:34px;
width:100%;
display:flex;
min-width:50%;
max-width:350px;
justify-content: center;

        p{
          position:absolute;
          margin:0;
          bottom:0px;
          left:0px;
          text-align:center;
          width:100%;
        
        }
    div{
       position:relative;
        padding:0px 34px;
        height:55px;
        width:auto;
    
     
        img{
          display:block;
          margin:0 auto;
          padding-bottom:5px;
          
        }
    }
`

export const getStaticProps = async () => {
  const resMenuPage = await fetchEntries("menySida");

  const responseMenuPage = await resMenuPage.map((i) => {
    return i.fields
  })
  const menuPage = responseMenuPage[0];

  const resMenu = await fetchEntries("meny");
  const responseMenu = await resMenu.map((i) => {
    return i.fields
  })
  const menu = responseMenu[0];

  return {

    props: {
      menuPage,
      menu
    }
  };

}