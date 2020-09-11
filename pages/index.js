import styled from "styled-components";

import colors from "../config/colors";
import Hero from "../components/Hero";
import ContactInfo from "../components/ContactInfo";
import SocialMedia from "../components/SocialMedia";
import Post from "../components/Post";
import Button from "../components/Button";
import { fetchEntries } from "../pages/api/Contentful";

const Home = ({ contactInfo, landingPage }) => {
  console.log(landingPage.title1);
  return (
    <Container>
      <Hero
        fullScreen={true}
        imageUrl={landingPage.hero.fields.file.url}
        showIcon={true}
        text={landingPage.mainTitle}
      />

      <Post
        title={landingPage.title1}
        text={landingPage.text1}
        buttonText="Till vår meny!"
        imageUrl={landingPage.image1.fields.file.url}
        altText={landingPage.image1.fields.description}
      />

      <Post title={landingPage.title2} text={landingPage.text2} />

      <ContactInfo
        adress={contactInfo.adress}
        postcode={contactInfo.postcode}
        openingHours={contactInfo.openingHours}
      />

      <Button>Hitta hit</Button>

      <Post
        buttonText="Se alla evenemang"
        imageUrl={landingPage.image3.fields.file.url}
        altText={landingPage.image3.fields.description}
        title={landingPage.title3}
        text={landingPage.text3}
      />

      <Post
        buttonText="Till catering"
        imageUrl={landingPage.image4.fields.file.url}
        altText={landingPage.image4.fields.description}
        title={landingPage.title4}
        text={landingPage.text4}
      />

      <SocialMedia
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
`;

export default Home;
