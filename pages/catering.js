import styled from "styled-components";
import colors from "../config/colors";
import device from "../config/device";
import Hero from "../components/Hero";
import SocialMedia from "../components/SocialMedia";
import PostMenu from "../components/postCateringMenu";
import Post from "../components/Post";
import Button from "../components/Button";
import Carousel from "../components/Carousel";

import { fetchEntries } from "../pages/api/Contentful";

function Catering({cateringPage, cateringMenuArrayOfObjects}) {

    return (
        <Container>
          <Hero className={"catering-hero-img-container"}
            imageLandscapeUrl={cateringPage.heroLandscape.fields.file.url}
            imagePortraitUrl={cateringPage.heroPortrait.fields.file.url}
          />

          <Post className="catering-hero-text-container"
            title={cateringPage.title1}
            text={cateringPage.text1}
          />

          <PostMenu 
          menuData={cateringMenuArrayOfObjects}
          />

          <div className="catering-order-button-container">
            <Button>Beställ här</Button>
          </div>
          
          <Carousel className="catering-carousel"
             images={cateringPage.imgCarusel}
             title={cateringPage.title2}
             text={cateringPage.text2}
          />

          <SocialMedia className="catering-Social-media-container"
            text={cateringPage.title3}
            icons={[
              { url: "/icons/instagram-black.png", altText: "Instagram icon" },
              { url: "/icons/facebook-black.png", altText: "Facebook icon" },
            ]}
          />
        </Container>
    );
  };
  
  export default Catering;

  export const getStaticProps = async () => {
  
    const cateringPageRes = await fetchEntries("cateringpage");
    const cateringPageResponse = await cateringPageRes.map((i) => {
      return i.fields;
    });
  
    const cateringPage = cateringPageResponse[0];

    const cateringMenuRes = await fetchEntries("cateringMenu");
    const cateringMenuResponse = await cateringMenuRes.map((i) => {
      return i.fields;
    });
  
    const cateringMenuArrayOfObjects = cateringMenuResponse;
  
    return {
      props: {
        cateringPage,
        cateringMenuArrayOfObjects,
      },
    };
  };
  

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .catering-hero-text-container {
    min-height: 50vh;
    text-align: start;
    padding-bottom: 40px;

    h2 {
      text-align: center;
    }
    div{
      padding: 48px 35px 0px;
    }
  }

  .catering-order-button-container{
    min-height: 203px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .catering-carousel{
    background: ${colors.lightBlue};
  }
  .catering-Social-media-container {
    min-height: 203px;
    background: ${colors.white};
    padding-top: 55px;
    padding-bottom: 42px;
  }

@media ${device.laptop}{
  .catering-hero-text-container {
    h2 {
    }
    div{
    }
  }

  .catering-order-button-container{
    min-height: 300px;
  }

  .catering-Social-media-container {
    min-height: 300px;
    background: ${colors.lightBlue};
    padding-top: 0px;
    padding-bottom: 0px;
  }
}
`;