import styled from "styled-components";
import colors from "../config/colors";
import Hero from "../components/Hero";
import SocialMedia from "../components/SocialMedia";
import Post from "../components/Post";
import Button from "../components/Button";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Carousel from "../components/Carousel";

import { fetchEntries } from "../pages/api/Contentful";

function Catering({cateringPage, cateringMenuArrayOfObjects}) {
    function compare(a, b) {

      let comparison = 0;
      if (a.order > b.order) {
        comparison = 1;
      } else if (a.order < b.order) {
        comparison = -1;
      }
      return comparison;
    }
    const sortedMenuArrayOfObjects = [...cateringMenuArrayOfObjects].sort(compare);

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
        {sortedMenuArrayOfObjects && sortedMenuArrayOfObjects.map((menu, index) => {
          return (
            <div className="catering-menu-container" key={index}>
              <h2>{menu.titleCateringMenu}</h2>
                <div className="catering-menu-content-container">
                  {documentToReactComponents(menu.textCateringMenu)}
                </div>
                <h3>{menu.titlePriceCateringMenu}</h3>
              <p>{menu.textPriceCateringMenu}</p>
          </div>
          )
        })}
        <div className="catering-order-button-container">
          <Button>Beställ här</Button>
        </div>
{        <Carousel images={cateringPage.imgCarusel} />}
        <Post className="catering-review-container"
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
      padding: 48px 35px 0;
    }
  }

  .catering-menu-container {
    display: flex;
    justify-content: center;
    align-items: center; 
    flex-direction: column;
    min-height: 406px;

    h2 {
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 28px;
      text-align: center;
      color: ${colors.black};
      margin-bottom: 22px;
    }

    .catering-menu-content-container {
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      margin-bottom: 22px;
      width: 100vw;
      padding-left: 10px;
      

      p {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 200%;
        color: ${colors.black};
      }
    }
  }
  .catering-order-button-container{
    min-height: 203px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .catering-review-container {

      p{
        font-family: Roboto;
        font-style: italic;
        font-weight: normal;
        font-size: 18px;
        line-height: 24px;
        text-align: center;
        margin-bottom: 42px;
      }

      h3 {
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 200%;
      text-align: center;
      color: ${colors.black};
      margin-top: -30px;
      margin-bottom: 50px;
      }

      p:last-child {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        color: ${colors.black};
        margin-bottom: 0px;
      }
    }

  .catering-Social-media-container {
    padding-top: 55px;
    padding-bottom: 42px;
  }

`;