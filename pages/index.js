import styled from "styled-components";

import colors from "../config/colors";
import Hero from "../components/Hero";
import ContactInfo from "../components/ContactInfo";
import SocialMedia from "../components/SocialMedia";
import Post from "../components/Post";
import { fetchEntries } from "../pages/api/Contentful";

export default function Home({ contactInfo }) {
  return (
    <Container>
      <Hero
        fullScreen={true}
        imageUrl="/images/hero-test.jpg"
        showIcon={true}
        text="Genuin enkelhet
          i ranchanda"
      />
      <Post
        buttonText="Till vår meny"
        imageUrl="/images/hero-test.jpg"
        altText="example picture"
        title="Välkommen till Gundla Gårdscafé"
        text="Här kan du avnjuta härlig mat eller fika, eller bara ha en skön stund."
      />

      <ContactInfo
        adress={contactInfo.adress}
        postcode={contactInfo.postcode}
        openingHours={contactInfo.openingHours}
      />

      <SocialMedia
        icons={[
          { url: "/icons/instagram-black.png", altText: "Instagram icon" },
        ]}
        text="Följ oss på Instagram!"
      />
    </Container>
  );
}

export const getStaticProps = async () => {
  const res = await fetchEntries("visitingInfo");
  const response = await res.map((i) => {
    return i.fields;
  });
  const contactInfo = response[0];
  return {
    props: {
      contactInfo,
    },
  };
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
