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
        <AtMedia>
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
          </AtMedia>
        </Container>

    )
  }
export default Menu

  const Container = styled.div`

  min-height: 100vh;
  width:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  div{
     width:100%;
  }
  .menu-req .content{
    padding:48px 0px 0px;
    text-align:center;
  }
  .menu-lux{
    padding-bottom:120px;
    
  }

  
   @media ${Device.laptop} {
     .menu-lux .content{
        padding-top:7.5%;
        padding-right:0px;
        width:50%;
      }
    }
  
  `;



  const AllergyContainer = styled.div`
    padding-bottom:80px;
    h2{
      font-size:16px;
    }
  .allergy-text {
      padding:2px;
        .content{  
            text-align:center;
            width:100%;
            padding:48px 0px 0px
        }
  }
      @media ${Device.laptop} {
        align-self:center;
        padding-left:10%;
        p{
          text-align:left;
          max-width:300px;
          align-self:center;
        }
      }
    
  ` 
const AllergyLogos = styled.div`

 padding:30px 0px;
 width:100%;
 display:flex;
 justify-content: center;

    div{
       position:relative;
        padding:0px 27px;
        height:55px;
        width:auto;
        p{
          position:absolute;
          bottom:0px;
          left:0px;
          text-align:center;
          width:100%;
        }
     
        img{
          display:block;
          margin:0 auto;
          padding-bottom:5px;
          
        }
    }
`
  const AtMedia = styled.div`
        background:${colors.lightGrey};
        padding:80px 10%;
      

      @media ${Device.laptop} {
        display:flex;
        flex-direction:row;

       .menu-req{
          padding-right:10%;
          border-right:1px solid black;
          .content{
            max-width:300px;
            width:100%;
            padding:0;
            margin: 0;
            h2{
              
              padding-bottom:20px;
            }
            p{
              margin-top:20px;
              margin-bottom:20px;
             
            }
            button{
              align-self:center;
            }
           
          }
        }
        
      
    }
  `;
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