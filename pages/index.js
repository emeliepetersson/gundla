import styled from "styled-components";

import colors from "../config/colors";
import Hero from "../components/Hero";
import ContactInfo from "../components/ContactInfo";
import SocialMedia from "../components/SocialMedia";
import Post from "../components/Post";
import Button from "../components/Button";
import { fetchEntries } from "../pages/api/Contentful";

const Home = ({ contactInfo, landingPage }) => {
  return (
    <Container>
      <Hero
        fullScreen={true}
        imageLandscapeUrl={landingPage.heroLandscape.fields.file.url}
        imagePortraitUrl={landingPage.heroPortrait.fields.file.url}
        altText={landingPage.heroPortrait.fields.description}
        showIcon={true}
        text={landingPage.mainTitle}
      />

      <div id="scroll-to"></div>
      <Post
        className="intro"
        title={landingPage.title1}
        text={landingPage.text1}
        buttonText="Till vår meny!"
        imageUrl={landingPage.image1.fields.file.url}
        altText={landingPage.image1.fields.description}
      />

      <div className="contact">
        <Post title={landingPage.title2} text={landingPage.text2} />

        <ContactInfo
          adress={contactInfo.adress}
          postcode={contactInfo.postcode}
          openingHours={contactInfo.openingHours}
        />

        <Button>Hitta hit</Button>
      </div>

      <Post
        className="event"
        buttonText="Se alla evenemang"
        imageUrl={landingPage.image3.fields.file.url}
        altText={landingPage.image3.fields.description}
        title={landingPage.title3}
        text={landingPage.text3}
      />

      <Post
        className="catering"
        buttonText="Till catering"
        imageUrl={landingPage.image4.fields.file.url}
        altText={landingPage.image4.fields.description}
        title={landingPage.title4}
        text={landingPage.text4}
      />

      <SocialMedia
        className="social-media"
        icons={[
          { url: "/icons/instagram-black.png", altText: "Instagram icon" },
        ]}
        text="Följ oss på Instagram!"
      />
    </Container>
  );
};

export const getStaticProps = async () => {
  const contactInfoRes = await fetchEntries("visitingInfo");
  const contactInfoResponse = await contactInfoRes.map((i) => {
    return i.fields;
  });
  const contactInfo = contactInfoResponse[0];

  const landingPageRes = await fetchEntries("landingpage");
  const landingPageResponse = await landingPageRes.map((i) => {
    return i.fields;
  });

  const landingPage = landingPageResponse[0];

  return {
    props: {
      contactInfo,
      landingPage,
    },
  };
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .intro {
    background-color: cornflowerblue;
    padding-bottom: 120px;
  }

  .contact {
    background-color: palevioletred;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 16px 0 170px;
    width: 100%;
  }

  .event {
    background-color: goldenrod;
    padding-bottom: 120px;
  }

  .catering {
    background-color: blanchedalmond;
    padding-bottom: 120px;
  }

  .social-media {
    padding: 64px 0;
    background-color: peachpuff;
  }
`;

export default Home;
