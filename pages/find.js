import { fetchEntries } from "../pages/api/Contentful";
import styled from "styled-components";
import Hero from "../components/Hero";
import Post from "../components/Post";
import colors from "../config/colors";
import sunflowerBg from "../config/sunflowerBackground";
import ContactInfo from "../components/ContactInfo";
import Map from "../components/Map";
import Device from "../config/device";
import Textures from "../config/texture";

function Find({ find, contactInfo }) {
  return (
    <Container>
      <Hero
        imagePortraitUrl={find.heroDesktop.fields.file.url}
        imageLandscapeUrl={find.heroMobile.fields.file.url}
        altText={find.heroMobile.fields.description}
      />
      <Post className="hero-text" title={find.title} text={find.text} />
      <ContactContainer>
        <ContactInfo
          className="map-info"
          adress={contactInfo.adress}
          postcode={contactInfo.postcode}
          openingHours={contactInfo.openingHours}
        />
        <Map className="map" />
      </ContactContainer>
      <Post
        className="travel"
        imageUrl={find.imageTravel.fields.file.url}
        altText={find.imageTravel.fields.description}
        title={find.titleTravel}
        text={find.textTravel}
        buttonText={"Till Västtrafik"}
      />

      <Post
        className="find-car"
        imageUrl={find.imageCar.fields.file.url}
        altText={find.imageCar.fields.description}
        title={find.titleCar}
        text={find.textCar}
      />

      <Post
        className="access"
        imageUrl={find.imageAccess.fields.file.url}
        altText={find.imageAccess.fields.description}
        title={find.titleAccess}
        text={find.textAccess}
      />
      <Post
        className="animal"
        imageUrl={find.imageAnimal.fields.file.url}
        altText={find.imageAnimal.fields.description}
        title={find.titleAnimal}
        text={find.textAnimal}
      />
    </Container>
  );
}

export default Find;

export const getStaticProps = async () => {
  const contactInfoRes = await fetchEntries("visitingInfo");
  const contactInfoResponse = await contactInfoRes.map((i) => {
    return i.fields;
  });
  const contactInfo = contactInfoResponse[0];

  const findRes = await fetchEntries("hittaOss");
  const findResponse = await findRes.map((i) => {
    return i.fields;
  });

  const find = findResponse[0];

  return {
    props: {
      contactInfo,
      find,
    },
  };
};

const Container = styled.div`
    width:100%;
    overflow:hidden;
    .access,.animal{
        .content{
            min-height:300px;
        }
      
    }
    .hero-text, .find-car, .access ,.travel, .animal{
        padding-bottom:0;
    } 
    .hero-text {
${sunflowerBg}
    }
    .content{
        padding:48px 10% 64px 10%;
    }
    
   @media ${Device.laptop} {
        .hero-text{
             padding:140px 10.1% 140px 10.1%;
                .content{
                    min-width:543px;
                    h2{
                     text-align:left;
                      padding-bottom:35px;
                    }
                }
               
                p{
                    padding:0px;
                    margin:0px;
                }
            }
            .find-car,.access,.travel, .animal{
                   padding:75px 10% 75px 10%;
                .content{
                    height:100%;
                    padding-top:0;
                    display:flex;
                    justify-content:center;
                    align-self:center;
                    padding:0;
                }
            }
            .find-car,.animal{
                background:${colors.lightBlue};
                flex-direction:row-reverse;
                .content{
          
                    padding-left:0;
                    padding-right:7.5%;
                }
            } 
            .access,.travel{
                .content{
                     padding-left:7.5%;
                }
            }            


        
        }
         

    }
`;
const ContactContainer = styled.div`
  background: ${colors.lightBlue};
  display: flex;
  flex-direction: column;
  .map-info {
    padding-bottom: 97px;
    padding-top: 75px;
  }

  .map {
    height: 406px;
    iframe {
      min-height: 100%;
    }
  }
  @media ${Device.laptop} {
    padding: 75px 10%;

    .map-info,
    .map {
      width: 50%;
      padding: 0;
    }
    .map-info {
      padding: 0px;
      padding-top: 0px;
      margin: 0;
    }

    flex-direction: row;
  }
`;
