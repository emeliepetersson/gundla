import styled from "styled-components";

import colors from "../config/colors";
import Hero from "../components/Hero";
import Post from "../components/Post";
import { fetchEntries } from "../pages/api/Contentful";
import SocialMedia from "../components/SocialMedia";
import ContactInfo from "../components/ContactInfo";
import device from "../config/device";

const About = ({ aboutPage, contactInfo }) => {
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

      <div className="contact-container">
        <Post
          className="questions"
          title={aboutPage.title4}
          text={aboutPage.text4}
          buttonText="Kontakta oss"
        />

        <ContactInfo
          className="contact-info"
          adress={contactInfo.adress}
          postcode={contactInfo.postcode}
          openingHours={contactInfo.openingHours}
        />
      </div>

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
  const contactInfoRes = await fetchEntries("visitingInfo");
  const contactInfoResponse = await contactInfoRes.map((i) => {
    return i.fields;
  });
  const contactInfo = contactInfoResponse[0];

  const aboutPageRes = await fetchEntries("about");
  const aboutPageResponse = await aboutPageRes.map((i) => {
    return i.fields;
  });
  const aboutPage = aboutPageResponse[0];

  return {
    props: {
      aboutPage,
      contactInfo,
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
  .contact-container {
    background-color: khaki;

    .questions {
      padding: 16px 0 70px;
    }

    .contact-info {
      padding-bottom: 180px;
    }
  }

  .social-media {
    padding: 80px 50px;
  }

  @media ${device.laptop} {
    .intro,
    .who-we-are,
    .location {
      padding-bottom: 75px;
    }

    .contact-container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 75px 0;

      .questions {
        border-right: 1px solid ${colors.dark};

        .content.only-text {
          padding: 60px 0;
          width: 50%;
        }
      }

      .contact-info,
      .questions {
        padding: 0;
        width: 40%;
      }
    }
  }
`;

export default About;
