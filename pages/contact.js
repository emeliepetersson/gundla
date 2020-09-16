import styled from "styled-components";
import { fetchEntries } from "../pages/api/Contentful";

import colors from "../config/colors";

import Hero from "../components/Hero";
import Post from "../components/Post";
import ContactForm  from '../components/ContactForm';
import Map from "../components/Map";


function Contact({contactPage, contactInfo}) {

    return (
        <Container>
          <Hero className={"contact-hero-img-container"}
            imageLandscapeUrl={contactPage.heroLandscape.fields.file.url}
            imagePortraitUrl={contactPage.heroPortrait.fields.file.url}
          />
          <Post className={"contact-hero-text-container"}
            title={contactPage.title1}
            text={contactPage.text1}
          />
          <ContactForm/>
          <Post className={"contact-form-text-container"}
            title={contactPage.title2}
            text={contactPage.text2}
          />
          <div className="contact-contact-info-container">
            <h2>{contactPage.title3}</h2>
            <p>{contactInfo.adress}</p>
            <p>{contactInfo.postcode}</p>
          </div>
          <Map/>
        </Container>
    );
  };

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

    .contact-hero-text-container {
      min-height: 50vh;
      text-align: start;
    
      h2 {
        margin-top: 48px;
        text-align: center;
      }

      p {
        text-align: start;
      }
      
      div{
        padding: 15px 35px 0;
      }
    }

    .contact-form-text-container {
      margin-top: 30px;
    }

    .contact-contact-info-container {
      height: 406px;
      width: 100%;
      
      h2 {
        margin-top: 141px;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 28px;
        text-align: center;
        color: ${colors.black};
      }
      
      p {
        margin-top: 32px;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 32px;
        text-align: center;
        color: ${colors.black};
      }

      p:last-child{
        font-weight: normal;
        margin-top: 6px;
      }
    }

  `;