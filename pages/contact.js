import styled from "styled-components";
import { fetchEntries } from "../pages/api/Contentful";
import colors from "../config/colors";
import device from "../config/device";
import sunflowerBg from "../config/sunflowerBackground";
import Hero from "../components/Hero";
import Post from "../components/Post";
import ContactForm from "../components/ContactForm";
import Map from "../components/Map";
import options from "../config/richTextOptions";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";



function Contact({ contactPage, contactInfo }) {

  return (
    <Container>
      <Hero
        className="contact-hero-img-container"
        imageLandscapeUrl={contactPage.heroLandscape.fields.file.url}
        imagePortraitUrl={contactPage.heroPortrait.fields.file.url}
        altText={contactPage.heroPortrait.fields.description}
      />
      <Post
        className="contact-hero-text-container"
        title={contactPage.title1}
        text={contactPage.text1}
      />
      <div className="contact-form-container" id="form">
        <div className="contact-form-form">
          <ContactForm />
        </div>
        <div className="contact-form-text">
          <h2 tabIndex="0">{contactPage.title2}</h2>
          <div>{documentToReactComponents(contactPage.text2, options)}</div>
        </div>
      </div>
      <div className="contact-address-info-container">
        <div className="contact-address-info">
          <h2 tabIndex="0">{contactPage.title3}</h2>
          <p tabIndex="0">{contactInfo.adress}</p>
          <p tabIndex="0">{contactInfo.postcode}</p>
        </div>
        <Map className="contact-map" />
      </div>
    </Container>
  );
}

export default Contact;

export const getStaticProps = async () => {
  const contactInfoRes = await fetchEntries("visitingInfo");
  const contactInfoResponse = await contactInfoRes.map((i) => {
    return i.fields;
  });

  const contactInfo = contactInfoResponse[0];

  const contactPageRes = await fetchEntries("contactpage");
  const contactPageResponse = await contactPageRes.map((i) => {
    return i.fields;
  });

  const contactPage = contactPageResponse[0];

  return {
    props: {
      contactInfo,
      contactPage,
    },
  };
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  .contact-hero-text-container {
    min-height: 50vh;
    text-align: start;
    ${sunflowerBg}

    h2 {
      margin-top: 33px;
      text-align: center;
    }

    p {
      margin-top: 20px;
    }

    p:first-child {
      margin-top: 18px;
      text-align: start;
    }

    div {
      padding: 15px 35px 0;
    }
  }

  .contact-form-container {
    width: 100%;
    padding: 48px 38px 64px;
    background: ${colors.greenBackground};

    .contact-form-text  {
      padding-top: 174px;

      p {
        margin-top: 18px;
      }
    }
  }

  .contact-address-info-container {
    width: 100%;
    .contact-address-info {
      width: 100%;
      h2 {
        padding-top: 48px;
        font-style: normal;
        font-weight: bold;
        line-height: 28px;
        text-align: center;
        color: ${colors.black};
      }

      p {
        margin-top: 32px;
        font-style: normal;
        font-weight: bold;
        line-height: 32px;
        text-align: center;
        color: ${colors.black};
      }

      p:last-child {
        font-weight: normal;
        margin-top: 6px;
        padding-bottom: 64px;
      }
    }

    .contact-map {
      width: 100%;
      height: 406px;
    }
  }

  @media ${device.laptop} {
    .contact-form-container {
      padding: 150px 143px 100px;
      background: ${colors.greenBackground};
      display: flex;
      flex-direction: row;

      .contact-form-form {
        display: flex;
        justify-content: flex-end;
        margin-right: 40px;
      }

      .contact-form-text  {
        margin-left: 40px;
        padding-top: 0px;
        p {
          width: 400px;
          margin-top: 18px;
        }
      }
    }

    .contact-form-container > div {
      width: 50%;
    }
    .contact-address-info-container {
      width: 100%;
      height: 600px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row-reverse;

      .contact-address-info {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 576px;
        height: 450px;

        h2 {
          width: 320px;
        }
      }

      .contact-map {
        width: 576px;
        height: 450px;
      }
    }
  }
`;
