import styled from "styled-components";

import colors from "../config/colors";
import Hero from "../components/Hero";
import Post from "../components/Post";
import SocialMedia from "../components/SocialMedia";
import ContactInfo from "../components/ContactInfo";
import Carousel from "../components/Carousel";
import { fetchEntries } from "../pages/api/Contentful";
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

      <Carousel images={aboutPage.imgCarusel} 
        title={aboutPage.title3}
        text={aboutPage.text3}
        buttonText="Hitta hit"
      />

      {/* <div className="carousel-container">
        <Carousel images={aboutPage.imgCarusel} />

        <Post
          className="location"
          title={aboutPage.title3}
          text={aboutPage.text3}
          buttonText="Hitta hit"
        />
      </div> */}

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
        text="Följ oss på sociala medier!"
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
    padding-bottom: 108px;
    background-color: cornflowerblue;
  }

  .carousel-container {
    background-color: palevioletred;

    .location {
      padding-bottom: 108px;
    }
    .content.only-text {
      h2 {
        text-align: left;
      }
    }
  }

  .contact-container {
    background-color: khaki;

    .questions {
      padding: 16px 0 70px;
      text-align: center;
    }

    .contact-info {
      padding-bottom: 180px;
    }
  }

  @media ${device.laptop} {
    .intro,
    .who-we-are,
    .location {
      padding-bottom: 75px;
    }

    .who-we-are {
      flex-direction: row-reverse;

      .content {
        padding: 106px 130px 0 0;
      }
    }

    .carousel-container {
      display: flex;
      align-items: center;
      justify-content: center;

      .location {
        padding: 106px 0 0 130px;
      }

      .content.only-text {
        width: 50%;
        margin: 0;
        padding: 0;
      }
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
          padding: 90px 0;
          width: 55%;
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
