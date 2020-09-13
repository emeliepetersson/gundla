import styled from "styled-components";
import colors from "../config/colors";
import Hero from "../components/Hero";
import SocialMedia from "../components/SocialMedia";
import Post from "../components/Post";
import Button from "../components/Button";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Carousel from "../components/Carousel";

import { fetchEntries } from "../pages/api/Contentful";

function Catering({cateringPage}) {

    return (
        <Container>
          <Hero
            imageUrl={cateringPage.hero.fields.file.url}
          />
        <div className="catering-hero-text-container">
          <Post
            title={cateringPage.title1}
            text={cateringPage.text1}
          />
          <Button>Beställ här</Button>
        </div>
        <div className="catering-menu-container">
          <h2>{cateringPage.titleCateringMenu1}</h2>
          <div className="catering-menu-content-container">
            {documentToReactComponents(cateringPage.textCateringMenu1)}
          </div>
          <h3>{cateringPage.titlePriceCateringMenu1}</h3>
          <p>{cateringPage.textPriceCateringMenu1}</p>
        </div>
        <Post
          text={cateringPage.cateringMenu2}
        />
        <Post
          text={cateringPage.cateringMenu2}
        />
        <div className="catering-order-button-container">
          <Button>Beställ här</Button>
        </div>
{        <Carousel images={cateringPage.imgCarusel} />}
        <Post
          title={cateringPage.title2}
          text={cateringPage.text2}
        />
        <SocialMedia
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
  
    return {
      props: {
        cateringPage,
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
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
  }

  .catering-menu-container {
    display: flex;
    justify-content: center;
    align-items: center; 
    flex-direction: column;
    margin-top: 60px;
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

    h3 {
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 200%;
      text-align: center;
      color: ${colors.black};
      margin-bottom: 6px;
    }

    p {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 200%;
      color: ${colors.black};
    }
  }

  .catering-order-button-container{
    min-height: 203px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;