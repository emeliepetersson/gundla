import styled from "styled-components";
import Hero from "../components/Hero";
import colors from "../config/colors";
import { fetchEntries } from "../pages/api/Contentful";
import Device from "../config/device";
import Post from "../components/Post";
import FoodMenu from "../components/FoodMeny";


const Menu =({menuPage,menu})=> {
    
    console.log(menuPage)
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
  width:100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background:white;
 
  .background-image{
    z-index:0;
  }
  .menu-lux .content{
    padding-top:5%;
  }

  
   @media ${Device.laptop} {
       padding-top:7%;
        
       }
    }
  
  `;



  const AllergyContainer = styled.div`
    width:100%;
    padding-bottom:100px;

  .allergy-text {
      padding:0px;
      .content{
          width:100%;
          padding-bottom:0px;
      }
  }
      @media ${Device.laptop} {
        padding-left:10%;
      }
    
  ` 
const AllergyLogos = styled.div`
 display:flex;
    flex-direction:row;
    justify-content:center;
    div{
        padding:30px;
        text-align:center;
        img{
          padding-bottom:10px;
        }
    }
`
  const AtMedia = styled.div`
        background:${colors.lightGrey};
        width:100%;
        padding:100px 10%;
        .menu-req .content{
          padding:0;
          h2{
            padding-bottom:45px;
          }
          p{
            margin:0;
            padding:0px 10px;
          }
        }

      @media ${Device.laptop} {
        display:flex;
        flex-direction:row;
 
       
       .menu-req{
          padding-right:10%;
          border-right:1px solid black;
          .content{
            width:100%;
            padding:0;
            margin: 0;
            h2{
              padding-bottom:20px;
            }
            p{
              margin-top:30px;
              margin-bottom:20px;
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