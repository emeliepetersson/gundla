import styled from "styled-components";

import colors from "../config/colors";
import Hero from "../components/Hero";
import Post from "../components/Post";
import { fetchEntries } from "../pages/api/Contentful";
import SocialMedia from "../components/SocialMedia";

const About = ({ aboutPage }) => {
  return (
    <Container>
      <Hero
        imageLandscapeUrl={aboutPage.heroLandscape.fields.file.url}
        imagePortraitUrl={aboutPage.heroPortrait.fields.file.url}
        altText={aboutPage.heroPortrait.fields.description}
      />

      <Post className="intro" title={aboutPage.title1} text={aboutPage.text1} />

      <Post
        className="who-we-are"
        imageUrl={aboutPage.image2.fields.file.url}
        altText={aboutPage.image2.fields.description}
        title={aboutPage.title2}
        text={aboutPage.text2}
      />

      <Post
        className="location"
        title={aboutPage.title3}
        text={aboutPage.text3}
        buttonText="Hitta hit"
      />

      <Post
        className="questions"
        title={aboutPage.title4}
        text={aboutPage.text4}
        buttonText="Kontakta oss"
      />

      <SocialMedia
        className="social-media"
        icons={[
          { url: "/icons/instagram-black.png", altText: "Instagram icon" },
          { url: "/icons/facebook-black.png", altText: "Facebook icon" },
        ]}
        text="Följ oss på Instagram och Facebook för fler bilder och uppdateringar!"
      />
    </Container>
  );
};

export const getStaticProps = async () => {
  const aboutPageRes = await fetchEntries("about");
  const aboutPageResponse = await aboutPageRes.map((i) => {
    return i.fields;
  });
  const aboutPage = aboutPageResponse[0];

  return {
    props: {
      aboutPage,
    },
  };
};

const Container = styled.div`
  .intro {
    padding-bottom: 150px;
  }

  .who-we-are {
    padding-bottom: 260px;
    background-color: cornflowerblue;
  }

  .location {
    background-color: palevioletred;
    padding-bottom: 150px;
  }

  .questions {
    background-color: goldenrod;
    padding-bottom: 150px;
  }

  .social-media {
    padding: 80px 50px;
  }
`;

export default About;
