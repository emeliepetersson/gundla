import styled from "styled-components";

import colors from "../config/colors";
import texture from "../config/texture";
import sunflowerBg from "../config/sunflowerBackground";
import device from "../config/device";
import Hero from "../components/Hero";
import Post from "../components/Post";
import SocialMedia from "../components/SocialMedia";
import ContactInfo from "../components/ContactInfo";
import Carousel from "../components/Carousel";
import { fetchEntries } from "../pages/api/Contentful";

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

      <Carousel
        images={aboutPage.imgCarusel}
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
          {
            url: "/icons/instagram-black.png",
            altText: "Instagram icon",
            link: "https://www.instagram.com/gundlagardscafe/",
          },
          {
            url: "/icons/facebook-black.png",
            altText: "Facebook icon",
            link: "https://www.facebook.com/gundlagardscafe",
          },
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
  .intro,
  .who-we-are,
  .contact-container {
    padding-bottom: 64px;

    p {
      margin-top: 1px;
    }

    button {
      margin-top: 32px;
    }
  }

  .intro {
    ${sunflowerBg}
  }

  .who-we-are {
    background-color: ${colors.greenBackground};

    .content {
      p:nth-child(2) {
        padding-bottom: 25px;
      }
    }
  }

  .contact-container {
    ${texture}

    .questions {
      padding: 16px 0 34px;
      text-align: center;

      h2 {
        text-align: center;
      }
    }
  }

  @media ${device.laptop} {
    .intro {
      padding: 137px;

      .content {
        width: 35%;
      }
    }

    .who-we-are {
      padding-bottom: 75px;
      .content {
        padding-left: 87px;
        padding-top: 0;
        margin: auto 0;
        width: 42%;
      }
    }

    .who-we-are {
      flex-direction: row-reverse;

      .content {
        padding: 0 87px 0 0;
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
          padding: 141px 0;
          width: 70%;

          button {
            align-self: center;
          }
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
