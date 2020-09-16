import { useEffect } from "react";
import styled from "styled-components";

import colors from "../config/colors";
import Hero from "../components/Hero";
import ContactInfo from "../components/ContactInfo";
import SocialMedia from "../components/SocialMedia";
import Post from "../components/Post";
import Button from "../components/Button";
import { fetchEntries } from "../pages/api/Contentful";
import device from "../config/device";

const Home = ({ contactInfo, landingPage }) => {
  useEffect(() => {
    !(function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = "https://weatherwidget.io/js/widget.min.js";
        fjs.parentNode.insertBefore(js, fjs);
      }
    })(document, "script", "weatherwidget-io-js");
  }, []);

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
        <div className="wrapper">
          <Post
            className="text"
            title={landingPage.title2}
            text={landingPage.text2}
          />

          <a
            className="weatherwidget-io"
            href="https://forecast7.com/sv/57d7111d97/gothenburg/"
            data-font="Roboto"
            data-icons="Climacons Animated"
            data-mode="Current"
            data-days="3"
            data-theme="original"
            data-basecolor="rgba(255, 255, 255, 0)"
            data-textcolor="#000000"
            data-mooncolor="#febc2f"
          ></a>

          <Button>Hitta hit</Button>
        </div>

        <ContactInfo
          className="contact-info"
          adress={contactInfo.adress}
          postcode={contactInfo.postcode}
          openingHours={contactInfo.openingHours}
        />
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
    padding-bottom: 120px;
  }

  .contact {
    background-color: palevioletred;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 16px 0 170px;
    width: 100%;
    position: relative;

    .wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;

      .text {
        padding: 0;
        text-align: center;
        width: 80%;
      }

      .weatherwidget-io {
        width: 200px;
        margin: 30px 0%;
      }

      button {
        position: absolute;
        bottom: 170px;
      }
    }

    .contact-info {
      padding-bottom: 130px;
    }
  }

  .event {
    padding-bottom: 120px;
  }

  .catering {
    background-color: blanchedalmond;
    padding-bottom: 120px;
  }

  .social-media {
    background-color: peachpuff;
  }

  @media ${device.laptop} {
    .intro {
      padding-bottom: 75px;
    }

    .contact {
      padding: 75px 0;
      flex-direction: row;
      justify-content: center;

      .wrapper {
        border-right: 1px solid ${colors.dark};
        padding: 60px 0;

        .text {
          width: 100%;
        }
        .content.only-text {
          padding: 0;
          width: 50%;
        }

        button {
          position: initial;
          margin-top: 30px;
        }
      }

      .contact-info,
      .wrapper {
        width: 40%;
      }

      .contact-info {
        padding: 0;
      }
    }
    .event,
    .catering {
      padding-bottom: 75px;
    }

    .catering {
      flex-direction: row-reverse;

      .content {
        padding: 106px 130px 0 0;
      }
    }
  }
`;

export default Home;
