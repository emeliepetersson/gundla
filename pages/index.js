import styled from "styled-components";

import colors from "../config/colors";
import Hero from "../components/Hero";
import ContactInfo from "../components/ContactInfo";
import SocialMedia from "../components/SocialMedia";
import Post from "../components/Post";
import Button from "../components/Button";
import { fetchEntries } from "../pages/api/Contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Home = ({ contactInfo, landingPage }) => {
  return (
    <Container>
      <Hero
        fullScreen={true}
        imageUrl="/images/hero-test.jpg"
        showIcon={true}
        text={landingPage.mainTitle}
      />
      <Post
        buttonText="Till vår meny"
        imageUrl={landingPage.image1.fields.file.url}
        altText={landingPage.image1.fields.description}
        title={landingPage.title1}
        text={documentToReactComponents(landingPage.text1)}
      />

      <Post
        title={landingPage.title2}
        text={documentToReactComponents(landingPage.text2)}
      />

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
        text={documentToReactComponents(landingPage.text3)}
      />

      <Post
        buttonText="Till catering"
        imageUrl={landingPage.image4.fields.file.url}
        altText={landingPage.image4.fields.description}
        title={landingPage.title4}
        text={documentToReactComponents(landingPage.text4)}
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
