import styled from "styled-components";

import colors from "../config/colors";
import Hero from "../components/Hero";
import Post from "../components/Post";
import { fetchEntries } from "../pages/api/Contentful";

const About = ({ aboutPage }) => {
  return (
    <Container>
      <Hero imageUrl="/images/hero-test-portrait.jpg" />

      <Post title={aboutPage.title1} text={aboutPage.text1} />

      <Post
        imageUrl={aboutPage.image2.fields.file.url}
        altText={aboutPage.image2.fields.description}
        title={aboutPage.title2}
        text={aboutPage.text2}
      />

      <Post title={aboutPage.title3} text={aboutPage.text3} />

      <Post title={aboutPage.title4} text={aboutPage.text4} />
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

const Container = styled.div``;

export default About;
